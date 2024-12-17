// rgb(0,0,0,)

function randomNumber(){
     return Math.floor(Math.random()*256);
}

function randomColor(){
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

function changebg(){
    return document.body.style.backgroundColor =randomColor();
}