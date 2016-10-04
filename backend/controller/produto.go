package controller

import (
	"encoding/json"
	"net/http"

	"site/backend/model"
)

type ProdutoController struct {
}

func NewProdutoController() *ProdutoController {
	return &ProdutoController{}
}

func (produtoC *ProdutoController) BuscarCategorias(w http.ResponseWriter, r *http.Request) {

	categoria1 := model.Categoria{"Livros", 56}
	categoria2 := model.Categoria{"Revistas", 1034}
	categoria3 := model.Categoria{"Quadrinhos", 548}
	categoria4 := model.Categoria{"Albuns", 47}
	categoria5 := model.Categoria{"Figurinhas", 738}

	categorias := []model.Categoria{categoria1, categoria2, categoria3, categoria4, categoria5}
	json.NewEncoder(w).Encode(categorias)

}

func (produtoC *ProdutoController) BuscarProdutos(w http.ResponseWriter, r *http.Request) {

	produto1 := model.Produto{"1º Produto", "public/fonts/image/320x150.png", 24.99, 3, "Este é o 1º produto"}
	produto2 := model.Produto{"2º Produto", "public/fonts/image/320x150.png", 54.00, 5, "Este é o 2º produto"}
	produto3 := model.Produto{"3º Produto", "public/fonts/image/320x150.png", 3.90, 4, "Este é o 3º produto"}
	produto4 := model.Produto{"4º Produto", "public/fonts/image/320x150.png", 17.80, 2, "Este é o 4º produto"}
	produto5 := model.Produto{"5º Produto", "public/fonts/image/320x150.png", 97.00, 0, "Este é o 5º produto"}

	produtos := []model.Produto{produto1, produto2, produto3, produto4, produto5}
	json.NewEncoder(w).Encode(produtos)

}

func (produtoC *ProdutoController) BuscarDetalheProduto(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	nome := ps.ByName("id")

	produto := model.Produto{nome, "public/fonts/image/320x150.png", 54.00, 5, "Descrição completa do produto"}
	json.NewEncoder(w).Encode(produto)

}
