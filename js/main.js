let nombre = "Nombres o cualquier string";
nombre = nombre.toUpperCase();
let letra = "";
let contFinal = 0;
for (let i=0; i< nombre.length; i++) {
    console.log(nombre.charAt(index));
    let contTemp =1;
    for (let cont = i+1; cont < nombre.length; cont++){
        if (nombre.charAt(index)==nombre.chartAt(cont))
        contTemp++;
    }
    if (contTemp>contFinal) {
        contFinal = contTemp;
        letra = nombre.charAt(index);
    }
}
console.log(letra, contFinal);