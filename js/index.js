console.log("JavaScript is connected");

// Create and append footer element to html body

const footerElement = document.createElement("footer");

document.body.appendChild(footerElement);

// Create copyright text and insert in footer

const today = new Date();
//console.log(today);
const thisYear = today.getFullYear();
//console.log(thisYear);
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.classList.add("footer-class");

copyright.innerHTML = `&copy; ${thisYear} Rachel Morris`;
footer.appendChild(copyright);

// Create list of skills

const skills = [
  "JavaScript",
  "Processing",
  "Solidity",
  "HTML/CSS",
  "Git & GitHub",
  "VS Code",
  "LexisNexis",
  "Westlaw",
  "Everlaw",
  "Relativity",
  "Tableau",
];

let skillsSection = document.querySelector("#Skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
