function submit() {
	var data = {
		username: $('#username').val(),
		password: $('#password').val()
	}
	ajax.post('/login', JSON.stringify(data), function(response) {
		$('#username').val('')
		$('#password').val('')
		$('#alert').removeAttr('hidden')
		$('#alert').html(response.username + '<br>' + response.password)
	})
}