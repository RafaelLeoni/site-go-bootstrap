package routes

import (
	"net/http"

	"site/backend/controller"
)

func InitRoutes() {

	//Inicia controllers
	init := controller.NewMainController()
	home := controller.NewHomeController()
	produto := controller.NewProdutoController()

	//Define as rotas
	http.HandleFunc("/", init.Init)

	http.HandleFunc("/banca/home/items", home.BuscarItems)
	http.HandleFunc("/banca/home/imagens", home.BuscarImagens)

	http.HandleFunc("/banca/produtos/categorias", produto.BuscarCategorias)
	http.HandleFunc("/banca/produtos/produtos", produto.BuscarProdutos)

	http.HandleFunc("/banca/produto/detalhe/:id", produto.BuscarDetalheProduto)

}
