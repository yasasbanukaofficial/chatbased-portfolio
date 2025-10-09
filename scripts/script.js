// Main Elements
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const responseTxt = document.getElementById("responseTxt");

// Result Elements
const resultImg = document.getElementById("resultImg");
const resultTxt = document.getElementById("resultTxt");

// Suggestion Elements
const aboutMeSuggestion = document.getElementById("about-me");
const educationSuggestion = document.getElementById("education");
const projectsSuggestion = document.getElementById("projects");

// Project Section
const projectSection = document.getElementById("projectSection");

const age = new Date().getFullYear() - 2007;

// Results
const myImgUrl = "./assets/img/yasas-banuka.jpg";
const myDetails = `Hi I'm Yasas Banuka, a <em>tech nerd</em>,
  <strong>creative developer</strong> who loves to
  create "<em>unique</em>" solutions that attract
  people’s attention. <br /> <br />
  Here's more details as a summary; <br />
  <b>Age</b>: <strong>${age} years</strong> <br/>
  <b>Resides</b>: <strong>Sri Lanka</strong> <br/>
  <b>Goal</b>: <em>Cyber security specialist</em> <br/> <br />

  Hope you got to know me ✌️.`;

const educationLogo = "./assets/img/ijse-logo.png";
const educationDetails =
  "🎓 B.Sc. in Computer Science — University of Somewhere. Currently pursuing AI and ML engineering.";

aboutMeSuggestion.onclick = aboutMe;
educationSuggestion.onclick = myEducationDetails;
projectsSuggestion.onclick = myProjectDetails;
sendBtn.onclick = response;

let typingTimeouts = [];
function thinkingResponse(thinkingMsg) {
  showResultText(thinkingMsg, responseTxt);
}

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

function showResultText(text, element) {
  projectSection.style.visibility = "hidden";
  element.style.visibility = "visible";
  typeText(element, text, 30);
}

function clearElements() {
  responseTxt.innerHTML = "";
  resultTxt.style.visibility = "hidden";
  resultImg.style.visibility = "hidden";
}

function aboutMe() {
  clearElements();
  thinkingResponse("thinking like a human...");

  setTimeout(() => {
    thinkingResponse("Found Results ✔️");

    setTimeout(() => {
      clearElements();
      resultTxt.innerHTML = myDetails; // set HTML directly
      resultTxt.style.visibility = "visible";
      resultTxt.style.opacity = 0;
      resultTxt.style.transform = "translateY(30px)";
      resultTxt.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      setTimeout(() => {
        resultTxt.style.opacity = 1;
        resultTxt.style.transform = "translateY(0)";
      }, 100);

      showImage(myImgUrl);
    }, 1500);
  }, 2000);
}

function myEducationDetails() {
  clearElements();

  thinkingResponse("hmm education...");

  setTimeout(() => {
    thinkingResponse("Found Results ✔️");

    setTimeout(() => {
      clearElements();
      showResultText(educationDetails, resultTxt);
      showImage(educationLogo);
    }, 1500);
  }, 2000);
}

function myProjectDetails() {
  clearElements();
  thinkingResponse("Ohh projects...");
  setTimeout(() => {
    thinkingResponse("Here's the latest ones 🚀");

    setTimeout(() => {
      clearElements();
      projectSection.style.visibility = "visible";
      projectSection.style.opacity = 0;
      projectSection.style.transform = "translateY(50px)";

      setTimeout(() => {
        projectSection.style.transition =
          "opacity 0.6s ease, transform 0.6s ease-in-out";
        projectSection.style.opacity = 1;
        projectSection.style.transform = "translateY(0)";
      }, 50);
    }, 1500);
  }, 2000);
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
  clearElements();
  const msg = userInput.value.toLowerCase();

  let responded = false;

  if (
    msg.includes("you") ||
    msg.includes("yasas banuka") ||
    msg.includes("yourself") ||
    msg.includes("personal info") ||
    msg.includes("who are you")
  ) {
    aboutMe();
    responded = true;
  }

  if (
    msg.includes("edu") ||
    msg.includes("education") ||
    msg.includes("study") ||
    msg.includes("university")
  ) {
    myEducationDetails();
    responded = true;
  }

  if (
    msg.includes("project") ||
    msg.includes("work") ||
    msg.includes("portfolio")
  ) {
    myProjectDetails();
    responded = true;
  }

  if (
    msg.includes("hey") ||
    msg.includes("hi") ||
    msg.includes("sup") ||
    msg.includes("how are you")
  ) {
    showResultText("Hey! How's it going? I'm doing fine btw.", responseTxt);
    responded = true;
  }

  if (!responded) {
    showResultText(
      "Hey I hope I could respond to your question: " +
        msg +
        ", but I'm not an AI robot. I'm Yasas Banuka, merely a student. If you were to ask this irl I might respond. 😉",
      responseTxt,
    );
  }

  userInput.value = "";
}
