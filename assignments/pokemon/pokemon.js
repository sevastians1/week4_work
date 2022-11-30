function buttonClick(){
    currentPokemon= GetPoke()


}


const GetPoke=async(num)=>{
    num=Math.floor(Math.random()*1150)
    const listOfPokemon=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    const currentPokemon=await axios.get(listOfPokemon.data.results[num].url)

    const typePage=await axios.get(currentPokemon.data.types[0].type.url)
    currentIndex=Math.floor(Math.random()*typePage.data.pokemon.length)
    console.log(currentPokemon, currentIndex)
    console.log(typePage)
    var images = document.getElementsByTagName("img")
    images[0].src=currentPokemon.data.sprites.other['official-artwork'].front_default
    for (let i=0; i<5; i++){
        currentIndex=Math.floor(Math.random()*typePage.data.pokemon.length)
        console.log(currentIndex)
        let currentNeighbor=await axios.get(typePage.data.pokemon[currentIndex].pokemon.url)
        // console.log(currentNeighbor.data.sprites.other['official-artwork'].front_default)
        images[i+1].src=currentNeighbor.data.sprites.other['official-artwork'].front_default
        console.log(currentIndex, currentNeighbor, images[i+1])
        doc=document.getElementById("123")
        doc.innerHTML=currentNeighbor.data.species.name

    }
    // console.log(arrOfPoke)

    return

}

// const GetTypePoke=async(type)=>{

// }

// axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((response)=>{
//     console.log(response)
//     console.log(response.data.results[randomNumber].url)
// }).catch((error)=>{
//     console.log('no good: ', error)
// })
