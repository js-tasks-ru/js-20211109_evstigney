export default class ColumnChart {
	chartHeight = 50;

	constructor ( content = {} ) {
		this._content = content;
		this._elem = this._render();
	}

	get element () {
		return this._elem;
	}

	update (dataArr) {

		if (!dataArr || !dataArr.length) {
			this._elem.classList.add('column-chart_loading');
			return;
		}

		const maxValue = Math.max(...dataArr);
		const scale = this.chartHeight / maxValue;

		this._elem.querySelector('[data-element="body"]').innerHTML = dataArr
			.map((item) => `<div style="--value: ${Math.floor(item * scale)
				}" data-tooltip="${(item / maxValue * 100).toFixed(0)}%"></div>`)
			.join('');
	}

	remove () {
		this._elem.remove();
		this._elem = null;
	}

	destroy () {}

	_render () {
		let {
			label = '',
			link = '',
			value = 0,
			data, formatHeading } = this._content;
		const markup = `
			<div class="column-chart" style="--chart-height: ${this.chartHeight}">
				<div class="column-chart__title">
					${label}
					<a href="${link}" class="column-chart__link">View all</a>
				</div>
				<div class="column-chart__container">
					<div data-element="header" class="column-chart__header">${
						(formatHeading) ? formatHeading(value) : value
					}</div>
					<div data-element="body" class="column-chart__chart">
					</div>
				</div>
			</div>
			`.trim();
		this._elem = this._createElement(markup);
		this.update(data);

		return this._elem;
	}

	_createElement (html) {
		const elem = document.createElement('div');
		elem.innerHTML = html;
		return elem.firstElementChild;
	}

}
