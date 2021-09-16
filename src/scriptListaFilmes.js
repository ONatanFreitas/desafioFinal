async function getContent() {
    try {
        const response = await fetch('http://localhost:5005/filmes')    
        
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
    let filmesDetalhes = ''

    for(let filme of filmes){
        output += `
        <li class="filme" data-bs-toggle="modal" data-bs-target="#filme${filme.id}">                        
                        <img class="img-fluid" src=${filme.imagem} />
                        <div class="filme-info">
                            <!-- div class="col-12" -->
                                
                            
                            <p> <text id="">${filme.titulo}</text></p>

                        </div>
                    </li>`

        filmesDetalhes += `
        <div class="modal fade" id="filme${filme.id}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="painel-hero" style="background-image: url(${filme.imagem});">
                    <h1 class="text-white">${filme.titulo}</h1>
                    
                </div>
                <div class="painel-info">
                    <div class="container">
                        <div class="descricao_votos" class="row">
                        <div class="col-2">
                                <p class="filme-votos">${filme.pontuacao}</p>
                            </div>
                            <div class="col-6">
                                <p class="filme-descricao">${filme.sinopse}</p>
                            </div>
                            
                        </div>
                        <br>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
        imagemCoverHero = `${filme.imagem}`
        
    }
    
    document.getElementById('lista-filmes').innerHTML = output

    document.getElementById('modal-filmes').innerHTML = filmesDetalhes

    //document.getElementsByClassName(painel-hero).style.background-image = url(imagemCoverHero)


    
}




