var ee=Object.defineProperty;var te=(e,t,o)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var N=(e,t,o)=>(te(e,typeof t!="symbol"?t+"":t,o),o);import{u as ne,o as E,c as D,a as oe,b as re,d as F,N as se,e as j,f as U,g as q,r as f,h as ae,w as O,i as m,j as ie,k as ce,l as B,m as w,n as ue,p as le,q as de,s as pe,t as fe,v as me,x as he,y as _e,z as ge,A as ve,B as Ce,C as Te,D as Ne,E as Ee,F as Oe,G as Se,H as Ae,I as Ie,J as Re,K as De,L as we,M as Me,O as Pe,P as $e,Q as xe,R as ye,S as be,T as ke,U as Le,V as Fe,W as je,X as Ue,Y as qe,Z as Be,_ as He,$ as Ve,a0 as Ge,a1 as Ke,a2 as Ye,a3 as Je,a4 as We,a5 as Xe,a6 as ze,a7 as Qe,a8 as Ze,a9 as H,aa as V,ab as et,ac as tt}from"./vendor.5e65b579.js";const nt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};nt();var M=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const ot={name:"MessageContent",setup(){window.$message=ne()}};function rt(e,t,o,n,r,s){return E(),D("div")}var st=M(ot,[["render",rt]]);const at={name:"DialogContent",setup(){const e=window;e.$dialog=oe()}};function it(e,t,o,n,r,s){return E(),D("div")}var ct=M(at,[["render",it]]);const ut={name:"LoadingContent",setup(){const e=window;e.$loading=re()}};function lt(e,t,o,n,r,s){return E(),D("div")}var dt=M(ut,[["render",lt]]);const pt=F({name:"Application",components:{LoadingContent:dt,NDialogProvider:se,NNotificationProvider:j,NMessageProvider:U,NLoadingBarProvider:q,MessageContent:st,DialogContent:ct},setup(){return{}}});function ft(e,t,o,n,r,s){const a=f("LoadingContent"),i=f("DialogContent"),c=f("MessageContent"),d=f("n-message-provider"),v=f("n-notification-provider"),g=f("n-dialog-provider"),u=f("n-loading-bar-provider");return E(),ae(u,null,{default:O(()=>[m(a),m(g,null,{default:O(()=>[m(i),m(v,null,{default:O(()=>[m(d,null,{default:O(()=>[m(c),ie(e.$slots,"default",{slot:"default"})]),_:3})]),_:3})]),_:3})]),_:3})}var G=M(pt,[["render",ft]]);const mt={id:"app"},ht=F({setup(e){return(t,o)=>{const n=f("router-view");return E(),D("div",mt,[m(G,null,{default:O(()=>[m(n)]),_:1})])}}}),_t="modulepreload",K={},gt="/",l=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${gt}${n}`,n in K)return;K[n]=!0;const r=n.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":_t,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",c)})})).then(()=>t())},Y=60*60*24*7,vt=({prefixKey:e="",storage:t=localStorage}={})=>{const o=class{constructor(){N(this,"storage",t);N(this,"prefixKey",e)}getKey(n){return`${this.prefixKey}${n}`.toUpperCase()}set(n,r,s=Y){const a=JSON.stringify({value:r,expire:s!==null?new Date().getTime()+s*1e3:null});this.storage.setItem(this.getKey(n),a)}get(n,r=null){const s=this.storage.getItem(this.getKey(n));if(s)try{const a=JSON.parse(s),{value:i,expire:c}=a;if(c===null||c>=Date.now())return i;this.remove(this.getKey(n))}catch{return r}return r}remove(n){this.storage.removeItem(this.getKey(n))}clear(){this.storage.clear()}setCookie(n,r,s=Y){document.cookie=`${this.getKey(n)}=${r}; Max-Age=${s}`}getCookie(n){const r=document.cookie.split("; ");for(let s=0,a=r.length;s<a;s++){const i=r[s].split("=");if(i[0]===this.getKey(n))return i[1]}return""}removeCookie(n){this.setCookie(n,1,-1)}clearCookie(){const n=document.cookie.match(/[^ =;]+(?==)/g);if(n)for(let r=n.length;r--;)document.cookie=n[r]+"=0;expire="+new Date(0).toUTCString()}};return new o},J=ce();function Ct(e){e.use(J)}const W="Device",qt="announcement-close",Tt=Object.prototype.toString;function x(e,t){return Tt.call(e)===`[object ${t}]`}function h(e){return x(e,"Function")}const Nt=e=>e!==null&&x(e,"Object");function S(e){return x(e,"String")}let _=new Map;const X=e=>[e.method,e.url,B.stringify(e.data),B.stringify(e.params)].join("&");class Et{addPending(t){this.removePending(t);const o=X(t);t.cancelToken=t.cancelToken||new w.CancelToken(n=>{_.has(o)||_.set(o,n)})}removeAllPending(){_.forEach(t=>{t&&h(t)&&t()}),_.clear()}removePending(t){const o=X(t);if(_.has(o)){const n=_.get(o);n&&n(o),_.delete(o)}}reset(){_=new Map}}class Ot{constructor(t){N(this,"axiosInstance");N(this,"options");this.options=t,this.axiosInstance=w.create(t),this.setupInterceptors()}createAxios(t){this.axiosInstance=w.create(t)}getTransform(){const{transform:t}=this.options;return t}getAxios(){return this.axiosInstance}configAxios(t){!this.axiosInstance||this.createAxios(t)}setHeader(t){!this.axiosInstance||Object.assign(this.axiosInstance.defaults.headers,t)}setupInterceptors(){const t=this.getTransform();if(!t)return;const{requestInterceptors:o,requestInterceptorsCatch:n,responseInterceptors:r,responseInterceptorsCatch:s}=t,a=new Et;this.axiosInstance.interceptors.request.use(i=>{const{headers:{ignoreCancelToken:c}={ignoreCancelToken:!1}}=i;return!c&&a.addPending(i),o&&h(o)&&(i=o(i)),i},void 0),n&&h(n)&&this.axiosInstance.interceptors.request.use(void 0,n),this.axiosInstance.interceptors.response.use(i=>(i&&a.removePending(i.config),r&&h(r)&&(i=r(i)),i),void 0),s&&h(s)&&this.axiosInstance.interceptors.response.use(void 0,s)}request(t,o){let n=ue(t);const r=this.getTransform(),{requestOptions:s}=this.options,a=Object.assign({},s,o),{beforeRequestHook:i,requestCatch:c,transformRequestData:d}=r||{};return i&&h(i)&&(n=i(n,a)),new Promise((v,g)=>{this.axiosInstance.request(n).then(u=>{const p=w.isCancel(u);if(d&&h(d)&&!p){const C=d(u,a);return v(C)}}).catch(u=>{if(c&&h(c)){g(c(u));return}g(u)})})}}const St="YYYY-MM-DD HH:mm";function z(e,t=!1){if(!e)return t?"":{};const o=new Date().getTime();return t?`?_t=${o}`:{_t:o}}function Q(e){if(Object.prototype.toString.call(e)==="[object Object]")for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(St)),S(t)){const o=e[t];if(o)try{e[t]=S(o)?o.trim():o}catch(n){console.log(n)}}Nt(e[t])&&Q(e[t])}}var A;(function(e){e[e.SUCCESS=1]="SUCCESS",e[e.ERROR=0]="ERROR",e[e.TIMEOUT=10042]="TIMEOUT",e.TYPE="success",e[e.NOT_ACCESS=10003]="NOT_ACCESS"})(A||(A={}));var y;(function(e){e.GET="GET",e.POST="POST",e.PATCH="PATCH",e.PUT="PUT",e.DELETE="DELETE"})(y||(y={}));var b;(function(e){e.JSON="application/json;charset=UTF-8",e.TEXT="text/plain;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8"})(b||(b={}));function At(e,t){let o="",n="";for(const r in t)o+=r+"="+encodeURIComponent(t[r])+"&";return o=o.replace(/&$/,""),/\?$/.test(e)?n=e+o:n=e.replace(/\/?$/,"?")+o,n}const It={transformRequestData:(e,t)=>{const{$message:o,$dialog:n,$notification:r}=window,{isShowMessage:s=!0,isShowErrorMessage:a,isShowSuccessMessage:i,successMessageText:c,errorMessageText:d,isTransformResponse:v,isReturnNativeResponse:g}=t;if(g)return e;if(!v)return e.data;const u=Promise.reject,{data:p}=e;if(!p)return o.warning("Connection error"),u(p);const{code:C,data:L,message:T}=p,R=L&&Reflect.has(L,"code")&&C===A.SUCCESS;return s&&(R&&(c||i)?o.success(c||T||"\u64CD\u4F5C\u6210\u529F\uFF01"):!R&&(d||a)?o.error(T||d||"\u64CD\u4F5C\u5931\u8D25\uFF01"):!R&&t.errorMessageMode==="modal"&&n.info({title:"Tips",content:T,positiveText:"Confirm",onPositiveClick:()=>{}})),C===A.SUCCESS?p:C===A.ERROR?(T&&o.error(p.message),u()):R?p:u(new Error(T))},beforeRequestHook:(e,t)=>{var i;const{apiUrl:o,joinParamsToUrl:n,formatDate:r,joinTime:s=!0}=t;o&&S(o)&&(e.url=`${o}${e.url}`);const a=e.params||{};return((i=e.method)==null?void 0:i.toUpperCase())===y.GET?S(a)?(e.url=e.url+a+`${z(s,!0)}`,e.params=void 0):e.params=Object.assign(a||{},z(s,!1)):S(a)?(e.url=e.url+a,e.params=void 0):(r&&Q(a),e.data=a,e.params=void 0,n&&(e.url=At(e.url,e.data))),e},requestInterceptors:e=>e,responseInterceptorsCatch:e=>{const{$message:t,$dialog:o}=window,{code:n,message:r}=e||{},s=e.toString();try{if(n==="ECONNABORTED"&&r.indexOf("timeout")!==-1){t.error("Request timeout, please refresh page and try again!");return}if(s&&s.includes("Network Error")){o.info({title:"Network Error",content:"Please check your network!",positiveText:"Confirm",onPositiveClick:()=>{}});return}}catch(a){console.log(a)}return e}},P=new Ot({timeout:10*1e3,withCredentials:!0,headers:{"Content-Type":b.JSON},transform:It,requestOptions:{joinPrefix:!0,isReturnNativeResponse:!1,isTransformResponse:!0,joinParamsToUrl:!1,formatDate:!0,errorMessageMode:"none",apiUrl:"/molin-user"}}),$="/common";function Bt(){return P.request({url:$+"/dashboard-info",method:"get"})}function Ht(e){return P.request({url:$+"/censor/str",method:"post",params:e})}function Vt(e){return P.request({url:$+"/feedback",method:"post",params:e})}function Rt(){return P.request({url:$+"/sys/cnf",method:"get"})}const Z=vt({storage:localStorage}),Dt=le({id:"app-system",state:()=>({device:Z.getCookie(W)||"PC",originalRoute:"Dashboard",announcement:"",terminalStatus:"NORMAL",openContactMe:0,openUserModule:0}),getters:{getDevice(){return this.device},getOpenContactMe(){return this.openContactMe},getAnnouncement(){return this.announcement},getOriginalRoute(){return this.originalRoute},getTerminalStatus(){return this.terminalStatus}},actions:{setAnnouncement(e){this.announcement=e},setDevice(e){Z.setCookie(W,e),this.device=e},setOriginalRoute(e){this.originalRoute=e},fetchSystemInfo(){return new Promise((e,t)=>{Rt().then(o=>{const n=o.data;if(n){const{announcement:r,contactMe:s,terminalStatus:a,userFunc:i}=n;this.announcement=r,this.terminalStatus=a,this.openContactMe=s,this.openUserModule=i}e(n)}).catch(()=>{t(null)})})}}});function wt(){return Dt(J)}var I;(function(e){e.BASE_LOGIN="/login",e.BASE_LOGIN_NAME="Login",e.REDIRECT="/redirect",e.REDIRECT_NAME="Redirect",e.BASE_HOME="/dashboard",e.BASE_HOME_REDIRECT="/dashboard/console",e.ERROR_OFFLINE="/offline"})(I||(I={}));const Mt=I.BASE_LOGIN,Pt=[Mt,I.ERROR_OFFLINE];function $t(e){const o=window.$loading||null;o&&o.start();const n=wt();e.beforeEach(async(r,s,a)=>{await n.fetchSystemInfo();const i=n.getTerminalStatus;if(Pt.includes(r.path)){if(r.name==="Offline"&&i&&i==="NORMAL"){a("/");return}a();return}if(!i||i!=="NORMAL"){a(I.ERROR_OFFLINE);return}else a();o&&o.finish()}),e.afterEach((r,s,a)=>{o&&o.finish()}),e.onError(r=>{console.log(r,"\u8DEF\u7531\u9519\u8BEF")})}const xt=[{path:"/",component:()=>l(()=>import("./Home.979bcfcc.js"),["assets/Home.979bcfcc.js","assets/Home.8b44c65a.css","assets/moment.08a7f518.js","assets/vendor.5e65b579.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css"]),redirect:"dashboard",children:[{path:"dashboard",name:"Dashboard",component:()=>l(()=>import("./index.c36d1cab.js"),["assets/index.c36d1cab.js","assets/index.1ebe420b.css","assets/vendor.5e65b579.js","assets/index.2825c935.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css","assets/articleAPI.0ec147dd.js"]),meta:{keepAlive:!0,title:"Home",icon:"home"}},{path:"timeline",name:"TimeLine",component:()=>l(()=>import("./index.26300b9f.js"),["assets/index.26300b9f.js","assets/index.2ea2db23.css","assets/index.14b38748.js","assets/index.2825c935.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css","assets/vendor.5e65b579.js","assets/moment.08a7f518.js"]),meta:{keepAlive:!0,title:"TimeLine",icon:"fund"}},{path:"article/detail",name:"ArticleDetail",meta:{hidden:!0},component:()=>l(()=>import("./ArticleDetail.5649fca3.js"),["assets/ArticleDetail.5649fca3.js","assets/ArticleDetail.2ae106b2.css","assets/constants.b3ae2bd9.js","assets/vendor.5e65b579.js","assets/articleAPI.0ec147dd.js","assets/index.14b38748.js","assets/index.2825c935.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css","assets/moment.08a7f518.js"])},{path:"contact",name:"Contact",component:()=>l(()=>import("./index.4905a54f.js"),["assets/index.4905a54f.js","assets/index.99f5e413.css","assets/upgrade.ee3b1ad9.js","assets/index.14b38748.js","assets/index.2825c935.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css","assets/vendor.5e65b579.js","assets/constants.b3ae2bd9.js"]),meta:{keepAlive:!0,title:"Contact Me",icon:"contacts"}},{path:"about",name:"About",component:()=>l(()=>import("./index.a2063a89.js"),["assets/index.a2063a89.js","assets/index.14b38748.js","assets/index.2825c935.js","assets/AsideMenu.984331a5.js","assets/AsideMenu.2a95fa6b.css","assets/vendor.5e65b579.js"]),meta:{keepAlive:!0,title:"About",icon:"read"}},{path:"others",name:"Others",component:()=>l(()=>import("./AsideMention.9e11a65c.js"),["assets/AsideMention.9e11a65c.js","assets/AsideMention.e8f394bb.css","assets/vendor.5e65b579.js"]),meta:{keepAlive:!0,title:"Others",hidden:!0,icon:"appstore"}}]},{path:"/offline",name:"Offline",component:()=>l(()=>import("./OfflineError.6f8e3a84.js"),["assets/OfflineError.6f8e3a84.js","assets/OfflineError.3d2fdf5e.css","assets/upgrade.ee3b1ad9.js","assets/vendor.5e65b579.js"]),meta:{keepAlive:!0,title:"Offline",hidden:!0}},{path:"/:catchCall(.*)",name:"404",meta:{hidden:!0},component:()=>l(()=>import("./index.1c6ba2fe.js"),["assets/index.1c6ba2fe.js","assets/vendor.5e65b579.js"])}],k=de({history:pe(),routes:xt,scrollBehavior:()=>({left:0,top:0})});function yt(e){e.use(k),$t(k)}const bt=fe({components:[me,he,_e,ge,ve,Ce,Te,Ne,Ee,Oe,Se,Ae,Ie,Re,De,we,Me,j,q,Pe,$e,xe,ye,be,ke,Le,Fe,je,Ue,qe,Be,He,Ve,Ge,Ke,Ye,Je,U,We,Xe,ze,Qe,Ze]}),kt=e=>{if(e)return e.replace(/<[^>]+>/g,"")},Lt=e=>{e.config.globalProperties.$filters={filterHtml:kt}};async function Ft(){H(G).mount("#appProvider",!0),V.use(et,{Prism:tt});const t=H(ht);t.use(V),Lt(t),t.use(bt),Ct(t),await yt(t),await k.isReady(),t.mount("#app")}Ft();export{qt as A,M as _,P as a,Ht as b,vt as c,Bt as g,Vt as s,Dt as u};