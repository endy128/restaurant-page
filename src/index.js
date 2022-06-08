import { renderHome } from "./home";
import { renderMenu } from './menu';

const content = document.querySelector('#content');

const header = document.createElement('div');
const headerText = document.createElement('h1');

const nav = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
const homeText = document.createElement('h2');
const menuText = document.createElement('h2');
const contactText = document.createElement('h2');

const main = document.createElement('div');

const footer = document.createElement('div');
const footerText = document.createElement('span');

header.className = 'header';
nav.className = 'nav';
home.className = 'home';
menu.className = 'menu';
contact.className = 'contact';
main.className = 'main';
footer.className = 'footer';

headerText.textContent = 'My Restaurant';
homeText.textContent = 'Home';
menuText.textContent = 'Menu';
contactText.textContent = 'Contact';
footerText.textContent = 'Design by Neil Douglas';

header.appendChild(headerText);
home.appendChild(homeText);
menu.appendChild(menuText);
contact.appendChild(contactText);

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

content.appendChild(header);
content.appendChild(nav);
content.appendChild(main);

footer.appendChild(footerText);
content.appendChild(footer);




renderHome();