"use strict";
let postId = 0;
let main = document.querySelector("section");
let addBtn = document.querySelector('#addpost');
let blogsCountInput = document.querySelector('#counter');
let blogsCount = 0;
blogsCountInput.value = blogsCount;
function createblog() {
    postId++;
    let article = document.createElement('article');
    article.classList.add('blog');
    let header = document.createElement('header');
    header.classList.add('header');
    let h2 = document.createElement('h2');
    h2.classList.add('post-title');
    h2.innerHTML = 'Titel';
    header.append(h2);
    article.append(header);
    let p = document.createElement('p');
    p.classList.add('post-body');
    p.innerHTML = 'you can write your blog here ';
    article.append(p);
    let btn = document.createElement("button");
    btn.innerHTML = "delete"
    btn.setAttribute("style", "background-color: green;");
    article.append(btn);
     return article;
}
addBtn.addEventListener('click', function() {
    main.prepend(createblog());
    blogsCountInput.value = ++blogsCount;
    updatePostList();
});



