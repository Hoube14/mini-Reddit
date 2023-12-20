
let posts = [];
let submitPostButton = document.getElementById("submitButton");

submitPostButton.addEventListener("click", addNewPost);

function storePosts() {
    localStorage.clear();
    localStorage.setItem("posts", JSON.stringify(posts));
}

async function fetchPosts() {
    let respons = await fetch("https://dummyjson.com/posts?limit=150");
    respons = await respons.json();
    return respons.posts;

}

async function init() {

    let postsFromLocalStorage = localStorage.getItem("posts");
    if (postsFromLocalStorage !== null) {
        let parsedPosts = JSON.parse(postsFromLocalStorage);
        if (parsedPosts.length > 0) {
            posts = parsedPosts;
        } else {
            posts = await fetchPosts();
        }
    } else {
        posts = await fetchPosts();
    }
    renderPosts();
    storePosts();
}

function renderPosts() {

    let mainContainerElement = document.getElementById("main-container");

    mainContainerElement.innerHTML = "";


    for (let i = 0; i < posts.length; i++) {

        let liElement = document.createElement("li");

        let post = posts[i];

        liElement.innerHTML = createHtmlPostElement(post, i);

        mainContainerElement.prepend(liElement);
    }

}


function createHtmlPostElement(post, i) {
    return `<div id="card-">
        <h2 id="card-title">${post.title}</h2>
        <p id="card-body">${post.body}</p>
        <a id="card-tags">${post.tags}</a>
        <a id="cardReactions">${post.reactions}</a>
        <button onClick="likeClicked(event.target.id)" id="${i}">Like</button
        </div>`;
}

function addNewPost() {
    let post = {
        title: postTitle.value,
        body: postInput.value,
        tags: postTags.value,
        reactions: 0,
    };
    posts.push(post);
    renderPosts();
    storePosts();

}

function likeClicked(postId) {
    let post = posts[postId];
    post.reactions++;
    renderPosts();
    storePosts();
}


init();

