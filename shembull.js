/*1)Fatura e librarisë
Një student blen 3 libra me çmim 12.50 € dhe 4 fletore me çmim 1.80 €.
Ruani çmimet dhe sasitë në variabla; llogaritni koston për secilin lloj produkti dhe shumën totale.
Shtoni 2.50 € për transport duke përdorur +=. Shfaqni faturën e ndarë sipas produkteve në Console.*/


const cmimiLibrit = 12.50;
const sasiaLibrit = 3;

const cmimiFletores = 1.80;
const sasiaFletores = 4;

let totaliLibri = cmimiLibrit*sasiaLibrit;
let totaliFletores = cmimiFletores*sasiaFletores;

let totali = totaliLibri + totaliFletores;

totali +=  2.50;

console.log("fatura");
console.log("Totali i librit:" + totaliLibri + "$");
console.log("Totali i fletores:" + totaliFletores + "$");
console.log("Transporti : 2.50$");
console.log("Totali i fatures:"+ totali + "$");