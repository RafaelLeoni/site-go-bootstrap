package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
)

type Imagem struct {
	Url       string `json:"url"`
	Titulo    string `json:"titulo"`
	Descricao string `json:"descricao"`
}

func main() {
	fs := http.FileServer(http.Dir("../frontend"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))

	http.HandleFunc("/", index)
	http.HandleFunc("/banca/home/imagens", buscarImagens)
	http.ListenAndServe(":3000", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("../frontend/html/index.html")
	defer check(err)
	t.Execute(w, nil)
}

func buscarImagens(w http.ResponseWriter, r *http.Request) {
	// err := json.NewDecoder(r.Body).Decode(&m)
	// defer check(err)
	imagens := []Imagem{
		Imagem{"public/fonts/image/livros.png", "Livros", "Encontre seu livro aqui"},
		Imagem{"public/fonts/image/revistas.png", "Revistas", "Encontre sua revista aqui"},
		Imagem{"public/fonts/image/quadrinhos.png", "Quadrinhos", "Encontre seu quadrinho aqui"},
		Imagem{"public/fonts/image/albuns.png", "Albuns e Figurinhas", "Encontre seu álbum aqui"}}
	json.NewEncoder(w).Encode(imagens)
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
