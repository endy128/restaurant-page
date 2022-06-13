import { createItem } from "./home";


const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createItem(
            'English Breakfast',
            'Fried eggs, bacon, sausages, beans, toast, black pudding, tomatoes & mushrooms'
        )
    );

    menu.appendChild(
        createItem(
            'Continental Breakfast',
            'Home made croissant with servings of jam or chocolate spread & delicious fruit yoghurt on the side'
        )
    );
    menu.appendChild(
        createItem(
            'Huevos Rancheros',
            'Mexican style brunch of eggs, onion, pepper, garlic, tomatoes, olive oil & coriander on a hot tortilla'
        )
    );

  return menu;  
}


const renderMenu = () => {
    const main = document.querySelector('.main');
    main.appendChild(createMenu());
}

export { renderMenu };