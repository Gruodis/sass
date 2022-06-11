/*
author: "Bill Bryson"
id: 2
img: "https://in3.dev/knygos/imgs/1589467539_kunas-vadovas-po-zmogaus-organizma-1.jpg"
price: 13.98
time: 1604066611
title: "Kūnas: vadovas po žmogaus organizmą"
type: 5

{id: 5, type: 2, img: "https://in3.dev/knygos/imgs/1600439228_treniruokite_smegenis_2d1+.jpg",…}
1: {id: 7, type: 1, img: "https://in3.dev/knygos/imgs/1601897389_Pergudrauti_zudika.jpg",…}
2: {id: 1, type: 1, img: "https://in3.dev/knygos/imgs/1508769498_namu-frontas_1508760277.jpg",…}
3: {id: 8, type: 1,…}
4: {id: 6, type: 2, img: "https://in3.dev/knygos/imgs/1600844302_Kiekvienos_dienos_terapija.jpg",…}
5: {id: 2, type: 5,…}
6: {id: 3, type: 5,…}
7: {id: 4, type: 7, img: "https://in3.dev/knygos/imgs/1599827884_v-_reklamai_1599637616.jpg", title: "V",…}

BOOK TYPES

0: {id: 1, title: "Grožinė literatūra"}
1: {id: 2, title: "Populiarioji psichologija"}
2: {id: 3, title: "Literatūra vaikams ir jaunimui"}
3: {id: 4, title: "Pomėgiai"}
4: {id: 5, title: "Šeima, sveikata"}
5: {id: 6, title: "Literatūra užsienio kalbomis"}
6: {id: 7, title: "Dalykinė literatūra"}
7: {id: 8, title: "Vadovėliai, pratybos ir knygos mokslams"}

*///////////////////


const pushHere = document.getElementById('pushHere');

// create copy of fethed data for sorting
let localBookData = [];

let localBookTypes = [];


/* Client side, works in Chrome 55 and Firefox 52 without transpilation */
//https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/
async function fetchURLs() {
    try {
        // Promise.all() lets us coalesce multiple promises into a single super-promise
        let data = await Promise.all([
            /* Alternatively store each in an array */
            // var [x, y, z] = await Promise.all([
            // parse results as json; fetch data response has several reader methods available:
            //.arrayBuffer()
            //.blob()
            //.formData()
            //.json()
            //.text()
            fetch('https://in3.dev/knygos/').then((response) => response.json()),// parse each response as json
            fetch('https://in3.dev/knygos/types/').then((response) => response.json()),



        ]);

        if (data[0].length === 0 || data[1].length === 0) {
            data = await Promise.all([
                /* Alternatively store each in an array */
                // var [x, y, z] = await Promise.all([
                // parse results as json; fetch data response has several reader methods available:
                //.arrayBuffer()
                //.blob()
                //.formData()
                //.json()
                //.text()
                fetch('https://in3.dev/knygos/').then((response) => response.json()),// parse each response as json
                fetch('https://in3.dev/knygos/types/').then((response) => response.json()),



            ]);
        }

        localBookData = data[0];

        localBookTypes = data[1];

        console.log('data: ', data, data[0].length, data[1].length);
        console.log('books data: ', localBookData);
        console.log('books types: ', localBookTypes);

        render();



        // for (var i of data) {
        //     console.log(`RESPONSE ITEM \n`);
        //     for (var obj of i) {
        //         console.log(obj);
        //         //logger utility method, logs output to screen
        //         console.log(obj);
        //     }
        // }

    } catch (error) {
        console.log(error);
    }
}

fetchURLs();

const render = () => {
    /*
    ****** clear list
    */
    pushHere.innerHTML = '';
    /*
    ****** create list
    */

    let createUl = document.createElement('ul');
    createUl.classList.add('list-group', 'list-group-flush', 'custom');

    /*
    ****** compare bookData type: data with localBookTypes id:
    */
    localBookData.forEach(book => {

        let bookType;
        let bookTypeTitle;

        localBookTypes.forEach(type => {
            if (book.type === type.id) {

                bookType = document.createElement("p");
                bookType.classList.add('img-fluid');

                bookTypeTitle = document.createTextNode(type.title);
                bookType.appendChild(bookTypeTitle);

            }
        })


        console.log('SORTING ARRAY: ', book.localBookTypes);



        let createLi = document.createElement('li');
        let bookTitle = document.createTextNode(book.title);

        let bookAuthorParagraph = document.createElement("p");
        let bookAuthorSpan = document.createElement("small");
        let bookAuthor = document.createTextNode("Autorius: " + book.author);
        bookAuthorSpan.appendChild(bookAuthor);
        bookAuthorParagraph.appendChild(bookAuthorSpan);


        let image = document.createElement("IMG");
        image.setAttribute("src", `${book.img}`);
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        image.setAttribute("alt", `${book.title}`);
        image.classList.add('img-fluid');


        // createLi.setAttribute("id", "show")
        createLi.classList.add('alert', 'list-group-item', 'custom');


        let bookTitleSpan = document.createElement('h6');
        bookTitleSpan.appendChild(bookTitle);

        let bookPriceSpan = document.createElement("small");
        let bookPrice = document.createTextNode("€" + book.price);
        bookPriceSpan.appendChild(bookPrice);


        createLi.append(bookTitleSpan, bookAuthorParagraph, bookType, image, bookPriceSpan);

        pushHere.appendChild(createLi);
        createLi.appendChild(createUl);
    })


}


// const request = async () => {


//     const response = await fetch('https://in3.dev/knygos/');
//     const remoteBooksData = await response.json();


//     console.log('async await: ', remoteBooksData);
// }

// request();

// fetch('https://in3.dev/knygos/types/') // async script
//     .then(response => response.json())
//     .then(remoteDataBookTypes => {


//         localBookTypes = remoteDataBookTypes;

//         console.log('Book types inner: ', localBookTypes);


//         // render();
//     })
// console.log('Book types: ', localBookTypes);





// fetch('https://in3.dev/knygos/') // async script
//     .then(response => response.json())
//     .then(dataFromOutside => {


//         localBookData = dataFromOutside;

//         console.log('Books data: ', localBookData);





//         // render();
//     })

