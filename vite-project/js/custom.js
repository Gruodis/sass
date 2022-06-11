export const TestModule = (message) => {
    console.log(message);
};

const pushHere = document.getElementById('pushHere');
let localBookData = [];


export const TestPost = (async function (window, document) {
    try {
        let request = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
        ]);
        // let displayPosts = await request.json()
        // console.log(displayPosts);



        localBookData = request[0];

        TestRun();

    } catch (error) {
        console.log(error);
    }



})(window, document);


export const TestRun = () => {

    /*
       ****** clear list
       */
    pushHere.innerHTML = '';
    /*
    ****** create list
    */

    // let createUl = document.createElement('ul');
    // // createUl.classList.add();

    // console.log(createUl);

    /*
    ****** compare bookData type: data with localBookTypes id:
    */
    localBookData.forEach(book => {

        // let bookType = "TYPE";
        // let bookTypeTitle;

        // localBookTypes.forEach(type => {
        //     if (book.type === type.id) {

        //         bookType = document.createElement("p");
        //         bookType.classList.add('img-fluid');

        //         bookTypeTitle = document.createTextNode(type.title);
        //         bookType.appendChild(bookTypeTitle);

        //     }
        // })


        // console.log('SORTING ARRAY: ', book.localBookTypes);



        let createLi = document.createElement('div');
        // createLi.setAttribute("id", "show")
        createLi.classList.add('list-group-item', 'mb-3', 'p-4');


        let bookTitle = document.createTextNode(book.title);
        let bookTitleSpan = document.createElement('h2');
        bookTitleSpan.appendChild(bookTitle);


        let bookAuthorParagraph = document.createElement("p");
        let bookAuthorSpan = document.createElement("small");
        let bookAuthor = document.createTextNode("Autorius: " + book.body);
        bookAuthorSpan.appendChild(bookAuthor);
        bookAuthorParagraph.appendChild(bookAuthorSpan);


        // let image = document.createElement("IMG");
        // image.setAttribute("src", `${book.img}`);
        // image.setAttribute("width", "304");
        // image.setAttribute("height", "228");
        // image.setAttribute("alt", `${book.title}`);
        // image.classList.add('img-fluid');





        // let bookPriceSpan = document.createElement("small");
        // let bookPrice = document.createTextNode("€" + book.price);
        // bookPriceSpan.appendChild(bookPrice);


        createLi.append(bookTitleSpan, bookAuthorParagraph);

        pushHere.appendChild(createLi);
        // createUl.appendChild(createLi);
    })


    //     displayPosts.forEach(post => {
    //     console.log(`Title: ${post.title}, ' 
    //      'Content: ${post.body}`);

    // })
};
