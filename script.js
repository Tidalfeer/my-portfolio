document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'none') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message')
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formError = document.getElementById('formError');

    form.addEventListener('submit', (event) => {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formError.textContent = '';

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        }

        if (messageInput.value.trim() === ''){
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        if (!isValid) {
            formError.textContent = 'Please fix errors before submitting.';
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

    const toggleThemeButton = document.getElementById('toggleTheme');
    toggleThemeButton.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function (){
            projects.forEach(project => {
                if (project.getAttribute('data-category') === category || category === 'all') {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
