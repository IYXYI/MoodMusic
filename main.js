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


const musicLinks = {
  happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
  sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVrtsSlLKzro",
  excited: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ7mSWCFIT7v",
};

document.getElementById("musicFrame").src = musicLinks[mood] || "";
