'use strict';

var clamp        = require('clamp');
var padLeft      = require('pad-left');
var randomNatual = require('random-natural');


var SCHEMA = '{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}';
var MAX    = 16 * 16 * 16 * 16 - 1;

function genPart(options) {

  var min = parseInt(options.min, 10);
  var max = parseInt(options.max, 10);

  if (isNaN(min) || !isFinite(min)) {
    min = 0;
  }

  if (isNaN(max) || !isFinite(max)) {
    max = MAX;
  }

  min = clamp(min, 0, MAX);
  max = clamp(max, 0, MAX);

  return randomNatual({ min: min, max: max, insepcted: true }).toString(16);
}

function checkPart(part) {

  if (!part || part.match(/^\s*\{\s*[a-zA-Z0-9_-]*\s*\}\s*$/)) {
    return true;
  }

  part = parseInt(part, 16);

  return !isNaN(part) && isFinite(part) && part >= 0 && part <= MAX;
}

function checkParts(parts) {

  for (var i = 0, l = parts.length; i < l; i++) {
    if (!checkPart(parts[i])) {
      return false;
    }
  }

  return true;
}


module.exports = function (schema, options) {

  if (typeof schema === 'object') {
    options = schema;
    schema  = SCHEMA;
  }

  schema  = schema || SCHEMA;
  options = options || {};


  var parts = schema.split(':');

  if (!checkParts(parts)) {
    throw new TypeError('Invalided schema: ' + schema);
  }

  var ipv6 = schema.replace(/\s*\{\s*([a-zA-Z0-9_-]*)\s*\}\s*/g,
    function (input, token) {
      return genPart(options[token] || {});
    });

  var compressed = options.compressed === true;
  var padded     = !compressed && options.padded === true;

  if (padded) {
    ipv6 = ipv6.replace(/([0-9a-f]{1,4})\.?/g, function (input, part) {
      return part.length < 4 ? padLeft(part, 4, '0') : part;
    });
  }

  if (compressed) {
    while (ipv6.indexOf('::') === -1 && ipv6.indexOf('0:0') >= 0) {
      ipv6 = ipv6.replace(/:?(0(?:\:0)+):?/, '::');
    }
  }

  return ipv6;
};
