// Function to get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      return computerChoice === 'scissors' ? 'You win!' : 'Computer wins!';
    } else if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'You win!' : 'Computer wins!';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'paper' ? 'You win!' : 'Computer wins!';
    }
  };
  
  // Function to start the program and display the results
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // Replace 'rock' with prompt or input from user
    const computerChoice = getComputerChoice();
    console.log('Your choice: ' + userChoice);
    console.log('Computer\'s choice: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Call the playGame function to start the game
  playGame();
  