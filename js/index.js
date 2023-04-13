'use strict'
import { pesquisarCursos } from './api.js'
const nomeCurso = await pesquisarCursos()
const containerCouses = document.getElementById('cousesContainer')

const criandoCursos = (listaCursos) => {

    listaCursos.cursos.forEach(function (curso) {
        const btn = document.createElement('button')

        const link = document.createElement('a')
        link.href = './second.html'
        link.ariaLabel = 'link para ver alunos do curso selecionado'
        const divCurso = document.createElement('div')
        divCurso.classList.add('course')
        const img = document.createElement('img')
        img.src = curso.icone
        img.classList.add('imgFormat')
        img.alt = 'imagem do ícone do curso'
        const span = document.createElement('span')
        span.textContent = curso.sigla

        btn.addEventListener('click', () => {localStorage.setItem('curso', span.textContent)})

        containerCouses.append(btn)
        btn.append(link)
        link.append(divCurso)
        divCurso.append(img, span)
    });

}

// const getNomes = function(siglaPassada){
//     nomeCurso.cursos.forEach(function(curso){
//         if(siglaPassada == curso.sigla){
//             nome = curso.nome
//             console.log(nome);
//         } else {
//             console.log('Falhou bebê');
//         }
//     })
// }

criandoCursos(nomeCurso)
