function displayGreeting() {
    const name = document.getElementById('nameInput').value;
    const currentTime = new Date().getHours();
  
    let greeting = '';
    if (currentTime <= 12) {
      greeting = `Good Morning, ${name}!`;
    } else if (currentTime > 12 && currentTime <= 15) {
      greeting = `Good Afternoon, ${name}!`;
    } else {
      greeting = `Good Evening, ${name}!`;
    }

    document.getElementById('greetingMessage').textContent = greeting;
  }

  