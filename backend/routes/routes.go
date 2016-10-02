package routes

import (
	"net/http"

	"site/backend/controller"
)

func InitRoutes() {

	//Inicia controllers
	init := controller.NewMainController()
	home := controller.NewHomeController()

	//Define as rotas
	http.HandleFunc("/", init.Init)

	http.HandleFunc("/banca/home/items", home.BuscarItems)
	http.HandleFunc("/banca/home/imagens", home.BuscarImagens)

}
