// main.js
function generateResponse() {
  const moodInput = document.getElementById('mood');
  const mood = moodInput.value.toLowerCase().trim();
  const responseEl = document.getElementById('response');
  const musicFrame = document.getElementById('musicFrame');

  const responses = {
    happy: ["Keep that joy flowing 🌞", "Smile and share the vibes! 😄"],
    sad: ["It's okay. Take a deep breath 🌧️", "Things will get better 🌈"],
    excited: ["Ride the wave! 🚀", "Channel that energy! 🔥"],
    default: ["Stay grounded, stay curious.", "Every emotion has its place."]
  };

  const musicLinks = {
    happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
    sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVrtsSlLKzro",
    excited: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ7mSWCFIT7v"
  };

  // Show response text
  const responseList = responses[mood] || responses.default;
  responseEl.textContent = responseList[Math.floor(Math.random() * responseList.length)];

  // Update music iframe or clear if no match
  if (musicLinks[mood]) {
    musicFrame.src = musicLinks[mood];
  } else {
    musicFrame.src = ""; // clear iframe if no matching mood
  }
}
