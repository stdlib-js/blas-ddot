// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64vector-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ddot@esm/index.mjs";function r(r,a){if(!e(r))throw new TypeError(n("invalid argument. First argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",r));if(!e(a))throw new TypeError(n("invalid argument. Second argument must be a one-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `%s`.",a));if(r.length!==a.length)throw new RangeError(n("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",r.length,a.length));return t(r.length,r.data,r.strides[0],r.offset,a.data,a.strides[0],a.offset)}export{r as default};
//# sourceMappingURL=index.mjs.map
