document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});


// Get references to elements
const postQuestionLink = document.getElementById('post-question');
const questionForm = document.getElementById('question-form');
const postQuestionForm = document.getElementById('postQuestionForm');

// Show the form when "Post" is clicked
postQuestionLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    questionForm.style.display = questionForm.style.display === 'none' ? 'block' : 'none';
});

postQuestionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const question = Object.fromEntries(new FormData(postQuestionForm));
    fetch('http://localhost:8081/question/add', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("question posted successfully!")
        postQuestionForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error posting question!");
    });
    
});