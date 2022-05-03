package stringer

import (
	"testing"
)

func TestNewMyStringerFlip(t *testing.T) {

	tests := []struct {
		name    string
		args    string
		want    string
		wantErr bool
	}{
		{name: "standard", args: "abcdef", want: "fedcba", wantErr: false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			s, err := NewMyStringer(tt.args)
			if err != nil {
				t.Errorf("Failed to create string for %s", tt.args)
				return
			}

			fValue := s.FlipValue()
			if fValue != tt.want {
				t.Errorf("Failed [%s] output did not match want. Got (%s) Want (%s)", tt.name, fValue, tt.want)
				return
			}
		})
	}
}

func TestNewMyStringerCrazyCamel(t *testing.T) {

	tests := []struct {
		name    string
		args    string
		want    string
		wantErr bool
	}{
		{name: "standard", args: "abcdef", want: "AbCdEf", wantErr: false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			s, err := NewMyStringer(tt.args)
			if err != nil {
				t.Errorf("Failed to create string for %s", tt.args)
				return
			}

			fValue := s.CrazyCamel()
			if fValue != tt.want {
				t.Errorf("Failed [%s] output did not match want. Got (%s) Want (%s)", tt.name, fValue, tt.want)
				return
			}
		})
	}
}
