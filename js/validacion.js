function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

 document.getElementById('regBtn').addEventListener('click', function() {
    const checkbox = document.getElementById('terminos').value.trim();
    if (!checkbox.checked) {
      showAlertError();
    }
 });

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

document.getElementById("regBtn").addEventListener("click", function(e) {
    e.preventDefault(); 

    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    if (password1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        showAlertError();
        return;
        
    showAlertSuccess();
});
