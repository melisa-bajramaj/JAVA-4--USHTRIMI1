/*Analiza e kohës së studimit
Një student mëson 95 minuta të hënën, 80 të martën dhe 115 të mërkurën.
Llogaritni gjithsej minutat dhe kohën në orë (si numër dhjetor).
Veçmas, llogaritni sa minuta mbeten pas ndarjes së totalit me 60 duke përdorur %. Paraqisni të gjitha
vlerat në Console.*/

let hene = 95;
let marte = 80;
let merkure = 115;

let totali = hene + marte + merkure;
let oret = totali / 60;

console.log("Totali i minutave:" + totali+ "min");
console.log("Koha në orë:" + oret+ "h");

let minShtese = totalo % 60;
console.log("Minutat shtese "+ minShtese + "min");