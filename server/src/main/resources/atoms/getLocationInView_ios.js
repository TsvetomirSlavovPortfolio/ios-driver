function(){return function(){function g(a){throw a;}var k=void 0,l=!0,m=null,n=!1;function p(a){return function(){return this[a]}}function aa(a){return function(){return a}}var q=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function t(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c};function v(a){Error.captureStackTrace?Error.captureStackTrace(this,v):this.stack=Error().stack||"";a&&(this.message=String(a))}t(v,Error);v.prototype.name="CustomError";function ca(a,b){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a}
function da(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var u=d[h]||"",x=e[h]||"",r=RegExp("(\\d*)(\\D*)","g"),L=RegExp("(\\d*)(\\D*)","g");do{var A=r.exec(u)||["","",""],B=L.exec(x)||["","",""];if(0==A[0].length&&0==B[0].length)break;c=((0==A[1].length?0:parseInt(A[1],10))<(0==B[1].length?0:parseInt(B[1],10))?-1:(0==A[1].length?0:parseInt(A[1],10))>(0==B[1].length?
0:parseInt(B[1],10))?1:0)||((0==A[2].length)<(0==B[2].length)?-1:(0==A[2].length)>(0==B[2].length)?1:0)||(A[2]<B[2]?-1:A[2]>B[2]?1:0)}while(0==c)}return c};function ea(a,b){b.unshift(a);v.call(this,ca.apply(m,b));b.shift();this.$=a}t(ea,v);ea.prototype.name="AssertionError";function fa(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);g(new ea(""+e,f||[]))}function ga(a,b,c){a||fa("",m,b,Array.prototype.slice.call(arguments,2))}function ha(a,b,c){var d=typeof a;"object"==d&&a!=m||"function"==d||fa("Expected object but got %s: %s.",[ba(a),a],b,Array.prototype.slice.call(arguments,2))};var ia=Array.prototype;function w(a,b){for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(k,d[e],e,a)}function ja(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;w(a,function(c,f){d=b.call(k,d,c,f,a)});return d}function ka(a,b){for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(k,d[e],e,a))return l;return n}function la(a){return ia.concat.apply(ia,arguments)}function ma(a,b,c){ga(a.length!=m);return 2>=arguments.length?ia.slice.call(a,b):ia.slice.call(a,b,c)};function na(a,b){this.code=a;this.message=b||"";this.name=oa[a]||oa[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}t(na,Error);
var oa={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
na.prototype.toString=function(){return this.name+": "+this.message};function y(){return q.navigator?q.navigator.userAgent:m}var pa,qa="",ra=/WebKit\/(\S+)/.exec(y());pa=qa=ra?ra[1]:"";var sa={};var ta;function z(a,b){this.x=a!==k?a:0;this.y=b!==k?b:0}z.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function C(a,b){this.width=a;this.height=b}C.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};C.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};C.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};C.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ua(a){return a?new va(D(a)):ta||(ta=new va)}function wa(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function xa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?ya(a,b):!c&&wa(e,b)?-1*za(a,b):!d&&wa(f,a)?za(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=D(a);c=d.createRange();c.selectNode(a);c.collapse(l);d=d.createRange();d.selectNode(b);
d.collapse(l);return c.compareBoundaryPoints(q.Range.START_TO_END,d)}function za(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return ya(d,a)}function ya(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1}function D(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function va(a){this.C=a||q.document||document}
function Aa(a){var b=a.C;a=b.body;b=b.parentWindow||b.defaultView;return new z(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)}va.prototype.contains=wa;var Ba,Ca,Da,Ea,Fa,Ga,Ha;Ha=Ga=Fa=Ea=Da=Ca=Ba=n;var E=y();E&&(-1!=E.indexOf("Firefox")?Ba=l:-1!=E.indexOf("Camino")?Ca=l:-1!=E.indexOf("iPhone")||-1!=E.indexOf("iPod")?Da=l:-1!=E.indexOf("iPad")?Ea=l:-1!=E.indexOf("Android")?Fa=l:-1!=E.indexOf("Chrome")?Ga=l:-1!=E.indexOf("Safari")&&(Ha=l));var Ia=Ba,Ja=Ca,Ka=Da,La=Ea,Ma=Fa,Na=Ga,Oa=Ha;function F(a,b,c){this.g=a;this.Y=b||1;this.f=c||1};function G(a){var b=m,c=a.nodeType;1==c&&(b=a.textContent,b=b==k||b==m?a.innerText:b,b=b==k||b==m?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}function H(a,b,c){if(b===m)return l;try{if(!a.getAttribute)return n}catch(d){return n}return c==m?!!a.getAttribute(b):a.getAttribute(b,2)==c}
function I(a,b,c,d,e){return Pa.call(m,a,b,s(c)?c:m,s(d)?d:m,e||new J)}function Pa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),w(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),w(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof K?Qa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),w(b,function(a){H(a,c,d)&&e.add(a)}));return e}
function Ra(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.matches(b)&&e.add(b);return e}function Qa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.matches(b)&&e.add(b),Qa(a,b,c,d,e)};function J(){this.f=this.d=m;this.r=0}function Sa(a){this.o=a;this.next=this.n=m}function Ta(a,b){if(a.d){if(!b.d)return a}else return b;for(var c=a.d,d=b.d,e=m,f=m,h=0;c&&d;)c.o==d.o?(f=c,c=c.next,d=d.next):0<xa(c.o,d.o)?(f=d,d=d.next):(f=c,c=c.next),(f.n=e)?e.next=f:a.d=f,e=f,h++;for(f=c||d;f;)f.n=e,e=e.next=f,h++,f=f.next;a.f=e;a.r=h;return a}J.prototype.unshift=function(a){a=new Sa(a);a.next=this.d;this.f?this.d.n=a:this.d=this.f=a;this.d=a;this.r++};
J.prototype.add=function(a){a=new Sa(a);a.n=this.f;this.d?this.f.next=a:this.d=this.f=a;this.f=a;this.r++};function Ua(a){return(a=a.d)?a.o:m}J.prototype.l=p("r");function Va(a){return(a=Ua(a))?G(a):""}function M(a,b){return new Wa(a,!!b)}function Wa(a,b){this.V=a;this.H=(this.t=b)?a.f:a.d;this.D=m}Wa.prototype.next=function(){var a=this.H;if(a==m)return m;var b=this.D=a;this.H=this.t?a.n:a.next;return b.o};
Wa.prototype.remove=function(){var a=this.V,b=this.D;b||g(Error("Next must be called at least once before remove."));var c=b.n,b=b.next;c?c.next=b:a.d=b;b?b.n=c:a.f=c;a.r--;this.D=m};function N(a){this.c=a;this.e=this.h=n;this.s=m}N.prototype.b=p("h");function Xa(a,b){a.h=b}function Ya(a,b){a.e=b}N.prototype.j=p("s");function O(a,b){var c=a.evaluate(b);return c instanceof J?+Va(c):+c}function P(a,b){var c=a.evaluate(b);return c instanceof J?Va(c):""+c}function Q(a,b){var c=a.evaluate(b);return c instanceof J?!!c.l():!!c};function Za(a,b,c){N.call(this,a.c);this.G=a;this.L=b;this.P=c;this.h=b.b()||c.b();this.e=b.e||c.e;this.G==$a&&(!c.e&&!c.b()&&4!=c.c&&0!=c.c&&b.j()?this.s={name:b.j().name,q:c}:!b.e&&(!b.b()&&4!=b.c&&0!=b.c&&c.j())&&(this.s={name:c.j().name,q:b}))}t(Za,N);
function R(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var f;if(b instanceof J&&c instanceof J){f=M(b);for(b=f.next();b;b=f.next()){e=M(c);for(d=e.next();d;d=e.next())if(a(G(b),G(d)))return l}return n}if(b instanceof J||c instanceof J){b instanceof J?e=b:(e=c,c=b);e=M(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":f=+G(d);break;case "boolean":f=!!G(d);break;case "string":f=G(d);break;default:g(Error("Illegal primitive type for comparison."))}if(a(f,c))return l}return n}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Za.prototype.evaluate=function(a){return this.G.k(this.L,this.P,a)};Za.prototype.toString=function(a){a=a||"";var b=a+"binary expression: "+this.G+"\n";a+="  ";b+=this.L.toString(a)+"\n";return b+=this.P.toString(a)};function ab(a,b,c,d){this.X=a;this.aa=b;this.c=c;this.k=d}ab.prototype.toString=p("X");var bb={};
function S(a,b,c,d){a in bb&&g(Error("Binary operator already created: "+a));a=new ab(a,b,c,d);return bb[a.toString()]=a}S("div",6,1,function(a,b,c){return O(a,c)/O(b,c)});S("mod",6,1,function(a,b,c){return O(a,c)%O(b,c)});S("*",6,1,function(a,b,c){return O(a,c)*O(b,c)});S("+",5,1,function(a,b,c){return O(a,c)+O(b,c)});S("-",5,1,function(a,b,c){return O(a,c)-O(b,c)});S("<",4,2,function(a,b,c){return R(function(a,b){return a<b},a,b,c)});
S(">",4,2,function(a,b,c){return R(function(a,b){return a>b},a,b,c)});S("<=",4,2,function(a,b,c){return R(function(a,b){return a<=b},a,b,c)});S(">=",4,2,function(a,b,c){return R(function(a,b){return a>=b},a,b,c)});var $a=S("=",3,2,function(a,b,c){return R(function(a,b){return a==b},a,b,c,l)});S("!=",3,2,function(a,b,c){return R(function(a,b){return a!=b},a,b,c,l)});S("and",2,2,function(a,b,c){return Q(a,c)&&Q(b,c)});S("or",1,2,function(a,b,c){return Q(a,c)||Q(b,c)});function cb(a,b){b.l()&&4!=a.c&&g(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));N.call(this,a.c);this.O=a;this.a=b;this.h=a.b();this.e=a.e}t(cb,N);cb.prototype.evaluate=function(a){a=this.O.evaluate(a);return db(this.a,a)};cb.prototype.toString=function(a){a=a||"";var b=a+"Filter: \n";a+="  ";b+=this.O.toString(a);return b+=this.a.toString(a)};function eb(a,b){b.length<a.N&&g(Error("Function "+a.m+" expects at least"+a.N+" arguments, "+b.length+" given"));a.F!==m&&b.length>a.F&&g(Error("Function "+a.m+" expects at most "+a.F+" arguments, "+b.length+" given"));a.W&&w(b,function(b,d){4!=b.c&&g(Error("Argument "+d+" to function "+a.m+" is not of type Nodeset: "+b))});N.call(this,a.c);this.v=a;this.A=b;Xa(this,a.h||ka(b,function(a){return a.b()}));Ya(this,a.U&&!b.length||a.T&&!!b.length||ka(b,function(a){return a.e}))}t(eb,N);
eb.prototype.evaluate=function(a){return this.v.k.apply(m,la(a,this.A))};eb.prototype.toString=function(a){var b=a||"";a=b+"Function: "+this.v+"\n";b+="  ";this.A.length&&(a+=b+"Arguments:",b+="  ",a=ja(this.A,function(a,d){return a+"\n"+d.toString(b)},a));return a};function fb(a,b,c,d,e,f,h,u,x){this.m=a;this.c=b;this.h=c;this.U=d;this.T=e;this.k=f;this.N=h;this.F=u!==k?u:h;this.W=!!x}fb.prototype.toString=p("m");var gb={};
function T(a,b,c,d,e,f,h,u){a in gb&&g(Error("Function already created: "+a+"."));gb[a]=new fb(a,b,c,d,n,e,f,h,u)}T("boolean",2,n,n,function(a,b){return Q(b,a)},1);T("ceiling",1,n,n,function(a,b){return Math.ceil(O(b,a))},1);T("concat",3,n,n,function(a,b){var c=ma(arguments,1);return ja(c,function(b,c){return b+P(c,a)},"")},2,m);T("contains",2,n,n,function(a,b,c){b=P(b,a);a=P(c,a);return-1!=b.indexOf(a)},2);T("count",1,n,n,function(a,b){return b.evaluate(a).l()},1,1,l);T("false",2,n,n,aa(n),0);
T("floor",1,n,n,function(a,b){return Math.floor(O(b,a))},1);T("id",4,n,n,function(a,b){var c=a.g,d=9==c.nodeType?c:c.ownerDocument,c=P(b,a).split(/\s+/),e=[];w(c,function(a){a=d.getElementById(a);var b;if(b=a){a:if(s(e))b=!s(a)||1!=a.length?-1:e.indexOf(a,0);else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=!(0<=b)}b&&e.push(a)});e.sort(xa);var f=new J;w(e,function(a){f.add(a)});return f},1);T("lang",2,n,n,aa(n),1);
T("last",1,l,n,function(a){1!=arguments.length&&g(Error("Function last expects ()"));return a.f},0);T("local-name",3,n,l,function(a,b){var c=b?Ua(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,l);T("name",3,n,l,function(a,b){var c=b?Ua(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,l);T("namespace-uri",3,l,n,aa(""),0,1,l);T("normalize-space",3,n,l,function(a,b){return(b?P(b,a):G(a.g)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
T("not",2,n,n,function(a,b){return!Q(b,a)},1);T("number",1,n,l,function(a,b){return b?O(b,a):+G(a.g)},0,1);T("position",1,l,n,function(a){return a.Y},0);T("round",1,n,n,function(a,b){return Math.round(O(b,a))},1);T("starts-with",2,n,n,function(a,b,c){b=P(b,a);a=P(c,a);return 0==b.lastIndexOf(a,0)},2);T("string",3,n,l,function(a,b){return b?P(b,a):G(a.g)},0,1);T("string-length",1,n,l,function(a,b){return(b?P(b,a):G(a.g)).length},0,1);
T("substring",3,n,n,function(a,b,c,d){c=O(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?O(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=P(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);T("substring-after",3,n,n,function(a,b,c){b=P(b,a);a=P(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
T("substring-before",3,n,n,function(a,b,c){b=P(b,a);a=P(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);T("sum",1,n,n,function(a,b){for(var c=M(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+G(e);return d},1,1,l);T("translate",3,n,n,function(a,b,c,d){b=P(b,a);c=P(c,a);var e=P(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);T("true",2,n,n,aa(l),0);function K(a,b){this.R=a;this.M=b!==k?b:m;this.p=m;switch(a){case "comment":this.p=8;break;case "text":this.p=3;break;case "processing-instruction":this.p=7;break;case "node":break;default:g(Error("Unexpected argument"))}}K.prototype.matches=function(a){return this.p===m||this.p==a.nodeType};K.prototype.getName=p("R");K.prototype.toString=function(a){a=a||"";var b=a+"kindtest: "+this.R;this.M===m||(b+="\n"+this.M.toString(a+"  "));return b};function hb(a){N.call(this,3);this.Q=a.substring(1,a.length-1)}t(hb,N);hb.prototype.evaluate=p("Q");hb.prototype.toString=function(a){return(a||"")+"literal: "+this.Q};function ib(a){N.call(this,1);this.S=a}t(ib,N);ib.prototype.evaluate=p("S");ib.prototype.toString=function(a){return(a||"")+"number: "+this.S};function jb(a,b){N.call(this,a.c);this.J=a;this.u=b;this.h=a.b();this.e=a.e;if(1==this.u.length){var c=this.u[0];!c.B&&c.i==kb&&(c=c.z,"*"!=c.getName()&&(this.s={name:c.getName(),q:m}))}}t(jb,N);function lb(){N.call(this,4)}t(lb,N);lb.prototype.evaluate=function(a){var b=new J;a=a.g;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};lb.prototype.toString=function(a){return a+"RootHelperExpr"};function mb(){N.call(this,4)}t(mb,N);mb.prototype.evaluate=function(a){var b=new J;b.add(a.g);return b};
mb.prototype.toString=function(a){return a+"ContextHelperExpr"};
jb.prototype.evaluate=function(a){var b=this.J.evaluate(a);b instanceof J||g(Error("FilterExpr must evaluate to nodeset."));a=this.u;for(var c=0,d=a.length;c<d&&b.l();c++){var e=a[c],f=M(b,e.i.t),h;if(!e.b()&&e.i==nb){for(h=f.next();(b=f.next())&&(!h.contains||h.contains(b))&&b.compareDocumentPosition(h)&8;h=b);b=e.evaluate(new F(h))}else if(!e.b()&&e.i==ob)h=f.next(),b=e.evaluate(new F(h));else{h=f.next();for(b=e.evaluate(new F(h));(h=f.next())!=m;)h=e.evaluate(new F(h)),b=Ta(b,h)}}return b};
jb.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.J.toString(b);this.u.length&&(c+=b+"Steps:\n",b+="  ",w(this.u,function(a){c+=a.toString(b)}));return c};function U(a,b){this.a=a;this.t=!!b}function db(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=M(b),f=b.l(),h,u=0;h=e.next();u++){var x=a.t?f-u:u+1;h=d.evaluate(new F(h,x,f));var r;"number"==typeof h?r=x==h:"string"==typeof h||"boolean"==typeof h?r=!!h:h instanceof J?r=0<h.l():g(Error("Predicate.evaluate returned an unexpected type."));r||e.remove()}return b}U.prototype.j=function(){return 0<this.a.length?this.a[0].j():m};
U.prototype.b=function(){for(var a=0;a<this.a.length;a++){var b=this.a[a];if(b.b()||1==b.c||0==b.c)return l}return n};U.prototype.l=function(){return this.a.length};U.prototype.toString=function(a){var b=a||"";a=b+"Predicates:";b+="  ";return ja(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function V(a,b,c,d){N.call(this,4);this.i=a;this.z=b;this.a=c||new U([]);this.B=!!d;b=this.a.j();a.Z&&b&&(this.s={name:b.name,q:b.q});this.h=this.a.b()}t(V,N);V.prototype.evaluate=function(a){var b=a.g,c=m,c=this.j(),d=m,e=m,f=0;c&&(d=c.name,e=c.q?P(c.q,a):m,f=1);if(this.B)if(!this.b()&&this.i==pb)c=I(this.z,b,d,e),c=db(this.a,c,f);else if(a=M((new V(qb,new K("node"))).evaluate(a)),b=a.next())for(c=this.k(b,d,e,f);(b=a.next())!=m;)c=Ta(c,this.k(b,d,e,f));else c=new J;else c=this.k(a.g,d,e,f);return c};
V.prototype.k=function(a,b,c,d){a=this.i.v(this.z,a,b,c);return a=db(this.a,a,d)};V.prototype.toString=function(a){a=a||"";var b=a+"Step: \n";a+="  ";b+=a+"Operator: "+(this.B?"//":"/")+"\n";this.i.m&&(b+=a+"Axis: "+this.i+"\n");b+=this.z.toString(a);if(this.a.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.a.length;c++)var d=c<this.a.length-1?", ":"",b=b+(this.a[c].toString(a)+d);return b};function rb(a,b,c,d){this.m=a;this.v=b;this.t=c;this.Z=d}rb.prototype.toString=p("m");var sb={};
function W(a,b,c,d){a in sb&&g(Error("Axis already created: "+a));b=new rb(a,b,c,!!d);return sb[a]=b}W("ancestor",function(a,b){for(var c=new J,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},l);W("ancestor-or-self",function(a,b){var c=new J,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},l);
var kb=W("attribute",function(a,b){var c=new J,d=a.getName(),e=b.attributes;if(e)if(a instanceof K&&a.p===m||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},n),pb=W("child",function(a,b,c,d,e){return Ra.call(m,a,b,s(c)?c:m,s(d)?d:m,e||new J)},n,l);W("descendant",I,n,l);
var qb=W("descendant-or-self",function(a,b,c,d){var e=new J;H(b,c,d)&&a.matches(b)&&e.add(b);return I(a,b,c,d,e)},n,l),nb=W("following",function(a,b,c,d){var e=new J;do for(var f=b;f=f.nextSibling;)H(f,c,d)&&a.matches(f)&&e.add(f),e=I(a,f,c,d,e);while(b=b.parentNode);return e},n,l);W("following-sibling",function(a,b){for(var c=new J,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},n);W("namespace",function(){return new J},n);
W("parent",function(a,b){var c=new J;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},n);var ob=W("preceding",function(a,b,c,d){var e=new J,f=[];do f.unshift(b);while(b=b.parentNode);for(var h=1,u=f.length;h<u;h++){var x=[];for(b=f[h];b=b.previousSibling;)x.unshift(b);for(var r=0,L=x.length;r<L;r++)b=x[r],H(b,c,d)&&a.matches(b)&&e.add(b),e=I(a,b,c,d,e)}return e},l,l);
W("preceding-sibling",function(a,b){for(var c=new J,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},l);W("self",function(a,b){var c=new J;a.matches(b)&&c.add(b);return c},n);function tb(a){N.call(this,1);this.I=a;this.h=a.b();this.e=a.e}t(tb,N);tb.prototype.evaluate=function(a){return-O(this.I,a)};tb.prototype.toString=function(a){a=a||"";var b=a+"UnaryExpr: -\n";return b+=this.I.toString(a+"  ")};function ub(a){N.call(this,4);this.w=a;Xa(this,ka(this.w,function(a){return a.b()}));Ya(this,ka(this.w,function(a){return a.e}))}t(ub,N);ub.prototype.evaluate=function(a){var b=new J;w(this.w,function(c){c=c.evaluate(a);c instanceof J||g(Error("PathExpr must evaluate to NodeSet."));b=Ta(b,c)});return b};ub.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";w(this.w,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function X(a){return(a=a.exec(y()))?a[1]:""}var vb=function(){if(Ia)return X(/Firefox\/([0-9.]+)/);if(Na)return X(/Chrome\/([0-9.]+)/);if(Oa)return X(/Version\/([0-9.]+)/);if(Ka||La){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y());if(a)return a[1]+"."+a[2]}else{if(Ma)return(a=X(/Android\s+([0-9.]+)/))?a:X(/Version\/([0-9.]+)/);if(Ja)return X(/Camino\/([0-9.]+)/)}return""}();var wb;if(Ma){var xb=/Android\s+([0-9\.]+)/.exec(y());wb=xb?xb[1]:"0"}else wb="0";var yb=wb;Ma&&(Ma?da(yb,2.3):da(vb,2.3));sa["533"]||(sa["533"]=0<=da(pa,"533"));function zb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}zb.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};zb.prototype.contains=function(a){return!this||!a?n:a instanceof zb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom};function Y(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}Y.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};Y.prototype.contains=function(a){return a instanceof Y?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};function Z(a,b){var c=D(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,m))?c[b]||c.getPropertyValue(b)||"":""}function Ab(a){return Z(a,"position")||(a.currentStyle?a.currentStyle.position:m)||a.style&&a.style.position}
function Bb(a){var b=D(a),c=Ab(a),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Ab(a),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return m}
function Cb(a){var b=D(a),c=Ab(a);ha(a,"Parameter is required");var d=new z(0,0),e=(b?D(b):document).documentElement;if(a==e)return d;if(a.getBoundingClientRect)a=a.getBoundingClientRect(),b=Aa(ua(b)),d.x=a.left+b.x,d.y=a.top+b.y;else if(b.getBoxObjectFor)a=b.getBoxObjectFor(a),b=b.getBoxObjectFor(e),d.x=a.screenX-b.screenX,d.y=a.screenY-b.screenY;else{var f=a;do{d.x+=f.offsetLeft;d.y+=f.offsetTop;f!=a&&(d.x+=f.clientLeft||0,d.y+=f.clientTop||0);if("fixed"==Ab(f)){d.x+=b.body.scrollLeft;d.y+=b.body.scrollTop;
break}f=f.offsetParent}while(f&&f!=a);"absolute"==c&&(d.y-=b.body.offsetTop);for(f=a;(f=Bb(f))&&f!=b.body&&f!=e;)d.x-=f.scrollLeft,d.y-=f.scrollTop}return d};function Db(a){for(a=a.parentNode;a&&1!=a.nodeType&&9!=a.nodeType&&11!=a.nodeType;)a=a.parentNode;return a&&1==a.nodeType?a:m}function Eb(a,b){b.scrollLeft+=Math.min(a.left,Math.max(a.left-a.width,0));b.scrollTop+=Math.min(a.top,Math.max(a.top-a.height,0))};function Fb(a,b){var c;c=b?new Y(b.left,b.top,b.width,b.height):new Y(0,0,a.offsetWidth,a.offsetHeight);for(var d=D(a),e=Db(a);e&&e!=d.body&&e!=d.documentElement;e=Db(e)){var f=c,h=e,u=Cb(a),x=Cb(h),r=k,L=r=k,A=k,B=k,B=Z(h,"borderLeftWidth"),A=Z(h,"borderRightWidth"),L=Z(h,"borderTopWidth"),r=Z(h,"borderBottomWidth"),r=new zb(parseFloat(L),parseFloat(A),parseFloat(r),parseFloat(B));Eb(new Y(u.x+f.left-x.x-r.left,u.y+f.top-x.y-r.top,h.clientWidth-f.width,h.clientHeight-f.height),h)}e=Cb(a);f=ua(d);
f=(f.C.parentWindow||f.C.defaultView||window).document;f="CSS1Compat"==f.compatMode?f.documentElement:f.body;f=new C(f.clientWidth,f.clientHeight);Eb(new Y(e.x+c.left-(d.body?d.body.scrollLeft:0),e.y+c.top-(d.body?d.body.scrollTop:0),f.width-c.width,f.height-c.height),d.body||d.documentElement);(d=a.getClientRects?a.getClientRects()[0]:m)?d=new z(d.left,d.top):(d=new z,1==a.nodeType?a.getBoundingClientRect?(e=a.getBoundingClientRect(),d.x=e.left,d.y=e.top):(e=Aa(ua(a)),f=Cb(a),d.x=f.x-e.x,d.y=f.y-
e.y):(e="function"==ba(a.K),f=a,a.targetTouches?f=a.targetTouches[0]:e&&a.K().targetTouches&&(f=a.K().targetTouches[0]),d.x=f.clientX,d.y=f.clientY));return new z(d.x+c.left,d.y+c.top)}var Gb=["_"],$=q;!(Gb[0]in $)&&$.execScript&&$.execScript("var "+Gb[0]);for(var Hb;Gb.length&&(Hb=Gb.shift());)!Gb.length&&Fb!==k?$[Hb]=Fb:$=$[Hb]?$[Hb]:$[Hb]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
