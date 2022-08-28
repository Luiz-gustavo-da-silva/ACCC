var nome = document.forms['form']['nome'];
var email = document.forms['form']['email'];
var texto = document.forms['form']['texto'];

var erro_nome_form = document.getElementById('erro_nome_form');
var erro_email_form = document.getElementById('erro_email_form');
var erro_mensagem_form = document.getElementById('erro_mensagem_form');


nome.addEventListener('TextInput', nome_Verify);
email.addEventListener('TextInput', email_Verify);
texto.addEventListener('TextInput', texto_Verify);

function validacao(){
    if(nome.value.length === 0){
        nome.style.border = "1px solid red";
        erro_nome_form.style.display="block";
        nome.focus();
        return false;
    }
    if(email.value.length < 10){
        email.style.border = "1px solid red";
        erro_email_form.style.display="block";
        email.focus();
        return false;
    }
    if(texto.value.length === 0){
        texto.style.border = "1px solid red";
        erro_mensagem_form.style.display="block";
        texto.focus();
        return false;
    }
}

function nome_Verify(){
    if(nome.value.length >= 0){
        nome.style.border="1px solid white";
        erro_nome_form.style.display="none";
        nome.focus(false);
        return true;
    }
}
function email_Verify(){
    if(email.value.length >=10){
        email.style.border="1px solid white";
        erro_email_form.style.display="none";
        return true;
    }
}
function texto_Verify(){
    if(email.value.length >=0){
        texto.style.border="1px solid white";
        erro_mensagem_form.style.display="none";
        return true;
    }
}
