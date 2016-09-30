package controller

import (
	"encoding/json"
	"net/http"

	"site/backend/model"
)

type ImagemController struct {
}

func NewImagemController() *ImagemController {
	return &ImagemController{}
}

func (imgC *ImagemController) BuscarImagens(w http.ResponseWriter, r *http.Request) {

	imagem1 := model.Imagem{"public/fonts/image/livros.png", "Livros", "Encontre seu livro aqui"}
	imagem2 := model.Imagem{"public/fonts/image/revistas.png", "Revistas", "Encontre sua revista aqui"}
	imagem3 := model.Imagem{"public/fonts/image/quadrinhos.png", "Quadrinhos", "Encontre seu quadrinho aqui"}
	imagem4 := model.Imagem{"public/fonts/image/albuns.png", "Albuns e Figurinhas", "Encontre seu álbum aqui"}

	imagens := []model.Imagem{imagem1, imagem2, imagem3, imagem4}
	json.NewEncoder(w).Encode(imagens)

}
