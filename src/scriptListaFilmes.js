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
        <li class="filme" data-bs-toggle="modal" data-bs-target="#painel-filme">                        
                        <img class="img-fluid" src=${filme.imagem} />
                        <div class="filme-info">
                            <!-- div class="col-12" -->
                                
                            
                            <p> <text id="">${filme.titulo}</text></p>

                        </div>
                    </li>`
        
    }

    document.getElementById('lista-filmes').innerHTML = output

}