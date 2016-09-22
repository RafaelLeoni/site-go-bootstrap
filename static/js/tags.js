include()

function include() {
	var includes = document.getElementsByTagName('include')
	for (include of includes) {
		let src = include.getAttribute('src')
		$.get(src, function(data) {
		  include.innerHTML = data
	  });
	}
}