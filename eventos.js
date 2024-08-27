document.getElementById("divButton").addEventListener("click", (event) => {
    alert("Hola! Soy el div");
}) 
document.getElementById("saludarButton").addEventListener("click", (event) => {
    alert("Hola!")
    event.stopPropagation();
})