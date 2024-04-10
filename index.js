const grace = new Fighter('Grace');
const ulder = new Paladin('Ulder');
const moana = new Monk('Moana');
const draven = new Berzerker('Draven');
const carl = new Assassin('Carl');
const voldemor = new Wizard('Voldemor');
const lilith = new Demon('Lilith');

const game = new Game([grace, ulder, moana, draven, carl, voldemor, lilith]); //create an array of players

let gameTurn = document.getElementById('gameTurn');
// console.log(gameTurn);
gameTurn.addEventListener('click', 
  function(){
    game.watchStats();
    game.startTurn();
    gameTurn.innerHTML = "Continue";
  }
);