let btn = document.querySelector('.home-button-play')
let content = document.querySelector('.home-content')


btn.addEventListener('click', () => {
    animation()
});

const animation = (() => {
    content.classList.add('home-content-animation')
    disableHomeScreen()
})

const disableHomeScreen = (() => {
    setTimeout(() => {
        content.classList.add('d-none')
        content.classList.remove('home-content-animation')
    }, 4000)
})