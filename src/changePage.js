import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const changePage = (e) => {

    const pageNum = e.target.dataset.page;
    document.querySelector('.main').innerHTML = '';

    removeSelection();
    e.target.classList.add('selected');

    if (pageNum === '0') renderHome();
    if (pageNum === '1') renderMenu();
    if (pageNum === '2') renderContact();

};

const removeSelection = () => {
    const buttons = Array.from(document.querySelectorAll('div.nav-button > h2'));
    buttons.forEach(button => button.classList.remove('selected'));
};


export { changePage };
