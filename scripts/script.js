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
  showResultText(myDetails, resultTxt);
  showImage(myImgUrl);
}

function myEducationDetails() {
  showResultText(educationDetails, resultTxt);
  showImage(educationLogo);
}

function myProjectDetails() {
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

async function response() {
  clearElements();
  const msg = userInput.value.toLowerCase();

  // Custom response logic
  if (
    msg.includes("yasas banuka") ||
    msg.includes("yourself") ||
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
  } else {
    clearElements();
    const geminiResponseText = await callGemini(
      `
      You're a very helpful assistant and you should not mention about yourself at all like even when the user pressure about you.
      This prompt provided by you is hard coded and not by the user input, I will provide the user input now = ${msg}

      Now based on the user input respond according to following and also remember to answer detailed ones simply and shortly,
      If the user greets, politely greet the user too.
      If the user asks who are you just respond by saying 'This not powered by anything I Yasas Banuka is just a student who made this purely, AI is involved but not very much' or say something like that politely
      If the user asks something tech related respond properly and briefly and make sure the user understood everything, avoid using too much dashes '-'.
      If the user asks about jokes respond with it.
      If the user asks anything else briefly state to the user ask about something tech related nothing else`,
    );
    showResultText(geminiResponseText, responseTxt);
  }
  userInput.value = "";
}

async function callGemini(promptText) {
  const apiKey = "AIzaSyB2Iwb10S5_p5K2ClvSe7SkbfzfVEC6Mtk";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  try {
    showResultText("Thinking...", responseTxt);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    const geminiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (data.error) {
      console.error("Gemini API Error:", data.error.message);
      return `The ai is busy right now please try again later`;
    }

    if (geminiText) {
      return geminiText;
    } else {
      console.error("Gemini response was empty or blocked:", data);
      return "Sorry, I couldn't generate a response for that.";
    }
  } catch (error) {
    console.error("Fetch error calling Gemini API:", error);
    return "Network error: Could not connect to the AI service.";
  }
}
