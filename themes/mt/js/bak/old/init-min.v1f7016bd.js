window.Y=new YUI,M.createAsyncScript=function(){for(var _,n,t=0,a=arguments.length;a>t;t++)_=arguments[t],_&&(n=document.createElement("script"),n.type="text/javascript",n.async=!0,n.src=_,document.getElementsByTagName("head")[0].appendChild(n))},M.loadQueue=function(){var _=[],n="complete"===document.readyState||!1,t={push:function(t){var a=arguments.length>1?Array.prototype.slice.call(arguments,1):[];n?t.apply(null,a):_.push([t,a])},_exec:function(){for(var n;_.length;)n=_.shift(),n[0].apply(null,n[1])}},a=window.onload;return window.onload=function(){a&&a(),n=!0,t._exec()},t}(),function(_){function n(){o(_.gaCustomVar),e(_.coreCssUrl,_.coreJsUrl,_.jsDepsUrl,_.moreCssUrl)}function t(){M.TimeTracker.load=Date.now(),M.createAsyncScript(_.ag,_.trackUrl),Y.use("mt-log","mt-tracker","mt-beacon",function(_){_.mt.tracker.init("gaevent","mtevent","gaexternal","mtmodule"),_.mt.log.pageview()}),Y.use("www-tracker","www-acmtracker",function(_){_.mt.www.tracker.init()}),Y.use("www-base",function(){a({referrer:_.httpReferer,domainHost:_.domainHost})})}function a(_){var n=_.domainHost,t=_.referrer,a=t.indexOf(n);t+="?",a>=0&&a<t.indexOf("?")||Y.use("www-base","mt-base",function(_){var n,t={},a=_.mt.util.Cookie.get("__utmb"),e=_.mt.util.Cookie.get("__utmv");n=a&&a.split(".")[1],(-1===e.indexOf("=geotag=")||"1"===n)&&(t.geotag=1);var o=_.mt.util;_.io("/index/gacustomvars",{method:"get",data:t,on:{success:function(_,n){var t=o.getEvalRes(n);r(t)}}})})}function e(){for(var _=M.subresources.names,n=arguments.length-1;n>=0;n--)arguments[n]&&_.push(arguments[n])}function o(_){window._gaq.push(["_setAccount","UA-12312726-1"],["_addOrganic","baidu","word"],["_addOrganic","m.baidu","word"],["_addOrganic","wap.baidu","word"],["_addOrganic","baidu","kw"],["_addOrganic","baidu","wd"],["_addOrganic","baidu","q1"],["_addOrganic","baidu","q2"],["_addOrganic","baidu","q3"],["_addOrganic","baidu","q4"],["_addOrganic","baidu","q5"],["_addOrganic","baidu","q6"],["_addOrganic","soso","w"],["_addOrganic","vnet","kw"],["_addOrganic","sogou","query"],["_addOrganic","youdao","q"],["_addOrganic","so.com","q"]),"meituan.com"===M.DOMAIN_HOST&&_gaq.push(["_setDomainName",".meituan.com"]),r(_),_gaq.push(["_trackPageview",M.PAGE_VIEW||""])}function r(_){if(_)for(var n in _)if(_.hasOwnProperty(n)){var t=_[n].split("|");_gaq.push(["_setCustomVar",n,t[0],t[1],t[2]])}}if(Y.use("www-base",function(_){_.on("domready",function(){M.TimeTracker.domReady=_.Lang.now()}),_.mt.www.init()}),_.online&&!_.debug&&window.console&&console.log&&console.log.apply){var i="toString";!function(_){var n=" _____ ______   _______   ___  _________  ___  ___  ________  ________      \n|\\   _ \\  _   \\|\\  ___ \\ |\\  \\|\\___   ___\\\\  \\|\\  \\|\\   __  \\|\\   ___  \\    \n\\ \\  \\\\\\__\\ \\  \\ \\   __/|\\ \\  \\|___ \\  \\_\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\   \n \\ \\  \\\\|__| \\  \\ \\  \\_|/_\\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\   __  \\ \\  \\\\ \\  \\  \n  \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \n   \\ \\__\\    \\ \\__\\ \\_______\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ \\__\\\n    \\|__|     \\|__|\\|_______|\\|__|    \\|__|  \\|_______|\\|__|\\|__|\\|__| \\|__|";_[i]===_[i][i]&&((Error.prototype[i]=function(){return console.log(n+"\n\n     有兴趣加入美团前端吗？请将简历发送至 hr.tech@meituan.com\n     邮件标题请注明：应聘前端工程师0895-用户产品-姓名XXX-来自CONSOLE"),_.call(this)})[i]=function(){return _[i]()})}(Error.prototype[i])}n(),M.loadQueue.push(t)}(M.Env["data-conf"]),function(_,n){"use strict";function t(_){var n,t;_=_||this.jobs,"function"==typeof _?(n=this.jobs,t=[].concat(_)):(n=[].concat(_),t=this.workers),Y.Array.each(n,function(_){Y.Array.each(t,function(n){setTimeout(Y.bind(n,null,_),0)})})}function a(){this.jobs=[],this.workers=[],Y.Array.each(e,function(_){"function"==typeof _?this.workers.push(_):this.jobs.push(_)},this),e=null,t.call(this)}var e=n[_]||[];a.prototype.push=function(_){"function"==typeof _?this.workers.push(_):this.jobs.push(_),t.call(this,_)},n[_]=new a}("_autoinit",M);