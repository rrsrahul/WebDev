package main

import (
	"log"
	"os"
	"text/template"
)

var tpl *template.Template

func init() {

	tpl = template.Must(template.ParseGlob("templates/*"))

}
func main() {

	err := tpl.ExecuteTemplate(os.Stdout, "index.gohtml", "Rahul")
	if err != nil {
		log.Fatal(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "exec.gohtml", nil)
	if err != nil {
		log.Fatal(err)
		
	}

}
