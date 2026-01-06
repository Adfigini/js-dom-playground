const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("changeTextBtn");

button.addEventListener("click", () => {
  title.textContent = "Texto cambiado con JavaScript";
  description.textContent = "El DOM fue modificado correctamente 🚀";
});
