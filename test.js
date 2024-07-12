let prices = [10, 15, 12] // prices (in)
let sizes = ['s(in)', 'l(out)', 'xl(in)', 'xxl(in)'] // all sizes
// let res = [10, 0, 15, 12] // resultat attendu
let array = [];
let j = 0;
let i=0
for(i=0 ; i<sizes.length ; i++){
    if (sizes[i].includes('(in)')){
        // Ra misy (in) ilay tableau de push-ena ao anaty tableau le valeur
        array.push(prices[j]);
        j++
    }else{
        // Ra tsy misy anle (in) de mi push 0
        array.push(0);
    }
    
}
console.log(array) 