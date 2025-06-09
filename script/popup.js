const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.getElementById("modal-close");

// Dados das aulas
const aulas = [
  {
    titulo: "Aula 01: Introdução a Fundamentos em C",
    descricao:
      "Nesta aula você entenderá os princípios básicos da linguagem C, lógica de programação e seu contexto.",
    videoUrl: "https://www.youtube.com/embed/fqsTHn1Gb9A",
  },
  {
    titulo: "Aula 02: Primeiro Hello World",
    descricao:
      "Nessa aula, você irá compilar seu primeiro 'Hello World', de maneira fácil, prática e utilizando apenas o navegador.",
    videoUrl: "https://www.youtube.com/embed/Eh5rCcfnrMo",
  },
  {
    titulo: "Aula 03: Variáveis",
    descricao: "Entenda o que são variáveis e como utilizá-las em C.",
    videoUrl: "https://www.youtube.com/embed/oN-5uzQBrys",
  },
  {
    titulo: "Aula 04: Operadores Lógicos",
    descricao: "Veja como funcionam os operadores lógicos e suas aplicações.",
    videoUrl: "https://www.youtube.com/embed/7canWqy2KBA",
  },
  {
    titulo: "Aula 05: printf e scanf",
    descricao: "Domine as funções de entrada e saída padrão da linguagem.",
    videoUrl: "https://www.youtube.com/embed/HZ5pMKEmweU",
  },
  {
    titulo: "Aula 06: Estruturas Condicionais",
    descricao:
      "Aprenda a utilizar `if`, `else` e `switch` para tomar decisões em seus programas.",
    videoUrl: "https://www.youtube.com/embed/gVRloSnaN2g",
  },
  {
    titulo: "Aula 07: Estrutura de Repetição",
    descricao:
      "Conheça `for`, `while` e `do-while` para repetir blocos de código.",
    videoUrl: "https://www.youtube.com/embed/uTSqXjBv0Zw",
  },
  {
    titulo: "Aula 08: Funções",
    descricao: "Modularize seu código com funções personalizadas em C.",
    videoUrl: "https://www.youtube.com/embed/Q03QSrD9yFE",
  },
];

// Adiciona evento de clique nos cards
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const aula = aulas[index];
    modalTitle.textContent = aula.titulo;
    modalDesc.textContent = aula.descricao;
    modalVideo.src = aula.videoUrl;
    modal.style.display = "flex";
  });
});

// Botão para fechar
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = ""; // Para parar o vídeo
});

// Fecha ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});
