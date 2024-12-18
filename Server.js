let timmer = 60;
let score = 0;
let randomVal = 0;

function getScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getHit() {
  randomVal = Math.floor(Math.random() * 10);
  document.querySelector("#getHit").textContent = randomVal;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 60; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#panelBottom").innerHTML = clutter;
}

function runTimmer() {
  let interval = setInterval(() => {
    if (timmer > 0) {
      timmer--;
      document.querySelector("#timmerVal").textContent = timmer;
    } else {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => {
        bubble.classList.add('fade-out'); 
      });
      setTimeout(() => {
        document.querySelector("#panelBottom").innerHTML = `<h1 id="gameOver">Game Over.</h1>`;
      }, 500); 
      
      clearInterval(interval);
    }
  }, 1000);
}

document.querySelector("#panelBottom").addEventListener("click", function (e) {
  let bubbleVal = Number(e.target.textContent);
  if (randomVal == bubbleVal) {
    getScore();
    makeBubble();
    getHit();
  }
});

getHit();
makeBubble();
runTimmer();
