// const post_form = document.getElementById('post_add_form');
// const msg = document.querySelector('.msg');
// const all_posts = document.querySelector('.all-post');
// const edit_post = document.getElementById('edit_post');
// const comment_user = document.getElementById('comment-user');

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyCk83Hb2_sp8IMxwrQqBSmwvX4aEsydAsY",
//     authDomain: "jsi-project-7c0f8.firebaseapp.com",
//     projectId: "jsi-project-7c0f8",
//     storageBucket: "jsi-project-7c0f8.appspot.com",
//     messagingSenderId: "439960833178",
//     appId: "1:439960833178:web:f913f98faca85b1159a323"
// };

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// post_form.onsubmit = (e) => {
//     e.preventDefault();

//     const form_data = new FormData(e.target);
//     const data = Object.fromEntries(form_data.entries());
//     const { aname, aphoto, pcontent, pdate, pphoto } = Object.fromEntries(form_data.entries());

//     if (!aname || !aphoto || !pcontent || !pdate) {
//         msg.innerHTML = setAlert('Fields Are Required!');
//     } else {
//         const id = Math.floor(Math.random() * 1000) + '_' + Date.now(); // Can be replaced with server-generated ID
//         const dataObj = { ...data, id };

//         writePostData(dataObj); // Write data to Firebase
//         e.target.reset();
//         getAllPosts();
//     }
// };

// const writePostData = (data) => {
//     database.ref('posts/' + data.id).set(data); // Write data to specific post path
// };

// const getAllPosts = () => {
//     let list = '';

//     database.ref('posts').on('value', (snapshot) => {
//         const data = snapshot.val();

//         if (!data) {
//             all_posts.innerHTML = `<div class="card shadow-sm text-center mt-3"><div class="card-body">No post found</div></div>`;
//             return;
//         }

//         list = ''; // Reset list before adding new posts
//         Object.entries(data).forEach(([key, value]) => {
//             list += `
//         <div class="post">
//           <div class="info">
//             </div>
//           <img src="${value.pphoto}" class="post-image" alt="">
//           <div class="post-content">
//             </div>
//           </div>
//         `;
//         });

//         all_posts.innerHTML = list;
//     });
// };

// getAllPosts();

// // ... (rest of the code with modifications)

// all_posts.onclick = (e) => {
//     // Similar logic to identify edit/delete actions
//     if (e.target.hasAttribute('editlsdata')) {
//         const id = e.target.getAttribute('editlsdata');
//         editPost(id); // Call editPost function 
//     }

//     if (e.target.hasAttribute('deleteLsData')) {
//         const id = e.target.getAttribute('deleteLsData');
//         const confirmDelete = confirm('Are Your Sure? You want to delete this post?');

//         if (confirmDelete) {
//             deletePost(id); // Call deletePost function
//             getAllPosts();
//         }
//     }
// };

// const editPost = (id) => {
//     database.ref('posts/' + id).once('value', (snapshot) => {
//         const data = snapshot.val();

//         // Edit form population with retrieved data
//         edit_post.innerHTML = `
//       `;
//     });
// };

// const deletePost = (id) => {
//     database.ref('posts/' + id).remove(); // Remove post from Firebase
// };

// edit_post.onsubmit = (e) => {
//     // Similar logic to edit submitted data
//     e.preventDefault();

//     // ... (rest of the edit logic with Firebase update)

//     const { aname, aphoto, pcontent, pdate, pphoto, id } = Object.fromEntries(form_data.entries());
//     const updates = { aname, aphoto, pcontent, pdate, pphoto }; // Update data object

//     database.ref('posts/' + id).update(updates); // Update specific post in Firebase
//     getAllPosts();
// };
const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  inputFile.click();
});

inputFile.addEventListener('change', function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const allImg = imgArea.querySelectorAll('img');
      allImg.forEach(item => item.remove());

      const imgUrl = e.target.result;
      const img = document.createElement('img');
      img.src = imgUrl;
      imgArea.appendChild(img);
      imgArea.classList.add('active');
      imgArea.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});
