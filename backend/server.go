package main

import (
	"net/http"
	"site/backend/routes"
)

func main() {

	//define pastas acessíveis estaticamente
	fs := http.FileServer(http.Dir("../frontend"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))

	routes.InitRoutes()

	http.ListenAndServe(":3000", nil)
}
