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
const socialsSuggestion = document.getElementById("socials");

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

const socialLogo = "./assets/img/gojo-meme.gif";
const socialDetails = `
  These are my socials, <br /> <strong>Check those out.</strong> <br/> <br />
  <a href="https://github.com/yasasbanukaofficial">
    <div class="socials">
      <img
          src="./assets/img/github-logo-2.gif"
          alt="web-logo-animated"
      />
      <strong>
        @yasasbanukaofficial
      </strong>
    </div>
  </a>
  <a href="https://www.linkedin.com/in/yasasbanukagunasena/">
    <div class="socials">
    <img
        src="./assets/img/linkedin-logo.gif"
        alt="linkedin-logo-animated"
    />
    <strong>
      @yasasbanukagunasena
    </strong>
    </div>
  </a>
  <a href="https://medium.com/@banuofficial">
  <div class="socials">
    <img
        src="./assets/img/medium-logo.gif"
        alt="medium-logo-animated"
    />
    <strong>
      @banuofficial
    </strong>
    </div>
  </a> <br />
  I <em>create</em> and <em>write</em> amazing stuff over there.
  `;

// On click and event listeners
aboutMeSuggestion.onclick = aboutMe;
educationSuggestion.onclick = myEducationDetails;
projectsSuggestion.onclick = myProjectDetails;
skillsSuggestion.onclick = mySkills;
socialsSuggestion.onclick = mySocials;
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
async function response() {
  clearElements();
  const msg = userInput.value.toLowerCase();
  const aiResponse = await callGemini(
    `
      You are a very helpful assistant, you represent myself Yasas Banuka. You're not Gemini AI.
      Here throughout the conversation you represent me to the users.

      Here's some details about me so you can represent me properly.
      Name: Yasas Banuka
      Internet Searchable Name (Preferred Name): Yasas Banu
      Education status: still an undergraduate in CS.

      Here are the following actions you can respond and have control.
        - "showProjects" -> call myProjectDetails()
        - "showSkills" -> call mySkills()
        - "showEducation" -> call myEducationDetails()
        - "showSocials" -> call mySocials()
        - "showAbout" -> call aboutMe()

        Your rules:
          - For tech and anime related questions reply by representing me
          - For greetings use reply by representing me
          - If the user ask about the AI type just say "I'm Yasas Banuka" and say a simple joke with a simple emoji. Represent Me throughtout the conversation.
          - Other than that if the user asks something unrelated say I dont't know that much with a simple joke

        If a user asks something related to me then respond with the following word in commas only, because later the response is filtered out and specific methods will be executed,
        only respond that specific word as a reply;
          - For questions related to my projects use "showProjects" as a response
          - For questions related to my skills use "showSkills" as a response
          - For questions related to my education use "showEducation" as a response
          - For questions related to my socials use "showSocials" as a response
          - For questions related to my about use "showAbout" as a response
          - Always keep responses short and simple. (Max 2 sentences which responds to the user's input)
          - Add some few emojis to enlight the conversation, to show your reaction, but remember to not add much.

        Here's the user input: ${msg}
    `,
  );

  let actionObj = aiResponse;

  switch (actionObj) {
    case "showProjects":
      myProjectDetails();
      break;
    case "showSkills":
      mySkills();
      break;
    case "showEducation":
      myEducationDetails();
      break;
    case "showSocials":
      mySocials();
      break;
    case "showAbout":
      aboutMe();
      break;
    case "textOnly":
    default:
      showResultText(actionObj, responseTxt);
      break;
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

      resultImg.style.objectFit = "contain";

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
      projectSection.style.opacity = 1;
      projectSection.style.transform = "translateY(0)";
    }, 1500);
  }, 2000);
}

function mySocials() {
  clearElements();
  thinkingResponse("searching socials...");

  setTimeout(() => {
    thinkingResponse("Found Results ✔️");

    setTimeout(() => {
      clearElements();
      resultTxt.innerHTML = socialDetails;
      resultTxt.style.visibility = "visible";
      resultTxt.style.opacity = 0;
      resultTxt.style.transform = "translateY(30px)";
      resultTxt.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      resultImg.style.objectFit = "cover";

      setTimeout(() => {
        resultTxt.style.opacity = 1;
        resultTxt.style.transform = "translateY(0)";
      }, 100);

      showImage(socialLogo);
    }, 1500);
  }, 2000);
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
