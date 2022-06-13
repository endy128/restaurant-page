import { changePage } from "./changePage";

const createHeader = () => {
    const header = document.createElement('div');
    const headerText = document.createElement('h1');
    
    header.classList.add('header');
    
    headerText.textContent = 'Breakfast Restaurant';
    header.appendChild(headerText);

    return header;
}

const createNavItem = (name, pageNum) => {
    const button = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.dataset.page = pageNum;
    button.classList.add('nav-button');
    
    // as the home page is first to render, set it to selected for css bottom border
    if (name === 'Home') h2.classList.add('selected');

    button.appendChild(h2);

    return button;

}

const createNavBar = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    nav.appendChild(createNavItem('Home', 0));
    nav.appendChild(createNavItem('Menu', 1));
    nav.appendChild(createNavItem('Contact', 2));

    return nav;

}

const renderNav = (content) => {
    content.appendChild(createHeader());
    content.appendChild(createNavBar());

    addEventListeners();
}

const addEventListeners = () => {
    const buttons = Array.from(document.querySelectorAll('.nav-button'));
    buttons.forEach(button => button.addEventListener('click', changePage));
        
};
    
export { renderNav };