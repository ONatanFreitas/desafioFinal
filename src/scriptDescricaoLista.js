async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/dados-lista')    
        
        const data = await response.json()

        show(data)

    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(lista){

    let output = `<p>${lista.descricao}</p>
                    ${lista.quantidade_filmes} filmes ao todo`
    

    document.querySelector('main').innerHTML = output

}