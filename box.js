let caixa = document.getElementById("caixaMaior");

function chamarJanela(){
    caixa.style.display = "block";
    if(document.getElementById("opcao1").checked) document.getElementById("mensagemCaixa").innerHTML = "Você adicionou Avatar: A Lenda de Aang em sua lista.";
    else if (document.getElementById("opcao2").checked) document.getElementById("mensagemCaixa").innerHTML = "Você adicionou Os Gonnies em sua lista.";
    else if (document.getElementById("opcao3").checked) document.getElementById("mensagemCaixa").innerHTML = "Você adicionou O Auto da Compadecida em sua lista.";
}

function fecharJanela(){
    caixa.style.display = "none";
    for (let i = 1; i<4; i++){
        let check = document.getElementById("opcao"+i);
        check.checked = false;
    }
}   