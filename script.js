const btn = document.getElementById("btn");
const title = document.getElementById("title");

function hello() {
    console.log("Hello");
    title.innerText = "Piero pasa lo de sistemas digitales"
    setTimeout(() => {
           title.innerText = "Gracias amiguito" 
    }, 300);
}
btn.addEventListener("click", hello)