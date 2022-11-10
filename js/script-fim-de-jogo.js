let url = null; //Variável para guardar url
let vetorTempoPontos = []; //Vetor que vai guardar strings
let tempo = 0; //variável que vai guardar o tempo em segundos
let pontos = 0; //Variável que vai guardar a pontuação

//Pegar itens do url
url = window.location.search;

//Substituir ?
url = url.replace('?', '');

//Substituir -
url = url.replace('-', ' ');

//Separar string
vetorTempoPontos = url.split(' ');

//Atribuir as variaveis cada string
tempo = vetorTempoPontos[0];
pontos = vetorTempoPontos[1];

//Convertendo o tipo das variáveis
tempo = parseInt(tempo);
pontos = parseInt(pontos);

//Se o tempo passou de 60 segundos converter para minutos
if(tempo >= 60) {
    tempo = (tempo / 60);
    
    //Pegar 1 casa decimal
    tempo = tempo.toFixed(2);

    //Formatação de relógio
    tempo = tempo.replace('.', ' min ');
}

//Pegar o elemento html de imagem
let imagem = document.getElementById('imagem');

//APresentar mensagens dependendo da pontuação
if(pontos < 10) {
    //Apresentar entre o h1 
    document.getElementById('h1').innerHTML = 'Tá aprendendo, né?';   
    
    //Mudar imagem
    imagem.src = 'img/karl-marx.png';
    imagem.alt = 'Karl Marx';
}
else if(pontos >= 10 && pontos < 25) {
    //Apresentar entre o h1 
    document.getElementById('h1').innerHTML = 'Ufa! Melhorou!';       
    
    //Mudar imagem
    imagem.src = 'img/galo-cego.png';
    imagem.alt = 'Galo Cego';
}
else if(pontos >= 25 && pontos < 40) {
    //Apresentar entre o h1 
    document.getElementById('h1').innerHTML = 'Mandou muito bem!';  
    
    //Mudar imagem
    imagem.src = 'img/snoop-dogg.gif';
    imagem.alt = 'Snoop Dogg';
}
else if(pontos >= 40 && pontos < 70) {
    //Apresentar entre o h1 
    document.getElementById('h1').innerHTML = 'Excepcional!';    
    
    //Mudar imagem
    imagem.src = 'img/like-a-boss.png';
    imagem.alt = 'Like a Boss';
}
else if(pontos >= 70) {
    //Apresentar entre o h1 
    document.getElementById('h1').innerHTML = 'Chuck Norris?';
    
    //Mudar imagem
    imagem.src = 'img/chuck-norris.png';
    imagem.alt = 'Chuck Norris';
}

//Apresentar tempo entre o span 
document.getElementById('tempo').innerHTML = tempo + ' segundos';

if(pontos == 0) { //Se não fizer nenhum ponto
    //Apresentar mensagem 
    document.getElementById('pontos').innerHTML = 'Nenhum ponto';
}
else if(pontos == 1) { //Se o fizer somente um ponto
    //Apresentar pontos entre o span 
    document.getElementById('pontos').innerHTML = pontos + ' ponto';
}
else {
    //Apresentar pontos entre o span 
    document.getElementById('pontos').innerHTML = pontos + ' pontos';
}