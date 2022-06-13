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

footerText.innerHTML = '<a href="http://github.com/endy128">Deisgn by endy128</a>';

content.appendChild(main);

footer.appendChild(footerText);
content.appendChild(footer);

// render the main page first by default
renderHome();


