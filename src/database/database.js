var axios = require('axios')

const apiKey = '7923c94d78158bc558ec678088afdd9a'

async function mostrarDadosFilmes (){
    try {
        const response = (await axios.get(`https://api.themoviedb.org/3/list/7107576?api_key=${apiKey}&language=pt-BR`)).data.items
        
        const dadosFilmes = []
        
        for (var i = 0; i < response.length; i++) {
            const item = response[i]
            dadosFilmes.push({
                id: item.id,
                titulo: item.title,
                sinopse: item.overview,
                pontuacao: item.vote_average,
                imagem: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`            

            })
        
        }

        return dadosFilmes

    } catch (error) {
        console.error(error)
    }
       
}


    async function dadosListaFilmes (){
    try {
        const response = (await axios.get(`https://api.themoviedb.org/3/list/7107576?api_key=${apiKey}&language=pt-BR`)).data
        
        const dadosLista = []
        dadosLista.push({
            nome: response.name,
            descricao: response.description,
            quantidade_filmes: response.item_count
        })
        
        
        return dadosLista

    } catch (error) {
        console.error(error)
    }
       
}

module.exports = { mostrarDadosFilmes, dadosListaFilmes }
