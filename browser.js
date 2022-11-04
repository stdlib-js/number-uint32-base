// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,c){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(o.call(r,e)||u.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=c.value,r.__proto__=f):r[e]=c.value),s="get"in c,p="set"in c,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,e,c.get),p&&a&&a.call(r,e,c.set),r};function f(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r){return r!=r}var s=Math.floor;function p(r){return s(r)===r}function g(r){return p(r/2)}function y(r){return g(r>0?r-1:r+1)}var h=Number.POSITIVE_INFINITY,d=Number,v=d.NEGATIVE_INFINITY;function w(r){return r===h||r===v}var m=Math.sqrt;function b(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return A&&"symbol"==typeof Symbol.toStringTag}var _,S=Object.prototype.toString,j=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",T=E()?function(r){var e,n,t,i,a;if(null==r)return S.call(r);n=r[U],a=U,e=null!=(i=r)&&j.call(i,a);try{r[U]=void 0}catch(e){return S.call(r)}return t=S.call(r),e?r[U]=n:delete r[U],t}:function(r){return S.call(r)},x="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(x&&n instanceof Uint32Array||"[object Uint32Array]"===T(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?O:function(){throw new Error("not implemented")};var V,F=_,k="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N([1,3.14,-3.14,NaN]),n=e,r=(k&&n instanceof Float64Array||"[object Float64Array]"===T(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?P:function(){throw new Error("not implemented")};var $,G=V,R="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,e,n;if("function"!=typeof H)return!1;try{e=new H(e=[1,3.14,-3.14,256,257]),n=e,r=(R&&n instanceof Uint8Array||"[object Uint8Array]"===T(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C,L=$,M="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,e,n;if("function"!=typeof Z)return!1;try{e=new Z(e=[1,3.14,-3.14,65536,65537]),n=e,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===T(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")};var B,X={uint16:C,uint8:L};(B=new X.uint16(1))[0]=4660;var Y,z,D=52===new X.uint8(B.buffer)[0];!0===D?(Y=1,z=0):(Y=0,z=1);var J={HIGH:Y,LOW:z},K=new G(1),Q=new F(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return K[0]=e,r[0]=Q[rr],r[1]=Q[er],r}function tr(r,e){return 1===arguments.length?nr([0,0],r):nr(r,e)}var ir=!0===D?0:1,ar=new G(1),or=new F(ar.buffer);function ur(r,e){return ar[0]=r,or[ir]=e>>>0,ar[0]}function cr(r){return 0|r}var fr,lr,sr=!0===D?1:0,pr=new G(1),gr=new F(pr.buffer);function yr(r){return pr[0]=r,gr[sr]}!0===D?(fr=1,lr=0):(fr=0,lr=1);var hr={HIGH:fr,LOW:lr},dr=new G(1),vr=new F(dr.buffer),wr=hr.HIGH,mr=hr.LOW;function br(r,e){return vr[wr]=r,vr[mr]=e,dr[0]}var Ar=[0,0];function Er(r,e){var n,t;return tr(Ar,r),n=Ar[0],n&=2147483647,t=yr(e),br(n|=t&=2147483648,Ar[1])}var _r=!0===D?1:0,Sr=new G(1),jr=new F(Sr.buffer);function Ur(r,e){return Sr[0]=r,jr[_r]=e>>>0,Sr[0]}var Tr=1023,xr=1048576,Ir=[1,1.5],Or=[0,.5849624872207642],Vr=[0,1.350039202129749e-8];function Fr(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function kr(r,e,n,t){return l(r)||w(r)?(e[t]=r,e[t+n]=0,e):0!==r&&b(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Fr((function(r){return kr(r,[0,0],1,0)}),"assign",kr);var Nr=[0,0],Pr=[0,0];function $r(r,e){var n,t;return 0===e||0===r||l(r)||w(r)?r:(kr(r,Nr,1,0),e+=Nr[1],e+=function(r){var e=yr(r);return(e=(2146435072&e)>>>20)-Tr|0}(r=Nr[0]),e<-1074?Er(0,r):e>1023?r<0?v:h:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,tr(Pr,r),n=Pr[0],n&=2148532223,t*br(n|=e+Tr<<20,Pr[1])))}var Gr=2147483647,Rr=1048575,Hr=1048576,Wr=2147483647,Cr=1083179008,Lr=1e300,Mr=1e-300,Zr=[0,0],qr=[0,0];function Br(r,e){var n,t,i,a,o,u,c,f,s,g,d,A,E,_;if(l(r)||l(e))return NaN;if(tr(Zr,e),o=Zr[0],0===Zr[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return m(r);if(-.5===e)return 1/m(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(w(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:b(r)<1==(e===h)?0:h}(r,e)}if(tr(Zr,r),a=Zr[0],0===Zr[1]){if(0===a)return function(r,e){return e===v?h:e===h?0:e>0?y(e)?r:0:y(e)?Er(h,r):h}(r,e);if(1===r)return 1;if(-1===r&&y(e))return-1;if(w(r))return r===v?Br(-0,-e):e<0?0:h}if(r<0&&!1===p(e))return(r-r)/(r-r);if(i=b(r),n=a&Wr|0,t=o&Wr|0,c=o>>>31|0,u=(u=a>>>31|0)&&y(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&yr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*Lr*Lr:u*Mr*Mr;if(n>1072693248)return 0===c?u*Lr*Lr:u*Mr*Mr;d=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ur(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(qr,i)}else d=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g,y,h,d,v,w,m,b,A,E,_;return b=0,n<xr&&(b-=53,n=yr(e*=9007199254740992)),b+=(n>>20)-Tr|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,b+=1,n-=xr),o=ur(i=(w=(e=Ur(e,n))-(f=Ir[E]))*(m=1/(e+f)),0),t=524288+(n>>1|536870912),c=Ur(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=ur(c=3+(a=o*o)+(v+=(u=m*(w-o*c-o*(e-(c-f))))*(o+i)),0),h=(g=-7.028461650952758e-9*(s=ur(s=(w=o*c)+(m=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(m-(s-w))+Vr[E])-((y=ur(y=(p=.9617967009544373*s)+g+(l=Or[E])+(d=b),0))-d-l-p),r[0]=y,r[1]=h,r}(qr,i,n);if(g=(e-(f=ur(e,0)))*d[0]+e*d[1],s=f*d[0],tr(Zr,A=g+s),E=cr(Zr[0]),_=cr(Zr[1]),E>=Cr){if(0!=(E-Cr|_))return u*Lr*Lr;if(g+8008566259537294e-32>A-s)return u*Lr*Lr}else if((E&Wr)>=1083231232){if(0!=(E-3230714880|_))return u*Mr*Mr;if(g<=A-s)return u*Mr*Mr}return A=function(r,e,n){var t,i,a,o,u,c,f,l,s,p;return s=((l=r&Gr|0)>>20)-Tr|0,f=0,l>1071644672&&(i=Ur(0,((f=r+(Hr>>s+1)>>>0)&~(Rr>>(s=((f&Gr)>>20)-Tr|0)))>>>0),f=(f&Rr|Hr)>>20-s>>>0,r<0&&(f=-f),e-=i),r=cr(r=yr(c=1-((c=(a=.6931471824645996*(i=ur(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?$r(c,f):Ur(c,r)}(E,s,g),u*A}function Xr(r){return"number"==typeof r}function Yr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function zr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+Yr(i):Yr(i)+r,t&&(r="-"+r)),r}var Dr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function Kr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Xr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=zr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=zr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Jr.call(r.specifier)?Jr.call(n):Dr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Qr(r){return"string"==typeof r}var re=Math.abs,ee=String.prototype.toLowerCase,ne=String.prototype.toUpperCase,te=String.prototype.replace,ie=/e\+(\d)$/,ae=/e-(\d)$/,oe=/^(\d+)$/,ue=/^(\d+)e/,ce=/\.0$/,fe=/\.0*e/,le=/(\..*[^0])0*e/;function se(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Xr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":re(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=te.call(n,le,"$1e"),n=te.call(n,fe,"e"),n=te.call(n,ce,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=te.call(n,ie,"e+0$1"),n=te.call(n,ae,"e-0$1"),r.alternate&&(n=te.call(n,oe,"$1."),n=te.call(n,ue,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ne.call(r.specifier)?ne.call(n):ee.call(n)}function pe(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function ge(r,e,n){var t=e-r.length;return t<0?r:r=n?r+pe(t):pe(t)+r}var ye=String.fromCharCode,he=isNaN,de=Array.isArray;function ve(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function we(r){var e,n,t,i,a,o,u,c,f;if(!de(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(Qr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=ve(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,he(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,he(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Kr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!he(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=he(a)?String(t.arg):ye(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=se(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=zr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ge(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function be(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ae(r){var e,n,t,i;for(n=[],i=0,t=me.exec(r);t;)(e=r.slice(i,me.lastIndex-t[0].length)).length&&n.push(e),n.push(be(t)),i=me.lastIndex,t=me.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Ee(r){return"string"==typeof r}function _e(r){var e,n,t;if(!Ee(r))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ae(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return we.apply(null,n)}function Se(r){return r>>>0}var je=Se(31),Ue=Se(31);function Te(r){return"number"==typeof r}var xe=d.prototype.toString,Ie=E();function Oe(r){return"object"==typeof r&&(r instanceof d||(Ie?function(r){try{return xe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===T(r)))}function Ve(r){return Te(r)||Oe(r)}function Fe(r){return r<h&&r>v&&p(r)}function ke(r){return Te(r)&&Fe(r)}function Ne(r){return Oe(r)&&Fe(r.valueOf())}function Pe(r){return ke(r)||Ne(r)}function $e(r){return ke(r)&&r>=0}function Ge(r){return Ne(r)&&r.valueOf()>=0}function Re(r){return $e(r)||Ge(r)}function He(r){return"string"==typeof r}Fr(Ve,"isPrimitive",Te),Fr(Ve,"isObject",Oe),Fr(Pe,"isPrimitive",ke),Fr(Pe,"isObject",Ne),Fr(Re,"isPrimitive",$e),Fr(Re,"isObject",Ge);var We=String.prototype.valueOf,Ce=E();function Le(r){return"object"==typeof r&&(r instanceof String||(Ce?function(r){try{return We.call(r),!0}catch(r){return!1}}(r):"[object String]"===T(r)))}function Me(r){return He(r)||Le(r)}Fr(Me,"isPrimitive",He),Fr(Me,"isObject",Le);var Ze=9007199254740991;function qe(r,e){var n,t;if(!He(r))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",r));if(!$e(e))throw new TypeError(_e("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>Ze)throw new RangeError(_e("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n}var Be=Math.ceil,Xe={};return f(Xe,"fromBinaryStringUint32",(function(r){var e,n;if(32!==r.length)throw new Error(_e("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=Br(2,32-n-1));return e>>>0})),f(Xe,"rotl32",(function(r,e){return Se(r<<(e&=je)|r>>>(-e&je))})),f(Xe,"rotr32",(function(r,e){return Se(r>>>(e&=Ue)|r<<(-e&Ue))})),f(Xe,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,n,t="";for(e=32;r>0&&e;)t=(n=r/2)===(r=s(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!He(r))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",r));if(!$e(e))throw new TypeError(_e("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!He(i=n))throw new TypeError(_e("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>Ze)throw new RangeError(_e("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:qe(i,t=Be(t))+r}(e,32,"0"),e})),f(Xe,"uint32ToInt32",cr),Xe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
