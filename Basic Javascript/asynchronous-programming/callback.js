const posts = [
    { title: "Post One", body: "This is post one"},
    { title: "Post Two", body: "This is post two"}
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    // Call callback after some specific time
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// After create the post, callback will be called
createPost({ title: "Post Three", body: "This is post three" }, getPosts);