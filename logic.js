let gamecards = document.querySelectorAll('.game-card');
let gameEnd = document.querySelector('.gameEnd');
let gametxt = document.querySelector('.gametxt');

let array = [];
for (let i = 0; i < gamecards.length; i++) {
  array.push(gamecards[i].querySelector('.kot').src);
}
const shuffledArray = array.sort(() => Math.random() - 0.5);

for (let i = 0; i < gamecards.length; i++) {
  gamecards[i].querySelector('.kot').src = shuffledArray[i];
}

gamecards.forEach(gamecard => gamecard.onclick = cardClicked);


let firstSrc;
let secondSrc;
let firstId;
let secondId;
let scores = 0;

async function cardClicked() {
  // console.log(this.id);
  gamecards.forEach(gamecard => gamecard.onclick = null);
  this.querySelector('.kot').style.display = "flex";
  this.querySelector('.karta').style.visibility = "hidden";
  let kot = this.querySelector('.kot');
  if (firstSrc == undefined) {
    gamecards.forEach(gamecard => gamecard.onclick = null);
    firstSrc = kot.src;
    firstId = this.id;
  } else {
    gamecards.forEach(gamecard => gamecard.onclick = null);
    secondSrc = kot.src;
    secondId = this.id;
  }
  if (firstSrc !== undefined && secondSrc !== undefined && firstId != secondId) {
    if (firstSrc == secondSrc) {
      console.log("OK");
      firstSrc = undefined;
      secondSrc = undefined;
      scores++;
    } else {
      console.log("NO");
      firstSrc = undefined;
      secondSrc = undefined;
      await sleep(700);
      this.querySelector('.kot').style.display = "none";
      gamecards[firstId].querySelector('.kot').style.display = "none";
      this.querySelector('.karta').style.visibility = "visible";
      gamecards[firstId].querySelector('.karta').style.visibility = "visible";
    }
    firstSrc = undefined;
    secondSrc = undefined;
  }
  if (scores >= 12) {
    gametxt.innerText = "You win";
  }
  gamecards.forEach(gamecard => gamecard.onclick = cardClicked);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
