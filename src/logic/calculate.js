import math from 'mathjs'


const evaluate = (string) => math.eval(string.toString())
// const combine = (value, target) => value.concat(' ', target)
const noZero = (string) => string.match(/^0+/) !== null ? string.replace(/^0+/, '') : string
const combineNoSpace = (value, target) => value.concat('', target)
const convertState = (state) => (typeof state !== 'string') ? state.toString() : state
const defined = (x) => typeof x !== 'undefined'

//@TODO: flip the sign of the last full number in the string 
// const makeNegOrPos = value => 

const calculate = (state, target) => {
	console.log('this is the state:', state)
	let total = convertState(state)

	if (!defined(target)){
		return 'error'
	}
	console.log('target of calculate : ', target)
	switch (target) {
		case 'C':
			return '0'
		case '=':
			return evaluate(total)
		case '.':
			return combineNoSpace(total, target)
		case '+/-':
			return 'this does not function yet'
		// case :
		// 	return combine(total, target)
		default:
			return noZero(combineNoSpace(total, target))
	}
}
export default calculate