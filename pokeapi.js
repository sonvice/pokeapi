const btn = document.getElementById('btn-mostrar')
let CienXCien = 400;

let list = document.getElementById('list')
let fragment = document.createDocumentFragment();



    for (let i = 2; i <= 161; i++) {

    btn.addEventListener('click', ()=>{
        function pintarPokemon(){
        let xhr = new XMLHttpRequest()
        xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${i}`)
        xhr.addEventListener('load',(data)=>{
        let dataPokemon = JSON.parse(data.target.response)
        let listItem = document.createElement('li')
        let listContent = `  
                                <div class="numero">#${dataPokemon.id}</div>
                                <img src="${dataPokemon.sprites.front_default}" alt="" />
                                <div class="name">${dataPokemon.name}</div>
                                <div class="experiencia">
                                    <div class="exp" data-ex="${dataPokemon.base_experience}"></div>
                                    <span>Exp:${dataPokemon.base_experience}</span>
                                </div>
                            `
        listItem.innerHTML=listContent
            fragment.appendChild(listItem)
            list.appendChild(fragment)

            let exp = document.querySelectorAll('.exp')
            for (const experienc of exp) {
                let dataAtribute = experienc.getAttribute('data-ex')
                let porcentajeExp = (100*dataAtribute) / CienXCien
                experienc.style.width = porcentajeExp +'%';
            }
            
        })
        
        xhr.send()
        
        

    } //si hay más de un elemento 
        if(list.childElementCount == 1){
            pintarPokemon()
        }
})


}

const btnBorrar = document.getElementById('btn-ocultar').addEventListener('click',()=>{
    if(list.childElementCount != 2){
        let child = list.querySelectorAll('li')
        for (let j = 1; j < child.length; j++) {
            const element = child[j]
            element.remove()
            
        }
        
    }
})
  








