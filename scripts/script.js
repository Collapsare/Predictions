const btnStart = document.getElementById('btn-start')
const btnEnd = document.getElementById('btn-end')
const audio = document.getElementById('audio')
const number = document.getElementById('number')
const numberWrapper = document.getElementById('number-wrapper')
let flag = true
const predictions = [1, 2, 3, 4, 5]


btnStart.addEventListener('click', start)
btnEnd.addEventListener('click', end)

function getPredictionNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function printNum() {
    setTimeout(function go() {
        number.innerText = predictions[getPredictionNumber(0, 5)]
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
}

