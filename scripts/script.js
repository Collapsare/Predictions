const btnStart = document.getElementById('btn-start')
const btnEnd = document.getElementById('btn-end')
const audio = document.getElementById('audio')
const number = document.getElementById('number')
const numberWrapper = document.getElementById('number-wrapper')

const predictions = [1, 2, 3, 4, 5]


btnStart.addEventListener('click', start)
btnEnd.addEventListener('click', end)

function getPredictionNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function start() {
    audio.play()
    numberWrapper.classList.add('appear')
    number.innerText = predictions[getPredictionNumber(0, 5)]
}

function end() {
    audio.pause()
    numberWrapper.classList.remove('appear')

}

