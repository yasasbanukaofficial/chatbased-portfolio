// Main Elements
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Result Elements
const resultImg = document.getElementById("resultImg");
const resultTxt = document.getElementById("resultTxt");

// Suggestion Elements
const aboutMeSuggestion = document.getElementById("about-me");
const educationSuggestion = document.getElementById("education");
const projectsSuggestion = document.getElementById("projects");

// Results
const myImgUrl = "./assets/img/yasas-banuka.jpg";
const myDetails =
  "Hi I'am Yasas Banuka also known as banu but I like to have some random texts over here";

sendBtn.onclick = () => {
  const msg = userInput.value;
  console.log(msg);
  userInput.value = "";
};

aboutMeSuggestion.onclick = aboutMe;

function aboutMe() {
  resultImg.src = myImgUrl;
  resultTxt.textContent = myDetails;
}
