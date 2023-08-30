const dropdown = Element.getElement('.home-navbar-dropdown', 0);

const languages = {
    'english': document.getElementById('option-english'),
    'portuguese': document.getElementById('option-portuguese')
}

const portuguese = {
    '.navbar-item1': 'Inicio',
    '.navbar-item2': 'Sobre',
    '.home-title': 'Começar um novo jogo em dicex',
    '.home-subtitle': 'Dicex pode transmitir uma experiência épica em um duelo de dados!',
    '.game-style-dice-title': 'Selecione um dado para o duelo',
    '.game-style-button-select-style-dice-red': 'Selecione',
    '.game-style-button-select-style-dice-dark': 'Selecione',
    '.game-style-button-select-random-style': 'Escolher aleatoriamente',
    
}

const english = {
    '.navbar-item1': 'Home',
    '.navbar-item2': 'About',
    '.home-title': 'Start a new game in dicex',
    '.home-subtitle': 'Dicex can convey an epic experience in a dice duel!',
    '.game-style-dice-title': 'Select a dice for the duel',
    '.game-style-button-select-style-dice-red': 'Select',
    '.game-style-button-select-style-dice-dark': 'Select',
    '.game-style-button-select-random-style': 'Randomly choose'
}

const textNavbar = {
    'english': 'Language (EN)',
    'portuguese': 'Language (PT-BR)'
}

const loadEventListeners = () => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault()
        verifyOptionSelected(e.target)
        console.log(e.target)
    })
}

const verifyOptionSelected = ((optionSelected) => {
    if(optionSelected.innerText == languages['english'].textContent) {
        languages['english'].classList.add('fw-bold')
        languages['portuguese'].classList.remove('fw-bold')
        changeLanguage(false)
        // continued in english
    }
    else if(optionSelected.innerText == languages['portuguese'].textContent) {
        languages['portuguese'].classList.add('fw-bold')
        languages['english'].classList.remove('fw-bold')
        changeLanguage(true)
    }
    
})
const changeLanguage = ((response) => {
    var count = 0
    for(let i in portuguese) {
        ++count;
    }
    if(response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbar['portuguese']
        changeLanguageOfTexts(portuguese, count)
    }
    if(!response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbar['english']
        changeLanguageOfTexts(english, count)
    }
})

const changeLanguageOfTexts = ((language, size) => {
    for(let i = 0; i < size; ++i) {
        Element.getElement(Object.keys(language)[i], 0).innerHTML = (Object.values(language)[i])
        // console.log((Object.values(language)[i]))    
    }
})

loadEventListeners()
