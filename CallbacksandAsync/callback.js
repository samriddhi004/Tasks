//callback just for logging into console
function sumNumCallBack(numbers,callback){
    let sum = numbers.reduce((acc,curr)=>acc+curr,0);
    callback(sum);
}
const nums = [1,2,3,4];
sumNumCallBack(nums,sum =>{
    console.log("sum with callback: ",sum);
})

//promises
function sumNumPromises(numbers){
    return new Promise((resolve,reject)=>{
        if(numbers.length>0){
            let sum = numbers.reduce((acc,curr)=>acc+curr,0);
            resolve(sum);
        }
        else{
            reject("Can't be null.")
        }
    })
}
sumNumPromises(numbers).then(sum=>{
    console.log("sum with promise: ",sum);
}).catch(err=>{
    console.log(err);
});

//async/await

async function sumNumAsync(numbers){
    let sum = await numbers.reduce((acc,curr)=>acc+curr,0);
    return console.log(`sum with async: ${sum}`);
} 
sumNumAsync([1,2,3,4])