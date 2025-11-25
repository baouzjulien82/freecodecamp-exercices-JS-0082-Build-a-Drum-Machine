// Event Listener sur les pad 'on click'
const touches = document.querySelectorAll('.drum-pad');
touches.forEach(touche => {
  touche.addEventListener('click', () => {
    const audio = touche.querySelector('audio');
    // initialise la piste à 0 avant de la jouer
    audio.currentTime = 0;
    audio.play();
    document.getElementById('display').textContent = touche.id;
    // Ajoute la classe active
    touche.classList.add('active');

    // Retire la classe après 150 ms
    setTimeout(() => {
      touche.classList.remove('active');
    }, 150);

  });
});

// Event Listener sur les touches clavier
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    document.getElementById('display').textContent = audio.parentElement.id;
    // Ajoute l’effet visuel
    const pad = audio.parentElement;
    pad.classList.add('active');
    setTimeout(() => {
      pad.classList.remove('active');
    }, 150);
  };
});

// gestion du volume
const volumeSlider = document.querySelector('input[type="range"]');
volumeSlider.addEventListener('input', (e) => {
  const volume = e.target.value;
  document.querySelectorAll('audio').forEach(audio => {
    audio.volume = volume;
  });
});
