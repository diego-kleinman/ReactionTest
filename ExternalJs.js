var start = new Date().getTime();

//obtengo la altura y ancho de la ventana abierta
//obtain the height and the width of the window
var altura = window.innerHeight;
var ancho = window.innerWidth;
var colours = ["red", "blue", "green", "black", "brown", "grey"];

//Funciones auxiliares
//Auxiliar functions
//**********************************************************************************************************

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//En js para remover un elemento debo ir a su padre y remover la referencia al hijo
//In js in order to remove an element I have to go to it´s father and remove the reference to it´s child 
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function makeBox(id) {
    var randomPositionX = randomInteger(100, ancho - 200);
    var randomPositionY = randomInteger(250, altura - 350);
    var randomColour = colours[Math.round(Math.random()*5)];
    if (id == "randomCircle") {
        var div = document.createElement('div');
        div.setAttribute("class", "box");
        div.setAttribute("id", "randomCircle");
        div.style.borderRadius = "50%";
        div.style.left = randomPositionX;
        div.style.top = randomPositionY;
        div.style.backgroundColor = randomColour;
        document.body.appendChild(div);
    }
    else if (id == "randomSquare") {
        var div = document.createElement('div');
        div.setAttribute("class", "box");
        div.setAttribute("id", "randomSquare");
        div.style.left = randomPositionX;
        div.style.top = randomPositionY;
        div.style.backgroundColor = randomColour;
        document.body.appendChild(div);

    }


}



//**********************************************************************************************************
//Parte que se ejecuta
//Part that executes

function makeRandomForm() {

    var x = Math.random();
    if (x < 0.5) {
        makeBox("randomCircle");
        document.getElementById("randomCircle").onclick = function () {
            var end = new Date().getTime();
            var result = (end - start) / 1000;
            start = new Date().getTime();
            document.getElementById("timeResult").innerHTML = "Your time:" + result + "s";
            removeElement("randomCircle");
            makeRandomForm();
        }
    }
    else {
        makeBox("randomSquare");
        document.getElementById("randomSquare").onclick = function () {
            var end = new Date().getTime();
            var result = (end - start) / 1000;
            start = new Date().getTime();
            document.getElementById("timeResult").innerHTML = "Your time:" + result + "s";
            removeElement("randomSquare");
            makeRandomForm();

        }
    }

}

makeRandomForm();

