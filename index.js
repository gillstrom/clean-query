'use strict';
var stringify = require('querystring').stringify;
var condenseKeys = require('condense-keys');

module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	return stringify(condenseKeys(obj));
};
