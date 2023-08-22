const dropdown = document.querySelector(".home-navbar-dropdown");

const languages = {
    'english': document.getElementById('option-english'),
    'portuguese': document.getElementById('option-portuguese')
}

const portuguese = {
    '.home-title': 'Começar um novo jogo em dicex',
    '.home-subtitle': 'Dicex pode transmitir uma experiência épica em um duelo de dados!'
}

const english = {
    '.home-title': 'Start a new game in dicex',
    '.home-subtitle': 'Dicex can convey an epic experience in a dice duel!'
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
        document.querySelector('.navbar-dropdown').innerHTML = textNavbar['portuguese']
        changeLanguageOfTexts(portuguese, count)

    }
    if(!response) {
        document.querySelector('.navbar-dropdown').innerHTML = textNavbar['english']
        changeLanguageOfTexts(english, count)
    }
})

const changeLanguageOfTexts = ((language, size) => {
    for(let i = 0; i < size; ++i) {
        document.querySelector(Object.keys(language)[i]).innerHTML = (Object.values(language)[i])
        // console.log((Object.values(language)[i]))    
    }
})

loadEventListeners()