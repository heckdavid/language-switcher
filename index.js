const languageSectionEl = document.querySelector('.language-section');
const buttonEls = document.querySelectorAll('.button');
const textTitleEl = document.querySelector('.title');
const textDescriptionEl = document.querySelector('.description');

buttonEls.forEach((buttonEl) => {
  buttonEl.addEventListener('click', () => {
        languageSectionEl.querySelector('.active').classList.remove('.active');
        buttonEl.classList.add('active');

        const attribute = buttonEl.getAttribute('data-language');

        textTitleEl.textContent = dictionary[attribute].title;
        textDescriptionEl.textContent = dictionary[attribute].description;
    });
});

const dictionary = {
    english: {
        title: 'Translating static text.',
        description: 'Translating static text'
    },
    french: {
        title: 'Traduire du texte statique.',
        description: 'Traduire du texte statique.'
    },
    german: {
        title: 'Statischen Text übersetzen.',
        description: 'Statischen Text übersetzen.'
    }
}
