const langToggle = document.getElementById('langToggle');

// Text translations
const translations = {
  en: {
    heading: "Welcome to Our Site",
    paragraph: "Discover our features and services designed just for you.",
    contact: "Contact Us",
    buy: "Buy Now",
  },
  de: {
    heading: "Willkommen auf unserer Seite",
    paragraph: "Entdecken Sie unsere Funktionen und Dienstleistungen, die speziell für Sie entwickelt wurden.",
    contact: "Kontaktieren Sie uns",
    buy: "Jetzt kaufen",
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  document.getElementById('heading').textContent = translations[lang].heading;
  document.getElementById('paragraph').textContent = translations[lang].paragraph;
  document.getElementById('contact').textContent = translations[lang].contact;
  document.getElementById('buy').textContent = translations[lang].buy;
  langToggle.textContent = lang === 'en' ? 'DE' : 'EN';
  currentLang = lang;
}

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'de' : 'en';
  setLanguage(newLang);
});

setLanguage(currentLang);
