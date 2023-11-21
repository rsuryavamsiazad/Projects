let strScore = localStorage.getItem('score');
let score =  JSON.parse(strScore) || {
    win: 0,
    loss: 0,
    tie: 0
} ;
setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let h = hour % 12;
    let m = time.getMinutes();
    let s = time.getSeconds();
    let a = time.getDay();
    let d;
    if(a===0){d='Sunday'}
    if(a===1){d='Monday'}
    if(a===2){d='Tuesday'}
    if(a===3){d='Wednesday'}
    if(a===4){d='Thrusday'}
    if(a===5){d='Friday'}
    if(a===6){d='Saturday'}
    
    document.querySelector('.clock').innerText = `Time:${h}h:${m}m:${s}s,${d}`
}, 1000);


function computerChoice() {
    let rand = Math.round(Math.random() * 2);
    if (rand == 0) {
        return 'Rock';
    }
    else if (rand == 1) {
        return 'Paper';
    } else if (rand == 2) {
        return 'Scissors'
    }
};
function resultMsg(userMove, ComputerMove) {
    document.querySelector('.userTxt').innerText = `User Choice: 
    ${userMove}`
    document.querySelector('.computerTxt').innerText = `Computer Choice:
    ${ComputerMove}`

    if (userMove == 'Rock') {
        if (ComputerMove === 'Rock') {
            score.tie++;
            return 'Both got Tied';
        }
        else if (ComputerMove === 'Paper') {
            score.loss++;
            return 'Rock lost on Paper';
        }
        else if (ComputerMove === 'Scissors') {
            score.win++;
            return 'Rock won on Scissors';
        }
    }
    if (userMove == 'Paper') {
        if (ComputerMove === 'Rock') {
            score.win++;
            return 'Paper won on Rock';
        }
        else if (ComputerMove === 'Paper') {
            score.tie++;
            return 'Both got Tied';
        }
        else if (ComputerMove === 'Scissors') {
            score.loss++;
            return 'Paper lost on Scissors';
        }
    }
    if (userMove == 'Scissors') {
        if (ComputerMove === 'Rock') {
            score.loss++;
            return 'Scissors lost on Rock';
        }
        else if (ComputerMove === 'Paper') {
            score.win++;
            return 'Scissors won on Paper';
        }
        else if (ComputerMove === 'Scissors') {
            score.tie++;
            return 'Both got Tied';
        }
    }
}

function result(resultMsg) {
    localStorage.setItem('score', JSON.stringify(score));
    let user = document.querySelector('.result');

    user.innerText = `${resultMsg}`;


    win.innerText = ` Win ${score.win}`
    loss.innerText = ` Loss ${score.loss}`
    tie.innerText = ` Tie ${score.tie}`

}


let win = document.querySelector('.win');
let loss = document.querySelector('.loss');
let tie = document.querySelector('.tie');
win.innerText = ` Win ${score.win}`
loss.innerText = ` Loss ${score.loss}`
tie.innerText = ` Tie ${score.tie}`


function reset(strScore) {
    localStorage.clear();
    score={
        win: 0,
        loss: 0,
        tie: 0
    }
    win.innerText = ` Win 0`
    loss.innerText = ` Loss  0`
    tie.innerText = ` Tie 0`
}