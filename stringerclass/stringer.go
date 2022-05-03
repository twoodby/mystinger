package stringer

import "unicode"

type MyStringer struct {
	MyValue string
}

func NewMyStringer(inValue string) (*MyStringer, error) {
	return &MyStringer{MyValue: inValue}, nil
}

func (s *MyStringer) FlipValue() string {
	runes := []rune(s.MyValue)

	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}

	return string(runes)
}

func (s *MyStringer) CrazyCamel() string {
	runes := []rune(s.MyValue)

	for i := 0; i < len(runes); i++ {
		if i%2 == 0 {
			runes[i] = unicode.ToUpper(runes[i])
		} else {
			runes[i] = unicode.ToLower(runes[i])
		}
	}

	return string(runes)
}
