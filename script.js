// console.log("good luck")
// Step 1, simple alert to confirm you want to enter
alert('are you sure you want to enter')

// step 2, make sure you type the-exclusive-password to enter
let correctPassword = "thepassword";
let userPassword = "";

while (userPassword !== correctPassword) {
  userPassword = prompt("We need to see if you are clever enough to enter. Type thepassword to continue");

  // If the user cancels the prompt, break the loop
  if (userPassword === null) {
    alert("Aren't even gonna try are you.");
    break;
  }

  if (userPassword !== correctPassword) {
    alert("this one is a layup. Try again.");
  }
}

if (userPassword === correctPassword) {
  alert("fine you pass");
}

//utilizing style
const creepyText = document.getElementById("creepyText");
creepyText.innerHTML = "Welcome to a place you shouldn't be";
creepyText.style.fontFamily = "'Creepster', cursive";
creepyText.style.color = "green";
creepyText.style.fontSize = "36px"; 
