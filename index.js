/* eslint-disable prefer-arrow-callback */
'use strict';

module.exports = function (string) {
	return encodeURIComponent(string).replace(/[!'()*]/g, function (x) {
		return '%'.concat(x.charCodeAt(0).toString(16).toUpperCase());
	});
};
