const btn = Element.getElement('.home-button-play', 0)
const content = Element.getElement('.home-content', 0)
const gameStyle = Element.getElement('.game-style-content', 0)

btn.addEventListener('click', () => {
    Animation.start(btn, content, gameStyle, 'home-content-animation', 'game-content-animation-start', 1500, 3300)
});
