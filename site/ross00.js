const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  alert(`Thank you for contacting us, ${name}! We will get back to you as soon as possible.`);
  form.reset();
});
