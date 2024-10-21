// Using Promises to fetch post details
function fetchPostUsingPromises(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            displayPost(post);
        })
        .catch(error => {
            console.error('Error fetching post with Promises:', error);
        });
}


function displayPost(post) {
    const postDiv = document.getElementById('post');
    postDiv.innerHTML = `
        <h3>Post ID: ${post.id}</h2>
        <h3>User ID: ${post.userId}</h3>
        <h3>Title: ${post.title}</h3>
        <p><strong>Body:</strong> ${post.body}</p>
    `;
}

//using async/await
async function fetchPostUsingAsyn(postId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        displayPost(post);
    }
    catch(err){
        console.log('Error fetching with async await: ',err);
    }
}

fetchPostUsingAsyn(1)
// fetchPostUsingPromises(1);
