const add = function(a,b) {
  let j=a +b;
  return j;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(myArray) {
  let sum=0;
  for (i=0; i<myArray.length; i++){
    sum=sum+myArray[i];
  }
  return sum;
};

const multiply = function(myArray) {
  let sum=1;
  for (i=0; i<myArray.length; i++){
    sum=sum*myArray[i];
  }
  return sum;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let factorial=1;
  for (i=1;i<=a;i++){
    if (a==0){
    factorial=1;
    }
    else if(a==1){
      let factorial=1;
    }
    else{
      factorial=factorial*i
      
    }
  }
  return factorial;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
