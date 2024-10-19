const arr =['dogs','cats','rabbits','mice'];
const hasA = function(word){
    // return word.includes('a');
    const res =  /a/i.test(word);
    return console.log(`${word} : ${res}`);
}
arr.forEach(hasA);

