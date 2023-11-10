async function contar(){
    var contador = 0;

    console.log(contador);

    while(contador < 10 ){
        contador++;
        console.log(contador);
        saida.innerHTML=contador;
        await timeout();
    }
}
function timeout(){
    return new Promise(resolve => setTimeout(resolve, 500))
}