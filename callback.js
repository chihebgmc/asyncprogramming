const posts = [
  { title: 'Post1', body: 'This is post 1' },
  { title: 'Post2', body: 'This is post 2' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(element => {
      output += `<li>${element.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(newPost, callback) {
  setTimeout(() => {
    posts.push(newPost);
    callback();
  }, 2000);
}

createPost({ title: 'Post3', body: 'This is post 3' }, getPosts);
