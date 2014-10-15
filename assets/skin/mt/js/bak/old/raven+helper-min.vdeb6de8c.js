/*! Raven.js 1.1.7 (1a6c054) | github.com/getsentry/raven-js */
!function(a){function b(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function c(a){return"undefined"==typeof a}var d={},e=a.TraceKit,f=[].slice,g="?";d.noConflict=function(){return a.TraceKit=e,d},d.wrap=function(a){function b(){try{return a.apply(this,arguments)}catch(b){throw d.report(b),b}}return b},d.report=function(){function e(a){j(),n.push(a)}function g(a){for(var b=n.length-1;b>=0;--b)n[b]===a&&n.splice(b,1)}function h(a,c){var e=null;if(!c||d.collectWindowErrors){for(var g in n)if(b(n,g))try{n[g].apply(null,[a].concat(f.call(arguments,2)))}catch(h){e=h}if(e)throw e}}function i(a,b,e,f,g){var i=null,j=!1;if(c(g))if(p)d.computeStackTrace.augmentStackTraceWithInitialElement(p,b,e,a),i=p,p=null,o=null;else{var m={url:b,line:e,column:f};m.func=d.computeStackTrace.guessFunctionName(m.url,m.line),m.context=d.computeStackTrace.gatherContext(m.url,m.line),i={mode:"onerror",message:a,url:document.location.href,stack:[m],useragent:navigator.userAgent}}else k(g,!1),j=!0;return j||h(i,"from window.onerror"),l?l.apply(this,arguments):!1}function j(){m!==!0&&(l=a.onerror,a.onerror=i,m=!0)}function k(b,c){var e=f.call(arguments,1);if(p){if(o===b)return;var g=p;p=null,o=null,h.apply(null,[g,null].concat(e))}var i=d.computeStackTrace(b);if(p=i,o=b,a.setTimeout(function(){o===b&&(p=null,o=null,h.apply(null,[i,null].concat(e)))},i.incomplete?2e3:0),c!==!1)throw b}var l,m,n=[],o=null,p=null;return k.subscribe=e,k.unsubscribe=g,k}(),d.computeStackTrace=function(){function e(b){if(!d.remoteFetching)return"";try{var c=function(){try{return new a.XMLHttpRequest}catch(b){return new a.ActiveXObject("Microsoft.XMLHTTP")}},e=c();return e.open("GET",b,!1),e.send(""),e.responseText}catch(f){return""}}function f(a){if(!b(w,a)){var c="";-1!==a.indexOf(document.domain)&&(c=e(a)),w[a]=c?c.split("\n"):[]}return w[a]}function h(a,b){var d,e=/function ([^(]*)\(([^)]*)\)/,h=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,i="",j=10,k=f(a);if(!k.length)return g;for(var l=0;j>l;++l)if(i=k[b-l]+i,!c(i)){if(d=h.exec(i))return d[1];if(d=e.exec(i))return d[1]}return g}function i(a,b){var e=f(a);if(!e.length)return null;var g=[],h=Math.floor(d.linesOfContext/2),i=h+d.linesOfContext%2,j=Math.max(0,b-h-1),k=Math.min(e.length,b+i-1);b-=1;for(var l=j;k>l;++l)c(e[l])||g.push(e[l]);return g.length>0?g:null}function j(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function k(a){return j(a).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function l(a,b){for(var c,d,e=0,g=b.length;g>e;++e)if((c=f(b[e])).length&&(c=c.join("\n"),d=a.exec(c)))return{url:b[e],line:c.substring(0,d.index).split("\n").length,column:d.index-c.lastIndexOf("\n",d.index)-1};return null}function m(a,b,c){var d,e=f(b),g=new RegExp("\\b"+j(a)+"\\b");return c-=1,e&&e.length>c&&(d=g.exec(e[c]))?d.index:null}function n(b){for(var c,d,e,f,g=[a.location.href],h=document.getElementsByTagName("script"),i=""+b,m=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,n=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,o=0;o<h.length;++o){var p=h[o];p.src&&g.push(p.src)}if(e=m.exec(i)){var q=e[1]?"\\s+"+e[1]:"",r=e[2].split(",").join("\\s*,\\s*");c=j(e[3]).replace(/;$/,";?"),d=new RegExp("function"+q+"\\s*\\(\\s*"+r+"\\s*\\)\\s*{\\s*"+c+"\\s*}")}else d=new RegExp(j(i).replace(/\s+/g,"\\s+"));if(f=l(d,g))return f;if(e=n.exec(i)){var s=e[1];if(c=k(e[2]),d=new RegExp("on"+s+"=[\\'\"]\\s*"+c+"\\s*[\\'\"]","i"),f=l(d,g[0]))return f;if(d=new RegExp(c),f=l(d,g))return f}return null}function o(a){if(!a.stack)return null;for(var b,c,d=/^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|https?):.*?):(\d+)(?::(\d+))?\)?\s*$/i,e=/^\s*(\S*)(?:\((.*?)\))?@((?:file|https?).*?):(\d+)(?::(\d+))?\s*$/i,f=a.stack.split("\n"),j=[],k=/^(.*) is undefined$/.exec(a.message),l=0,n=f.length;n>l;++l){if(b=e.exec(f[l]))c={url:b[3],func:b[1]||g,args:b[2]?b[2].split(","):"",line:+b[4],column:b[5]?+b[5]:null};else{if(!(b=d.exec(f[l])))continue;c={url:b[2],func:b[1]||g,line:+b[3],column:b[4]?+b[4]:null}}!c.func&&c.line&&(c.func=h(c.url,c.line)),c.line&&(c.context=i(c.url,c.line)),j.push(c)}return j[0]&&j[0].line&&!j[0].column&&k&&(j[0].column=m(k[1],j[0].url,j[0].line)),j.length?{mode:"stack",name:a.name,message:a.message,url:document.location.href,stack:j,useragent:navigator.userAgent}:null}function p(a){for(var b,c=a.stacktrace,d=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,e=c.split("\n"),f=[],g=0,j=e.length;j>g;g+=2)if(b=d.exec(e[g])){var k={line:+b[1],column:+b[2],func:b[3]||b[4],args:b[5]?b[5].split(","):[],url:b[6]};if(!k.func&&k.line&&(k.func=h(k.url,k.line)),k.line)try{k.context=i(k.url,k.line)}catch(l){}k.context||(k.context=[e[g+1]]),f.push(k)}return f.length?{mode:"stacktrace",name:a.name,message:a.message,url:document.location.href,stack:f,useragent:navigator.userAgent}:null}function q(c){var d=c.message.split("\n");if(d.length<4)return null;var e,g,j,m,n=/^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of function script\s*$/i,q=[],r=document.getElementsByTagName("script"),s=[];for(g in r)b(r,g)&&!r[g].src&&s.push(r[g]);for(g=2,j=d.length;j>g;g+=2){var t=null;if(e=n.exec(d[g]))t={url:e[2],func:e[3],line:+e[1]};else if(e=o.exec(d[g])){t={url:e[3],func:e[4]};var u=+e[1],v=s[e[2]-1];if(v&&(m=f(t.url))){m=m.join("\n");var w=m.indexOf(v.innerText);w>=0&&(t.line=u+m.substring(0,w).split("\n").length)}}else if(e=p.exec(d[g])){var x=a.location.href.replace(/#.*$/,""),y=e[1],z=new RegExp(k(d[g+1]));m=l(z,[x]),t={url:x,line:m?m.line:y,func:""}}if(t){t.func||(t.func=h(t.url,t.line));var A=i(t.url,t.line),B=A?A[Math.floor(A.length/2)]:null;t.context=A&&B.replace(/^\s*/,"")===d[g+1].replace(/^\s*/,"")?A:[d[g+1]],q.push(t)}}return q.length?{mode:"multiline",name:c.name,message:d[0],url:document.location.href,stack:q,useragent:navigator.userAgent}:null}function r(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){a.incomplete=!1,e.func||(e.func=h(e.url,e.line)),e.context||(e.context=i(e.url,e.line));var f=/ '([^']+)' /.exec(d);if(f&&(e.column=m(f[1],e.url,e.line)),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,a.stack[0].context=e.context,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function s(a,b){for(var c,e,f,i=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,j=[],k={},l=!1,o=s.caller;o&&!l;o=o.caller)if(o!==t&&o!==d.report){if(e={url:null,func:g,line:null,column:null},o.name?e.func=o.name:(c=i.exec(o.toString()))&&(e.func=c[1]),f=n(o)){e.url=f.url,e.line=f.line,e.func===g&&(e.func=h(e.url,e.line));var p=/ '([^']+)' /.exec(a.message||a.description);p&&(e.column=m(p[1],f.url,f.line))}k[""+o]?l=!0:k[""+o]=!0,j.push(e)}b&&j.splice(0,b);var q={mode:"callers",name:a.name,message:a.message,url:document.location.href,stack:j,useragent:navigator.userAgent};return r(q,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),q}function t(a,b){var c=null;b=null==b?0:+b;try{if(c=p(a))return c}catch(d){if(v)throw d}try{if(c=o(a))return c}catch(d){if(v)throw d}try{if(c=q(a))return c}catch(d){if(v)throw d}try{if(c=s(a,b+1))return c}catch(d){if(v)throw d}return{mode:"failed"}}function u(a){a=(null==a?0:+a)+1;try{throw new Error}catch(b){return t(b,a+1)}}var v=!1,w={};return t.augmentStackTraceWithInitialElement=r,t.guessFunctionName=h,t.gatherContext=i,t.ofCaller=u,t}(),d.remoteFetching||(d.remoteFetching=!0),d.collectWindowErrors||(d.collectWindowErrors=!0),(!d.linesOfContext||d.linesOfContext<1)&&(d.linesOfContext=7),a.TraceKit=d}(window),function(a,b){"use strict";function c(a,b){var c,d;b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=document.createEventObject(),c.eventType=a);for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);if(document.createEvent)document.dispatchEvent(c);else try{document.fireEvent("on"+c.eventType.toLowerCase(),c)}catch(e){}}function d(a){this.name="RavenConfigError",this.message=a}function e(a){var b=G.exec(a),c={},e=7;try{for(;e--;)c[F[e]]=b[e]||""}catch(f){throw new d("Invalid DSN: "+a)}if(c.pass)throw new d("Do not specify your private key in the DSN!");return c}function f(a){return"undefined"==typeof a}function g(a){return"function"==typeof a}function h(a){return"string"==typeof a}function i(a){for(var b in a)return!1;return!0}function j(a,b){var c,d;if(f(a.length))for(c in a)a.hasOwnProperty(c)&&b.call(null,c,a[c]);else if(d=a.length)for(c=0;d>c;c++)b.call(null,c,a[c])}function k(){if(H)return H;var a=["sentry_version=4","sentry_client=raven-js/"+E.VERSION];return y&&a.push("sentry_key="+y),H="?"+a.join("&")}function l(a,b){var d=[];a.stack&&a.stack.length&&j(a.stack,function(a,b){var c=m(b);c&&d.push(c)}),c("handle",{stackInfo:a,options:b}),o(a.name,a.message,a.url,a.lineno,d,b)}function m(a){if(a.url){var b,c={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"},d=n(a);if(d){var e=["pre_context","context_line","post_context"];for(b=3;b--;)c[e[b]]=d[b]}return c.in_app=!(!C.includePaths.test(c.filename)||/(Raven|TraceKit)\./.test(c["function"])||/raven\.(min\.)js$/.test(c.filename)),c}}function n(a){if(a.context&&C.fetchContext){for(var b=a.context,c=~~(b.length/2),d=b.length,e=!1;d--;)if(b[d].length>300){e=!0;break}if(e){if(f(a.column))return;return[[],b[c].substr(a.column,50),[]]}return[b.slice(0,c),b[c],b.slice(c+1)]}}function o(a,b,c,d,e,f){var g,h;b&&(C.ignoreErrors.test(b)||(e&&e.length?(c=e[0].filename||c,e.reverse(),g={frames:e}):c&&(g={frames:[{filename:c,lineno:d}]}),C.ignoreUrls&&C.ignoreUrls.test(c)||(!C.whitelistUrls||C.whitelistUrls.test(c))&&(h=d?b+" at "+d:b,r(p({exception:{type:a,value:b},stacktrace:g,culprit:c,message:h},f)))))}function p(a,b){return b?(j(b,function(b,c){a[b]=c}),a):a}function q(){var a={url:document.location.href,headers:{"User-Agent":navigator.userAgent}};return document.referrer&&(a.headers.Referer=document.referrer),a}function r(a){t()&&(a=p({project:z,logger:C.logger,site:C.site,platform:"javascript",request:q()},a),a.tags=p(C.tags,a.tags),a.extra=p(C.extra,a.extra),i(a.tags)&&delete a.tags,i(a.extra)&&delete a.extra,x&&(a.user=x),g(C.dataCallback)&&(a=C.dataCallback(a)),(!g(C.shouldSendCallback)||C.shouldSendCallback(a))&&s(a))}function s(a){var b=new Image,d=w+k()+"&sentry_data="+encodeURIComponent(JSON.stringify(a));b.onload=function(){c("success",{data:a,src:d})},b.onerror=b.onabort=function(){c("failure",{data:a,src:d})},b.src=d}function t(){return B?w?!0:(a.console&&console.error&&console.error("Error: Raven has not been configured."),!1):!1}function u(a){for(var b=[],c=a.length;c--;)b[c]=h(a[c])?a[c].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"):a[c].source;return new RegExp(b.join("|"),"i")}var v,w,x,y,z,A=a.Raven,B=!(!a.JSON||!a.JSON.stringify),C={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,tags:{},extra:{}},D=TraceKit.noConflict();D.remoteFetching=!1;var E={VERSION:"1.1.7",TraceKit:D,afterLoad:function(){var b=a.RavenConfig;b&&this.config(b.dsn,b.config).install()},noConflict:function(){return a.Raven=A,E},config:function(a,b){var c=e(a),d=c.path.lastIndexOf("/"),f=c.path.substr(1,d);return b&&j(b,function(a,b){C[a]=b}),C.ignoreErrors.push("Script error."),C.ignoreErrors.push("Script error"),C.ignoreErrors=u(C.ignoreErrors),C.ignoreUrls=C.ignoreUrls.length?u(C.ignoreUrls):!1,C.whitelistUrls=C.whitelistUrls.length?u(C.whitelistUrls):!1,C.includePaths=u(C.includePaths),y=c.user,z=~~c.path.substr(d+1),w="//"+c.host+(c.port?":"+c.port:"")+"/"+f+"api/"+z+"/store/",c.protocol&&(w=c.protocol+":"+w),C.fetchContext&&(D.remoteFetching=!0),C.linesOfContext&&(D.linesOfContext=C.linesOfContext),D.collectWindowErrors=!!C.collectWindowErrors,E},install:function(){return t()&&D.report.subscribe(l),E},context:function(a,c,d){return g(a)&&(d=c||[],c=a,a=b),E.wrap(a,c).apply(this,d)},wrap:function(a,c){function d(){for(var b=[],d=arguments.length;d--;)b[d]=E.wrap(a,arguments[d]);try{return c.apply(this,b)}catch(e){throw E.captureException(e,a),e}}if(f(c)&&!g(a))return a;if(g(a)&&(c=a,a=b),!g(c))return c;if(c.__raven__)return c;for(var e in c)c.hasOwnProperty(e)&&(d[e]=c[e]);return d.__raven__=!0,d},uninstall:function(){return D.report.unsubscribe(l),E},captureException:function(a,b){if(h(a))return E.captureMessage(a,b);v=a;try{D.report(a,b)}catch(c){if(a!==c)throw c}return E},captureMessage:function(a,b){return r(p({message:a},b)),E},setUser:function(a){return x=a,E},lastException:function(){return v}},F="source protocol user pass host port path".split(" "),G=/^(?:(\w+):)?\/\/(\w+)(:\w+)?@([\w\.-]+)(?::(\d+))?(\/.*)/;d.prototype=new Error,d.prototype.constructor=d;var H;E.afterLoad(),a.Raven=E,"function"==typeof define&&define.amd&&define("raven",[],function(){return E})}(window);
(function() {
    /*jshint curly:false, plusplus:false*/
    /*global M, Raven*/
    if (!window.Raven || !window.M) return;

    Raven.config('http://0c6e09c542a44e1e9292b19648a308ed@fe.meituan.net/13').install();

    var errors = M._ERRORS || [];
    var index = 0;

    function Logger() {
        this.push();
        this.length = errors.length;
    }

    Logger.prototype.push = function(err) {
        if (err) {
            errors = errors.concat(err);
        }

        for (var i = index; i < errors.length; i++) {
            Raven.captureException(errors[i]);
        }
        index = i - 1;

        this.length = errors.length;
    };

    M._ERRORS = new Logger();

    if (M._mtq && M._mtq.errors && M._mtq.errors.length) M._ERRORS.push(M._mtq.errors);
}());
