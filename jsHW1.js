function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}
drawTriangle(5, '*');


/*
let height = 5;
let symbol = '*';
for (let i = 1; i <= height; i++) 
  {console.log(symbol.repeat(i));}
*///