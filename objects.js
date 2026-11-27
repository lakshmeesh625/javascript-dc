let obj = {
    name: "dave"
}


let obj2 = {
    alive: true,
    name: "dave",
    hobbies: ["Eat", "sleep", "code"],
    moreInfo: {
        favouriteMovie: "Captain Americe",
        favouriteColor: "Blue",
        favouriteTvShow : "Game of Thrones"
    },
    action: function() {
        return `play my favourite movie ${this.moreInfo.favouriteMovie} now`
    } 

}


console.log(obj2.action());
console.log(obj2.hobbies)
console.log(obj2.hobbies[0])
console.log(obj2.hobbies[7]);



let obj3 = {
    names: ["Virat", "axar", "Gurnoor", "shahbash", "Ajinkya", "puajara"]
    
}