package routes

import (
	"net/http"

	"site/backend/controller"
)

func InitRoutes() {

	//Inicia controllers
	init := controller.NewMainController()
	imagem := controller.NewImagemController()

	//define as rotas
	http.HandleFunc("/", init.Init)
	http.HandleFunc("/banca/home/imagens", imagem.BuscarImagens)

}
