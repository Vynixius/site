document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const bgMusic = document.getElementById('bg-music');

  // Set the audio to not autoplay
  bgMusic.autoplay = false;
  bgMusic.load();

  playButton.addEventListener('click', () => {
      if (bgMusic.paused) {
          bgMusic.play();
          playButton.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
          bgMusic.pause();
          playButton.innerHTML = '<i class="fas fa-play"></i>';
      }
  });
});
