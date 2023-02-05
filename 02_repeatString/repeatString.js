const repeatString = function(word, num) {
    var expression=word
    if (num==0){
        var expression="";
        return expression
    }
    else if (num<0){
        var expression="ERROR";
        return expression
    }
    else{
        for (i=1; i<num;i++){
    
            expression = expression + word
        
        }
        return expression
    }
    
};

// Do not edit below this line
module.exports = repeatString;
