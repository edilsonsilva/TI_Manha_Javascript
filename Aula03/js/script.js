//dom -> document object modeling - manipulação de tags html
//alert("Olá! Eu sou uma caixa de mensagem");
//document.getElementsByTagName("h1")[0].innerHTML="Mudei o texto";
/*
O javascript é baseado em eventos, ou seja, ele
 olha para o que o usuário está fazendo em relação
 a página web. Se o usuário está clicando em algo,
 ele ele digita algo em algum lugar .. 


 Os eventos sempre chamam função. Então todas as 
 vezes que você for usar um evento, também usará
 uma função.
*/

function texto(){

    //dry -> don't repeat yourself
    //refactor -> refatorando o código. Melhorando o código

    // document.getElementsByTagName('h1')[0].innerHTML='Mudou o texto'
    // document.getElementsByTagName('h1')[0].style.color="#f00";
    // document.getElementsByTagName('h1')[0].style.fontSize="50pt";
    // document.getElementsByTagName('h1')[0].style.textAlign="center";
    
    //refactor -> refatorando o código. Melhorando o código
    // var h1 = document.getElementsByTagName('h1')[0];
    //     h1.innerHTML="Novo texto";
    //     h1.style.color="#0f0";
    //     h1.style.backgroundColor="#000";
    //     h1 = "Elementos";
    //     h1.style.backgroundColor="#f00";
    
    //refactor -> refatorando o código. Melhorar o código
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML="Novo texto";
    h1.style.color="#0f0";
    h1.style.backgroundColor="#000";
    h1.style.backgroundColor="#f00";
}