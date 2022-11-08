// //practicing while loops - runs code until a condition is no longer true//

var i = 0
var bool = true
while (bool == true){
    console.log(i)
    i++;
    if(i > 5){
        bool = false 
        console.log(bool)
    }
}
// ^^built-in function of typeof checks the type of a variable //

var int = 45 
var str = "hello class"
var dictionary = {
    "name": "robert",
    "class": "webfun"
}
var array = [45, 98, "hello", true]

console.log(typeof(int))
console.log(typeof(str))
console.log(typeof(dictionary))
console.log(typeof(array)) //will come back as an object, like var dictionary//

if(typeof(int == "number")){
    console.log("this is a number")
} else if(typeof(str) == "string"){
    console.log("this is a string")
} else {
    console.log("it's either a dictionary or an array")
}

//create a function given an array, return the sum of the first value in the array, plus the array's length. what happens if the array's first value is not a number

var arrayOne = [45, 98, 78, 12, 45]
function sumOfOne(arr){
    if(typeof(arr[0]) == "number"){
        return arr[0] + arr.length
    }
    return "the first value in this array is not a number"
}

console.log(sumOfOne(arrayOne))
console.log(sumOfOne(["what", 45, 98, 78, 12, 45]))
//the if(typeof) statement makes sure to filter for integers in the array before running the first return
