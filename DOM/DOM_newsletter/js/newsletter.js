
const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");


function cadastrarEmail(){
    let email = txtEmail.value;
    msgFeedback.innerHTML = `Email: ${email} foi cadastrado com sucesso!`;
}