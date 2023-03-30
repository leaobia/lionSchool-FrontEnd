'use strict'

import { pesquisarCursos } from './api.js'
import { pesquisarAlunoCurso } from './api.js'
import { pesquisarAlunoStatus } from './api.js'

const statusFinalizado = await pesquisarAlunoStatus('finalizado')
const statusCursando = await pesquisarAlunoStatus('cursando')

const sigla = localStorage.getItem('curso')
const cursosLista = await pesquisarCursos()
const containerCards = document.getElementById('containerCard')
const teste = document.getElementById('teste')
const nomeCurso = document.getElementById('cursoNome')
let alunoQueFinalizou;
let arrayFinalizados = []
let alunoCursante;
let arrayCursante = []
let teste2;
let ano;
const aluno = await pesquisarAlunoCurso(sigla)

const pegandovalor = function (e) {
    teste.textContent = e.target.value
    ano = teste.textContent
}


// teste.addEventListener('input', pegandovalor){
//     const container = document.getElementById('containerCard');
//     container.innerHTML = ''
// }

document.getElementById('teste').addEventListener('blur', function (e) {
    const container = document.getElementById('containerCard');
    container.innerHTML = ''
    pegandovalor(e)
    criandoCardsPeloAno()
});

document.getElementById('teste').addEventListener('keypress', function (e) {
    const container = document.getElementById('containerCard');
    container.innerHTML = ''
    pegandovalor(e)
    criandoCardsPeloAno()
});



const alunoStatusFinalizado = () => {
    statusFinalizado.alunos.forEach(function (nomeFinalizado) {
        alunoQueFinalizou = nomeFinalizado.nome
        arrayFinalizados.push(alunoQueFinalizou)
    })
    return arrayFinalizados
}
const alunoStatusCursando = () => {
    statusCursando.alunos.forEach(function (nomeCursando) {
        alunoCursante = nomeCursando.nome
        arrayCursante.push(alunoCursante)
    })
    return arrayCursante
}


alunoStatusFinalizado()
alunoStatusCursando()


const criandoCardsPeloAno = () => {
    console.log(ano)

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    if(ano != 0){
        aluno.alunos.forEach(function (aluno) {

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
    
                if (arrayFinalizados.includes(aluno.nome)) {
                    card.classList.add('bgFinalizado')
                } else {
                    card.classList.add('bgEstudando')
                }
            } else {
                console.log('Não tem ninguem');
            }
        })
    } else {
        criandoCards()
    }
}

const criandoCards = () => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    aluno.alunos.forEach(function (aluno) {
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

        if (arrayFinalizados.includes(aluno.nome)) {
            card.classList.add('bgFinalizado')
        } else {
            card.classList.add('bgEstudando')
        }
    })

}

criandoCards()


const criandoCardsFinalizado = () => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    aluno.alunos.forEach(function (aluno) {
        if (arrayFinalizados.includes(aluno.nome)) {
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

            if (arrayFinalizados.includes(aluno.nome)) {
                card.classList.add('bgFinalizado')
            } else {
                card.classList.add('bgEstudando')
            }
        }

    })

}
const criandoCardsCursante = () => {

    cursosLista.cursos.forEach(function (curso) {
        if (curso.sigla == sigla) {
            nomeCurso.innerHTML = curso.nome.slice(6)
        }
    });

    aluno.alunos.forEach(function (aluno) {
        if (arrayCursante.includes(aluno.nome)) {
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

            if (arrayFinalizados.includes(aluno.nome)) {
                card.classList.add('bgFinalizado')
            } else {
                card.classList.add('bgEstudando')
            }
        }

    })

}




document.getElementById('finalizado').addEventListener('click', function () {
    const container = document.getElementById('containerCard');
    container.innerHTML = ''
    criandoCardsFinalizado() 

});

document.getElementById('cursando').addEventListener('click', function () {
    const container = document.getElementById('containerCard');
    container.innerHTML = ''
    criandoCardsCursante()
});

document.getElementById('status').addEventListener('click', function () {
    const container = document.getElementById('containerCard');
    container.innerHTML = ''
    criandoCards()
});