document.getElementById('btn-post-comment').addEventListener('click', function() {
            const commentTextBox = document.getElementById('comment-text-box');
            const newComment = commentTextBox.value;
            const commentContainer = document.getElementById('comment-container');
            // Comment Box Project
            // This script enables users to add comments to a web page.
            // Users can type a comment and submit it, which will then appear below the input box.
            // All logic for handling comment input and display is contained here.
            const commentElement = document.createElement('p');
            commentElement.classList.add('comment');
            commentElement.innerText = newComment;
            commentContainer.appendChild(commentElement);
            commentTextBox.value = '';