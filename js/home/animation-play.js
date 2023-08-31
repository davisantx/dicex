let btn = document.querySelector('.home-button-play')
let content = document.querySelector('.home-content')
let gameStyle = document.querySelector('.game-style-content')

btn.addEventListener('click', () => {
    Animation.start(btn, content, gameStyle, 'home-content-animation', 'game-content-animation-start', 1500, 3300)
});
