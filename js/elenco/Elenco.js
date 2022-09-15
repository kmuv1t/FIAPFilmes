function Elenco(atores){
    let card = document.createElement("div")
    card.classList.add("elenco")
    
    let icone = document.createElement("img")
    icone.src = atores.icone

    let ator = document.createElement("div")
    ator.classList.add("ator")
    ator.innerText = atores.ator

    let personagem = document.createElement("div")
    personagem.classList.add("personagem")
    personagem.innerText = atores.personagem
    
    card.appendChild(icone)
    card.appendChild(ator)
    card.appendChild(personagem)

    return card
}
