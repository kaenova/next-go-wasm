package main

import (
	"fmt"
	"syscall/js"
)

var numPressed = 0

func main() {
	done := make(chan struct{}, 0)
	fmt.Println("Hello world from Golang")
	js.Global().Set("change", js.FuncOf(changeMe))
	<-done
}

func changeMe(this js.Value, args []js.Value) any {
	msg := fmt.Sprintf("You've press this %d times with function and variables called from WASM", numPressed)
	if numPressed < 1 {
		msg = "Congratulation you've used wasm function"
	}

	div := js.Global().Get("document").Call("getElementById", "changeme")
	div.Set("innerHTML", msg)

	numPressed += 1

	return nil
}
