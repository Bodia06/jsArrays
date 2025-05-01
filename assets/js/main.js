//?Створити числовий масив та проініціалізувати його (*випадковими числами).
const numbers = []
const NUMBERS_COUNT = 10
for (let i = 0; i < NUMBERS_COUNT; i++) {
	numbers.push(Math.floor(Math.random() * 100))
}
console.log(numbers)
//?Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
numbers.pop()
numbers.shift()
numbers.push(100)
numbers.unshift(9)
console.log(numbers)
//?Вивести розмір масиву
console.log(numbers.length)
//?Зробити копію масиву
const copyNumbers1 = [...numbers]
console.log(copyNumbers1 === numbers)
console.log(copyNumbers1)

const copyNumbers2 = Array.from(numbers)
console.log(copyNumbers2 === numbers)
console.log(copyNumbers2)

const copyNumbers3 = numbers.slice()
console.log(copyNumbers3 === numbers)
console.log(copyNumbers3)

//*Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли
//?Вивести елементи з парними індексами
for (let i = 1; i < numbers.length; i += 2) {
	console.log(numbers[i])
}
//?Знайти добуток елементів масиву
let product = 1
for (let item of numbers) {
	product *= item
}
console.log(product)
//?Задано масив з описом телефонів з полями id, brand, model, color, price, RAM
const phones = [
	{
		id: 1,
		brand: 'Samsung',
		model: 'Galaxy A12',
		color: 'Black',
		price: 199,
		RAM: '4GB',
	},
	{
		id: 2,
		brand: 'Xiaomi',
		model: 'Redmi Note 10',
		color: 'Blue',
		price: 249,
		RAM: '6GB',
	},
	{
		id: 3,
		brand: 'OnePlus',
		model: 'Nord CE 2',
		color: 'Gray',
		price: 399,
		RAM: '8GB',
	},
	{
		id: 4,
		brand: 'Apple',
		model: 'iPhone 14 Pro',
		color: 'Purple',
		price: 1099,
		RAM: '12GB',
	},
]
//?Сформувати розмітку для карток
const body = document.body
const container = document.createElement('div')
container.classList.add('container')
for (let phone of phones) {
	const card = document.createElement('div')
	card.classList.add('card-phone')

	const infoPhone = document.createElement('div')
	infoPhone.classList.add('info-phone')

	const brandPhone = document.createElement('h2')
	brandPhone.classList.add('brand-phone')
	brandPhone.textContent = `Brand: ${phone.brand}`

	const phoneId = document.createElement('h2')
	phoneId.classList.add('id-phone')
	phoneId.textContent = `ID: ${phone.id}`

	infoPhone.append(brandPhone, phoneId)

	const modelPhone = document.createElement('h2')
	modelPhone.classList.add('model-phone')
	modelPhone.textContent = `Model: ${phone.model}`

	const colorPhone = document.createElement('h3')
	colorPhone.classList.add('color-phone')
	colorPhone.textContent = `Color: ${phone.color}`

	const ramPhone = document.createElement('h4')
	ramPhone.classList.add('ram-phone')
	ramPhone.textContent = `RAM: ${phone.RAM}`

	const pricePhone = document.createElement('p')
	pricePhone.classList.add('price-phone')
	pricePhone.textContent = `Price: $${phone.price}`

	card.append(infoPhone)
	card.append(modelPhone)
	card.append(colorPhone)
	card.append(ramPhone)
	card.append(pricePhone)
	container.append(card)
}
body.append(container)

//?Знайти середню ціну телефонів
const totalPrcie = phones.reduce((acc, phone) => acc + phone.price, 0)
const averagePrice = totalPrcie / phones.length
console.log(averagePrice)

//?Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ
const ramCounts = []
const ramValues = ['4GB', '6GB', '8GB', '12GB']
for (let i = 0; i < ramValues.length; i++) {
	ramCounts.push(0)
}
for (let phone of phones) {
	const index = ramValues.indexOf(phone.RAM)
	if (index !== -1) {
		ramCounts[index]++
	}
}
console.log(ramCounts)

//*Методи перебору масивів (forEach, filter, map, findIndex, *some, *every)
//?Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10) filter
const arr = [-1, 5, 0, 9, -10]
const newArr = arr.filter((item) => item != 0)
console.log(newArr)

//?Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3) map
const arr2 = [99, 5, 0, 9, 30]
const newArr2 = arr2.map((item) => item / 100)
console.log(newArr2)

//?Вивести елементи масиву, зведені у куб forEach
const arr3 = [1, 2, 3, 4, 5]
arr3.forEach((item, index, array) => {
	array[index] = item ** 3
})
console.log(arr3)

//?Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує findIndex
const arr4 = [10, 20, 30, 40, 50]
const index = arr4.findIndex((item) => item ** 2 === 100)
if (index !== -1) {
	arr4.splice(index, 1)
} else {
	console.log('Element not found')
}
console.log(arr4)

//?Перевірити, чи всі елементи масиву є парними числами (* або простими числами) every
const arr5 = [2, 4, 6, 8, 10]
const isEven = arr5.every((item) => item % 2 === 0)
console.log(isEven)

//?Перевірити, чи є у масиві бодай один від'ємний елемент some
const arr6 = [1, 2, 3, 4, -5]
const isNagativeElement = arr6.some((item) => item < 0)
console.log(isNagativeElement)
