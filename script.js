document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    document.getElementById('formStatus').textContent = 'Thank you for your message';
};
