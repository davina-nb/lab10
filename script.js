function greetUser(Username){
    console.log(document.getElementById('output').innerText = "Hello, " + Username);
}
greetUser('Davina');


function button(){
    document.getElementById("message").innerText = "Hello world!";
} 

function AddNumbers(){
    let a = 10;
    let b = 100;
    console.log(a+b);
}
function button1(){
    document.getElementById("btn1").value= AddNumbers();
    document.getElementById("result").innertext = AddNumbers();
}
