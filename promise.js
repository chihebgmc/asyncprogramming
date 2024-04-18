const posts = [
  { title: 'Post1', body: 'This is post 1' },
  { title: 'Post2', body: 'This is post 2' },
];

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = '';
      posts.forEach(element => {
        output += `<li>${element.body}</li>`;
      });
      document.body.innerHTML = output;
      const error = true;
      if (!error) {
        resolve('succeeded');
      } else {
        reject('failed');
      }
    }, 1000);
  });
}

function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);

      const error = false;
      if (!error) {
        resolve('post created successfully');
      } else {
        reject('Error: error creating post');
      }
    }, 2000);
  });
}
createPost({ title: 'Post3', body: 'This is Post 3' })
  .then(getPosts)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
