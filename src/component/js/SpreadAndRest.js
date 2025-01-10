
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

//The first item in the  meal  array is de-structured to the  starter  variable. Therefore, the code will print out  soup .

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

//The spread operator  ...  will copy the properties from  obj . Therefore, when  output  is created, it's  value  property will be equal to 4. Then 1 is substracted from the  value  property and result is stored back in the  value  property. Therefore, 3 will be printed out.



function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

//The rest operator  ...  allows a function to accept an indefinite amount of parameters. The length property of the  basket  variable will return 5 because there were 5 parameters passed to the method call. Therefore, 5 will be printed out.