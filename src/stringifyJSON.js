// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = '';  //set for empty obj
// is this null, undefined, boolean, number or string?
	if( obj === null ) {
		return 'null';
	} else if ( obj === undefined ) {
		return undefined;
  } else if( obj === true || obj === false || typeof(obj) === 'number' ){
		return obj.toString();
  } else if( typeof(obj) === 'string' ) {
		return '"' + obj + '"';
// if not is it an array?
  } else if( Array.isArray(obj) ) {
		result = []; //switch result to array 
		for(var i = 0; i < obj.length; i++) {
			result.push(stringifyJSON(obj[i]));
		}
		return '[' + result + ']';
// if not is it an object?
		} else if( typeof obj === 'object' ) {
		for( var key in obj ) {
			// if value is undefined or a function, SKIP
			if( stringifyJSON(obj[key]) !== undefined || null ) {
				result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
// CLEAN UP
		return '{' + result.slice(0, result.length - 1) + '}';
	}
};