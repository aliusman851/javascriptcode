"use strict";
let id = 0;
let string = '';
let Array = [];
let section = document.querySelector("section");
let addBtn = document.querySelector('#addpost');
let delBtn = document.querySelector('#remove');
let counter = document.querySelector('#counter');
let count = 0;
counter.value = count;
function createblog() {
    id++;
    let article = document.createElement('article');
    article.setAttribute("class", 'blog-post');
    let header = document.createElement('header');
    header.setAttribute("class", 'post-header');
    let h2 = document.createElement('h2');
    h2.setAttribute("class", 'post-title');
    h2.setAttribute('id', id);
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
addBtn.addEventListener('click', function () {
    section.prepend(createblog());
    counter.value = ++count;

});
function deletepost() {
    if (count >= 1) {
        counter.value = --count;
        section.removeChild(section.children[0]);
    }
    else {
        console.log(" no post to delete");
    }

}
