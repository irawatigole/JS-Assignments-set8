// Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

// Input:
// The first line of input contains an integer T denoting the number of test cases. Each test case contains the number of elements in the array a[] as n and next line contains space separated n elements in the array a[].

// Output:
// Print an integer which is the required answer.

// Example:
// Input:
// 2
// 6
// 1 2 1 2 1 3
// 2
// 20 10

// Output:
// 2
// 10

// Explanation:
// Suppose, we have an array 1 2 1 2 1 3. The Sum of first three elements is 1 + 2 + 1 = 4 and sum of last three elements is 2 + 1 + 3 = 6
// So this is unbalanced, to make it balanced the minimum number we can add is 2 to any element in first half.

function balancedArray(a){
 
var leftArr = a.slice(0,a.length/2);
var rightArr = a.slice(a.length/2);
   
var sum = 0;
     for (var i=0; i<leftArr.length; i++){
        sum = sum + leftArr[i];
        var sum1=0;
        for (var j =0;j<rightArr.length; j++){
        sum1 = sum1 + rightArr[j];
        }
        }
        var num = Math.abs(sum1-sum);
    
    return num;
}
   

console.log(balancedArray([1,2,1,2,1,3]));
console.log(balancedArray([20,10]));
