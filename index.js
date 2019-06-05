function produceDrivingRange(blockRange) {
	return function(a, b) {
		const start = parseInt(a);
		const end = parseInt(b);
		const range = Math.abs(start - end); 
		const num = Math.abs(range - blockRange);

		if (range > blockRange) {
			return `${num} blocks out of range`;
		} else {
			return `within range by ${num}`;
		};
	}
}

function produceTipCalculator(tip) {
	return function(total) {
		return tip * total;
	}
}

function createDriver() {
	let driverId = 0;
	return class {
		constructor(name) {
			this.id = ++driverId;
			this.name = name;
		};
	};
}