const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'English Breakfast',
            'Fried eggs, bacon, sausages, beans, toast, black pudding, tomatoes & mushrooms'
        )
    );

    menu.appendChild(
        createMenuItem(
            'Continental Breakfast',
            'Home made croissant with servings of jam or chocolate spread & delicious fruit yoghurt on the side'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Huevos Rancheros',
            'Mexican style brunch of eggs, onion, pepper, garlic, tomatoes, olive oil & coriander on a hot tortilla'
        )
    );

  return menu;  
}

const createMenuItem = (name, description) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    const dishName = document.createElement('h2');
    dishName.textContent = name;

    const dishDesc = document.createElement('p');
    dishDesc.textContent = description;

    menuItem.appendChild(dishName);
    menuItem.appendChild(dishDesc);

    return menuItem;
}

const renderMenu = () => {
    const main = document.querySelector('.main');
    main.appendChild(createMenu());
}

export { renderMenu };