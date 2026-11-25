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

const messageForm = document.forms["leave_message"];
document.getElementById("messages").classList.add("hidden");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  console.log(`Name: ${name} Email: ${email} Message: ${message}`);

  let messageSection = document.querySelector("#messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");

  //ADDING CLASSES to <ul> and <li> for styling
  messageList.classList.add("msgUl");
  newMessage.classList.add("msgItem");

  newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a>
   <span>${message}</span>`;

  //REMOVE BUTTON
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  //REMOVE BUTTON EVENT LISTENER
  removeButton.addEventListener("click", function (event) {
    let entry = removeButton.parentNode;
    entry.remove();

    // console.log("AFTER REMOVE, LIST: " + listLength);
    // console.log(messageList);
    // console.log(newMessage);

    //.remove() NEVER ACTUALL GETS listLen DOWN TO ZERO
    if (listLength === 1) {
      messageSection.classList.add("hidden");
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // console.log(messageList);
  // console.log(newMessage);

  let listLength = messageList.getElementsByTagName("li").length;

  //console.log("LIST LEN AFTER SUBMIT: " + listLength);

  if (listLength > 0) {
    messageSection.classList.remove("hidden");
  }

  messageForm.reset();
});

console.log(window.innerWidth);
