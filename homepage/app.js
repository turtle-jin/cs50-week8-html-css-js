window.onload = function() {
    const songs = ["恋人未满", "你快回来", "sometimes"];
    const icons = ["icon_1", "icon_2", "icon_3"];

    for (let i = 0; i < songs.length; i++) {
      let song = document.getElementById(songs[i]);
      let icon = document.getElementById(icons[i]);

      icon.onclick = function() {
        if (song.paused) {
          song.play();
          icon.src = "images/pauseicon.png";
        } else {
          song.pause();
          icon.src = "images/playicon.png";
        }
      };
    }
  };

