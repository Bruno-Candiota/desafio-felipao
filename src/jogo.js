 let nome = "Bruno"
 let XPheroi = 7500; 
let nivel 

if (XPheroi < 1000) {
nivel = "ferro";
} else if (XPheroi >= 1001 && XPheroi <= 2000) {
    nivel = "bronze";
} else if (XPheroi >= 2001 && XPheroi <= 5000) {
    nivel = "prata"
}else if (XPheroi >= 5001 && XPheroi <= 7000){
    nivel = "ouro"
} else if (XPheroi >= 7001 && XPheroi <= 8000) {
    nivel = "platina"
} else if (XPheroi >= 8001 && XPheroi <= 9000) {
    nivel ="ascendente"
} else if (XPheroi >= 9001 && XPheroi <= 10000) {
    nivel = "imortal"
} else if ( XPheroi >= 10001) {
    nivel = "radiante "
}
console.log ("O Herói de nome é:" + nome + "e está no nivel:" + nivel )