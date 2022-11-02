const ahojj = document.getElementById("ahoj");
const buttono = document.getElementById("button");
const inputo = document.getElementById("velikost");

buttono.onclick = () => {
    ahojj.style.fontSize = inputo.value+"px";
}
