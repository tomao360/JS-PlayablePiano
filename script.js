const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];

// new Audio creates a HTML audio element
let audio = new Audio("tunes/a.wav"); // By default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // Passing audio src based on the key pressed
  audio.play(); // Playing audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // Getting the key that clicked element
  clickedKey.classList.add("active"); // Adding active class to the clicked key element
  setTimeout(() => {
    clickedKey.classList.remove("active"); // Removing active class after 150 ms from the clicked key element
  }, 150);

  return audio;
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); // Add data-key value to the allKeys array

  // Calling playTune function with passing data-key value of the li as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value; // Passing the range slider value as an audio volume
};

const showHideKeys = () => {
  // Toggling hide class from each key on the checkbox click
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  // Call the playTune function only if the pressed key is in the allKeys array
  if (allKeys.includes(e.key)) playTune(e.key);
};

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
