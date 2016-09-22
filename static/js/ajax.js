var ajax = new Ajax();

function Ajax() {}

Ajax.prototype.post = function(url, data, callback) {
	$.ajax({
		type				: 'POST', 
		dataType		: 'json',
		contentType	: 'application/json; charset=utf-8',
		url					: url, 
		data				: data,
		success			: callback,
		error				: callbackError
	});
}

Ajax.prototype.get = function(url, callback) {
	$.ajax({
		type 		: 'GET',
		url  		: url,
		success : callback,
		error   : callbackError
	});
}

function callbackError(xhr, error, exception) {
	console.log(error);
}