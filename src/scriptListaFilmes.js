async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/filmes')    
        
        const data = await response.json()

        show(data)
        return data

    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(filmes){

    let output = ''

    for(let filme of filmes){
        output += `
        <div class="filmes-info">
            <figure>
                 <img src=${filme.imagem} alt="${filme.titulo}">
            </figure>
            
            <ul>

                <li>${filme.titulo}</li>
                <li>${filme.pontuacao}</li>
                <li>${filme.sinopse}</li>                
            </ul>
        </div>`
        
    }

    document.querySelector('main').innerHTML = output

}