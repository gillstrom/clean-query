'use strict';
var test = require('ava');
var cleanQuery = require('./');

test(function (t) {
	t.is(cleanQuery({a: 'foo', b: undefined, c: '', d: null, e: 123}), 'a=foo&e=123');
	t.end();
});
