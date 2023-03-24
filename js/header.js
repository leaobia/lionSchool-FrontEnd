'use strict'

// Clique no botão com o id sairButton para fechar a janela

const btnClick = document.getElementById('sairButton')

        btnClick.addEventListener('click', () => {
            window.close();
        });