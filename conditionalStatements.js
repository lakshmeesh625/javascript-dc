let soup = `Chicken noodles soup`;
let reply;
let isCustomerBanned = true;

if (isCustomerBanned) {
    reply = `Sorry you have been banned from the restaurant`;


}
else {
    if (soup) {
        reply = `Here is your ${soup}`
    }
    else {
        reply = `Sorry the soup is'nt available`
    }
}
console.log(reply);




 