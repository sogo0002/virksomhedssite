const form = document.getElementById("userform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const saveButton = document.getElementById("saveButton");
const savedDataDisplay = document.getElementById("savedData");

function saveFormData() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name && email && emailInput.checkValidity()) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    nameInput.value = "";
    emailInput.value = "";

    // Show success message
    savedDataDisplay.textContent = "Gemt!";
    savedDataDisplay.style.color = "green";
  } else {
    // If invalid, show error message

    savedDataDisplay.textContent = "Angiv venligst gyldige svar.";
    savedDataDisplay.style.color = "red";
  }
}

saveButton.addEventListener("click", saveFormData);
