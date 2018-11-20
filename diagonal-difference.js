let diag = [[1,2,3], [4,5,6], [9,8,9]];
let ld = 0;
let rd = 0;

for (let i = 0; i < diag.length; i++) {
    for (let j = 0; j < diag[i].length; j++) {
        if (i == j) {
            ld = ld + diag[i][j];
        }
        if (i == diag[i].length - j - 1) {
           rd = rd + diag[i][j]; 
        }
    }
        
}
console.log(Math.abs(ld - rd)) ;
