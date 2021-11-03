const url = `http://192.168.191.64:5000/api/v1/items/`


    function getInfo(){
        const url = `http://192.168.191.77:5000/listOfUsers/`;
        
        axios ({
        method: 'GET',
        url: url,
        reponseType: 'json',                    
    })
    .then (res=>{
        console.log(res.data);
        let contador = 0;
        res.data.forEach(element => {
            if(element.IdTipoUsuario=='3')
            {   console.log("Almacenista encontrado")
                contador++;
                ///contenedor principal
                var etiquetaDiv = document.createElement("div");
                etiquetaDiv.setAttribute("class", "producto");
                etiquetaDiv.setAttribute("id",`cont-p${contador}`);//
                var contenedor = document.getElementById("grid");
                contenedor.appendChild(etiquetaDiv);

                //imagen individual
                var etiquetaImg = document.createElement("img");
                etiquetaImg.setAttribute("class", "producto__imagen");
                etiquetaImg.setAttribute("src", "img/Empleados/guest.webp");
                etiquetaImg.setAttribute("alt", "");
                var contenedor = document.getElementById(`cont-p${contador}`);
                contenedor.appendChild(etiquetaImg);
                    //contenedor de info y botones
                var etiquetaDiv = document.createElement("div");
                etiquetaDiv.setAttribute("class", "producto__informacion");
                etiquetaDiv.setAttribute("id",`cont-info${contador}`);
                var contenedor = document.getElementById(`cont-p${contador}`);
                contenedor.appendChild(etiquetaDiv);
                ///etiqueta de nombre
                var etiquetaP1 = document.createElement("p");
                etiquetaP1.setAttribute("class", "producto__nombre");
                var contenido = document.createTextNode(`${element.Nombre +" "+ element.Apellido}`);
                etiquetaP1.appendChild(contenido);
                var contenedor = document.getElementById(`cont-info${contador}`);
                contenedor.appendChild(etiquetaP1);
                //contenedor de botones
                var etiquetaP1 = document.createElement("p");
                etiquetaP1.setAttribute("id", `botones${contador}`);
                var contenido = document.createTextNode("");
                etiquetaP1.appendChild(contenido);
                var contenedor = document.getElementById(`cont-info${contador}`);
                contenedor.appendChild(etiquetaP1);
                //botones
                    ///btnMod
                var botonMod = document.createElement("button");
                botonMod.setAttribute("id", "btnM");
                botonMod.setAttribute("class", "btn1");
                botonMod.setAttribute("type", "button");
                botonMod.setAttribute("textContent", "Modificar");
                botonMod.value=element.IdUsuario;
                botonMod.setAttribute("onclick", `changeform(${botonMod.value})`);
                //botonMod.setAttribute("text", "Modificar");
                
                var contenido = document.createTextNode("Modificar perfil");
                botonMod.appendChild(contenido);
                var contenedor = document.getElementById(`botones${contador}`);
                contenedor.appendChild(botonMod);

                    ///btnEliminar
                var botonMod = document.createElement("button");
                botonMod.setAttribute("id", "btnM");
                botonMod.setAttribute("class", "btn1");
                botonMod.setAttribute("type", "button");
                // botonMod.setAttribute("onclick", "deleteUser()");
                botonMod.setAttribute("textContent", "Eliminar");
                botonMod.value=element.IdUsuario;
                botonMod.setAttribute("onclick", `deleteUser(${botonMod.value})`);
                var contenido = document.createTextNode("Eliminar cuenta");
                botonMod.appendChild(contenido);
                var contenedor = document.getElementById(`botones${contador}`);
                contenedor.appendChild(botonMod);
            }

            

        });
        backHome();
    })
    .catch (error=>{
        console.error(error);
    });
    }