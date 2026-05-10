let str = "Anurag"

let answer =""
for(let i =str.length-1;i>=0;i--){
    answer+=str[i];
}

console.log(answer)

let arr = [1,3,4,34,54]




arr.forEach((element)=>{
    console.log(element*2)
})

let arr2 = arr.map((element)=>{
    return arr/2;
})
console.log(arr2);
let arr3 = arr.filter((element)=>element>10)
console.log(arr3);

