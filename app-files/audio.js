(function () {
  var audio = document.getElementById('bgAudio');
  var toggle = document.getElementById('audioToggle');
  var toast = document.getElementById('audioToast');
  var toastTimer = null;

  function setPlaying(playing) {
    if (playing) {
      toggle.classList.add('playing');
    } else {
      toggle.classList.remove('playing');
    }
  }

  function hideToast() {
    toast.classList.remove('visible');
  }

  function showToast() {
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 5000);
  }

  function startAudio() {
    audio.volume = 0.5;
    var promise = audio.play();
    if (promise !== undefined) {
      promise.then(function () {
        setPlaying(true);
        hideToast();
      }).catch(function () {
        setPlaying(false);
        showToast();
      });
    } else {
      setPlaying(true);
    }
  }

  function onFirstInteraction() {
    if (audio.paused) {
      startAudio();
    }
    document.removeEventListener('click', onFirstInteraction);
    document.removeEventListener('touchstart', onFirstInteraction);
    document.removeEventListener('keydown', onFirstInteraction);
    document.removeEventListener('pointerdown', onFirstInteraction);
  }

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (audio.paused) {
      audio.play();
      setPlaying(true);
      hideToast();
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  toast.addEventListener('click', function () {
    audio.play();
    setPlaying(true);
    hideToast();
  });

  window.addEventListener('load', function () {
    startAudio();

    if (audio.paused) {
      document.addEventListener('click', onFirstInteraction);
      document.addEventListener('touchstart', onFirstInteraction);
      document.addEventListener('keydown', onFirstInteraction);
      document.addEventListener('pointerdown', onFirstInteraction);
    }
  });
})();
