document.getElementById("enviar").addEventListener("click", validaForm)

function validaForm () {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phone").value
  if (name != "" && email != "" && phone != "") {
    alert("Prontinho, você receberá as novidades por e-mail")
  } else {
    alert("Preencha todos os campos do formulário, por favor")
  }
}
