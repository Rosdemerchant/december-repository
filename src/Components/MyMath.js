

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function oddEven(a) {
//	% =	Modulus returns the remainder of a divison operation.
//  if you divide a number by two, a remainder of 0 indicates an even number,
//	while a remainder of 1 indicates an odd number.
	if(a%2 == 0) {
		return('even');
	} else {
		return('odd');
	}
}

//create a variable called sum that is = to the add function
//try using the sum function and the add function
var sum = add;
   // console.log('i am in variable sum', add(1, 2));


//create a dictionary object of the four functions

const dict = {
	'add': add,
	'subtract': subtract,
	'multiply': multiply,
	'oddEven': oddEven
};

function math2(f, a, b){
 return dict[f](a, b);
}
//create a function called math that will execute the correct function 
//and return the result based on the following parameters to the 
//function: string, number, number

function math(s, a, b) {
	if (s == 'add') {
		return add(a , b);
	} else if(s == 'subtract') {
		return subtract(a, b);
	} else if(s == 'multiply') {
		return multiply(a , b);

	}
}
const dict2 = {
	1:'one',
	2:'two',
	3:'three'
};

function lookup(xxxxxx) {
	console.log(dict2[xxxxxx])
	return dict2[xxxxxx];
};



export default {add, subtract, multiply, oddEven, sum, math, math2, lookup};
