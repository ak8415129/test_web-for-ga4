document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    document.getElementById('formResponse').innerHTML = 
        `<p>Thank you, ${name}. We have received your message.</p>`;

    // Clear the form
    document.getElementById('contactForm').reset();
});
