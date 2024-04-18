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

      const error = false;
      if (!error) {
        resolve('succeeded');
        document.body.innerHTML = output;
      } else {
        reject('failed');
        document.body.innerHTML = "<p style='color:red'>Error</p>";
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

async function init() {
  try {
    const message1 = await createPost({
      title: 'Post3',
      body: 'This is Post 3',
    });
    console.log(message1);
    const message2 = await getPosts();
    console.log(message2);
  } catch (error) {
    console.log(error);
  }
}

init();

function test() {
  console.log('start testing');
  try {
    console.log(x);
  } catch (error) {
    console.log(error);
  }
  console.log('end testing');
}

// test();
