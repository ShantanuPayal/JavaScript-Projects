function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    displayChoices(playerChoice, computerChoice);
    determineWinner(playerChoice, computerChoice);
  }
  
  function displayChoices(playerChoice, computerChoice) {
    const playerChoiceDiv = document.getElementById('player-choice');
    const computerChoiceDiv = document.getElementById('computer-choice');
  
    playerChoiceDiv.innerHTML = `<img src="${playerChoice}.png" alt="${playerChoice}">`;
    computerChoiceDiv.innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;
  }
  
  function determineWinner(playerChoice, computerChoice) {
    const resultMessage = document.getElementById('result');
    const winner = checkWinner(playerChoice, computerChoice);
  
    if (winner === 'player') {
      resultMessage.textContent = 'You win!';
    } else if (winner === 'computer') {
      resultMessage.textContent = 'Computer wins!';
    } else {
      resultMessage.textContent = "It's a tie!";
    }
  }
  
  function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }
  
  // Add animation classes for the choices
  document.getElementById('player-choice').addEventListener('animationend', removeAnimationClass);
  document.getElementById('computer-choice').addEventListener('animationend', removeAnimationClass);
  
  function removeAnimationClass(event) {
    event.target.classList.remove('shake-animation');
    event.target.removeEventListener('animationend', removeAnimationClass);
  }
  
  // Trigger animation on click
  const buttons = document.querySelectorAll('.options button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const playerChoiceDiv = document.getElementById('player-choice');
      const computerChoiceDiv = document.getElementById('computer-choice');
      playerChoiceDiv.classList.add('shake-animation');
      computerChoiceDiv.classList.add('shake-animation');
    });
  });

  
  
  