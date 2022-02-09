// create a module for our project
(() => {
  // grab a ref to the elements we need to use
  const theAudio = document.querySelector("audio"),
        trackButtons = document.querySelectorAll(".track-ref"),
        playButton = document.getElementById("playButton"),
        pauseButton = document.getElementById("pauseButton"),
        rewindButton = document.getElementById("rewindButton");

  function loadTrack() {
    // debugger;
    // change the src property of the audio element and load the new one in and then play it!
    theAudio.src = `audio/${this.dataset.trackref}.mp3`;
    theAudio.load();

    playTrack();
  }

  function playTrack() { theAudio.play(); }

  function pauseTrack() { theAudio.pause(); }

  function rewindTrack() {
    theAudio.currentTime = 0;
    
    playTrack();
  }

    trackButtons.forEach(button => button.addEventListener("click", loadTrack));

    playButton.addEventListener("click", playTrack);
    pauseButton.addEventListener("click", pauseTrack);
    rewindButton.addEventListener("click", rewindTrack);
})()
