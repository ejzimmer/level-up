// myArray.forEach((item) => { ... })

const results = ['pass', 'pass', 'fail', 'pass'];

for (let i = 0; i < results.length; i++) {
	const result = results[i];
	console.log(result);
}

// myArray.map((item) => { ...return mapped item ... })


const animals = ['bear', 'cat', 'giraffe'];

function createDiv(animal) {
	const element = document.createElement('div');
	element.innerText = animal;
	return element;
}

const zoo = document.createElement('div');
for (let i = 0; i < animals.length; i++) {
	const animal = animals[i];
	const animalElement = createDiv(animal);
	zoo.append(animalElement);
}

const users = [
	{ givenName: 'Phillip', familyName: 'Fry', occupation: 'delivery boy', species: 'human' },
	{ givenName: 'Turunga', familyName: 'Leela', occupation: 'captain', species: 'human' },
	{ givenName: 'Bender', familyName: 'Rodriguez', occupation: 'bending robot', species: 'robot' }
];

const names = [];

for (let i = 0; i < users.length; i++) {
	const user = users[i];
	const name = `${user.givenName} ${user.familyName}`;
	names.push(name);
}


// myList.find((item, index, list) => ... return a boolean ...)

// myList.findIndex((item, index, list) => ... return a boolean ...)

// myList.filter((item, index, list) => ... return a boolean ...)

function findUserWithGivenName(users, givenName) {
	for (let i = 0; i < user.length; i++) {
		const user = users[i];
		if (user.givenName === givenName) {
			return user;
		}
	}
}

function removeUserByFamilyName(users, familyName) {
	let index;

	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.familyName === familyName) {
			index = i;
			break;
		}
	}

	users.splice(index, 1);
}

function captcha(users) {
	const notRobots = [];
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.species !== 'robot') {
			notRobots.push(user);
		}
	}

	return notRobots;
}

// myList.some((item, index, list) => ... return a boolean ...)

// myList.every((item, index, list) => ... return a boolean ...)

function crewContainsHuman(crew) {
	let hasHuman = false;

	for (let i = 0; i < crew.length; i++) {
		const crewMember = crew[i];
		if (crewMember.species === 'human') {
			hasHuman = true;
			break;
		}
	}

	return hasHuman;
}

function crewIsAllHuman(crew) {
	let allHuman = true;

	for (let i = 0; i < crew.length; i++) {
		const crewMember = crew[i];
		if (crewMember.species !== 'human') {
			allHuman = false;
			break;
		}
	}

	return allHuman;
}

// myList.includes(myItem)

// myString.includes(substring)

const user = {
	id: '4235',
	roles: ['USER', 'ADMIN', 'SUPER_ADMIN']
}
const isAdmin = user.roles.indexOf(Roles.ADMIN) > -1;

// re-implement crewHasHuman

'elephant'.includes('ant'); // true 
'elephant'.startsWith('ant'); // false
'elephant'.endsWith('ant'); // true


// myList.reduce((acc, curr) => { ... do stuff ... }, startingValue);

const numbers = [2, 7, 3];

function sum(numbers) {
	let total = 0;

	for (let i = 0; i < numbers.length; i++) {
		total += number[i];
	}

	return total;
}

const hospitals = [
	{ 
		name: 'Springfield General Hospital',
		shifts: ['Saturday, 10:00 - 21:00', 'Tuesday, 4:00 - 12:00']
	},
	{
		name: 'New Bedlam Rest Home for the Emotionally Interesting',
		shifts: ['Sunday, 11:00 - 21:00', 'Monday, 2:00 - 10:00']
	}
];

function getShifts(hospitals) {
	let shifts = [];

	for (let i = 0; i < hospitals.length; i++) {
		const hospital = hospitals[i];
		shifts = shifts.concat(hospital.shifts);
	}
}

// bad example

const selectedDeviceCodes = checkboxes.reduce((codes, checkbox, index) => {
	if (checkbox.selected) {
		codes.push(devices[index].code);
	}
	return codes;
}, []);


// find all the buttons on a page and check that they do something

// get all the properties of an object that are not functions

// get all the elements that currently appear on the page (!!element.offsetParent)

// get all hrefs of all the links on the page

// check if any of the links on the page point to a specific domain

// check if any credit card in a list has a valid type

// given a list of credit cards, find all the valid ones and create a list of radio buttons out of them

// deactivate a list of something

// rewrite
function checkValues(values) {
	return values.reduce((valid, value) => {
		return valid && value !== true;
	}, true)
}

// find the link with specific text

// turn a list of locations with addresses into a list of addresses with locations

// sidebar + main content that's respoonsive

// footer at the bottom of the page

// flip between column and row view

// cloud of tags 

// a list of images and links that are centre aligned

// action buttons that stack

// list of links with pipes between them

// a twitter post

// a list that overflows onto two rows, but centred

// labels & inputs: labels above, labels beside

// a two column grid that switches to one column on small screens

// a grid of thumbnails that are squares

// the layouts from this page https://resilientwebdesign.com/