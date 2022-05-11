//Register
export const registro = () => {
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(!firstName && !lastName && !email && !password){
        alert(`Ingrese todos los datos`);
    }else if(!firstName || !lastName || !email || !password){
        alert(`Hay campos vacios`);
    }else{
        alert(`Registro exitoso`);
    }
}

//Login
export const login = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(!email && !password){
        alert(`Ingrese datos para iniciar sesion`);
    }else if(!email || !password){
        alert(`Ingrese todos los datos para iniciar sesion`);
    }
}

export const pi = Math.PI;