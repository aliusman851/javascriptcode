/* 
En given javaskriptfil består av olika funktioner.
För felsökning finns det olika tekniker. Jag kommer att beskriva fler av dem.
Vi kan felsöka rätt under koden där vi vill sätta brytpunkt i visual studio. 
Det kommer att hoppa till källfönstret där vi kan felsöka koden.
Det andra sättet att felsöka är att klicka höger på kromsidan och öppna Inspekt option. 
där vi kan hantera källan i konsolfönstret.


*/
/*
 use strict Används för att deklarera variablerna. strict variabel kan vi inte använda dem utan att deklarera först. 
dessa är globala variabler. vi kan använda dem var som helst på sidan.
*/
"use strict";
let id = 0;
let string = '';
let section = document.querySelector("section");
let addBtn = document.querySelector('#addpost');
let counter = document.querySelector('#counter');
let count = 0;
counter.value = count;
/*
Skapa createblog function skapa bloggen inklusive titel och body.in denna funktion 
article  är föräldernod där header  och paragraph. h2 barn till rubrik
*/
function createblog() {
    id++;
    let article = document.createElement('article');
    article.setAttribute("class", 'blog-post');
    let header = document.createElement('header');
    header.setAttribute("class", 'post-header');
    let h2 = document.createElement('h2');
    h2.setAttribute("onclick", "addtitle(obj)");
    h2.setAttribute('class', 'post-title');

    h2.innerHTML = 'Titel';

    header.appendChild(h2);
    article.appendChild(header);
    let p = document.createElement('p');
    p.setAttribute("class", 'post-body');
    p.innerHTML = 'write your blog here';
    article.appendChild(p);
    let button = document.createElement("button");
    button.innerHTML = ("delete");
    button.setAttribute("class", "delete");
    button.setAttribute("onclick", "deletepost()");
    article.appendChild(button);

    return article;
}
/*
Används för att lägga till blodet i section med html-kod. 
prepend metod för att lägga till noder eller DOM-sträng efter det första barnet till en föräldernod

*/
addBtn.addEventListener('click', function () {
    section.prepend(createblog());
    counter.value = ++count;

});
/*
Deletepost ta bort posten för att radera barnet eller bloggen som vi har skapat.
*/
function deletepost() {
    if (count >= 1) {
        counter.value = --count;
        section.removeChild(section.children[0]);
    }


}
/*
Addtitle funktion lägg till titelfunktion med parametern clicked  för att lägga till titeln i den skapade bloggen
*/
function addTitle(clicked) {
    if (string != '') {
        console.log('Too many..');
    } else {
        let id = clicked.getAttribute('id');
        string = 'title';
        let input = document.createElement('input');
        input.placeholder = 'give your title here';
        input.classList.add('inputTitle');
        input.setAttribute('id', id);
        clicked.replaceWith(input);
    }
}

/*
AddBody funktion lägg till body  med parametern clicked  för att lägga till bodyi den skapade bloggen
*/
function addBody(clicked) {
    if (string != '') {
        console.log('Too many');
    } else {
        string = 'body';
        let textarea = document.createElement('textarea');
        textarea.placeholder = 'give here atleast one word';
        textarea.classList.add('inputBody');
        clicked.replaceWith(textarea);
    }
}
/*
Denna funktion med parameter input och 
textarea hämta informationen från funktions addtitle 
och addbody och kör dem enligt kod.
*/
function submitText(input, textarea) {
    if (input === null && textarea === null) {
        console.log('nothing here')
    } else if (string === 'title' && input.value != '') {
        let title = document.createElement('h2');
        title.classList.add('post-title');
        title.innerHTML = input.value;
        title.setAttribute('id', input.getAttribute('id'));
        input.replaceWith(title);
        string = '';

    } else if (string === 'body' && textarea.value != '') {
        let body = document.createElement('p');
        body.classList.add('post-body');
        body.innerHTML = textarea.value;
        textarea.replaceWith(body);
        string = '';
    }
}

document.addEventListener('click', (e) => {
    let input = document.querySelector('.inputTitle');
    let textarea = document.querySelector('textarea');
    let clicked = e.target;

    switch (clicked.className) {
        case 'post-title':
            addTitle(clicked);
            break;
        case 'post-body':
            addBody(clicked);
            break;
        default:
            submitText(input, textarea);
            break;
    }
});