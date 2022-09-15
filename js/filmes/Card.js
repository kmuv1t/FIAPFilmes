function Card(filme){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = filme.poster

    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.style.fontWeight = "700";
    titulo.innerText = filme.titulo

    let nota = document.createElement("div")
    nota.classList.add("nota")

    let star = document.createElement("span")
    star.classList.add("material-icons")
    star.classList.add("estrela")
    star.innerText = "star"

    let av = document.createElement("span")
    av.classList.add("av")
    av.innerText = filme.av
    
    nota.appendChild(star)
    nota.appendChild(av)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = filme.botao

    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(nota)
    card.appendChild(botao)

    return card
}
