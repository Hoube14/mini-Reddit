let postsList = [];
let postButton = document.getElementById('postButton');
let postInput = document.getElementById('postInput');
let submitButton = document.getElementById('submitButton');
let postedMessages = document.getElementById('postedMessages');



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
        tags: postTags.value,
        body: postInput.value,
    };

    postsList.push(post);

    let li = document.createElement("li");
    li.innerHTML = createPost(post);


    document.getElementById("main-container").prepend(li);

}

submitButton.addEventListener('click', postMessage);

like - button.addEventListener("click", post.reactions);

function createPost(post) {

    return `<div id="card-">
        <h2 id="card-title">${post.title}</h2>
        <p id="card-body">${post.body}</p>
        <a id="card-tags">${post.tags}</a>
        <a id="card-reactions">${post.reactions}</a>
        <button id="like-button">Like</button
        </div>`
}

