document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами скоро.');
        this.reset();  // Очистить форму
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
