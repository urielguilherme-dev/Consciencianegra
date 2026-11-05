// ====== EDITE AQUI ======
var EVENTO = {
  inicio: "2026-11-20T19:00:00-03:00",
  fim:    "2026-11-20T22:00:00-03:00",
  dataTexto: "Sexta-feira, 20 de novembro de 2026",
  horaTexto: "19h às 22h",
  local: "Nome da Escola, Rua Exemplo, 123, Parnaíba – PI",
  programacao: [
    ["19h00","Abertura","Boas-vindas e fala da direção"],
    ["19h30","Palestra","Consciência Negra e a história do litoral piauiense"],
    ["20h30","Apresentações culturais","Dança, música e poesia dos estudantes"],
    ["21h30","Encerramento","Roda de conversa e confraternização"]
  ]
};
// ========================
var $=function(i){return document.getElementById(i)};
$("data").textContent=EVENTO.dataTexto;
$("hora").textContent=EVENTO.horaTexto;
$("local").textContent=EVENTO.local;
$("prog").innerHTML=EVENTO.programacao.map(function(p){
  return "<li><time>"+p[0]+"</time><div><strong>"+p[1]+"</strong><p>"+p[2]+"</p></div></li>"}).join("");

$("mapa").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(EVENTO.local);


function tick(){
  var s=Math.max(0,Math.floor((new Date(EVENTO.inicio)-new Date())/1000));
  var v=[[Math.floor(s/86400),"dias"],[Math.floor(s%86400/3600),"horas"],[Math.floor(s%3600/60),"min"],[s%60,"seg"]];
  $("count").innerHTML=v.map(function(x){return "<div><b>"+x[0]+"</b><span>"+x[1]+"</span></div>"}).join("");
}
tick();setInterval(tick,1000);
