/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,G){E||(E=window);G||(G="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(G,E,E.document)}:h(jQuery,window,document)})(function(h,E,G,k){function X(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&X(a[e])});a._hungarianMap=d}function I(a,b,c){a._hungarianMap||X(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),I(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&cb(a)}function db(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&I(m.models.oSearch,a[b])}function eb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function fb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function gb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Da(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:G.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);ja(a,d,h(b).data())}function ja(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(eb(c),I(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"===
typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=
d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Y(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ea(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ka(a);r(a,null,"column-sizing",[a])}function Z(a,b){var c=la(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c=
la(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function aa(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function la(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Fa(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){t[i]===
k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function hb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Da(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<
i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function M(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ga(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ha(a,e);return M(a,
c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(J(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function ib(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,
d,{settings:a,row:b,col:c})}function Ia(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,
b,f){var g,j;if(""!==f){j=Ia(f);for(var i=0,n=j.length;i<n;i++){f=j[i].match(ba);g=j[i].match(U);if(f){j[i]=j[i].replace(ba,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(U,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ia(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ba);j=e[i].match(U);if(g){e[i]=e[i].replace(ba,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(U,
""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(U))a[f.replace(U,"")](d);else a[f.replace(ba,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ja(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ca(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ha(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Ka(a,e)}}function Ha(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,n),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}}
function Ga(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||G.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Ka(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:G.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Ka(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function jb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),La(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Ma(a,"header")(a,d,f,n);i&&da(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ea(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function N(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!kb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ga(a,l);l=q.nTr;if(0!==e){var t=d[c%e];q._sRowStripe!=t&&(h(l).removeClass(q._sRowStripe).addClass(t),q._sRowStripe=t)}r(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ja(a),g,n,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ja(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function S(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&lb(a);d?fa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;N(a);a._drawHold=!1}function mb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=nb(a);else if("f"==j&&d.bFilter)g=ob(a);else if("r"==j&&d.bProcessing)g=pb(a);else if("t"==j)g=qb(a);else if("i"==j&&d.bInfo)g=rb(a);else if("p"==
j&&d.bPaginate)g=sb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function da(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],da(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&J(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?J(a,0,"Invalid JSON response",1):4===b.readyState&&J(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function kb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),sa(a,tb(a),function(b){ub(a,b)}),!1):!0}function tb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=V(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",i);var pa={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,pa.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,n.bSearchable)),d.bSort&&t("bSortable_"+g,n.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){pa.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+
a,b.dir)}),t("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:pa:b?j:pa}function ub(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)M(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;N(a);a._bInitComplete||
ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?Q(c)(b):b}function ob(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(fa(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,N(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Na(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==G.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function fa(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Fa(a);if("ssp"!=y(a)){vb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)wb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);xb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function xb(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function wb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Oa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function vb(a,b,c,d,e,f){var d=Oa(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=yb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Oa(a,b,c,d){a=b?a:Pa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function yb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Ab(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function rb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Bb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Bb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Cb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Cb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ga(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){mb(a);jb(a);ea(a,a.aoHeader);ea(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ea(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);S(a);e=y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)M(a,f[b]);a.iInitDisplayStart=
d;S(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ga(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Y(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Qa(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ra(a);r(a,null,"length",[a,c])}function nb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Qa(a,h(this).val());N(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function sb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){N(a)},
b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Ma(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Sa(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===
e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:J(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&N(a));return b}function pb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",
b?"block":"none");r(a,null,"processing",[a,b])}function qb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:ka,sName:"scrolling"});return i[0]}function ka(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),m=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,T=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),O,K,P,w,Ta=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};K=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==K&&a.scrollBarVis!==k)a.scrollBarVis=K,Y(a);else{a.scrollBarVis=K;p.children("thead, tfoot").remove();
u&&(P=u.clone().prependTo(p),O=u.find("tr"),P=P.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");K=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=Z(a,b);c.style.width=a.aoColumns[B].sWidth});u&&H(function(a){a.style.width=""},P);f=p.outerWidth();if(""===c){r.width="100%";if(T&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width=
v(d),f=p.outerWidth());H(C,K);H(function(a){z.push(a.innerHTML);Ta.push(v(h(a).css("width")))},K);H(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ta[b]},o);h(K).height(0);u&&(H(C,P),H(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},P),H(function(a,b){a.style.width=y[b]},O),h(P).height(0));H(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Ta[b]},K);u&&H(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
A[b]+"</div>";a.style.width=y[b]},P);if(p.outerWidth()<f){O=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(T&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(O-b);(""===c||""!==d)&&J(a,1,"Possible column misalignment",6)}else O="100%";q.width=v(O);g.width=v(O);u&&(a.nScrollFoot.style.width=v(O));!e&&T&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();n[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function H(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ea(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=la(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,m,o,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)o=c[i[m]],null!==o.sWidth&&(o.sWidth=Db(o.sWidthOrig,k),t=!0);if(d||!t&&!f&&!e&&j==aa(a)&&j==n.length)for(m=0;m<j;m++)i=Z(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ra(a,j.find("thead")[0]);for(m=0;m<i.length;m++)o=c[i[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):"",o.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)t=i[m],o=c[t],h(Eb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]",
j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width=
v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Na(function(){Y(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Db(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||G.body),d=c[0].offsetWidth;c.remove();return d}function Eb(a,b){var c=Fb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Fb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb,
""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function V(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function lb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Fa(a);h=V(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Gb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Hb(a){for(var b,c,d=a.aoColumns,e=V(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Ua(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);S(a);"function"==typeof d&&d(a)}function La(a,b,c,d){var e=a.aoColumns[c];Va(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Ua(a,c,b.shiftKey,d))})}
function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=V(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Gb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,$(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:zb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:zb(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
b)}}function Ib(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
k&&h.extend(a.oPreviousSearch,Ab(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Ab(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function J(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Jb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Va(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ra(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Ma(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ha(a,b){var c=[],c=Kb.numbers_length,d=Math.floor(c/2);b<=c?c=W(0,b):a<=d?(c=W(0,
c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=W(b-(c-2),b):(c=W(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function cb(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Wa)},"html-num":function(b){return za(b,a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Wa)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Lb(a){return function(){var b=
[ya(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ka(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])};
this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Lb(e));this.each(function(){var e={},g=1<d?Jb(e,a,!0):
a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())J(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{db(l);eb(l.column);I(l,l,!0);I(l.column,l.column,!0);I(l,h.extend(g,q.data()));var t=m.settings,j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();
break}else{J(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var p=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();db(g);g.oLanguage&&Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
g=Jb(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",
g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",g.fnPreDrawCallback,"user");p.rowIdFn=Q(g.rowId);fb(p);var u=p.oClasses;h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=
!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);I(l.oLanguage,a);h.extend(true,v,a);ga(p)},error:function(){ga(p)}}),n=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&
(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(da(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=g.aoColumns;j=0;for(i=t.length;j<i;j++)Da(p,e?e[j]:null);hb(p,g.aoColumnDefs,t,function(a,b){ja(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===
a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ja(p,a)}}})}var T=p.oFeatures,e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);T.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=V(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Hb(p)}});
z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||T.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);
else if(b.length>0){p.nTFoot=b[0];da(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)M(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&ma(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();p.bInitialised=true;n===false&&ga(p)};g.bStateSave?(T.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Ib(p,g,e)):e()}});b=null;return this},x,s,o,u,Xa={},Mb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
"g"),Wa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,L=function(a){return!a||!0===a||"-"===a?!0:!1},Nb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Ob=function(a,b){Xa[b]||(Xa[b]=RegExp(Pa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Xa[b],"."):a},Ya=function(a,b,c){var d="string"===typeof a;if(L(a))return!0;b&&d&&(a=Ob(a,b));c&&d&&(a=a.replace(Wa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Pb=function(a,b,c){return L(a)?!0:!(L(a)||"string"===
typeof a)?null:Ya(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ia=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},W=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Qb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);
return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b,
"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ba=/\[.*?\]$/,U=/\(\)$/,Pa=m.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=/<.*?>/g,Na=m.util.throttle,Rb=[],w=Array.prototype,ac=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof
h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Rb)};m.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},
each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,
d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,n,l=this.context,m,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(m=Ba(l[g],u.opts));h=0;for(n=o.length;h<n;h++)f=o[h],f=
"cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,m),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},
pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return gb(this,a,b,0,this.length,1)},reduceRight:w.reduceRight||function(a,b){return gb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a,
b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Rb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==
e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"===
typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()",
"table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?N(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),S(b,!1===a))})});o("page()",function(a){return a===
k?this.page.info().page:this.iterator("table",function(b){Sa(b,a)})});o("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:
k:this.iterator("table",function(b){Qa(b,a)})});var Sb=function(a,b,c){if(c){var d=new s(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))S(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){na(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)M(a,c[d]);S(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,
b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});o("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});var Za=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===
i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return qa(f)},$a=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},ab=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=
a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:W(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<
d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=b,f;return Za("row",a,function(a){var b=Nb(a);if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});
b=Qb(ia(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",function(a,
b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ia(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ca(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,
b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<
n;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Ra(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(M(b,c));return h},1),c=this.rows(-1);
c.pop();h.merge(c,b);return c});o("row()",function(a,b){return ab(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ca(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&
"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:M(b,a)});return this.row(b[0])});var bb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Tb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,
"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&bb(f,c)}))}}};o("row().child()",function(a,b){var c=this.context;
if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)bb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=aa(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&
c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Tb(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Tb(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){bb(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Ub=function(a,b,c,d,e){for(var c=
[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return Za("column",e,function(a){var b=Nb(a);if(a==="")return W(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Ub(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=
parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[Z(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()",
"column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Ub,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",
function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ia(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ia(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=
h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;ea(b,b.aoHeader);ea(b,b.aoFooter);xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?$(b,c):c},1)});o("columns.adjust()",
function(){return this.iterator("table",function(a){Y(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return Z(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});o("column()",function(a,b){return ab(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=$a(c),f=
b.aoData,g=Ba(b,e),j=Qb(ia(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,o,u,s,r,v;return Za("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){m=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<n;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&m.push(r)}else m.push(r)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||
!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&
a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,
b,c){return{row:b,column:c,columnVisible:$(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ca(b,c,a,d)})});o("cell()",function(a,b,c){return ab(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;ib(b[0],c[0].row,c[0].column,a);ca(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==
c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){La(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()",
"column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&fa(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,
b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),fa(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?
this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?
h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};m.camelToHungarian=I;o("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);
a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){na(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||
!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));
b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,
1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,n){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,n)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.16";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow=
{nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,
sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
X(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};X(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,
b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},
order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Kb=m.ext.pager;h.extend(Kb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ha(a,
b)]},simple_numbers:function(a,b){return["previous",ha(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ha(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ha(a,b),"last"]},_numbers:ha,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},n,l,m=0,o=function(b,d){var k,s,u,r,v=function(b){Sa(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=
h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{n=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":n=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":n=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":n=j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":n=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:n=r+1;l=e===r?g.sPageButtonActive:""}if(n!==null){u=h("<a>",{"class":g.sPageButton+
" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(n).appendTo(b);Va(u,{action:r},v);m++}}}},s;try{s=h(b).find(G.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+s+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);
return null!==b&&!isNaN(b)||L(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c,!0)?"html-num-fmt"+c:null},function(a){return L(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return L(a)?a:"string"===typeof a?a.replace(Mb," ").replace(Aa,""):""},string:function(a){return L(a)?
a:"string"===typeof a?a.replace(Mb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Ob(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return L(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return L(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});cb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Vb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Vb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Vb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Lb,_fnBuildAjax:sa,_fnAjaxUpdate:kb,_fnAjaxParameters:tb,_fnAjaxUpdateDraw:ub,
_fnAjaxDataSrc:ta,_fnAddColumn:Da,_fnColumnOptions:ja,_fnAdjustColumnSizing:Y,_fnVisibleToColumnIndex:Z,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:la,_fnColumnTypes:Fa,_fnApplyColumnDefs:hb,_fnHungarianMap:X,_fnCamelToHungarian:I,_fnLanguageCompat:Ca,_fnBrowserDetect:fb,_fnAddData:M,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:ib,
_fnSplitObjNotation:Ia,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,_fnGetDataMaster:Ja,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ca,_fnGetRowElements:Ha,_fnCreateTr:Ga,_fnBuildHead:jb,_fnDrawHead:ea,_fnDraw:N,_fnReDraw:S,_fnAddOptionsHtml:mb,_fnDetectHeader:da,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:ob,_fnFilterComplete:fa,_fnFilterCustom:xb,_fnFilterColumn:wb,_fnFilter:vb,_fnFilterCreateSearch:Oa,_fnEscapeRegex:Pa,_fnFilterData:yb,_fnFeatureHtmlInfo:rb,_fnUpdateInfo:Bb,_fnInfoMacros:Cb,_fnInitialise:ga,
_fnInitComplete:ua,_fnLengthChange:Qa,_fnFeatureHtmlLength:nb,_fnFeatureHtmlPaginate:sb,_fnPageChange:Sa,_fnFeatureHtmlProcessing:pb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:qb,_fnScrollDraw:ka,_fnApplyToChildren:H,_fnCalculateColumnWidths:Ea,_fnThrottle:Na,_fnConvertToWidth:Db,_fnGetWidestNode:Eb,_fnGetMaxLenString:Fb,_fnStringToCss:v,_fnSortFlatten:V,_fnSort:lb,_fnSortAria:Hb,_fnSortListener:Ua,_fnSortAttachListener:La,_fnSortingClasses:wa,_fnSortData:Gb,_fnSaveState:xa,_fnLoadState:Ib,_fnSettingsFromNode:ya,
_fnLog:J,_fnMap:F,_fnBindAction:Va,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Ra,_fnRenderer:Ma,_fnDataSource:y,_fnRowAttributes:Ka,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.0
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");+function(a){"use strict";function b(b){return this.each(function(){var e=a(this),g=e.data(c);if(!g){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,g=new f(e,h))}if("string"==typeof g){if(void 0===g[b])throw new Error("No method named "+b);g[b]()}})}var c="lte.boxrefresh",d={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(a){return a}},e={data:'[data-widget="box-refresh"]'},f=function(b,c){if(this.element=b,this.options=c,this.$overlay=a(c.overlay),""===c.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()};f.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(a(this)),a.get(this.options.source,this.options.params,function(b){this.options.loadInContent&&a(this.options.content).html(b),this.options.onLoadDone.call(a(this),b),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},f.prototype._setUpListeners=function(){a(this.element).on("click",e.trigger,function(a){a&&a.preventDefault(),this.load()}.bind(this))},f.prototype._addOverlay=function(){a(this.element).append(this.$overlay)},f.prototype._removeOverlay=function(){a(this.element).remove(this.$overlay)};var g=a.fn.boxRefresh;a.fn.boxRefresh=b,a.fn.boxRefresh.Constructor=f,a.fn.boxRefresh.noConflict=function(){return a.fn.boxRefresh=g,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.boxwidget",d={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},e={data:".box",collapsed:".collapsed-box",body:".box-body",footer:".box-footer",tools:".box-tools"},f={collapsed:"collapsed-box"},g={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},h=function(a,b){this.element=a,this.options=b,this._setUpListeners()};h.prototype.toggle=function(){a(this.element).is(e.collapsed)?this.expand():this.collapse()},h.prototype.expand=function(){var b=a.Event(g.expanded),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).removeClass(f.collapsed),a(this.element).find(e.tools).find("."+d).removeClass(d).addClass(c),a(this.element).find(e.body+", "+e.footer).slideDown(this.options.animationSpeed,function(){a(this.element).trigger(b)}.bind(this))},h.prototype.collapse=function(){var b=a.Event(g.collapsed),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).find(e.tools).find("."+c).removeClass(c).addClass(d),a(this.element).find(e.body+", "+e.footer).slideUp(this.options.animationSpeed,function(){a(this.element).addClass(f.collapsed),a(this.element).trigger(b)}.bind(this))},h.prototype.remove=function(){var b=a.Event(g.removed);a(this.element).slideUp(this.options.animationSpeed,function(){a(this.element).trigger(b),a(this.element).remove()}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.collapseTrigger,function(a){a&&a.preventDefault(),b.toggle()}),a(this.element).on("click",this.options.removeTrigger,function(a){a&&a.preventDefault(),b.remove()})};var i=a.fn.boxWidget;a.fn.boxWidget=b,a.fn.boxWidget.Constructor=h,a.fn.boxWidget.noConflict=function(){return a.fn.boxWidget=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}"string"==typeof b&&f.toggle()})}var c="lte.controlsidebar",d={slide:!0},e={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},f={open:"control-sidebar-open",fixed:"fixed"},g={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},h=function(a,b){this.element=a,this.options=b,this.hasBindedResize=!1,this.init()};h.prototype.init=function(){a(this.element).is(e.data)||a(this).on("click",this.toggle),this.fix(),a(window).resize(function(){this.fix()}.bind(this))},h.prototype.toggle=function(b){b&&b.preventDefault(),this.fix(),a(e.sidebar).is(e.open)||a("body").is(e.open)?this.collapse():this.expand()},h.prototype.expand=function(){this.options.slide?a(e.sidebar).addClass(f.open):a("body").addClass(f.open),a(this.element).trigger(a.Event(g.expanded))},h.prototype.collapse=function(){a("body, "+e.sidebar).removeClass(f.open),a(this.element).trigger(a.Event(g.collapsed))},h.prototype.fix=function(){a("body").is(e.boxed)&&this._fixForBoxed(a(e.bg))},h.prototype._fixForBoxed=function(b){b.css({position:"absolute",height:a(e.wrapper).height()})};var i=a.fn.controlSidebar;a.fn.controlSidebar=b,a.fn.controlSidebar.Constructor=h,a.fn.controlSidebar.noConflict=function(){return a.fn.controlSidebar=i,this},a(document).on("click",e.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data(c);e||d.data(c,e=new f(d)),"string"==typeof b&&e.toggle(d)})}var c="lte.directchat",d={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},e={open:"direct-chat-contacts-open"},f=function(a){this.element=a};f.prototype.toggle=function(a){a.parents(d.box).first().toggleClass(e.open)};var g=a.fn.directChat;a.fn.directChat=b,a.fn.directChat.Constructor=f,a.fn.directChat.noConflict=function(){return a.fn.directChat=g,this},a(document).on("click",d.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(h))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.layout",d={slimscroll:!0,resetHeight:!0},e={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},f={fixed:"fixed",holdTransition:"hold-transition"},g=function(a){this.options=a,this.bindedResize=!1,this.activate()};g.prototype.activate=function(){this.fix(),this.fixSidebar(),a("body").removeClass(f.holdTransition),this.options.resetHeight&&a("body, html, "+e.wrapper).css({height:"auto","min-height":"100%"}),this.bindedResize||(a(window).resize(function(){this.fix(),this.fixSidebar(),a(e.logo+", "+e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),a(e.sidebarMenu).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),a(e.sidebarMenu).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},g.prototype.fix=function(){a(e.layoutBoxed+" > "+e.wrapper).css("overflow","hidden");var b=a(e.mainFooter).outerHeight()||0,c=a(e.mainHeader).outerHeight()+b,d=a(window).height(),g=a(e.sidebar).height()||0;if(a("body").hasClass(f.fixed))a(e.contentWrapper).css("min-height",d-b);else{var h;d>=g?(a(e.contentWrapper).css("min-height",d-c),h=d-c):(a(e.contentWrapper).css("min-height",g),h=g);var i=a(e.controlSidebar);void 0!==i&&i.height()>h&&a(e.contentWrapper).css("min-height",i.height())}},g.prototype.fixSidebar=function(){if(!a("body").hasClass(f.fixed))return void(void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({destroy:!0}).height("auto"));this.options.slimscroll&&void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({height:a(window).height()-a(e.mainHeader).height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})};var h=a.fn.layout;a.fn.layout=b,a.fn.layout.Constuctor=g,a.fn.layout.noConflict=function(){return a.fn.layout=h,this},a(window).on("load",function(){b.call(a("body"))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(g))}"toggle"===b&&f.toggle()})}var c="lte.pushmenu",d={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},e={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},f={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},g={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},h=function(a){this.options=a,this.init()};h.prototype.init=function(){(this.options.expandOnHover||a("body").is(e.mini+e.layoutFixed))&&(this.expandOnHover(),a("body").addClass(f.expandFeature)),a(e.contentWrapper).click(function(){a(window).width()<=this.options.collapseScreenSize&&a("body").hasClass(f.open)&&this.close()}.bind(this)),a(e.searchInput).click(function(a){a.stopPropagation()})},h.prototype.toggle=function(){var b=a(window).width(),c=!a("body").hasClass(f.collapsed);b<=this.options.collapseScreenSize&&(c=a("body").hasClass(f.open)),c?this.close():this.open()},h.prototype.open=function(){a(window).width()>this.options.collapseScreenSize?a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)):a("body").addClass(f.open).trigger(a.Event(g.expanded))},h.prototype.close=function(){a(window).width()>this.options.collapseScreenSize?a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)):a("body").removeClass(f.open+" "+f.collapsed).trigger(a.Event(g.collapsed))},h.prototype.expandOnHover=function(){a(e.mainSidebar).hover(function(){a("body").is(e.mini+e.collapsed)&&a(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){a("body").is(e.expanded)&&this.collapse()}.bind(this))},h.prototype.expand=function(){setTimeout(function(){a("body").removeClass(f.collapsed).addClass(f.expanded)},this.options.expandTransitionDelay)},h.prototype.collapse=function(){setTimeout(function(){a("body").removeClass(f.expanded).addClass(f.collapsed)},this.options.expandTransitionDelay)};var i=a.fn.pushMenu;a.fn.pushMenu=b,a.fn.pushMenu.Constructor=h,a.fn.pushMenu.noConflict=function(){return a.fn.pushMenu=i,this},a(document).on("click",e.button,function(c){c.preventDefault(),b.call(a(this),"toggle")}),a(window).on("load",function(){b.call(a(e.button))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(e,h))}if("string"==typeof f){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.todolist",d={onCheck:function(a){return a},onUnCheck:function(a){return a}},e={data:'[data-widget="todo-list"]'},f={done:"done"},g=function(a,b){this.element=a,this.options=b,this._setUpListeners()};g.prototype.toggle=function(a){if(a.parents(e.li).first().toggleClass(f.done),!a.prop("checked"))return void this.unCheck(a);this.check(a)},g.prototype.check=function(a){this.options.onCheck.call(a)},g.prototype.unCheck=function(a){this.options.onUnCheck.call(a)},g.prototype._setUpListeners=function(){var b=this;a(this.element).on("change ifChanged","input:checkbox",function(){b.toggle(a(this))})};var h=a.fn.todoList;a.fn.todoList=b,a.fn.todoList.Constructor=g,a.fn.todoList.noConflict=function(){return a.fn.todoList=h,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this);if(!e.data(c)){var f=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,new h(e,f))}})}var c="lte.tree",d={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},e={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},f={open:"menu-open",tree:"tree"},g={collapsed:"collapsed.tree",expanded:"expanded.tree"},h=function(b,c){this.element=b,this.options=c,a(this.element).addClass(f.tree),a(e.treeview+e.active,this.element).addClass(f.open),this._setUpListeners()};h.prototype.toggle=function(a,b){var c=a.next(e.treeviewMenu),d=a.parent(),g=d.hasClass(f.open);d.is(e.treeview)&&(this.options.followLink&&"#"!==a.attr("href")||b.preventDefault(),g?this.collapse(c,d):this.expand(c,d))},h.prototype.expand=function(b,c){var d=a.Event(g.expanded);if(this.options.accordion){var h=c.siblings(e.open),i=h.children(e.treeviewMenu);this.collapse(i,h)}c.addClass(f.open),b.slideDown(this.options.animationSpeed,function(){a(this.element).trigger(d)}.bind(this))},h.prototype.collapse=function(b,c){var d=a.Event(g.collapsed);b.find(e.open).removeClass(f.open),c.removeClass(f.open),b.slideUp(this.options.animationSpeed,function(){b.find(e.open+" > "+e.treeview).slideUp(),a(this.element).trigger(d)}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.trigger,function(c){b.toggle(a(this),c)})};var i=a.fn.tree;a.fn.tree=b,a.fn.tree.Constructor=h,a.fn.tree.noConflict=function(){return a.fn.tree=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery);
/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(document,Math,undefined){(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(jQuery&&!jQuery.fn.sparkline){factory(jQuery)}})(function($){"use strict";var UNSET_OPTION={},getDefaults,createClass,SPFormat,clipval,quartile,normalizeValue,normalizeValues,remove,isNumber,all,sum,addCSS,ensureArray,formatNumber,RangeMap,MouseHandler,Tooltip,barHighlightMixin,line,bar,tristate,discrete,bullet,pie,box,defaultStyles,initStyles,VShape,VCanvas_base,VCanvas_canvas,VCanvas_vml,pending,shapeCount=0;getDefaults=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:false,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:false,enableHighlight:true,highlightLighten:1.4,tooltipSkipNull:true,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:false,numberFormatter:false,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:false,disableInteraction:false},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:"#ccc",drawNormalOnTop:false,chartRangeMin:undefined,chartRangeMax:undefined,chartRangeMinX:undefined,chartRangeMaxX:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:undefined,nullColor:undefined,zeroAxis:true,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,colorMap:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,tooltipFormat:new SPFormat("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:undefined,tooltipFormat:new SPFormat("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:false,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:"#4a2",chartRangeMax:undefined,chartRangeMin:undefined,tooltipFormat:new SPFormat("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}};defaultStyles=".jqstooltip { "+"position: absolute;"+"left: 0px;"+"top: 0px;"+"visibility: hidden;"+"background: rgb(0, 0, 0) transparent;"+"background-color: rgba(0,0,0,0.6);"+"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);"+'-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";'+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"white-space: nowrap;"+"padding: 5px;"+"border: 1px solid white;"+"box-sizing: content-box;"+"z-index: 10000;"+"}"+".jqsfield { "+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"}";createClass=function(){var Class,args;Class=function(){this.init.apply(this,arguments)};if(arguments.length>1){if(arguments[0]){Class.prototype=$.extend(new arguments[0],arguments[arguments.length-1]);Class._super=arguments[0].prototype}else{Class.prototype=arguments[arguments.length-1]}if(arguments.length>2){args=Array.prototype.slice.call(arguments,1,-1);args.unshift(Class.prototype);$.extend.apply($,args)}}else{Class.prototype=arguments[0]}Class.prototype.cls=Class;return Class};$.SPFormatClass=SPFormat=createClass({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(format,fclass){this.format=format;this.fclass=fclass},render:function(fieldset,lookups,options){var self=this,fields=fieldset,match,token,lookupkey,fieldvalue,prec;return this.format.replace(this.fre,function(){var lookup;token=arguments[1];lookupkey=arguments[3];match=self.precre.exec(token);if(match){prec=match[2];token=match[1]}else{prec=false}fieldvalue=fields[token];if(fieldvalue===undefined){return""}if(lookupkey&&lookups&&lookups[lookupkey]){lookup=lookups[lookupkey];if(lookup.get){return lookups[lookupkey].get(fieldvalue)||fieldvalue}else{return lookups[lookupkey][fieldvalue]||fieldvalue}}if(isNumber(fieldvalue)){if(options.get("numberFormatter")){fieldvalue=options.get("numberFormatter")(fieldvalue)}else{fieldvalue=formatNumber(fieldvalue,prec,options.get("numberDigitGroupCount"),options.get("numberDigitGroupSep"),options.get("numberDecimalMark"))}}return fieldvalue})}});$.spformat=function(format,fclass){return new SPFormat(format,fclass)};clipval=function(val,min,max){if(val<min){return min}if(val>max){return max}return val};quartile=function(values,q){var vl;if(q===2){vl=Math.floor(values.length/2);return values.length%2?values[vl]:(values[vl-1]+values[vl])/2}else{if(values.length%2){vl=(values.length*q+q)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}else{vl=(values.length*q+2)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}}};normalizeValue=function(val){var nf;switch(val){case"undefined":val=undefined;break;case"null":val=null;break;case"true":val=true;break;case"false":val=false;break;default:nf=parseFloat(val);if(val==nf){val=nf}}return val};normalizeValues=function(vals){var i,result=[];for(i=vals.length;i--;){result[i]=normalizeValue(vals[i])}return result};remove=function(vals,filter){var i,vl,result=[];for(i=0,vl=vals.length;i<vl;i++){if(vals[i]!==filter){result.push(vals[i])}}return result};isNumber=function(num){return!isNaN(parseFloat(num))&&isFinite(num)};formatNumber=function(num,prec,groupsize,groupsep,decsep){var p,i;num=(prec===false?parseFloat(num).toString():num.toFixed(prec)).split("");p=(p=$.inArray(".",num))<0?num.length:p;if(p<num.length){num[p]=decsep}for(i=p-groupsize;i>0;i-=groupsize){num.splice(i,0,groupsep)}return num.join("")};all=function(val,arr,ignoreNull){var i;for(i=arr.length;i--;){if(ignoreNull&&arr[i]===null)continue;if(arr[i]!==val){return false}}return true};sum=function(vals){var total=0,i;for(i=vals.length;i--;){total+=typeof vals[i]==="number"?vals[i]:0}return total};ensureArray=function(val){return $.isArray(val)?val:[val]};addCSS=function(css){var tag,iefail;if(document.createStyleSheet){try{document.createStyleSheet().cssText=css;return}catch(e){iefail=true}}tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);if(iefail){document.styleSheets[document.styleSheets.length-1].cssText=css}else{tag[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=css}};$.fn.simpledraw=function(width,height,useExisting,interact){var target,mhandler;if(useExisting&&(target=this.data("_jqs_vcanvas"))){return target}if($.fn.sparkline.canvas===false){return false}else if($.fn.sparkline.canvas===undefined){var el=document.createElement("canvas");if(!!(el.getContext&&el.getContext("2d"))){$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_canvas(width,height,target,interact)}}else if(document.namespaces&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_vml(width,height,target)}}else{$.fn.sparkline.canvas=false;return false}}if(width===undefined){width=$(this).innerWidth()}if(height===undefined){height=$(this).innerHeight()}target=$.fn.sparkline.canvas(width,height,this,interact);mhandler=$(this).data("_jqs_mhandler");if(mhandler){mhandler.registerCanvas(target)}return target};$.fn.cleardraw=function(){var target=this.data("_jqs_vcanvas");if(target){target.reset()}};$.RangeMapClass=RangeMap=createClass({init:function(map){var key,range,rangelist=[];for(key in map){if(map.hasOwnProperty(key)&&typeof key==="string"&&key.indexOf(":")>-1){range=key.split(":");range[0]=range[0].length===0?-Infinity:parseFloat(range[0]);range[1]=range[1].length===0?Infinity:parseFloat(range[1]);range[2]=map[key];rangelist.push(range)}}this.map=map;this.rangelist=rangelist||false},get:function(value){var rangelist=this.rangelist,i,range,result;if((result=this.map[value])!==undefined){return result}if(rangelist){for(i=rangelist.length;i--;){range=rangelist[i];if(range[0]<=value&&range[1]>=value){return range[2]}}}return undefined}});$.range_map=function(map){return new RangeMap(map)};MouseHandler=createClass({init:function(el,options){var $el=$(el);this.$el=$el;this.options=options;this.currentPageX=0;this.currentPageY=0;this.el=el;this.splist=[];this.tooltip=null;this.over=false;this.displayTooltips=!options.get("disableTooltips");this.highlightEnabled=!options.get("disableHighlight")},registerSparkline:function(sp){this.splist.push(sp);if(this.over){this.updateDisplay()}},registerCanvas:function(canvas){var $canvas=$(canvas.canvas);this.canvas=canvas;this.$canvas=$canvas;$canvas.mouseenter($.proxy(this.mouseenter,this));$canvas.mouseleave($.proxy(this.mouseleave,this));$canvas.click($.proxy(this.mouseclick,this))},reset:function(removeTooltip){this.splist=[];if(this.tooltip&&removeTooltip){this.tooltip.remove();this.tooltip=undefined}},mouseclick:function(e){var clickEvent=$.Event("sparklineClick");clickEvent.originalEvent=e;clickEvent.sparklines=this.splist;this.$el.trigger(clickEvent)},mouseenter:function(e){$(document.body).unbind("mousemove.jqs");$(document.body).bind("mousemove.jqs",$.proxy(this.mousemove,this));this.over=true;this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(!this.tooltip&&this.displayTooltips){this.tooltip=new Tooltip(this.options);this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},mouseleave:function(){$(document.body).unbind("mousemove.jqs");var splist=this.splist,spcount=splist.length,needsRefresh=false,sp,i;this.over=false;this.currentEl=null;if(this.tooltip){this.tooltip.remove();this.tooltip=null}for(i=0;i<spcount;i++){sp=splist[i];if(sp.clearRegionHighlight()){needsRefresh=true}}if(needsRefresh){this.canvas.render()}},mousemove:function(e){this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(this.tooltip){this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},updateDisplay:function(){var splist=this.splist,spcount=splist.length,needsRefresh=false,offset=this.$canvas.offset(),localX=this.currentPageX-offset.left,localY=this.currentPageY-offset.top,tooltiphtml,sp,i,result,changeEvent;if(!this.over){return}for(i=0;i<spcount;i++){sp=splist[i];result=sp.setRegionHighlight(this.currentEl,localX,localY);if(result){needsRefresh=true}}if(needsRefresh){changeEvent=$.Event("sparklineRegionChange");changeEvent.sparklines=this.splist;this.$el.trigger(changeEvent);if(this.tooltip){tooltiphtml="";for(i=0;i<spcount;i++){sp=splist[i];tooltiphtml+=sp.getCurrentRegionTooltip()}this.tooltip.setContent(tooltiphtml)}if(!this.disableHighlight){this.canvas.render()}}if(result===null){this.mouseleave()}}});Tooltip=createClass({sizeStyle:"position: static !important;"+"display: block !important;"+"visibility: hidden !important;"+"float: left !important;",init:function(options){var tooltipClassname=options.get("tooltipClassname","jqstooltip"),sizetipStyle=this.sizeStyle,offset;this.container=options.get("tooltipContainer")||document.body;this.tooltipOffsetX=options.get("tooltipOffsetX",10);this.tooltipOffsetY=options.get("tooltipOffsetY",12);$("#jqssizetip").remove();$("#jqstooltip").remove();this.sizetip=$("<div/>",{id:"jqssizetip",style:sizetipStyle,"class":tooltipClassname});this.tooltip=$("<div/>",{id:"jqstooltip","class":tooltipClassname}).appendTo(this.container);offset=this.tooltip.offset();this.offsetLeft=offset.left;this.offsetTop=offset.top;this.hidden=true;$(window).unbind("resize.jqs scroll.jqs");$(window).bind("resize.jqs scroll.jqs",$.proxy(this.updateWindowDims,this));this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=$(window).scrollTop();this.scrollLeft=$(window).scrollLeft();this.scrollRight=this.scrollLeft+$(window).width();this.updatePosition()},getSize:function(content){this.sizetip.html(content).appendTo(this.container);this.width=this.sizetip.width()+1;this.height=this.sizetip.height();this.sizetip.remove()},setContent:function(content){if(!content){this.tooltip.css("visibility","hidden");this.hidden=true;return}this.getSize(content);this.tooltip.html(content).css({width:this.width,height:this.height,visibility:"visible"});if(this.hidden){this.hidden=false;this.updatePosition()}},updatePosition:function(x,y){if(x===undefined){if(this.mousex===undefined){return}x=this.mousex-this.offsetLeft;y=this.mousey-this.offsetTop}else{this.mousex=x=x-this.offsetLeft;this.mousey=y=y-this.offsetTop}if(!this.height||!this.width||this.hidden){return}y-=this.height+this.tooltipOffsetY;x+=this.tooltipOffsetX;if(y<this.scrollTop){y=this.scrollTop}if(x<this.scrollLeft){x=this.scrollLeft}else if(x+this.width>this.scrollRight){x=this.scrollRight-this.width}this.tooltip.css({left:x,top:y})},remove:function(){this.tooltip.remove();this.sizetip.remove();this.sizetip=this.tooltip=undefined;$(window).unbind("resize.jqs scroll.jqs")}});initStyles=function(){addCSS(defaultStyles)};$(initStyles);pending=[];$.fn.sparkline=function(userValues,userOptions){return this.each(function(){var options=new $.fn.sparkline.options(this,userOptions),$this=$(this),render,i;render=function(){var values,width,height,tmp,mhandler,sp,vals;if(userValues==="html"||userValues===undefined){vals=this.getAttribute(options.get("tagValuesAttribute"));if(vals===undefined||vals===null){vals=$this.html()}values=vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else{values=userValues}width=options.get("width")==="auto"?values.length*options.get("defaultPixelsPerValue"):options.get("width");if(options.get("height")==="auto"){if(!options.get("composite")||!$.data(this,"_jqs_vcanvas")){tmp=document.createElement("span");tmp.innerHTML="a";$this.html(tmp);height=$(tmp).innerHeight()||$(tmp).height();$(tmp).remove();tmp=null}}else{height=options.get("height")}if(!options.get("disableInteraction")){mhandler=$.data(this,"_jqs_mhandler");if(!mhandler){mhandler=new MouseHandler(this,options);$.data(this,"_jqs_mhandler",mhandler)}else if(!options.get("composite")){mhandler.reset()}}else{mhandler=false}if(options.get("composite")&&!$.data(this,"_jqs_vcanvas")){if(!$.data(this,"_jqs_errnotify")){alert("Attempted to attach a composite sparkline to an element with no existing sparkline");$.data(this,"_jqs_errnotify",true)}return}sp=new($.fn.sparkline[options.get("type")])(this,values,options,width,height);sp.render();if(mhandler){mhandler.registerSparkline(sp)}};if($(this).html()&&!options.get("disableHiddenCheck")&&$(this).is(":hidden")||!$(this).parents("body").length){if(!options.get("composite")&&$.data(this,"_jqs_pending")){for(i=pending.length;i;i--){if(pending[i-1][0]==this){pending.splice(i-1,1)}}}pending.push([this,render]);$.data(this,"_jqs_pending",true)}else{render.call(this)}})};$.fn.sparkline.defaults=getDefaults();$.sparkline_display_visible=function(){var el,i,pl;var done=[];for(i=0,pl=pending.length;i<pl;i++){el=pending[i][0];if($(el).is(":visible")&&!$(el).parents().is(":hidden")){pending[i][1].call(el);$.data(pending[i][0],"_jqs_pending",false);done.push(i)}else if(!$(el).closest("html").length&&!$.data(el,"_jqs_pending")){$.data(pending[i][0],"_jqs_pending",false);done.push(i)}}for(i=done.length;i;i--){pending.splice(done[i-1],1)}};$.fn.sparkline.options=createClass({init:function(tag,userOptions){var extendedOptions,defaults,base,tagOptionType;this.userOptions=userOptions=userOptions||{};this.tag=tag;this.tagValCache={};defaults=$.fn.sparkline.defaults;base=defaults.common;this.tagOptionsPrefix=userOptions.enableTagOptions&&(userOptions.tagOptionsPrefix||base.tagOptionsPrefix);tagOptionType=this.getTagSetting("type");if(tagOptionType===UNSET_OPTION){extendedOptions=defaults[userOptions.type||base.type]}else{extendedOptions=defaults[tagOptionType]}this.mergedOptions=$.extend({},base,extendedOptions,userOptions)},getTagSetting:function(key){var prefix=this.tagOptionsPrefix,val,i,pairs,keyval;if(prefix===false||prefix===undefined){return UNSET_OPTION}if(this.tagValCache.hasOwnProperty(key)){val=this.tagValCache.key}else{val=this.tag.getAttribute(prefix+key);if(val===undefined||val===null){val=UNSET_OPTION}else if(val.substr(0,1)==="["){val=val.substr(1,val.length-2).split(",");for(i=val.length;i--;){val[i]=normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g,""))}}else if(val.substr(0,1)==="{"){pairs=val.substr(1,val.length-2).split(",");val={};for(i=pairs.length;i--;){keyval=pairs[i].split(":",2);val[keyval[0].replace(/(^\s*)|(\s*$)/g,"")]=normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g,""))}}else{val=normalizeValue(val)}this.tagValCache.key=val}return val},get:function(key,defaultval){var tagOption=this.getTagSetting(key),result;if(tagOption!==UNSET_OPTION){return tagOption}return(result=this.mergedOptions[key])===undefined?defaultval:result}});$.fn.sparkline._base=createClass({disabled:false,init:function(el,values,options,width,height){this.el=el;this.$el=$(el);this.values=values;this.options=options;this.width=width;this.height=height;this.currentRegion=undefined},initTarget:function(){var interactive=!this.options.get("disableInteraction");if(!(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),interactive))){this.disabled=true}else{this.canvasWidth=this.target.pixelWidth;this.canvasHeight=this.target.pixelHeight}},render:function(){if(this.disabled){this.el.innerHTML="";return false}return true},getRegion:function(x,y){},setRegionHighlight:function(el,x,y){var currentRegion=this.currentRegion,highlightEnabled=!this.options.get("disableHighlight"),newRegion;if(x>this.canvasWidth||y>this.canvasHeight||x<0||y<0){return null}newRegion=this.getRegion(el,x,y);if(currentRegion!==newRegion){if(currentRegion!==undefined&&highlightEnabled){this.removeHighlight()}this.currentRegion=newRegion;if(newRegion!==undefined&&highlightEnabled){this.renderHighlight()}return true}return false},clearRegionHighlight:function(){if(this.currentRegion!==undefined){this.removeHighlight();this.currentRegion=undefined;return true}return false},renderHighlight:function(){this.changeHighlight(true)},removeHighlight:function(){this.changeHighlight(false)},changeHighlight:function(highlight){},getCurrentRegionTooltip:function(){var options=this.options,header="",entries=[],fields,formats,formatlen,fclass,text,i,showFields,showFieldsKey,newFields,fv,formatter,format,fieldlen,j;if(this.currentRegion===undefined){return""}fields=this.getCurrentRegionFields();formatter=options.get("tooltipFormatter");if(formatter){return formatter(this,options,fields)}if(options.get("tooltipChartTitle")){header+='<div class="jqs jqstitle">'+options.get("tooltipChartTitle")+"</div>\n"}formats=this.options.get("tooltipFormat");if(!formats){return""}if(!$.isArray(formats)){formats=[formats]}if(!$.isArray(fields)){fields=[fields]}showFields=this.options.get("tooltipFormatFieldlist");showFieldsKey=this.options.get("tooltipFormatFieldlistKey");if(showFields&&showFieldsKey){newFields=[];for(i=fields.length;i--;){fv=fields[i][showFieldsKey];if((j=$.inArray(fv,showFields))!=-1){newFields[j]=fields[i]}}fields=newFields}formatlen=formats.length;fieldlen=fields.length;for(i=0;i<formatlen;i++){format=formats[i];if(typeof format==="string"){format=new SPFormat(format)}fclass=format.fclass||"jqsfield";for(j=0;j<fieldlen;j++){if(!fields[j].isNull||!options.get("tooltipSkipNull")){$.extend(fields[j],{prefix:options.get("tooltipPrefix"),suffix:options.get("tooltipSuffix")});text=format.render(fields[j],options.get("tooltipValueLookups"),options);entries.push('<div class="'+fclass+'">'+text+"</div>")}}}if(entries.length){return header+entries.join("\n")}return""},getCurrentRegionFields:function(){},calcHighlightColor:function(color,options){var highlightColor=options.get("highlightColor"),lighten=options.get("highlightLighten"),parse,mult,rgbnew,i;if(highlightColor){return highlightColor}if(lighten){parse=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);if(parse){rgbnew=[];mult=color.length===4?16:1;for(i=0;i<3;i++){rgbnew[i]=clipval(Math.round(parseInt(parse[i+1],16)*mult*lighten),0,255)}return"rgb("+rgbnew.join(",")+")"}}return color}});barHighlightMixin={changeHighlight:function(highlight){var currentRegion=this.currentRegion,target=this.target,shapeids=this.regionShapes[currentRegion],newShapes;if(shapeids){newShapes=this.renderRegion(currentRegion,highlight);if($.isArray(newShapes)||$.isArray(shapeids)){target.replaceWithShapes(shapeids,newShapes);this.regionShapes[currentRegion]=$.map(newShapes,function(newShape){return newShape.id})}else{target.replaceWithShape(shapeids,newShapes);this.regionShapes[currentRegion]=newShapes.id}}},render:function(){var values=this.values,target=this.target,regionShapes=this.regionShapes,shapes,ids,i,j;if(!this.cls._super.render.call(this)){return}for(i=values.length;i--;){shapes=this.renderRegion(i);if(shapes){if($.isArray(shapes)){ids=[];for(j=shapes.length;j--;){shapes[j].append();ids.push(shapes[j].id)}regionShapes[i]=ids}else{shapes.append();regionShapes[i]=shapes.id}}else{regionShapes[i]=null}}target.render()}};$.fn.sparkline.line=line=createClass($.fn.sparkline._base,{type:"line",init:function(el,values,options,width,height){line._super.init.call(this,el,values,options,width,height);this.vertices=[];this.regionMap=[];this.xvalues=[];this.yvalues=[];this.yminmax=[];this.hightlightSpotId=null;this.lastShapeId=null;this.initTarget()},getRegion:function(el,x,y){var i,regionMap=this.regionMap;for(i=regionMap.length;i--;){if(regionMap[i]!==null&&x>=regionMap[i][0]&&x<=regionMap[i][1]){return regionMap[i][2]}}return undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.yvalues[currentRegion]===null,x:this.xvalues[currentRegion],y:this.yvalues[currentRegion],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:currentRegion}},renderHighlight:function(){var currentRegion=this.currentRegion,target=this.target,vertex=this.vertices[currentRegion],options=this.options,spotRadius=options.get("spotRadius"),highlightSpotColor=options.get("highlightSpotColor"),highlightLineColor=options.get("highlightLineColor"),highlightSpot,highlightLine;if(!vertex){return}if(spotRadius&&highlightSpotColor){highlightSpot=target.drawCircle(vertex[0],vertex[1],spotRadius,undefined,highlightSpotColor);this.highlightSpotId=highlightSpot.id;target.insertAfterShape(this.lastShapeId,highlightSpot)}if(highlightLineColor){highlightLine=target.drawLine(vertex[0],this.canvasTop,vertex[0],this.canvasTop+this.canvasHeight,highlightLineColor);this.highlightLineId=highlightLine.id;target.insertAfterShape(this.lastShapeId,highlightLine)}},removeHighlight:function(){var target=this.target;if(this.highlightSpotId){target.removeShapeId(this.highlightSpotId);this.highlightSpotId=null}if(this.highlightLineId){target.removeShapeId(this.highlightLineId);this.highlightLineId=null}},scanValues:function(){var values=this.values,valcount=values.length,xvalues=this.xvalues,yvalues=this.yvalues,yminmax=this.yminmax,i,val,isStr,isArray,sp;for(i=0;i<valcount;i++){val=values[i];isStr=typeof values[i]==="string";isArray=typeof values[i]==="object"&&values[i]instanceof Array;sp=isStr&&values[i].split(":");if(isStr&&sp.length===2){xvalues.push(Number(sp[0]));yvalues.push(Number(sp[1]));yminmax.push(Number(sp[1]))}else if(isArray){xvalues.push(val[0]);yvalues.push(val[1]);yminmax.push(val[1])}else{xvalues.push(i);if(values[i]===null||values[i]==="null"){yvalues.push(null)}else{yvalues.push(Number(val));yminmax.push(Number(val))}}}if(this.options.get("xvalues")){xvalues=this.options.get("xvalues")}this.maxy=this.maxyorg=Math.max.apply(Math,yminmax);this.miny=this.minyorg=Math.min.apply(Math,yminmax);this.maxx=Math.max.apply(Math,xvalues);this.minx=Math.min.apply(Math,xvalues);this.xvalues=xvalues;this.yvalues=yvalues;this.yminmax=yminmax},processRangeOptions:function(){var options=this.options,normalRangeMin=options.get("normalRangeMin"),normalRangeMax=options.get("normalRangeMax");if(normalRangeMin!==undefined){if(normalRangeMin<this.miny){this.miny=normalRangeMin}if(normalRangeMax>this.maxy){this.maxy=normalRangeMax}}if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.miny)){this.miny=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.maxy)){this.maxy=options.get("chartRangeMax")}if(options.get("chartRangeMinX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMinX")<this.minx)){this.minx=options.get("chartRangeMinX")}if(options.get("chartRangeMaxX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMaxX")>this.maxx)){this.maxx=options.get("chartRangeMaxX")}},drawNormalRange:function(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey){var normalRangeMin=this.options.get("normalRangeMin"),normalRangeMax=this.options.get("normalRangeMax"),ytop=canvasTop+Math.round(canvasHeight-canvasHeight*((normalRangeMax-this.miny)/rangey)),height=Math.round(canvasHeight*(normalRangeMax-normalRangeMin)/rangey);this.target.drawRect(canvasLeft,ytop,canvasWidth,height,undefined,this.options.get("normalRangeColor")).append()},render:function(){var options=this.options,target=this.target,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,vertices=this.vertices,spotRadius=options.get("spotRadius"),regionMap=this.regionMap,rangex,rangey,yvallast,canvasTop,canvasLeft,vertex,path,paths,x,y,xnext,xpos,xposnext,last,next,yvalcount,lineShapes,fillShapes,plen,valueSpots,hlSpotsEnabled,color,xvalues,yvalues,i;if(!line._super.render.call(this)){return}this.scanValues();this.processRangeOptions();xvalues=this.xvalues;yvalues=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2){return}canvasTop=canvasLeft=0;rangex=this.maxx-this.minx===0?1:this.maxx-this.minx;rangey=this.maxy-this.miny===0?1:this.maxy-this.miny;yvallast=this.yvalues.length-1;if(spotRadius&&(canvasWidth<spotRadius*4||canvasHeight<spotRadius*4)){spotRadius=0}if(spotRadius){hlSpotsEnabled=options.get("highlightSpotColor")&&!options.get("disableInteraction");if(hlSpotsEnabled||options.get("minSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.miny){canvasHeight-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("maxSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.maxy){canvasHeight-=Math.ceil(spotRadius);canvasTop+=Math.ceil(spotRadius)}if(hlSpotsEnabled||(options.get("minSpotColor")||options.get("maxSpotColor"))&&(yvalues[0]===this.miny||yvalues[0]===this.maxy)){canvasLeft+=Math.ceil(spotRadius);canvasWidth-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("spotColor")||(options.get("minSpotColor")||options.get("maxSpotColor")&&(yvalues[yvallast]===this.miny||yvalues[yvallast]===this.maxy))){canvasWidth-=Math.ceil(spotRadius)}}canvasHeight--;if(options.get("normalRangeMin")!==undefined&&!options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}path=[];paths=[path];last=next=null;yvalcount=yvalues.length;for(i=0;i<yvalcount;i++){x=xvalues[i];xnext=xvalues[i+1];y=yvalues[i];xpos=canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex));xposnext=i<yvalcount-1?canvasLeft+Math.round((xnext-this.minx)*(canvasWidth/rangex)):canvasWidth;next=xpos+(xposnext-xpos)/2;regionMap[i]=[last||0,next,i];last=next;if(y===null){if(i){if(yvalues[i-1]!==null){path=[];paths.push(path)}vertices.push(null)}}else{if(y<this.miny){y=this.miny}if(y>this.maxy){y=this.maxy}if(!path.length){path.push([xpos,canvasTop+canvasHeight])}vertex=[xpos,canvasTop+Math.round(canvasHeight-canvasHeight*((y-this.miny)/rangey))];path.push(vertex);vertices.push(vertex)}}lineShapes=[];fillShapes=[];plen=paths.length;for(i=0;i<plen;i++){path=paths[i];if(path.length){if(options.get("fillColor")){path.push([path[path.length-1][0],canvasTop+canvasHeight]);fillShapes.push(path.slice(0));path.pop()}if(path.length>2){path[0]=[path[0][0],path[1][1]]}lineShapes.push(path)}}plen=fillShapes.length;for(i=0;i<plen;i++){target.drawShape(fillShapes[i],options.get("fillColor"),options.get("fillColor")).append()}if(options.get("normalRangeMin")!==undefined&&options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}plen=lineShapes.length;for(i=0;i<plen;i++){target.drawShape(lineShapes[i],options.get("lineColor"),undefined,options.get("lineWidth")).append()}if(spotRadius&&options.get("valueSpots")){valueSpots=options.get("valueSpots");if(valueSpots.get===undefined){valueSpots=new RangeMap(valueSpots)}for(i=0;i<yvalcount;i++){color=valueSpots.get(yvalues[i]);if(color){target.drawCircle(canvasLeft+Math.round((xvalues[i]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[i]-this.miny)/rangey)),spotRadius,undefined,color).append()}}}if(spotRadius&&options.get("spotColor")&&yvalues[yvallast]!==null){target.drawCircle(canvasLeft+Math.round((xvalues[xvalues.length-1]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[yvallast]-this.miny)/rangey)),spotRadius,undefined,options.get("spotColor")).append()}if(this.maxy!==this.minyorg){if(spotRadius&&options.get("minSpotColor")){x=xvalues[$.inArray(this.minyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.minyorg-this.miny)/rangey)),spotRadius,undefined,options.get("minSpotColor")).append()}if(spotRadius&&options.get("maxSpotColor")){x=xvalues[$.inArray(this.maxyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.maxyorg-this.miny)/rangey)),spotRadius,undefined,options.get("maxSpotColor")).append()}}this.lastShapeId=target.getLastShapeId();this.canvasTop=canvasTop;target.render()}});$.fn.sparkline.bar=bar=createClass($.fn.sparkline._base,barHighlightMixin,{type:"bar",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10),chartRangeMin=options.get("chartRangeMin"),chartRangeMax=options.get("chartRangeMax"),chartRangeClip=options.get("chartRangeClip"),stackMin=Infinity,stackMax=-Infinity,isStackString,groupMin,groupMax,stackRanges,numValues,i,vlen,range,zeroAxis,xaxisOffset,min,max,clipMin,clipMax,stacked,vlist,j,slen,svals,val,yoffset,yMaxCalc,canvasHeightEf;bar._super.init.call(this,el,values,options,width,height);for(i=0,vlen=values.length;i<vlen;i++){val=values[i];isStackString=typeof val==="string"&&val.indexOf(":")>-1;if(isStackString||$.isArray(val)){stacked=true;if(isStackString){val=values[i]=normalizeValues(val.split(":"));

}val=remove(val,null);groupMin=Math.min.apply(Math,val);groupMax=Math.max.apply(Math,val);if(groupMin<stackMin){stackMin=groupMin}if(groupMax>stackMax){stackMax=groupMax}}}this.stacked=stacked;this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.width=width=values.length*barWidth+(values.length-1)*barSpacing;this.initTarget();if(chartRangeClip){clipMin=chartRangeMin===undefined?-Infinity:chartRangeMin;clipMax=chartRangeMax===undefined?Infinity:chartRangeMax}numValues=[];stackRanges=stacked?[]:numValues;var stackTotals=[];var stackRangesNeg=[];for(i=0,vlen=values.length;i<vlen;i++){if(stacked){vlist=values[i];values[i]=svals=[];stackTotals[i]=0;stackRanges[i]=stackRangesNeg[i]=0;for(j=0,slen=vlist.length;j<slen;j++){val=svals[j]=chartRangeClip?clipval(vlist[j],clipMin,clipMax):vlist[j];if(val!==null){if(val>0){stackTotals[i]+=val}if(stackMin<0&&stackMax>0){if(val<0){stackRangesNeg[i]+=Math.abs(val)}else{stackRanges[i]+=val}}else{stackRanges[i]+=Math.abs(val-(val<0?stackMax:stackMin))}numValues.push(val)}}}else{val=chartRangeClip?clipval(values[i],clipMin,clipMax):values[i];val=values[i]=normalizeValue(val);if(val!==null){numValues.push(val)}}}this.max=max=Math.max.apply(Math,numValues);this.min=min=Math.min.apply(Math,numValues);this.stackMax=stackMax=stacked?Math.max.apply(Math,stackTotals):max;this.stackMin=stackMin=stacked?Math.min.apply(Math,numValues):min;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<min)){min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>max)){max=options.get("chartRangeMax")}this.zeroAxis=zeroAxis=options.get("zeroAxis",true);if(min<=0&&max>=0&&zeroAxis){xaxisOffset=0}else if(zeroAxis==false){xaxisOffset=min}else if(min>0){xaxisOffset=min}else{xaxisOffset=max}this.xaxisOffset=xaxisOffset;range=stacked?Math.max.apply(Math,stackRanges)+Math.max.apply(Math,stackRangesNeg):max-min;this.canvasHeightEf=zeroAxis&&min<0?this.canvasHeight-2:this.canvasHeight-1;if(min<xaxisOffset){yMaxCalc=stacked&&max>=0?stackMax:max;yoffset=(yMaxCalc-xaxisOffset)/range*this.canvasHeight;if(yoffset!==Math.ceil(yoffset)){this.canvasHeightEf-=2;yoffset=Math.ceil(yoffset)}}else{yoffset=this.canvasHeight}this.yoffset=yoffset;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.range=range},getRegion:function(el,x,y){var result=Math.floor(x/this.totalBarWidth);return result<0||result>=this.values.length?undefined:result},getCurrentRegionFields:function(){var currentRegion=this.currentRegion,values=ensureArray(this.values[currentRegion]),result=[],value,i;for(i=values.length;i--;){value=values[i];result.push({isNull:value===null,value:value,color:this.calcColor(i,value,currentRegion),offset:currentRegion})}return result},calcColor:function(stacknum,value,valuenum){var colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,options=this.options,color,newColor;if(this.stacked){color=options.get("stackedBarColor")}else{color=value<0?options.get("negBarColor"):options.get("barColor")}if(value===0&&options.get("zeroColor")!==undefined){color=options.get("zeroColor")}if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}return $.isArray(color)?color[stacknum%color.length]:color},renderRegion:function(valuenum,highlight){var vals=this.values[valuenum],options=this.options,xaxisOffset=this.xaxisOffset,result=[],range=this.range,stacked=this.stacked,target=this.target,x=valuenum*this.totalBarWidth,canvasHeightEf=this.canvasHeightEf,yoffset=this.yoffset,y,height,color,isNull,yoffsetNeg,i,valcount,val,minPlotted,allMin;vals=$.isArray(vals)?vals:[vals];valcount=vals.length;val=vals[0];isNull=all(null,vals);allMin=all(xaxisOffset,vals,true);if(isNull){if(options.get("nullColor")){color=highlight?options.get("nullColor"):this.calcHighlightColor(options.get("nullColor"),options);y=yoffset>0?yoffset-1:yoffset;return target.drawRect(x,y,this.barWidth-1,0,color,color)}else{return undefined}}yoffsetNeg=yoffset;for(i=0;i<valcount;i++){val=vals[i];if(stacked&&val===xaxisOffset){if(!allMin||minPlotted){continue}minPlotted=true}if(range>0){height=Math.floor(canvasHeightEf*(Math.abs(val-xaxisOffset)/range))+1}else{height=1}if(val<xaxisOffset||val===xaxisOffset&&yoffset===0){y=yoffsetNeg;yoffsetNeg+=height}else{y=yoffset-height;yoffset-=height}color=this.calcColor(i,val,valuenum);if(highlight){color=this.calcHighlightColor(color,options)}result.push(target.drawRect(x,y,this.barWidth-1,height-1,color,color))}if(result.length===1){return result[0]}return result}});$.fn.sparkline.tristate=tristate=createClass($.fn.sparkline._base,barHighlightMixin,{type:"tristate",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10);tristate._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.values=$.map(values,Number);this.width=width=values.length*barWidth+(values.length-1)*barSpacing;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.initTarget()},getRegion:function(el,x,y){return Math.floor(x/this.totalBarWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],color:this.calcColor(this.values[currentRegion],currentRegion),offset:currentRegion}},calcColor:function(value,valuenum){var values=this.values,options=this.options,colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,color,newColor;if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}else if(values[valuenum]<0){color=options.get("negBarColor")}else if(values[valuenum]>0){color=options.get("posBarColor")}else{color=options.get("zeroBarColor")}return color},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,target=this.target,canvasHeight,height,halfHeight,x,y,color;canvasHeight=target.pixelHeight;halfHeight=Math.round(canvasHeight/2);x=valuenum*this.totalBarWidth;if(values[valuenum]<0){y=halfHeight;height=halfHeight-1}else if(values[valuenum]>0){y=0;height=halfHeight-1}else{y=halfHeight-1;height=2}color=this.calcColor(values[valuenum],valuenum);if(color===null){return}if(highlight){color=this.calcHighlightColor(color,options)}return target.drawRect(x,y,this.barWidth-1,height-1,color,color)}});$.fn.sparkline.discrete=discrete=createClass($.fn.sparkline._base,barHighlightMixin,{type:"discrete",init:function(el,values,options,width,height){discrete._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.values=values=$.map(values,Number);this.min=Math.min.apply(Math,values);this.max=Math.max.apply(Math,values);this.range=this.max-this.min;this.width=width=options.get("width")==="auto"?values.length*2:this.width;this.interval=Math.floor(width/values.length);this.itemWidth=width/values.length;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.min)){this.min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.max)){this.max=options.get("chartRangeMax")}this.initTarget();if(this.target){this.lineHeight=options.get("lineHeight")==="auto"?Math.round(this.canvasHeight*.3):options.get("lineHeight")}},getRegion:function(el,x,y){return Math.floor(x/this.itemWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],offset:currentRegion}},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,min=this.min,max=this.max,range=this.range,interval=this.interval,target=this.target,canvasHeight=this.canvasHeight,lineHeight=this.lineHeight,pheight=canvasHeight-lineHeight,ytop,val,color,x;val=clipval(values[valuenum],min,max);x=valuenum*interval;ytop=Math.round(pheight-pheight*((val-min)/range));color=options.get("thresholdColor")&&val<options.get("thresholdValue")?options.get("thresholdColor"):options.get("lineColor");if(highlight){color=this.calcHighlightColor(color,options)}return target.drawLine(x,ytop,x,ytop+lineHeight,color)}});$.fn.sparkline.bullet=bullet=createClass($.fn.sparkline._base,{type:"bullet",init:function(el,values,options,width,height){var min,max,vals;bullet._super.init.call(this,el,values,options,width,height);this.values=values=normalizeValues(values);vals=values.slice();vals[0]=vals[0]===null?vals[2]:vals[0];vals[1]=values[1]===null?vals[2]:vals[1];min=Math.min.apply(Math,values);max=Math.max.apply(Math,values);if(options.get("base")===undefined){min=min<0?min:0}else{min=options.get("base")}this.min=min;this.max=max;this.range=max-min;this.shapes={};this.valueShapes={};this.regiondata={};this.width=width=options.get("width")==="auto"?"4.0em":width;this.target=this.$el.simpledraw(width,height,options.get("composite"));if(!values.length){this.disabled=true}this.initTarget()},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{fieldkey:currentRegion.substr(0,1),value:this.values[currentRegion.substr(1)],region:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,shapeid=this.valueShapes[currentRegion],shape;delete this.shapes[shapeid];switch(currentRegion.substr(0,1)){case"r":shape=this.renderRange(currentRegion.substr(1),highlight);break;case"p":shape=this.renderPerformance(highlight);break;case"t":shape=this.renderTarget(highlight);break}this.valueShapes[currentRegion]=shape.id;this.shapes[shape.id]=currentRegion;this.target.replaceWithShape(shapeid,shape)},renderRange:function(rn,highlight){var rangeval=this.values[rn],rangewidth=Math.round(this.canvasWidth*((rangeval-this.min)/this.range)),color=this.options.get("rangeColors")[rn-2];if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,0,rangewidth-1,this.canvasHeight-1,color,color)},renderPerformance:function(highlight){var perfval=this.values[1],perfwidth=Math.round(this.canvasWidth*((perfval-this.min)/this.range)),color=this.options.get("performanceColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,Math.round(this.canvasHeight*.3),perfwidth-1,Math.round(this.canvasHeight*.4)-1,color,color)},renderTarget:function(highlight){var targetval=this.values[0],x=Math.round(this.canvasWidth*((targetval-this.min)/this.range)-this.options.get("targetWidth")/2),targettop=Math.round(this.canvasHeight*.1),targetheight=this.canvasHeight-targettop*2,color=this.options.get("targetColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(x,targettop,this.options.get("targetWidth")-1,targetheight-1,color,color)},render:function(){var vlen=this.values.length,target=this.target,i,shape;if(!bullet._super.render.call(this)){return}for(i=2;i<vlen;i++){shape=this.renderRange(i).append();this.shapes[shape.id]="r"+i;this.valueShapes["r"+i]=shape.id}if(this.values[1]!==null){shape=this.renderPerformance().append();this.shapes[shape.id]="p1";this.valueShapes.p1=shape.id}if(this.values[0]!==null){shape=this.renderTarget().append();this.shapes[shape.id]="t0";this.valueShapes.t0=shape.id}target.render()}});$.fn.sparkline.pie=pie=createClass($.fn.sparkline._base,{type:"pie",init:function(el,values,options,width,height){var total=0,i;pie._super.init.call(this,el,values,options,width,height);this.shapes={};this.valueShapes={};this.values=values=$.map(values,Number);if(options.get("width")==="auto"){this.width=this.height}if(values.length>0){for(i=values.length;i--;){total+=values[i]}}this.total=total;this.initTarget();this.radius=Math.floor(Math.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],percent:this.values[currentRegion]/this.total*100,color:this.options.get("sliceColors")[currentRegion%this.options.get("sliceColors").length],offset:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,newslice=this.renderSlice(currentRegion,highlight),shapeid=this.valueShapes[currentRegion];delete this.shapes[shapeid];this.target.replaceWithShape(shapeid,newslice);this.valueShapes[currentRegion]=newslice.id;this.shapes[newslice.id]=currentRegion},renderSlice:function(valuenum,highlight){var target=this.target,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),offset=options.get("offset"),circle=2*Math.PI,values=this.values,total=this.total,next=offset?2*Math.PI*(offset/360):0,start,end,i,vlen,color;vlen=values.length;for(i=0;i<vlen;i++){start=next;end=next;if(total>0){end=next+circle*(values[i]/total)}if(valuenum===i){color=options.get("sliceColors")[i%options.get("sliceColors").length];if(highlight){color=this.calcHighlightColor(color,options)}return target.drawPieSlice(radius,radius,radius-borderWidth,start,end,undefined,color)}next=end}},render:function(){var target=this.target,values=this.values,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),shape,i;if(!pie._super.render.call(this)){return}if(borderWidth){target.drawCircle(radius,radius,Math.floor(radius-borderWidth/2),options.get("borderColor"),undefined,borderWidth).append()}for(i=values.length;i--;){if(values[i]){shape=this.renderSlice(i).append();this.valueShapes[i]=shape.id;this.shapes[shape.id]=i}}target.render()}});$.fn.sparkline.box=box=createClass($.fn.sparkline._base,{type:"box",init:function(el,values,options,width,height){box._super.init.call(this,el,values,options,width,height);this.values=$.map(values,Number);this.width=options.get("width")==="auto"?"4.0em":width;this.initTarget();if(!this.values.length){this.disabled=1}},getRegion:function(){return 1},getCurrentRegionFields:function(){var result=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];if(this.loutlier!==undefined){result.push({field:"lo",value:this.loutlier})}if(this.routlier!==undefined){result.push({field:"ro",value:this.routlier})}if(this.lwhisker!==undefined){result.push({field:"lw",value:this.lwhisker})}if(this.rwhisker!==undefined){result.push({field:"rw",value:this.rwhisker})}return result},render:function(){var target=this.target,values=this.values,vlen=values.length,options=this.options,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,minValue=options.get("chartRangeMin")===undefined?Math.min.apply(Math,values):options.get("chartRangeMin"),maxValue=options.get("chartRangeMax")===undefined?Math.max.apply(Math,values):options.get("chartRangeMax"),canvasLeft=0,lwhisker,loutlier,iqr,q1,q2,q3,rwhisker,routlier,i,size,unitSize;if(!box._super.render.call(this)){return}if(options.get("raw")){if(options.get("showOutliers")&&values.length>5){loutlier=values[0];lwhisker=values[1];q1=values[2];q2=values[3];q3=values[4];rwhisker=values[5];routlier=values[6]}else{lwhisker=values[0];q1=values[1];q2=values[2];q3=values[3];rwhisker=values[4]}}else{values.sort(function(a,b){return a-b});q1=quartile(values,1);q2=quartile(values,2);q3=quartile(values,3);iqr=q3-q1;if(options.get("showOutliers")){lwhisker=rwhisker=undefined;for(i=0;i<vlen;i++){if(lwhisker===undefined&&values[i]>q1-iqr*options.get("outlierIQR")){lwhisker=values[i]}if(values[i]<q3+iqr*options.get("outlierIQR")){rwhisker=values[i]}}loutlier=values[0];routlier=values[vlen-1]}else{lwhisker=values[0];rwhisker=values[vlen-1]}}this.quartiles=[q1,q2,q3];this.lwhisker=lwhisker;this.rwhisker=rwhisker;this.loutlier=loutlier;this.routlier=routlier;unitSize=canvasWidth/(maxValue-minValue+1);if(options.get("showOutliers")){canvasLeft=Math.ceil(options.get("spotRadius"));canvasWidth-=2*Math.ceil(options.get("spotRadius"));unitSize=canvasWidth/(maxValue-minValue+1);if(loutlier<lwhisker){target.drawCircle((loutlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}if(routlier>rwhisker){target.drawCircle((routlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}}target.drawRect(Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q3-q1)*unitSize),Math.round(canvasHeight*.8),options.get("boxLineColor"),options.get("boxFillColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q3-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.9),options.get("medianColor")).append();if(options.get("target")){size=Math.ceil(options.get("spotRadius"));target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2-size),Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2+size),options.get("targetColor")).append();target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft-size),Math.round(canvasHeight/2),Math.round((options.get("target")-minValue)*unitSize+canvasLeft+size),Math.round(canvasHeight/2),options.get("targetColor")).append()}target.render()}});VShape=createClass({init:function(target,id,type,args){this.target=target;this.id=id;this.type=type;this.args=args},append:function(){this.target.appendShape(this);return this}});VCanvas_base=createClass({_pxregex:/(\d+)(px)?\s*$/i,init:function(width,height,target){if(!width){return}this.width=width;this.height=height;this.target=target;this.lastShapeId=null;if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this)},drawLine:function(x1,y1,x2,y2,lineColor,lineWidth){return this.drawShape([[x1,y1],[x2,y2]],lineColor,lineWidth)},drawShape:function(path,lineColor,fillColor,lineWidth){return this._genShape("Shape",[path,lineColor,fillColor,lineWidth])},drawCircle:function(x,y,radius,lineColor,fillColor,lineWidth){return this._genShape("Circle",[x,y,radius,lineColor,fillColor,lineWidth])},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){return this._genShape("PieSlice",[x,y,radius,startAngle,endAngle,lineColor,fillColor])},drawRect:function(x,y,width,height,lineColor,fillColor){return this._genShape("Rect",[x,y,width,height,lineColor,fillColor])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(el,target){$(target).html(el)},_calculatePixelDims:function(width,height,canvas){var match;match=this._pxregex.exec(height);if(match){this.pixelHeight=match[1]}else{this.pixelHeight=$(canvas).height()}match=this._pxregex.exec(width);if(match){this.pixelWidth=match[1]}else{this.pixelWidth=$(canvas).width()}},_genShape:function(shapetype,shapeargs){var id=shapeCount++;shapeargs.unshift(id);return new VShape(this,id,shapetype,shapeargs)},appendShape:function(shape){alert("appendShape not implemented")},replaceWithShape:function(shapeid,shape){alert("replaceWithShape not implemented")},insertAfterShape:function(shapeid,shape){alert("insertAfterShape not implemented")},removeShapeId:function(shapeid){alert("removeShapeId not implemented")},getShapeAt:function(el,x,y){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}});VCanvas_canvas=createClass(VCanvas_base,{init:function(width,height,target,interact){VCanvas_canvas._super.init.call(this,width,height,target);this.canvas=document.createElement("canvas");if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);$(this.canvas).css({display:"inline-block",width:width,height:height,verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;this.interact=interact;this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined;$(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(lineColor,fillColor,lineWidth){var context=this.canvas.getContext("2d");if(lineColor!==undefined){context.strokeStyle=lineColor}context.lineWidth=lineWidth===undefined?1:lineWidth;if(fillColor!==undefined){context.fillStyle=fillColor}return context},reset:function(){var context=this._getContext();context.clearRect(0,0,this.pixelWidth,this.pixelHeight);this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth),i,plen;context.beginPath();context.moveTo(path[0][0]+.5,path[0][1]+.5);for(i=1,plen=path.length;i<plen;i++){context.lineTo(path[i][0]+.5,path[i][1]+.5)}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth);context.beginPath();context.arc(x,y,radius,0,2*Math.PI,false);if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(x,y);context.arc(x,y,radius,startAngle,endAngle,false);context.lineTo(x,y);context.closePath();if(lineColor!==undefined){context.stroke()}if(fillColor){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x+width,y],[x+width,y+height],[x,y+height],[x,y]],lineColor,fillColor)},appendShape:function(shape){this.shapes[shape.id]=shape;this.shapeseq.push(shape.id);this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;this.shapes[shape.id]=shape;for(i=shapeseq.length;i--;){if(shapeseq[i]==shapeid){shapeseq[i]=shape.id}}delete this.shapes[shapeid]},replaceWithShapes:function(shapeids,shapes){var shapeseq=this.shapeseq,shapemap={},sid,i,first;for(i=shapeids.length;i--;){shapemap[shapeids[i]]=true}for(i=shapeseq.length;i--;){sid=shapeseq[i];if(shapemap[sid]){shapeseq.splice(i,1);delete this.shapes[sid];first=i}}for(i=shapes.length;i--;){shapeseq.splice(first,0,shapes[i].id);this.shapes[shapes[i].id]=shapes[i]}},insertAfterShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i+1,0,shape.id);this.shapes[shape.id]=shape;return}}},removeShapeId:function(shapeid){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i,1);break}}delete this.shapes[shapeid]},getShapeAt:function(el,x,y){this.targetX=x;this.targetY=y;this.render();return this.currentTargetShapeId},render:function(){var shapeseq=this.shapeseq,shapes=this.shapes,shapeCount=shapeseq.length,context=this._getContext(),shapeid,shape,i;context.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(i=0;i<shapeCount;i++){shapeid=shapeseq[i];shape=shapes[shapeid];this["_draw"+shape.type].apply(this,shape.args)}if(!this.interact){this.shapes={};this.shapeseq=[]}}});VCanvas_vml=createClass(VCanvas_base,{init:function(width,height,target){var groupel;VCanvas_vml._super.init.call(this,width,height,target);if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);this.canvas=document.createElement("span");$(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:width,height:height,margin:"0px",padding:"0px",verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;groupel='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>';this.canvas.insertAdjacentHTML("beforeEnd",groupel);this.group=$(this.canvas).children()[0];this.rendered=false;this.prerender=""},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var vpath=[],initial,stroke,fill,closed,vel,plen,i;for(i=0,plen=path.length;i<plen;i++){vpath[i]=""+path[i][0]+","+path[i][1]}initial=vpath.splice(0,1);lineWidth=lineWidth===undefined?1:lineWidth;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';closed=vpath[0]===vpath[vpath.length-1]?"x ":"";vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+initial+" l "+vpath.join(", ")+" "+closed+'e">'+" </v:shape>";return vel},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var stroke,fill,vel;x-=radius;y-=radius;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel="<v:oval "+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;top:'+y+"px; left:"+x+"px; width:"+radius*2+"px; height:"+radius*2+'px"></v:oval>';return vel},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var vpath,startx,starty,endx,endy,stroke,fill,vel;if(startAngle===endAngle){return""}if(endAngle-startAngle===2*Math.PI){startAngle=0;endAngle=2*Math.PI}startx=x+Math.round(Math.cos(startAngle)*radius);starty=y+Math.round(Math.sin(startAngle)*radius);endx=x+Math.round(Math.cos(endAngle)*radius);endy=y+Math.round(Math.sin(endAngle)*radius);if(startx===endx&&starty===endy){if(endAngle-startAngle<Math.PI){return""}startx=endx=x+radius;starty=endy=y}if(startx===endx&&starty===endy&&endAngle-startAngle<Math.PI){return""}vpath=[x-radius,y-radius,x+radius,y+radius,startx,starty,endx,endy];stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="1px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+x+","+y+" wa "+vpath.join(", ")+' x e">'+" </v:shape>";return vel},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x,y+height],[x+width,y+height],[x+width,y],[x,y]],lineColor,fillColor)},reset:function(){this.group.innerHTML=""},appendShape:function(shape){var vel=this["_draw"+shape.type].apply(this,shape.args);if(this.rendered){this.group.insertAdjacentHTML("beforeEnd",vel)}else{this.prerender+=vel}this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].outerHTML=vel},replaceWithShapes:function(shapeids,shapes){var existing=$("#jqsshape"+shapeids[0]),replace="",slen=shapes.length,i;for(i=0;i<slen;i++){replace+=this["_draw"+shapes[i].type].apply(this,shapes[i].args)}existing[0].outerHTML=replace;for(i=1;i<shapeids.length;i++){$("#jqsshape"+shapeids[i]).remove()}},insertAfterShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].insertAdjacentHTML("afterEnd",vel)},removeShapeId:function(shapeid){var existing=$("#jqsshape"+shapeid);this.group.removeChild(existing[0])},getShapeAt:function(el,x,y){var shapeid=el.id.substr(8);return shapeid},render:function(){if(!this.rendered){this.group.innerHTML=this.prerender;this.rendered=true}}})})})(document,Math);
/**
 * jVectorMap version 1.2.2
 *
 * Copyright 2011-2013, Kirill Lebedev
 * Licensed under the MIT license.
 *
 */(function(e){var t={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};e.fn.vectorMap=function(e){var n,r,i,n=this.children(".jvectormap-container").data("mapObject");if(e==="addMap")jvm.WorldMap.maps[arguments[1]]=arguments[2];else{if(!(e!=="set"&&e!=="get"||!t[e][arguments[1]]))return r=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),n[e+r].apply(n,Array.prototype.slice.call(arguments,2));e=e||{},e.container=this,n=new jvm.WorldMap(e)}return this}})(jQuery),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);var jvm={inherits:function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.parentClass=t},mixin:function(e,t){var n;for(n in t.prototype)t.prototype.hasOwnProperty(n)&&(e.prototype[n]=t.prototype[n])},min:function(e){var t=Number.MAX_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]<t&&(t=e[n]);else for(n in e)e[n]<t&&(t=e[n]);return t},max:function(e){var t=Number.MIN_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]>t&&(t=e[n]);else for(n in e)e[n]>t&&(t=e[n]);return t},keys:function(e){var t=[],n;for(n in e)t.push(n);return t},values:function(e){var t=[],n,r;for(r=0;r<arguments.length;r++){e=arguments[r];for(n in e)t.push(e[n])}return t}};jvm.$=jQuery,jvm.AbstractElement=function(e,t){this.node=this.createElement(e),this.name=e,this.properties={},t&&this.set(t)},jvm.AbstractElement.prototype.set=function(e,t){var n;if(typeof e=="object")for(n in e)this.properties[n]=e[n],this.applyAttr(n,e[n]);else this.properties[e]=t,this.applyAttr(e,t)},jvm.AbstractElement.prototype.get=function(e){return this.properties[e]},jvm.AbstractElement.prototype.applyAttr=function(e,t){this.node.setAttribute(e,t)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(e,t,n){this.container=e,this.setSize(t,n),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(e,t){t=t||this.rootElement,t.add(e),e.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(e,t,n){var r=new jvm[this.classPrefix+"PathElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addCircle=function(e,t,n){var r=new jvm[this.classPrefix+"CircleElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addGroup=function(e){var t=new jvm[this.classPrefix+"GroupElement"];return e?e.node.appendChild(t.node):this.node.appendChild(t.node),t.canvas=this,t},jvm.AbstractShapeElement=function(e,t,n){this.style=n||{},this.style.current={},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setHovered=function(e){this.isHovered!==e&&(this.isHovered=e,this.updateStyle())},jvm.AbstractShapeElement.prototype.setSelected=function(e){this.isSelected!==e&&(this.isSelected=e,this.updateStyle(),jvm.$(this.node).trigger("selected",[e]))},jvm.AbstractShapeElement.prototype.setStyle=function(e,t){var n={};typeof e=="object"?n=e:n[e]=t,jvm.$.extend(this.style.current,n),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var e={};jvm.AbstractShapeElement.mergeStyles(e,this.style.initial),jvm.AbstractShapeElement.mergeStyles(e,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(e,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.selectedHover)),this.set(e)},jvm.AbstractShapeElement.mergeStyles=function(e,t){var n;t=t||{};for(n in t)t[n]===null?delete e[n]:e[n]=t[n]},jvm.SVGElement=function(e,t){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(e){return document.createElementNS(jvm.SVGElement.svgns,e)},jvm.SVGElement.prototype.addClass=function(e){this.node.setAttribute("class",e)},jvm.SVGElement.prototype.getElementCtr=function(e){return jvm["SVG"+e]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.SVGCanvasElement=function(e,t,n){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(e,t){this.width=e,this.height=t,this.node.setAttribute("width",e),this.node.setAttribute("height",t)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.setAttribute("transform","scale("+e+") translate("+t+", "+n+")")},jvm.SVGShapeElement=function(e,t,n){jvm.SVGShapeElement.parentClass.call(this,e,t),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGPathElement=function(e,t){jvm.SVGPathElement.parentClass.call(this,"path",e,t),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(e,t){jvm.SVGCircleElement.parentClass.call(this,"circle",e,t)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.VMLElement=function(e,t){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<rvml:"+e+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(e){return jvm["VML"+e]},jvm.VMLElement.prototype.addClass=function(e){jvm.$(this.node).addClass(e)},jvm.VMLElement.prototype.applyAttr=function(e,t){this.node[e]=t},jvm.VMLElement.prototype.getBBox=function(){var e=jvm.$(this.node);return{x:e.position().left/this.canvas.scale,y:e.position().top/this.canvas.scale,width:e.width()/this.canvas.scale,height:e.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.VMLCanvasElement=function(e,t,n){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(e,t){var n,r,i,s;this.width=e,this.height=t,this.node.style.width=e+"px",this.node.style.height=t+"px",this.node.coordsize=e+" "+t,this.node.coordorigin="0 0";if(this.rootElement){n=this.rootElement.node.getElementsByTagName("shape");for(i=0,s=n.length;i<s;i++)n[i].coordsize=e+" "+t,n[i].style.width=e+"px",n[i].style.height=t+"px";r=this.node.getElementsByTagName("group");for(i=0,s=r.length;i<s;i++)r[i].coordsize=e+" "+t,r[i].style.width=e+"px",r[i].style.height=t+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.coordorigin=this.width-t-this.width/100+","+(this.height-n-this.height/100),this.rootElement.node.coordsize=this.width/e+","+this.height/e},jvm.VMLShapeElement=function(e,t){jvm.VMLShapeElement.parentClass.call(this,e,t),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(e,t){switch(e){case"fill":this.node.fillcolor=t;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(t*100)+"%";break;case"stroke":t==="none"?this.node.stroked=!1:this.node.stroked=!0,this.node.strokecolor=t;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(t*100)+"%";break;case"stroke-width":parseInt(t,10)===0?this.node.stroked=!1:this.node.stroked=!0,this.node.strokeweight=t;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(t);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(e,t){var n=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",e,t),this.node.coordorigin="0 0",n.node.on=!0,n.node.matrix="0.01,0,0,0.01,0,0",n.node.offset="0,0",this.node.appendChild(n.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(e,t){e==="d"?this.node.path=jvm.VMLPathElement.pathSvgToVml(t):jvm.VMLShapeElement.prototype.applyAttr.call(this,e,t)},jvm.VMLPathElement.pathSvgToVml=function(e){var t="",n=0,r=0,i,s;return e=e.replace(/(-?\d+)e(-?\d+)/g,"0"),e.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(e,t,o,u){o=o.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),o[0]||o.shift();for(var a=0,f=o.length;a<f;a++)o[a]=Math.round(100*o[a]);switch(t){case"m":return n+=o[0],r+=o[1],"t"+o.join(",");case"M":return n=o[0],r=o[1],"m"+o.join(",");case"l":return n+=o[0],r+=o[1],"r"+o.join(",");case"L":return n=o[0],r=o[1],"l"+o.join(",");case"h":return n+=o[0],"r"+o[0]+",0";case"H":return n=o[0],"l"+n+","+r;case"v":return r+=o[0],"r0,"+o[0];case"V":return r=o[0],"l"+n+","+r;case"c":return i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"C":return i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",");case"s":return o.unshift(r-s),o.unshift(n-i),i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"S":return o.unshift(r+r-s),o.unshift(n+n-i),i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(e,t){jvm.VMLCircleElement.parentClass.call(this,"oval",e,t)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(e,t){switch(e){case"r":this.node.style.width=t*2+"px",this.node.style.height=t*2+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!t)return;this.node.style.left=t-(this.get("r")||0)+"px";break;case"cy":if(!t)return;this.node.style.top=t-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,e,t)}},jvm.VectorCanvas=function(e,t,n){return this.mode=window.SVGAngle?"svg":"vml",this.mode=="svg"?this.impl=new jvm.SVGCanvasElement(e,t,n):this.impl=new jvm.VMLCanvasElement(e,t,n),this.impl},jvm.SimpleScale=function(e){this.scale=e},jvm.SimpleScale.prototype.getValue=function(e){return e},jvm.OrdinalScale=function(e){this.scale=e},jvm.OrdinalScale.prototype.getValue=function(e){return this.scale[e]},jvm.NumericScale=function(e,t,n,r){this.scale=[],t=t||"linear",e&&this.setScale(e),t&&this.setNormalizeFunction(t),n&&this.setMin(n),r&&this.setMax(r)},jvm.NumericScale.prototype={setMin:function(e){this.clearMinValue=e,typeof this.normalize=="function"?this.minValue=this.normalize(e):this.minValue=e},setMax:function(e){this.clearMaxValue=e,typeof this.normalize=="function"?this.maxValue=this.normalize(e):this.maxValue=e},setScale:function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=[e[t]]},setNormalizeFunction:function(e){e==="polynomial"?this.normalize=function(e){return Math.pow(e,.2)}:e==="linear"?delete this.normalize:this.normalize=e,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(e){var t=[],n=0,r,i=0,s;typeof this.normalize=="function"&&(e=this.normalize(e));for(i=0;i<this.scale.length-1;i++)r=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),t.push(r),n+=r;s=(this.maxValue-this.minValue)/n;for(i=0;i<t.length;i++)t[i]*=s;i=0,e-=this.minValue;while(e-t[i]>=0)e-=t[i],i++;return i==this.scale.length-1?e=this.vectorToNum(this.scale[i]):e=this.vectorToNum(this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),e/t[i]))),e},vectorToNum:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=Math.round(e[n])*Math.pow(256,e.length-n-1);return t},vectorSubtract:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]-t[r];return n},vectorAdd:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]+t[r];return n},vectorMult:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]*t;return n},vectorLength:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=e[n]*e[n];return Math.sqrt(t)}},jvm.ColorScale=function(e,t,n,r){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=jvm.ColorScale.rgbToArray(e[t])},jvm.ColorScale.prototype.getValue=function(e){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,e))},jvm.ColorScale.arrayToRgb=function(e){var t="#",n,r;for(r=0;r<e.length;r++)n=e[r].toString(16),t+=n.length==1?"0"+n:n;return t},jvm.ColorScale.numToRgb=function(e){e=e.toString(16);while(e.length<6)e="0"+e;return"#"+e},jvm.ColorScale.rgbToArray=function(e){return e=e.substr(1),[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]},jvm.DataSeries=function(e,t){var n;e=e||{},e.attribute=e.attribute||"fill",this.elements=t,this.params=e,e.attributes&&this.setAttributes(e.attributes),jvm.$.isArray(e.scale)?(n=e.attribute==="fill"||e.attribute==="stroke"?jvm.ColorScale:jvm.NumericScale,this.scale=new n(e.scale,e.normalizeFunction,e.min,e.max)):e.scale?this.scale=new jvm.OrdinalScale(e.scale):this.scale=new jvm.SimpleScale(e.scale),this.values=e.values||{},this.setValues(this.values)},jvm.DataSeries.prototype={setAttributes:function(e,t){var n=e,r;if(typeof e=="string")this.elements[e]&&this.elements[e].setStyle(this.params.attribute,t);else for(r in n)this.elements[r]&&this.elements[r].element.setStyle(this.params.attribute,n[r])},setValues:function(e){var t=Number.MIN_VALUE,n=Number.MAX_VALUE,r,i,s={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(i in e)e[i]?s[i]=this.scale.getValue(e[i]):s[i]=this.elements[i].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(i in e)r=parseFloat(e[i]),r>t&&(t=e[i]),r<n&&(n=r);this.params.min||this.scale.setMin(n),this.params.max||this.scale.setMax(t),this.params.min=n,this.params.max=t}for(i in e)r=parseFloat(e[i]),isNaN(r)?s[i]=this.elements[i].element.style.initial[this.params.attribute]:s[i]=this.scale.getValue(r)}this.setAttributes(s),jvm.$.extend(this.values,e)},clear:function(){var e,t={};for(e in this.values)this.elements[e]&&(t[e]=this.elements[e].element.style.initial[this.params.attribute]);this.setAttributes(t),this.values={}},setScale:function(e){this.scale.setScale(e),this.values&&this.setValues(this.values)},setNormalizeFunction:function(e){this.scale.setNormalizeFunction(e),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(e){return e>0?1:e<0?-1:e},mill:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*e)*this.radDeg))/.8}},mill_inv:function(e,t,n){return{lat:(2.5*Math.atan(Math.exp(.8*t/this.radius))-5*Math.PI/8)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},merc:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+e*Math.PI/360))}},merc_inv:function(e,t,n){return{lat:(2*Math.atan(Math.exp(t/this.radius))-Math.PI/2)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},aea:function(e,t,n){var r=0,i=n*this.radDeg,s=29.5*this.radDeg,o=45.5*this.radDeg,u=e*this.radDeg,a=t*this.radDeg,f=(Math.sin(s)+Math.sin(o))/2,l=Math.cos(s)*Math.cos(s)+2*f*Math.sin(s),c=f*(a-i),h=Math.sqrt(l-2*f*Math.sin(u))/f,p=Math.sqrt(l-2*f*Math.sin(r))/f;return{x:h*Math.sin(c)*this.radius,y:-(p-h*Math.cos(c))*this.radius}},aea_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=29.5*this.radDeg,a=45.5*this.radDeg,f=(Math.sin(u)+Math.sin(a))/2,l=Math.cos(u)*Math.cos(u)+2*f*Math.sin(u),c=Math.sqrt(l-2*f*Math.sin(s))/f,h=Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:Math.asin((l-h*h*f*f)/(2*f))*this.degRad,lng:(o+p/f)*this.degRad}},lcc:function(e,t,n){var r=0,i=n*this.radDeg,s=t*this.radDeg,o=33*this.radDeg,u=45*this.radDeg,a=e*this.radDeg,f=Math.log(Math.cos(o)*(1/Math.cos(u)))/Math.log(Math.tan(Math.PI/4+u/2)*(1/Math.tan(Math.PI/4+o/2))),l=Math.cos(o)*Math.pow(Math.tan(Math.PI/4+o/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+a/2),f),h=l*Math.pow(1/Math.tan(Math.PI/4+r/2),f);return{x:c*Math.sin(f*(s-i))*this.radius,y:-(h-c*Math.cos(f*(s-i)))*this.radius}},lcc_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=33*this.radDeg,a=45*this.radDeg,f=Math.log(Math.cos(u)*(1/Math.cos(a)))/Math.log(Math.tan(Math.PI/4+a/2)*(1/Math.tan(Math.PI/4+u/2))),l=Math.cos(u)*Math.pow(Math.tan(Math.PI/4+u/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+s/2),f),h=this.sgn(f)*Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:(2*Math.atan(Math.pow(l/h,1/f))-Math.PI/2)*this.degRad,lng:(o+p/f)*this.degRad}}},jvm.WorldMap=function(e){var t=this,n;this.params=jvm.$.extend(!0,{},jvm.WorldMap.defaultParams,e);if(!jvm.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.WorldMap.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"),this.params.container.append(this.container),this.container.data("mapObject",this),this.container.css({position:"relative",overflow:"hidden"}),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){t.setSize()},jvm.$(window).resize(this.onResize);for(n in jvm.WorldMap.apiEvents)this.params[n]&&this.container.bind(jvm.WorldMap.apiEvents[n]+".jvectormap",this.params[n]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(),this.bindElementEvents(),this.createLabel(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.setSize(),this.params.focusOn&&(typeof this.params.focusOn=="object"?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.params.series&&this.createSeries()},jvm.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(e){this.container.css("background-color",e)},resize:function(){var e=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/e,this.transX*=this.baseScale/e,this.transY*=this.baseScale/e},setSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var e,t;for(e in this.series)for(t=0;t<this.series[e].length;t++)this.series[e][t].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var e,t,n,r;this.defaultWidth*this.scale<=this.width?(e=(this.width-this.defaultWidth*this.scale)/(2*this.scale),n=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(e=0,n=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(t=(this.height-this.defaultHeight*this.scale)/(2*this.scale),r=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(t=0,r=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>t?this.transY=t:this.transY<r&&(this.transY=r),this.transX>e?this.transX=e:this.transX<n&&(this.transX=n),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var e=!1,t,n,r=this;this.container.mousemove(function(i){return e&&(r.transX-=(t-i.pageX)/r.scale,r.transY-=(n-i.pageY)/r.scale,r.applyTransform(),t=i.pageX,n=i.pageY),!1}).mousedown(function(r){return e=!0,t=r.pageX,n=r.pageY,!1}),jvm.$("body").mouseup(function(){e=!1}),this.params.zoomOnScroll&&this.container.mousewheel(function(e,t,n,i){var s=jvm.$(r.container).offset(),o=e.pageX-s.left,u=e.pageY-s.top,a=Math.pow(1.3,i);r.label.hide(),r.setScale(r.scale*a,o,u),e.preventDefault()})},bindContainerTouchEvents:function(){var e,t,n=this,r,i,s,o,u,a=function(a){var f=a.originalEvent.touches,l,c,h,p;a.type=="touchstart"&&(u=0),f.length==1?(u==1&&(h=n.transX,p=n.transY,n.transX-=(r-f[0].pageX)/n.scale,n.transY-=(i-f[0].pageY)/n.scale,n.applyTransform(),n.label.hide(),(h!=n.transX||p!=n.transY)&&a.preventDefault()),r=f[0].pageX,i=f[0].pageY):f.length==2&&(u==2?(c=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2))/t,n.setScale(e*c,s,o),n.label.hide(),a.preventDefault()):(l=jvm.$(n.container).offset(),f[0].pageX>f[1].pageX?s=f[1].pageX+(f[0].pageX-f[1].pageX)/2:s=f[0].pageX+(f[1].pageX-f[0].pageX)/2,f[0].pageY>f[1].pageY?o=f[1].pageY+(f[0].pageY-f[1].pageY)/2:o=f[0].pageY+(f[1].pageY-f[0].pageY)/2,s-=l.left,o-=l.top,e=n.scale,t=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2)))),u=f.length};jvm.$(this.container).bind("touchstart",a),jvm.$(this.container).bind("touchmove",a)},bindElementEvents:function(){var e=this,t;this.container.mousemove(function(){t=!0}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(t){var n=this,r=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),i=r.indexOf("jvectormap-region")===-1?"marker":"region",s=i=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),o=i=="region"?e.regions[s].element:e.markers[s].element,u=i=="region"?e.mapData.paths[s].name:e.markers[s].config.name||"",a=jvm.$.Event(i+"LabelShow.jvectormap"),f=jvm.$.Event(i+"Over.jvectormap");t.type=="mouseover"?(e.container.trigger(f,[s]),f.isDefaultPrevented()||o.setHovered(!0),e.label.text(u),e.container.trigger(a,[e.label,s]),a.isDefaultPrevented()||(e.label.show(),e.labelWidth=e.label.width(),e.labelHeight=e.label.height())):(o.setHovered(!1),e.label.hide(),e.container.trigger(i+"Out.jvectormap",[s]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){t=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(n){var r=this,i=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),s=i.indexOf("jvectormap-region")===-1?"marker":"region",o=s=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),u=jvm.$.Event(s+"Click.jvectormap"),a=s=="region"?e.regions[o].element:e.markers[o].element;if(!t){e.container.trigger(u,[o]);if(s==="region"&&e.params.regionsSelectable||s==="marker"&&e.params.markersSelectable)u.isDefaultPrevented()||(e.params[s+"sSelectableOne"]&&e.clearSelected(s+"s"),a.setSelected(!a.isSelected))}})},bindZoomButtons:function(){var e=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){e.setScale(e.scale*e.params.zoomStep,e.width/2,e.height/2)}),this.container.find(".jvectormap-zoomout").click(function(){e.setScale(e.scale/e.params.zoomStep,e.width/2,e.height/2)})},createLabel:function(){var e=this;this.label=jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")),this.container.mousemove(function(t){var n=t.pageX-15-e.labelWidth,r=t.pageY-15-e.labelHeight;n<5&&(n=t.pageX+15),r<5&&(r=t.pageY+15),e.label.is(":visible")&&e.label.css({left:n,top:r})})},setScale:function(e,t,n,r){var i,s=jvm.$.Event("zoom.jvectormap");e>this.params.zoomMax*this.baseScale?e=this.params.zoomMax*this.baseScale:e<this.params.zoomMin*this.baseScale&&(e=this.params.zoomMin*this.baseScale),typeof t!="undefined"&&typeof n!="undefined"&&(i=e/this.scale,r?(this.transX=t+this.defaultWidth*(this.width/(this.defaultWidth*e))/2,this.transY=n+this.defaultHeight*(this.height/(this.defaultHeight*e))/2):(this.transX-=(i-1)/e*t,this.transY-=(i-1)/e*n)),this.scale=e,this.applyTransform(),this.container.trigger(s,[e/this.baseScale])},setFocus:function(e,t,n){var r,i,s,o,u;if(jvm.$.isArray(e)||this.regions[e]){jvm.$.isArray(e)?o=e:o=[e];for(u=0;u<o.length;u++)this.regions[o[u]]&&(i=this.regions[o[u]].element.getBBox(),i&&(typeof r=="undefined"?r=i:(s={x:Math.min(r.x,i.x),y:Math.min(r.y,i.y),width:Math.max(r.x+r.width,i.x+i.width)-Math.min(r.x,i.x),height:Math.max(r.y+r.height,i.y+i.height)-Math.min(r.y,i.y)},r=s)));this.setScale(Math.min(this.width/r.width,this.height/r.height),-(r.x+r.width/2),-(r.y+r.height/2),!0)}else e*=this.baseScale,this.setScale(e,-t*this.defaultWidth,-n*this.defaultHeight,!0)},getSelected:function(e){var t,n=[];for(t in this[e])this[e][t].element.isSelected&&n.push(t);return n},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(e,t){var n;typeof t!="object"&&(t=[t]);if(jvm.$.isArray(t))for(n=0;n<t.length;n++)this[e][t[n]].element.setSelected(!0);else for(n in t)this[e][n].element.setSelected(!!t[n])},setSelectedRegions:function(e){this.setSelected("regions",e)},setSelectedMarkers:function(e){this.setSelected("markers",e)},clearSelected:function(e){var t={},n=this.getSelected(e),r;for(r=0;r<n.length;r++)t[n[r]]=!1;this.setSelected(e,t)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(e){return this.mapData.paths[e].name},createRegions:function(){var e,t,n=this;for(e in this.mapData.paths)t=this.canvas.addPath({d:this.mapData.paths[e].path,"data-code":e},jvm.$.extend(!0,{},this.params.regionStyle)),jvm.$(t.node).bind("selected",function(e,t){n.container.trigger("regionSelected.jvectormap",[jvm.$(this).attr("data-code"),t,n.getSelectedRegions()])}),t.addClass("jvectormap-region jvectormap-element"),this.regions[e]={element:t,config:this.mapData.paths[e]}},createMarkers:function(e){var t,n,r,i,s,o=this;this.markersGroup=this.markersGroup||this.canvas.addGroup();if(jvm.$.isArray(e)){s=e.slice(),e={};for(t=0;t<s.length;t++)e[t]=s[t]}for(t in e)i=e[t]instanceof Array?{latLng:e[t]}:e[t],r=this.getMarkerPosition(i),r!==!1&&(n=this.canvas.addCircle({"data-index":t,cx:r.x,cy:r.y},jvm.$.extend(!0,{},this.params.markerStyle,{initial:i.style||{}}),this.markersGroup),n.addClass("jvectormap-marker jvectormap-element"),jvm.$(n.node).bind("selected",function(e,t){o.container.trigger("markerSelected.jvectormap",[jvm.$(this).attr("data-index"),t,o.getSelectedMarkers()])}),this.markers[t]&&this.removeMarkers([t]),this.markers[t]={element:n,config:i})},repositionMarkers:function(){var e,t;for(e in this.markers)t=this.getMarkerPosition(this.markers[e].config),t!==!1&&this.markers[e].element.setStyle({cx:t.x,cy:t.y})},getMarkerPosition:function(e){return jvm.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,e.latLng||[0,0]):{x:e.coords[0]*this.scale+this.transX*this.scale,y:e.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(e,t,n){var r={},i=[],s,o,n=n||[];r[e]=t;for(o=0;o<n.length;o++)s={},s[e]=n[o],i.push(s);this.addMarkers(r,i)},addMarkers:function(e,t){var n;t=t||[],this.createMarkers(e);for(n=0;n<t.length;n++)this.series.markers[n].setValues(t[n]||{})},removeMarkers:function(e){var t;for(t=0;t<e.length;t++)this.markers[e[t]].element.remove(),delete this.markers[e[t]]},removeAllMarkers:function(){var e,t=[];for(e in this.markers)t.push(e);this.removeMarkers(t)},latLngToPoint:function(e,t){var n,r=jvm.WorldMap.maps[this.params.map].projection,i=r.centralMeridian,s=this.width-this.baseTransX*2*this.baseScale,o=this.height-this.baseTransY*2*this.baseScale,u,a,f=this.scale/this.baseScale;return t<-180+i&&(t+=360),n=jvm.Proj[r.type](e,t,i),u=this.getInsetForPoint(n.x,n.y),u?(a=u.bbox,n.x=(n.x-a[0].x)/(a[1].x-a[0].x)*u.width*this.scale,n.y=(n.y-a[0].y)/(a[1].y-a[0].y)*u.height*this.scale,{x:n.x+this.transX*this.scale+u.left*this.scale,y:n.y+this.transY*this.scale+u.top*this.scale}):!1},pointToLatLng:function(e,t){var n=jvm.WorldMap.maps[this.params.map].projection,r=n.centralMeridian,i=jvm.WorldMap.maps[this.params.map].insets,s,o,u,a,f;for(s=0;s<i.length;s++){o=i[s],u=o.bbox,a=e-(this.transX*this.scale+o.left*this.scale),f=t-(this.transY*this.scale+o.top*this.scale),a=a/(o.width*this.scale)*(u[1].x-u[0].x)+u[0].x,f=f/(o.height*this.scale)*(u[1].y-u[0].y)+u[0].y;if(a>u[0].x&&a<u[1].x&&f>u[0].y&&f<u[1].y)return jvm.Proj[n.type+"_inv"](a,-f,r)}return!1},getInsetForPoint:function(e,t){var n=jvm.WorldMap.maps[this.params.map].insets,r,i;for(r=0;r<n.length;r++){i=n[r].bbox;if(e>i[0].x&&e<i[1].x&&t>i[0].y&&t<i[1].y)return n[r]}},createSeries:function(){var e,t;this.series={markers:[],regions:[]};for(t in this.params.series)for(e=0;e<this.params.series[t].length;e++)this.series[t][e]=new jvm.DataSeries(this.params.series[t][e],this[t])},remove:function(){this.label.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize)}},jvm.WorldMap.maps={},jvm.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover
:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}},jvm.WorldMap.apiEvents={onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"};
$.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900.0, "top": 0, "height": 440.7063107441331, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.02513512, "x": 20026572.394749384}], "left": 0}], "paths": {"BD": {"path": "M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z", "name": "Bangladesh"}, "BE": {"path": "M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z", "name": "Belgium"}, "BF": {"path": "M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z", "name": "Burkina Faso"}, "BG": {"path": "M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z", "name": "Bulgaria"}, "BA": {"path": "M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z", "name": "Bosnia and Herzegovina"}, "BN": {"path": "M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z", "name": "Brunei"}, "BO": {"path": "M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z", "name": "Bolivia"}, "JP": {"path": "M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z", "name": "Japan"}, "BI": {"path": "M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z", "name": "Burundi"}, "BJ": {"path": "M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z", "name": "Benin"}, "BT": {"path": "M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z", "name": "Bhutan"}, "JM": {"path": "M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z", "name": "Jamaica"}, "BW": {"path": "M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z", "name": "Botswana"}, "BR": {"path": "M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z", "name": "Brazil"}, "BS": {"path": "M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z", "name": "The Bahamas"}, "BY": {"path": "M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z", "name": "Belarus"}, "BZ": {"path": "M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z", "name": "Belize"}, "RU": {"path": "M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z", "name": "Russia"}, "RW": {"path": "M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z", "name": "Rwanda"}, "RS": {"path": "M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z", "name": "Republic of Serbia"}, "LT": {"path": "M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z", "name": "Lithuania"}, "LU": {"path": "M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z", "name": "Luxembourg"}, "LR": {"path": "M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z", "name": "Liberia"}, "RO": {"path": "M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z", "name": "Romania"}, "GW": {"path": "M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z", "name": "Guinea Bissau"}, "GT": {"path": "M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z", "name": "Guatemala"}, "GR": {"path": "M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z", "name": "Greece"}, "GQ": {"path": "M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z", "name": "Equatorial Guinea"}, "GY": {"path": "M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z", "name": "Guyana"}, "GE": {"path": "M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z", "name": "Georgia"}, "GB": {"path": "M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z", "name": "United Kingdom"}, "GA": {"path": "M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z", "name": "Gabon"}, "GN": {"path": "M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z", "name": "Guinea"}, "GM": {"path": "M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z", "name": "Gambia"}, "GL": {"path": "M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z", "name": "Greenland"}, "KW": {"path": "M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z", "name": "Kuwait"}, "GH": {"path": "M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z", "name": "Ghana"}, "OM": {"path": "M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z", "name": "Oman"}, "_3": {"path": "M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z", "name": "Somaliland"}, "_2": {"path": "M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z", "name": "Western Sahara"}, "_1": {"path": "M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z", "name": "Kosovo"}, "_0": {"path": "M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z", "name": "Northern Cyprus"}, "JO": {"path": "M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z", "name": "Jordan"}, "HR": {"path": "M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z", "name": "Croatia"}, "HT": {"path": "M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z", "name": "Haiti"}, "HU": {"path": "M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z", "name": "Hungary"}, "HN": {"path": "M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z", "name": "Honduras"}, "PR": {"path": "M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z", "name": "Puerto Rico"}, "PS": {"path": "M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z", "name": "West Bank"}, "PT": {"path": "M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z", "name": "Portugal"}, "PY": {"path": "M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z", "name": "Paraguay"}, "PA": {"path": "M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z", "name": "Panama"}, "PG": {"path": "M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z", "name": "Peru"}, "PK": {"path": "M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z", "name": "Pakistan"}, "PH": {"path": "M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z", "name": "Philippines"}, "PL": {"path": "M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z", "name": "Poland"}, "ZM": {"path": "M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z", "name": "Zambia"}, "EE": {"path": "M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z", "name": "Estonia"}, "EG": {"path": "M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z", "name": "Egypt"}, "ZA": {"path": "M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z", "name": "South Africa"}, "EC": {"path": "M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z", "name": "Ecuador"}, "AL": {"path": "M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z", "name": "Albania"}, "AO": {"path": "M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z", "name": "Angola"}, "KZ": {"path": "M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z", "name": "Kazakhstan"}, "ET": {"path": "M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z", "name": "Ethiopia"}, "ZW": {"path": "M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z", "name": "Zimbabwe"}, "ES": {"path": "M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z", "name": "Spain"}, "ER": {"path": "M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z", "name": "Eritrea"}, "ME": {"path": "M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z", "name": "Montenegro"}, "MD": {"path": "M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z", "name": "Moldova"}, "MG": {"path": "M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z", "name": "Madagascar"}, "MA": {"path": "M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z", "name": "Morocco"}, "UZ": {"path": "M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z", "name": "Uzbekistan"}, "MM": {"path": "M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z", "name": "Myanmar"}, "ML": {"path": "M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z", "name": "Mali"}, "MN": {"path": "M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z", "name": "Mongolia"}, "MK": {"path": "M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z", "name": "Macedonia"}, "MW": {"path": "M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z", "name": "Malawi"}, "MR": {"path": "M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z", "name": "Mauritania"}, "UG": {"path": "M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z", "name": "Uganda"}, "MY": {"path": "M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z", "name": "Malaysia"}, "MX": {"path": "M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z", "name": "Mexico"}, "VU": {"path": "M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z", "name": "Vanuatu"}, "FR": {"path": "M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z", "name": "France"}, "FI": {"path": "M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z", "name": "Finland"}, "FJ": {"path": "M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z", "name": "Fiji"}, "FK": {"path": "M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z", "name": "Falkland Islands"}, "NI": {"path": "M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z", "name": "Nicaragua"}, "NL": {"path": "M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z", "name": "Netherlands"}, "NO": {"path": "M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z", "name": "Norway"}, "NA": {"path": "M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z", "name": "Namibia"}, "NC": {"path": "M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z", "name": "New Caledonia"}, "NE": {"path": "M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z", "name": "Niger"}, "NG": {"path": "M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z", "name": "Nigeria"}, "NZ": {"path": "M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z", "name": "New Zealand"}, "NP": {"path": "M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z", "name": "Nepal"}, "CI": {"path": "M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z", "name": "Ivory Coast"}, "CH": {"path": "M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z", "name": "Switzerland"}, "CO": {"path": "M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z", "name": "Colombia"}, "CN": {"path": "M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z", "name": "China"}, "CM": {"path": "M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z", "name": "Cameroon"}, "CL": {"path": "M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z", "name": "Chile"}, "CA": {"path": "M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z", "name": "Canada"}, "CG": {"path": "M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z", "name": "Republic of the Congo"}, "CF": {"path": "M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z", "name": "Central African Republic"}, "CD": {"path": "M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z", "name": "Democratic Republic of the Congo"}, "CZ": {"path": "M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z", "name": "Czech Republic"}, "CY": {"path": "M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z", "name": "Cyprus"}, "CR": {"path": "M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z", "name": "Costa Rica"}, "CU": {"path": "M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z", "name": "Cuba"}, "SZ": {"path": "M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z", "name": "Swaziland"}, "SY": {"path": "M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z", "name": "Syria"}, "KG": {"path": "M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z", "name": "Kyrgyzstan"}, "KE": {"path": "M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z", "name": "Kenya"}, "SS": {"path": "M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z", "name": "South Sudan"}, "SR": {"path": "M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z", "name": "Suriname"}, "KH": {"path": "M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z", "name": "Cambodia"}, "SV": {"path": "M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z", "name": "El Salvador"}, "SK": {"path": "M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z", "name": "Slovakia"}, "KR": {"path": "M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z", "name": "South Korea"}, "SI": {"path": "M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z", "name": "Slovenia"}, "KP": {"path": "M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z", "name": "North Korea"}, "SO": {"path": "M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z", "name": "Somalia"}, "SN": {"path": "M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z", "name": "Senegal"}, "SL": {"path": "M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z", "name": "Sierra Leone"}, "SB": {"path": "M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z", "name": "Solomon Islands"}, "SA": {"path": "M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z", "name": "Saudi Arabia"}, "SE": {"path": "M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z", "name": "Sudan"}, "DO": {"path": "M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z", "name": "Dominican Republic"}, "DJ": {"path": "M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z", "name": "Djibouti"}, "DK": {"path": "M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z", "name": "Denmark"}, "DE": {"path": "M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z", "name": "Germany"}, "YE": {"path": "M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z", "name": "Yemen"}, "AT": {"path": "M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z", "name": "Austria"}, "DZ": {"path": "M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z", "name": "Algeria"}, "US": {"path": "M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z", "name": "United States of America"}, "LV": {"path": "M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z", "name": "Latvia"}, "UY": {"path": "M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z", "name": "Uruguay"}, "LB": {"path": "M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z", "name": "Lebanon"}, "LA": {"path": "M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z", "name": "Laos"}, "TW": {"path": "M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z", "name": "Taiwan"}, "TT": {"path": "M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z", "name": "Turkey"}, "LK": {"path": "M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z", "name": "Sri Lanka"}, "TN": {"path": "M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z", "name": "Tunisia"}, "TL": {"path": "M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z", "name": "East Timor"}, "TM": {"path": "M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z", "name": "Tajikistan"}, "LS": {"path": "M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z", "name": "Lesotho"}, "TH": {"path": "M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z", "name": "Thailand"}, "TF": {"path": "M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z", "name": "French Southern and Antarctic Lands"}, "TG": {"path": "M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z", "name": "Togo"}, "TD": {"path": "M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z", "name": "Chad"}, "LY": {"path": "M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z", "name": "Libya"}, "AE": {"path": "M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z", "name": "Venezuela"}, "AF": {"path": "M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z", "name": "Afghanistan"}, "IQ": {"path": "M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z", "name": "Iraq"}, "IS": {"path": "M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z", "name": "Iceland"}, "IR": {"path": "M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z", "name": "Iran"}, "AM": {"path": "M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z", "name": "Armenia"}, "IT": {"path": "M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z", "name": "Italy"}, "VN": {"path": "M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z", "name": "Vietnam"}, "AR": {"path": "M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z", "name": "Argentina"}, "AU": {"path": "M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z", "name": "Australia"}, "IL": {"path": "M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z", "name": "Israel"}, "IN": {"path": "M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z", "name": "India"}, "TZ": {"path": "M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z", "name": "Tanzania"}, "AZ": {"path": "M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z", "name": "Azerbaijan"}, "IE": {"path": "M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z", "name": "Ireland"}, "ID": {"path": "M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z", "name": "Indonesia"}, "UA": {"path": "M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z", "name": "Ukraine"}, "QA": {"path": "M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z", "name": "Qatar"}, "MZ": {"path": "M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z", "name": "Mozambique"}}, "height": 440.7063107441331, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var computeDimension = function(element,dimension)
		{
			if (element['offset'+dimension])
			{
				return element['offset'+dimension];
			}
			else
			{
				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
			}
		}

		var width = this.width = computeDimension(context.canvas,'Width');
		var height = this.height = computeDimension(context.canvas,'Height');

		// Firefox requires this to work correctly
		context.canvas.width  = width;
		context.canvas.height = height;

		var width = this.width = context.canvas.width;
		var height = this.height = context.canvas.height;
		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
			customTooltips: false,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)) objClone[key] = value;
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)) base[key] = value;
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn == "function") console.warn(str);
		},
		amd = helpers.amd = (typeof define == 'function' && define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				return num.toString().split(".")[1].length;
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			var maxValue = max(valuesArray),
				minValue = min(valuesArray);

			// We need some degree of seperation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){

			// If templateString is function rather than string-template - call the function for valuesObject

			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (labelTemplateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0) return 0;
				if (t === 1) return 1;
				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1) return t;
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1 / 2) == 2) return 1;
				if (!p) p = 1 * (0.3 * 1.5);
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientWidth;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientHeight;
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			cancelAnimFrame(this.animationFrame);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			if (this.options.animation && !reflow){
				helpers.animationLoop(
					this.draw,
					this.options.animationSteps,
					this.options.animationEasing,
					this.options.onAnimationProgress,
					this.options.onAnimationComplete,
					this
				);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return template(this.options.legendTemplate,this);
		},
		destroy : function(){
			this.clear();
			unbindEvents(this, this.events);
			var canvas = this.chart.canvas;

			// Reset canvas height/width attributes starts a fresh with the canvas context
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// < IE9 doesn't support removeProperty
			if (canvas.style.removeProperty) {
				canvas.style.removeProperty('width');
				canvas.style.removeProperty('height');
			} else {
				canvas.style.removeAttribute('width');
				canvas.style.removeAttribute('height');
			}

			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: ChartElements[0].label,
						chart: this.chart,
						ctx: this.chart.ctx,
						custom: this.options.customTooltips
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			//Check if within the range of the open/close angle
			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();

				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
			}
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleFontSize/2;
			} else{
				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
			}

		},
		draw : function(){
			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
				var ctx = this.ctx;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.closePath();

				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillStyle = this.titleTextColor;
				ctx.font = this.titleFont;

				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

				ctx.font = this.font;
				helpers.each(this.labels,function(label,index){
					ctx.fillStyle = this.textColor;
					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
					//Instead we'll make a white filled block to put the legendColour palette over.

					ctx.fillStyle = this.legendColorBackground;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

					ctx.fillStyle = this.legendColors[index].fill;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


				},this);
			}
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0),
						drawVerticalLine = this.showVerticalLines;

					// This is Y axis, so draw it
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						if (this.angleLineWidth > 0){
							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define(function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						activeBar.fillColor = activeBar.highlightFill;
						activeBar.strokeColor = activeBar.highlightStroke;
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.strokeColor,
						fillColor : dataset.fillColor,
						highlightFill : dataset.highlightFill || dataset.fillColor,
						highlightStroke : dataset.highlightStroke || dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value){
			return (Math.PI*2)*(Math.abs(value) / this.total);
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += Math.abs(segment.value);
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				ctx.stroke();

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segement.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			
			this.reflow();
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				ctx.fill();

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
$(function () {
  'use strict'

  /**
   * Get access to plugins
   */

  $('[data-toggle="control-sidebar"]').controlSidebar()
  $('[data-toggle="push-menu"]').pushMenu()

  var $pushMenu       = $('[data-toggle="push-menu"]').data('lte.pushmenu')
  var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
  var $layout         = $('body').data('lte.layout')

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var mySkins = [
    'skin-blue',
    'skin-black',
    'skin-red',
    'skin-yellow',
    'skin-purple',
    'skin-green',
    'skin-blue-light',
    'skin-black-light',
    'skin-red-light',
    'skin-yellow-light',
    'skin-purple-light',
    'skin-green-light'
  ]

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem(name)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function changeLayout(cls) {
    $('body').toggleClass(cls)
    $layout.fixSidebar()
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      $pushMenu.expandOnHover()
      $layout.activate()
    }
    $controlSidebar.fix()
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i])
    })

    $('body').addClass(cls)
    store('skin', cls)
    return false
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin')
    if (tmp && $.inArray(tmp, mySkins))
      changeSkin(tmp)

    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob'))
        return
      e.preventDefault()
      changeSkin($(this).data('skin'))
    })

    // Add the layout manager
    $('[data-layout]').on('click', function () {
      changeLayout($(this).data('layout'))
    })

    $('[data-controlsidebar]').on('click', function () {
      changeLayout($(this).data('controlsidebar'))
      var slide = !$controlSidebar.options.slide

      $controlSidebar.options.slide = slide
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open')
    })

    $('[data-sidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('.control-sidebar')
      if ($sidebar.hasClass('control-sidebar-dark')) {
        $sidebar.removeClass('control-sidebar-dark')
        $sidebar.addClass('control-sidebar-light')
      } else {
        $sidebar.removeClass('control-sidebar-light')
        $sidebar.addClass('control-sidebar-dark')
      }
    })

    $('[data-enable="expandOnHover"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('sidebar-collapse'))
        $('[data-layout="sidebar-collapse"]').click()
    })

    //  Reset options
    if ($('body').hasClass('fixed')) {
      $('[data-layout="fixed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('layout-boxed')) {
      $('[data-layout="layout-boxed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $('[data-layout="sidebar-collapse"]').attr('checked', 'checked')
    }

  }

  // Create the new tab
  var $tabPane = $('<div />', {
    'id'   : 'control-sidebar-theme-demo-options-tab',
    'class': 'tab-pane active'
  })

  // Create the tab button
  var $tabButton = $('<li />', { 'class': 'active' })
    .html('<a href=\'#control-sidebar-theme-demo-options-tab\' data-toggle=\'tab\'>'
      + '<i class="fa fa-wrench"></i>'
      + '</a>')

  // Add the tab button to the right sidebar tabs
  $('[href="#control-sidebar-home-tab"]')
    .parent()
    .before($tabButton)

  // Create the menu
  var $demoSettings = $('<div />')

  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Layout Options'
    + '</h4>'
    // Fixed layout
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-layout="fixed"class="pull-right"/> '
    + 'Fixed layout'
    + '</label>'
    + '<p>Activate the fixed layout. You can\'t use fixed and boxed layouts together</p>'
    + '</div>'
    // Boxed layout
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-layout="layout-boxed" class="pull-right"/> '
    + 'Boxed Layout'
    + '</label>'
    + '<p>Activate the boxed layout</p>'
    + '</div>'
    // Sidebar Toggle
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> '
    + 'Toggle Sidebar'
    + '</label>'
    + '<p>Toggle the left sidebar\'s state (open or collapse)</p>'
    + '</div>'
    // Sidebar mini expand on hover toggle
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-enable="expandOnHover"class="pull-right"/> '
    + 'Sidebar Expand on Hover'
    + '</label>'
    + '<p>Let the sidebar mini expand on hover</p>'
    + '</div>'
    // Control Sidebar Toggle
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> '
    + 'Toggle Right Sidebar Slide'
    + '</label>'
    + '<p>Toggle between slide over content and push content effects</p>'
    + '</div>'
    // Control Sidebar Skin Toggle
    + '<div class="form-group">'
    + '<label class="control-sidebar-subheading">'
    + '<input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> '
    + 'Toggle Right Sidebar Skin'
    + '</label>'
    + '<p>Toggle between dark and light skins for the right sidebar</p>'
    + '</div>'
  )
  var $skinsList = $('<ul />', { 'class': 'list-unstyled clearfix' })

  // Dark sidebar skins
  var $skinBlue =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Blue</p>')
  $skinsList.append($skinBlue)
  var $skinBlack =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Black</p>')
  $skinsList.append($skinBlack)
  var $skinPurple =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Purple</p>')
  $skinsList.append($skinPurple)
  var $skinGreen =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Green</p>')
  $skinsList.append($skinGreen)
  var $skinRed =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Red</p>')
  $skinsList.append($skinRed)
  var $skinYellow =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin">Yellow</p>')
  $skinsList.append($skinYellow)

  // Light sidebar skins
  var $skinBlueLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Blue Light</p>')
  $skinsList.append($skinBlueLight)
  var $skinBlackLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Black Light</p>')
  $skinsList.append($skinBlackLight)
  var $skinPurpleLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Purple Light</p>')
  $skinsList.append($skinPurpleLight)
  var $skinGreenLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Green Light</p>')
  $skinsList.append($skinGreenLight)
  var $skinRedLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Red Light</p>')
  $skinsList.append($skinRedLight)
  var $skinYellowLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
            + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
            + '</a>'
            + '<p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>')
  $skinsList.append($skinYellowLight)

  $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>')
  $demoSettings.append($skinsList)

  $tabPane.append($demoSettings)
  $('#control-sidebar-home-tab').after($tabPane)

  setup()

  $('[data-toggle="tooltip"]').tooltip()
});

/***********************************************************************************
* Add Array.indexOf Toast                                                      *
***********************************************************************************/
(function ()
{
	if (typeof Array.prototype.indexOf !== 'function')
	{
		Array.prototype.indexOf = function(searchElement, fromIndex)
		{
			for (var i = (fromIndex || 0), j = this.length; i < j; i += 1)
			{
				if ((searchElement === undefined) || (searchElement === null))
				{
					if (this[i] === searchElement)
					{
						return i;
					}
				}
				else if (this[i] === searchElement)
				{
					return i;
				}
			}
			return -1;
		};
	}
})();
/**********************************************************************************/

(function ($,undefined)
{
	var toasting =
	{
		gettoaster : function ()
		{
			var toaster = $('#' + settings.toaster.id);

			if(toaster.length < 1)
			{
				toaster = $(settings.toaster.template).attr('id', settings.toaster.id).css(settings.toaster.css).addClass(settings.toaster['class']);

				if ((settings.stylesheet) && (!$("link[href=" + settings.stylesheet + "]").length))
				{
					$('head').appendTo('<link rel="stylesheet" href="' + settings.stylesheet + '">');
				}

				$(settings.toaster.container).append(toaster);
			}

			return toaster;
		},

		notify : function (title, message, priority)
		{
			var $toaster = this.gettoaster();
			var $toast  = $(settings.toast.template.replace('%priority%', priority)).hide().css(settings.toast.css).addClass(settings.toast['class']);

			$('.title', $toast).css(settings.toast.csst).html(title);
			$('.message', $toast).css(settings.toast.cssm).html(message);

			if ((settings.debug) && (window.console))
			{
				console.log(toast);
			}

			$toaster.append(settings.toast.display($toast));

			if (settings.donotdismiss.indexOf(priority) === -1)
			{
				var timeout = (typeof settings.timeout === 'number') ? settings.timeout : ((typeof settings.timeout === 'object') && (priority in settings.timeout)) ? settings.timeout[priority] : 1500;
				setTimeout(function()
				{
					settings.toast.remove($toast, function()
					{
						$toast.remove();
					});
				}, timeout);
			}
		}
	};

	var defaults =
	{
		'toaster'         :
		{
			'id'        : 'toaster',
			'container' : 'body',
			'template'  : '<div></div>',
			'class'     : 'toaster',
			'css'       :
			{
				'position' : 'fixed',
				'top'      : '10px',
				'right'    : '10px',
				'width'    : '300px',
				'zIndex'   : 50000
			}
		},

		'toast'       :
		{
			'template' :
			'<div class="alert alert-%priority% alert-dismissible" role="alert">' +
				'<button type="button" class="close" data-dismiss="alert">' +
					'<span aria-hidden="true">&times;</span>' +
					'<span class="sr-only">Close</span>' +
				'</button>' +
				'<span class="title"></span>: <span class="message"></span>' +
			'</div>',

			'defaults' :
			{
				'title'    : 'Notice',
				'priority' : 'success'
			},

			'css'      : {},
			'cssm'     : {},
			'csst'     : { 'fontWeight' : 'bold' },

			'fade'     : 'slow',

			'display'    : function ($toast)
			{
				return $toast.fadeIn(settings.toast.fade);
			},

			'remove'     : function ($toast, callback)
			{
				return $toast.animate(
					{
						opacity : '0',
						padding : '0px',
						margin  : '0px',
						height  : '0px'
					},
					{
						duration : settings.toast.fade,
						complete : callback
					}
				);
			}
		},

		'debug'        : false,
		'timeout'      : 2500,
		'stylesheet'   : null,
		'donotdismiss' : []
	};

	var settings = {};
	$.extend(settings, defaults);

	$.toaster = function (options)
	{
		if (typeof options === 'object')
		{
			if ('settings' in options)
			{
				settings = $.extend(true, settings, options.settings);
			}
		}
		else
		{
			var values = Array.prototype.slice.call(arguments, 0);
			var labels = ['message', 'title', 'priority'];
			options = {};

			for (var i = 0, l = values.length; i < l; i += 1)
			{
				options[labels[i]] = values[i];
			}
		}

		var title    = (('title' in options) && (typeof options.title === 'string')) ? options.title : settings.toast.defaults.title;
		var message  = ('message' in options) ? options.message : null;
		var priority = (('priority' in options) && (typeof options.priority === 'string')) ? options.priority : settings.toast.defaults.priority;

		if (message !== null)
		{
			toasting.notify(title, message, priority);
		}
	};

	$.toaster.reset = function ()
	{
		settings = {};
		$.extend(settings, defaults);
	};
})(jQuery);

function initVersionModal(){
	$('#version-form').validate({
		rules: {
		    game_version: {
		      required: true
		    },
		    bundle_id: {
		      required: true
		    }
	  	},
		messages: {
            game_version: {
                required: "Game version is required"
            },
            bundle_id: {
                required: "Bundle ID is required"
            }
        },
        submitHandler: function(form){
        	var data = $(form).serialize();
        	var url  = $(form).attr('action');
        	$.ajax({
        		url: url,
        		type: 'POST',        		
        		data: data,
        	})
        	.done(function(data) {
        		if(data.status == 'ok'){
        			window.location.reload();
        		}else{
        			return $.toaster({ priority : 'danger', title : 'Error!', message : data.message});
        		}
        	})
        	.fail(function() {
        		console.log("error");
        	});
        	return false;
        }
	});
}

function initModal(){
	initVersionModal();
}

function ajaxChangeVersionCheckbox(){
	$('#gridview .ajax-change-version').on('change', function(e){
		var val 	= this.checked;
		var field 	= $(this).attr('name');
		var row_id 	= $(this).attr('row-id');
		var data 	= {
			val, field, row_id
		};
		$.ajax({
			url: base_url + '/version/ajax-change-version-data',
			data: data,
		})
		.done(function(data) {
			if(data.status == 'ok'){
				return $.toaster({ priority : 'success', title : 'Success!', message : data.message});
			}else{
				return $.toaster({ priority : 'danger', title : 'Error!', message : data.message});
			}
		})
		.fail(function() {
			alert("error");
		});
		
	});
}

function ajaxLoadGridviewActionModal(){
	$('.form-content-action-btn').on('click', function(){
		var link = $(this).attr('link');
		$('#form-content #body').load(link, function(){
			$('#form-content').modal('show');
	    	initModal();
	    });
		
	});
}

function dataTableDrawCallBack(){
	ajaxChangeVersionCheckbox();
	ajaxLoadGridviewActionModal();
}

$(document).ready(function() {
	// ajaxChangeVersionCheckbox();
	// ajaxLoadGridviewActionModal();
});
