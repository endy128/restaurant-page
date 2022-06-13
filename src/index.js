import { renderHome } from "./home";
import { renderNav } from "./nav";

const createDiv = (name, innerHTML) => {
    const div = document.createElement('div');
    div.classList.add(name);
    if (innerHTML) {
        const span = document.createElement('span');
        span.innerHTML = innerHTML;
        div.appendChild(span);
    }
    return div;
}



const initialRender = (() => {
    // get cache of the #content div
   const content = document.querySelector('#content');
   
   // render the nav bar (and header)
   renderNav(content);
   
   content.appendChild(createDiv('main'));
   
   content.appendChild(createDiv('footer', '<a href="http://github.com/endy128">Deisgn by endy128</a>'));
   
   // render the main page first by default
   renderHome();
   
})();


// const initialRender = () => {
//  // get cache of the #content div
// const content = document.querySelector('#content');

// // render the nav bar (and header)
// renderNav(content);

// content.appendChild(createDiv('main'));

// content.appendChild(createDiv('footer', '<a href="http://github.com/endy128">Deisgn by endy128</a>'));

// // render the main page first by default
// renderHome();

// };

// initialRender();