var altura = 0;
var largura = 0;
let acertos = 0; //Controlar quantos conseguiu acertar
var cont = 0;

var i = 0; //Variável iterável para o indice
var tempo = 0; //Variável que define o tempo

//Criar personagem em cada ciclo de tempo
var criaPerson = setInterval(function() {posicaoRandom()}, 3000);

function nivel() {
    //Definir velocidade de criação conforme a quantidade de acertos
    if(acertos == 10) {
        //Interromper a criação
        clearInterval(criaPerson);
        
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 2000);
    }
    else if(acertos == 15) {
        //Interromper a criação
        clearInterval(criaPerson);
        
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1500);
    }
    else if(acertos == 20) {
        //Interromper a criação
        clearInterval(criaPerson);
        
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1000);    }
    else if(acertos == 25) {
        //Interromper a criação
        clearInterval(criaPerson);
        
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 500);
    }
}

//Para que mostre o tempo logo quando começar a contar
document.getElementById('cronometro').innerHTML = tempo;

//Ajustar o tamanho do cenário dinamicamente
function ajustaTamanhoCenario() {
    altura = window.innerHeight; //Definir altura da página
    largura = window.innerWidth; //Definir largura da página
}

ajustaTamanhoCenario() //chamar a função

//Controlar o tempo
var cronometro = setInterval(function() {
    tempo += 1; //Para somar o tempo conforme corre o cronometro

    //Para alterar a velocidade conforme avança o tempo
    if(tempo == 10) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 20) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 30) {
        //Interromper a criação
        clearInterval(criaPerson);   
    }
    else if(tempo == 40) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 50) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 60) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 70) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 80) {
        //Interromper a criação
        clearInterval(criaPerson);
    }
    else if(tempo == 90) {
        //Interromper a criação
        clearInterval(criaPerson);
    }

    //Criar person em determinado tempo
    if(tempo == 12) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 2500);
    }
    else if(tempo == 22) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 2300);
    }
    else if(tempo == 32) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 2000);
    }
    else if(tempo == 42) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1700);
    }
    else if(tempo == 52) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1500);
    }
    else if(tempo == 62) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1300);
    }
    else if(tempo == 72) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1000);
    }
    else if(tempo == 82) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 700);
    }
    else if(tempo == 92) {
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 500);
    }

    document.getElementById('cronometro').innerHTML = tempo; //Colocar o cronometro entre às tags

}, 1000); // a cada 1 segundo (1000 milisegundos)


//Criar posições randômicas
function posicaoRandom() {

    //Para que não apareça mais de um personagem simultaneamente 
    if (document.getElementById('person')) { //Se encontrar um personagem é verdadeiro
        document.getElementById('person').remove(); //Remover o personagem 

        //Não clicar em um personagem finalizar o jogo
        window.location.href = 'fim_de_jogo.html?' + tempo + '-' + acertos ;
    }

    //-120 para que o tamanho seja menor que o limite e não ultrapasse a tela
    var posicaoX = Math.floor(Math.random() * largura) - 120;
    var posicaoY = Math.floor(Math.random() * altura) - 120;

    //Para corrigir erro da imagem ficar fora da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY; 
    
    var person = document.createElement('img'); //Criar elemento HTML
    person.src = personRamdom(); //Manipulando o atributo do elemento
    person.style.transform = escalonarRandom() + ' ' + rotacionarRandom(); //Atribuir dois estilos

    //Aplicar coordenadas
    person.style.left = posicaoX + 'px';
    person.style.top = posicaoY + 'px';

    //O elemento precisa ter posição absoluta  
    person.style.position = 'absolute';

    //Adicionanod um identificador único
    person.id = 'person';

    //Remover o elemento ao clicar
    person.onclick = function() {
        this.remove();
        acertos += 1;
    }

    document.body.appendChild(person); //Adicionar na página o elemento
}

//Personagens randômicos
function personRamdom() {
    //Multiplicar por 2 e fazer arredondamento para obter 0 e 1
    var person = Math.floor(Math.random() * 2); 

    //Retornar uma string com a classe
    switch(person) {
        case 0:
            return 'img/person-marx.png';
        case 1:    
            return 'img/person-stalin.png';
    }

}

//Escalonamento randômico para os personagens
function escalonarRandom() {
    //Multiplicar por 3 e fazer arredondamento garante os tamanhos de 0, 1 e 2
    let num = Math.floor(Math.random() * 3); 

    //Retornar uma string com a classe
    switch(num) {
        case 0:
            return 'scale(1)'; //Escala normal
        case 1:
            return 'scale(0.8)'; //Escala pequena
        case 2:
            return 'scale(2.2)'; //Escala grande
    }
}

//Rotacionar randômico os personagens
function rotacionarRandom() {
    //Multiplicar por 3 garante os números 0, 1 e 2 aleatóriamente
    let num = Math.floor(Math.random() * 3); 

    //Retornar uma string
    switch(num) {
        case 0:
            return 'rotate(0)'; //Rotação normal
        case 1:
            return 'rotate(45deg)'; //Rotação
        case 2:
            return 'rotate(-45deg)'; //Rotação
}
}