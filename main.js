function generateResponse() {
  const mood = document.getElementById('mood').value.toLowerCase().trim();
  const responseEl = document.getElementById('response');
  const breathingDiv = document.getElementById('breathingExercise');
  const breathInstruction = document.getElementById('breathInstruction');

  const responses = {
    happy: ["Keep that joy flowing 🌞", "Smile and share the vibes! 😄"],
    sad: ["It's okay. Take a deep breath 🌧️", "Things will get better 🌈"],
    excited: ["Ride the wave! 🚀", "Channel that energy! 🔥"],
    default: ["Stay grounded, stay curious.", "Every emotion has its place."]
  };

  const responseList = responses[mood] || responses.default;
  responseEl.textContent = responseList[Math.floor(Math.random() * responseList.length)];

  // Show/hide breathing exercise only for sad mood
  if (mood === 'sad') {
    breathingDiv.style.display = 'block';
    breathInstruction.textContent = 'Get comfortable, relax your shoulders, and follow the steps below.';
  } else {
    breathingDiv.style.display = 'none';
  }

  // Set music
  const musicLinks = {
    happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
    sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVrtsSlLKzro",
    excited: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ7mSWCFIT7v",
  };

  document.getElementById("musicFrame").src = musicLinks[mood] || "";
}

// Breathing exercise implementation
function startBreathing() {
  const breathInstruction = document.getElementById('breathInstruction');
  const steps = [
    "Breathe in slowly through your nose for 4 seconds...",
    "Hold your breath for 7 seconds...",
    "Exhale slowly through your mouth for 8 seconds...",
    "Repeat this cycle 3 times."
  ];
  let i = 0;
  breathInstruction.textContent = steps[i];

  const interval = setInterval(() => {
    i++;
    if (i < steps.length) {
      breathInstruction.textContent = steps[i];
    } else {
      breathInstruction.textContent = "Great job! Hope you feel a bit better 😊";
      clearInterval(interval);
    }
  }, 8000); // Change steps every 8 seconds
}
