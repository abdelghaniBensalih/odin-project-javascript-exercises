const convertToCelsius = function(x) { 
  if ((Math.round((x-32)*10*(5/9))/10)-Math.round((x-32)*(5/9))>=0.5){
    let temp =(Math.round((x-32)*10*(5/9))/10)+0.1;
  return temp

  }
  else{
    let temp =Math.round((x-32)*10*(5/9))/10;
    return temp
  }
  

};

const convertToFahrenheit = function(x) {
  
  if (Math.round(((x*(9/5) +32)*10)/10)-Math.round(x*(9/5) +32)>=0.5){
    let temp =(Math.round((x*(9/5) +32)*10)/10)+0.1;
    return temp
  
  }
  else{
    let temp =Math.round((x*(9/5) +32)*10)/10;
    return temp
  
  }
  


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
