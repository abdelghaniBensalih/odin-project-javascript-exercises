const reverseString = function(word) {
    let j=word.length,
    wordClass=[];
for (i=0;i<=word.length;i++){

    wordClass[i]=word[j]
    j=j-1
}
reverse=wordClass.join('')
return reverse
};

// Do not edit below this line
module.exports = reverseString;
