const sumAll = function(num1,num2) {
    if(typeof(num1)=="number" && typeof(num2)=="number" && num1<num2 && num1>=0 && num2>=0){
        let sum=num1,
        sum1=num1;
        for(i=num1; i<num2;i++){
            sum1=sum1+1
            sum =sum +sum1
        }
        return sum
    }
    else if(num1>num2){
        let sum=num2,
        sum1=num2;
        for(i=num2; i<num1;i++){
            sum1=sum1+1
            sum =sum +sum1
        }
        return sum

    }
    else{
        let sum="ERROR";
        return "ERROR"
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
