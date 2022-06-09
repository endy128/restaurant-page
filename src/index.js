import { renderHome } from "./home";
import { renderNav } from "./nav";


 // get cache of the #content div
const content = document.querySelector('#content');

// render the nav bar (and header)
renderNav(content);

// main div of the page
const main = document.createElement('div');

const footer = document.createElement('div');
const footerText = document.createElement('span');

main.className = 'main';
footer.className = 'footer';

footerText.textContent = 'Design by Neil Douglas';

content.appendChild(main);

footer.appendChild(footerText);
content.appendChild(footer);

// render the main page first by default
renderHome();


