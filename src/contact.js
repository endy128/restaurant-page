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

export { renderContact };
