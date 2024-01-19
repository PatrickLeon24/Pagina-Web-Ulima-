let numeroTurno = 1;
let turnos = 0;
const combinacionesGanadoras = [
    ["0_0", "0_1", "0_2"], ["1_0", "1_1", "1_2"], ["2_0", "2_1", "2_2"],
    ["0_0", "1_0", "2_0"], ["0_1", "1_1", "2_1"], ["0_2", "1_2", "2_2"],
    ["0_0", "1_1", "2_2"], ["0_2", "1_1", "2_0"]
];
let jugadasX = [];
let jugadasO = [];

function finalizarJuego(mensaje) {
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let casilla = devolverCasilla(i, j);
            casilla.disabled = true;
        }
    }
    
    
    let titulo =document.getElementById("tituloJuego");
    titulo.innerHTML=mensaje;
    
}



function verificarGanador(jugadas, jugador) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let ganador = combinacionesGanadoras[i].every(pos => jugadas.includes(pos));
        if (ganador) {
            finalizarJuego("Ganador: " + jugador)
            setTimeout(function() {
                
                location.reload();
            }, 1700);
             
            return true;
        }
    }
    return false;
}



function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j);
}

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);

    

    let casilla = devolverCasilla(i, j);
    let idCasilla = i + "_" + j;
    let hayGanador = false;

    if (numeroTurno === 1) {
        casilla.innerHTML = "<img src='/tres en raya/png-transparent-x-red-mark-incorrect-thumbnail.png'>";
        jugadasX.push(idCasilla);
        hayGanador = verificarGanador(jugadasX, "X");
        
        numeroTurno = 2;
    } else {
        casilla.innerHTML = "<img src='/tres en raya/circle_PNG4.png'>";
        jugadasO.push(idCasilla);
        hayGanador = verificarGanador(jugadasO, "O");
        
        numeroTurno = 1;
    }

    turnos++;
    if (turnos == 9 && !hayGanador) {
        finalizarJuego("Empate")
        setTimeout(function() {
            location.reload();
        }, 1700);
    }
    casilla.disabled = true;
}

function main() {

}

main();
