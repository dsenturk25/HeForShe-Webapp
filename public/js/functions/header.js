
window.onload = () => {
  
  const englishChoice = document.getElementById("english-switch-option");
  const turkishChoice = document.getElementById("turkish-switch-option");

  englishChoice.addEventListener("click", () => {
    turkishChoice.style.display = "flex";
    englishChoice.style.display = "none";
  });

  turkishChoice.addEventListener("click", () => {
    turkishChoice.style.display = "none";
    englishChoice.style.display = "flex";
  });

};