function jscopyA() {
 var txt = document.getElementById("demoA").value;
 navigator.clipboard.writeText(txt) 
 .then(() =>{alert("Copied") ;}) ;}
