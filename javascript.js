"use strict";
let postId = 0;
let section = document.querySelector("section");
let addBtn = document.querySelector('#addpost');
let blogsCountInput = document.querySelector('#counter');
let blogsCount = 0;
blogsCountInput.value = blogsCount;
function createblog() {
    postId++;
    let article = document.createElement('article');
    let header = document.createElement('header');
    let h2 = document.createElement('h2');
    
    
    h2.innerHTML = 'Titel';
    
    header.append(h2);
    
    article.append(header);
    let p = document.createElement('p');
    p.innerHTML = 'you can write your blog here ';
    article.append(p);
    let btn = document.createElement("button");
    btn.innerHTML = "delete"
    
    
    article.append(btn);
     return article;
}
addBtn.addEventListener('click', function() {
    section.prepend(createblog());
    blogsCountInput.value = ++blogsCount;
    
});



