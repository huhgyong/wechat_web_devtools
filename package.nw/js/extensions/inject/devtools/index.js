(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=289)})({2:function(a){function b(a){j=a?a:j,h=new window.__WebSocket(i,j),h.onopen=function(){let a=[].concat(l);l=[],a.forEach((a)=>{c(a)})},h.onclose=function(){h=null,b(a)},h.onmessage=function(a){try{let b=JSON.parse(a.data);d(b)}catch(a){}}}function c(a){h&&h.readyState===window.__WebSocket.OPEN?h.send(JSON.stringify(a)):l.push(a)}function d(){k.forEach((a)=>{try{a.apply(this,arguments)}catch(a){console.error(a)}})}var e=navigator.userAgent,f=e.match(/port\/(\d*)/),g=f?parseInt(f[1]):9974,h=null,i=`ws://127.0.0.1:${g}`,j=null,k=[],l=[];a.exports={connect:b,send:c,registerCallback:(a)=>{k.push(a)}}},239:function(a,b,c){const d=c(286),e=c(288),f=c(285),g=c(287),h=c(83).sendMessageToEmbedder;a.exports={appservice:{openInNewTab:d,hackShowPannel:e,hideTabbar:f,sendSecurityDetails:g},widget:{openInNewTab:d,hackShowPannel:e,hideTabbar:f,sendSecurityDetails:g},openWebview:{openInNewTab:d,sendMessageToEmbedder:h}}},240:function(a){let b,c=window.navigator.userAgent,d=-1!==c.indexOf('devtoolsview'),e=-1!==c.indexOf('appservicedevtools'),f=-1!==c.indexOf('widgetservicedevtools'),g=-1!==c.indexOf('gameservicedevtools');d?b='openWebview':e?b='appservice':f?b='widget':g&&(b='game'),a.exports={type:b}},241:function(a,b,c){function d(){if('chrome-devtools:'===location.protocol){let a=`APPSERVICEDEVTOOLS`;e.connect(a)}}const e=c(2);'complete'==document.readyState?d():window.addEventListener('load',()=>{d()}),a.exports={send:e.send,registerCallback:e.registerCallback}},285:function(a,b,c){function d(){let a=document.querySelector('.inspector-view-tabbed-pane')||document.querySelector('.insertion-point-main'),b=a.shadowRoot;e(b,{childList:!0,subtree:!0},(a)=>{let b=a.addedNodes;for(let c,d=0,e=b.length;d<e;d++)return c=b[d],c.classList.contains('tabbed-pane-header-tab')},()=>{setTimeout(function(){f.forEach((a)=>{let c=b.querySelector(`#${a}`);c&&(c.style.display='none',c.classList.contains('selected')&&InspectorFrontendAPI.showPanel('console'))})},200);let a=b.querySelector('.tabbed-pane-tab-slider');e(b.querySelector('.tabbed-pane-header-tabs'),{attributes:!0,subtree:!0},()=>{let c=b.querySelector('.selected');if(c){let b=c.id;if(0<=f.indexOf(b))return c.style.display='none',void InspectorFrontendAPI.showPanel('console');let d=c.offsetLeft,e=c.offsetWidth,g=`transform: translateX(${d}px); width: ${e}px;`;a.style.cssText=g}},()=>{})})}const e=c(290),f=['tab-elements','tab-timeline','tab-audits','tab-resources','tab-heap_profiler','tab-audits2'];a.exports=function(){e(document.body,{childList:!0},(a)=>{let b=a.addedNodes;for(let c,d=0,e=b.length;d<e;d++)return c=b[d],'widget vbox root-view'===c.className},()=>{d()})}},286:function(a){a.exports=()=>{InspectorFrontendHost.openInNewTab=function(a){window.open(a)}}},287:function(a){function b(a){let b=a.data;if(!d){let a=document.getElementsByTagName('iframe');for(let b,c=0,e=a.length;c<e;c++)b=a[c],/devtools.html$/.test(b.src)&&(d=b);if(!d)return}let c=b.securityDetails(),e={command:'securityDetails',url:b.url(),statusCode:b.statusCode,remoteAddress:b._remoteAddress};c?(e.protocol=c.protocol,e.securityState=b.securityState(),d.contentWindow.postMessage(e,'*')):d.contentWindow.postMessage(e,'*')}function c(){try{let a=SDK.targetManager._targets[0],c=new SDK.NetworkManager(SDK.targetManager._targets[0]);c.addEventListener(SDK.NetworkManager.Events.ResponseReceived,b),c._networkAgent.setCacheDisabled(!0)}catch(a){setTimeout(()=>{c()},1e3/60)}}var d;a.exports=c},288:function(a){const b={element:!0,timeline:!0,profiles:!0,security:!0,audits:!0,resources:!0,audits2:!0};let c;a.exports=function(){let a=InspectorFrontendAPI.showPanel;InspectorFrontendAPI.showPanel=function(d){b[d]&&(d='console');0<=['Wxml','Storage','AppData'].indexOf(d)&&(!c&&(c=document.getElementsByTagName('iframe')[0].src.match(/chrome-extension:\/\/([A-Za-z0-9]*)/)[0]),d=`${c}${d}`),localStorage.setItem('panelName',d),a.call(this,d)}}},289:function(a,b,c){'chrome-devtools:'===location.protocol&&function(){const a=c(241),b=c(83),d=c(239),{type:e}=c(240);if(e&&d[e])for(let a in d[e])d[e][a]();window.addEventListener('click',()=>{a.send({command:'CLICK'})}),a.registerCallback((a)=>{let{command:c,data:d}=a;'SET_TOUCH_MODE'===c?b.setTouchEmulationEnabled(d):'SET_DEVICE'==c?b.setDeviceMetricsOverride(d):'SHOW_PANNEL'==c&&InspectorFrontendAPI.showPanel(d.name)})}()},290:function(a){a.exports=function(a,b,c,d){let e=new MutationObserver((a)=>{for(let b,f=0,g=a.length;f<g;f++)if(b=a[f],c(b)){d(),e.disconnect();break}});e.observe(a,b)}},83:function(a){function b(a){if(!d){let b=SDK.targetManager._targets[0];if(b){let c=b._agents.Emulation;c.invoke_setTouchEmulationEnabled({enabled:a})}}}var c,d=!1,e=!0,f=function(){DevToolsAPI.hackSendMessageToEmbedder=DevToolsAPI.sendMessageToEmbedder,DevToolsAPI.sendMessageToEmbedder=function(a,f,g){DevToolsAPI.hackSendMessageToEmbedder(a,f,g);let h={};try{h=JSON.parse(f[0])}catch(a){}if('inspectedURLChanged'===a){let a=SDK.targetManager._targets[0],d=a._agents.Emulation;d.invoke_clearDeviceMetricsOverride().then(()=>{c&&d.invoke_setDeviceMetricsOverride(c),e||b(!0),e=!0})}else if('Overlay.setInspectMode'===h.method){let a=h.params,c='searchForNode'!==a.mode;'searchForNode'===a.mode?(d=!0,b(!1)):(d=!1,b(!0))}}};a.exports={sendMessageToEmbedder:function(){try{f()}catch(a){setTimeout(()=>{f()},1e3/60)}},setTouchEmulationEnabled:b,setDeviceMetricsOverride:function(a){c=a;let b=SDK.targetManager._targets[0];if(b){let c=b._agents.Emulation;c.invoke_setDeviceMetricsOverride(a)}}}}});