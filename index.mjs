// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64vector-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ddot@v0.0.10-esm/index.mjs";function s(s,o){if(!t(s))throw new TypeError(e("0CHF9",s));if(!t(o))throw new TypeError(e("0CHFA",o));if(s.length!==o.length)throw new RangeError(e("0CH3S,F8",s.length,o.length));return r(s.length,s.data,s.strides[0],s.offset,o.data,o.strides[0],o.offset)}export{s as default};
//# sourceMappingURL=index.mjs.map
