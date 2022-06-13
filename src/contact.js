import { createItem } from "./home";


const renderContact = () => {
    const main = document.querySelector('.main'); 

    main.appendChild(
        createItem(
            'Address',
            `123 Little Road </br> Main Road </br> City </br> 12345 </br><br> <h2>Phone: </h2> 0123 456 798`
        )
    );

    main.appendChild(
        createItem(
            'Map',
            `Map location`
        )
    );



return main;
}


// const createItem = (header, paragraph) => {
//     const item = document.createElement('div');
//     item.classList.add('item');

//     const myHeader = document.createElement('h2');
//     myHeader.textContent = header;

//     const myParagraph = document.createElement('p');
//     myParagraph.innerHTML = paragraph;

//     item.appendChild(myHeader);
//     item.appendChild(myParagraph);

//     return item;
// }


export { renderContact };
