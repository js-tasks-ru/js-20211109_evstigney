/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
	const pathArr = path.split('.');
	let result = null;

	return function (obj) {
		result = obj;

		for (let i = 0; i < pathArr.length; i++) {

			if (Object.keys(result).includes(pathArr[i])) {
				result = result[pathArr[i]];
			} else {
				result = undefined;
				break;
			}
		}

		return result;
	}
}
