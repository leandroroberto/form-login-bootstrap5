// Verificação de aceitação dos termos
// Página de registro

let checkbox = document.getElementById('agree-form');
let btnAgree = document.getElementById('btn-register');
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')

checkbox.addEventListener('click', ()=>{
    if((checkbox.checked && password.value == confirmPassword.value) && (password.value.length > 0 && confirmPassword.value.length > 0)) {
        btnAgree.removeAttribute('disabled')
    } else if ((!checkbox.checked && password.value != confirmPassword.value) || (!checkbox.checked && password.value == confirmPassword.value)){
            btnAgree.setAttribute('disabled', 'disabled')
    } else if(password.value == "" && confirmPassword.value == ""){
        alert("Preencha todos os campos de senha")
    } else if(checkbox.checked && password.value != confirmPassword.value){
        alert("As senhas não conferem")
    }
})


confirmPassword.addEventListener('keyup', ()=>{
    if (password.value == confirmPassword.value){
        if (checkbox.checked) {
            btnAgree.removeAttribute('disabled')
        }
    } else if(password.value != confirmPassword.value){
        btnAgree.setAttribute('disabled', 'disabled')
    }
})


