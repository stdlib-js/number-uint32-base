// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,e=Object.prototype,t=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;var c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,c){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(o.call(r,n)||u.call(r,n)?(f=r.__proto__,r.__proto__=e,delete r[n],r[n]=c.value,r.__proto__=f):r[n]=c.value),s="get"in c,p="set"in c,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,n,c.get),p&&a&&a.call(r,n,c.set),r};function f(r,n,e){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r){return r!=r}var s=Math.floor;function p(r){return s(r)===r}function g(r){return p(r/2)}function v(r){return g(r>0?r-1:r+1)}var y=Number.POSITIVE_INFINITY,h=Number,d=h.NEGATIVE_INFINITY;function w(r){return r===y||r===d}var m=Math.sqrt;function b(r){return Math.abs(r)}function A(r,n,e){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function S(){return E&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var j="function"==typeof Symbol?Symbol.toStringTag:"";var I=S()?function(r){var n,e,t,i,a;if(null==r)return _.call(r);e=r[j],a=j,n=null!=(i=r)&&U.call(i,a);try{r[j]=void 0}catch(n){return _.call(r)}return t=_.call(r),n?r[j]=e:delete r[j],t}:function(r){return _.call(r)},x="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var T,V="function"==typeof Uint32Array?Uint32Array:void 0;T=function(){var r,n,e;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(x&&e instanceof Uint32Array||"[object Uint32Array]"===I(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var F=T,k="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var P,$="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,n,e;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),e=n,r=(k&&e instanceof Float64Array||"[object Float64Array]"===I(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var G=P,R="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var W,C="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,e;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),e=n,r=(R&&e instanceof Uint8Array||"[object Uint8Array]"===I(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var L=W,M="function"==typeof Uint16Array;var Z="function"==typeof Uint16Array?Uint16Array:null;var B,q="function"==typeof Uint16Array?Uint16Array:void 0;B=function(){var r,n,e;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),e=n,r=(M&&e instanceof Uint16Array||"[object Uint16Array]"===I(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:B,uint8:L};(X=new Y.uint16(1))[0]=4660;var z,D,J=52===new Y.uint8(X.buffer)[0];!0===J?(z=1,D=0):(z=0,D=1);var K={HIGH:z,LOW:D},Q=new G(1),rr=new F(Q.buffer),nr=K.HIGH,er=K.LOW;function tr(r,n,e,t){return Q[0]=r,n[t]=rr[nr],n[t+e]=rr[er],n}function ir(r){return tr(r,[0,0],1,0)}A(ir,"assign",tr);var ar=!0===J?0:1,or=new G(1),ur=new F(or.buffer);function cr(r,n){return or[0]=r,ur[ar]=n>>>0,or[0]}function fr(r){return 0|r}var lr,sr,pr=!0===J?1:0,gr=new G(1),vr=new F(gr.buffer);function yr(r){return gr[0]=r,vr[pr]}!0===J?(lr=1,sr=0):(lr=0,sr=1);var hr={HIGH:lr,LOW:sr},dr=new G(1),wr=new F(dr.buffer),mr=hr.HIGH,br=hr.LOW;function Ar(r,n){return wr[mr]=r,wr[br]=n,dr[0]}var Er=[0,0];function Sr(r,n){var e,t;return ir.assign(r,Er,1,0),e=Er[0],e&=2147483647,t=yr(n),Ar(e|=t&=2147483648,Er[1])}var _r=!0===J?1:0,Ur=new G(1),jr=new F(Ur.buffer);function Ir(r,n){return Ur[0]=r,jr[_r]=n>>>0,Ur[0]}var xr=[1,1.5],Or=[0,.5849624872207642],Tr=[0,1.350039202129749e-8];function Vr(r,n,e,t){return l(r)||w(r)?(n[t]=r,n[t+e]=0,n):0!==r&&b(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}A((function(r){return Vr(r,[0,0],1,0)}),"assign",Vr);var Fr=[0,0],kr=[0,0];function Nr(r,n){var e,t;return 0===n||0===r||l(r)||w(r)?r:(Vr(r,Fr,1,0),n+=Fr[1],n+=function(r){var n=yr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Fr[0]),n<-1074?Sr(0,r):n>1023?r<0?d:y:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,ir.assign(r,kr,1,0),e=kr[0],e&=2148532223,t*Ar(e|=n+1023<<20,kr[1])))}var Pr=1e300,$r=1e-300,Gr=[0,0],Rr=[0,0];function Hr(r,n){var e,t,i,a,o,u,c,f,s,g,h,A,E,S;if(l(r)||l(n))return NaN;if(ir.assign(n,Gr,1,0),o=Gr[0],0===Gr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:b(r)<1==(n===y)?0:y}(r,n)}if(ir.assign(r,Gr,1,0),a=Gr[0],0===Gr[1]){if(0===a)return function(r,n){return n===d?y:n===y?0:n>0?v(n)?r:0:v(n)?Sr(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&v(n))return-1;if(w(r))return r===d?Hr(-0,-n):n<0?0:y}if(r<0&&!1===p(n))return(r-r)/(r-r);if(i=b(r),e=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&v(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&yr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===c?u*Pr*Pr:u*$r*$r;if(e>1072693248)return 0===c?u*Pr*Pr:u*$r*$r;h=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=cr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Rr,i)}else h=function(r,n,e){var t,i,a,o,u,c,f,l,s,p,g,v,y,h,d,w,m,b,A,E,S;return b=0,e<1048576&&(b-=53,e=yr(n*=9007199254740992)),b+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?E=0:A<767610?E=1:(E=0,b+=1,e-=1048576),o=cr(i=(w=(n=Ir(n,e))-(f=xr[E]))*(m=1/(n+f)),0),t=524288+(e>>1|536870912),c=Ir(0,t+=E<<18),d=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=cr(c=3+(a=o*o)+(d+=(u=m*(w-o*c-o*(n-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(s=cr(s=(w=o*c)+(m=u*c+(d-(c-3-a))*i),0))+.9617966939259756*(m-(s-w))+Tr[E])-((v=cr(v=(p=.9617967009544373*s)+g+(l=Or[E])+(h=b),0))-h-l-p),r[0]=v,r[1]=y,r}(Rr,i,e);if(A=(g=(n-(f=cr(n,0)))*h[0]+n*h[1])+(s=f*h[0]),ir.assign(A,Gr,1,0),E=fr(Gr[0]),S=fr(Gr[1]),E>=1083179008){if(0!=(E-1083179008|S))return u*Pr*Pr;if(g+8008566259537294e-32>A-s)return u*Pr*Pr}else if((2147483647&E)>=1083231232){if(0!=(E-3230714880|S))return u*$r*$r;if(g<=A-s)return u*$r*$r}return A=function(r,n,e){var t,i,a,o,u,c,f,l,s,p,g;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(t=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),n-=a=Ir(0,t)),r=fr(r=yr(f=1-((f=(o=.6931471824645996*(a=cr(a=e+n,0)))+(u=.6931471805599453*(e-(a-n))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?Nr(f,l):Ir(f,r)}(E,s,g),u*A}function Wr(r){return"number"==typeof r}function Cr(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function Lr(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+Cr(i):Cr(i)+r,t&&(r="-"+r)),r}var Mr=String.prototype.toLowerCase,Zr=String.prototype.toUpperCase;function Br(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!Wr(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=Lr(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=Lr(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===Zr.call(r.specifier)?Zr.call(e):Mr.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function qr(r){return"string"==typeof r}var Xr=Math.abs,Yr=String.prototype.toLowerCase,zr=String.prototype.toUpperCase,Dr=String.prototype.replace,Jr=/e\+(\d)$/,Kr=/e-(\d)$/,Qr=/^(\d+)$/,rn=/^(\d+)e/,nn=/\.0$/,en=/\.0*e/,tn=/(\..*[^0])0*e/;function an(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!Wr(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":Xr(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=Dr.call(e,tn,"$1e"),e=Dr.call(e,en,"e"),e=Dr.call(e,nn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Dr.call(e,Jr,"e+0$1"),e=Dr.call(e,Kr,"e-0$1"),r.alternate&&(e=Dr.call(e,Qr,"$1."),e=Dr.call(e,rn,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===zr.call(r.specifier)?zr.call(e):Yr.call(e)}function on(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function un(r,n,e){var t=n-r.length;return t<0?r:r=e?r+on(t):on(t)+r}var cn=String.fromCharCode,fn=isNaN,ln=Array.isArray;function sn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function pn(r){var n,e,t,i,a,o,u,c,f;if(!ln(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(qr(t=r[c]))o+=t;else{if(n=void 0!==t.precision,!(t=sn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,fn(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,fn(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=Br(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!fn(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=fn(a)?String(t.arg):cn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=an(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Lr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=un(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var gn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function yn(r){var n,e,t,i;for(e=[],i=0,t=gn.exec(r);t;)(n=r.slice(i,gn.lastIndex-t[0].length)).length&&e.push(n),e.push(vn(t)),i=gn.lastIndex,t=gn.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function hn(r){return"string"==typeof r}function dn(r){var n,e,t;if(!hn(r))throw new TypeError(dn("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=yn(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return pn.apply(null,e)}function wn(r){var n,e;if(32!==r.length)throw new Error(dn("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,e=0;e<r.length;e++)"1"===r[e]&&(n+=Hr(2,32-e-1));return n>>>0}function mn(r){return r>>>0}var bn=mn(31);function An(r,n){return mn(r<<(n&=bn)|r>>>(-n&bn))}var En=mn(31);function Sn(r,n){return mn(r>>>(n&=En)|r<<(-n&En))}function _n(r){return"number"==typeof r}var Un=h.prototype.toString;var jn=S();function In(r){return"object"==typeof r&&(r instanceof h||(jn?function(r){try{return Un.call(r),!0}catch(r){return!1}}(r):"[object Number]"===I(r)))}function xn(r){return _n(r)||In(r)}function On(r){return r<y&&r>d&&p(r)}function Tn(r){return _n(r)&&On(r)}function Vn(r){return In(r)&&On(r.valueOf())}function Fn(r){return Tn(r)||Vn(r)}function kn(r){return Tn(r)&&r>=0}function Nn(r){return Vn(r)&&r.valueOf()>=0}function Pn(r){return kn(r)||Nn(r)}function $n(r){return"string"==typeof r}A(xn,"isPrimitive",_n),A(xn,"isObject",In),A(Fn,"isPrimitive",Tn),A(Fn,"isObject",Vn),A(Pn,"isPrimitive",kn),A(Pn,"isObject",Nn);var Gn=String.prototype.valueOf;var Rn=S();function Hn(r){return"object"==typeof r&&(r instanceof String||(Rn?function(r){try{return Gn.call(r),!0}catch(r){return!1}}(r):"[object String]"===I(r)))}function Wn(r){return $n(r)||Hn(r)}A(Wn,"isPrimitive",$n),A(Wn,"isObject",Hn);function Cn(r,n){var e,t;if(!$n(r))throw new TypeError(dn("invalid argument. First argument must be a string. Value: `%s`.",r));if(!kn(n))throw new TypeError(dn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(0===r.length||0===n)return"";if(r.length*n>9007199254740991)throw new RangeError(dn("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*n));for(e="",t=n;1==(1&t)&&(e+=r),0!==(t>>>=1);)r+=r;return e}var Ln=Math.ceil;function Mn(r){var n;return n=function(r){var n,e,t="";for(n=32;r>0&&n;)t=(e=r/2)===(r=s(e))?"0"+t:"1"+t,n-=1;return t}(r),n=function(r,n,e){var t,i;if(!$n(r))throw new TypeError(dn("invalid argument. First argument must be a string. Value: `%s`.",r));if(!kn(n))throw new TypeError(dn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!$n(i=e))throw new TypeError(dn("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(n>9007199254740991)throw new RangeError(dn("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return(t=(n-r.length)/i.length)<=0?r:Cn(i,t=Ln(t))+r}(n,32,"0"),n}var Zn={};f(Zn,"fromBinaryStringUint32",wn),f(Zn,"rotl32",An),f(Zn,"rotr32",Sn),f(Zn,"toBinaryStringUint32",Mn),f(Zn,"uint32ToInt32",fr);export{Zn as default,wn as fromBinaryStringUint32,An as rotl32,Sn as rotr32,Mn as toBinaryStringUint32,fr as uint32ToInt32};
//# sourceMappingURL=mod.js.map
