
let posts = [];
let submitPostButton = document.getElementById("submitButton");

submitPostButton.addEventListener("click", addNewPost);

let localPosts = localStorage.getItem("posts");
if (localPosts !== null) {
    posts = JSON.parse(localPosts);
    fetchPosts(posts);
} else {
    postMessage(posts);
}

function storePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
    console.log(localStorage);
}


async function fetchPosts() {
    // Gör ett anrop mot url och tar emot respons (posts)
    let respons = await fetch("https://dummyjson.com/posts");

    // json "parse:ar" responsen vilket i detta fallet är posts
    respons = await respons.json();

    // Du returnerar din json:fierade response
    return respons.posts;
}

async function init() {
    // Tar emot responsen som returneras från fetchPosts i variabeln posts
    posts = await fetchPosts();

    // anropar och skickar in responsen från fetchPosts()
    renderPosts();
}


function renderPosts() {
    // Elementet där vi ska trycka in alla våra posts
    let mainContainerElement = document.getElementById("main-container");

    mainContainerElement.innerHTML = "";

    // Loopar igenom posts arrayen för varje post
    for (let i = 0; i < posts.length; i++) {
        // skapar ett li för varje post i posts arrayn
        let liElement = document.createElement("li");

        // Hämtar ut post objektet i posts arrayn med index värdet är i loopen
        let post = posts[i];

        // Fyller vårt nyskapade li element med html med data från post objektet
        liElement.innerHTML = createHtmlPostElement(post, i);

        // Lägger till vårt nyskapade li html element i main-container elementet
        mainContainerElement.prepend(liElement);
    }
    //
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
    renderPosts(posts);
}

function likeClicked(postId) {
    let post = posts[postId];
    post.reactions++;
    renderPosts();
}


init();

