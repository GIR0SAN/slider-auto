const images = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idFrame = 0;

function carrosel(){
    idFrame++;

    if (idFrame > img.length -1){
      idFrame = 0;
    }

    images.style.transform = `translateX(${-idFrame * 300}px)`;
}

setInterval(carrosel, 2000);