const btnStart = document.getElementById('btn-start')
const btnEnd = document.getElementById('btn-end')
const audio = document.getElementById('audio')
const number = document.getElementById('number')

btnStart.addEventListener('click', start)
btnEnd.addEventListener('click', end)


function end() {
    audio.pause()

}

function start() {
    audio.play()
    
}