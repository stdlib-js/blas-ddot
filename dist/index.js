"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=o(function(g,t){
var a=require('@stdlib/assert-is-float64vector-like/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),s=require('@stdlib/blas-base-ddot/dist').ndarray;function u(r,e){if(!a(r))throw new TypeError(n('0CHD8',r));if(!a(e))throw new TypeError(n('0CHD9',e));if(r.length!==e.length)throw new RangeError(n('0CH3S',r.length,e.length));return s(r.length,r.data,r.strides[0],r.offset,e.data,e.strides[0],e.offset)}t.exports=u
});var d=i();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
