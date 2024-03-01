// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(t){var e,n,f;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,f=parseInt(n,10),!isFinite(f)){if(!r(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===t.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=f.toString(e),f||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":u(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,_,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,h,"e-0$1"),t.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):s.call(n)}function v(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var w=String.fromCharCode,O=isNaN,j=Array.isArray;function E(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function A(t){var e,r,n,o,a,u,s,c,l,p,h,g,y;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",s=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):w(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,y=void 0,(y=h-p.length)<0?p:p=g?p+v(y):v(y)+p)),u+=n.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function S(t){var e,r,n,i;for(r=[],i=0,n=x.exec(t);n;)(e=t.slice(i,x.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),i=x.lastIndex,n=x.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function U(t){var e,r;if("string"!=typeof t)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[S(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return A.apply(null,e)}var T,N=Object.prototype,R=N.toString,C=N.__defineGetter__,F=N.__defineSetter__,B=N.__lookupGetter__,L=N.__lookupSetter__;T=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(B.call(t,e)||L.call(t,e)?(n=t.__proto__,t.__proto__=N,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(t,e,r.get),a&&F&&F.call(t,e,r.set),t};var V=T;function k(t,e,r){V(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function P(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function $(t,e){return null!=t&&Y.call(t,e)}var J="function"==typeof Symbol?Symbol:void 0,W="function"==typeof J?J.toStringTag:"";var z=D()?function(t){var e,r,n;if(null==t)return G.call(t);r=t[W],e=$(t,W);try{t[W]=void 0}catch(e){return G.call(t)}return n=G.call(t),e?t[W]=r:delete t[W],n}:function(t){return G.call(t)},H=Boolean,X=Boolean.prototype.toString;var Z=D();function q(t){return"object"==typeof t&&(t instanceof H||(Z?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function K(t){return P(t)||q(t)}k(K,"isPrimitive",P),k(K,"isObject",q);var Q="object"==typeof self?self:null,tt="object"==typeof window?window:null,et="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},rt="object"==typeof et?et:null,nt="object"==typeof globalThis?globalThis:null;function it(t){if(arguments.length){if(!P(t))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(nt)return nt;if(Q)return Q;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}var ot=it();function at(t,e,r){V(t,e,{configurable:!1,enumerable:!1,get:r})}var ft={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function ut(t){return Math.abs(t)}function st(t,e){return e&&(2===t||3===t)}function ct(t,e){return e&&(1===t||3===t)}function lt(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function pt(t){return t.re}function ht(t){return t.im}function gt(t){return"string"==typeof t}k(lt,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var yt=String.prototype.valueOf;var dt=D();function _t(t){return"object"==typeof t&&(t instanceof String||(dt?function(t){try{return yt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function bt(t){return gt(t)||_t(t)}k(bt,"isPrimitive",gt),k(bt,"isObject",_t);var mt=/[-\/\\^$*+?.()|[\]{}]/g;var vt=/./,wt=it(),Ot=wt.document&&wt.document.childNodes,jt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var At=/^\s*function\s*([^(]*)/i;k(Et,"REGEXP",At);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function It(t){return null!==t&&"object"==typeof t}function St(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=At.exec(n.toString()))return e[1]}return It(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}k(It,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!xt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(It));var Ut="function"==typeof vt||"object"==typeof jt||"function"==typeof Ot?function(t){return St(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?St(t).toLowerCase():e};function Tt(t){return"function"===Ut(t)}var Nt=RegExp.prototype.exec;var Rt=D();function Ct(t){return"object"==typeof t&&(t instanceof RegExp||(Rt?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function Ft(t,e,r){if(!gt(t))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",t));if(gt(e))e=new RegExp(function(t){var e,r;if(!gt(t))throw new TypeError(U("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(mt,"\\$&"):(e=(e=t.substring(1,r)).replace(mt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Ct(e))throw new TypeError(U("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!gt(r)&&!Tt(r))throw new TypeError(U("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Bt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Lt="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null;var kt,Pt="function"==typeof Uint8Array?Uint8Array:void 0;kt=function(){var t,e,r;if("function"!=typeof Vt)return!1;try{e=new Vt(e=[1,3.14,-3.14,256,257]),r=e,t=(Lt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Pt:function(){throw new Error("not implemented")};var Mt=kt,Dt="function"==typeof Uint16Array;var Gt="function"==typeof Uint16Array?Uint16Array:null;var Yt,$t="function"==typeof Uint16Array?Uint16Array:void 0;Yt=function(){var t,e,r;if("function"!=typeof Gt)return!1;try{e=new Gt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Dt&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?$t:function(){throw new Error("not implemented")};var Jt,Wt={uint16:Yt,uint8:Mt};(Jt=new Wt.uint16(1))[0]=4660;var zt=52===new Wt.uint8(Jt.buffer)[0],Ht="function"==typeof ArrayBuffer;var Xt="function"==typeof Float64Array;var Zt="function"==typeof Float64Array?Float64Array:null;var qt,Kt="function"==typeof Float64Array?Float64Array:void 0;qt=function(){var t,e,r;if("function"!=typeof Zt)return!1;try{e=new Zt([1,3.14,-3.14,NaN]),r=e,t=(Xt&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Kt:function(){throw new Error("not implemented")};var Qt=qt,te="function"==typeof ArrayBuffer?ArrayBuffer:null;var ee,re="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ee=function(){var t,e,r,n;if("function"!=typeof te)return!1;try{r=new te(16),n=r,(t=(Ht&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof te.isView)&&((e=new Qt(r))[0]=-3.14,e[1]=NaN,t=t&&te.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?re:function(){throw new Error("not implemented")};var ne=ee,ie="function"==typeof DataView;var oe="function"==typeof DataView?DataView:null;var ae,fe="function"==typeof DataView?DataView:void 0;ae=function(){var t,e,r,n;if("function"!=typeof oe)return!1;try{r=new ne(24),e=new oe(r,8),n=e,(t=(ie&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var ue=ae,se="function"==typeof BigInt?BigInt:void 0,ce={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function le(){var t;return 0===arguments.length?ce.all.slice():(t=ce[arguments[0]])?t.slice():[]}function pe(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function he(t,e,r){V(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function ge(t){return Object.keys(Object(t))}var ye=void 0!==Object.keys;function de(t){return"[object Arguments]"===z(t)}var _e=function(){return de(arguments)}();function be(t){return"number"==typeof t}var me=Number,ve=me.prototype.toString;var we=D();function Oe(t){return"object"==typeof t&&(t instanceof me||(we?function(t){try{return ve.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function je(t){return be(t)||Oe(t)}function Ee(t){return t!=t}function Ae(t){return be(t)&&Ee(t)}function xe(t){return Oe(t)&&Ee(t.valueOf())}function Ie(t){return Ae(t)||xe(t)}k(je,"isPrimitive",be),k(je,"isObject",Oe),k(Ie,"isPrimitive",Ae),k(Ie,"isObject",xe);var Se=Number.POSITIVE_INFINITY,Ue=me.NEGATIVE_INFINITY,Te=Math.floor;function Ne(t){return Te(t)===t}function Re(t){return t<Se&&t>Ue&&Ne(t)}function Ce(t){return be(t)&&Re(t)}function Fe(t){return Oe(t)&&Re(t.valueOf())}function Be(t){return Ce(t)||Fe(t)}k(Be,"isPrimitive",Ce),k(Be,"isObject",Fe);var Le=Object.prototype.propertyIsEnumerable;var Ve=!Le.call("beep","0");function ke(t,e){var r;return null!=t&&(!(r=Le.call(t,e))&&Ve&&bt(t)?!Ae(e=+e)&&Ce(e)&&e>=0&&e<t.length:r)}var Pe=_e?de:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&Ne(t.length)&&t.length>=0&&t.length<=4294967295&&$(t,"callee")&&!ke(t,"callee")},Me=Array.prototype.slice;var De=ke((function(){}),"prototype"),Ge=!ke({toString:null},"toString"),Ye=9007199254740991;function $e(t,e,r){var n,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&Ne(o.length)&&o.length>=0&&o.length<=Ye||gt(t)))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Ce(r))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Ie(e)){for(;i<n;i++)if(Ie(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Je(t){return t.constructor&&t.constructor.prototype===t}var We=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ze="undefined"==typeof window?void 0:window;var He=function(){var t;if("undefined"===Ut(ze))return!1;for(t in ze)try{-1===$e(We,t)&&$(ze,t)&&null!==ze[t]&&"object"===Ut(ze[t])&&Je(ze[t])}catch(t){return!0}return!1}(),Xe="undefined"!=typeof window;var Ze=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var qe=ye?function(){return 2!==(ge(arguments)||"").length}(1,2)?function(t){return Pe(t)?ge(Me.call(t)):ge(t)}:ge:function(t){var e,r,n,i,o,a,f;if(i=[],Pe(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!$(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!It(t))return i;r=De&&n}for(o in t)r&&"prototype"===o||!$(t,o)||i.push(String(o));if(Ge)for(e=function(t){if(!1===Xe&&!He)return Je(t);try{return Je(t)}catch(t){return!1}}(t),f=0;f<Ze.length;f++)a=Ze[f],e&&"constructor"===a||!$(t,a)||i.push(String(a));return i};k(le,"enum",pe),function(t,e){var r,n,i;for(r=qe(e),i=0;i<r.length;i++)he(t,n=r[i],e[n])}(le,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ke=["row-major","column-major"];function Qe(){return{"row-major":1,"column-major":2}}k((function(){return Ke.slice()}),"enum",Qe);var tr=["throw","normalize","clamp","wrap"];function er(){return{throw:1,clamp:2,wrap:3,normalize:4}}k((function(){return tr.slice()}),"enum",er);var rr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},nr={"row-major":1,"column-major":2},ir={throw:1,clamp:2,wrap:3,normalize:4};var or=4294967295,ar=4294967296,fr=new Mt(8),ur=new ue(fr.buffer);function sr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<fr.length;a++)e[n]=0,n+=r;return e}for(o=(t&or)>>>0,i=Te(t/ar),zt?(ur.setUint32(0,o,zt),ur.setUint32(4,i,zt)):(ur.setUint32(0,i,zt),ur.setUint32(4,o,zt)),a=0;a<fr.length;a++)e[n]=fr[a],n+=r;return e}k((function(t){var e,r,n,i;return e=new Mt(8),0===t||(i=(4294967295&t)>>>0,n=Te(t/4294967296),r=new ue(e.buffer),zt?(r.setUint32(0,i,zt),r.setUint32(4,n,zt)):(r.setUint32(0,n,zt),r.setUint32(4,i,zt))),e}),"assign",sr);var cr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},lr={"row-major":1,"column-major":2},pr={throw:1,clamp:2,wrap:3,normalize:4};function hr(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof hr))return new hr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return ft[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=H(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=lt(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=ut(t[0]),a=1;a<r;a++){if(o=ut(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:ct(u,a),COLUMN_MAJOR_CONTIGUOUS:st(u,a),READONLY:!1},this.__meta_dataview__=null,this}function gr(t){return function(t){return t instanceof hr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}function yr(t){return gr(t)&&"float64"===t.dtype}function dr(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function _r(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}function br(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}k(hr,"name","ndarray"),at(hr.prototype,"byteLength",(function(){return this._byteLength})),at(hr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),at(hr.prototype,"data",(function(){return this._buffer})),at(hr.prototype,"dtype",(function(){return this._dtype})),at(hr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),at(hr.prototype,"length",(function(){return this._length})),at(hr.prototype,"ndims",(function(){return this._ndims})),at(hr.prototype,"offset",(function(){return this._offset})),at(hr.prototype,"order",(function(){return this._order})),at(hr.prototype,"shape",(function(){return this._shape.slice()})),at(hr.prototype,"strides",(function(){return this._strides.slice()})),k(hr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),k(hr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),k(hr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),k(hr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),k(hr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=pt(i=this.iget(o))+", "+ht(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=pt(i=this.iget(o))+", "+ht(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=pt(i=this.iget(this._length-1-o))+", "+ht(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Ft(Bt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),k(hr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(pt(r),ht(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),k(hr.prototype,"__array_meta_dataview__","function"==typeof ot.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ot.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new ue(new ne(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,zt?1:0),s+=1,f.setInt16(s,rr[n],zt),s+=2,f.setBigInt64(s,se(l),zt),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,se(i[h]),zt),f.setBigInt64(s+c,se(o[h]*t),zt),s+=8;for(s+=c,f.setBigInt64(s,se(this._offset*t),zt),s+=8,f.setInt8(s,nr[this._order]),s+=1,f.setInt8(s,ir[u]),s+=1,f.setBigInt64(s,se(p),zt),s+=8,h=0;h<p;h++)f.setInt8(s,ir[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,zt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,g;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new ue(new ne(n)),e=new Mt(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,zt?1:0),c+=1,u.setInt16(c,cr[i],zt),sr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)sr(o[g],e,1,c),sr(a[g]*t,e,1,c+l),c+=8;for(c+=l,sr(this._offset*t,e,1,c),c+=8,u.setInt8(c,lr[this._order]),c+=1,u.setInt8(c,pr[s]),sr(h,e,1,c+=1),c+=8,g=0;g<h;g++)u.setInt8(c,pr[f[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,zt),this.__meta_dataview__=u,u});var mr=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,vr=function(t){return mr.exec(t).slice(1)};function wr(){for(var t="",e=!1,r=arguments.length-1;r>=-1&&!e;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,e="/"===n.charAt(0))}return(e?"/":"")+(t=br(Tr(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."}function Or(t){var e=jr(t),r="/"===Nr(t,-1);return(t=br(Tr(t.split("/"),(function(t){return!!t})),!e).join("/"))||e||(t="."),t&&r&&(t+="/"),(e?"/":"")+t}function jr(t){return"/"===t.charAt(0)}function Er(){return Or(Tr(Array.prototype.slice.call(arguments,0),(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function Ar(t,e){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=wr(t).substr(1),e=wr(e).substr(1);for(var n=r(t.split("/")),i=r(e.split("/")),o=Math.min(n.length,i.length),a=o,f=0;f<o;f++)if(n[f]!==i[f]){a=f;break}var u=[];for(f=a;f<n.length;f++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function xr(t){var e=vr(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function Ir(t,e){var r=vr(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r}function Sr(t){return vr(t)[3]}var Ur={extname:Sr,basename:Ir,dirname:xr,sep:"/",delimiter:":",relative:Ar,join:Er,isAbsolute:jr,normalize:Or,resolve:wr};function Tr(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var Nr="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)},Rr=_r(Object.freeze({__proto__:null,basename:Ir,default:Ur,delimiter:":",dirname:xr,extname:Sr,isAbsolute:jr,join:Er,normalize:Or,relative:Ar,resolve:wr,sep:"/"}));var Cr,Fr=Object,Br=Object.getPrototypeOf;Cr=Tt(Object.getPrototypeOf)?Br:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Lr=Cr;function Vr(t){return null==t?null:(t=Fr(t),Lr(t))}function kr(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===z(t))return!0;t=Vr(t)}return!1}function Pr(t,e,r,n,i){var o,a,f,u,s;if(o=0,t<=0)return o;if(1===r&&1===i){if((u=t%5)>0)for(s=0;s<u;s++)o+=e[s]*n[s];if(t<5)return o;for(s=u;s<t;s+=5)o+=e[s]*n[s]+e[s+1]*n[s+1]+e[s+2]*n[s+2]+e[s+3]*n[s+3]+e[s+4]*n[s+4];return o}for(a=r<0?(1-t)*r:0,f=i<0?(1-t)*i:0,s=0;s<t;s++)o+=e[a]*n[f],a+=r,f+=i;return o}k(Pr,"ndarray",(function(t,e,r,n,i,o,a){var f,u,s,c,l;if(f=0,t<=0)return f;if(u=n,s=a,1===r&&1===o){if((c=t%5)>0)for(l=0;l<c;l++)f+=e[u]*i[s],u+=1,s+=1;if(t<5)return f;for(l=c;l<t;l+=5)f+=e[u]*i[s]+e[u+1]*i[s+1]+e[u+2]*i[s+2]+e[u+3]*i[s+3]+e[u+4]*i[s+4],u+=5,s+=5;return f}for(l=0;l<t;l++)f+=e[u]*i[s],u+=r,s+=o;return f}));var Mr,Dr=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return kr(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,Rr.join)("/home/runner/work/blas-ddot/blas-ddot/node_modules/@stdlib/blas-base-ddot/lib","./native.js"));Mr=kr(Dr)?Pr:Dr;const{ndarray:Gr}=Mr;function Yr(t,e){if(!yr(t))throw new TypeError(dr("0CHD8",t));if(!yr(e))throw new TypeError(dr("0CHD9",e));if(t.length!==e.length)throw new RangeError(dr("0CH3S",t.length,e.length));return Gr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset)}export{Yr as default};
//# sourceMappingURL=mod.js.map