let numeroTurno=1
let turnos=0
const combinacionesGanadoras=[
    ["0_0", "0_1", "0_2"], ["1_0", "1_1", "1_2"], ["2_0", "2_1", "2_2"],
    ["0_0", "1_0", "2_0"], ["0_1", "1_1", "2_1"], ["0_2", "1_2", "2_2"],
    ["0_0","1_1", "2_2"], ["0_2", "1_1", "2_0"]
];
let jugadasX=[]
let jugadasO=[]
let conta=0
function verificarGanador(jugadas) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let ganador = combinacionesGanadoras[i].every(pos => jugadas.includes(pos));
        if (ganador) {
            setTimeout(function(){

                alert("Ganador: " + ("X"));
            
            
            }, 700)
            setTimeout(function(){

                location.reload();
            
            
            }, 700)

            return;
        }
    }
}
function verificarGanador1(jugadas) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let ganador = combinacionesGanadoras[i].every(pos => jugadas.includes(pos));
        if (ganador) {
            setTimeout(function(){

                alert("Ganador: " + ("O"));
            }, 700)
            setTimeout(function(){

                location.reload();
            
            
            }, 700)
            
            return ;
        }
    }
}

function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    let idCasilla = i + "_" + j;
    
    if (numeroTurno === 1) {
        numeroTurno = 2;
        casilla.innerHTML = "<img src='/ola/red-x-red-x-11563060665ltfumg5kvi.png'>";
        jugadasX.push(idCasilla);
        verificarGanador(jugadasX);
    } else {
        numeroTurno = 1;
        casilla.innerHTML = "<img src='/ola/circle_PNG4.png'>";
        jugadasO.push(idCasilla);
        verificarGanador1(jugadasO);
    }
    turnos++
    if (turnos==9) {
        alert("Empate");
        setTimeout(function(){

            location.reload();
        
        
        }, 700)
    }
    casilla.disabled = true; 
}
function reiniciar() {
    
}
function main(){

}
main()