'use strict'

import { pesquisarCursos } from './api.js'
import { pesquisarAlunoCurso } from './api.js'
import { pesquisarAlunoStatus } from './api.js'

const statusFinalizado = await pesquisarAlunoStatus('finalizado')
const statusCursando = await pesquisarAlunoStatus('cursando')
//console.log(statusFinalizado.alunos[0]);


const sigla = localStorage.getItem('curso')
const cursosLista = await pesquisarCursos()
const containerCards = document.getElementById('containerCard')
const nomeCurso = document.getElementById('cursoNome')
let alunoQueFinalizou;
let arrayFinalizados = []
const aluno = await pesquisarAlunoCurso(sigla)
//console.log(aluno.alunos[0].nome)

const alunoStatus = () => {
    statusFinalizado.alunos.forEach(function (nomeFinalizado) {
        alunoQueFinalizou = nomeFinalizado.nome
        arrayFinalizados.push(alunoQueFinalizou)
    })
    return arrayFinalizados
}

console.log(arrayFinalizados)

alunoStatus()

const criandoCards = () => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    aluno.alunos.forEach(function (aluno) {
        const card = document.createElement('div')
        card.classList.add('card')
        const img = document.createElement('img')
        img.src = aluno.foto
        img.classList.add('imgFormat')
        const btn = document.createElement('button')
        btn.classList.add('btnFormat')
        const a = document.createElement('a')
        a.href = './aluno.html'
        a.innerHTML = aluno.nome

        btn.addEventListener('click', () => { localStorage.setItem('nome', a.textContent) })

        containerCards.append(card)
        card.append(img, btn)
        btn.append(a)

        if (arrayFinalizados.includes(aluno.nome)){
            card.classList.add('bgFinalizado')
        }else{
            card.classList.add('bgEstudando')
        }
    })



}

criandoCards()

console.log('teste', nome)