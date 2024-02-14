// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("path")):"function"==typeof define&&define.amd?define(["path"],r):(t="undefined"!=typeof globalThis?globalThis:t||self).ddot=r(t.require$$0)}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(t){return"number"==typeof t}function i(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+i(o):i(o)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(t){var r,e,i;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,i=parseInt(e,10),!isFinite(i)){if(!n(e))throw new Error("invalid integer. Value: "+e);i=0}return i<0&&("u"===t.specifier||10!==r)&&(i=4294967295+i+1),i<0?(e=(-i).toString(r),t.precision&&(e=o(e,t.precision,t.padRight)),e="-"+e):(e=i.toString(r),i||t.precision?t.precision&&(e=o(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===u.call(t.specifier)?u.call(e):a.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(t){return"string"==typeof t}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,_=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=y.call(e,m,"$1e"),e=y.call(e,_,"e"),e=y.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=y.call(e,h,"e+0$1"),e=y.call(e,g,"e-0$1"),t.alternate&&(e=y.call(e,d,"$1."),e=y.call(e,v,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===p.call(t.specifier)?p.call(e):s.call(e)}function O(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function S(t,r,e){var n=r-t.length;return n<0?t:t=e?t+O(n):O(n)+t}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function U(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function x(t){var r,e,n,i,a,u,l,s,p;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",l=1,s=0;s<t.length;s++)if(c(n=t[s]))u+=n;else{if(r=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function N(t){var r,e,n,i;for(e=[],i=0,n=T.exec(t);n;)(r=t.slice(i,T.lastIndex-n[0].length)).length&&e.push(r),e.push(I(n)),i=T.lastIndex,n=T.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function R(t){return"string"==typeof t}function F(t){var r,e;if(!R(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[N(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return x.apply(null,r)}var V,L=Object.prototype,B=L.toString,C=L.__defineGetter__,k=L.__defineSetter__,P=L.__lookupGetter__,M=L.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(t,r)||M.call(t,r)?(n=t.__proto__,t.__proto__=L,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(t,r,e.get),a&&k&&k.call(t,r,e.set),t};var D=V;function G(t,r,e){D(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function $(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Y&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(t,r){return null!=t&&q.call(t,r)}var X="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof X?X.toStringTag:"";var H=J()?function(t){var r,e,n;if(null==t)return W.call(t);e=t[Z],r=z(t,Z);try{t[Z]=void 0}catch(r){return W.call(t)}return n=W.call(t),r?t[Z]=e:delete t[Z],n}:function(t){return W.call(t)},K=Boolean,Q=Boolean.prototype.toString;var tt=J();function rt(t){return"object"==typeof t&&(t instanceof K||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===H(t)))}function et(t){return $(t)||rt(t)}function nt(){return new Function("return this;")()}G(et,"isPrimitive",$),G(et,"isObject",rt);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof global?global:null,ut="object"==typeof globalThis?globalThis:null;function ft(t){if(arguments.length){if(!$(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return nt()}if(ut)return ut;if(it)return it;if(ot)return ot;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var ct=ft();function lt(t,r,e){D(t,r,{configurable:!1,enumerable:!1,get:e})}var st={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}function yt(t,r){return r&&(2===t||3===t)}function ht(t,r){return r&&(1===t||3===t)}function gt(t,r,e){var n,i,o,a,u;for(n=t.length,i=e,o=e,u=0;u<n;u++){if(0===t[u])return[e,e];(a=r[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function dt(t){return t.re}function vt(t){return t.im}function bt(t){return"string"==typeof t}G(gt,"assign",(function(t,r,e,n){var i,o,a,u,f;for(i=t.length,o=e,a=e,f=0;f<i;f++){if(0===t[f])return n[0]=e,n[1]=e,n;(u=r[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var _t=Object.prototype.toString;var mt="function"==typeof Symbol?Symbol:void 0,wt="function"==typeof mt?mt.toStringTag:"";var Ot=J()?function(t){var r,e,n;if(null==t)return _t.call(t);e=t[wt],r=z(t,wt);try{t[wt]=void 0}catch(r){return _t.call(t)}return n=_t.call(t),r?t[wt]=e:delete t[wt],n}:function(t){return _t.call(t)},St=String.prototype.valueOf;var jt=J();function At(t){return"object"==typeof t&&(t instanceof String||(jt?function(t){try{return St.call(t),!0}catch(t){return!1}}(t):"[object String]"===Ot(t)))}function Et(t){return bt(t)||At(t)}G(Et,"isPrimitive",bt),G(Et,"isObject",At);var Ut=/[-\/\\^$*+?.()|[\]{}]/g;var xt=/./,Tt=ft(),It=Tt.document&&Tt.document.childNodes,Nt=Int8Array;var Rt=Object.prototype.toString;var Ft="function"==typeof Symbol?Symbol:void 0,Vt="function"==typeof Ft?Ft.toStringTag:"";var Lt=J()?function(t){var r,e,n;if(null==t)return Rt.call(t);e=t[Vt],r=z(t,Vt);try{t[Vt]=void 0}catch(r){return Rt.call(t)}return n=Rt.call(t),r?t[Vt]=e:delete t[Vt],n}:function(t){return Rt.call(t)};function Bt(){return/^\s*function\s*([^(]*)/i}var Ct=/^\s*function\s*([^(]*)/i;G(Bt,"REGEXP",Ct);var kt=Object.prototype.toString;var Pt="function"==typeof Symbol?Symbol:void 0,Mt="function"==typeof Pt?Pt.toStringTag:"";var Dt=J()?function(t){var r,e,n;if(null==t)return kt.call(t);e=t[Mt],r=z(t,Mt);try{t[Mt]=void 0}catch(r){return kt.call(t)}return n=kt.call(t),r?t[Mt]=e:delete t[Mt],n}:function(t){return kt.call(t)};var Gt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Dt(t)};function $t(t){return null!==t&&"object"==typeof t}function Yt(t){var r,e,n,i;if(("Object"===(e=Lt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ct.exec(n.toString()))return r[1]}return $t(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}G($t,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Gt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}($t));var Jt="function"==typeof xt||"object"==typeof Nt||"function"==typeof It?function(t){return Yt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Yt(t).toLowerCase():r};function Wt(t){return"function"===Jt(t)}var qt=Object.prototype.toString;var zt="function"==typeof Symbol?Symbol:void 0,Xt="function"==typeof zt?zt.toStringTag:"";var Zt=J()?function(t){var r,e,n;if(null==t)return qt.call(t);e=t[Xt],r=z(t,Xt);try{t[Xt]=void 0}catch(r){return qt.call(t)}return n=qt.call(t),r?t[Xt]=e:delete t[Xt],n}:function(t){return qt.call(t)},Ht=RegExp.prototype.exec;var Kt=J();function Qt(t){return"object"==typeof t&&(t instanceof RegExp||(Kt?function(t){try{return Ht.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===Zt(t)))}function tr(t,r,e){if(!bt(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));if(bt(r))r=new RegExp(function(t){var r,e;if(!bt(t))throw new TypeError(F("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Ut,"\\$&"):(r=(r=t.substring(1,e)).replace(Ut,"\\$&"),t=t[0]+r+t.substring(e))}(r),"g");else if(!Qt(r))throw new TypeError(F("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!bt(e)&&!Wt(e))throw new TypeError(F("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",e));return function(t,r,e){return t.replace(r,e)}(t,r,e)}var rr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var er=Object.prototype.toString;var nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"";var or=J()?function(t){var r,e,n;if(null==t)return er.call(t);e=t[ir],r=z(t,ir);try{t[ir]=void 0}catch(r){return er.call(t)}return n=er.call(t),r?t[ir]=e:delete t[ir],n}:function(t){return er.call(t)},ar="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null;var fr,cr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var t,r,e;if("function"!=typeof ur)return!1;try{r=new ur(r=[1,3.14,-3.14,256,257]),e=r,t=(ar&&e instanceof Uint8Array||"[object Uint8Array]"===or(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?cr:function(){throw new Error("not implemented")};var lr=fr,sr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,hr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var t,r,e;if("function"!=typeof pr)return!1;try{r=new pr(r=[1,3.14,-3.14,65536,65537]),e=r,t=(sr&&e instanceof Uint16Array||"[object Uint16Array]"===or(e))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?hr:function(){throw new Error("not implemented")};var gr,dr={uint16:yr,uint8:lr};(gr=new dr.uint16(1))[0]=4660;var vr=52===new dr.uint8(gr.buffer)[0],br=Object.prototype.toString;var _r="function"==typeof Symbol?Symbol:void 0,mr="function"==typeof _r?_r.toStringTag:"";var wr=J()?function(t){var r,e,n;if(null==t)return br.call(t);e=t[mr],r=z(t,mr);try{t[mr]=void 0}catch(r){return br.call(t)}return n=br.call(t),r?t[mr]=e:delete t[mr],n}:function(t){return br.call(t)},Or="function"==typeof ArrayBuffer;var Sr="function"==typeof Float64Array;var jr="function"==typeof Float64Array?Float64Array:null;var Ar,Er="function"==typeof Float64Array?Float64Array:void 0;Ar=function(){var t,r,e;if("function"!=typeof jr)return!1;try{r=new jr([1,3.14,-3.14,NaN]),e=r,t=(Sr&&e instanceof Float64Array||"[object Float64Array]"===wr(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Er:function(){throw new Error("not implemented")};var Ur=Ar,xr="function"==typeof ArrayBuffer?ArrayBuffer:null;var Tr,Ir="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Tr=function(){var t,r,e,n;if("function"!=typeof xr)return!1;try{e=new xr(16),n=e,(t=(Or&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===wr(n))&&"function"==typeof xr.isView)&&((r=new Ur(e))[0]=-3.14,r[1]=NaN,t=t&&xr.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?Ir:function(){throw new Error("not implemented")};var Nr=Tr,Rr=Object.prototype.toString;var Fr="function"==typeof Symbol?Symbol:void 0,Vr="function"==typeof Fr?Fr.toStringTag:"";var Lr=J()?function(t){var r,e,n;if(null==t)return Rr.call(t);e=t[Vr],r=z(t,Vr);try{t[Vr]=void 0}catch(r){return Rr.call(t)}return n=Rr.call(t),r?t[Vr]=e:delete t[Vr],n}:function(t){return Rr.call(t)},Br="function"==typeof DataView;var Cr="function"==typeof DataView?DataView:null;var kr,Pr="function"==typeof DataView?DataView:void 0;kr=function(){var t,r,e,n;if("function"!=typeof Cr)return!1;try{e=new Nr(24),r=new Cr(e,8),n=r,(t=(Br&&n instanceof DataView||"[object DataView]"===Lr(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?Pr:function(){throw new Error("not implemented")};var Mr=kr,Dr="function"==typeof BigInt?BigInt:void 0,Gr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function $r(){var t;return 0===arguments.length?Gr.all.slice():(t=Gr[arguments[0]])?t.slice():[]}function Yr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Jr(t,r,e){D(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Wr(t){return Object.keys(Object(t))}var qr=void 0!==Object.keys,zr=Object.prototype.toString;var Xr="function"==typeof Symbol?Symbol:void 0,Zr="function"==typeof Xr?Xr.toStringTag:"";var Hr,Kr=J()?function(t){var r,e,n;if(null==t)return zr.call(t);e=t[Zr],r=z(t,Zr);try{t[Zr]=void 0}catch(r){return zr.call(t)}return n=zr.call(t),r?t[Zr]=e:delete t[Zr],n}:function(t){return zr.call(t)};function Qr(t){return"[object Arguments]"===Kr(t)}Hr=function(){return Qr(arguments)}();var te=Hr;function re(t){return"number"==typeof t}var ee=Object.prototype.toString;var ne="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof ne?ne.toStringTag:"";var oe=J()?function(t){var r,e,n;if(null==t)return ee.call(t);e=t[ie],r=z(t,ie);try{t[ie]=void 0}catch(r){return ee.call(t)}return n=ee.call(t),r?t[ie]=e:delete t[ie],n}:function(t){return ee.call(t)},ae=Number,ue=ae.prototype.toString;var fe=J();function ce(t){return"object"==typeof t&&(t instanceof ae||(fe?function(t){try{return ue.call(t),!0}catch(t){return!1}}(t):"[object Number]"===oe(t)))}function le(t){return re(t)||ce(t)}function se(t){return t!=t}function pe(t){return re(t)&&se(t)}function ye(t){return ce(t)&&se(t.valueOf())}function he(t){return pe(t)||ye(t)}G(le,"isPrimitive",re),G(le,"isObject",ce),G(he,"isPrimitive",pe),G(he,"isObject",ye);var ge=Number.POSITIVE_INFINITY,de=ae.NEGATIVE_INFINITY,ve=Math.floor;function be(t){return ve(t)===t}function _e(t){return t<ge&&t>de&&be(t)}function me(t){return re(t)&&_e(t)}function we(t){return ce(t)&&_e(t.valueOf())}function Oe(t){return me(t)||we(t)}G(Oe,"isPrimitive",me),G(Oe,"isObject",we);var Se=Object.prototype.propertyIsEnumerable;var je=!Se.call("beep","0");function Ae(t,r){var e;return null!=t&&(!(e=Se.call(t,r))&&je&&Et(t)?!pe(r=+r)&&me(r)&&r>=0&&r<t.length:e)}var Ee=te?Qr:function(t){return null!==t&&"object"==typeof t&&!Gt(t)&&"number"==typeof t.length&&be(t.length)&&t.length>=0&&t.length<=4294967295&&z(t,"callee")&&!Ae(t,"callee")},Ue=Array.prototype.slice;function xe(t){return null!==t&&"object"==typeof t}G(xe,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Gt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(xe));var Te=Ae((function(){}),"prototype"),Ie=!Ae({toString:null},"toString");function Ne(t){return t!=t}function Re(t){return re(t)&&Ne(t)}function Fe(t){return ce(t)&&Ne(t.valueOf())}function Ve(t){return Re(t)||Fe(t)}G(Ve,"isPrimitive",Re),G(Ve,"isObject",Fe);function Le(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&be(t.length)&&t.length>=0&&t.length<=9007199254740991}function Be(t,r,e){var n,i;if(!Le(t)&&!bt(t))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!me(e))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Ve(r)){for(;i<n;i++)if(Ve(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1}function Ce(t){return t.constructor&&t.constructor.prototype===t}var ke=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pe="undefined"==typeof window?void 0:window;var Me=function(){var t;if("undefined"===Jt(Pe))return!1;for(t in Pe)try{-1===Be(ke,t)&&z(Pe,t)&&null!==Pe[t]&&"object"===Jt(Pe[t])&&Ce(Pe[t])}catch(t){return!0}return!1}(),De="undefined"!=typeof window;var Ge,$e=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ge=qr?function(){return 2!==(Wr(arguments)||"").length}(1,2)?function(t){return Ee(t)?Wr(Ue.call(t)):Wr(t)}:Wr:function(t){var r,e,n,i,o,a,u;if(i=[],Ee(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!z(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!xe(t))return i;e=Te&&n}for(o in t)e&&"prototype"===o||!z(t,o)||i.push(String(o));if(Ie)for(r=function(t){if(!1===De&&!Me)return Ce(t);try{return Ce(t)}catch(t){return!1}}(t),u=0;u<$e.length;u++)a=$e[u],r&&"constructor"===a||!z(t,a)||i.push(String(a));return i};var Ye=Ge;G($r,"enum",Yr),function(t,r){var e,n,i;for(e=Ye(r),i=0;i<e.length;i++)Jr(t,n=e[i],r[n])}($r,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Je=["row-major","column-major"];function We(){return{"row-major":1,"column-major":2}}G((function(){return Je.slice()}),"enum",We);var qe=["throw","normalize","clamp","wrap"];function ze(){return{throw:1,clamp:2,wrap:3,normalize:4}}G((function(){return qe.slice()}),"enum",ze);var Xe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Ze={"row-major":1,"column-major":2},He={throw:1,clamp:2,wrap:3,normalize:4};var Ke="function"==typeof Uint8Array;var Qe="function"==typeof Uint8Array?Uint8Array:null;var tn,rn="function"==typeof Uint8Array?Uint8Array:void 0;tn=function(){var t,r,e;if("function"!=typeof Qe)return!1;try{r=new Qe(r=[1,3.14,-3.14,256,257]),e=r,t=(Ke&&e instanceof Uint8Array||"[object Uint8Array]"===Kr(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?rn:function(){throw new Error("not implemented")};var en=tn,nn=Object.prototype.toString;var on="function"==typeof Symbol?Symbol:void 0,an="function"==typeof on?on.toStringTag:"";var un=J()?function(t){var r,e,n;if(null==t)return nn.call(t);e=t[an],r=z(t,an);try{t[an]=void 0}catch(r){return nn.call(t)}return n=nn.call(t),r?t[an]=e:delete t[an],n}:function(t){return nn.call(t)},fn="function"==typeof Uint8Array;var cn="function"==typeof Uint8Array?Uint8Array:null;var ln,sn="function"==typeof Uint8Array?Uint8Array:void 0;ln=function(){var t,r,e;if("function"!=typeof cn)return!1;try{r=new cn(r=[1,3.14,-3.14,256,257]),e=r,t=(fn&&e instanceof Uint8Array||"[object Uint8Array]"===un(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?sn:function(){throw new Error("not implemented")};var pn=ln;var yn=new pn(8),hn=new Mr(yn.buffer);function gn(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<yn.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=ve(t/4294967296),vr?(hn.setUint32(0,o,vr),hn.setUint32(4,i,vr)):(hn.setUint32(0,i,vr),hn.setUint32(4,o,vr)),a=0;a<yn.length;a++)r[n]=yn[a],n+=e;return r}G((function(t){var r,e,n,i;return r=new pn(8),0===t||(i=(4294967295&t)>>>0,n=ve(t/4294967296),e=new Mr(r.buffer),vr?(e.setUint32(0,i,vr),e.setUint32(4,n,vr)):(e.setUint32(0,n,vr),e.setUint32(4,i,vr))),r}),"assign",gn);var dn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},vn={"row-major":1,"column-major":2},bn={throw:1,clamp:2,wrap:3,normalize:4};function _n(t,r,e,n,i,o){var a,u,f,c,l;if(!(this instanceof _n))return new _n(t,r,e,n,i,o);for(c=1,l=0;l<e.length;l++)c*=e[l];return u=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*c:null,this._byteLength=u,this._bytesPerElement=function(t){return st[t]||null}(t),this._buffer=r,this._dtype=t,this._length=c,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=K(r.get&&r.set),this._iterationOrder=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0}(n),a=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=gt(r,e,n))[1]-o[0]+1}(c,e,n,i,this._iterationOrder),f=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=pt(t[0]),a=1;a<e;a++){if(o=pt(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:ht(f,a),COLUMN_MAJOR_CONTIGUOUS:yt(f,a),READONLY:!1},this.__meta_dataview__=null,this}function mn(t){return function(t){return t instanceof _n||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}function wn(t){return mn(t)&&"float64"===t.dtype}G(_n,"name","ndarray"),lt(_n.prototype,"byteLength",(function(){return this._byteLength})),lt(_n.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),lt(_n.prototype,"data",(function(){return this._buffer})),lt(_n.prototype,"dtype",(function(){return this._dtype})),lt(_n.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),lt(_n.prototype,"length",(function(){return this._length})),lt(_n.prototype,"ndims",(function(){return this._ndims})),lt(_n.prototype,"offset",(function(){return this._offset})),lt(_n.prototype,"order",(function(){return this._order})),lt(_n.prototype,"shape",(function(){return this._shape.slice()})),lt(_n.prototype,"strides",(function(){return this._strides.slice()})),G(_n.prototype,"get",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]})),G(_n.prototype,"iget",(function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),G(_n.prototype,"set",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this})),G(_n.prototype,"iset",(function(t,r){var e,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this})),G(_n.prototype,"toString",(function(){var t,r,e,n,i,o;if(r=this._shape.length,e="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+vt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+vt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+vt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(e+=tr(rr[this.dtype],"{{data}}",t),e+=", ",e+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",e+=", ",e+="[ ",0===r)e+="0";else for(o=0;o<r;o++)this._strides[o]<0?e+=-this._strides[o]:e+=this._strides[o],o<r-1&&(e+=", ");return e+=" ]",e+=", ",e+="0",e+=", ",e+="'"+this._order+"'",e+=" )"})),G(_n.prototype,"toJSON",(function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(dt(e),vt(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t})),G(_n.prototype,"__array_meta_dataview__","function"==typeof ct.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ct.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,r,e,n,i,o,a,u,f,c,l,s,p,y;if(f=this._mode||"throw",a=this._submode||[f],e=33+16*(s=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===e)return u;for(u=new Mr(new Nr(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,vr?1:0),c+=1,u.setInt16(c,Xe[n],vr),c+=2,u.setBigInt64(c,Dr(s),vr),l=8*s,c+=8,y=0;y<s;y++)u.setBigInt64(c,Dr(i[y]),vr),u.setBigInt64(c+l,Dr(o[y]*t),vr),c+=8;for(c+=l,u.setBigInt64(c,Dr(this._offset*t),vr),c+=8,u.setInt8(c,Ze[this._order]),c+=1,u.setInt8(c,He[f]),c+=1,u.setBigInt64(c,Dr(p),vr),c+=8,y=0;y<p;y++)u.setInt8(c,He[a[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,vr),this.__meta_dataview__=u,u}:function(){var t,r,e,n,i,o,a,u,f,c,l,s,p,y,h;if(c=this._mode||"throw",u=this._submode||[c],n=33+16*(p=this._ndims)+(y=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new Mr(new Nr(n)),r=new en(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,l=0,f.setInt8(l,vr?1:0),l+=1,f.setInt16(l,dn[i],vr),gn(p,r,1,l+=2),s=8*p,l+=8,h=0;h<p;h++)gn(o[h],r,1,l),gn(a[h]*t,r,1,l+s),l+=8;for(l+=s,gn(this._offset*t,r,1,l),l+=8,f.setInt8(l,vn[this._order]),l+=1,f.setInt8(l,bn[c]),gn(y,r,1,l+=1),l+=8,h=0;h<y;h++)f.setInt8(l,bn[u[h]]),l+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(l,e,vr),this.__meta_dataview__=f,f});var On=Object,Sn=Object.getPrototypeOf,jn=Object.prototype.toString;var An="function"==typeof Symbol?Symbol:void 0,En="function"==typeof An?An.toStringTag:"";var Un,xn=J()?function(t){var r,e,n;if(null==t)return jn.call(t);e=t[En],r=z(t,En);try{t[En]=void 0}catch(r){return jn.call(t)}return n=jn.call(t),r?t[En]=e:delete t[En],n}:function(t){return jn.call(t)};Un=Wt(Object.getPrototypeOf)?Sn:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===xn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Tn=Un;function In(t){return null==t?null:(t=On(t),Tn(t))}var Nn=Object.prototype.toString;var Rn="function"==typeof Symbol?Symbol:void 0,Fn="function"==typeof Rn?Rn.toStringTag:"";var Vn=J()?function(t){var r,e,n;if(null==t)return Nn.call(t);e=t[Fn],r=z(t,Fn);try{t[Fn]=void 0}catch(r){return Nn.call(t)}return n=Nn.call(t),r?t[Fn]=e:delete t[Fn],n}:function(t){return Nn.call(t)};function Ln(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===Vn(t))return!0;t=In(t)}return!1}function Bn(t,r,e,n,i){var o,a,u,f,c;if(o=0,t<=0)return o;if(1===e&&1===i){if((f=t%5)>0)for(c=0;c<f;c++)o+=r[c]*n[c];if(t<5)return o;for(c=f;c<t;c+=5)o+=r[c]*n[c]+r[c+1]*n[c+1]+r[c+2]*n[c+2]+r[c+3]*n[c+3]+r[c+4]*n[c+4];return o}for(a=e<0?(1-t)*e:0,u=i<0?(1-t)*i:0,c=0;c<t;c++)o+=r[a]*n[u],a+=e,u+=i;return o}G(Bn,"ndarray",(function(t,r,e,n,i,o,a){var u,f,c,l,s;if(u=0,t<=0)return u;if(f=n,c=a,1===e&&1===o){if((l=t%5)>0)for(s=0;s<l;s++)u+=r[f]*i[c],f+=1,c+=1;if(t<5)return u;for(s=l;s<t;s+=5)u+=r[f]*i[c]+r[f+1]*i[c+1]+r[f+2]*i[c+2]+r[f+3]*i[c+3]+r[f+4]*i[c+4],f+=5,c+=5;return u}for(s=0;s<t;s++)u+=r[f]*i[c],f+=e,c+=o;return u}));var Cn,kn=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Ln(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,t.join)(__dirname,"./native.js"));Cn=Ln(kn)?Bn:kn;const{ndarray:Pn}=Cn;return function(t,r){if(!wn(t))throw new TypeError(F("invalid argument. First argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",t));if(!wn(r))throw new TypeError(F("invalid argument. Second argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",r));if(t.length!==r.length)throw new RangeError(F("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",t.length,r.length));return Pn(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset)}}));
//# sourceMappingURL=index.js.map
