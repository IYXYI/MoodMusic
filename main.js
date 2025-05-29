// main.js
function generateResponse() {
  const mood = document.getElementById('mood').value.toLowerCase();
  const responseEl = document.getElementById('response');

  const responses = {
    happy: "Keep that joy flowing 🌞",
    sad: "It's okay. Take a deep breath 🌧️",
    excited: "Ride the wave! 🚀",
    default: "Stay grounded, stay curious."
  };

  responseEl.textContent = responses[mood] || responses.default;
}
