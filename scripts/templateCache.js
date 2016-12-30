var templates = {};

function exists(templateName) {
	return templates[templateName];
}

function add(templateName, htmlTemplate) {
	templates[templateName] = htmlTemplate;
}

function get(templateName) {
	return templates[templateName];
}

var templateCache = {
	exists: exists,
	add: add,
	get: get,
};