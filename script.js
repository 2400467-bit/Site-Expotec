document.addEventListener('DOMContentLoaded', function () {
    let contador = 0;
    const downloadBtn = document.getElementById('downloadBtn');
    const contadorExibicao = document.getElementById('contador');

    downloadBtn.addEventListener('click', function(event) {
        // Incrementa o contador
        contador++;

        // Atualiza o contador na página
        contadorExibicao.textContent = contador;

        // Usando setTimeout para garantir que o contador seja atualizado antes da navegação
        setTimeout(function() {
            // Agora, abrir o link de download em uma nova aba
            window.open(downloadBtn.href, '_blank');
        }, 200); // Ajustando o tempo de espera para 200ms para o contador ser visível
    });
});
