package model

import ()

type Produto struct {
	Nome      string  `json:"nome"`
	Url       string  `json:"imgUrl"`
	Preco     float32 `json:"preco"`
	Nota      int32   `json:"nota"`
	Descricao string  `json:"descricao"`
}
