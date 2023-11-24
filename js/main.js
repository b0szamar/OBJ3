let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }
    
let osszeg=0;
for (let x in fizetes) {
    console.log(x, fizetes[x])
    osszeg += fizetes[x];
}
console.log(osszeg)