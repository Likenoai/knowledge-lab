from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"

if len(sys.argv) < 2:
    data_file = ROOT / "examples" / "question-framing.data.js"
else:
    data_file = Path(sys.argv[1])
    if not data_file.is_absolute():
        data_file = (ROOT / data_file).resolve()

if len(sys.argv) >= 3:
    output_file = Path(sys.argv[2])
    if not output_file.is_absolute():
        output_file = (ROOT / output_file).resolve()
else:
    output_file = ROOT / "dist" / (data_file.stem.replace(".data", "") + "-canvas.html")

shell = (SRC / "canvas-shell.html").read_text(encoding="utf-8")
css = (SRC / "knowledge-canvas.css").read_text(encoding="utf-8")
js = (SRC / "knowledge-canvas.js").read_text(encoding="utf-8")
data = data_file.read_text(encoding="utf-8")

html = shell.replace("/*__KNOWLEDGE_CANVAS_CSS__*/", css)
html = html.replace("/*__KNOWLEDGE_CANVAS_DATA__*/", data)
html = html.replace("/*__KNOWLEDGE_CANVAS_JS__*/", js)

output_file.parent.mkdir(parents=True, exist_ok=True)
output_file.write_text(html, encoding="utf-8")
print(output_file)
