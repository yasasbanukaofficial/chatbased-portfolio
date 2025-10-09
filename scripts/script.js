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

const educationLogo = "./assets/img/ijse-logo.png";

aboutMeSuggestion.onclick = aboutMe;
educationSuggestion.onclick = myEducationDetails;

sendBtn.onclick = () => {
  const msg = userInput.value;
  console.log(msg);
  userInput.value = "";
};

let typingTimeouts = [];

function typeText(element, text, speed = 30) {
  typingTimeouts.forEach(clearTimeout);
  typingTimeouts = [];

  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      const timeout = setTimeout(type, speed);
      typingTimeouts.push(timeout);
    }
  }

  type();
}

function aboutMe() {
  showImage(myImgUrl);
  typeText(resultTxt, myDetails, 30);
}

function myEducationDetails() {
  const myDetails =
    "🎓 B.Sc. in Computer Science — University of Somewhere. Currently pursuing AI and ML engineering.";

  showImage(educationLogo);
  typeText(resultTxt, myDetails, 30);
}

function projects() {
  const myImgUrl = "./assets/img/projects.jpg";
  const myDetails =
    "🚀 Projects include a chat-based portfolio AI, weather app, and a modern full-stack dashboard.";

  showImage(myImgUrl);
  typeText(resultTxt, myDetails, 30);
}

function showImage(imgUrl) {
  resultImg.style.visibility = "visible";
  resultImg.style.opacity = 0;
  resultImg.style.transform = "translateY(10px)";
  resultImg.src = imgUrl;

  setTimeout(() => {
    resultImg.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    resultImg.style.opacity = 1;
    resultImg.style.transform = "translateY(0)";
  }, 50);
}
