const notas = document.querySelectorAll('.valor');
const barras = document.querySelectorAll('.barra');

notas.forEach((nota, index) => {
    if (parseInt(nota.textContent) >= 60) {
        nota.classList.add('azul');
        barras[index].classList.add('azul2')
    } else if (parseInt(nota.textContent) >= 50 && parseInt(nota.textContent) < 60) {
        nota.classList.add('amarelo');
        barras[index].classList.add('amarelo2')
    } else {
        barras[index].classList.add('vermelho2')
        nota.classList.add('vermelho');
    }
    const valor = parseInt(nota.textContent);
    const altura = `${(valor / 100) * 50}%`;
    barras[index].style.height = altura; // define a altura da barra atual (no índice "index")
});

