const removeFromArray = function(...args) {
    let myArray=args[0],
        newArray=[],
        myFunct = function(item){
            if (!args.includes(item)){
                newArray.push(item)
            }
        };
    myArray.forEach(myFunct)
    return newArray
};



// Do not edit below this line
module.exports = removeFromArray;
