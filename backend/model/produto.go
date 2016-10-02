package model

import ()

type Categoria struct {
	Nome       string `json:"nome"`
	Quantidade int32  `json:"qtd"`
}

type Produto struct {
	Nome      string  `json:"nome"`
	Url       string  `json:"imgUrl"`
	Preco     float32 `json:"preco"`
	Nota      int32   `json:"nota"`
	Descricao string  `json:"descricao"`
}
