var altura = 0;
var largura = 0;
let acertos = 0; //Controlar quantos conseguiu acertar
var contadorPerson = 0; //Contar cada personagem
var tempo = 0; //Variável que define o tempo

//Criar personagem em cada ciclo de tempo
var criaPerson = setInterval(function() {posicaoRandom()}, 3000);

//Para que mostre o tempo logo quando começar a contar
document.getElementById('cronometro').innerHTML = tempo;

//Ajustar o tamanho do cenário dinamicamente
function ajustaTamanhoCenario() {
    altura = window.innerHeight; //Definir altura da página
    largura = window.innerWidth; //Definir largura da página
}

ajustaTamanhoCenario(); //chamar a função

//Função que determina novos nascimentos de acordo com a pontuação
onclick = function () {
    console.log(acertos);
    //Criar personagem se os acertos forem os determinados
    if(acertos == 5) {
        //Iniciar criação com novo tempo
        clearInterval(criaPerson);
        var criaPerson = setInterval(function() {posicaoRandom()}, 2600);
    }
    else if(acertos == 10) {
        //Iniciar criação com novo tempo
        clearInterval(criaPerson);
        var criaPerson = setInterval(function() {posicaoRandom()}, 2400);
    }
    else if(acertos == 20) {
        //Iniciar criação com novo tempo
        clearInterval(criaPerson);
        var criaPerson = setInterval(function() {posicaoRandom()}, 3000);
    }
    else if(acertos == 30) {
        clearInterval(criaPerson);
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1400);
    }
    else if(acertos == 40) {
        clearInterval(criaPerson);
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 1000);
    }
    else if(acertos == 50) {
        clearInterval(criaPerson);
        //Iniciar criação com novo tempo
        var criaPerson = setInterval(function() {posicaoRandom()}, 600);
    }
}

//Controlar o tempo
var cronometro = setInterval(function() {
    tempo += 1; //Para somar o tempo conforme corre o cronometro

    document.getElementById('cronometro').innerHTML = tempo; //Colocar o cronometro entre às tags

}, 1000); // a cada 1 segundo (1000 milisegundos)


//Criar posições randômicas
function posicaoRandom() {
    //Se encontrar um personagem na tela então somar contador
    if (document.getElementById('person')) {
        contadorPerson++;
    }

    //Se juntar mais de três personagens na tela perde 
    if (contadorPerson >= 3) {
        //Finalizar o jogo
        window.location.href = 'fim-de-jogo.html?' + tempo + '-' + acertos;
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
        acertos += 1; //Aumentar pontos
 
        //Decrementar somente quando tiver mais de um personagem
        if(contadorPerson > 0) {
            contadorPerson--; //Quando clicado então contador diminui
        }
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