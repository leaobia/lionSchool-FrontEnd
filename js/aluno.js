'use strict'

import { pesquisarAlunos } from './api.js'
import { pesquisarAlunoMatricula } from './api.js'

const nomeAluno = localStorage.getItem('nome')
const containerAluno = document.getElementById('containerAluno')

const estilizarTabela = () => {
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
        const altura = `${(valor / 100) * 100}%`;
        barras[index].style.height = altura; 
    });
    }

const getAluno = async function (nome){
    let listaAlunos = await pesquisarAlunos()
    let matricula;

    listaAlunos.alunos.forEach(function(aluno){
        if(aluno.nome == nome){
            matricula = aluno.matricula
        }
    })
    return matricula
}

const alunoRegistrado = await getAluno(nomeAluno)

const criandoContainerAluno = async (matricula) => {
    let numero = matricula
    let aluno = await pesquisarAlunoMatricula(numero)

    const img = document.createElement('img')
    img.src = aluno.foto
    img.alt = 'imagem do aluno'
    const span = document.createElement('span')
    span.innerHTML = aluno.nome
    containerAluno.append(img, span)
}

const criandoGrafico = async (matricula) => {
    let numero = matricula
    let aluno = await pesquisarAlunoMatricula(numero)
    let listaNotas = []
    let listaSiglas = []

    aluno.curso.disciplinas.forEach(function(disciplina){

        listaNotas.push(disciplina.media)

        if(disciplina.sigla == "PWFE" || disciplina.sigla == "PWBE" ){
          listaSiglas.push(disciplina.sigla.slice(2)) 
        } 
        else {
          listaSiglas.push(disciplina.sigla)  
        }
        
    })

    const grafico = document.getElementById('grafico');
    const notas = listaNotas;
    const materias = listaSiglas;

    for (let i = 0; i < notas.length; i++) {
    
        const areaNota = document.createElement('div');
        areaNota.className = 'areaNota';

        const nota = document.createElement('div');
        nota.className = 'nota';

        const valorNota = document.createElement('span');
        valorNota.className = 'valor';
        valorNota.innerText = notas[i];
        nota.appendChild(valorNota);

        const barraNotaPai = document.createElement('div');
        barraNotaPai.className = 'barraPai';
  

        const barraNota = document.createElement('div');
        barraNota.className = 'barra';
        nota.appendChild(barraNotaPai);
        barraNotaPai.appendChild(barraNota);
 

        areaNota.appendChild(nota);

        const nomeMateria = document.createElement('span');
        nomeMateria.className = 'materia';
        nomeMateria.innerText = materias[i];

        areaNota.appendChild(nomeMateria);

        grafico.appendChild(areaNota);
    }

    estilizarTabela()
}

criandoContainerAluno(alunoRegistrado)
criandoGrafico(alunoRegistrado)