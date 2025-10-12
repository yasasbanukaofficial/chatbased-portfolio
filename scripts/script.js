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
const skillsSuggestion = document.getElementById("skills");

// Project Section
const projectSection = document.getElementById("projectSection");
const eliteProject = document.getElementById("eliteProject");
const skillSection = document.getElementById("skillSection");
const heroSection = document.getElementById("heroSection");
const strtgstProject = document.getElementById("strtgstProject");
const devobeeProject = document.getElementById("devobeeProject");

const age = new Date().getFullYear() - 2007;

// Results
const myImgUrl = "./assets/img/yasas-banuka.jpg";
const myDetails = `Hi I'm Yasas Banuka, a <em>tech nerd</em>,
  <strong>creative developer</strong> who loves to
  create "<em>unique</em>" solutions that attract
  people’s attention. <br /> <br />
  Here's more details as a summary; <br />
  <b>Age</b>: <strong>${age} years</strong> <br/>
  <b>Resides in</b>: <strong>Sri Lanka</strong> <br/>
  <b>Secret of winning</b>: <em>To win, working hard isn't enough, other's must loose.</em>
  <br /><b>My Quotation</b>: <em>Comfort kills dreams.</em> <br/> <br />

  Hope you got to know me ✌️.`;

const educationLogo = "./assets/img/ijse-logo.png";
const educationDetails = `
  I'm currently pursuing a <b>graduate diploma</b> in software engineering.<br /> <br />
  I <em>hope</em> to pursue a career in both <strong>software engineering</strong> and <strong>cyber security engineering</strong> which is <em>hard</em> but I'm <strong>determined</strong>
  <br /> <br />
  Here's what's going on with my education; <br />
  <b>Diploma</b>: <strong>Graduate Diploma at IJSE institute</strong> <br/>
  <b>Goal</b>: <em>Cyber security specialist</em> <br/> <br />

  Hope you got to know my education status ✌️.
  `;

// On click and event listeners
aboutMeSuggestion.onclick = aboutMe;
educationSuggestion.onclick = myEducationDetails;
projectsSuggestion.onclick = myProjectDetails;
skillsSuggestion.onclick = mySkills;
sendBtn.onclick = response;

userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    response();
  }
});

// Utility functions
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

function showResultText(text, element) {
  element.style.visibility = "visible";
  typeText(element, text, 30);
}

function clearElements() {
  responseTxt.style.visibility = "hidden";
  resultTxt.style.visibility = "hidden";
  resultImg.style.visibility = "hidden";
  projectSection.style.visibility = "hidden";
  skillSection.style.visibility = "hidden";
  heroSection.style.visibility = "hidden";
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

function thinkingResponse(thinkingMsg) {
  showResultText(thinkingMsg, responseTxt);
}

// Response Function
function response() {
  clearElements();
  const msg = userInput.value.toLowerCase();

  if (
    msg.includes("project") ||
    msg.includes("work") ||
    msg.includes("portfolio")
  ) {
    myProjectDetails();
  } else if (
    msg.includes("skills") ||
    msg.includes("tricks") ||
    msg.includes("programming languages") ||
    msg.includes("abilities") ||
    msg.includes("types")
  ) {
    mySkills();
  } else if (
    msg.includes("edu") ||
    msg.includes("education") ||
    msg.includes("study") ||
    msg.includes("university")
  ) {
    myEducationDetails();
  } else if (
    msg.includes("you") ||
    msg.includes("yasas banuka") ||
    msg.includes("yourself") ||
    msg.includes("personal info") ||
    msg.includes("who are you")
  ) {
    aboutMe();
  } else if (
    msg.includes("hey") ||
    msg.includes("hi") ||
    msg.includes("sup") ||
    msg.includes("how are you")
  ) {
    showResultText("Hey! How's it going? I'm doing fine btw.", responseTxt);
  } else {
    showResultText(
      "Hey I hope I could respond to your question: " +
        msg +
        ", but I'm not an AI robot. I'm Yasas Banuka, merely a student. If you were to ask this irl I might respond. 😉",
      responseTxt,
    );
  }

  userInput.value = "";
}

// Main functions
function aboutMe() {
  clearElements();
  thinkingResponse("thinking like a human...");

  setTimeout(() => {
    thinkingResponse("Found Results ✔️");

    setTimeout(() => {
      clearElements();
      resultTxt.innerHTML = myDetails;
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

function mySkills() {
  clearElements();
  thinkingResponse("god thinking...");

  setTimeout(() => {
    thinkingResponse("Here are my skills");

    setTimeout(() => {
      clearElements();

      skillSection.style.visibility = "visible";
      skillSection.style.opacity = 0;
      skillSection.style.transform = "translateY(50px)";
      skillSection.style.transition =
        "opacity 0.6s ease, transform 0.6s ease-in-out";

      setTimeout(() => {
        skillSection.style.opacity = 1;
        skillSection.style.transform = "translateY(0)";
      }, 200);
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
      resultTxt.innerHTML = educationDetails;
      resultTxt.style.visibility = "visible";
      resultTxt.style.opacity = 0;
      resultTxt.style.transform = "translateY(30px)";
      resultTxt.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      setTimeout(() => {
        resultTxt.style.opacity = 1;
        resultTxt.style.transform = "translateY(0)";
      }, 100);

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
      projectSection.style.transition =
        "opacity 0.6s ease, transform 0.6s ease-in-out";

      setTimeout(() => {
        typeText(
          eliteProject,
          "Developed a JavaFX based Driving School Management System automating scheduling, enrollment, and payments, boosting efficiency 60% with Hibernate, MySQL, and layered architecture.",
          50,
        );
        typeText(
          strtgstProject,
          "AI powered education tracker integrating scheduling, grading, and chat features using JavaFX, MySQL, and Gemini API with a layered architecture for efficiency.",
          40,
        );
        typeText(
          devobeeProject,
          "Basic minimalist blog built using pure HTML, CSS and where all the content management is powered by Hugo.",
          30,
        );

        projectSection.style.opacity = 1;
        projectSection.style.transform = "translateY(0)";
      }, 200);
    }, 1500);
  }, 2000);
}
