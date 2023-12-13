let postsList = [];
let postButton = document.getElementById('postButton');
let postInput = document.getElementById('postInput');
let submitButton = document.getElementById('submitButton');
let postedMessages = document.getElementById('postedMessages');
let likeCount = 0;

let posts = [];

let localPosts = localStorage.getItem("posts");
if (localPosts !== null) {
    posts = JSON.parse(localPosts);
    fetchPosts(posts);
} else {
    createPost(posts);
}

function storePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
    console.log(localStorage);
}

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
        postsList.push(post);

        let li = document.createElement("li");
        list.append(li);

        li.innerHTML = createPost(post);

    }

}

function postMessage() {
    let post = {
        title: postTitle.value,
        body: postInput.value,
        tags: postTags.value,
        reactions: 0,
    };
    posts.push(post);
    storePosts(posts);
    postsList.push(post);

    let li = document.createElement("li");
    li.innerHTML = createPost(post);


    document.getElementById("main-container").prepend(li);

}
submitButton.addEventListener("click", postMessage)

function createPost(post, index) {

    return `<div id="card-">
        <h2 id="card-title">${post.title}</h2>
        <p id="card-body">${post.body}</p>
        <a id="card-tags">${post.tags}</a>
        <a id="cardReactions">${post.reactions}</a>
        <button id="likeButton">Like</button
        </div>`

}
/*
function onClickLike(index) {
    console.log(index);
}
*/
let reactionButton = document.getElementById("likeButton");
reactionButton.innerText = "👍";

reactionButton.addEventListener("click", function () {
    cardReactions.innerText++;
});
