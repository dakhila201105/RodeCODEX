let selectedVehicle = null;
let selectedLevel = null;

document.getElementById("welcome-screen").addEventListener("click", () => {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");

  welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");   // hide welcome
    mainContent.classList.remove("hidden");  // show main content
  });
});


const vehicleCards = document.querySelectorAll("#vehicle-section .card");
const levelCards = document.querySelectorAll("#level-section .card");
const confirmationBox = document.getElementById("confirmation-box");
const confirmationText = document.getElementById("confirmation-text");

vehicleCards.forEach(card => {
  card.addEventListener("click", () => {
    vehicleCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedVehicle = card.dataset.vehicle;
    checkSelection();
  });
});

levelCards.forEach(card => {
  card.addEventListener("click", () => {
    levelCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedLevel = card.dataset.level;
    checkSelection();
  });
});

function checkSelection() {
  if (selectedVehicle && selectedLevel) {
    confirmationText.textContent = 
      `You chose ${selectedVehicle} on ${selectedLevel} level. Let's get started?`;
    confirmationBox.style.display = "block";
  }
}

function startGame() {
  alert(`🚀 Game Starting with ${selectedVehicle} on ${selectedLevel} level!`);
  // Later: Redirect to game page
}
