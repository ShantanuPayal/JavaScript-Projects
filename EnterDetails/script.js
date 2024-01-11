const form = document.getElementById('personalDetailsForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting by default

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value;
  const dateOfJoining = document.getElementById('dateOfJoining').value;

  if (name.trim() === '' || dob.trim() === '' || gender === '' || address.trim() === '' || dateOfJoining.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // You can perform further validation or processing here

  // If all validation passes, you can proceed with the form submission or other actions
  alert('Form submitted successfully!');
});
