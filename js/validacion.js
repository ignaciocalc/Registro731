function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById("regBtn").addEventListener("click", function(e) {
    e.preventDefault(); 

    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    if (password1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        showAlertError();
        return;
    }


    showAlertSuccess();
});