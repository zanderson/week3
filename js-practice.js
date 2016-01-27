// var a = {
// 	key: 10
// };
// a=5;

// var a = {key:{inner: 'test'}};
// var b = a.key
// a = null;

// var counterConstructor = function(){
// 	var start = 0;
// 	var counter = function(){
// 		return start ++;
// 	}
// 	return counter;
// }

// var myCounter = counterConstructor();
// var yourCounter = counterConstructor();

// console.log(myCounter);
// console.log(yourCounter);
// console.log(myCounter());
// console.log(yourCounter());
// console.log(myCounter());
// console.log(yourCounter());
// console.log(myCounter());
// console.log(yourCounter());


// var changeName = function(name){
// 	var newUser = {name : name}
// 	return newUser;
// }
// var user = changeName('zoeka');

// // Limitations: 
// var fullName = function(user){
// 	return user.first + " " ++ user.last;
// };
// event handlers 
// <button ng-click="doStuff()">button</button>
// 	$scope.doStuff = function(){

// 	}

// LOOP PRACTICE 2
// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// #1 rat, cat, butterfly, marmot

	// for (var i=0; i<4; i++) {
	// 	console.log(animals[i]);
	// }


// #2 rat, butterfly, ocelot
// 	for (var i=0; i<animals.length; i+=2) {
// 		console.log(animals[i]);
// 	}


// #3 
	// for (var i=animals.length-1; i>=0; i--){
	// 	console.log(animals[i]);
	// }


// #4 rat cat cat butterfly butterfly marmot marmot ocelot
// for (var i=0; i<=animals.length; i++) {
// 	if(i === 0){
// 		console.log(animals[i]);
// 	}
// 	else if(i === 4){
// 		console.log(animals[i]);
// 	}
// 	else{
//  		console.log(animals[i]);
//  		console.log(animals[i]);
// 	}
// 	};


// FUNCTION PRACTISE 2
// 1. Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

// var object = {
// 	name: "Luisa",
// 	age: 25,
// }
// var getName = function(person){
// 	return person.name ;
// }
// console.log(getName(object));

// 2. Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

// function totalLetters(sentence) { 
//   return sentence.split(" ").length;
// }
// console.log(totalLetters("javascript is awesome"));
// console.log(totalLetters("what happened to mt function"));

// var myArray = ["javascript is awesome"];
// var myArray2 = ["what", "happened", "to", "my", "function"];

// function totalLetters(myArray, myArray2) { 
//   return myArray.length;
// };
// console.log(totalLetters(myArray));
// console.log(totalLetters(myArray2));

// var string1 = "Javascript is awesome";
// var string2 = "What happened to my function";
// string1 = string1.split(" ").join("");
// string2 = string2.split(" ").join("");

// console.log(string1.length);
// console.log(string2.length);

// 3. Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

function keyValue (varos, allam){
	this.varos = varos;
	this.allam = allam;
};

var Denver = new keyValue("Denver");
	console.log(Denver.varos);

// 4. Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var array1 = ["a", "b", "c", "d", "e"];
// var array2 = ["jerry", "sarah", "sally"];

// var negativeIndex = function(array, index){
//   return array[array.length + index]
// }

// console.log(negativeIndex(array1, -2) );
// console.log(negativeIndex(array2, -1) );


// 5. Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify

// var removeM = function(word) {
//             var newthing = '';
//            for (var i = 0; i < word.length; i++) {
//                var c = word.charAt(i);

//                    if (c.toLowerCase() != "m") {
//                     newthing += c;
//                 }
//             }
//             return newthing;
//         };

//         console.log(removeM("family"));



// 6. Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.

// var printObject = function(letters) {
//   for(var key in letters) { 
//     console.log(key + " is " + letters[key]);
//   }
// }
// console.log(printObject({ a: 10, b: 20, c: 30 }));

// var printObject = function(object) {
//   for(var key in object) {
//     console.log(key + " is " + object[key]);
//   }
// }
// console.log(printObject({ firstName: 'pork', lastName: 'chops' }));

// 7. Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.

// var vowels = function(str) {
//   var letter = [];
//   for ( var i = 0; i < str.length-1; i++) {
//     if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u"){
//       letter.push(str.charAt(i));
//     } 
//   }
//   return letter;
// }
// console.log(vowels('zoe anderson'));
// console.log(vowels('I live in Longmont, CO.'));

//8. 
// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false

// var twins = function(str) {
//   if(str.length % 2 === 1) {
//     return false;
//   }
//   for (var i = 0; i<str.length; i+=2) {
//     if (str[i] !== str[i+1]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c'])); 
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
// console.log(twins(['a', 'a', 'b', 'z']));
// console.log(twins(['a', 'a', undefined]));

//9. 

// var or = function(value){
//   for(var i = 0; i<value.length; i++){
//   if(value[i] === !false){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// };

// console.log(or([false, false, true, false]));
// console.log(or([false, false, false]));
// console.log(or([]));

//10. Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).

// var unique = function(str){
//   var newArr = [];
//     for(var i = 0; i<str.length; i++) {
//       if(newArr.indexOf(str[i]) === -1) {
//           newArr.push(str[i]);
//       }
//     }
//     return newArr;
// };

// console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
// console.log(unique(['todd', 'avery', 'maria', 'avery']));

var students = [{
name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// print age
// for(var i=0; i<students.length; i++) {
//  console.log(students[i].age);
// }

// 2.
// print name and city
// Liz, Boulder
// Meghan, Denver
// Trent, Boulder
// Chelsea, Boulder
// for(var i = 0; i<students.length; i++) {
//   console.log(students[i].name + ", " + students[i].city);
// }

// 3.
// Liz is from Boulder
// Trent is from Boulder
// Chelsea is from Boulder

// for(var i=0; i<students.length; i++) {
//   if(students[i].city === "Boulder"){
//     console.log(students[i].name + " is from " + students[i].city);
//   }
// };


// 4.
// Meghan is older than 25
// Trent is older than 25

 // for (var i=0; i<students.length; i++) {
 //    if(students[i].age > 25 ){
 //      console.log(students[i].name + " is older than 25");
 //    }
 // };


//Problem Set 2
// #1 Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
// function firstReverse(str) {
//   var newStr = []
//   var strArray = str.split("")
//   for(var i = (strArray.length - 1); i >= 0; i--) {
//     newStr.push(strArray[i])
//   }
//   return newStr.join("")
// }
// console.log(firstReverse("Yoda is an awesome cat!"));


// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('eoz'));

//#2 

// var swapCase = function(str){
//   var newStr = [];
//   for (var i=0; i=str[1].length 
// }

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
console.log(capitalise("zoe anderson"));


