var cars = ["Ford", "Subaru", "Toyota", "BMW"];
console.log("Cars array Length: " + cars.length);

var moreCars = ['Caddy', 'Chevy', 'Jeep', 'Honda'];
var totalCars = cars.concat(moreCars);
console.log("Total Cars Array: " + totalCars);

console.log("Index of Honda: " + totalCars.indexOf("Honda"));
console.log("Last index of Ford: " + totalCars.lastIndexOf("Ford"));

var stringOfCars = totalCars.join(", ");
console.log("String of Cars: " + stringOfCars);

var completeCars = stringOfCars.split(",");
console.log("String spit back into array: " + completeCars);

var carsInReverse = totalCars.reverse();
console.log("Cars in reverse: " + carsInReverse);

var sorted = carsInReverse.sort();
console.log("Sorted array is " + sorted);

var removedCars = carsInReverse.slice(3,5);
console.log("Sliced these out: " + removedCars);

var replacedCars = carsInReverse.splice(1,2,"Ford","Honda");
console.log("Replaced these 2 with Ford and Honda: " + replacedCars);
console.log("Updated Array after replacing cars: " + carsInReverse)

carsInReverse.push("Caddy", "Chevy");
console.log("Added replaced Cars to end: "+carsInReverse);

carsInReverse.pop();
console.log("Popped last item from array: " + carsInReverse);

carsInReverse.shift();
console.log("Shifted 1st Item from array: " + carsInReverse);

carsInReverse.unshift("Tesla");
console.log("unshifted new car to front of Array: " + carsInReverse);

var numbers = [23, 45, 0, 2];
console.log("Numbers Array: " + numbers);
var newNumber = [];

numbers.forEach(function(item){
	newNumber.push(item+2)});
console.log("Added 2 to each number in array: " + newNumber);