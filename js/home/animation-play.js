let btn = document.querySelector('.home-button-play')
let content = document.querySelector('.home-content')
let game = document.querySelector('.game-style-content')

btn.addEventListener('click', () => {
    Animation.start(btn, content, game, 'home-content-animation', 'game-content-animation-start', 1500, 3300)
});

// const animation = (() => {
//     content.classList.add('home-content-animation')
//     disableHomeScreen()
// })

// const disableHomeScreen = (() => {

//     game.classList.add('game-content-animation-start')
//     setTimeout(() => {
//         game.classList.remove('d-none')
//     }, 1400)
//     setTimeout(() => {
//         content.classList.add('d-none')
        
//         content.classList.remove('home-content-animation')
//     }, 1500)
    
//     setTimeout(() => {
//        game.classList.remove('game-content-animation-start')
//        console.log('ahahahah')
//     }, 3300)
// })