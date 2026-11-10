/*Rezultati i vlerësimit
Pikët e një studenti janë: aktiviteti 18, projekti 24 dhe provimi 43.
Llogaritni totalin e pikëve dhe përqindjen e arritur, duke supozuar se maksimumi është 100 pikë.
Provimi korrigjohet nga 43 në 48 pikë: ndryshoni vetëm variablën përkatëse dhe rillogaritni totalin.
Shfaqni të dy rezultatet.*/

const aktiviteti = 18;
const projekti = 24;
let provimi = 43;

let totali = aktiviteti + projekti + provimi;
let perqindja =  (totali /100)*100;

console.log("totali i pikeve:" + totali);
console.log("totali i perqindjes" + perqindja + "%")

provimi += 5;

totali = aktiviteti + projekti + provimi;
perqindja = (totali / 100)*100;

console.log("totali i pikeve pas shtimit:" + totali + "pike");
console.log("totali i perqindjes pas shtimit:"+ perqindja + "%");



