const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
]

const btn = document.getElementById("generate-btn")
const pw1El = document.getElementById("pw-1")
const pw2El = document.getElementById("pw-2")
const clickInstruction = document.getElementById("click-instruction")

let password1 = ""
let password2 = ""

btn.addEventListener("click", ()=>{
    pw1El.textContent = randomPW()
    pw2El.textContent = randomPW()
    clickInstruction.style.opacity = 0
    clickInstruction.textContent = ""
})

pw1El.addEventListener("click", ()=>{
    navigator.clipboard.writeText(pw1El.textContent);
    clickInstruction.textContent = "Copied to clipboard!"
})

pw1El.addEventListener("mouseover", ()=>{
    clickInstruction.style.opacity = 100
    clickInstruction.textContent = "Click to copy"
})

pw2El.addEventListener("click", ()=>{
    navigator.clipboard.writeText(pw2El.textContent);
    clickInstruction.textContent = "Copied to clipboard!"
})

pw2El.addEventListener("mouseover", ()=>{
    clickInstruction.style.opacity = 100
    clickInstruction.textContent = "Click to copy"
})

function randomNum(){
    return Math.floor(Math.random() * characters.length)
}

function randomPW(){
    let pw = ""
    for(let i = 0; i < 15; i++){
        pw += characters[randomNum()]
    }
    return pw
}

