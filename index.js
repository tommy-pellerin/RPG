const grace = new Fighter('Grace');
const ulder = new Paladin('Ulder');
const moana = new Monk('Moana');
const draven = new Berzerker('Draven');
const carl = new Assassin('Carl');
const voldemor = new Wizard('Voldemor');
const lilith = new Demon('Lilith');

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

// alert("Please select your character")
let gameTurnButton = document.getElementById('gameTurn');
// console.log(gameTurn);
gameTurnButton.addEventListener('click',
  function(){
    // game.watchStats();
    game.startTurn();
    gameTurnButton.innerHTML = "Continue";
  }
);

let watchStatsButton = document.getElementById('watchStats');
watchStatsButton.addEventListener('click',  
  function(){
    game.watchStats();
  }
);