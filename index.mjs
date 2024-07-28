// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64vector-like@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ddot@v0.3.0-esm/index.mjs";function s(s,o){if(!t(s))throw new TypeError(e("0CHD8",s));if(!t(o))throw new TypeError(e("0CHD9",o));if(s.length!==o.length)throw new RangeError(e("0CH3S",s.length,o.length));return r(s.length,s.data,s.strides[0],s.offset,o.data,o.strides[0],o.offset)}export{s as default};
//# sourceMappingURL=index.mjs.map
