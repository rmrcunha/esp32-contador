function ledOn(){
    document.getElementById("estadoL").innerHTML = "Led ligado"
    console.log("estadoLed: 1")
    fetch('/led/on')
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.error(error));
}

function ledOff(){
    document.getElementById("estadoL").innerHTML = "Led desligado"
    console.log("estadoLed: 0")
}