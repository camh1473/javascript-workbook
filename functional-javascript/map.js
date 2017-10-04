

    function doubleAll(numbers) {
      // SOLUTION GOES HERE
      var result = [];
      numbers.map(function double(num){
      	 result.push(num * 2);
      });
      return result
    }
    
    module.exports = doubleAll


// function doubleAll(numbers){
// return numbers.map(function double(num){
// 	return num * 2
// })
// }
// module.exports = doubleAll
