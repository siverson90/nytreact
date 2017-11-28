
1,1,2,3,5,8,

let a = 0;
let b = 1;

result = b;

for( let i = 1; i < 15; i++) {
  result = a + b
  a = b ;
  b = result ;
}