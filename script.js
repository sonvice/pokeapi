const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    let xhr 
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    } 
    else{//Validacion para internet explorer 9 o inferior
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.addEventListener('load',(datos)=>{
    let datosUrl = JSON.parse( datos.target.response)
    let list = document.getElementById('list')
        for (const userData of datosUrl) {
            let listItem = document.createElement('li')
            listItem.textContent=`${userData.id} - ${userData.name} - ${userData.address.street}`
            list.appendChild(listItem)
        }
    })

    xhr.send()
})

