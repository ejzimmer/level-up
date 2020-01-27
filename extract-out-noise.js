const match = file.name.match(/\.[a-z]+$/);
let extension;
if (match && match.length > 0) {
	extension = match[0];
} 
let valid;
if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'svg') {
	valid = true;
}
if (file.size > MAX_SIZE) {
	valid = false;
}
if (valid) {
	const formData = new FormData();
	formData.append('files[]', file);
	fetch(URL, {
		method: 'POST',
		body: formData,
	})
}