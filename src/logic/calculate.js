import math from 'mathjs'


const evaluate = (string) => math.eval(string.toString())
const combine = (value, target) => value.concat(' ', target)
const combineNoSpace = (value, target) => value.concat('', target)
//@TODO: flip the sign of the last full number in the string 
// const makeNegOrPos = value => 

const calculate = (state, target) => {

	console.log(target)
	switch (target) {
		case 'C':
			return '0'
		case '=':
			return evaluate(state)
		case '.':
			return combineNoSpace(state, target)
		case '+/-' :
			return 'this does not function yet'
		default:
			let equal = combineNoSpace(state, target).replace(/^0+/, '')
			console.log('equal : ', equal)
			return equal
	}
}
export default calculate