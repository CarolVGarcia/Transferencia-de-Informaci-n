
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const website = document.getElementById('website');
const company = document.getElementById('company');


function buscarAlbumById(){

    const id = document.getElementById('idUsuario').value.trim();
    if(id){
        const http = new XMLHttpRequest();
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const json = JSON.parse(this.responseText);
                name.innerText = json.name;
                username.innerText = json.username;
                email.innerText = json.email;
                address.innerText = json.address.street + ', ' + json.address.suite + ', ' + json.address.city;
                phone.innerText = json.phone;
                website.innerText = json.website;
                company.innerText = json.company.name;
            }   
            else if(this.readyState == 4 && this.status == 404){
                name.innerText = 'No se encontró el usuario';
                username.innerText = '';
                email.innerText = '';
                address.innerText = '';
                phone.innerText = '';
                website.innerText = '';
                company.innerText = '';
            }
        };
        http.open('GET', url, true);
        http.send();
    }

}

document.getElementById('btnBuscar').addEventListener('click', buscarAlbumById);