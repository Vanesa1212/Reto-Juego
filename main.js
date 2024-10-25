let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let SegundoResultado = null;
let Movimientos = 0;
let Aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let TiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById('Movimientos');
let mostrarAciertos = document.getElementById('Aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function contarTiempo(){
    TiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;

        if(timer == 0){
            clearInterval(TiempoRegresivoId);
            bloqueartarjetas();
        }
    },1000);
}
function bloqueartarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetabloqueada = document.getElementById(i);
        tarjetabloqueada.innerHTML = numeros[i];
        tarjetabloqueada.disabled = true;
    }
}


function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

tarjetasDestapadas++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas == 1){

 tarjeta1 = document.getElementById(id);
 primerResultado = numeros[id];
 tarjeta1.innerHTML = primerResultado;

 tarjeta1.disabled = true;

} else if (tarjetasDestapadas == 2){
    tarjeta2 = document.getElementById(id);
    SegundoResultado = numeros[id];
    tarjeta2.innerHTML = SegundoResultado;

    tarjeta2.disabled = true;

    Movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${Movimientos}`;

    if(primerResultado == SegundoResultado){

        tarjetasDestapadas = 0;

        Aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${Aciertos}`;

        if(Aciertos == 8){
            clearInterval(TiempoRegresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${Aciertos} 😲`;
            mostrarTiempo.innerHTML = `Fantastico! 🎉 Sólo demoraste ${timerInicial - timer} Segundos`;
            mostrarMovimientos.innerHTML = `Movimientos: ${Movimientos} 🤘😎`;
        }
    }

}else{
    setTimeout(()=>{
        tarjeta1.innerHTML = ' ';
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
    },100)
}
}