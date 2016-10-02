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
