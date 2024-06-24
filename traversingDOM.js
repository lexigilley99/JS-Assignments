const header = document.querySelector('header');

const section = document.querySelectorAll('section');

const currentSection = document.querySelector('section.current');

const afterCurrent = currentSection.nextElementSibling;

const previousSection = currentSection.previousElementSibling;
const h2InPreviousSection = previousSection.querySelector('h2');

const divH = currentSec.parentElement

const h2Sections = document.querySelectorAll('section h2');

console.log(header)
console.log(section)
console.log(currentSection)
console.log(afterCurrent)
console.log(previousSection)
console.log(h2InPreviousSection)
console.log(divH)
console.log(h2Sections)