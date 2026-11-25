function lowercase(input1, input2) {

    console.log(input1.toLowerCase());
    console.log(input2.toLowerCase());


    
}

lowercase("ABRACADABRA", "DABRACAABRA");


function sum(num1, num2) {
    if (num1 !== undefined && num2   === undefined) {
        return num1 + num1
    }
    else if(num1 === undefined && num2 !== undefined){
        return num2 + num2


    }
    else if (num1 && num2 === undefined) {
        return `the parameters are empty`
    }
    else {
        return num1 + num2
    }
}

console.log(sum(4, 4));
console.log(sum(4));
console.log(sum(4));
console.log(sum(4,));





//arrow functions



//let capitalize the initial letter

let capitalize = (name) => {
    name = name.trim()
   return  name.charAt(0).toUpperCase()  + name.slice(1).toLowerCase()

    
}





console.log(capitalize(" ABRAcadabra  "))




