const renderHome = () => {
    const main = document.querySelector('.main'); 

    main.appendChild(
        createItem(
            'Welcome',
            `Welcome to our amazing restaurant!! We cook lovely food which you order at tables and our wonderful staff bring it right to you!! The chefs are just amazing and we're so sure you'll love the food THAT much that you come back again and again!`
        )
    );

    main.appendChild(
        createItem(
            'Opening Times:',
            `Mon: 12:00 - 22:00 <br/> Tue: 12:00 - 22:00 <br> Wed: 12:00 - 22:00 <br/> Thur: 12:00 - 22:00 <br/> Fri: 11:00 - 23:00 <br/> Sat: 11:00 - 23:00 <br/> Sun: 12:00 - 22:00`
        )
    );

    main.appendChild(
        createItem(
            'Offers',
            `Free birthday cake with every birthday celebration!`
        )
    );


return main;
}


const createItem = (header, paragraph) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const myHeader = document.createElement('h2');
    myHeader.textContent = header;

    const myParagraph = document.createElement('p');
    myParagraph.innerHTML = paragraph;

    item.appendChild(myHeader);
    item.appendChild(myParagraph);

    return item;
}


export { renderHome, createItem };