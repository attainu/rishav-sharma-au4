// O(n) time & O(n) space
function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
  
    while (current < (arr1.length + arr2.length)) {
  
      let isArr1Depleted = index1 >= arr1.length;
      let isArr2Depleted = index2 >= arr2.length;
  
      if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
        merged[current] = arr1[index1];
        index1++;
      } else {
        merged[current] = arr2[index2];
        index2++;
      }
  
      current++;
    }
  
    return merged;
  }
  arr1=[1,2,4];
  arr2=[1,3,4];
 console.log(mergeTwo(arr1,arr2));


 