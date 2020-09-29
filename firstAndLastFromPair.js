/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last 
element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

var cons = function(a, b) {
	var pair = function (f) {
		return f(a,b);
	}
	return pair;
};

var car = function(pair) {
	var f = function(a, b) {
		return a;
	}
	return pair(f);
};

var cdr = function(pair) {
	var f = function(a, b) {
		return b;
	}
	return pair(f);
}