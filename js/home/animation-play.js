const btnLg = Element.getElement('.home-button-play', 0)
const btnSm = Element.getElement('.home-button-play', 1)
const content = Element.getElement('.home-content', 0)
const gameStyle = Element.getElement('.game-style-content', 0)

btnLg.addEventListener('click', () => {
    Animation.start(btnLg, content, gameStyle, 'home-content-animation', 'game-content-animation-start', 1500, 3300)
});

btnSm.addEventListener('click', () => {
    Animation.start(btnSm, content, gameStyle, 'home-content-animation', 'game-content-animation-start', 1500, 3300)
})