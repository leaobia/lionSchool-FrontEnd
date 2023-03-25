'use strict'

const containerCouses = document.getElementById('cousesContainer')

const criandoCursos = () => {
    const a = document.createElement('a')
    a.href = './second.html'
    const divCurso = document.createElement('div')
    divCurso.classList.add('course')
    const img = document.createElement('img')
    img.src = './img/cerebro.png'
    const span = document.createElement('span')
    span.textContent = 'DS'

    containerCouses.append(a)
    a.append(divCurso)
    divCurso.append(img,span)
}

criandoCursos()