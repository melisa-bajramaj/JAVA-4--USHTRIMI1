/*Konvertimi i të dhënave
Nga një formular imagjinar janë marrë vlerat tekstuale: "25", "17" dhe "8".
Shfaqni rezultatin e mbledhjes së tri vlerave pa konvertim. Shpjegoni në një koment pse del ai rezultat.
Pastaj konvertojini në numra me Number(), llogaritni shumën dhe mesataren, dhe kontrolloni tipin e
rezultateve me typeof.*/

let numri1 = "25";
let numri2 = "17";
let numri3 = "8";

console.log(numri1 + numri2 + numri3); 
numri1 = Number(numri1);
numri2 = Number(numri2);
numri3 = Number(numri3);    

let totali = (numri1 + numri2 + numri3)/3;

console.log("Mesatarja e numrave:" + totali);
console.log("Tipi i rezultatit:" + typeof totali);
