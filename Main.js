//question :1
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumOfEvenNumbers(numbers);
console.log(result); 




//question :2
function countvowels(str){
    const vowels =['a','e','i','o','u'];
     str =str.tolowercase();

     let count = 0;

for (let i =0;i<str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
return count;
}
const inputString = "Hello, World!";
const numVowels = countVowels(inputString);
console.log(inputString)
console.log("Number of vowels: " + numVowels);


//question :3
function findLongestStringLength(arr)
{
    let maxlength = 0;

    for (let i = 0; i <arr.lenth; i++)
    {
        if (arr[i].lenth > maxlength)
        {
            maxlength =arr[i].length;
        }
    }

    return maxlength;
}

const inputArr =["apple","banana","pear","grapefruit"];

const maxlength =findLongestStringLength(inputArr);

console.log(maxlenth);


//question :4

function findAverage(arr)
{
    if (!Array.isArray(arr) || arr.length === 0)
    {

        return 0;
    }
    const sum = arr.reduce((acc,curr) => acc +curr,0);

    const average =sum /arr.length;

    return average;
}
const inputArray =[1,2,3,4,5];

const output = findAverage (inputArray);
console.lpg(output);

//question :5
function getobjectKeys(obj)
{
    return Object.keys(obj);
}
const input ={name :"yahya", age :20, city :"karachi" };
console.log(input);

//question :6

function getValuesForKey(object, key)
{
    const values =[];
    for (const obj of objects){
        if (key in obj){
            values.push(obj[key]);
        }
    }
    return values;
}
const input = [{name :"yahya", age :20},{name:"anus", age :16},{name :"taha", age :18}];
console.log(input);

