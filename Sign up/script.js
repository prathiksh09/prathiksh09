
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {

e.preventDefault();

  
  const name = nameInput.value;

  
  alert(`Hello, ${name} ! Thank you for signing up.`);
});