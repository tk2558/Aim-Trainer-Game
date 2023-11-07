const squares = document.querySelectorAll('.square')
const target = document.querySelector('.target')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

// Variables
let hit = 0
let total = 0
let hitPosition
let currentTime = 60
let timerId = null
let hitSound = new Audio('hit_sound.mp3')

// pick random squares
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('target')
    })

    let randomSquare = squares[Math.floor(Math.random() * 24)]
    randomSquare.classList.add('target')
    hitPosition = randomSquare.id
    total++
}

// Action Event Listener
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            hitSound.volume = 0.5;
            hitSound.currentTime = 0;
            hitSound.play()
            setTimeout(() => {
                audio.pause();
            }, 300);

            hit++
            score.textContent = hit
            hitPosition = null
        }
    })
})

// move Target
function moveTarget() {
    timerId = setInterval(randomSquare, 500)
}

// Count Down
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == -1) {
        alert('GAME OVER! Final score is ' + ((hit / total) * 100).toFixed(2) + '% accuracy')
        clearInterval(countDownTimer)
        clearInterval(timerId)
        timeLeft.textContent = 0
    }
}

moveTarget()
let countDownTimer = setInterval(countDown, 1000) // countdown timer
