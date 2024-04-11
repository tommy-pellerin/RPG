const grace = new Fighter('Grace');
const ulder = new Paladin('Ulder');
const moana = new Monk('Moana');
const draven = new Berzerker('Draven');
const carl = new Assassin('Carl');
const voldemor = new Wizard('Voldemor');
const lilith = new Demon('Lilith');

let user; // Define user outside of startGame

function startGame() {
  
  if (typeof user === 'object' && user !== null) {
    const characters = [grace, ulder, moana, draven, carl, voldemor, lilith]; //create an array of characters
    // create a method to shuffle all 7 character
    const shuffle = array => { 
      return array.sort(() => Math.random() - 0.5); 
    }; 
    const shuffledCharacters = shuffle(characters);
    // after shuffled characters, pick up only 5 of them
    const players = shuffledCharacters.slice(0,4);
    players.push(user);
    players.forEach(player => {
      player.state = "playing"
    });
    // create party with players picked
    const game = new Game(players);
    game.watchStats();
    game.startGame();
    // Return the game object
    return game;
    
  } else {
    console.log("please select your classe");
    alert("please select your classe");    
  }  
}

let game;
window.game = game;
let powerOn;

let startGameButton = document.getElementById('startGame');
startGameButton.addEventListener('click',
  function(){
    let welcomText = "# Welcome to my Javascript battle game ! #"
    console.log("#".repeat(welcomText.length));
    console.log(welcomText);
    console.log("#".repeat(welcomText.length));
    console.log("please select your classe");
    // alert("please select your classe");
    powerOn = true;
  }
);

let launchGameButton = document.getElementById('launchGame');
launchGameButton.addEventListener('click',
  function(){
    if (powerOn) {
      game = startGame();

    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }
    
  }
);

//see turn
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
      // console.log("Im in changing player button before calling the changePlayer method");
      game.changePlayer();
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }
  }
);

//watch stats
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

//classe selection for user
let fighterButton = document.getElementById('fighter');
let paladinButton = document.getElementById('paladin');
let monkButton = document.getElementById('monk');
let berzerkerButton = document.getElementById('berzerker');
let assassinButton = document.getElementById('assassin');
let wizardButton = document.getElementById('wizard');
let demonButton = document.getElementById('demon');

fighterButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Fighter(userName);
      console.log(`You have selected : >> ${userName} the Fighter <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

paladinButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Paladin(userName);
      console.log(`You have selected : >> ${userName} the Paladin <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

monkButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Monk(userName);
      console.log(`You have selected : >> ${userName} the Monk <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

berzerkerButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Berzerker(userName);
      console.log(`You have selected : >> ${userName} the Berzerker <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

assassinButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Assassin(userName);
      console.log(`You have selected : >> ${userName} the Assassin <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

wizardButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Wizard(userName);
      console.log(`You have selected : >> ${userName} the Wizard <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

demonButton.addEventListener('click',
  function() {
    if (powerOn) {
      let userName = prompt("Please enter your name");
      user = new Demon(userName);
      console.log(`You have selected : >> ${userName} the Demon <<`);
      launchGameButton.classList.add('yourClassName'); //show the launch game button
      console.log("Please click on button : 'Launch game when you are ready'");
    } else {
      console.log('Error: Game is not started yet.');
      alert('Error: Game is not started yet.');
    }    
  }
);

