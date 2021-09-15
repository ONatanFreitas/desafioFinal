async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/filmes')    
        
        const data = await response.json()

        show(data)

    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(filmes){

    let output = ''

    for(let filme of filmes){
        output += `
            <figure>
                 <img src=${filme.imagem} alt="${filme.titulo}">
            </figure>
            <figcaption>
                <p>${filme.titulo}</p>
            </figcaption>
            <ul>

                <li>${filme.titulo}</li>
                <li>${filme.sinopse}</li>
                <li>${filme.pontuacao}</li>
            </ul>`
    }

    document.querySelector('main').innerHTML = output

}