
function load()
{
    alert("Bem Vindo!");
};

function clicou()
{
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
};
function redirecionar()
{
    window.open("https://www.google.com");
};

function trocar(elemento)
{
    elemento.innerHTML="Obrigado por passar o mouse";
    //document.getElementById("passeomouse").innerHTML="Obrigado por passar o mouse";
    
};

function voltar(elemento)
{
    elemento.innerHTML="Passe o mouse aqui";
    //document.getElementById("passeomouse").innerHTML="Passe o mouse aqui";
};

function funcaoChange(elemento)
{
    alert(elemento.value);
};

/*
function soma(numero1,numero2)
{
    alert(numero1+numero2);
}

function validadeIdade (idade)
{
    if(idade>=18)
    {
        var validar;
        validar=true;
    }
    else
    {
        validar=false;
    };
    return validar;
}

var idade = prompt("Qual sua idade?");

alert(validadeIdade(idade));


var nome = "Alan Coimbra";
var idade = 32
var frase = "eu nao tenho essa idade"

alert(frase.replace("nao","sim"));

alert("Ola "+nome+" ,vc tem "+idade+" anos!");
*/

/*var lista = ["maca","pera","laranja"];
lista.push("uva");
lista.pop();

alert(lista.join(" - ")+lista.length);


var frutas = [{nome:"maca", cor:"vermelha"},{nome:"uva", cor:"roxa"}];

alert(frutas[1].nome);



var idade = prompt("Qual sua idade?")
if (idade >= 18)
    {
        alert("maior de idade");
    }
else
    {
        alert("menor de idade");
    };      
    


var count = 0;
while(count<=5){
    alert(count);
    count++;
}



var count;

for(count=0;count<=5;count++){
    alert(count);
};


var data = new Date;

alert(data);
*/