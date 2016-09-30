package controller

import (
	"encoding/json"
	"net/http"

	"site/backend/model"
)

type HomeController struct {
}

func NewHomeController() *HomeController {
	return &HomeController{}
}

func (homeC *HomeController) BuscarItems(w http.ResponseWriter, r *http.Request) {

	item1 := model.Imagem{"public/fonts/image/livros.png", "Livros", "Encontre seu livro aqui"}
	item2 := model.Imagem{"public/fonts/image/revistas.png", "Revistas", "Encontre sua revista aqui"}
	item3 := model.Imagem{"public/fonts/image/quadrinhos.png", "Quadrinhos", "Encontre seu quadrinho aqui"}
	item4 := model.Imagem{"public/fonts/image/albuns.png", "Albuns e Figurinhas", "Encontre seu álbum aqui"}

	items := []model.Imagem{item1, item2, item3, item4}
	json.NewEncoder(w).Encode(items)

}

func (homeC *HomeController) BuscarImagens(w http.ResponseWriter, r *http.Request) {

	imagem1 := model.Imagem{"public/fonts/image/logo.jpg", "", "Logo"}
	imagem2 := model.Imagem{"public/fonts/image/banca-carousel-2.jpg", "", "Imagem 2"}
	imagem3 := model.Imagem{"public/fonts/image/banca-carousel-3.jpg", "", "Imagem 3"}
	imagem4 := model.Imagem{"public/fonts/image/banca-carousel-4.jpg", "", "Imagem 4"}
	imagem5 := model.Imagem{"public/fonts/image/banca-carousel-5.jpg", "", "Imagem 5"}

	imagens := []model.Imagem{imagem1, imagem2, imagem3, imagem4, imagem5}
	json.NewEncoder(w).Encode(imagens)

}
