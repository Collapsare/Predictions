import { predictions } from "./predictions.js"

const btnStart = document.getElementById('btn-start')
const btnEnd = document.getElementById('btn-end')
const audio = document.getElementById('audio')
const number = document.getElementById('number')
const numberWrapper = document.getElementById('number-wrapper')
const predictionWrapper = document.getElementById('prediction-wrapper')
const predictionText = document.getElementById('prediction-text')
const img = document.getElementById('img')
let flag = true



btnStart.addEventListener('click', start)
btnEnd.addEventListener('click', end)

function getPredictionNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function printNum() {
    
    setTimeout(function go() {
        number.innerText = getPredictionNumber(1, 6)
        predictionText.innerText = predictions[number.innerText]
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
    img.classList.add('appear')
    setTimeout(() => predictionWrapper.classList.add('appear'), 1000)
}

