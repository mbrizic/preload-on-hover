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

window.templateCache = {
	exists: exists,
	add: add,
	get: get,
};