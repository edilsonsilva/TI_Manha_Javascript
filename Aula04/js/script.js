function valida(){
    const nome = document.getElementById("txtNome");
    const email = document.getElementById("txtEmail");
    const idade = document.getElementById("txtIdade");
    const telefone = document.getElementById("txtTelefone");

    // vamos retirar os espaços a mais com o comando Trim e verificar se o campo está vazio
    if(nome.value.trim()==""){
        alert("Você precisa preencher o nome");
        // vamos colocar o ponto de inserção devolta a caixa nome
        nome.value="";
        nome.focus();//a caixa nome volta a ter o foco
    }
    //vamos validar o email convertendo os caracteres para miniusculo
    email.value = email.value.toLowerCase();

    //validar o campo telefone
    if(telefone.value.trim()==""){
        alert("Você precisa preencher o telefone");
        telefone.value="";
        telefone.focus();
    }

}