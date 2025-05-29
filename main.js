// main.js
function generateResponse() {
  const mood = document.getElementById('mood').value.toLowerCase();
  const responseEl = document.getElementById('response');

const responses = {
  happy: ["Keep that joy flowing 🌞", "Smile and share the vibes! 😄"],
  sad: ["It's okay. Take a deep breath 🌧️", "Things will get better 🌈"],
  excited: ["Ride the wave! 🚀", "Channel that energy! 🔥"],
  default: ["Stay grounded, stay curious.", "Every emotion has its place."]
};

  
const responseList = responses[mood] || responses.default;
responseEl.textContent = responseList[Math.floor(Math.random() * responseList.length)];
}
