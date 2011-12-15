// Underscore.string
// (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
// Underscore.strings is freely distributable under the terms of the MIT license.
// Documentation: https://github.com/edtsech/underscore.string
// Some code is borrowed from MooTools and Alexandru Marasteanu.
// Version 1.1.6
(function(a){"use strict";if(typeof _!="undefined")var b=_().reverse,c=_.include;var d=String.prototype.trim,e=function(a){return a*1||0},f=function(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")},g=function(a){return Array.prototype.slice.call(a)},h=function(a){return a?k.escapeRegExp(a):"\\s"},i=function(a){return function(){var b=g(arguments);for(var c=0;c<b.length;c++)b[c]=b[c]==null?"":""+b[c];return a.apply(null,b)}},j=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=f,c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e=1,f=c.length,g="",h,i=[],k,l,m,n,o,p;for(k=0;k<f;k++){g=a(c[k]);if(g==="string")i.push(c[k]);else if(g==="array"){m=c[k];if(m[2]){h=d[e];for(l=0;l<m[2].length;l++){if(!h.hasOwnProperty(m[2][l]))throw j('[_.sprintf] property "%s" does not exist',m[2][l]);h=h[m[2][l]]}}else m[1]?h=d[m[1]]:h=d[e++];if(/[^s]/.test(m[8])&&a(h)!="number")throw j("[_.sprintf] expecting number but found %s",a(h));switch(m[8]){case"b":h=h.toString(2);break;case"c":h=String.fromCharCode(h);break;case"d":h=parseInt(h,10);break;case"e":h=m[7]?h.toExponential(m[7]):h.toExponential();break;case"f":h=m[7]?parseFloat(h).toFixed(m[7]):parseFloat(h);break;case"o":h=h.toString(8);break;case"s":h=(h=String(h))&&m[7]?h.substring(0,m[7]):h;break;case"u":h=Math.abs(h);break;case"x":h=h.toString(16);break;case"X":h=h.toString(16).toUpperCase()}h=/[def]/.test(m[8])&&m[3]&&h>=0?"+"+h:h,o=m[4]?m[4]=="0"?"0":m[4].charAt(1):" ",p=m[6]-String(h).length,n=m[6]?b(o,p):"",i.push(m[5]?h+n:n+h)}}return i.join("")},c.cache={},c.parse=function(a){var b=a,c=[],d=[],e=0;while(b){if((c=/^[^\x25]+/.exec(b))!==null)d.push(c[0]);else if((c=/^\x25{2}/.exec(b))!==null)d.push("%");else{if((c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b))===null)throw"[_.sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if((h=/^([a-z_][a-z_\d]*)/i.exec(g))===null)throw"[_.sprintf] huh?";f.push(h[1]);while((g=g.substring(h[0].length))!=="")if((h=/^\.([a-z_][a-z_\d]*)/i.exec(g))!==null)f.push(h[1]);else if((h=/^\[(\d+)\]/.exec(g))!==null)f.push(h[1]);else throw"[_.sprintf] huh?";c[2]=f}else e|=2;if(e===3)throw"[_.sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),k={isBlank:i(function(a){return/^\s*$/.test(a)}),stripTags:i(function(a){return a.replace(/<\/?[^>]+>/ig,"")}),capitalize:i(function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()}),chop:i(function(a,b){b=e(b)||a.length;var c=[];for(var d=0;d<a.length;)c.push(a.slice(d,d+b)),d+=b;return c}),clean:i(function(a){return k.strip(a.replace(/\s+/g," "))}),count:i(function(a,b){var c=0,d;for(var e=0;e<a.length;)d=a.indexOf(b,e),d>=0&&c++,e=e+(d>=0?d:0)+b.length;return c}),chars:i(function(a){return a.split("")}),escapeHTML:i(function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}),unescapeHTML:i(function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")}),escapeRegExp:i(function(a){return a.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")}),insert:i(function(a,b,c){var d=a.split("");return d.splice(e(b),0,c),d.join("")}),includes:i(function(a,b){return a.indexOf(b)!==-1}),include:function(a,b){return!c||/string|number/.test(typeof a)?this.includes(a,b):c(a,b)},join:i(function(a){var b=g(arguments);return b.join(b.shift())}),lines:i(function(a){return a.split("\n")}),reverse:function(a){return!b||/string|number/.test(typeof a)?Array.prototype.reverse.apply(String(a).split("")).join(""):b.call(_(a))},splice:i(function(a,b,c,d){var f=a.split("");return f.splice(e(b),e(c),d),f.join("")}),startsWith:i(function(a,b){return a.length>=b.length&&a.substring(0,b.length)===b}),endsWith:i(function(a,b){return a.length>=b.length&&a.substring(a.length-b.length)===b}),succ:i(function(a){var b=a.split("");return b.splice(a.length-1,1,String.fromCharCode(a.charCodeAt(a.length-1)+1)),b.join("")}),titleize:i(function(a){var b=a.split(" "),c;for(var d=0;d<b.length;d++)c=b[d].split(""),typeof c[0]!="undefined"&&(c[0]=c[0].toUpperCase()),d+1===b.length?b[d]=c.join(""):b[d]=c.join("")+" ";return b.join("")}),camelize:i(function(a){return k.trim(a).replace(/(\-|_|\s)+(.)?/g,function(a,b,c){return c?c.toUpperCase():""})}),underscored:function(a){return k.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/\-|\s+/g,"_").toLowerCase()},dasherize:function(a){return k.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1-$2").replace(/^([A-Z]+)/,"-$1").replace(/\_|\s+/g,"-").toLowerCase()},trim:i(function(a,b){return!b&&d?d.call(a):(b=h(b),a.replace(new RegExp("^["+b+"]+|["+b+"]+$","g"),""))}),ltrim:i(function(a,b){return b=h(b),a.replace(new RegExp("^["+b+"]+","g"),"")}),rtrim:i(function(a,b){return b=h(b),a.replace(new RegExp("["+b+"]+$","g"),"")}),truncate:i(function(a,b,c){return c=c||"...",b=e(b),a.length>b?a.slice(0,b)+c:a}),words:function(a,b){return String(a).split(b||" ")},pad:i(function(a,b,c,d){var g="",h=0;b=e(b),c?c.length>1&&(c=c.charAt(0)):c=" ";switch(d){case"right":h=b-a.length,g=f(c,h),a+=g;break;case"both":h=b-a.length,g={left:f(c,Math.ceil(h/2)),right:f(c,Math.floor(h/2))},a=g.left+a+g.right;break;default:h=b-a.length,g=f(c,h),a=g+a}return a}),lpad:function(a,b,c){return k.pad(a,b,c)},rpad:function(a,b,c){return k.pad(a,b,c,"right")},lrpad:function(a,b,c){return k.pad(a,b,c,"both")},sprintf:j,vsprintf:function(a,b){return b.unshift(a),j.apply(null,b)},toNumber:function(a,b){var c=e(e(a).toFixed(e(b)));return c!==0||a==="0"||a===0?c:Number.NaN},strRight:i(function(a,b){var c=b?a.indexOf(b):-1;return c!=-1?a.slice(c+b.length,a.length):a}),strRightBack:i(function(a,b){var c=b?a.lastIndexOf(b):-1;return c!=-1?a.slice(c+b.length,a.length):a}),strLeft:i(function(a,b){var c=b?a.indexOf(b):-1;return c!=-1?a.slice(0,c):a}),strLeftBack:i(function(a,b){var c=a.lastIndexOf(b);return c!=-1?a.slice(0,c):a})};k.strip=k.trim,k.lstrip=k.ltrim,k.rstrip=k.rtrim,k.center=k.lrpad,k.ljust=k.lpad,k.rjust=k.rpad,typeof module!="undefined"&&module.exports?module.exports=k:typeof a._!="undefined"?a._.mixin(k):a._=k})(this||window)