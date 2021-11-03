function CheckLogin()
{
    const username = document.getElementById('nombreUsuario').value;
    const password = document.getElementById('contrasena').value;
    console.log(username);
    console.log(password);
    let arrayDatos = {
        nombreusuario:username = document.getElementById('nombreUsuario').value,
        contrasena: password = document.getElementById('contrasena').value
    };
    const url = `http://127.0.0.1:5000/loginUser/`;

        axios ({
        method: 'post',
        url: url,
        reponseType: 'json',
        data: arrayDatos

    })
    .then (res=>{
        console.log(res.data);
    })
    .catch (error=>{

        console.error(error);

    });
    }