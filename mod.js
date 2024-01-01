// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,g,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function A(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+A(e):A(e)+r}var S=String.fromCharCode,_=isNaN,U=Array.isArray;function j(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function I(r){var n,t,e,a,o,f,l,s,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=j(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,t,e,i;for(t=[],i=0,e=O.exec(r);e;)(n=r.slice(i,O.lastIndex-e[0].length)).length&&t.push(n),t.push(x(e)),i=O.lastIndex,e=O.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function F(r){return"string"==typeof r}function k(r){var n,t,e;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=T(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return I.apply(null,t)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,n)||H.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,n,t.get),o&&$&&$.call(r,n,t.set),r};function W(r,n,t){R(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function B(r){return Z(r>0?r-1:r+1)}var q=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===q||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,n,t){R(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof er?er.toStringTag:"";var ar=rr()?function(r){var n,t,e,i,a;if(null==r)return nr.call(r);t=r[ir],a=ir,n=null!=(i=r)&&tr.call(i,a);try{r[ir]=void 0}catch(n){return nr.call(r)}return e=nr.call(r),n?r[ir]=t:delete r[ir],e}:function(r){return nr.call(r)},or="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var cr,fr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,n,t;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(or&&t instanceof Uint32Array||"[object Uint32Array]"===ar(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr=cr,sr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var gr,vr="function"==typeof Float64Array?Float64Array:void 0;gr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===ar(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr=gr,hr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,br="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===ar(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr=wr,Ar="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null;var Sr,_r="function"==typeof Uint16Array?Uint16Array:void 0;Sr=function(){var r,n,t;if("function"!=typeof Er)return!1;try{n=new Er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===ar(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Ur,jr={uint16:Sr,uint8:mr};(Ur=new jr.uint16(1))[0]=4660;var Ir,Or,xr=52===new jr.uint8(Ur.buffer)[0];!0===xr?(Ir=1,Or=0):(Ir=0,Or=1);var Tr={HIGH:Ir,LOW:Or},Fr=new yr(1),kr=new lr(Fr.buffer),Vr=Tr.HIGH,Nr=Tr.LOW;function Pr(r,n,t,e){return Fr[0]=r,n[e]=kr[Vr],n[e+t]=kr[Nr],n}function $r(r){return Pr(r,[0,0],1,0)}K($r,"assign",Pr);var Gr=!0===xr?0:1,Hr=new yr(1),Rr=new lr(Hr.buffer);function Wr(r,n){return Hr[0]=r,Rr[Gr]=n>>>0,Hr[0]}function Cr(r){return 0|r}var Lr,Mr,Zr=!0===xr?1:0,Br=new yr(1),qr=new lr(Br.buffer);function Xr(r){return Br[0]=r,qr[Zr]}!0===xr?(Lr=1,Mr=0):(Lr=0,Mr=1);var Yr={HIGH:Lr,LOW:Mr},zr=new yr(1),Dr=new lr(zr.buffer),Jr=Yr.HIGH,Kr=Yr.LOW;function Qr(r,n){return Dr[Jr]=r,Dr[Kr]=n,zr[0]}var rn=[0,0];function nn(r,n){var t,e;return $r.assign(r,rn,1,0),t=rn[0],t&=2147483647,e=Xr(n),Qr(t|=e&=2147483648,rn[1])}var tn=!0===xr?1:0,en=new yr(1),an=new lr(en.buffer);function on(r,n){return en[0]=r,an[tn]=n>>>0,en[0]}var un=[1,1.5],cn=[0,.5849624872207642],fn=[0,1.350039202129749e-8];function ln(r,n,t,e){return C(r)||z(r)?(n[e]=r,n[e+t]=0,n):0!==r&&J(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}K((function(r){return ln(r,[0,0],1,0)}),"assign",ln);var sn=[0,0],pn=[0,0];function gn(r,n){var t,e;return 0===n||0===r||C(r)||z(r)?r:(ln(r,sn,1,0),n+=sn[1],n+=function(r){var n=Xr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=sn[0]),n<-1074?nn(0,r):n>1023?r<0?Y:q:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$r.assign(r,pn,1,0),t=pn[0],t&=2148532223,e*Qr(t|=n+1023<<20,pn[1])))}var vn=1e300,yn=1e-300,hn=[0,0],dn=[0,0];function wn(r,n){var t,e,i,a,o,u,c,f,l,s,p,g,v,y;if(C(r)||C(n))return NaN;if($r.assign(n,hn,1,0),o=hn[0],0===hn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return D(r);if(-.5===n)return 1/D(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(z(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(n===q)?0:q}(r,n)}if($r.assign(r,hn,1,0),a=hn[0],0===hn[1]){if(0===a)return function(r,n){return n===Y?q:n===q?0:n>0?B(n)?r:0:B(n)?nn(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&B(n))return-1;if(z(r))return r===Y?wn(-0,-n):n<0?0:q}if(r<0&&!1===M(n))return(r-r)/(r-r);if(i=J(r),t=2147483647&a|0,e=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&B(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Xr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?u*vn*vn:u*yn*yn;if(t>1072693248)return 0===c?u*vn*vn:u*yn*yn;p=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Wr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(dn,i)}else p=function(r,n,t){var e,i,a,o,u,c,f,l,s,p,g,v,y,h,d,w,b,m,A,E,S;return m=0,t<1048576&&(m-=53,t=Xr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=1048576),o=Wr(i=(w=(n=on(n,t))-(f=un[E]))*(b=1/(n+f)),0),e=524288+(t>>1|536870912),c=on(0,e+=E<<18),d=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=Wr(c=3+(a=o*o)+(d+=(u=b*(w-o*c-o*(n-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(s=Wr(s=(w=o*c)+(b=u*c+(d-(c-3-a))*i),0))+.9617966939259756*(b-(s-w))+fn[E])-((v=Wr(v=(p=.9617967009544373*s)+g+(l=cn[E])+(h=m),0))-h-l-p),r[0]=v,r[1]=y,r}(dn,i,t);if(g=(s=(n-(f=Wr(n,0)))*p[0]+n*p[1])+(l=f*p[0]),$r.assign(g,hn,1,0),v=Cr(hn[0]),y=Cr(hn[1]),v>=1083179008){if(0!=(v-1083179008|y))return u*vn*vn;if(s+8008566259537294e-32>g-l)return u*vn*vn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|y))return u*yn*yn;if(s<=g-l)return u*yn*yn}return g=function(r,n,t){var e,i,a,o,u,c,f,l,s,p,g;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),n-=a=on(0,e)),r=Cr(r=Xr(f=1-((f=(o=.6931471824645996*(a=Wr(a=t+n,0)))+(u=.6931471805599453*(t-(a-n))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?gn(f,l):on(f,r)}(v,l,s),u*g}function bn(r){var n,t;if(32!==r.length)throw new Error(k("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=wn(2,32-t-1));return n>>>0}function mn(r){return r>>>0}var An=mn(31);function En(r,n){return mn(r<<(n&=An)|r>>>(-n&An))}var Sn=mn(31);function _n(r,n){return mn(r>>>(n&=Sn)|r<<(-n&Sn))}function Un(r){return"number"==typeof r}var jn=X.prototype.toString;var In=rr();function On(r){return"object"==typeof r&&(r instanceof X||(In?function(r){try{return jn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ar(r)))}function xn(r){return Un(r)||On(r)}function Tn(r){return r<q&&r>Y&&M(r)}function Fn(r){return Un(r)&&Tn(r)}function kn(r){return On(r)&&Tn(r.valueOf())}function Vn(r){return Fn(r)||kn(r)}function Nn(r){return Fn(r)&&r>=0}function Pn(r){return kn(r)&&r.valueOf()>=0}function $n(r){return Nn(r)||Pn(r)}function Gn(r){return"string"==typeof r}K(xn,"isPrimitive",Un),K(xn,"isObject",On),K(Vn,"isPrimitive",Fn),K(Vn,"isObject",kn),K($n,"isPrimitive",Nn),K($n,"isObject",Pn);var Hn=String.prototype.valueOf;var Rn=rr();function Wn(r){return"object"==typeof r&&(r instanceof String||(Rn?function(r){try{return Hn.call(r),!0}catch(r){return!1}}(r):"[object String]"===ar(r)))}function Cn(r){return Gn(r)||Wn(r)}K(Cn,"isPrimitive",Gn),K(Cn,"isObject",Wn);var Ln=void 0!==String.prototype.repeat;var Mn=String.prototype.repeat;var Zn=Ln?function(r,n){return Mn.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t},Bn=Math.ceil;function qn(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=Bn(e),Zn(t,e)+r)}function Xn(r){var n;return n=function(r){var n,t,e="";for(n=32;r>0&&n;)e=(t=r/2)===(r=L(t))?"0"+e:"1"+e,n-=1;return e}(r),n=function(r,n,t){var e;if(!Gn(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Nn(n))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!Gn(e=t))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>9007199254740991)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return qn(r,n,e)}(n,32,"0"),n}var Yn={};W(Yn,"fromBinaryStringUint32",bn),W(Yn,"rotl32",En),W(Yn,"rotr32",_n),W(Yn,"toBinaryStringUint32",Xn),W(Yn,"uint32ToInt32",Cr);export{Yn as default,bn as fromBinaryStringUint32,En as rotl32,_n as rotr32,Xn as toBinaryStringUint32,Cr as uint32ToInt32};
//# sourceMappingURL=mod.js.map
