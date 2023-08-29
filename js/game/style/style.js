const btnSelectStyle = Element.getElement('.game-style-button-select-style', 0)
const btnSelectRandomStyle = Element.getElement('.game-style-button-select-random-style', 0)
const gameStyleContent = Element.getElement('.game-style-content', 0)

btnSelectStyle.addEventListener('click', () => {
    animationEnd()
})

btnSelectRandomStyle.addEventListener('click', () => {
    animationEnd()
})

const animationEnd = (() => {
    gameStyleContent.classList.remove('game-content-animation-start')
    gameStyleContent.classList.add('game-content-animation-end')
    setTimeout(() => {
        gameStyleContent.classList.remove('game-content-animation-end')
        gameStyleContent.classList.add('d-none')
    }, 2000)
})