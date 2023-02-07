import { predictions } from "./predictions.js"

const btnStart = document.getElementById('btn-start')
const btnEnd = document.getElementById('btn-end')
const audio = document.getElementById('audio')
const number = document.getElementById('number')
const numberWrapper = document.getElementById('number-wrapper')
const predictionWrapper = document.getElementById('prediction-wrapper')
const predictionText = document.getElementById('prediction-text')
let flag = true



btnStart.addEventListener('click', start)
btnEnd.addEventListener('click', end)

function getPredictionNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function printNum() {
    
    setTimeout(function go() {
        number.innerText = getPredictionNumber(1, 5)
        if (flag) {
            setTimeout(go, 100)
        }
    }, 100)
    
}

function start() {
    audio.play()
    numberWrapper.classList.add('appear')
    printNum()
    
}

function end() {
    audio.pause()
    flag = false
    btnStart.classList.add('disappear')
    btnEnd.classList.add('disappear')
    predictionText.innerText = predictions[number.innerText]
    setTimeout(() => predictionWrapper.classList.add('appear'), 1000)
    
}

