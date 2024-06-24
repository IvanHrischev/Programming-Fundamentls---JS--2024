function printEndSum(startNum, endNum){
let sum = 0
let result = ``;
for (let currentNum = startNum; currentNum<= endNum; currentNum++){
 result += currentNum + ` `
 sum+= currentNum
}
console.log(result)
console.log(`Sum: ${sum}`)


}
printEndSum(5, 10)
printEndSum(0, 26)