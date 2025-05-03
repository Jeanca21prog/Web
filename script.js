const btn = document.getElementById("btn");
const title = document.getElementById("title");
const audio = document.getElementById("Temu");

function hello() {
    console.log("Hello");
    title.innerText = "Tu tu tu temu tu tu temu"
    audio.play()
    setTimeout(() => {
           title.innerText = "Gracias amiguito"
           audio.pause() 
    }, 5000);
    
}
btn.addEventListener("click", hello)