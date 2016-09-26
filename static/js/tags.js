include()

function config() {
	$('.carousel').carousel()
}

function include() {
	let elements = document.getElementsByTagName('include')
	
	for (let element of elements) {

		let src = element.getAttribute('src')
		element.removeAttribute('src')

		ajax.get(src, element, function(result) {
			element.innerHTML = result
			config()
			if($(result).find('include').length != 0) include()
		})
	}
}