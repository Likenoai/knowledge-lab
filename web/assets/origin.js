
(function(){
'use strict';
const repo='Likenoai/knowledge-lab',gh='https://github.com/'+repo+'/blob/main/',api='https://api.github.com/repos/'+repo+'/contents/';
const items=[
{id:'C-LA-001',kind:'概念精释',name:'生命展开',path:'concepts/life-actualization.md',desc:'主体、可能性、展开与价值'},
{id:'A-LA-001',kind:'规范性论证',name:'依据与反驳',path:'research/life-principles/生命展开原则_规范性依据与反驳.md',desc:'规范性前提、哲学反驳和未解决问题'},
{id:'M-LA-001',kind:'核心隐喻',name:'种子与森林',path:'metaphors/种子与森林.md',desc:'生长、生成性、环境与边界'}];
const $=id=>document.getElementById(id),vp=$('viewport'),stage=$('stage'),edges=$('edges'),nodes=$('nodes');
const NS='http://www.w3.org/2000/svg';
let token='',revision=0,expanded='',scale=1,ox=0,oy=0,drag=null,area={width:1508,height:850};
const data=new Map(),scrollMemory=new Map();
function E(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=String(txt);return n}
function link(path,cls){const a=E('a',cls,'↗');a.href=gh+path;a.target='_blank';a.rel='noopener noreferrer';a.title='在 GitHub 打开 Markdown';return a}
function absLink(href,source){
 if(/^(?:javascript|data|file):/i.test(href))return null;
 try{const u=new URL(href,gh+source);return /^https?:$/.test(u.protocol)?u.href:null}catch(e){return null}
}
function inline(parent,str,source){
 const re=/(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\x60([^\x60]+)\x60|\*([^*]+)\*)/g;
 let end=0,m;
 while((m=re.exec(str))){
  if(m.index>end)parent.append(document.createTextNode(str.slice(end,m.index)));
  if(m[2]!==undefined){const url=absLink(m[3],source);if(url){const a=E('a',null,m[2]);a.href=url;a.target='_blank';a.rel='noopener noreferrer';parent.append(a)}else parent.append(document.createTextNode(m[2]))}
  else parent.append(E(m[4]!==undefined?'strong':m[5]!==undefined?'code':'em',null,m[4]||m[5]||m[6]));
  end=re.lastIndex;
 }
 parent.append(document.createTextNode(str.slice(end)));
}
function markdown(source,path){
 const content=String(source).replace(/\r\n/g,'\n').replace(/^---\n[\s\S]*?\n---\n/,'');
 const lines=content.split('\n'),root=E('div','md'),fence=String.fromCharCode(96).repeat(3);let i=0;
 const liRe=/^\s*(?:[-*+]\s+|\d+\.\s+)/;
 function node(tag,txt){const el=E(tag);inline(el,txt,path);root.append(el)}
 while(i<lines.length){
  const t=lines[i].trim();if(!t){i++;continue}
  if(t.startsWith(fence)){i++;const parts=[];while(i<lines.length&&!lines[i].trim().startsWith(fence))parts.push(lines[i++]);if(i<lines.length)i++;const pre=E('pre');pre.append(E('code',null,parts.join('\n')));root.append(pre);continue}
  const h=t.match(/^(#{1,6})\s+(.+)/);if(h){node('h'+Math.min(3,h[1].length),h[2]);i++;continue}
  if(/^---+$/.test(t)){root.append(E('hr'));i++;continue}
  if(t[0]==='>'){const b=[];while(i<lines.length&&lines[i].trim().startsWith('>'))b.push(lines[i++].trim().replace(/^>\s?/,''));node('blockquote',b.join(' '));continue}
  if(t[0]==='|'&&i+1<lines.length&&/^\s*\|?[\s|:-]+\|?\s*$/.test(lines[i+1])&&lines[i+1].includes('-')){
   const table=E('table'),cells=s=>s.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(x=>x.trim());
   const row=(line,heading)=>{const tr=E('tr');cells(line).forEach(c=>{const td=E(heading?'th':'td');inline(td,c,path);tr.append(td)});table.append(tr)};
   row(lines[i],true);i+=2;
   while(i<lines.length&&lines[i].trim().startsWith('|'))row(lines[i++],false);
   root.append(table);continue;
  }
  if(liRe.test(t)){const ordered=/^\d+\./.test(t),list=E(ordered?'ol':'ul');while(i<lines.length&&liRe.test(lines[i].trim())){const li=E('li');inline(li,lines[i++].replace(liRe,''),path);list.append(li)}root.append(list);continue}
  const p=[t];i++;while(i<lines.length&&lines[i].trim()&&!/^(#{1,6}\s|>|[-*+]\s|\d+\.\s|\|)/.test(lines[i].trim())&&!lines[i].trim().startsWith(fence))p.push(lines[i++].trim());node('p',p.join(' '));
 }
 return root;
}
function place(node,x,y,w,h){node.style.left=x+'px';node.style.top=y+'px';node.style.width=w+'px';node.style.height=h+'px';nodes.append(node);return {x,y,w,h}}
function edge(a,b,cls){
 const x=a.x+a.w,y=a.y+a.h/2,x2=b.x,y2=b.y+b.h/2,d=Math.max(55,(x2-x)*.43);
 const p=document.createElementNS(NS,'path');p.setAttribute('d','M '+x+' '+y+' C '+(x+d)+' '+y+', '+(x2-d)+' '+y2+', '+x2+' '+y2);p.setAttribute('class',cls);edges.append(p);
}
function rootNode(y){
 const n=E('div','node root');n.append(E('div','type','人生逻辑原点 · P-014'),E('h1',null,'生命展开原则'),E('p',null,'生命主体的价值体现于对自身可能性的认识、展开与创造。'),E('span','tag','Candidate · 规范性依据仍开放'),link('principles/人生原则注册表.md','nodeLink'));
 return place(n,70,y-108,324,216);
}
function childNode(d,y){
 const n=E('div','node child');n.append(E('div','type',d.kind+' · '+d.id),E('h2',null,d.name),E('p',null,d.desc),link(d.path,'nodeLink'));
 return place(n,484,y-73,274,146);
}
function docNode(d,y,height){
 const box=E('section','doc-panel'),header=E('div','doc-head'),heading=E('div'),actions=E('div','doc-actions');
 heading.append(E('div','kicker',d.id+' · MARKDOWN'),E('h3',null,d.name));
 const expand=E('button','icon-btn',expanded===d.id?'⊟':'⛶');expand.type='button';expand.title=expanded===d.id?'收起':'在画布中展开';
 expand.addEventListener('click',()=>{expanded=expanded===d.id?'':d.id;render();if(expanded===d.id){ox=Math.min(ox,vp.clientWidth-1460);oy=Math.min(oy,vp.clientHeight-(y+480)-20);transform()}});
 actions.append(expand,link(d.path,'icon-btn'));header.append(heading,actions);box.append(header);
 const body=E('div','doc-main'),s=data.get(d.id)||{type:'loading'};
 if(s.type==='ready'){body.append(markdown(s.value,d.path))}
 else{
  const ph=E('div','placeholder'),label=s.type==='loading'?'正在读取文档…':s.type==='private'?'需要授权读取私有 Markdown':'暂时无法读取文档';
  ph.append(E('strong',null,label),E('span',null,s.info||'不会将私人知识正文打包到公开网页。'));
  const btn=E('button','action','授权查看');btn.type='button';btn.addEventListener('click',()=>showAuth(true));if(s.type!=='loading')ph.append(btn);
  body.append(ph);
 }
 box.append(body);
 if(scrollMemory.has(d.id))body.scrollTop=scrollMemory.get(d.id);
 body.addEventListener('scroll',()=>scrollMemory.set(d.id,body.scrollTop),{passive:true});
 box.append(E('div','doc-meta',d.path.split('/').slice(-1)[0]));
 return place(box,847,y,580,height);
}
function render(){
 nodes.replaceChildren();edges.replaceChildren();
 let y=80;const rows=[];
 items.forEach(d=>{const h=expanded===d.id?480:215;rows.push({d,y,h,cy:y+h/2});y+=h+28});
 area={width:1510,height:y+40};stage.style.width=area.width+'px';stage.style.height=area.height+'px';edges.setAttribute('width',area.width);edges.setAttribute('height',area.height);edges.setAttribute('viewBox','0 0 '+area.width+' '+area.height);
 const origin=rootNode((rows[0].cy+rows[2].cy)/2);
 rows.forEach(r=>{const child=childNode(r.d,r.cy),doc=docNode(r.d,r.y,r.h);edge(origin,child,'primary');edge(child,doc,'secondary')});transform();
}
function transform(){stage.style.transform='translate('+ox+'px,'+oy+'px) scale('+scale+')'}
function fit(){scale=1;ox=vp.clientWidth>=area.width?(vp.clientWidth-area.width)/2:-50;oy=vp.clientHeight>=area.height?(vp.clientHeight-area.height)/2:-15;transform()}
function zoom(f,x,y){const old=scale;scale=Math.max(.4,Math.min(1.8,scale*f));ox=x-(x-ox)*scale/old;oy=y-(y-oy)*scale/old;transform()}
function showAuth(on){$('authPanel').hidden=!on;$('tokenInput').value='';if(on)$('tokenInput').focus()}
function connection(){ $('connectionButton').textContent=token?'断开 GitHub':'连接 GitHub';$('connectionStatus').textContent=token?'私有文件：已授权':'私有文件：待授权'}
async function read(d,seq){
 data.set(d.id,{type:'loading'});render();
 const headers={Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
 if(token)headers.Authorization='Bearer '+token;
 try{
  const u=api+d.path.split('/').map(encodeURIComponent).join('/')+'?ref=main';
  const r=await fetch(u,{headers,method:'GET',cache:'no-store',referrerPolicy:'no-referrer'});
  if(seq!==revision)return;
  if(!r.ok){data.set(d.id,{type:r.status===403||r.status===404?'private':'failed',info:r.status===401?'Token 无效或过期。':r.status===404?'需要此仓库 Contents: Read 权限。':'GitHub 状态码：'+r.status})}
  else{
   const j=await r.json();if(seq!==revision)return;
   if(j.type!=='file'||!j.content)throw Error('No GitHub content');
   const binary=atob(j.content.replace(/\s/g,'')),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
   data.set(d.id,{type:'ready',value:new TextDecoder().decode(bytes)});
  }
 }catch(e){if(seq===revision)data.set(d.id,{type:'failed',info:'读取失败：请检查网络或授权。'})}
 if(seq===revision)render();
}
function readAll(){const seq=++revision;items.forEach(d=>read(d,seq))}
$('authForm').addEventListener('submit',e=>{e.preventDefault();const value=$('tokenInput').value.trim();if(!value)return;token=value;showAuth(false);connection();readAll()});
$('authClose').addEventListener('click',()=>showAuth(false));
$('retryButton').addEventListener('click',()=>{showAuth(false);readAll()});
$('connectionButton').addEventListener('click',()=>{if(token){token='';revision++;data.clear();scrollMemory.clear();connection();readAll()}else showAuth(true)});
$('fit').addEventListener('click',()=>{expanded='';render();fit()});
$('zoomIn').addEventListener('click',()=>zoom(1.17,vp.clientWidth/2,vp.clientHeight/2));
$('zoomOut').addEventListener('click',()=>zoom(1/1.17,vp.clientWidth/2,vp.clientHeight/2));
vp.addEventListener('wheel',e=>{if(e.target.closest('.doc-main,.auth-panel'))return;e.preventDefault();const r=vp.getBoundingClientRect();zoom(e.deltaY<0?1.1:1/1.1,e.clientX-r.left,e.clientY-r.top)},{passive:false});
vp.addEventListener('pointerdown',e=>{if((e.pointerType==='mouse'&&e.button!==0)||e.target.closest('button,a,input,.doc-panel,.auth-panel,.controls,.top-actions'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,ox,oy,started:false}});
vp.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.started&&Math.hypot(dx,dy)<6)return;if(!drag.started){drag.started=true;vp.setPointerCapture(e.pointerId);vp.classList.add('dragging')}if(e.cancelable)e.preventDefault();ox=drag.ox+dx;oy=drag.oy+dy;transform()});
function end(e){if(!drag||drag.id!==e.pointerId)return;if(drag.started&&vp.hasPointerCapture(e.pointerId))vp.releasePointerCapture(e.pointerId);drag=null;vp.classList.remove('dragging')}
vp.addEventListener('pointerup',end);vp.addEventListener('pointercancel',end);
vp.addEventListener('selectstart',e=>{if(!e.target.closest('.doc-main,input,.auth-panel'))e.preventDefault()});
vp.addEventListener('dragstart',e=>{if(!e.target.closest('.doc-main'))e.preventDefault()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')showAuth(false)});
window.addEventListener('resize',fit);
render();fit();connection();readAll();
})();
