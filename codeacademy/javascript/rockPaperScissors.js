// Function to get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }
  };

  //console.log(getUserChoice('ttt'));

  //Function to get the computer's choice

  const getComputerChoise = () => {
    const randomNumber = Math.floor(Math.random()* 3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };