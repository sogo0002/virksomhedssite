const openButton = document.getElementById("openPopup");
const closepopup = document.getElementById("closePopup");
const popUpPage = document.getElementById("popup1");
const saveButton1 = document.getElementById("nextButton1");
const savedDataDisplay = document.getElementById("savedDatamsg");

const popupForm = document.getElementById("popupForm1");

const nameInput = document.getElementById("nameBook");
const emailInput = document.getElementById("emailBook");

const popUpPage2 = document.getElementById("popup2");
const closepopup2 = document.getElementById("closePopup2");
const saveButton2 = document.getElementById("nextButton2");

/*Event på click booking */

openButton.addEventListener("click", () => {
  popUpPage.style.display = "flex";
  openButton.style.display = "none";
  savedDataDisplay.textContent = "";
});

closepopup.addEventListener("click", () => {
  popUpPage.style.display = "none";
  openButton.style.display = "flex";
});

/*Event efter click videre */

saveButton1.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name && email && emailInput.checkValidity()) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    nameInput.value = "";
    emailInput.value = "";

    popUpPage.style.display = "none";
    popUpPage2.style.display = "flex";
  } else {
    savedDataDisplay.textContent = "Angiv venligst gyldige svar.";
    savedDataDisplay.style.color = "red";
  }
});

closepopup2.addEventListener("click", () => {
  popUpPage2.style.display = "none";
  openButton.style.display = "flex";
});

saveButton2.addEventListener("click", () => {
  popUpPage2.style.display = "none";
  openButton.style.display = "flex";
});
