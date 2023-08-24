let btn = document.querySelector('.home-button-play')
let content = document.querySelector('.home-content')
let game = document.querySelector('.game')

btn.addEventListener('click', () => {
    animation()
});

const animation = (() => {
    content.classList.add('home-content-animation')
    disableHomeScreen()
})

const disableHomeScreen = (() => {

    game.classList.add('game-content-animation')
    setTimeout(() => {
        game.classList.remove("d-none")
    }, 1400)
    setTimeout(() => {
        content.classList.add('d-none')
        
        content.classList.remove('home-content-animation')
    }, 1500)
    
    setTimeout(() => {
       game.classList.remove('game-content-animation')
       console.log('ahahahah')
    }, 3300)
})