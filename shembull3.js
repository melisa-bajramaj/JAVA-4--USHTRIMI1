/*Buxheti i një udhëtimi
Tre persona paguajnë së bashku 96 € për akomodim, 42 € për transport dhe 57 € për ushqim.
Llogaritni koston totale dhe pjesën që i takon secilit person.
Nëse secili ka buxhet 80 €, llogaritni sa euro i mbeten secilit. Shfaqni rezultatet si fjali të qarta*/

const akomodimi = 96;
const transporti = 42;
const ushqimi = 57;

let costoTotale = akomodimi + transporti + ushqimi;

let pjesa = costoTotale /3;

let mbetja = 80-pjesa;

console.log("costo totale"+ costoTotale + "€");
console.log("pjesa e secilit person"+ pjesa + "€");
console.log("mbetja e secilit person"+ mbetja + "€");