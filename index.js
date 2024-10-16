document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    
    if (name && email && date) {
        document.getElementById('form-message').textContent = `Thank you, ${name}! Your appointment is scheduled on ${date}.`;
        document.getElementById('appointment-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
    }
});
