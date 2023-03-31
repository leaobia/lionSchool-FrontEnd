'use strict'

export const pesquisarCursos = async () => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    return data
    
}

export const pesquisarAlunos = async () => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/alunos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export const pesquisarAlunoMatricula = async (numeroMatricula) => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/alunos/${numeroMatricula}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export const pesquisarAlunoCurso = async (siglaCurso) => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/alunos?curso=${siglaCurso}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export const pesquisarAlunoStatus = async (statusAluno) => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/alunos?status=${statusAluno}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const pesquisarAlunoCursoeStatus = async (siglaCurso ,statusAluno) => {
    const url = `https://lionschool-api.cyclic.app/v1/lion-school/alunos?curso=${siglaCurso}&status=${statusAluno}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
