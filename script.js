let current = 1;

function startCounting() {
  if (current <= 10) {
    document.getElementById("numberDisplay").innerText = current;
    playSound(current);
    current++;
  } else {
    document.getElementById("numberDisplay").innerText = "🎉 انتهت المغامرة!";
  }
}

function playSound(num) {
  const audio = new Audio(`https://example.com/sounds/${num}.mp3`);
  audio.play();
}