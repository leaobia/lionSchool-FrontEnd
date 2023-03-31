'use strict'

import { pesquisarCursos } from './api.js'
import { pesquisarAlunoCurso } from './api.js'
import { pesquisarAlunoStatus } from './api.js'
import { pesquisarAlunoCursoeStatus } from './api.js'

const sigla = localStorage.getItem('curso')
const containerCards = document.getElementById('containerCard')
const teste = document.getElementById('teste')
const nomeCurso = document.getElementById('cursoNome')

var aluno = await pesquisarAlunoCurso(sigla)
const cursosLista = await pesquisarCursos()

let ano;

const pegandovalor = function (e) {
    teste.textContent = e.target.value
    ano = teste.textContent

    console.log(ano);
}

document.getElementById('teste').addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        this.blur()
    }
});

document.getElementById('teste').addEventListener('blur', function (e) {
    const containerCards = document.getElementById('containerCard');
    containerCards.innerHTML = ''
    pegandovalor(e)

    if (ano == 0 || ano == undefined || ano == null || ano == '') {
        criandoCards(aluno)
    } else {
        criandoCardsPeloAno(aluno)
    }

});

// document.getElementById('teste').addEventListener('keypress', function (e) {
//     const containerCards = document.getElementById('containerCard');
//     containerCards.innerHTML = ''
//     pegandovalor(e)
//     criandoCardsPeloAno()
// });

// const alunoStatusFinalizado = () => {
//     statusFinalizado.alunos.forEach(function (nomeFinalizado) {
//         alunoQueFinalizou = nomeFinalizado.nome
//         arrayFinalizados.push(alunoQueFinalizou)
//     })
//     return arrayFinalizados
// }
// const alunoStatusCursando = () => {
//     statusCursando.alunos.forEach(function (nomeCursando) {
//         alunoCursante = nomeCursando.nome
//         arrayCursante.push(alunoCursante)
//     })
//     return arrayCursante
// }


// alunoStatusFinalizado()
// alunoStatusCursando()


const criandoCardsPeloAno = (listaAlunos) => {

    containerCards.innerHTML = ''

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    listaAlunos.alunos.forEach(function (aluno) {

        if (aluno.curso.conclusao == ano) {
            const a1 = document.createElement('a')
            a1.href = './aluno.html'
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

            containerCards.append(a1)
            a1.append(card)
            card.append(img, btn)
            btn.append(a)

            if (aluno.status.toUpperCase() == 'FINALIZADO') {
                card.classList.add('bgFinalizado')
            } else {
                card.classList.add('bgEstudando')
            }
        }
    })


}

const criandoCards = (listaAlunos) => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    listaAlunos.alunos.forEach(function (aluno) {
        const a1 = document.createElement('a')
        a1.href = './aluno.html'
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

        containerCards.append(a1)
        a1.append(card)
        card.append(img, btn)
        btn.append(a)

        if (aluno.status.toUpperCase() == 'FINALIZADO') {
            card.classList.add('bgFinalizado')
        } else {
            card.classList.add('bgEstudando')
        }
    })

}

criandoCards(aluno)

// const criandoCardsFinalizado = () => {

//     cursosLista.cursos.forEach(function (curso) {
//         if (curso.sigla == sigla) {
//             nomeCurso.innerHTML = curso.nome.slice(6)
//         }
//     });

//     aluno.alunos.forEach(function (aluno) {
//         if (arrayFinalizados.includes(aluno.nome)) {
//             const a1 = document.createElement('a')
//             a1.href = './aluno.html'
//             const card = document.createElement('div')
//             card.classList.add('card')
//             const img = document.createElement('img')
//             img.src = aluno.foto
//             img.classList.add('imgFormat')
//             const btn = document.createElement('button')
//             btn.classList.add('btnFormat')
//             const a = document.createElement('a')
//             a.href = './aluno.html'
//             a.innerHTML = aluno.nome

//             btn.addEventListener('click', () => { localStorage.setItem('nome', a.textContent) })

//             containerCards.append(a1)
//             a1.append(card)
//             card.append(img, btn)
//             btn.append(a)

//             if (arrayFinalizados.includes(aluno.nome)) {
//                 card.classList.add('bgFinalizado')
//             } else {
//                 card.classList.add('bgEstudando')
//             }
//         }

//     })

// }

// const criandoCardsCursante = () => {

//     cursosLista.cursos.forEach(function (curso) {
//         if (curso.sigla == sigla) {
//             nomeCurso.innerHTML = curso.nome.slice(6)
//         }
//     });

//     aluno.alunos.forEach(function (aluno) {
//         if (arrayCursante.includes(aluno.nome)) {
//             const a1 = document.createElement('a')
//             a1.href = './aluno.html' 

//             const card = document.createElement('div')
//             card.classList.add('card')
//             const img = document.createElement('img')
//             img.src = aluno.foto
//             img.classList.add('imgFormat')
//             const btn = document.createElement('button')
//             btn.classList.add('btnFormat')
//             const a = document.createElement('a')
//             a.href = './aluno.html' 
//             a.innerHTML = aluno.nome

//             btn.addEventListener('click', () => { localStorage.setItem('nome', a.textContent) })

//             containerCards.append(a1)
//             a1.append(card)
//             card.append(img, btn)
//             btn.append(a)

//             if (arrayFinalizados.includes(aluno.nome)) {
//                 card.classList.add('bgFinalizado')
//             } else {
//                 card.classList.add('bgEstudando')
//             }
//         }

//     })

// }

/********************************************************************************************************************************* */

document.getElementById('finalizado').addEventListener('click', async function () {
    aluno = await pesquisarAlunoCursoeStatus(sigla, 'Finalizado')
    const containerCards = document.getElementById('containerCard');
    containerCards.innerHTML = ' '
    teste.value = ' '
    criandoCards(aluno)
});

document.getElementById('cursando').addEventListener('click', async function () {
    aluno = await pesquisarAlunoCursoeStatus(sigla, 'Cursando')
    const containerCards = document.getElementById('containerCard');
    containerCards.innerHTML = ' '
    teste.value = ' '
    criandoCards(aluno)
});

document.getElementById('status').addEventListener('click', async function () {
    const containerCards = document.getElementById('containerCard');
    containerCards.innerHTML = ' '
    aluno = await pesquisarAlunoCurso(sigla)
    teste.value = ' '
    criandoCards(aluno)
});