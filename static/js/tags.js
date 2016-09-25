include()

function include() {
	var elements = document.getElementsByTagName('include')
	for (let element of elements) {
		let src = element.getAttribute('src')
		ajax.get(src, {include: element}, function(result){
			this.include.innerHTML = result
			this.include.removeAttribute('src')
			config()
			if($(result).find('include').length != 0) include()
		})
	}
}

function config() {
	$('.carousel').carousel()
}