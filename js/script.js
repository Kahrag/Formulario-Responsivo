// configuracao mostrar-esconder senha
const setPassword = document.getElementById('password');
const textP = document.getElementById('changeText');
function clickPassword(){
    let setPasswordType = setPassword.type == 'password';

    if(setPasswordType){
        showPassword();
    }else{
        hiddenPassword();
    }
    function showPassword(){
        setPassword.setAttribute('type', 'text');
        textP.innerHTML = 'Esconder Senha?'
    }
    function hiddenPassword(){
        setPassword.setAttribute('type', 'password');
        textP.innerHTML = 'Mostrar senha?'
    }
}
