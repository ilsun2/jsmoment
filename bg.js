const body = document.querySelector("body");

const IMG_NUMBER = 4;
 
function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    
}
function genRandomNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandomNumber();
    paintImage(randomNumber);
}
init();
