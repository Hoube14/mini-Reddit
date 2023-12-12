
fetch('https://dummyjson.com/posts')
    .then(function (res) {
        return res.json();
    }).then(function (res) {
        fetchPosts(res.posts);
    });

function fetchPosts(posts) {
    // DOM
    // Document Object Model

    let list = document.getElementById("main-container");
    document.body.append(list);

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        let li = document.createElement("li");
        list.append(li);

        li.innerHTML = `<div id="card-${i}">
        <h2 id="card-title-${i}">${post.title}</h2>
        <p id="card-body-${i}">${post.body}</p>
        <a id="card-tags-${i}">${post.tags}</a>
        </div>`
    }
}

let postButton = document.getElementById('postButton');
let postInput = document.getElementById('postInput');
let submitButton = document.getElementById('submitButton');
let postedMessages = document.getElementById('postedMessages');

let createPost = [];


function postMessage() {
    let post = {
        title: postTitle.value,
        tags: postTags.value,
        body: postInput.value,
    };

    let li = document.createElement("li");
    li.innerHTML = `<div id="card-">
        <h2 id="card-title">${post.title}</h2>
        <p id="card-body">${post.body}</p>
        <a id="card-tags">${post.tags}</a>
        </div>`


    document.getElementById("main-container").prepend(li);

}

submitButton.addEventListener('click', postMessage);



/*
let div = document.createElement("div");
let postButton = document.createElement("button");


postButton.innerText = "Create post!";

div.append(postButton);
document.body.append(div);

let createPost = [];

postButton.addEventListener("click", function (newPosts) {

})

function newPosts(){

}
*/