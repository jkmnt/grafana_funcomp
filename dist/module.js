define(["react","@grafana/ui","@grafana/data","@grafana/runtime","emotion"],(function(e,t,n,r,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n(1);var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}var l,d,f=n(4),s=n(3),v=Object(s.getBackendSrv)(),p=Object(s.getLocationSrv)(),g=Object(s.getDataSourceSrv)(),b=null===(l=window)||void 0===l?void 0:l.angular.element("body").injector(),h={backendSrv:v,dashboardSrv:b.get("dashboardSrv"),locationSrv:p,timeSrv:b.get("dashboardSrv"),contextSrv:b.get("contextSrv"),appEvents:null===(d=v)||void 0===d?void 0:d.dependencies.appEvents,dataSourceSrv:g};function y(e,t){for(var n,r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var u={Button:i.Button,Alert:i.Alert,Icon:i.Icon,IconButton:i.IconButton,FileUpload:i.FileUpload};return o.a.createElement(null!==(n=u[e])&&void 0!==n?n:e,t,r&&r.length?r:void 0)}var S,m={show_message:function(e,t){h.appEvents.emit("alert-"+e,t)},toast:function(e,t){void 0===t&&(t="error"),h.appEvents.emit("alert-"+t,e)},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};n.d(t,"plugin",(function(){return w}));var j=[];function O(e){var t=e.value,n=e.onChange;return o.a.createElement(i.CodeEditor,{value:t,onBlur:n,onSave:n,language:"javascript",showMiniMap:!1,showLineNumbers:!0,getSuggestions:function(){return j},height:400})}var w=new a.PanelPlugin((function(e){var t,n=o.a.useRef({});if(!e.options.render)return null;var r=o.a.useMemo((function(){try{return new Function("props","data","React","css","fc","context",e.options.render)}catch(e){return e.toString()}}),[e.options.render]);if("string"==typeof r)return r;var i,l,d=h.dashboardSrv.getCurrent(),s=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}(d.panels,[d.panelInEdit]).find((function(t){return(null==t?void 0:t.id)==e.id})),v=u(u(u({},h),m),{create:y,dashboard:h.dashboardSrv.getCurrent(),panel:s,format_value:function(e,t){return Object(a.getDisplayProcessor)({field:e})(t)},datasource:h.dataSourceSrv.get(s.datasource),targets:null==s?void 0:s.targets});try{return o.a.createElement("div",{key:e.options.render,className:Object(f.css)(S||(i=["\n          overflow: hidden;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        "],l=["\n          overflow: hidden;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        "],Object.defineProperty?Object.defineProperty(i,"raw",{value:l}):i.raw=l,S=i))},null!==(t=r(e,e.data,o.a,f.css,v,n.current))&&void 0!==t?t:null)}catch(e){return e.toString()}})).setPanelOptions((function(e){e.addCustomEditor({id:"render",path:"render",name:"Render JS",editor:O,defaultValue:"/* */"})})).useFieldConfig()}])}));
//# sourceMappingURL=module.js.map