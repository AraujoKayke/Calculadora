
// Inserir o numero na tela
function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

// Limpar todos os numeros inseridos 
function clean(){
    document.getElementById('resultado').innerHTML = " ";
}

//  Apaga os numeros inseridos um por um
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = ("Insira Algo");
    }
}