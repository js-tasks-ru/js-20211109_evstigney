/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	const by = {
		'asc': (a, b) => new Intl.Collator(['ru', 'en'], { caseFirst: 'upper', sensitivity: 'variant', })
											.compare(a, b),
		'desc': (a, b) => new Intl.Collator(['ru', 'en'], { caseFirst: 'lower', sensitivity: 'variant', })
											.compare(a, b) * -1,
	}

	return arr.slice().sort(by[param]);
}
