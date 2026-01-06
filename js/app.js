const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("changeTextBtn");

button.addEventListener("click", () => {
  title.textContent = "Texto cambiado con JavaScript";
  description.textContent = "El DOM fue modificado correctamente 🚀";
});

const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

let isActive = false;

toggleBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    statusText.textContent = "Estado actual: ON";
    toggleBtn.textContent = "Desactivar";
  } else {
    statusText.textContent = "Estado actual: OFF";
    toggleBtn.textContent = "Activar";
  }
});

