// Fuel required to launch a given module is based on its mass. 
// Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

function getFuelRequired(mass) {
	return Math.floor(mass/3) - 2;
}

// tests
// console.log('mass 12 must be 2 fuel');
// getFuelRequired(12);
// console.log('mass 12 must be 2 fuel');
// getFuelRequired(14);
// console.log('mass 1969 must be 654 fuel');
// getFuelRequired(1969);
// console.log('mass 100756 must be 33583 fuel');
// getFuelRequired(100756)


const modulesMass = [
	66910,
	78957,
	58510,
	142350,
	105820,
	87317,
	100743,
	51390,
	92804,
	80752,
	70169,
	111892,
	104715,
	143166,
	126158,
	78712,
	139223,
	133863,
	85912,
	53883,
	64812,
	102254,
	52482,
	91855,
	117520,
	140253,
	76706,
	106693,
	57948,
	57578,
	115640,
	131273,
	115373,
	145219,
	100889,
	106447,
	72347,
	120250,
	56898,
	146689,
	138246,
	85068,
	55292,
	124814,
	136750,
	51820,
	70396,
	92806,
	86093,
	70467,
	122356,
	148530,
	85569,
	100492,
	87062,
	123225,
	73872,
	102104,
	91194,
	95077,
	88352,
	114906,
	141056,
	87220,
	106517,
	88867,
	95883,
	130158,
	76702,
	134241,
	50561,
	119258,
	61669,
	140396,
	145201,
	76914,
	102281,
	56618,
	145968,
	99542,
	116789,
	135633,
	114646,
	84253,
	50650,
	69127,
	95446,
	55357,
	81180,
	126940,
	133743,
	52261,
	117429,
	82291,
	110373,
	67626,
	58014,
	125342,
	129508,
	96332,
]

console.log('calculated total amount of fuel required...')

const amount = modulesMass.reduce((acc, mass) => {
	return acc + getFuelRequired(mass)
}, 0)

console.log('...', amount, '!')

