const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-1150');
    const contactButton = document.querySelector('.cs-nav-button');
    const closeButton = document.createElement('span');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('cs-close-button');

    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the button
        contactForm.classList.add('visible');
        contactForm.appendChild(closeButton);
    });

    // Close the contact form when clicking the "X" button
    closeButton.addEventListener('click', function() {
        contactForm.classList.remove('visible');
        contactForm.removeChild(closeButton);
    });

    // Hide the contact form when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!contactForm.contains(event.target) && !contactButton.contains(event.target) && !closeButton.contains(event.target)) {
            contactForm.classList.remove('visible');
            contactForm.removeChild(closeButton);
        }
    });
});

