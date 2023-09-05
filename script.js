var dataFinal = new Date("dec 31, 2023 23:59:59").getTime();

var x = setInterval(function(){
    var dataHoje = new Date().getTime();
    var tempoRestante = dataFinal - dataHoje;

    let dias = Math.floor(tempoRestante/ (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempoRestante%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutos = Math.floor((tempoRestante%(1000 * 60 * 60))/(1000 * 60));
    let segundos = Math.floor((tempoRestante%(1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if(tempoRestante < 0) {
        clearInterval(x);
        document.getElementById("dias").innerHTML = 0;
        document.getElementById("horas").innerHTML = 0;
        document.getElementById("minutos").innerHTML = 0;
        document.getElementById("segundos").innerHTML = 0;
    }
}, 1000);
