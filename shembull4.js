/*Porosia online me zbritje
Një porosi përmban 2 produkte me çmim 35 € dhe 1 produkt me çmim 24 €.
Llogaritni çmimin para zbritjes, shumën e zbritjes prej 15% dhe çmimin pas zbritjes.
Shtoni 4 € transport dhe shfaqni vlerën përfundimtare. Çdo hap të dalë në një rresht të veçantë në
Console.*/

let produktet1 = 24;
let produktet2 = 35;
let cmimiTotal = produktet1 + produktet2;

produktet2 = produktet2 * 0.15;
produktet1 = produktet1 * 0.15;

let cmimiTotalPasZbritjes = produktet2 + produktet1;
let vleraTotale = cmimiTotalPasZbritjes ;

console.log("Cmimi total i produkteve:" + cmimiTotal + "€");
console.log("Cmimi total i produkteve pas zbritjes" + cmimiTotalPasZbritjes + "€");
console.log("Vlera Totale e fatures me transport:" + vleraTotale + "€");