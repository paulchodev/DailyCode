// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(arr){
    let result = []
    let temp = arr[0]
    for (let i=1;i<arr.length+1;i++){
      result.push(temp)
      temp = temp+ arr[i]
    }return result
  }