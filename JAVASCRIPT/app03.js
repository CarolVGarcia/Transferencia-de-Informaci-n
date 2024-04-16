
function hacePeticion(){

    const http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let res = document.getElementById('lista');
            const json = JSON.parse(this.responseText);
            for(let datos of json){
                res.innerHTML += `<tr>
                                    <td class="columna1">${datos.id}</td>
                                    <td class="columna2">${datos.name}</td>
                                    <td class="columna3">${datos.username}</td>
                                    <td class="columna1">${datos.email}</td>
                                    <td class="columna2">${datos.address.street}, ${datos.address.suite}, ${datos.address.city}</td>
                                    <td class="columna3">${datos.phone}</td>      
                                    <td class="columna1">${datos.website}</td>
                                    <td class="columna2">${datos.company.name}</td>                       
                                  </tr>`;
            }
        }
    }
    http.open('GET', url, true);
    http.send();

}

function limpiarTabla(){
    let res = document.getElementById('lista');
    res.innerHTML = '';

}

document.getElementById('btnCargar').addEventListener('click', hacePeticion);
document.getElementById('btnLimpiar').addEventListener('click', limpiarTabla);
