const matrix = [];
for (let i = 0; i < 10; i++) {
    matrix[i] = [];
    for (let j = 0; j < 10; j++) {
        matrix[i][j] = Math.floor(Math.random() * 10);
    }
} 

for (var i = 0, j = 9; i <= 9; i++, j--)
    console.log("a[" + i + "][" + j + "]= " + matrix[i][j]);


