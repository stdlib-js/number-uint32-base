/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/add}
*/
setReadOnly( ns, 'add', require( '@stdlib/number-uint32-base-add' ) );

/**
* @name fromBinaryStringUint32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/from-binary-string}
*/
setReadOnly( ns, 'fromBinaryStringUint32', require( '@stdlib/number-uint32-base-from-binary-string' ) );

/**
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/mul}
*/
setReadOnly( ns, 'mul', require( '@stdlib/number-uint32-base-mul' ) );

/**
* @name muldw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/muldw}
*/
setReadOnly( ns, 'muldw', require( '@stdlib/number-uint32-base-muldw' ) );

/**
* @name rotl32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/rotl}
*/
setReadOnly( ns, 'rotl32', require( '@stdlib/number-uint32-base-rotl' ) );

/**
* @name rotr32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/rotr}
*/
setReadOnly( ns, 'rotr32', require( '@stdlib/number-uint32-base-rotr' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/sub}
*/
setReadOnly( ns, 'sub', require( '@stdlib/number-uint32-base-sub' ) );

/**
* @name toBinaryStringUint32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/to-binary-string}
*/
setReadOnly( ns, 'toBinaryStringUint32', require( '@stdlib/number-uint32-base-to-binary-string' ) );

/**
* @name uint32ToInt32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint32/base/to-int32}
*/
setReadOnly( ns, 'uint32ToInt32', require( '@stdlib/number-uint32-base-to-int32' ) );


// EXPORTS //

module.exports = ns;
