var axios = require('axios')


async function titulosFilmes (){
        const response = (await axios.get(`https://api.themoviedb.org/3/list/7107576?api_key=7923c94d78158bc558ec678088afdd9a&language=pt-BR`)).data.items
        
        const dadosFilmes = []
        
        for (var i = 0; i < response.length; i++) {
            const item = response[i]
            dadosFilmes.push({
                titulo: item.title,
                sinopse: item.overview,
                pontuacao: item.vote_average            

            })
        
        }

        return dadosFilmes
}



module.exports = { titulosFilmes }
