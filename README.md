<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Uint32

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base utilities for unsigned 32-bit integers.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-uint32-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number-uint32-base' );
```

#### ns

Base utilities for unsigned 32-bit integers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( x, y )`][@stdlib/number/uint32/base/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two unsigned 32-bit integers.</span>
-   <span class="signature">[`fromBinaryStringUint32( bstr )`][@stdlib/number/uint32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 32-bit integer from a literal bit representation.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/number/uint32/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two unsigned 32-bit integers.</span>
-   <span class="signature">[`muldw( a, b )`][@stdlib/number/uint32/base/muldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>
-   <span class="signature">[`rotl32( x, shift )`][@stdlib/number/uint32/base/rotl]</span><span class="delimiter">: </span><span class="description">bitwise rotation to the left.</span>
-   <span class="signature">[`rotr32( x, shift )`][@stdlib/number/uint32/base/rotr]</span><span class="delimiter">: </span><span class="description">bitwise rotation to the right.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/number/uint32/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two unsigned 32-bit integers.</span>
-   <span class="signature">[`toBinaryStringUint32( x )`][@stdlib/number/uint32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 32-bit integer.</span>
-   <span class="signature">[`uint32ToInt32( x )`][@stdlib/number/uint32/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert an unsigned 32-bit integer to a signed 32-bit integer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/number-uint32-base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint32-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint32-base

[test-image]: https://github.com/stdlib-js/number-uint32-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-uint32-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint32-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint32-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint32-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint32-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint32-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint32-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint32-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint32-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint32-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint32-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint32-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint32-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/uint32/base/add]: https://github.com/stdlib-js/number-uint32-base-add

[@stdlib/number/uint32/base/from-binary-string]: https://github.com/stdlib-js/number-uint32-base-from-binary-string

[@stdlib/number/uint32/base/mul]: https://github.com/stdlib-js/number-uint32-base-mul

[@stdlib/number/uint32/base/muldw]: https://github.com/stdlib-js/number-uint32-base-muldw

[@stdlib/number/uint32/base/rotl]: https://github.com/stdlib-js/number-uint32-base-rotl

[@stdlib/number/uint32/base/rotr]: https://github.com/stdlib-js/number-uint32-base-rotr

[@stdlib/number/uint32/base/sub]: https://github.com/stdlib-js/number-uint32-base-sub

[@stdlib/number/uint32/base/to-binary-string]: https://github.com/stdlib-js/number-uint32-base-to-binary-string

[@stdlib/number/uint32/base/to-int32]: https://github.com/stdlib-js/number-uint32-base-to-int32

<!-- </toc-links> -->

</section>

<!-- /.links -->
