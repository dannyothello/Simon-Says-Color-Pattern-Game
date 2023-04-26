// Global constants
const cluePauseTime = 333; // How long to pause in between clues
const nextClueWaitTime = 1000; // How long to wait before starting playback of the clue sequence

// Global variables
let clueHoldTime = 1000
let pattern = new Array(8);
let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;  //Must be between 0.0 and 1.0
let guessCounter = 0;
let playerMistakes;

function startGame(){

  // Initialize game variables
  clueHoldTime = 1000
  progress = 0;
  gamePlaying = true;
  playerMistakes = 0

  // Initialize pattern
  for (var i = 0; i < pattern.length; i++) {
    pattern[i] = getRandomNum(8) + 1
  }

  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound synthesis functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523.3,
  6: 659.3,
  7: 784,
  8: 932.3
}

// Plays each sound in playback playClueSequence
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

// Plays sound when user mouses down on button
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

// Stops sound when user mouses up on button
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; // Set delay to initial wait time
  for(let i=0;i<=progress;i++){ // For each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // Set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime
    clueHoldTime -= 15;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  // Don't record/validate guesses if game isn't active
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    // Guess is correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        // It's game over. Player wins. 
        winGame();
      }
      else{
        // Pattern is correct. Play next clue segment. 
        progress++;
        playClueSequence();
      }
    }
    else{
      // Check the next guess. 
      guessCounter++;
    }
    
  }
  else{
    // Add a strike
    playerMistakes += 1
    // Player loses if 3 strikes 
    if (playerMistakes === 3){
      loseGame();
    }
    else{
      giveStrike();
    }
  }
}

// Player guessed wrong 3 times. Player loses the game.
function loseGame(){
  stopGame();
  alert("3 strikes. You lost.");
}

// Player guessed pattern of 8 correctly. Player wins game. 
function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function giveStrike(){
  alert(`Strike ${playerMistakes}`)
  playClueSequence();
}

function getRandomNum(max){
  return Math.floor(Math.random() * max);
}

function toggleNotes() {
  const buttons = document.querySelectorAll(".game-button");
  const checkbox = document.getElementById("toggle-notes");
  if (checkbox.checked) {
    buttons.forEach((button) => (button.querySelector("span").style.display = "inline"));
  } else {
    buttons.forEach((button) => (button.querySelector("span").style.display = "none"));
  }
}

window.onload = function() {
  toggleNotes();
};