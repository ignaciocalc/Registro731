function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function contraseñasEq() {
    const contra1 = document.getElementById('password1').value;
    const contra2 = document.getElementById('password2').value;

    return   contra1 == contra2
}

function camposNoVacios() {
    const res = document.getElementById('nombre').value + 
                document.getElementById('apellido').value + 
                document.getElementById('email').value + 
                document.getElementById('password1').value + 
                document.getElementById('password2').value +
                document.getElementById('terminos').value;

    alert(res);
    return res != '';    
}