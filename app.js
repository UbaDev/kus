const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  // Cambiar el texto de la pregunta
  question.innerHTML = "Lo sabía 😏 jiji";

  // Generar confeti
  generateConfetti();
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

function generateConfetti() {
  confetti({
    particleCount: 5000, // Número de partículas de confeti
    spread: 1080, // Ángulo en grados para la dispersión
    origin: { y: 0.5 }, // Posición vertical de origen
  });
}
