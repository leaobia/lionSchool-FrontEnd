'use strict'

'use strict'

const containerCards = document.getElementById('containerCard')

const criandoCards = () => {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.src = './img/image 1 (1).png'
    const a = document.createElement('a')
    a.href = './aluno.html'
    a.innerHTML = 'José Matheus da Silva Miranda'

    containerCards.append(card)
    card.append(img,a)
}

criandoCards()