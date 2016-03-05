package main

import (
	"fmt"
	"os"
	"github.com/jiazeng/info344-class-code/gohello/reverse"
)

func main() {
	fmt.Println(reverse.Reverse("hello world!"))
	fmt.Println(os.Args[0])
}