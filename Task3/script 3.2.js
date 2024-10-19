const arr =['dogs','cats','rabbits','mice'];
const hasA = function(word){
    // return word.includes('a');
    return res =  /a/i.test(word);
    
}

arr.filter(word=>!hasA(word));