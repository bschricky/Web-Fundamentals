// Print odds 1-20
for(var i = 1; i < 21; i++){
    if(i % 2 == 1){
        console.log(i)
        }
    }

// Decreasing Multiples of 3
for(var i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i)
        }
    }

// Print the sequence
for(var i = 4; i > -4; i-=1.5){
    console.log(i)
    }

// Sigma - add all of the values from 1-100 onto variable sum
sum = 0;
for(var i = 1; i < 101; i++){
    sum += i;
    }
console.log(sum)

// Factorial - multiply all of the values from 1-12 onto variable product
product = 1;
for(var i = 1; i < 13; i++){
    product = product * i;
    }
console.log(product)