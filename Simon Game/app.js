let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let btns = ["yellow", "red", "green", "blue"];

// Start the game on any keypress
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});


//function that flash button like make bg color of div to white when it is pressed
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 500);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}

// Check user answer against game sequence
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;

        let body = document.querySelector('body');
        body.style.backgroundColor = "red";

        setTimeout(function () {
            body.style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress() {
    if(!started) return ;
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userColor.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}