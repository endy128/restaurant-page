import { changePage } from "./changePage";

const renderNav = (content) => {
    
    // const content = document.querySelector('#content');

    const nav = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const homeText = document.createElement('h2');
    const menuText = document.createElement('h2');
    const contactText = document.createElement('h2');

    const header = document.createElement('div');
    const headerText = document.createElement('h1');


    header.className = 'header';
    nav.className = 'nav';

    home.className = 'nav-button';
    menu.className = 'nav-button';
    contact.className = 'nav-button';

    // give each h2 text an extra data-* so we can use it to render different pages
    homeText.dataset.page = 0;
    menuText.dataset.page = 1;
    contactText.dataset.page = 2;


    headerText.textContent = 'My Restaurant';
    homeText.textContent = 'Home';
    menuText.textContent = 'Menu';
    contactText.textContent = 'Contact';

    header.appendChild(headerText);
    home.appendChild(homeText);
    menu.appendChild(menuText);
    contact.appendChild(contactText);

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(header);
    content.appendChild(nav);

    const addEventListeners = () => {
        const buttons = Array.from(document.querySelectorAll('.nav-button'));
        buttons.forEach(button => button.addEventListener('click', changePage));
            
    };
    
    
    addEventListeners();


}
    
export { renderNav };