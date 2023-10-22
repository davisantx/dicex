const dropdown = Element.getElement('.home-navbar-dropdown', 0);

let isPortuguese = false

const languages = {
    'english': Element.getElement('.option-english', 0),
    'portuguese': Element.getElement('.option-portuguese', 0)
}

const portuguese = {
    '.navbar-item1': 'Inicio',
    '.navbar-item2': 'Sobre',
    '.navbar-dropdown': 'Linguagem (PT-BR)',
    '.option-english': 'Inglês (EN)',
    '.option-portuguese': 'Português (PT-BR)',
    '.home-title': 'Começar um novo jogo em dicex',
    '.home-subtitle': 'Dicex pode transmitir uma experiência épica em um duelo de dados!',
    '.home-button-play': 'VAMOS JOGAR',
    '.home-button-repository' : 'VER REPOSITÓRIO DO PROJETO',
    '.game-style-dice-title': 'Selecione um dado para o duelo',
    '.game-style-button-select-style-dice-red': 'Selecione',
    '.game-style-button-select-style-dice-dark': 'Selecione',
    '.game-style-button-select-random-style': 'Escolher aleatoriamente',
    '.game-play-title': 'Iniciar!',
    '.game-button-to-play': 'JOGAR'
}

const english = {
    '.navbar-item1': 'Home',
    '.navbar-item2': 'About',
    '.navbar-dropdown': 'Language (EN)',
    '.option-english': 'English (EN)',
    '.option-portuguese': 'Portuguese (PT-BR)',
    '.home-title': 'Start a new game in dicex',
    '.home-subtitle': 'Dicex can convey an epic experience in a dice duel!',
    '.home-button-play': 'LET´S PLAY',
    '.home-button-play-sm': 'LET´S PLAY',
    '.home-button-repository' : 'VIEW PROJECT REPOSITORY',
    '.home-button-repository-sm' : 'VIEW PROJECT REPOSITORY',
    '.game-style-dice-title': 'Select a dice for the duel',
    '.game-style-button-select-style-dice-red': 'Select',
    '.game-style-button-select-style-dice-dark': 'Select',
    '.game-style-button-select-random-style': 'Randomly choose',
    '.game-play-title': 'Start!',
    '.game-button-to-play': 'TO PLAY'
}

const textNavbarEnglish = {
    'english': 'Language (EN)',
    'portuguese': 'Language (PT-BR)'
}
const textNavbarPortuguese = {
    'english': 'Linguagem (EN)',
    'portuguese': 'Linguagem (PT-BR)'
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
        isPortuguese = false
        // continued in english
    }
    else if(optionSelected.innerText == languages['portuguese'].textContent) {
        languages['portuguese'].classList.add('fw-bold')
        languages['english'].classList.remove('fw-bold')
        changeLanguage(true)
        isPortuguese = true
    }
    
})
const changeLanguage = ((response) => {
    var count = 0
    for(let i in portuguese) {
        ++count;
    }
    if(response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarPortuguese['portuguese']
        changeLanguageOfTexts(portuguese, count)
    }
    if(!response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarEnglish['english']
        changeLanguageOfTexts(english, count)
    }
})

const changeLanguageOfTexts = ((language, size) => {
    for(let i = 0; i < size; ++i) {
        Element.getElement(Object.keys(language)[i], 0).innerHTML = (Object.values(language)[i])  
    }
})

loadEventListeners()
