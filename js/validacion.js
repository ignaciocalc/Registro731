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