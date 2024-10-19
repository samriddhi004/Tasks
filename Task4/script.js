// const vowel = /[aeiou]/gi;
const vowels ="aeiouAEIOU";

const countVowels = function(word){
    return word.split("").reduce((count,char) =>{ //accumulator,currvalue
        return vowels.indexOf(char) == -1 ? count:count +1;
    },0); //initialvalue
}

console.log(countVowels("strawberry"));