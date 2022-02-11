console.log("test")

const htmlEditor = CodeMirror(document.querySelector(".html_code"), {
    lineNumbers: true,
    tabSize: 2,
    mode:"xml"
});

const cssEditor = CodeMirror(document.querySelector(".css_code"), {
    lineNumbers: true,
    tabSize: 2,
    mode:"css"
});

document.getElementById("run_btn").addEventListener("click", function(){
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "<style>";
    let previewWindow = document.querySelector("#preview_window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode+cssCode);
    previewWindow.close();
})