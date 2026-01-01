document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("introVideo");
  const videoBtn = document.getElementById("videoToggle");
  const audio = document.getElementById("voiceAudio");
  const voiceBtn = document.getElementById("voiceToggle");

  // Safety check
  if (!video || !videoBtn || !audio || !voiceBtn) {
    console.error("Media elements not found");
    return;
  }

  // ▶ VIDEO BUTTON
  videoBtn.addEventListener("click", () => {
    // Stop audio
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      voiceBtn.textContent = "🔊 Voice Intro";
    }

    if (video.paused) {
      video.play();
      videoBtn.textContent = "⏸ Pause Video";
    } else {
      video.pause();

      // ✅ SHOW THUMBNAIL AGAIN
      video.currentTime = 0;
      video.load();

      videoBtn.textContent = "▶ Video Intro";
    }
  });

  // 🔊 VOICE BUTTON
  voiceBtn.addEventListener("click", () => {
    // Pause video & show thumbnail
    if (!video.paused) {
      video.pause();
      video.currentTime = 0;
      video.load(); // ✅ brings back poster
      videoBtn.textContent = "▶ Video Intro";
    }

    if (audio.paused) {
      audio.play();
      voiceBtn.textContent = "⏸ Pause Voice Intro";
    } else {
      audio.pause();
      audio.currentTime = 0;
      voiceBtn.textContent = "🔊 Voice Intro";
    }
  });
});
