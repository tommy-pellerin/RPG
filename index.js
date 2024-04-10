const grace = new Fighter('Grace');
const ulder = new Paladin('Ulder');
const moana = new Monk('Moana');
const draven = new Berzerker('Draven');
const carl = new Assassin('Carl');
const voldemor = new Wizard('Voldemor');
const lilith = new Demon('Lilith');

function startGame() {
  const characters = [grace, ulder, moana, draven, carl, voldemor, lilith]; //create an array of characters
  // create a method to shuffle all 7 character
  const shuffle = array => { 
    return array.sort(() => Math.random() - 0.5); 
  }; 
  const shuffledCharacters = shuffle(characters);
  // after shuffled characters, pick up only 5 of them
  const players = shuffledCharacters.slice(0,5);
  // create party with players picked
  const game = new Game(players);

  // Return the game object
  return game;
}

let game;

let startGameButton = document.getElementById('startGame');
startGameButton.addEventListener('click',
  function(){
    let welcomText = "# Welcome to my Javascript battle game ! #"
    console.log("#".repeat(welcomText.length));
    console.log(welcomText);
    console.log("#".repeat(welcomText.length));
    game = startGame();
    game.watchStats();
    game.startGame();
  }
);


let gameTurnButton = document.getElementById('gameTurn');
// console.log(gameTurn);
gameTurnButton.addEventListener('click',
  function(){  
    if (game) {
      game.startTurn();
      gameTurnButton.innerHTML = "Next turn";
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }
  }
);

//change player
let changePlayerButton = document.getElementById('changePlayer');
changePlayerButton.addEventListener('click',
  function(){
    if (game) {
      console.log("Im in changing player button before calling the changePlayer method");
      game.changePlayer();
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }
  }
);

//whatch stats
let watchStatsButton = document.getElementById('watchStats');
watchStatsButton.addEventListener('click',  
  function(){
    if (game) {
      game.watchStats();
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }
  }
);