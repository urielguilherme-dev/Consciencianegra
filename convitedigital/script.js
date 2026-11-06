
// ====== CONFIGURAÇÕES DO EVENTO ======

var EVENTO = {
    inicio: "2026-11-20T19:00:00-03:00",
    fim: "2026-11-20T22:00:00-03:00",

    dataTexto: "Quinta-feira, 19 de novembro de 2026",
    horaTexto: "A partir das 18h",

    local: "Euclides de Miranda, Rua José Bonifácio, nº 992, Bairro São Francisco ",

   programacao: [
        ["18:30", "Palestra", " Consciência Negra - Ancestralidade, resistência e legado"],
        ["19:00", "Apresentação culturais", "Vídeos, Danças, Teatro, Roda de Capoeira e Desfile"],
        ["20h30", "Encerramento", "Confraternização"]
        
    ] 
};

// ====== ELEMENTOS HTML ======

var $ = function(id) {
    return document.getElementById(id);
};

// ====== PREENCHER INFORMAÇÕES ======

$("data").textContent = EVENTO.dataTexto;
$("hora").textContent = EVENTO.horaTexto;
$("local").textContent = EVENTO.local;

// Programação

$("prog").innerHTML = EVENTO.programacao.map(function(p) {

    return `
        <li>
            <time>${p[0]}</time>

            <div>
                <strong>${p[1]}</strong>
                <p>${p[2]}</p>
            </div>
        </li>
    `;

}).join("");

// Google Maps

$("mapa").href =
    "https://maps.app.goo.gl/pEQfFXXcHrjhEP266" +
    encodeURIComponent(EVENTO.local);

// ====== CONTAGEM REGRESSIVA ======

function tick() {

    var s = Math.max(
        0,
        Math.floor((new Date(EVENTO.inicio) - new Date()) / 1000)
    );

    var v = [
        [Math.floor(s / 86400), "dias"],
        [Math.floor(s % 86400 / 3600), "horas"],
        [Math.floor(s % 3600 / 60), "min"],
        [s % 60, "seg"]
    ];

    $("count").innerHTML = v.map(function(x) {

        return `
            <div>
                <b>${x[0]}</b>
                <span>${x[1]}</span>
            </div>
        `;

    }).join("");
}

tick();

setInterval(tick, 1000);

// ====== ABRIR CONVITE ======

function abrirConvite() {

    var abertura = $("tela-abertura");
    var convite = $("convite");

    // Inicia a transição do desfoque
    convite.classList.add("visivel");

    // Faz a tela de abertura desaparecer
    abertura.classList.add("esconder");

}

// Evento do botão

$("botao-abrir").addEventListener("click", abrirConvite);
