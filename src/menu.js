const renderMenu = () => {


const main = document.querySelector('.main');  

const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');

const item1Text = document.createElement('p');
const item2Text = document.createElement('p');
const item3Text = document.createElement('p');

item1.className = 'item';
item2.className = 'item';
item3.className = 'item';

item1Text.textContent = 'Breakfast Menu';
item2Text.textContent = 'Lunch Menu';
item3Text.textContent = 'Dinner Menu';

item1.appendChild(item1Text);
item2.appendChild(item2Text);
item3.appendChild(item3Text);

main.appendChild(item1);
main.appendChild(item2);
main.appendChild(item3);

}

export { renderMenu };