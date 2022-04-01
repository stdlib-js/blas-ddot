// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ddot=e()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,s=i.__lookupGetter__,f=i.__lookupSetter__;var c=function(t,e,r){var n,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(s.call(t,e)||f.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(t,e,r.get),h&&u&&u.call(t,e,r.set),t},l=n,h=c,p=r()?l:h,g=p;var d=function(t,e,r){g(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},v=d;var y=function(t){return"boolean"==typeof t};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return m&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,w=b;var O=function(t){return w.call(t)},E=Object.prototype.hasOwnProperty;var A=function(t,e){return null!=t&&E.call(t,e)},j="function"==typeof Symbol?Symbol.toStringTag:"",I=A,P=j,T=b;var U=O,x=function(t){var e,r,n;if(null==t)return T.call(t);r=t[P],e=I(t,P);try{t[P]=void 0}catch(e){return T.call(t)}return n=T.call(t),e?t[P]=r:delete t[P],n},S=_()?x:U,N=Boolean.prototype.toString;var V=S,R=function(t){try{return N.call(t),!0}catch(t){return!1}},F=_();var B=function(t){return"object"==typeof t&&(t instanceof Boolean||(F?R(t):"[object Boolean]"===V(t)))},L=y,M=B;var C=v,k=function(t){return L(t)||M(t)},G=B;C(k,"isPrimitive",y),C(k,"isObject",G);var D=k;var Y=function(){return new Function("return this;")()},$="object"==typeof self?self:null,J="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof W?W:null;module.exports=X;var Z=D.isPrimitive,q=Y,z=$,H=J,K=t(Object.freeze({__proto__:null}));var Q=function(t){if(arguments.length){if(!Z(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if(z)return z;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},tt=Q,et=tt();var rt=function(){return"function"==typeof et.BigInt&&"function"==typeof BigInt&&"bigint"==typeof et.BigInt("1")&&"bigint"==typeof BigInt("1")},nt=p;var it=function(t,e,r){nt(t,e,{configurable:!1,enumerable:!1,get:r})},ot=it,at={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ut=function(t){return at[t]||null};var st=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0};var ft=function(t){return Math.abs(t)},ct=ft;var lt=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=ct(t[0]),a=1;a<r;a++){if(o=ct(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2};var ht=function(t,e){return e&&(2===t||3===t)};var pt=function(t,e){return e&&(1===t||3===t)};var gt=function(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]};v(gt,"assign",(function(t,e,r,n){var i,o,a,u,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(u=e[s])>0?a+=u*(t[s]-1):u<0&&(o+=u*(t[s]-1))}return n[0]=o,n[1]=a,n}));var dt=gt;var vt=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=dt(e,r,n))[1]-o[0]+1};var yt=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var mt=function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]};var _t=function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this};var bt=function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this};var wt=function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]};var Ot=function(t){return t.re};var Et=function(t){return t.im},At=Ot,jt=Et;var It=function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(At(r),jt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t};var Pt=function(t){return"string"==typeof t},Tt=String.prototype.valueOf;var Ut=S,xt=function(t){try{return Tt.call(t),!0}catch(t){return!1}},St=_();var Nt=function(t){return"object"==typeof t&&(t instanceof String||(St?xt(t):"[object String]"===Ut(t)))},Vt=Pt,Rt=Nt;var Ft=v,Bt=function(t){return Vt(t)||Rt(t)},Lt=Nt;Ft(Bt,"isPrimitive",Pt),Ft(Bt,"isObject",Lt);var Mt=Bt,Ct=Mt.isPrimitive,kt=/[-\/\\^$*+?.()|[\]{}]/g;var Gt=function(t){var e,r;if(!Ct(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(kt,"\\$&"):(e=(e=t.substring(1,r)).replace(kt,"\\$&"),t=t[0]+e+t.substring(r))},Dt=/./,Yt=tt(),$t=Yt.document&&Yt.document.childNodes,Jt=Int8Array,Wt=Dt,Xt=$t,Zt=Jt;var qt=function(){return"function"==typeof Wt||"object"==typeof Zt||"function"==typeof Xt};var zt=function(){return/^\s*function\s*([^(]*)/i},Ht=zt;v(Ht,"REGEXP",zt());var Kt=Ht,Qt=S;var te=Array.isArray?Array.isArray:function(t){return"[object Array]"===Qt(t)},ee=te;var re=function(t){return null!==t&&"object"==typeof t};v(re,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!ee(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(re));var ne=re,ie=ne;var oe=S,ae=Kt.REGEXP,ue=function(t){return ie(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var se=function(t){var e,r,n;if(("Object"===(r=oe(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return ue(t)?"Buffer":r},fe=se;var ce=se;var le=function(t){var e;return null===t?"null":"object"===(e=typeof t)?fe(t).toLowerCase():e},he=function(t){return ce(t).toLowerCase()},pe=qt()?he:le,ge=pe;var de=function(t){return"function"===ge(t)},ve=RegExp.prototype.exec;var ye=S,me=function(t){try{return ve.call(t),!0}catch(t){return!1}},_e=_();var be=Gt,we=de,Oe=Mt.isPrimitive,Ee=function(t){return"object"==typeof t&&(t instanceof RegExp||(_e?me(t):"[object RegExp]"===ye(t)))};var Ae=function(t,e,r){if(!Oe(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(Oe(e))e=be(e),e=new RegExp(e,"g");else if(!Ee(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Oe(r)&&!we(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return t.replace(e,r)},je=Ae,Ie=Ot,Pe=Et,Te={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ue=function(){var t,e,r,n,i,o,a;if(e=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(a=0;a<this._length;a++)o=this.iget(a),t+=Ie(o)+", "+Pe(o),a<this._length-1&&(t+=", ");else for(a=0;a<this._length;a++)t+=this.iget(a),a<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(a=0;a<3;a++)o=this.iget(a),t+=Ie(o)+", "+Pe(o),a<2&&(t+=", ");else for(a=0;a<3;a++)t+=this.iget(a),a<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(a=2;a>=0;a--)o=this.iget(this._length-1-a),t+=Ie(o)+", "+Pe(o),a>0&&(t+=", ");else for(a=2;a>=0;a--)t+=this.iget(this._length-1-a),a>0&&(t+=", ")}if(r=Te[this.dtype],n+=je(r,"{{data}}",t),n+=", ",n+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===e)n+="0";else for(a=0;a<e;a++)this._strides[a]<0?n+=-this._strides[a]:n+=this._strides[a],a<e-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},xe=S,Se="function"==typeof Uint8Array;var Ne="function"==typeof Uint8Array?Uint8Array:null,Ve=function(t){return Se&&t instanceof Uint8Array||"[object Uint8Array]"===xe(t)},Re=Ne;var Fe=function(){var t,e;if("function"!=typeof Re)return!1;try{e=new Re(e=[1,3.14,-3.14,256,257]),t=Ve(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var Be="function"==typeof Uint8Array?Uint8Array:void 0,Le=function(){throw new Error("not implemented")},Me=Fe()?Be:Le,Ce=S,ke="function"==typeof Uint16Array;var Ge="function"==typeof Uint16Array?Uint16Array:null,De=function(t){return ke&&t instanceof Uint16Array||"[object Uint16Array]"===Ce(t)},Ye=Ge;var $e=function(){var t,e;if("function"!=typeof Ye)return!1;try{e=new Ye(e=[1,3.14,-3.14,65536,65537]),t=De(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var Je,We="function"==typeof Uint16Array?Uint16Array:void 0,Xe=function(){throw new Error("not implemented")},Ze={uint16:$e()?We:Xe,uint8:Me};(Je=new Ze.uint16(1))[0]=4660;var qe=52===new Ze.uint8(Je.buffer)[0],ze=S,He="function"==typeof ArrayBuffer;var Ke=function(t){return He&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===ze(t)},Qe=S,tr="function"==typeof Float64Array;var er=function(t){return tr&&t instanceof Float64Array||"[object Float64Array]"===Qe(t)},rr="function"==typeof Float64Array?Float64Array:null,nr=er,ir=rr;var or=function(){var t,e;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=nr(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var ar,ur="function"==typeof Float64Array?Float64Array:void 0,sr=function(){throw new Error("not implemented")};ar=or()?ur:sr;var fr="function"==typeof ArrayBuffer?ArrayBuffer:null,cr=Ke,lr=ar,hr=fr;var pr=function(){var t,e,r;if("function"!=typeof hr)return!1;try{r=new hr(16),(t=cr(r)&&"function"==typeof hr.isView)&&((e=new lr(r))[0]=-3.14,e[1]=NaN,t=t&&hr.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t};var gr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,dr=function(){throw new Error("not implemented")},vr=pr()?gr:dr,yr=S,mr="function"==typeof DataView;var _r="function"==typeof DataView?DataView:null,br=function(t){return mr&&t instanceof DataView||"[object DataView]"===yr(t)},wr=vr,Or=_r;var Er=function(){var t,e,r;if("function"!=typeof Or)return!1;try{r=new wr(24),e=new Or(r,8),(t=br(e)&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t};var Ar="function"==typeof DataView?DataView:void 0,jr=function(){throw new Error("not implemented")},Ir=Er()?Ar:jr,Pr="function"==typeof BigInt?BigInt:void 0,Tr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Ur=function(){return Tr.slice()};var xr=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Sr=p;var Nr=function(t,e,r){Sr(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})},Vr=Nr;var Rr=function(t){return Object.keys(Object(t))},Fr=Rr;var Br=function(){return function(){return 2!==(Fr(arguments)||"").length}(1,2)},Lr=void 0!==Object.keys,Mr=S;var Cr,kr=function(t){return"[object Arguments]"===Mr(t)},Gr=kr;Cr=function(){return Gr(arguments)}();var Dr=Cr;var Yr=function(t){return"number"==typeof t},$r=Number,Jr=$r.prototype.toString;var Wr=S,Xr=$r,Zr=function(t){try{return Jr.call(t),!0}catch(t){return!1}},qr=_();var zr=function(t){return"object"==typeof t&&(t instanceof Xr||(qr?Zr(t):"[object Number]"===Wr(t)))},Hr=Yr,Kr=zr;var Qr=v,tn=function(t){return Hr(t)||Kr(t)},en=zr;Qr(tn,"isPrimitive",Yr),Qr(tn,"isObject",en);var rn=tn;var nn=function(t){return t!=t},on=rn.isPrimitive,an=nn;var un=function(t){return on(t)&&an(t)},sn=rn.isObject,fn=nn;var cn=function(t){return sn(t)&&fn(t.valueOf())},ln=un,hn=cn;var pn=v,gn=function(t){return ln(t)||hn(t)},dn=cn;pn(gn,"isPrimitive",un),pn(gn,"isObject",dn);var vn=gn,yn=Number.POSITIVE_INFINITY,mn=$r.NEGATIVE_INFINITY,_n=Math.floor,bn=_n;var wn=function(t){return bn(t)===t},On=yn,En=mn,An=wn;var jn=function(t){return t<On&&t>En&&An(t)},In=rn.isPrimitive,Pn=jn;var Tn=function(t){return In(t)&&Pn(t)},Un=rn.isObject,xn=jn;var Sn=function(t){return Un(t)&&xn(t.valueOf())},Nn=Tn,Vn=Sn;var Rn=v,Fn=function(t){return Nn(t)||Vn(t)},Bn=Sn;Rn(Fn,"isPrimitive",Tn),Rn(Fn,"isObject",Bn);var Ln,Mn=Fn,Cn=Object.prototype.propertyIsEnumerable;Ln=!Cn.call("beep","0");var kn=Mt,Gn=vn.isPrimitive,Dn=Mn.isPrimitive,Yn=Cn,$n=Ln;var Jn=function(t,e){var r;return null!=t&&(!(r=Yn.call(t,e))&&$n&&kn(t)?!Gn(e=+e)&&Dn(e)&&e>=0&&e<t.length:r)},Wn=Jn,Xn=A,Zn=Wn,qn=te,zn=wn;var Hn=Dr?kr:function(t){return null!==t&&"object"==typeof t&&!qn(t)&&"number"==typeof t.length&&zn(t.length)&&t.length>=0&&t.length<=4294967295&&Xn(t,"callee")&&!Zn(t,"callee")},Kn=Hn,Qn=Rr,ti=Array.prototype.slice;var ei=function(t){return Kn(t)?Qn(ti.call(t)):Qn(t)};var ri=Wn((function(){}),"prototype"),ni=!Wn({toString:null},"toString"),ii=wn;var oi=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ii(t.length)&&t.length>=0&&t.length<=9007199254740991},ai=vn,ui=oi,si=Mt.isPrimitive,fi=Mn.isPrimitive;var ci=function(t,e,r){var n,i;if(!ui(t)&&!si(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!fi(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ai(e)){for(;i<n;i++)if(ai(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1};var li,hi=function(t){return t.constructor&&t.constructor.prototype===t},pi="undefined"==typeof window?void 0:window,gi=A,di=ci,vi=pe,yi=hi,mi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_i=pi;li=function(){var t;if("undefined"===vi(_i))return!1;for(t in _i)try{-1===di(mi,t)&&gi(_i,t)&&null!==_i[t]&&"object"===vi(_i[t])&&yi(_i[t])}catch(t){return!0}return!1}();var bi="undefined"!=typeof window,wi=li,Oi=hi,Ei=bi;var Ai=ne,ji=A,Ii=Hn,Pi=ri,Ti=ni,Ui=function(t){if(!1===Ei&&!wi)return Oi(t);try{return Oi(t)}catch(t){return!1}},xi=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Si,Ni=Rr,Vi=ei,Ri=function(t){var e,r,n,i,o,a,u;if(i=[],Ii(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!ji(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!Ai(t))return i;r=Pi&&n}for(o in t)r&&"prototype"===o||!ji(t,o)||i.push(String(o));if(Ti)for(e=Ui(t),u=0;u<xi.length;u++)a=xi[u],e&&"constructor"===a||!ji(t,a)||i.push(String(a));return i};Si=Lr?Br()?Vi:Ni:Ri;var Fi=Vr,Bi=Si;var Li=function(t,e){var r,n,i;for(r=Bi(e),i=0;i<r.length;i++)n=r[i],Fi(t,n,e[n]);return t},Mi=Ur,Ci=xr,ki=Li;v(Mi,"enum",Ci),ki(Mi,Ci());var Gi=Mi,Di=["row-major","column-major"];var Yi=function(){return Di.slice()};v(Yi,"enum",(function(){return{"row-major":1,"column-major":2}}));var $i=Yi,Ji=["throw","clamp","wrap"];var Wi=function(){return Ji.slice()};v(Wi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Xi=Wi,Zi=qe,qi=vr,zi=Ir,Hi=Pr,Ki=$i.enum,Qi=Xi.enum,to=(0,Gi.enum)(),eo=Ki(),ro=Qi();var no=function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(h=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new zi(new qi(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,f=0,u.setInt8(f,Zi?1:0),f+=1,u.setInt16(f,to[n],Zi),f+=2,u.setBigInt64(f,Hi(l),Zi),c=8*l,f+=8,p=0;p<l;p++)u.setBigInt64(f,Hi(i[p]),Zi),u.setBigInt64(f+c,Hi(o[p]*t),Zi),f+=8;for(f+=c,u.setBigInt64(f,Hi(this._offset*t),Zi),f+=8,u.setInt8(f,eo[this._order]),f+=1,u.setInt8(f,ro[s]),f+=1,u.setBigInt64(f,Hi(h),Zi),f+=8,p=0;p<h;p++)u.setInt8(f,ro[a[p]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(f,e,Zi),this.__meta_dataview__=u,u},io=qe,oo=Me,ao=Ir,uo=_n;var so=function(t){var e,r,n,i;return e=new oo(8),0===t||(i=(4294967295&t)>>>0,n=uo(t/4294967296),r=new ao(e.buffer),io?(r.setUint32(0,i,io),r.setUint32(4,n,io)):(r.setUint32(0,n,io),r.setUint32(4,i,io))),e},fo=qe,co=Ir,lo=_n,ho=new Me(8),po=new co(ho.buffer);var go=so;v(go,"assign",(function(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<ho.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=lo(t/4294967296),fo?(po.setUint32(0,o,fo),po.setUint32(4,i,fo)):(po.setUint32(0,i,fo),po.setUint32(4,o,fo)),a=0;a<ho.length;a++)e[n]=ho[a],n+=r;return e}));var vo=qe,yo=vr,mo=Ir,_o=Me,bo=$i.enum,wo=Xi.enum,Oo=go.assign,Eo=(0,Gi.enum)(),Ao=bo(),jo=wo();var Io=rt,Po=v,To=ot,Uo=ut,xo=st,So=lt,No=ht,Vo=pt,Ro=vt,Fo=yt,Bo=mt,Lo=_t,Mo=bt,Co=wt,ko=It,Go=Ue,Do=no,Yo=function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p,g;if(f=this._mode||"throw",u=this._submode||[f],n=33+16*(h=this._ndims)+(p=u.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new mo(new yo(n)),e=new _o(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,vo?1:0),c+=1,s.setInt16(c,Eo[i],vo),Oo(h,e,1,c+=2),l=8*h,c+=8,g=0;g<h;g++)Oo(o[g],e,1,c),Oo(a[g]*t,e,1,c+l),c+=8;for(c+=l,Oo(this._offset*t,e,1,c),c+=8,s.setInt8(c,Ao[this._order]),c+=1,s.setInt8(c,jo[f]),Oo(p,e,1,c+=1),c+=8,g=0;g<p;g++)s.setInt8(c,jo[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,vo),this.__meta_dataview__=s,s};function $o(t,e,r,n,i,o){var a,u,s,f,c;if(!(this instanceof $o))return new $o(t,e,r,n,i,o);for(f=1,c=0;c<r.length;c++)f*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*f:null,this._byteLength=u,this._bytesPerElement=Uo(t),this._buffer=e,this._dtype=t,this._length=f,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=xo(n),a=Ro(f,r,n,i,this._iterationOrder),s=So(n),this._flags={ROW_MAJOR_CONTIGUOUS:Vo(s,a),COLUMN_MAJOR_CONTIGUOUS:No(s,a),READONLY:!1},this.__meta_dataview__=null,this}Po($o,"name","ndarray"),To($o.prototype,"byteLength",(function(){return this._byteLength})),To($o.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),To($o.prototype,"data",(function(){return this._buffer})),To($o.prototype,"dtype",(function(){return this._dtype})),To($o.prototype,"flags",(function(){return Fo(this._flags)})),To($o.prototype,"length",(function(){return this._length})),To($o.prototype,"ndims",(function(){return this._ndims})),To($o.prototype,"offset",(function(){return this._offset})),To($o.prototype,"order",(function(){return this._order})),To($o.prototype,"shape",(function(){return this._shape.slice()})),To($o.prototype,"strides",(function(){return this._strides.slice()})),Po($o.prototype,"get",Co),Po($o.prototype,"iget",Bo),Po($o.prototype,"set",Mo),Po($o.prototype,"iset",Lo),Po($o.prototype,"toString",Go),Po($o.prototype,"toJSON",ko),Po($o.prototype,"__array_meta_dataview__",Io()?Do:Yo);var Jo=$o;var Wo=function(t){return t instanceof Jo||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var Xo=function(t){return Wo(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length},Zo=er;var qo=function(t){return Xo(t)&&Zo(t.data)},zo=oi,Ho=Mn.isPrimitive,Ko=Mt.isPrimitive,Qo=vn.isPrimitive;var ta=function(t,e,r){var n,i,o;if(!zo(t)&&!Ko(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ho(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(i=r)<0&&(i=0)}else i=0;if(Ko(t)){if(!Ko(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==t.indexOf(e,i)}if(n=t.length,Qo(e)){for(o=i;o<n;o++)if(Qo(t[o]))return!0;return!1}for(o=i;o<n;o++)if(t[o]===e)return!0;return!1},ea=ta,ra=Mt.isPrimitive;var na=function(t){if(!ra(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toLowerCase()},ia=Mt.isPrimitive;var oa=function(t){if(!ia(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toUpperCase()},aa=na,ua=oa,sa=Mt.isPrimitive;var fa=function(t){return sa(t)&&t===ua(t)&&t!==aa(t)},ca=yn,la=mn;var ha=function(t){return t==t&&t>la&&t<ca},pa=Mn.isPrimitive;var ga=function(t){return pa(t)&&t>=0},da=Mn.isObject;var va=function(t){return da(t)&&t.valueOf()>=0},ya=ga,ma=va;var _a=v,ba=function(t){return ya(t)||ma(t)},wa=va;_a(ba,"isPrimitive",ga),_a(ba,"isObject",wa);var Oa=ba.isPrimitive,Ea=Mt.isPrimitive;var Aa=function(t,e){var r,n;if(!Ea(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!Oa(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===t.length||0===e)return"";if(t.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",n=e;1==(1&n)&&(r+=t),0!==(n>>>=1);)t+=t;return r},ja=Mn.isPrimitive,Ia=Mt.isPrimitive;var Pa=function(t,e,r){var n,i;if(!Ia(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!Ia(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ja(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");n=r<0?t.length+r:r}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>t.length)return!1;for(i=0;i<e.length;i++)if(t.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Ta=Aa,Ua=Pa;var xa=function(t,e,r){var n=!1,i=e-t.length;return i<0||(Ua(t,"-")&&(n=!0,t=t.substr(1)),t=r?t+Ta("0",i):Ta("0",i)+t,n&&(t="-"+t)),t},Sa=fa,Na=oa,Va=na,Ra=ha,Fa=rn.isPrimitive,Ba=xa;var La=fa,Ma=oa,Ca=na,ka=Ae,Ga=ha,Da=rn.isPrimitive,Ya=ft,$a=/e\+(\d)$/,Ja=/e-(\d)$/,Wa=/^(\d+)$/,Xa=/^(\d+)e/,Za=/\.0$/,qa=/\.0*e/,za=/(\..*[^0])0*e/;var Ha=function(t){var e,r,n=parseFloat(t.arg);if(!Ga(n)){if(!Da(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":Ya(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=ka(r,za,"$1e"),r=ka(r,qa,"e"),r=ka(r,Za,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=ka(r,$a,"e+0$1"),r=ka(r,Ja,"e-0$1"),t.alternate&&(r=ka(r,Wa,"$1."),r=ka(r,Xa,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=La(t.specifier)?Ma(r):Ca(r)},Ka=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Qa=Aa;var tu=Mt.isPrimitive,eu=ea,ru=nn,nu=function(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!Ra(n)){if(!Fa(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=Ba(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=Ba(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=Sa(t.specifier)?Na(r):Va(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r},iu=Ha,ou=function(t){var e,r,n,i,o;for(e=0,n=[],o=Ka.exec(t);o;)(r=t.slice(e,Ka.lastIndex-o[0].length)).length&&n.push(r),(i=a(o,n.length))&&n.push(i),e=Ka.lastIndex,o=Ka.exec(t);return(r=t.slice(e)).length&&n.push(r),n;function a(t){return{mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],hasPeriod:"."===t[4],precision:t[5],specifier:t[6]}}},au=function(t,e,r){var n=e-t.length;return n<0?t:t=r?t+Qa(" ",n):Qa(" ",n)+t},uu=xa,su=String.fromCharCode;var fu=function(t){var e,r,n,i,o,a,u,s,f;if(!tu(t))throw new TypeError("invalid argument. Must provide a string. Value: `"+t+"`.");for(e=ou(t),a="",u=1,s=0;s<e.length;s++)if(n=e[s],tu(n))a+=n;else{for(n.mapping&&(u=n.mapping),r=n.flags,f=0;f<r.length;f++)switch(i=r.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!eu(r,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ru(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ru(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=nu(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ru(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ru(o)?String(n.arg):su(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=iu(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=uu(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=au(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},cu=fu,lu=require("path").join,hu=require("@stdlib/utils-try-require"),pu=require("./main.js"),gu=hu(lu("/home/runner/work/blas-ddot/blas-ddot/node_modules/@stdlib/blas-base-ddot/lib","./native.js"));gu instanceof Error||(pu=gu),module.exports=pu;var du=qo,vu=cu,yu=t(Object.freeze({__proto__:null})).ndarray;return function(t,e){if(!du(t))throw new TypeError(vu("invalid argument. First argument must be a 1-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",t));if(!du(e))throw new TypeError(vu("invalid argument. Second argument must be a 1-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",e));if(t.length!==e.length)throw new RangeError(vu("invalid argument. Arrays must be the same length. First argument length: %u. Second argument length: %u.",t.length,e.length));return yu(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset)}}));
//# sourceMappingURL=bundle.js.map
