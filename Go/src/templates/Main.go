package main

import (
	"log"
	"os"
	"text/template"
)

func main() {
	tpl, err := template.ParseFiles("index.html")
	if err != nil {
		log.Fatalln(err)
	}

	tpl.ExecuteTemplate(os.Stdout, "index.html", "Rahul")
}
