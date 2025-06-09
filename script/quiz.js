const perguntas = [
  {
    pergunta: "1. O que é lógica de programação?",
    alternativas: [
      "Um tipo de linguagem de marcação",
      "A forma de desenhar interfaces visuais",
      "O raciocínio utilizado para resolver problemas computacionais",
      "Um compilador específico de C",
      "Um editor de texto para programadores",
    ],
    correta: 2,
  },
  {
    pergunta: "2. Qual a principal função da IDE OnlineGDB?",
    alternativas: [
      "Apenas compilar arquivos HTML",
      "Rodar programas em JavaScript",
      "Servir como navegador web",
      "Escrever, compilar e executar códigos em várias linguagens",
      "Criar jogos 3D",
    ],
    correta: 3,
  },
  {
    pergunta: "3. Qual a finalidade da função main() em C?",
    alternativas: [
      "Declarar bibliotecas",
      "Inicializar variáveis globais",
      "Iniciar a execução do programa",
      "Exibir os erros de compilação",
      "Criar arquivos externos",
    ],
    correta: 2,
  },
  {
    pergunta: "4. O que acontece se você omitir return 0; em main()?",
    alternativas: [
      "O programa não será compilado",
      "A função main() não será executada",
      "O sistema não entenderá a saída do programa",
      "O código não será aceito por nenhuma IDE",
      "Depende do compilador, mas geralmente funciona normalmente",
    ],
    correta: 4,
  },
  {
    pergunta: "5. Qual biblioteca padrão permite utilizar printf e scanf?",
    alternativas: ["stdlib.h", "string.h", "math.h", "stdio.h", "conio.h"],
    correta: 3,
  },
  {
    pergunta: "6. Qual a principal utilidade da biblioteca math.h?",
    alternativas: [
      "Manipulação de strings",
      "Entrada e saída de dados",
      "Operações matemáticas avançadas",
      "Manipulação de arquivos",
      "Definição de estruturas",
    ],
    correta: 2,
  },
  {
    pergunta:
      "7. Qual operador é usado para verificar se dois valores são iguais?",
    alternativas: ["=", ":=", "==", "===", "!="],
    correta: 2,
  },
  {
    pergunta: "8. O que o operador % retorna?",
    alternativas: [
      "O número absoluto",
      "O valor aproximado da divisão",
      "O resultado da divisão inteira",
      "O resto da divisão entre dois inteiros",
      "O valor da raiz quadrada",
    ],
    correta: 3,
  },
  {
    pergunta: "9. Qual função é usada para capturar dados do teclado?",
    alternativas: ["get()", "printf()", "scanf()", "input()", "cin"],
    correta: 2,
  },
  {
    pergunta:
      "10. Qual especificador é usado para imprimir um número decimal do tipo float?",
    alternativas: ["%i", "%c", "%f", "%s", "%d"],
    correta: 2,
  },
  {
    pergunta:
      "11. Qual estrutura usamos para executar código somente quando uma condição é verdadeira?",
    alternativas: ["for", "switch", "if", "goto", "loop"],
    correta: 2,
  },
  {
    pergunta:
      "12. Qual das opções abaixo representa corretamente uma estrutura condicional else if?",
    alternativas: [
      "else (condição)",
      "if else {}",
      "else if (condição) {}",
      "elif (condição)",
      "else: if {}",
    ],
    correta: 2,
  },
  {
    pergunta: "13. Qual a principal diferença entre while e do...while?",
    alternativas: [
      "while sempre roda ao menos uma vez",
      "do...while não possui condição",
      "while verifica a condição após executar",
      "do...while executa ao menos uma vez, while pode não executar",
      "Ambas são iguais",
    ],
    correta: 3,
  },
  {
    pergunta: "14. Em qual situação é mais indicado usar o laço for?",
    alternativas: [
      "Quando não sabemos quantas vezes devemos repetir",
      "Para ler um caractere",
      "Para criar variáveis globais",
      "Quando sabemos previamente o número de repetições",
      "Quando queremos interromper o programa",
    ],
    correta: 3,
  },
  {
    pergunta: "15. Qual é a principal vantagem de se usar funções em C?",
    alternativas: [
      "Aumentar o tamanho do código",
      "Repetir comandos",
      "Dividir o código em partes reutilizáveis",
      "Criar bibliotecas do sistema",
      "Aumentar a complexidade do programa",
    ],
    correta: 2,
  },
  {
    pergunta: "16. O que a declaração int somar(int a, int b); representa?",
    alternativas: [
      "Um laço de repetição",
      "Uma estrutura de decisão",
      "Um operador lógico",
      "Um protótipo de função",
      "Um erro de compilação",
    ],
    correta: 3,
  },
];

const quizForm = document.getElementById("quiz-form");
perguntas.forEach((pergunta, i) => {
  const div = document.createElement("div");
  div.classList.add("pergunta");
  div.innerHTML =
    `<p>${pergunta.pergunta}</p>` +
    pergunta.alternativas
      .map(
        (alt, j) => `
          <label>
            <input type="radio" name="pergunta${i}" value="${j}">
            ${alt}
          </label>`
      )
      .join("");
  quizForm.appendChild(div);
});

function verificarRespostas() {
  let acertos = 0;
  perguntas.forEach((pergunta, i) => {
    const selecionada = document.querySelector(
      `input[name="pergunta${i}"]:checked`
    );
    if (selecionada && parseInt(selecionada.value) === pergunta.correta) {
      acertos++;
    }
  });
  document.getElementById(
    "resultado"
  ).textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}
