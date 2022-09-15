function Ficha(ficha){
    let inf = document.createElement("div")
    inf.style.paddingLeft = "10px"
    
    let tit = document.createElement("div")
    tit.classList.add("tit")
    tit.innerText = ficha.tit

    let desc = document.createElement("div")
    desc.classList.add("desc")
    desc.innerText = ficha.desc

    inf.appendChild(tit)
    inf.appendChild(desc)
    
    return inf
}
