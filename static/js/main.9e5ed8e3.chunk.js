(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){"use strict";t.r(n);var o={};t.r(o),t.d(o,"register",function(){return g}),t.d(o,"unregister",function(){return p});var r=t(0),i=t.n(r),a=t(2),c=t.n(a),s=t(3),l=t(4),u=t(6),d=t(5),f=t(7);function v(){var e=document.getElementById("codeContent").value;document.getElementById("showContent").srcdoc=e}var h=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"textcontainer"},i.a.createElement("textarea",{id:"codeContent"}),i.a.createElement("br",null),i.a.createElement("input",{type:"button",className:"run",value:"run",onClick:v})),i.a.createElement("div",{id:"iframecontainer"},i.a.createElement("iframe",{id:"showContent"})))}}]),n}(r.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){if("serviceWorker"in navigator){if(new URL("anubhavshakya.com",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("anubhavshakya.com","/service-worker.js");w?(!function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):m(n,e)})}}function m(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function p(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}c.a.render(i.a.createElement(h,null),document.getElementById("root")),o()},8:function(e,n,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e5ed8e3.chunk.js.map