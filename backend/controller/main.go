package controller

import (
	"html/template"
	"log"
	"net/http"
)

type MainController struct {
}

func NewMainController() *MainController {
	return &MainController{}
}

func (mainC *MainController) Init(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("../frontend/html/index.html")

	if err != nil {
		log.Fatal(err)
	}

	t.Execute(w, nil)
}
