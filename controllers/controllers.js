const axios = require('axios')
const buildVariations = require('../utils')


const getVariations  = async (req,res)=>{
 const {name} = req.query;

 const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
 const evolution_chain= await getEvolutionChainData(response.data.evolution_chain.url)
res.send(buildVariations(evolution_chain));
}



const getEvolutionChainData  = async (url)=>{
    
   
    const response = await axios.get(url);
    return response.data;
   }
   





module.exports={ getVariations}