// Functions

// Set The Data To The Variables
function setUpData() {
    lvlName.innerHTML = defultLvl;
    lvlSeconds.innerHTML = defultLvlSecs;
    timeLeft.innerHTML = defultLvlSecs;
}

// Genrating The Words

function generateWords(e) {
    // random word
    let randomWrod = e[Math.floor(Math.random() * e.length)];
    // get word index
    let wordIndex = e.indexOf(randomWrod);
    // remove word from array
    e.splice(wordIndex, 1);
    // show the random word
    theWord.innerHTML = randomWrod;
    // empty upcoming words
    upcomingWords.innerHTML = "";
    // genrate words
    for (let i = 0; i < e.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(e[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // start test fun
    startTest(e);
}

// Starting The Test

function startTest(e) {
    timeLeft.innerHTML = defultLvlSecs;
    let start = setInterval(() => {
        timeLeft.innerHTML--;
        if (timeLeft.innerHTML === "0") {
            // stop time
            clearInterval(start);
            // check words
            if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                // empty input 
                input.value = "";
                // raise score
                scoreGot.innerHTML++;
                if (e.length > 0) {
                    generateWords(e);
                } else {
                    let span = document.createElement("span");
                    let spanTxt = document.createTextNode("Good Job");
                    span.className = "good";
                    span.appendChild(spanTxt);
                    finishMsg.appendChild(span);
                    // remove upcoming words
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanTxt = document.createTextNode("Game Over");
                span.appendChild(spanTxt);
                finishMsg.appendChild(span);
            }
        }
    }, 1000)
}

// ===========================================================================================================================

// Array Of Words

const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
const hardWords = ["Programming",
    "Javascript",
    "Leetcode",
    "Destructuring",
    "Styling",
    "Cascade",
    "Documentation",
    "Dependencies",
    "language",
    "Implement",
    "Circumference ",
    "Countenance",
    "Development",
    "Datebase",
    "Incomprehensibility"
];
const normalWords = ["Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Paradigm",
    "Styling",
    "Working",
    "Runner",
    "Roles",
    "Playing"
];
const easyWords = ["Hello",
    "Code",
    "Town",
    "Scala",
    "Coding",
    "Funny",
    "Task",
    "Test",
    "Rust",
    "Easy"
];

// levels 

const levels = {
    "Hard": 4,
    "Normal": 3,
    "Easy": 2,
    "All": 5
};

// ===========================================================================================================================

// selectors

let lvlName = document.querySelector(".message .level");
let lvlSeconds = document.querySelector(".message .seconds");
let startBtn = document.querySelector(".start");
let theWord = document.querySelector(".word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeft = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMsg = document.querySelector(".finish");
let hardBtn = document.querySelector(".setting .hard")
let normalBtn = document.querySelector(".setting .normal")
let easyBtn = document.querySelector(".setting .easy")
let allBtn = document.querySelector(".setting .all")
let lastScore = document.querySelector(".last .score")
let lastDate = document.querySelector(".last .date")

// ===========================================================================================================================

// defult level + name + seconds + score

let defultLvl = "All";
let defultLvlSecs = levels[defultLvl];
scoreTotal.innerHTML = words.length;
setUpData();

startBtn.onclick = function () {
    this.remove();
    input.focus();
    generateWords(words); // generating the all words function
}

// ===========================================================================================================================

// selct the lvl + start testing

hardBtn.onclick = function () {
    defultLvl = "Hard";
    defultLvlSecs = levels[defultLvl];
    scoreTotal.innerHTML = hardWords.length;
    setUpData();
    startBtn.onclick = function () {
        this.remove();
        input.focus();
        generateWords(hardWords); // generating the hard words function
    }
}

// ===========================================================================================================================

normalBtn.onclick = function () {
    defultLvl = "Normal";
    defultLvlSecs = levels[defultLvl];
    scoreTotal.innerHTML = normalWords.length;
    setUpData();
    startBtn.onclick = function () {
        this.remove();
        input.focus();
        generateWords(normalWords); // generating the normal words function
    }

}

// ===========================================================================================================================

easyBtn.onclick = function () {
    defultLvl = "Easy";
    defultLvlSecs = levels[defultLvl];
    scoreTotal.innerHTML = easyWords.length;
    setUpData();
    startBtn.onclick = function () {
        this.remove();
        input.focus();
        generateWords(easyWords); // generating the easy words function
    }
}

// ===========================================================================================================================

allBtn.onclick = function () {
    defultLvl = "All";
    defultLvlSecs = levels[defultLvl];
    scoreTotal.innerHTML = words.length;
    setUpData();
    startBtn.onclick = function () {
        this.remove();
        input.focus();
        generateWords(words); // generating the all words function
    }
}

// ===========================================================================================================================

// disaple past event

input.onpaste = function () {
    return false;
}

// ===========================================================================================================================
