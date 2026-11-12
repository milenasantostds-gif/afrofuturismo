
function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

// Função do Botão 2: Exibir/Ocultar Info de Curadoria Ativa
function triggerExhibitionInfo() {
    const box = document.getElementById('interactive-box');
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
}