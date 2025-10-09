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
  resultTxt.textContent = "";
  resultImg.style.opacity = 0;
  resultImg.style.transform = "translateY(10px)";
  resultImg.src = myImgUrl;

  setTimeout(() => {
    resultImg.style.transition = "opacity 1s ease, transform 0.6s ease";
    resultImg.style.opacity = 1;
    resultImg.style.transform = "translateY(0)";
  }, 100);

  let i = 0;
  const typingSpeed = 30;
  function type() {
    if (i < myDetails.length) {
      resultTxt.textContent += myDetails.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, 300);
}
