(this["webpackJsonpreact-websocket-scheduler"]=this["webpackJsonpreact-websocket-scheduler"]||[]).push([[0],{48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(28),c=n(37),i=n(38),o=n(42),s=n(41),r=n(9),l=n(65),d=n(59),j=n(16),h=n(60),b=n(61),u=n(62),m=n(63),x=n(64),f=n(66),v=n(58),O=n(57),p=(n(48),n(8)),w=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).data=[],e}return Object(i.a)(n,[{key:"editorTemplate",value:function(e){return void 0!==e?Object(p.jsx)("table",{className:"custom-event-editor",style:{width:"100%"},children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"e-textlabel",children:"Summary"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{id:"Summary",className:"e-field e-input",type:"text",name:"Subject",style:{width:"100%"}})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"e-textlabel",children:"Status"}),Object(p.jsx)("td",{children:Object(p.jsx)(O.a,{id:"EventType",placeholder:"Choose status","data-name":"EventType",className:"e-field",style:{width:"100%"},dataSource:["New","Requested","Confirmed"]})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"e-textlabel",children:"From"}),Object(p.jsx)("td",{children:Object(p.jsx)(v.a,{id:"StartTime",format:"dd/MM/yy hh:mm a","data-name":"StartTime",value:new Date(e.startTime||e.StartTime),className:"e-field"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"e-textlabel",children:"To"}),Object(p.jsx)("td",{children:Object(p.jsx)(v.a,{id:"EndTime",format:"dd/MM/yy hh:mm a","data-name":"EndTime",value:new Date(e.endTime||e.EndTime),className:"e-field"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"e-textlabel",children:"Reason"}),Object(p.jsx)("td",{children:Object(p.jsx)("textarea",{id:"Description",className:"e-field e-input",name:"Description",rows:3,cols:50,style:{width:"100%",height:"60px !important",resize:"vertical"}})})]})]})}):Object(p.jsx)("div",{})}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"schedule-control-section",children:Object(p.jsx)("div",{className:"col-lg-12 control-section",children:Object(p.jsx)("div",{className:"control-wrapper",children:Object(p.jsxs)(l.a,{width:"100%",height:"650px",selectedDate:new Date(2018,1,15),eventSettings:{dataSource:this.data},editorTemplate:this.editorTemplate.bind(this),showQuickInfo:!1,children:[Object(p.jsxs)(d.b,{children:[Object(p.jsx)(d.a,{option:"Day"}),Object(p.jsx)(d.a,{option:"Week"}),Object(p.jsx)(d.a,{option:"WorkWeek"}),Object(p.jsx)(d.a,{option:"Month"})]}),Object(p.jsx)(j.c,{services:[h.a,b.a,u.a,m.a,x.a,f.a]})]})})})})}}]),n}(r.PureComponent),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.render(Object(p.jsx)(w,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");g?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):y(e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.3d98817a.chunk.js.map