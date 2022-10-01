// Verificação dos campos para ativação do botão entrar
// Pagina de login

let email = document.getElementById('email')
let password = document.getElementById('password')
let btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener('click', (e)=>{
    if(email.value == ""){
        e.preventDefault()
        alert("Preencha o campo email")
    } else if (password.value == ""){
        e.preventDefault()
        alert("Preencha o campo senha")
    }
})