import {getDatabase, ref, set} from "firebase/database"
function ledOn(){
    document.getElementById("estadoL").innerHTML = "Led ligado"
    console.log("estadoLed: 1")
    const db = getDatabase();
        set(ref(db, 'led'),{
            estado: 1
        })
    }

function ledOff(){
    document.getElementById("estadoL").innerHTML = "Led desligado"
    console.log("estadoLed: 0")
}