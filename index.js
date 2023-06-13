// const  findOutlier =(arr) =>{
//     let even = []
//     let odd = []
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             even.push(arr[i])
//         }
//         if(arr[i]%2 ===1){
//             odd.push(arr[i])
//         }
//     }
//     if(even.length < odd.length){
//         return even
//     }else{
//         return odd 
//     }

// return evens.length === 1? evens[0] : odds[0] this is a terinary statement that we can use in place of the if else for the 2nd part 
// }

const findOutlier = arr =>{
    let oddFilt =arr.filter((n) => n % 2 == 1)
    let evenFilt =arr.filter((n) => n % 2 == 0)
    if (oddFilt.length < evenFilt.length){
        return `The outlier is ${oddFilt}`
    } else {
        return `The outlier is ${evenFilt}`
    }
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// Should return: 11 (the only odd number)

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
// Should return: 160 (the only even number)

