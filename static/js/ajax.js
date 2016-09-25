var ajax = new Ajax()

function Ajax() {}

Ajax.prototype.post = function(url, data, context, callback) {
	$.ajax({
		contentType : 'application/json;charset=utf-8',
		data				: data,
		type 				: 'POST',
		url					: url,
		context			: context,
		success			: callback,
		error				: error
	})
}

Ajax.prototype.get = function(url, context, callback) {
	$.ajax({
		type 		: 'GET',
		url			: url,
		context	: context,
		success	: callback,
		error		: error
	})
}

function error(xhr,status,error) {
	console.log(status + '-->' + error)
}