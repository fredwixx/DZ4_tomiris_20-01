/*Задача 1*/
function Click() {
	let input = document.getElementById('input');
	input.value = 'Пока';
}

/*Задача 2*/
let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

let date = new Date();
let month = date.getMonth();
console.log(months[month]);
