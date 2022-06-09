const renderHome = () => {

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

    item1Text.innerHTML = `<h2>Hey there!</h2>Welcome to our amazing restaurant!! We cook 
        lovely food which you order at tables and our wonderful staff
        bring it right to you!! The chefs are just amazing and we're 
        so sure you'll love the food THAT much that you won't be able
        to stop returning`;

    item2Text.innerHTML = '<h2>Opening Times:</h2>' + 'Mon: 12:00 - 22:00' + '<br/>' + 'Tue: 12:00 - 22:00' + '<br/>' + 'Wed: 12:00 - 22:00' + '<br/>' + 'Thur: 12:00 - 22:00'  + '<br/>' + 'Fri: 11:00 - 23:00'  + '<br/>' + 'Sat: 11:00 - 23:00'  + '<br/>' + 'Sun: 12:00 - 22:00';
    item3Text.innerHTML = '<h2>Offers</h2>Free birthday cake with every birthday celebration!';

    item1.appendChild(item1Text);
    item2.appendChild(item2Text);
    item3.appendChild(item3Text);

    main.appendChild(item1);
    main.appendChild(item2);
    main.appendChild(item3);
    
}

export { renderHome };