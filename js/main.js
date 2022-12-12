// let nombre = "Nombres o cualquier string";
// nombre = nombre.toUpperCase();
// let letra = "";
// let contFinal = 0;
// for (let i=0; i< nombre.length; i++) {
//     console.log(nombre.charAt(index));
//     let contTemp =1;
//     for (let cont = i+1; cont < nombre.length; cont++){
//         if (nombre.charAt(index)==nombre.chartAt(cont))
//         contTemp++;
//     }
//     if (contTemp>contFinal) {
//         contFinal = contTemp;
//         letra = nombre.charAt(index);
//     }
// }
// console.log(letra, contFinal);

function reversa(str) {
    let stringreverso = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
        stringreverso += str[i];
    }
  
    return stringreverso;
  }
  
  let str = 'Mildred Martinez';
  let stringreverso = reversa(str);
  
  console.log(stringreverso);  
  