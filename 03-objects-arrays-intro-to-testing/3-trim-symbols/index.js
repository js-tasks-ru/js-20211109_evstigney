/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

	if (size !== 0 && !size) return string;

	let check = [];
	let stringArr = [...string];

	for (let i = 0; i < stringArr.length; i++) {

		if (check[0] !== stringArr[i]) 	check = [];

		if (check.length < size) check.push(stringArr[i]);
		else stringArr.splice(i--, 1);

	}

	return stringArr.join('');
}
