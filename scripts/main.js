function l(b,a,c,d){b.i.la(b.R,a,c,d)}function p(b,a,c,d){b.i.o?l(b,a,c,d):b.i.ob()._OnMessageFromDOM({type:"event",component:b.R,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function aa(b,a,c){b.i.g(b.R,a,c)}function ba(b,a){for(const [c,d]of a)aa(b,c,d)}window.Ha=class{constructor(b,a){this.i=b;this.R=a}Fa(){}};window.Tb=class{constructor(){}};"use strict";class ca{constructor(b){this.sa=b;this.ua=!1;this.xa=!0}}
function da(b,a){const c=a.elementId,d=b.N(c,a),e=new ca(d);b.S.set(c,e);d.style.boxSizing="border-box";d.style.display="none";e.xa=!!a.isVisible;a=b.na(d);a.addEventListener("focus",()=>{q(b,"elem-focused",c)});a.addEventListener("blur",()=>{q(b,"elem-blurred",c)});b.ca&&document.body.appendChild(d)}function r(b,a,c){aa(b,a,d=>{const e=t(b,d.elementId);return c(e,d)})}function t(b,a){b=b.S.get(a);if(!b)throw Error(`no element with id ${a}`);return b.sa}
function q(b,a,c,d){d||(d={});d.elementId=c;l(b,a,d)}function u(b,a,c,d){d||(d={});d.elementId=c;p(b,a,d)}
window.$=class extends self.Ha{constructor(b,a){super(b,a);this.S=new Map;this.ca=!0;ba(this,[["create",c=>da(this,c)],["destroy",c=>{c=c.elementId;const d=t(this,c);this.ca&&d.parentElement.removeChild(d);this.S.delete(c)}],["set-visible",c=>{if(this.ca){var d=this.S.get(c.elementId),e=d.sa;d.ua?e.style.display=c.isVisible?"":"none":d.xa=!!c.isVisible}}],["update-position",c=>{if(this.ca){var d=this.S.get(c.elementId),e=d.sa;e.style.left=c.left+"px";e.style.top=c.top+"px";e.style.width=c.width+"px";
e.style.height=c.height+"px";c=c.fontSize;null!==c&&(e.style.fontSize=c+"em");d.ua||(d.ua=!0,d.xa&&(e.style.display=""))}}],["update-state",c=>{const d=t(this,c.elementId);this.v(d,c)}],["focus",c=>{const d=this.na(t(this,c.elementId));c.focus?d.focus():d.blur()}],["set-css-style",c=>{const d=t(this,c.elementId),e=c.prop;c=c.val;e.startsWith("--")?d.style.setProperty(e,c):d.style[e]=c}],["set-attribute",c=>{t(this,c.elementId).setAttribute(c.name,c.val)}],["remove-attribute",c=>{t(this,c.elementId).removeAttribute(c.name)}]]);
r(this,"get-element",c=>c)}N(){throw Error("required override");}v(){throw Error("required override");}na(b){return b}};"use strict";const ea=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),v=/android/i.test(navigator.userAgent),fa=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let ha=0;
function w(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Jb?new Promise(c=>{const d="c3_resolve_"+ha;++ha;self[d]=c;a.textContent=b.Nb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let ia=!1,ja=!1;function ka(){if(!ia){try{new Worker("blob://",{get type(){ja=!0}})}catch(b){}ia=!0}return ja}let x=new Audio;
const la={"audio/webm; codecs=opus":!!x.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!x.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!x.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!x.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!x.canPlayType("audio/mp4"),"audio/mpeg":!!x.canPlayType("audio/mpeg")};x=null;async function ma(b){b=await na(b);return(new TextDecoder("utf-8")).decode(b)}
function na(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const y=[];let z=0;window.RealFile=window.File;const A=[],B=new Map,C=new Map;let oa=0;const pa=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");pa.push(b)};const qa=new Set(["cordova","playable-ad","instant-games"]);let ra=!1;
window.F=class b{constructor(a){this.o=a.Pb;this.V=null;this.m="";this.I=a.Mb;this.Z={};this.za=this.K=null;this.da=[];this.j=this.X=null;this.Ua=!1;this.T=null;this.H=-1;this.Eb=()=>this.vb();this.Ca=[];this.h=a.Xa;this.wa="file"===location.protocol.substr(0,4);!this.o||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ka()||(this.o=!1);this.o&&fa&&(this.o=!1);if("playable-ad"===this.h||"instant-games"===this.h)this.o=!1;if("cordova"===this.h&&this.o)if(v){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);
c&&90<=parseInt(c[1],10)||(this.o=!1)}else this.o=!1;this.ea=this.B=null;"html5"!==this.h||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.g("runtime","cordova-fetch-local-file",c=>this.rb(c));this.g("runtime","create-job-worker",()=>this.sb());"cordova"===this.h?document.addEventListener("deviceready",()=>this.La(a)):this.La(a)}bb(){return ea&&
"cordova"===this.h}ka(){const a=navigator.userAgent;return ea&&qa.has(this.h)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}$a(){return v}Ia(){return v&&qa.has(this.h)}async La(a){"macos-wkwebview"===this.h&&this.zb();if("playable-ad"===this.h){this.B=self.c3_base64files;this.ea={};await this.kb();for(let d=0,e=a.L.length;d<e;++d){var c=a.L[d];this.ea.hasOwnProperty(c)?a.L[d]={Jb:!0,Nb:this.ea[c]}:this.B.hasOwnProperty(c)&&(a.L[d]=URL.createObjectURL(this.B[c]))}a.ha=[]}if("nwjs"===this.h&&
self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.gb(()=>{d++;document.body.style.opacity=0===d%2?"1":"0.999"})}a.Lb?this.m=a.Lb:(c=location.origin,this.m=("null"===c?"file:///":c)+location.pathname,c=this.m.lastIndexOf("/"),-1!==c&&(this.m=this.m.substr(0,c+1)));a.Rb&&(this.Z=a.Rb);c=new MessageChannel;this.V=c.port1;this.V.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.ub(d));this.T=new self.cb(this);await sa(this.T);
"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.o?await this.qb(a,c.port2):await this.pb(a,c.port2)}oa(a){a=this.Z.hasOwnProperty(a)?this.Z[a]:a.endsWith("/workermain.js")&&this.Z.hasOwnProperty("workermain.js")?this.Z["workermain.js"]:"playable-ad"===this.h&&this.B.hasOwnProperty(a)?this.B[a]:
a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ja(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===this.h&&this.wa)return a=await this.ia(d.Ib?a:this.I+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}A(){return Math.max(window.innerWidth,
1)}u(){return Math.max(window.innerHeight,1)}Ka(a){var c=this.m,d=location.href,e=this.A(),f=this.u(),g=window.devicePixelRatio,h=b.O(),k=a.Xb,m=window.cr_previewImageBlobs||this.B,n=window.cr_previewProjectFileBlobs,Ea=window.cr_previewProjectFiles,Fa=window.Vb||"";a=a.Xa;var Ga=(new URLSearchParams(self.location.search)).has("debug"),P=this.T;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:k,previewImageBlobs:m,previewProjectFileBlobs:n,
previewProjectFileSWUrls:Ea,swClientId:Fa,exportType:a,isDebug:Ga,ife:!!self.Wb,jobScheduler:{inputPort:P.va,outputPort:P.Ba,maxNumWorkers:P.Cb},supportedAudioFormats:la,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.I+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.I+"opus.wasm.wasm",isFileProtocol:this.wa,isiOSCordova:this.bb(),isiOSWebView:this.ka(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(a,c){const d=this.oa(a.Qb);"preview"===this.h?(this.K=new Worker("previewworker.js",
{type:"module",name:"Runtime"}),await new Promise((h,k)=>{const m=n=>{this.K.removeEventListener("message",m);n.data&&"ok"===n.data.type?h():k()};this.K.addEventListener("message",m);this.K.postMessage({type:"construct-worker-init","import":(new URL(d,this.m)).toString()})})):this.K=await this.ja(d,this.m,{type:"module",name:"Runtime",Ib:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.ha||[],g=a.L;f=await Promise.all(f.map(h=>this.G(h)));g=await Promise.all(g.map(h=>this.G(h)));if("cordova"===this.h)for(let h=0,k=a.ga.length;h<k;++h){const m=a.ga[h],n=m[0];if(n===a.Ea||"scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m[1]=await this.G(n)}this.K.postMessage(Object.assign(this.Ka(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.ga,
mainProjectScript:a.Ea,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,e,...ta(this.T)]);this.da=A.map(h=>new h(this));this.Ja();ua(this.X);self.c3_callFunction=(h,k)=>{var m=this.X;return m.i.eb(m.R,{name:h,params:k})};"preview"===this.h&&(self.goToLastErrorScript=()=>this.la("runtime","go-to-last-error-script"))}async pb(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();
this.da=A.map(g=>new g(this));this.Ja();var d=a.L.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():g);if(Array.isArray(a.ha)){var e=[...a.ha].map(g=>g instanceof Blob?URL.createObjectURL(g):g);d.unshift(...e)}d=await Promise.all(d.map(g=>this.G(g)));await Promise.all(d.map(g=>w(g)));d=self.C3_ProjectScriptsStatus;e=a.Ea;const f=a.ga;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.G(h),await w(h),"preview"!==this.h||d[g]||this.Na(g,"main script did not run to completion")}catch(k){this.Na(g,
k)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.G(h),await w(h);"preview"===this.h&&"object"!==typeof self.Sb.Ub?(this.ba(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ka(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:pa}),ua(this.X),
this.Ma(),this.za=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.za,a))}Na(a,c){this.ba();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ma(){this.ba()}ba(){const a=window.Gb;a&&(a.parentElement.removeChild(a),window.Gb=null)}async sb(){const a=await va(this.T);return{outputPort:a,transferables:[a]}}ob(){if(this.o)throw Error("not available in worker mode");
return this.za}la(a,c,d,e){this.V.postMessage({type:"event",component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},void 0)}eb(a,c){const d=oa++,e=new Promise((f,g)=>{C.set(d,{resolve:f,reject:g})});this.V.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.tb(a);if("result"===c)this.wb(a);else if("runtime-ready"===c)this.xb();else if("alert-error"===
c)this.ba(),alert(a.message);else if("creating-runtime"===c)this.Ma();else throw Error(`unknown message '${c}'`);}tb(a){const c=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=B.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.aa(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.aa(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.aa(f,!1,""+h)}):this.aa(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
else console.warn(`[DOM] No event handlers for component '${c}'`)}aa(a,c,d){let e;d&&d.transferables&&(e=d.transferables);this.V.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}wb(a){const c=a.responseId,d=a.isOk;a=a.result;const e=C.get(c);d?e.resolve(a):e.reject(a);C.delete(c)}g(a,c,d){let e=B.get(a);e||(e=new Map,B.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static M(a){if(A.includes(a))throw Error("DOM handler already added");A.push(a)}Ja(){for(const a of this.da)if("runtime"===
a.R){this.X=a;return}throw Error("cannot find runtime DOM handler");}ub(a){this.la("debugger","message",a)}xb(){for(const a of this.da)a.Fa()}static O(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||ra)}static Oa(a){ra=!!a}gb(a){this.Ca.push(a);this.qa()}qa(){-1===this.H&&this.Ca.length&&(this.H=requestAnimationFrame(this.Eb))}ib(){-1!==this.H&&(cancelAnimationFrame(this.H),this.H=-1)}vb(){this.H=-1;for(const a of this.Ca)a();this.qa()}pa(){this.X.pa()}fb(){this.Ua=
!0}Za(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.Za(a)}async G(a){return"cordova"===this.h&&(a.startsWith("file:")||this.wa&&this.ab(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.ia(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async rb(a){const c=a.filename;switch(a.as){case "text":return await this.Ya(c);case "buffer":return await this.ia(c);default:throw Error("unsupported type");}}Ga(a){const c=
window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async Ya(a){a=await this.Ga(a);return await ma(a)}ma(){if(y.length&&!(8<=z)){z++;var a=y.shift();this.lb(a.filename,a.Ob,a.Hb)}}ia(a){return new Promise((c,d)=>{y.push({filename:a,Ob:e=>{z--;this.ma();c(e)},Hb:e=>{z--;this.ma();d(e)}});this.ma()})}async lb(a,c,d){try{const e=await this.Ga(a),f=await na(e);c(f)}catch(e){d(e)}}zb(){var a={type:"ready"};if("windows-webview2"===
this.h)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.h)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async kb(){const a=[];for(const [c,d]of Object.entries(this.B))a.push(this.jb(c,d));await Promise.all(a)}async jb(a,c){if("object"===typeof c)this.B[a]=new Blob([c.str],{type:c.type}),this.ea[a]=c.str;else{let d=await this.nb(c);d||(d=this.mb(c));this.B[a]=d}}async nb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}mb(a){a=this.yb(a);return this.hb(a.data,a.Kb)}yb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Kb:a,data:d}}hb(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,k;for(k=h=0;h<e;++h)g[h]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=
3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:c})}};"use strict";const D=self.F;function wa(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const xa=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),E={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},ya={dispatchUserScriptEvent:!0},G={dispatchRuntimeEvent:!0};
function za(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function Aa(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function H(b){b=URL.createObjectURL(b);try{return await Aa(b)}finally{URL.revokeObjectURL(b)}}
function Ba(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function Ca(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await H(b);var d=await Ba(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await H(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await H(b)}
function I(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const Da=new Set(["input","textarea","datalist","select"]),Ia=new Set(["canvas","body","html"]);function J(b){b.target.tagName&&Ia.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function Ja(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await H(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await Ca(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let K=!1;document.addEventListener("pause",()=>K=!0);document.addEventListener("resume",()=>K=!1);function ua(b){b.Sa=!0;b.ya=b.i.A();b.U=b.i.u()}async function Ka(b){await Promise.all(b.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function La(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Ma(b){return await self.C3_GetSvgImageSize(b.blob)}function Na(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}
function Oa(b){self.setTimeout(()=>{b.Ra=!0},1E3);"cordova"===b.i.h?(document.addEventListener("pause",()=>L(b,!0)),document.addEventListener("resume",()=>L(b,!1))):document.addEventListener("visibilitychange",()=>L(b,document.hidden));return{isSuspended:!(!document.hidden&&!K)}}
function Pa(b){b.Qa||(b.Qa=!0,window.addEventListener("deviceorientation",a=>{b.l||l(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},E)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||l(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},E)}))}
function Qa(b){b.Pa||(b.Pa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});l(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},E)}}))}async function Ra(b){await za(b.url)}
function Sa(b,a){b.Ta=a.message;-1===b.ta&&(b.ta=setTimeout(()=>{b.ta=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Ta)},250))}function M(b){if(!b.l){var a=D.O();a&&"any"!==b.Da&&Ta(b);l(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.A(),innerHeight:b.u()})}}function N(b,a){console.warn("[Construct] Fullscreen request failed: ",a);l(b,"fullscreenerror",{isFullscreen:D.O(),innerWidth:b.A(),innerHeight:b.u()})}
function L(b,a){a?b.i.ib():b.i.qa();l(b,"visibilitychange",{hidden:a})}function Ua(b,a,c){"Backspace"===c.key&&J(c);if(!b.l){var d=xa.get(c.code)||c.code;p(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},E)}}
function O(b,a,c,d){b.l||wa(c)||p(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY+b.s,pageX:c.pageX,pageY:c.pageY+b.s,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function Q(b){window!==window.top&&window.focus();Va(b.target)&&document.activeElement&&!Va(document.activeElement)&&document.activeElement.blur()}
function R(b,a,c){if(!b.l){var d=0;"mouse"===c.pointerType&&(d=b.W);p(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.s,pageX:c.pageX,pageY:c.pageY+b.s,movementX:c.movementX||0,movementY:c.movementY||0,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},E);"mouse"===c.pointerType&&(d="mousemove",
"pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),O(b,d,c,ya),b.W=c.buttons)}}
function S(b,a,c){if(!b.l&&!wa(c)){var d=b.W;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");p(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.s,pageX:c.pageX,pageY:c.pageY+b.s,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},E);b.W=c.buttons;O(b,c.type,c,ya)}}
function T(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];p(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.s,pageX:f.pageX,pageY:f.pageY+b.s,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},
E)}}function U(b,a,c){document.body.style.transform="";b.s=0;if(0<c){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-c)/2,a>c&&(a=c),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.s=a))}}function Wa(b,a,c,d){const e=b.A(),f=b.u();b.J=-1;e!=a||f!=c?l(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:D.O()}):10>d&&Xa(b,e,f,d+1)}
function Xa(b,a,c,d){-1!==b.J&&clearTimeout(b.J);b.J=setTimeout(()=>Wa(b,a,c,d),48)}
function Ta(b){b=b.Da;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Va(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
D.M(class extends self.Ha{constructor(b){super(b,"runtime");this.Va=!0;this.Sa=!1;this.J=-1;this.Da="any";this.Pa=this.Qa=!1;this.fa=document.createElement("div");this.fa.className="c3-screen-reader-text";this.fa.setAttribute("aria-live","polite");document.body.appendChild(this.fa);this.D=null;this.l=!1;this.Ta="";this.ta=-1;this.Ra=!1;this.ya=b.A();this.U=b.u();this.s=this.Y=0;b.g("canvas","update-size",d=>{var e=this.i;e.Ua||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",
e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",d.displayScale),this.Va&&(e.style.display="",this.Va=!1))});b.g("runtime","invoke-download",d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.g("runtime","load-webfonts",d=>Ka(d));b.g("runtime","raster-svg-image",d=>La(d));b.g("runtime","get-svg-image-size",
d=>Ma(d));b.g("runtime","set-target-orientation",d=>{this.Da=d.targetOrientation});b.g("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.g("runtime","post-to-debugger",d=>Na(d));b.g("runtime","go-to-script",d=>Na(d));b.g("runtime","before-start-ticking",()=>Oa(this));b.g("runtime","debug-highlight",d=>{if(d.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var e=this.D;e.style.display="";e.style.left=d.left-
1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.D&&(this.D.style.display="none")});b.g("runtime","enable-device-orientation",()=>Pa(this));b.g("runtime","enable-device-motion",()=>Qa(this));b.g("runtime","add-stylesheet",d=>Ra(d));b.g("runtime","script-create-worker",d=>{const e=d.port2;(new Worker(d.url,d.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.g("runtime","alert",d=>{alert(d.message)});b.g("runtime",
"screen-reader-text",d=>{var e=d.type;"create"===e?(e=document.createElement("p"),e.id="c3-sr-"+d.id,e.textContent=d.text,this.fa.appendChild(e)):"update"===e?(e=document.getElementById("c3-sr-"+d.id))?e.textContent=d.text:console.warn(`[Construct] Missing screen reader text with id ${d.id}`):"release"===e?(e=document.getElementById("c3-sr-"+d.id))?e.remove():console.warn(`[Construct] Missing screen reader text with id ${d.id}`):console.warn(`[Construct] Unknown screen reader text update '${e}'`)});
b.g("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.g("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.fb()});b.g("runtime","export-to-video-progress",d=>Sa(this,d));b.g("runtime","exported-to-video",d=>{window.Fb({type:"exported-video",
arrayBuffer:d.arrayBuffer,contentType:d.contentType,time:d.time})});b.g("runtime","exported-to-image-sequence",d=>{window.Fb({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time,gif:d.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||I(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",J);window.addEventListener("gesturehold",J);c.addEventListener("selectstart",J);c.addEventListener("gesturehold",
J);window.addEventListener("touchstart",J,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",J,{passive:!1}),c.addEventListener("pointerdown",J)):c.addEventListener("touchstart",J);this.W=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",Ja,{passive:!1});window.addEventListener("wheel",Ja,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Sa){var d=this.A();var e=this.u();if(this.i.Ia()){if(this.Ra){if(this.ya===
d&&e<this.U){this.Y=this.U-e;U(this,this.U,this.Y);d=void 0;break a}0<this.Y&&(this.Y=0,U(this,e,this.Y))}this.ya=d;this.U=e}l(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:D.O()});this.i.ka()&&(-1!==this.J&&clearTimeout(this.J),Wa(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>M(this));window.addEventListener("webkitfullscreenchange",()=>M(this));window.addEventListener("mozfullscreenchange",()=>M(this));window.addEventListener("fullscreenerror",
d=>N(this,d));window.addEventListener("webkitfullscreenerror",d=>N(this,d));window.addEventListener("mozfullscreenerror",d=>N(this,d));if(b.ka())if(window.visualViewport){let d=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var d=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));
d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):I(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===d?(D.Oa(!0),M(this)):"exited-fullscreen"===d?(D.Oa(!1),M(this)):console.warn("Unknown wrapper message: ",d)};this.Aa=new Set;this.Db=new WeakSet;this.Bb=!1}Fa(){window.addEventListener("focus",()=>{l(this,"window-focus",null,G)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=
!1}l(this,"window-blur",{parentHasFocus:a},G);this.W=0});window.addEventListener("focusin",a=>{a=a.target;(Da.has(a.tagName.toLowerCase())||I(a))&&l(this,"keyboard-blur",null,G)});window.addEventListener("keydown",a=>Ua(this,"keydown",a));window.addEventListener("keyup",a=>Ua(this,"keyup",a));window.addEventListener("dblclick",a=>O(this,"dblclick",a,E));window.addEventListener("wheel",a=>{this.l||l(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.s,pageX:a.pageX,pageY:a.pageY+this.s,deltaX:a.deltaX,
deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},E)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{Q(a);R(this,"pointerdown",a)}),this.i.o&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{R(this,"pointermove",a)}):window.addEventListener("pointermove",a=>R(this,"pointermove",a)),window.addEventListener("pointerup",a=>R(this,"pointerup",a)),window.addEventListener("pointercancel",
a=>R(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{Q(a);S(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>S(this,"pointermove",a)),window.addEventListener("mouseup",a=>S(this,"pointerup",a)),window.addEventListener("touchstart",a=>{Q(a);T(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>T(this,"pointermove",a)),window.addEventListener("touchend",a=>T(this,"pointerup",a)),window.addEventListener("touchcancel",a=>T(this,"pointercancel",a)));const b=
()=>this.pa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.$a()&&!this.i.Ia()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{U(this,this.u(),navigator.virtualKeyboard.boundingRect.height)}))}A(){return this.i.A()}u(){return this.i.u()}pa(){var b=
[...this.Aa];this.Aa.clear();if(!this.Bb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Db.has(a)||this.Aa.add(a)})}});"use strict";async function sa(b){if(b.Ab)throw Error("already initialised");b.Ab=!0;var a=b.C.oa(("playable-ad"===b.C.h?b.C.I:"")+"dispatchworker.js");b.ra=await b.C.ja(a,b.P,{name:"DispatchWorker"});a=new MessageChannel;b.va=a.port1;b.ra.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Ba=await va(b)}function ta(b){return[b.va,b.Ba]}
async function va(b){const a=b.Wa.length;var c=b.C.oa(("playable-ad"===b.C.h?b.C.I:"")+"jobworker.js");c=await b.C.ja(c,b.P,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.ra.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.Wa.push(c);return e.port1}
self.cb=class{constructor(b){this.C=b;this.P=b.m;this.P="preview"===b.h?this.P+"workers/":this.P+b.I;this.Cb=Math.min(navigator.hardwareConcurrency||2,16);this.ra=null;this.Wa=[];this.Ba=this.va=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.F({Pb:!0,Qb:"workermain.js",L:["scripts/c3runtime.js"],ga:[],Ea:"",Mb:"scripts/",ha:[],Xa:"html5"}));"use strict";function V(b){b.stopPropagation()}
self.F.M(class extends self.${constructor(b){super(b,"button")}N(b,a){const c=document.createElement("input");var d=c;a.isCheckbox?(c.type="checkbox",d=document.createElement("label"),d.appendChild(c),d.appendChild(document.createTextNode("")),d.style.fontFamily="sans-serif",d.style.userSelect="none",d.style.webkitUserSelect="none",d.style.display="inline-block",d.style.color="black"):c.type="button";d.style.position="absolute";d.addEventListener("pointerdown",V);d.addEventListener("pointermove",
V);d.addEventListener("pointerrawupdate",V);d.addEventListener("pointerup",V);d.addEventListener("mousedown",V);d.addEventListener("mouseup",V);d.addEventListener("keydown",V);d.addEventListener("keyup",V);c.addEventListener("click",()=>u(this,"click",b,{isChecked:c.checked}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(d,a);return d}na(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}v(b,a){const c="input"===b.tagName.toLowerCase()?b:b.firstChild;c.checked=a.isChecked;
c.disabled=!a.isEnabled;b.title=a.title;b===c?c.value=a.text:b.lastChild.textContent=a.text}});"use strict";function W(b){b.stopPropagation()}function Ya(b){13!==b.which&&27!==b.which&&b.stopPropagation()}
self.F.M(class extends self.${constructor(b){super(b,"text-input");r(this,"scroll-to-bottom",a=>{a.scrollTop=a.scrollHeight})}N(b,a){let c;const d=a.type;"textarea"===d?(c=document.createElement("textarea"),c.style.resize="none"):(c=document.createElement("input"),c.type=d);c.style.position="absolute";c.autocomplete="off";c.addEventListener("pointerdown",W);c.addEventListener("pointermove",W);c.addEventListener("pointerrawupdate",W);c.addEventListener("pointerup",W);c.addEventListener("mousedown",
W);c.addEventListener("mouseup",W);c.addEventListener("keydown",Ya);c.addEventListener("keyup",Ya);c.addEventListener("click",e=>{e.stopPropagation();u(this,"click",b)});c.addEventListener("dblclick",e=>{e.stopPropagation();u(this,"dblclick",b)});c.addEventListener("input",()=>q(this,"change",b,{text:c.value}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(c,a);return c}v(b,a){b.value=a.text;b.placeholder=a.placeholder;b.title=a.title;b.disabled=!a.isEnabled;b.readOnly=a.isReadOnly;
b.spellcheck=a.spellCheck;a=a.maxLength;0>a?b.removeAttribute("maxlength"):b.setAttribute("maxlength",a)}});"use strict";function X(b){b.stopPropagation()}function Y(b){const a=document.createElement("option");a.text=b;return a}function Za(b){const a=b.selectedIndex,c=[];for(let d=0,e=b.length;d<e;++d)b.options[d].selected&&c.push(d);return{selectedIndex:a,selectedIndices:c}}
self.F.M(class extends self.${constructor(b){super(b,"list");r(this,"set-selected-index",(a,c)=>{a.selectedIndex=c.selectedIndex});r(this,"add-item",(a,c)=>{const d=c.index;c=Y(c.text);0>d?a.add(c):a.add(c,d)});r(this,"remove-item",(a,c)=>{a.remove(c.index)});r(this,"set-item",(a,c)=>{a.options[c.index].text=c.text});r(this,"clear",a=>{a.innerHTML=""});r(this,"load-state",(a,c)=>{a.innerHTML="";for(const d of c.items)a.add(Y(d));a.selectedIndex=c.selectedIndex;for(const d of c.selectedIndices)if(c=
a.options[d])c.selected=!0})}N(b,a){const c=a.isDropdown,d=a.isMultiSelect,e=a.items,f=document.createElement("select");f.style.position="absolute";f.style.userSelect="none";f.style.webkitUserSelect="none";f.multiple=d;c||(f.size=2);for(const g of e)f.add(Y(g));f.addEventListener("pointerdown",X);f.addEventListener("pointermove",X);f.addEventListener("pointerrawupdate",X);f.addEventListener("pointerup",X);f.addEventListener("mousedown",X);f.addEventListener("mouseup",X);f.addEventListener("click",
g=>{g.stopPropagation();u(this,"click",b,Za(f))});f.addEventListener("dblclick",g=>{g.stopPropagation();u(this,"dblclick",b,Za(f))});f.addEventListener("change",()=>q(this,"change",b,Za(f)));a.id&&(f.id=a.id);a.className&&(f.className=a.className);this.v(f,a);return f}v(b,a){b.title=a.title;b.disabled=!a.isEnabled;b.multiple=!!a.isMultiSelect}});"use strict";function Z(b){b.stopPropagation()}
self.F.M(class extends self.${constructor(b){super(b,"sliderbar")}N(b,a){const c=document.createElement("input");c.type="range";c.style.position="absolute";c.style.userSelect="none";c.style.webkitUserSelect="none";c.addEventListener("pointerdown",Z);c.addEventListener("pointermove",Z);c.addEventListener("pointerrawupdate",Z);c.addEventListener("pointerup",Z);c.addEventListener("mousedown",Z);c.addEventListener("mouseup",Z);c.addEventListener("keydown",Z);c.addEventListener("keyup",Z);c.addEventListener("click",
()=>u(this,"click",b));c.addEventListener("change",()=>q(this,"change",b,{value:parseFloat(c.value)}));c.addEventListener("input",()=>q(this,"input",b,{value:parseFloat(c.value)}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(c,a);return c}v(b,a){b.max=a.max;b.min=a.min;b.step=a.step;b.value=a.value;b.disabled=!a.isEnabled;b.title=a.title}});
