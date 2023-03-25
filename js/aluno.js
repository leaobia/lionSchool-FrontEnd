'use strict'

const containerAluno = document.getElementById('containerAluno')


const criandoContainerAluno = () => {
    const img = document.createElement('img')
    img.src = './img/image 1 (1).png'
    const span = document.createElement('span')
    span.innerHTML = 'José Matheus da Silva Miranda'
    containerAluno.append(img, span)
}

criandoContainerAluno()




const criandoGrafico = () => {
    const grafico = document.getElementById('grafico');
    const notas = [90, 30, 50, 90, 20, 50];
    const materias = ['SOP', 'LIMA', 'PWBE', 'PWFE', 'HARE', 'SOP'];

    for (let i = 0; i < notas.length; i++) {
    
        const areaNota = document.createElement('div');
        areaNota.className = 'areaNota';

        const nota = document.createElement('div');
        nota.className = 'nota';

        const valorNota = document.createElement('span');
        valorNota.className = 'valor';
        valorNota.innerText = notas[i];
        nota.appendChild(valorNota);

        const barraNota = document.createElement('div');
        barraNota.className = 'barra';
        nota.appendChild(barraNota);

        areaNota.appendChild(nota);

        const nomeMateria = document.createElement('span');
        nomeMateria.className = 'materia';
        nomeMateria.innerText = materias[i];

        areaNota.appendChild(nomeMateria);

        grafico.appendChild(areaNota);
    }
}

criandoGrafico()

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

