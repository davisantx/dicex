const dicesTheme = [
    'assets/img/dices/theme-dark/dice1.png',
    'assets/img/dices/theme-red/dice1.png'
]

const timesBetweenChanges = [1000, 500, 200, 100, 50, 25, 12.5, 6.25, 3.125, 1.5625]

buttonSelectDiceRandom.addEventListener('click', () => {

    var randomNumber = Math.floor(Math.random() * 2)
    console.log('teste')
    for(let i = 0; i < timesBetweenChanges.length; ++i) {
        setInterval(() => {
            setTimeout(() => {dices[2].setAttribute("src", dicesTheme[Math.round(randomNumber)])}, Math.round(timesBetweenChanges[i]))
            
        }, Math.round(timesBetweenChanges[i]))
    }
    // dices[2].classList.add('')
    // dices[2].setAttribute('src', dicesTheme[randomNumber])
})