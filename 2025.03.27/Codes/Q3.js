function maxValue(num) {
    if (num < 10) 
		return -1; 

    const digits = num.toString().split('');
    const sortedDigits = digits.sort((a, b) => b - a);
    const max = parseInt(sortedDigits.join(''), 10);

    return max;
}


console.log(maxValue(215));
