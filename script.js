function playSong(button) {
  let card = button.parentElement;
  let audio = card.querySelector("audio");

  // Stop all songs first
  document.querySelectorAll("audio").forEach(song => {
    if (song !== audio) {
      song.pause();
      song.currentTime = 0;
    }
  });

  // Toggle play/pause
  if (audio.paused) {
    audio.play();
    button.innerText = "⏸";
  } else {
    audio.pause();
    button.innerText = "▶";
  }
}