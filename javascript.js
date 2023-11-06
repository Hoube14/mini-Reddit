let posts = document.getElementById("postList");

fetch('https://dummyjson.com/posts')
    .then(function (res) {
        return res.json();
    }).then(function (res) {
        fetchPosts(res.posts);
    });

function fetchPosts(posts) {
    // DOM
    // Document Object Model

    let list = document.createElement("ul");
    document.body.append(list);

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        let li = document.createElement("li");
        list.append(li);

        li.innerText = post.title + " - " + post.body + " - " + post.tags;
    }
}

list.classlist.add("allPosts");