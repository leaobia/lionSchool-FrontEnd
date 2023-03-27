'use strict'

import { pesquisarCursos } from './api.js'

const sigla = localStorage.getItem('curso')
const cursosLista = await pesquisarCursos()
const containerCards = document.getElementById('containerCard')
const nomeCurso = document.getElementById('cursoNome')


const criandoCards = () => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });


    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.src = './img/image 1 (1).png'
    const a = document.createElement('a')
    a.href = './aluno.html'
    a.innerHTML = 'José Matheus da Silva Miranda'

    containerCards.append(card)
    card.append(img, a)
}

criandoCards()

console.log('teste', nome)