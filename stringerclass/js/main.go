package main

//go:generate gopherjs build --minify

import (
	"example.com/stringer"
	"github.com/gopherjs/gopherjs/js"
	"github.com/miratronix/jopher"
)

func main() {
	js.Module.Get("exports").Set("newStringer", newStringer)
}

type JsStringer struct {
	*js.Object
	stringer   *stringer.MyStringer
	FlipValue  func(...interface{}) *js.Object `js:"flipValue"`
	CrazyCamel func(...interface{}) *js.Object `js:"crazyCamel"`
}

func newStringer(s string) *js.Object {
	obj := JsStringer{Object: js.Global.Get("Object").New()}
	obj.stringer, _ = stringer.NewMyStringer(s)

	// Add Functions
	obj.FlipValue = jopher.Promisify(obj.flipValue)
	obj.CrazyCamel = jopher.Promisify(obj.crazyCamel)
	return obj.Object
}

func (o *JsStringer) flipValue() string {
	return o.stringer.FlipValue()
}

func (o *JsStringer) crazyCamel() string {
	return o.stringer.CrazyCamel()
}
