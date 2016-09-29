package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
)

type Message struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var m Message

func main() {
	fs := http.FileServer(http.Dir("../frontend"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))

	http.HandleFunc("/", index)
	http.HandleFunc("/login", login)
	http.ListenAndServe(":3000", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("../frontend/html/index.html")
	defer check(err)
	t.Execute(w, nil)
}

func login(w http.ResponseWriter, r *http.Request) {
	err := json.NewDecoder(r.Body).Decode(&m)
	defer check(err)
	json.NewEncoder(w).Encode(m)
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
