const form = document.forms.calculator;
form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
	var initial = +form.money.value;
	if (!initial) return;
	var interest = form.interest.value * 0.01;
	if (!interest) return;
	var year = form.months.value / 12;
	if (!year) return;

	var result = Math.round(initial * (1 + interest * year));
	var height = (result / initial) * 100 + 'px';
	document.getElementById('height-after').style.height = height;
	document.getElementById('money-before').innerHTML = initial;
	document.getElementById('money-after').innerHTML = result;
}

calculate();
