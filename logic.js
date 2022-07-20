let gamecards = document.querySelectorAll('.game-card');
let gameEnd = document.querySelector('.gameEnd');

gamecards.forEach(gamecard => gamecard.onclick = cardClicked);


let firstSrc;
let secondSrc;
let firstId;
let secondId;

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
  if (firstSrc !== undefined && secondSrc !== undefined) {
    if (firstSrc == secondSrc) {
      console.log("OK");
      firstSrc = undefined;
      secondSrc = undefined;
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
  gamecards.forEach(gamecard => gamecard.onclick = cardClicked);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
