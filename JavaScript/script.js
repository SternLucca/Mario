
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds2 = document.querySelector('.clouds2');
const clouds = document.querySelector('.clouds');
const clouds3 = document.querySelector('.clouds3');
const tela = document.querySelector('.game-over');
const startButton = document.querySelector('.start');
const menu = document.querySelector('.menu');
var death = new Audio('../audio/death.mp3');
var song = new Audio('../audio/song.mp3');
var ponto = 0;
var maiorPonto = 0;
function game() {
    const score = setInterval(()=>{
        ponto = ponto + 1;
        console.log(ponto);
        document.getElementById('ponto').innerHTML = 'Pontuação: ' + ponto;
    }, 500);
startButton.classList.add('fade');
menu.classList.add('fade');
pipe.classList.add('pipeA');
function songPlay (){
    song.play();
}
songPlay();
const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 1000);
}
const loopC1 = setInterval(() => {
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');
    if (cloudsPosition >= 0){
        clouds2.classList.add('clouds2A');
        clearInterval(loopC1);
    }
}, 10);
const loopC2 = setInterval(() => {
    const clouds2Position = +window.getComputedStyle(clouds2).right.replace('px', '');
    if (clouds2Position >= 0){
        clouds3.classList.add('clouds3A');
        clearInterval(loopC2);
    }
}, 10);
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '../Imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        song.pause();
        death.play();
        setTimeout(()=>{
            tela.classList.add('game-overA');
            console.log('game over');
        }, 500);
        if (maiorPonto < ponto) {
            maiorPonto = ponto;
            document.getElementById('maiorPonto').innerHTML = ' Maior Pontuação: ' + maiorPonto;
        }
        startButton.removeEventListener('click', game);
        clearInterval(loop);
        clearInterval(score);
    }
}, 10);
document.addEventListener('keydown', jump);
}
startButton.addEventListener('click', game);

var botao = document.getElementById('Restart');
botao.addEventListener('click', ()=>{
    console.log('foi');
});