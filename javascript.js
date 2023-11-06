let postList = document.getElementById("postList");



fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);


for (let object of posts) {
    let li = document.createElement("li")
    li.innerText = object.title;
    postList.appendChild(li);
}



