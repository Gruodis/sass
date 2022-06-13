let classExists = null;


export const TestModule = (message) => {
    console.log(message);
};

const pushHere = document.getElementById('pushHere');
const darkMode = document.getElementById('icon');

let foo = false;


let localBookData = [];

console.log(document.getElementsByTagName("div")[1]);



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

    let mode = localStorage.getItem('mode');

    if (mode === 'mode') {
        document.body.classList.add("dark-mode");
    }



})(window, document);


export const TestRun = () => {

    /*
    ****** check LocalStorage for Dark Mode
    */
    let darkM = window.localStorage.getItem("mode");
    foo = document.body.classList.contains('dark-mode');

    console.log(`Check foo `, foo, darkMode);

    if (darkM === 'dark-mode') {
        console.log(`true `, darkMode);
        document.body.classList.add("dark-mode");
    }
    else {
        console.log(`false `, darkMode);
        document.body.classList.remove("dark-mode");
    }



    /*
    ****** clear list
    */
    pushHere.innerHTML = '';
    /*
    ****** create list
    */

    localBookData.forEach(book => {





        let createLi = document.createElement('div');
        // createLi.setAttribute("id", "show")
        createLi.classList.add('list-group-item', 'mb-3', 'p-4');


        let bookTitle = document.createTextNode(book.title);
        let bookTitleSpan = document.createElement('h2');
        bookTitleSpan.appendChild(bookTitle);


        let bookAuthorParagraph = document.createElement("pre");
        let bookAuthorSpan = document.createElement("small");
        let bookAuthor = document.createTextNode("Autorius: " + book.body);
        bookAuthorSpan.appendChild(bookAuthor);
        bookAuthorParagraph.appendChild(bookAuthorSpan);


        createLi.append(bookTitleSpan, bookAuthorParagraph);

        pushHere.appendChild(createLi);

    })

};
/*
****** Button for Dark/Light mode
*/
darkMode.addEventListener("click", function () {
    foo = document.body.classList.contains('dark-mode');

    if (!foo) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', null);
    }
    console.log(`Click `, foo)
});