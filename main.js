'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempCliente = {
    nome:"Mel",
    email: "mel@email.com",
    celular: "1122333455",
    cidade: "Londrina"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
   
}

// CRUD DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

// CRUD - READ
const readClient = () => getLocalStorage()

// CRUD- CREAT
const CreateClient = (client) => {
    const dbClient  = getLocalStorage(client)
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// EVENTOS

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', salveClient)

