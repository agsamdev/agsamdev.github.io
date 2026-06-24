
  const albumData = {
    afterHours: {
      title: "AFTER HOURS",
      year: "2020",
      art: "images/after-hours.jpg",
      tracks: [
        { name: "Alone Again", duration: "4:10" },
        { name: "Too Late", duration: "3:59" },
        { name: "Hardest To Love", duration: "3:31" },
        { name: "Scared To Live", duration: "3:11" },
        { name: "Snowchild", duration: "4:07" },
        { name: "Escape From LA", duration: "5:55" },
        { name: "Heartless", duration: "3:18" },
        { name: "Faith", duration: "4:43" },
        { name: "Blinding Lights", duration: "3:20" },
        { name: "In Your Eyes", duration: "3:57" },
        { name: "Save Your Tears", duration: "3:35" },
        { name: "After Hours", duration: "6:01" }
      ]
    }
  };

  function loadTracklist(albumKey) {
    const selectedAlbum = albumData[albumKey];
    const targetContainer = document.getElementById("track-rows-target");

    if (!targetContainer) {
      console.error("Error: Could not find element with ID 'track-rows-target'");
      return;
    }

    // Update left panel elements securely
    if (document.getElementById("active-album-art")) {
      document.getElementById("active-album-art").src = selectedAlbum.art;
    }
    if (document.getElementById("active-album-title")) {
      document.getElementById("active-album-title").innerText = selectedAlbum.title;
    }
    if (document.getElementById("active-album-year")) {
      document.getElementById("active-album-year").innerText = selectedAlbum.year;
    }

    // Flush old elements out
    targetContainer.innerHTML = "";

    // Dynamically inject the rows visible in your image reference framework
    selectedAlbum.tracks.forEach((track, index) => {
      const row = document.createElement("div");
      row.className = "track-item-row";
      
      row.onclick = () => {
        alert(`Now playing: "${track.name}"`);
      };

      row.innerHTML = `
        <span class="row-idx-num">${index + 1}</span>
        <span class="row-song-title">${track.name}</span>
        <span class="row-song-time">${track.duration}</span>
        <button class="btn-row-play" aria-label="Play track">▶</button>
      `;
      targetContainer.appendChild(row);
    });
  }

  // Self-executing setup check to make sure rows populate immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => loadTracklist("afterHours"));
  } else {
    loadTracklist("afterHours");
  }
