const conteudoBtn = document.getElementById("conteudoBtn");
const perguntasBtn = document.getElementById("perguntasBtn");
const conteudoPag = document.getElementById("conteudoPag");
const perguntasPag = document.getElementById("perguntasPag");

conteudoBtn.addEventListener("click", function () {
  conteudoPag.classList.add("active");
  perguntasPag.classList.remove("active");
  conteudoBtn.classList.add("active");
  perguntasBtn.classList.remove("active");
});

perguntasBtn.addEventListener("click", function () {
  perguntasPag.classList.add("active");
  conteudoPag.classList.remove("active");
  perguntasBtn.classList.add("active");
  conteudoBtn.classList.remove("active");
});
