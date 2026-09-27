(function(){
  const data = window.KNOWLEDGE_CANVAS_DATA;
  if(!data) throw new Error("KNOWLEDGE_CANVAS_DATA is required");

  const meta = data.meta || {};
  const categories = data.categories || {};
  const initialNodes = JSON.parse(JSON.stringify(data.nodes || []));
  const edges = JSON.parse(JSON.stringify(data.edges || []));
  const WORLD_W = meta.worldWidth || 4200;
  const WORLD_H = meta.worldHeight || 2800;
  const storageKey = `knowledge-canvas:${meta.id || "default"}:layout`;

  const canvas = document.getElementById("kc-canvas");
  const world = document.getElementById("kc-world");
  const nodeLayer = document.getElementById("kc-node-layer");
  const edgeLayer = document.getElementById("kc-edge-layer");
  const detail = document.getElementById("kc-detail");
  const detailTitle = document.getElementById("kc-detail-title");
  const detailSummary = document.getElementById("kc-detail-summary");
  const detailCat = document.getElementById("kc-detail-cat");
  const detailBody = document.getElementById("kc-detail-body");
  const zoomLabel = document.getElementById("kc-zoom-label");
  const search = document.getElementById("kc-search");
  const legend = document.getElementById("kc-legend");
  const mini = document.getElementById("kc-mini");
  const miniCanvas = document.getElementById("kc-mini-canvas");
  const miniCtx = miniCanvas.getContext("2d");
  const miniViewport = document.getElementById("kc-mini-viewport");

  document.getElementById("kc-title").textContent = meta.title || "Knowledge Canvas";
  document.getElementById("kc-subtitle").textContent = meta.subtitle || "";
  document.title = meta.title || "Knowledge Canvas";
  world.style.width = WORLD_W + "px";
  world.style.height = WORLD_H + "px";
  edgeLayer.setAttribute("width",WORLD_W);
  edgeLayer.setAttribute("height",WORLD_H);

  let nodes = loadLayout(initialNodes);
  let scale = meta.initialScale || .78;
  let tx = meta.initialX ?? -650;
  let ty = meta.initialY ?? -250;
  let isPanning = false;
  let panStart = null;
  let drag = null;
  let selected = null;

  function clone(v){ return JSON.parse(JSON.stringify(v)); }

  function loadLayout(base){
    try{
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      if(!saved || !Array.isArray(saved.nodes)) return clone(base);
      const byId = new Map(saved.nodes.map(n=>[n.id,n]));
      return clone(base).map(n=>{
        const s=byId.get(n.id);
        return s ? {...n,x:s.x,y:s.y} : n;
      });
    }catch{return clone(base)}
  }

  function categoryLabel(key){ return categories[key]?.label || key || "Other"; }
  function categoryColor(key){ return categories[key]?.color || "#8ea1bf"; }

  function renderLegend(){
    const used = [...new Set(nodes.map(n=>n.category))];
    legend.innerHTML = `<div class="kc-legend-title">结构分区</div>` + used.map(key=>
      `<div class="kc-legend-row"><span class="kc-dot" style="background:${categoryColor(key)}"></span>${categoryLabel(key)}</div>`
    ).join("");
  }

  function renderNodes(){
    nodeLayer.innerHTML="";
    for(const n of nodes){
      const el=document.createElement("div");
      const variant=n.variant ? ` kc-${n.variant}` : "";
      el.className=`kc-node${variant}`;
      el.dataset.id=n.id;
      el.style.left=n.x+"px";
      el.style.top=n.y+"px";
      const color=categoryColor(n.category);
      el.innerHTML=`<div class="kc-cat" style="color:${color}">${categoryLabel(n.category)}</div><h3>${n.title}</h3><p>${n.summary || ""}</p><span class="kc-tag">点击查看详情</span>`;
      el.addEventListener("pointerdown",nodePointerDown);
      el.addEventListener("click",e=>{e.stopPropagation();if(drag&&drag.moved)return;openDetail(n.id)});
      nodeLayer.appendChild(el);
    }
  }

  function getNodeRect(id){
    const n=nodes.find(x=>x.id===id);
    const el=nodeLayer.querySelector(`[data-id="${CSS.escape(id)}"]`);
    if(!n||!el) return null;
    return {x:n.x,y:n.y,w:el.offsetWidth,h:el.offsetHeight};
  }

  function renderEdges(){
    edgeLayer.innerHTML="";
    for(const e of edges){
      const a=getNodeRect(e.from),b=getNodeRect(e.to);
      if(!a||!b) continue;
      const ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
      const dx=bx-ax,dy=by-ay;
      const c1x=ax+dx*.42,c1y=ay+dy*.08,c2x=ax+dx*.58,c2y=ay+dy*.92;
      const p=document.createElementNS("http://www.w3.org/2000/svg","path");
      p.setAttribute("d",`M ${ax} ${ay} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${bx} ${by}`);
      p.setAttribute("class",`kc-edge${e.strong?" kc-strong":""}`);
      edgeLayer.appendChild(p);
      if(e.label){
        const t=document.createElementNS("http://www.w3.org/2000/svg","text");
        t.setAttribute("x",(ax+bx)/2);t.setAttribute("y",(ay+by)/2-6);t.setAttribute("text-anchor","middle");t.setAttribute("class","kc-edge-label");t.textContent=e.label;edgeLayer.appendChild(t);
      }
    }
  }

  function applyTransform(){
    world.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
    zoomLabel.textContent=Math.round(scale*100)+"%";
    updateMiniMap();
  }

  function nodePointerDown(e){
    e.stopPropagation();
    const id=e.currentTarget.dataset.id;
    const n=nodes.find(x=>x.id===id);
    drag={id,startX:e.clientX,startY:e.clientY,nodeX:n.x,nodeY:n.y,moved:false};
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.addEventListener("pointermove",nodePointerMove);
    e.currentTarget.addEventListener("pointerup",nodePointerUp,{once:true});
  }
  function nodePointerMove(e){
    if(!drag)return;
    const n=nodes.find(x=>x.id===drag.id);
    const dx=(e.clientX-drag.startX)/scale,dy=(e.clientY-drag.startY)/scale;
    if(Math.abs(dx)+Math.abs(dy)>3)drag.moved=true;
    n.x=Math.max(0,Math.min(WORLD_W-300,drag.nodeX+dx));
    n.y=Math.max(0,Math.min(WORLD_H-180,drag.nodeY+dy));
    const el=nodeLayer.querySelector(`[data-id="${CSS.escape(n.id)}"]`);
    el.style.left=n.x+"px";el.style.top=n.y+"px";
    renderEdges();updateMiniMap();
  }
  function nodePointerUp(e){e.currentTarget.removeEventListener("pointermove",nodePointerMove);setTimeout(()=>drag=null,0)}

  canvas.addEventListener("pointerdown",e=>{
    if(e.target.closest(".kc-node"))return;
    isPanning=true;panStart={x:e.clientX,y:e.clientY,tx,ty};canvas.classList.add("kc-grabbing");canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove",e=>{if(!isPanning)return;tx=panStart.tx+(e.clientX-panStart.x);ty=panStart.ty+(e.clientY-panStart.y);applyTransform()});
  canvas.addEventListener("pointerup",()=>{isPanning=false;canvas.classList.remove("kc-grabbing")});
  canvas.addEventListener("click",e=>{if(!e.target.closest(".kc-node"))closeDetail()});
  canvas.addEventListener("wheel",e=>{
    e.preventDefault();
    const rect=canvas.getBoundingClientRect(),mx=e.clientX-rect.left,my=e.clientY-rect.top;
    const worldX=(mx-tx)/scale,worldY=(my-ty)/scale;
    const factor=e.deltaY<0?1.10:.90,newScale=Math.max(.28,Math.min(1.7,scale*factor));
    tx=mx-worldX*newScale;ty=my-worldY*newScale;scale=newScale;applyTransform();
  },{passive:false});

  function zoomBy(f){
    const rect=canvas.getBoundingClientRect(),mx=rect.width/2,my=rect.height/2;
    const worldX=(mx-tx)/scale,worldY=(my-ty)/scale,newScale=Math.max(.28,Math.min(1.7,scale*f));
    tx=mx-worldX*newScale;ty=my-worldY*newScale;scale=newScale;applyTransform();
  }

  function fitView(){
    const xs=nodes.map(n=>n.x),ys=nodes.map(n=>n.y),maxXs=nodes.map(n=>n.x+320),maxYs=nodes.map(n=>n.y+190);
    const minX=Math.min(...xs)-120,minY=Math.min(...ys)-120,maxX=Math.max(...maxXs)+120,maxY=Math.max(...maxYs)+120;
    const rect=canvas.getBoundingClientRect(),sw=rect.width/(maxX-minX),sh=rect.height/(maxY-minY);
    scale=Math.max(.28,Math.min(1.15,Math.min(sw,sh)));
    tx=(rect.width-(maxX-minX)*scale)/2-minX*scale;ty=(rect.height-(maxY-minY)*scale)/2-minY*scale;applyTransform();
  }

  function resetLayout(){
    localStorage.removeItem(storageKey);nodes=clone(initialNodes);renderNodes();requestAnimationFrame(()=>{renderEdges();fitView();toast("已重置布局")});
  }
  function saveLayout(){
    const payload={savedAt:new Date().toISOString(),nodes:nodes.map(({id,x,y})=>({id,x,y}))};
    localStorage.setItem(storageKey,JSON.stringify(payload));toast("布局已保存到浏览器")
  }
  function exportLayout(){
    const payload={meta:{id:meta.id,title:meta.title},nodes:nodes.map(({id,x,y})=>({id,x,y}))};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${meta.id||"knowledge-canvas"}-layout.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),0);
  }

  function openDetail(id){
    selected=id;document.querySelectorAll(".kc-node").forEach(el=>el.classList.toggle("kc-selected",el.dataset.id===id));
    const n=nodes.find(x=>x.id===id);detailCat.textContent=categoryLabel(n.category);detailTitle.textContent=n.title;detailSummary.textContent=n.summary||"";
    let html="";
    if(n.details?.quote)html+=`<div class="kc-quote">${n.details.quote}</div>`;
    if(n.details?.points?.length)html+=`<div class="kc-detail-section"><h4>关键点</h4><ul>${n.details.points.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
    const related=edges.filter(e=>e.from===id||e.to===id).map(e=>{
      const outgoing=e.from===id,other=nodes.find(x=>x.id===(outgoing?e.to:e.from));
      return `${outgoing?"→":"←"} ${other?.title||""}${e.label?` · ${e.label}`:""}`;
    });
    if(related.length)html+=`<div class="kc-detail-section"><h4>结构关系</h4><ul>${related.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
    detailBody.innerHTML=html;detail.classList.add("kc-open");
  }
  function closeDetail(){selected=null;document.querySelectorAll(".kc-node").forEach(el=>el.classList.remove("kc-selected"));detail.classList.remove("kc-open")}

  search.addEventListener("input",()=>{
    const q=search.value.trim().toLowerCase();
    document.querySelectorAll(".kc-node").forEach(el=>{
      if(!q){el.classList.remove("kc-dim");return}
      const n=nodes.find(x=>x.id===el.dataset.id);
      const text=(n.title+" "+(n.summary||"")+" "+categoryLabel(n.category)).toLowerCase();
      el.classList.toggle("kc-dim",!text.includes(q));
    });
  });

  function updateMiniMap(){
    const W=miniCanvas.width,H=miniCanvas.height,sx=W/WORLD_W,sy=H/WORLD_H;
    miniCtx.clearRect(0,0,W,H);miniCtx.fillStyle="#121721";miniCtx.fillRect(0,0,W,H);
    for(const n of nodes){miniCtx.fillStyle=categoryColor(n.category);miniCtx.globalAlpha=.78;miniCtx.fillRect(n.x*sx,n.y*sy,18,7)}
    miniCtx.globalAlpha=1;
    const rect=canvas.getBoundingClientRect(),vx=(-tx/scale)*sx,vy=(-ty/scale)*sy,vw=(rect.width/scale)*sx,vh=(rect.height/scale)*sy;
    miniViewport.style.left=Math.max(0,vx)+"px";miniViewport.style.top=Math.max(0,vy)+"px";miniViewport.style.width=Math.min(W,vw)+"px";miniViewport.style.height=Math.min(H,vh)+"px";
  }
  mini.addEventListener("click",e=>{
    const r=mini.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width*WORLD_W,my=(e.clientY-r.top)/r.height*WORLD_H,cr=canvas.getBoundingClientRect();
    tx=cr.width/2-mx*scale;ty=cr.height/2-my*scale;applyTransform();
  });

  function toast(msg){
    const el=document.createElement("div");el.className="kc-toast";el.textContent=msg;document.getElementById("kc-app").appendChild(el);setTimeout(()=>el.remove(),1500)
  }

  document.querySelector('[data-action="fit"]').onclick=fitView;
  document.querySelector('[data-action="reset"]').onclick=resetLayout;
  document.querySelector('[data-action="save"]').onclick=saveLayout;
  document.querySelector('[data-action="export"]').onclick=exportLayout;
  document.querySelector('[data-action="zoom-out"]').onclick=()=>zoomBy(.88);
  document.querySelector('[data-action="zoom-in"]').onclick=()=>zoomBy(1.14);
  document.getElementById("kc-detail-close").onclick=closeDetail;

  renderLegend();renderNodes();requestAnimationFrame(()=>{renderEdges();fitView()});
  window.addEventListener("resize",applyTransform);
})();
