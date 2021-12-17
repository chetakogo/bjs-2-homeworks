function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]) 


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((positive) => positive > 0).filter((divByTen) => divByTen % 3 === 0).map((multByThree) => multByThree * 10)

  return resultArr; // array
}
