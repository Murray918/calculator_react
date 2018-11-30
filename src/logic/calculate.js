import math from 'mathjs'
//this is our logic for checking our inputs: 
//they must be a string and they must conform to the rules of Mathjs
//math js handles all of our answers and can do quite a bit more than what is specified

//this runs the evaluation
const evaluate = (str) => math.eval(str.toString())
//this makes sure we do not have a zero at the beginning of a string
const noZero = (str) => str.match(/^0+/) !== null ? str.replace(/^0+/, '') : str
//this combines our strings without any spaces
const combineNoSpace = (value, target) => value.concat('', target)
//this checks if the string contains 'error'
const containsError = (state) => convertState(state).includes('error') ? state.replace('error', '') : convertState(state)
//this converts our state if it is a number instead of a string
const convertState = (state) => (typeof state !== 'str') ? state.toString() : state
//this handles our positive/negative button
const flipNegPos = (num) => parseInt(num) > 0 ? '-' + num : num
//this grabs the last digits of the string if we need to make them pos/neg
const getLastDigits = (str) => str.slice(str.match(/[\d|.]+$/g).join('').toString().length * -1 + str.length) 
//this puts back what has been extracted from that string
const putLastDigit = (state) => state.replace(getLastDigits(state), flipNegPos(getLastDigits(state)))
//this makes sure the user does not click the equal sign when they have not finished typing an actual math equation
const containsMath = (str) => isNaN(str[str.length -1]) === false

//this handles all of our logic and returns it
const calculate = (state, target) => {
	let total = containsError(state)
	
	switch (target) {
		case 'C':
			return '0'
		case '=':
			 return containsMath(total) ? evaluate(total) : 'error'
		case '.':
			return combineNoSpace(total, target)
		case '+/-':
			return putLastDigit(state)
		default:
			return noZero(combineNoSpace(total, target))
	}
}
export default calculate