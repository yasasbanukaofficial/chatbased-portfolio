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

// Project Section
const projectSection = document.getElementById("projectSection");

// Results
const myImgUrl = "./assets/img/yasas-banuka.jpg";
const myDetails =
  "Hi I'am Yasas Banuka also known as banu but I like to have some random texts over here";

const educationLogo = "./assets/img/ijse-logo.png";
const educationDetails =
  "🎓 B.Sc. in Computer Science — University of Somewhere. Currently pursuing AI and ML engineering.";

aboutMeSuggestion.onclick = aboutMe;
educationSuggestion.onclick = myEducationDetails;
projectsSuggestion.onclick = myProjectDetails;
sendBtn.onclick = response;

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
  projectSection.style.visibility = "hidden";
  resultTxt.style.visibility = "visible";
  showImage(myImgUrl);
  typeText(resultTxt, myDetails, 30);
}

function myEducationDetails() {
  projectSection.style.visibility = "hidden";
  resultTxt.style.visibility = "visible";
  showImage(educationLogo);
  typeText(resultTxt, educationDetails, 30);
}

function myProjectDetails() {
  resultImg.style.visibility = "hidden";
  resultTxt.style.visibility = "hidden";

  projectSection.style.visibility = "visible";
  projectSection.style.opacity = 0;
  projectSection.style.transform = "translateY(50px)";

  setTimeout(() => {
    projectSection.style.transition =
      "opacity 0.6s ease, transform 0.6s ease-in-out";
    projectSection.style.opacity = 1;
    projectSection.style.transform = "translateY(0)";
  }, 50);
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

function response() {
  const msg = userInput.value.toLowerCase();

  if (
    msg.includes("about me") ||
    msg.includes("about yourself") ||
    msg.includes("personal info") ||
    msg.includes("who are you")
  ) {
    aboutMe();
  } else if (
    msg.includes("education") ||
    msg.includes("study") ||
    msg.includes("university")
  ) {
    myEducationDetails();
  } else if (
    msg.includes("project") ||
    msg.includes("work") ||
    msg.includes("portfolio")
  ) {
    myProjectDetails();
  }

  userInput.value = ""; // clear input
}
