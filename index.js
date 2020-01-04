const fs = require('fs');

const options = [
	'Clean code',
	'Modern JavaScript',
	'Classes in JavaScript',
	'TypeScript',
	'Asynchronous code',
	'Structuring components, and communicating between them',
	'Application architecture',
	'How to review code',
	'Semantic HTML',
	'Understanding CSS',
	'CSS Layouts',
	'Testing'
];

const responses = fs.readFileSync('responses.csv', 'utf-8');

const counts = options
								.map(option => ({[option]: (responses.match(new RegExp(option, 'g')) || []).length}))
								.sort((a,b) => Object.values(b)[0] - Object.values(a)[0]);

console.log(counts);
