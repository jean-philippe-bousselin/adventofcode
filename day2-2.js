


const intcodeString = '1,' + process.argv[2] + ',3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,13,23,1,23,10,27,1,13,27,31,2,31,10,35,1,35,9,39,1,39,13,43,1,13,43,47,1,47,13,51,1,13,51,55,1,5,55,59,2,10,59,63,1,9,63,67,1,6,67,71,2,71,13,75,2,75,13,79,1,79,9,83,2,83,10,87,1,9,87,91,1,6,91,95,1,95,10,99,1,99,13,103,1,13,103,107,2,13,107,111,1,111,9,115,2,115,10,119,1,119,5,123,1,123,2,127,1,127,5,0,99,2,14,0,0'

function opcodeExecutor(opcode) {
	switch(opcode) {
	  case 1: return (a, b) => a + b
	    break;
	  case 2: return (a, b) => a * b
	    break;
	  default: throw new Error('unknown opcode : ' + opcode)
	}
}

const intcodeArray = intcodeString.split(',').map(v => parseInt(v));

for (let i = 0; i < intcodeArray.length - 1; i++) {
	
	const opcode = intcodeArray[i]

	if(opcode == 99) {
		break;
	}

	const a = intcodeArray[intcodeArray[i + 1]]
	const b = intcodeArray[intcodeArray[i + 2]]
	const position = intcodeArray[i + 3]

	intcodeArray[position] = opcodeExecutor(opcode)(a, b)

	i = i + 3

}

console.log(intcodeArray[0])

// 100 * noun + verb
// 100 * 12 + 2 = 1202
// 