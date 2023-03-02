
function calcular(){

var velocidade = window.document.getElementById('vel');
var Tvelocidade = Number(velocidade.value);

if (Tvelocidade>100){

    var res = window.document.getElementById('resultado');
    res.innerHTML = (`A sua velocidade de está acima do permitido, você receberá uma multa.`)
}

else{
    var res = window.document.getElementById('resultado');
    res.innerHTML = (`Tudo tranquilo`)
}

}