document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('submitQuiz').addEventListener('click', function() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    // Verifica se todas foram respondidas
    if (!q1 || !q2 || !q3) {
      alert("Por favor, responda todas as questões antes de enviar.");
      return;
    }

    let score = 0;
    const total = 3;

    // Função para mostrar se está correto ou incorreto
    function verificarResposta(pergunta, correta) {
      const opcoes = document.querySelectorAll(`input[name="${pergunta}"]`);
      opcoes.forEach(opcao => {
        const label = opcao.parentElement;
        if (opcao.value === 'certo') {
          label.classList.add('correct');
        } else {
          label.classList.remove('correct');
        }
        if (opcao.checked && opcao.value !== 'certo') {
          label.classList.add('incorrect');
        }
      });
    }

    // Verifica cada resposta
    if (q1.value === "certo") score++;
    verificarResposta('q1', 'certo');

    if (q2.value === "certo") score++;
    verificarResposta('q2', 'certo');

    if (q3.value === "certo") score++;
    verificarResposta('q3', 'certo');

    document.getElementById('quizResult').textContent = 
      `Você acertou ${score} de ${total} questões.`;
  });

  // Botão para reiniciar
  document.getElementById('resetQuiz').addEventListener('click', function() {
    const respostas = document.querySelectorAll('input[type="radio"]');
    respostas.forEach(resp => {
      resp.checked = false;
      resp.parentElement.classList.remove('correct', 'incorrect');
    });
    document.getElementById('quizResult').textContent = "";
  });
});
