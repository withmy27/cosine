package main

import (
	"fmt"
	"lmn/lmn"
	"os"
)

func main() {
	data, _ := os.ReadFile("sample01.lmn")
	s := string(data)
	val, err := lmn.ToJsonIndent(s)

	if err != nil {
		println(err.Error())
	} else {
		fmt.Printf("%v\n", val)
	}
}
