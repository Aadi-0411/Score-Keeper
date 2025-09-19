const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');
let score1 = 0;
let score2 = 0;
let winningScore = parseInt(playTo.value);
let isGameOver = false;

playTo.addEventListener('change', function(){
    winningScore = parseInt(playTo.value);
    resetGame();
})

if(score1 === winningScore || score2 === winningScore){
    isGameOver = true;
}

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        score1 += 1;
        if(score1 === winningScore){
            isGameOver = true;
            p1Score.classList.add('has-text-success');
            p2Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Score.innerText = `${score1}`;
    }
});
p2Button.addEventListener('click', function(){
    if(!isGameOver){
        score2 += 1;
        if(score2 === winningScore){
            isGameOver = true;
            p2Score.classList.add('has-text-success');
            p1Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.innerText = `${score2}`;
    }
});

reset.addEventListener('click', resetGame);

function resetGame(){
    score1=0;
    score2=0;
    isGameOver = false;
    p1Score.innerText = `${score1}`;
    p2Score.innerText = `${score2}`;
    p1Score.classList.remove('has-text-success','has-text-danger');
    p2Score.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}