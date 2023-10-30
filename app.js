// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');


button.addEventListener("click", async function(){
    getRandomJoke();
})

async function getRandomJoke() {
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await respuesta.json();
    console.log(datos);
    jokeDIV.textContent = datos.value;
}