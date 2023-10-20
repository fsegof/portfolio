(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[9873,1511],{4327:(e,t,r)=>{"use strict";r.r(t);var s=r(6293),n=r(3571),i=r(95122),o=r(48015),a=r(87514),c=r.n(a),l=r(78930),u=r(31600),h=r(71941),d=r(36713),p=r(48562),f=r(67527),m=r(26755),g=r(31511),w=r(71930);function v(e){switch(e){case"plugin":return h.Z;case"theme":return d.Z;case"wordpress":return p.Z;default:return}}function b({issue:e}){const t=(0,g.bv)("vulnerabilities",`/vulnerability/${e.id}`),r=["ithemes-security:mute-vulnerability","ithemes-security:unmute-vulnerability"];return e._links["ithemes-security:fix-vulnerability"]?r.push("ithemes-security:fix-vulnerability"):r.push("ithemes-security:deactivate-vulnerable-software"),(0,s.createElement)(l.SiteScanIssue,{key:e.id,issue:e,icon:v(e.component)},(0,s.createElement)(l.ScanIssueDetailContent,null,(0,s.createElement)(l.ScanIssueDetailColumn,null,(0,s.createElement)(w.xv,{as:"p",variant:w.rK.DARK,text:(0,i.sprintf)((0,i.__)("Vulnerable Version: %s","better-wp-security"),e.meta.details.affected_in)}),e.meta.details.fixed_in&&(0,s.createElement)(w.xv,{as:"p",variant:w.rK.DARK,text:(0,i.sprintf)((0,i.__)("Fixed Version: %s","better-wp-security"),e.meta.details.fixed_in)})),(0,s.createElement)(l.ScanIssueDetailColumn,null,(0,s.createElement)(w.xv,{text:(0,i.__)("Action Details:","better-wp-security"),weight:w.fs.HEAVY}),e.meta.details.fixed_in?(0,s.createElement)(l.ScanIssueText,null,(0,i.__)("The software needs to be updated to have the latest improvements released by the developer. ","better-wp-security"),(0,s.createInterpolateElement)((0,i.__)("View the <a>Vulnerability Details</a> for more info.","better-wp-security"),{a:(0,s.createElement)("a",{href:t})})):(0,s.createElement)(l.ScanIssueText,{text:(0,s.createElement)(React.Fragment,null,"plugin"===e.component&&(0,i.__)("If no update is available, you should deactivate the plugin.","better-wp-security"),"theme"===e.component&&(0,i.__)("If no update is available, you should switch themes.","better-wp-security"))}))),(0,s.createElement)(l.SiteScanIssueActions,{issue:e,allowedActions:r}))}function _({issue:e}){return(0,s.createElement)(l.SiteScanIssue,{key:e.id,issue:e,icon:f.Z},(0,s.createElement)(l.ScanIssueDetailContent,null,(0,s.createElement)(l.ScanIssueDetailColumn,null,(0,s.createElement)(w.zx,{variant:"link",href:e.meta.link,icon:m.Z,iconPosition:"right",text:(0,i.__)("Learn more")}))))}function E(){const{issues:e}=(0,o.useSelect)((e=>({issues:e(l.store).getIssuesForComponentGroup("site-scanner")})),[]);return(0,s.createElement)(React.Fragment,null,(0,s.createElement)(l.SiteScanIssuesFill,null,e.filter((e=>!e.muted)).map((e=>"blacklist"!==e.component?(0,s.createElement)(b,{key:e.id,issue:e}):(0,s.createElement)(_,{key:e.id,issue:e})))),(0,s.createElement)(l.SiteScanMutedIssuesFill,null,e.filter((e=>e.muted)).map((e=>"blacklist"!==e.component?(0,s.createElement)(b,{key:e.id,issue:e}):(0,s.createElement)(_,{key:e.id,issue:e})))))}function y(e){switch(!0){case e<3:return"low";case e<7:return"medium";case e<9:return"high";default:return"critical"}}function S(e){const t={id:e.id,severity:y(e.details?.score),meta:e,_links:e._links};return"google"===e.id?(t.component=e.entry,t.title=e.description):(t.component=e.software.type.slug,t.title=e.software.label||e.software.slug||(0,i.__)("WordPress","better-wp-security"),t.description=e.details.type.label,t.muted="muted"===e.resolution?.slug),t}r.p=window.itsecWebpackPublicPath,(0,i.setLocaleData)({"":{}},"ithemes-security-pro"),(0,o.dispatch)(l.store).registerScanComponent({slug:"plugin",priority:15,label:(0,i.__)("Plugins","better-wp-security"),description:(0,i.__)("Check for plugins with known vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,o.dispatch)(l.store).registerScanComponent({slug:"theme",priority:16,label:(0,i.__)("Themes","better-wp-security"),description:(0,i.__)("Check for themes with known vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,o.dispatch)(l.store).registerScanComponent({slug:"wordpress",priority:17,label:(0,i.__)("WordPress Core","better-wp-security"),description:(0,i.__)("Check for known WordPress Core vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,o.dispatch)(l.store).registerScanComponent({slug:"blacklist",priority:18,label:(0,i.__)("Google Safe Browsing","better-wp-security"),description:(0,i.__)("Check if your site is safe according to Google Safe Browsing","better-wp-security"),group:"site-scanner"}),(0,o.dispatch)(l.store).registerScanComponentGroup({slug:"site-scanner",components:["plugin","theme","wordpress","blacklist"],async execute(){const e=await(0,o.dispatch)(u.siteScannerStore).runScan(),t=(await async function(e){return c()({method:"GET",path:`/ithemes-security/v1/site-scanner/scans/${e}/issues?entry=blacklist`})}(e.id)).filter((e=>"clean"!==e.status));return(await(0,o.dispatch)(u.vulnerabilitiesStore).query("siteScanner",{resolution:["","muted"]})).concat(t).map(S)},transform:S}),(0,n.registerPlugin)("itsec-site-scanner-site-scan",{render:()=>(0,s.createElement)(E,null)})},31511:(e,t,r)=>{"use strict";r.d(t,{sE:()=>k,x4:()=>w,PN:()=>m,pL:()=>x,NC:()=>S,N4:()=>Z,g4:()=>A,bK:()=>j,Rg:()=>L,CO:()=>P,AW:()=>I,SU:()=>C,k0:()=>y,ZE:()=>E,UC:()=>M,xJ:()=>O,z8:()=>_,VG:()=>V,Y3:()=>N,bv:()=>b});var s=r(92819),n=r(65096),i=r.n(n),o=r(6293),a=r(73470),c=r(95122),l=r(4942),u=r(13092),h=r(86033);function d(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}var p=new WeakMap,f=new WeakMap;class m{constructor(e=void 0,t=void 0,r=void 0){d(this,p,{writable:!0,value:{}}),d(this,f,{writable:!0,value:{}}),(0,l.Z)(this,"add",((e,t,r)=>((0,h.Z)(this,p)[e]||((0,h.Z)(this,p)[e]=[]),(0,h.Z)(this,p)[e].push(t),r&&((0,h.Z)(this,f)[e]||((0,h.Z)(this,f)[e]=[]),(0,h.Z)(this,f)[e].push(r)),this))),(0,l.Z)(this,"hasErrors",(()=>this.getErrorCodes().length>0)),(0,l.Z)(this,"getErrorCodes",(()=>Object.keys((0,h.Z)(this,p)))),(0,l.Z)(this,"getErrorCode",(()=>this.getErrorCodes()[0])),(0,l.Z)(this,"getErrorMessages",((e=void 0)=>{if(e)return(0,h.Z)(this,p)[e];const t=[];for(const e in(0,h.Z)(this,p))(0,h.Z)(this,p).hasOwnProperty(e)&&t.concat((0,h.Z)(this,p)[e]);return t})),(0,l.Z)(this,"getErrorMessage",((e=void 0)=>(e=e||this.getErrorCode(),this.getErrorMessages(e)[0]))),(0,l.Z)(this,"getErrorData",((e=void 0)=>(e=e||this.getErrorCode(),(0,h.Z)(this,f)[e]))),(0,l.Z)(this,"getAllErrorMessages",(()=>{const e=[];for(const t in(0,h.Z)(this,p))(0,h.Z)(this,p).hasOwnProperty(t)&&e.push(...(0,h.Z)(this,p)[t]);return e})),e&&(t&&((0,h.Z)(this,p)[e]=[t]),r&&((0,h.Z)(this,f)[e]=r))}static fromPHPObject(e){const t=new m;return(0,u.Z)(t,p,e.errors),(0,u.Z)(t,f,e.error_data),t}static fromApiError(e){const t=new m;if((0,h.Z)(t,p)[e.code]=[e.message],(0,h.Z)(t,f)[e.code]=[e.data],e.additional_errors)for(const r of e.additional_errors)(0,h.Z)(t,p)[r.code]=[r.message],r.data&&((0,h.Z)(t,f)||(0,u.Z)(t,f,[]),(0,h.Z)(t,f)[r.code].push(r.data));return t}}class g extends Error{constructor(e,...t){super(e.message||(0,c.__)("An unknown error occurred.","better-wp-security"),...t),Error.captureStackTrace&&Error.captureStackTrace(this,g),this.__response=e;for(const t in e)e.hasOwnProperty(t)&&Object.defineProperty(this,t,{value:e[t],configurable:!0,enumerable:!0,writable:!0})}toString(){return this.__response.toString()}getResponse(){return this.__response}}class w{constructor(e,t,r,s=[],n=[],i=[]){(0,l.Z)(this,"type",void 0),(0,l.Z)(this,"error",void 0),(0,l.Z)(this,"data",void 0),(0,l.Z)(this,"success",void 0),(0,l.Z)(this,"info",void 0),(0,l.Z)(this,"warning",void 0),this.type=e,this.error=t,this.data=r,this.success=s,this.info=n,this.warning=i,Object.seal(this)}isSuccess(){return this.type===w.SUCCESS}static async fromResponse(e){const t=t=>{const r=e.headers?.get(`X-Messages-${t}`);return r?JSON.parse(r):[]},r=204!==e.status&&e.json?await e.json():null,s=S(r),n=s.hasErrors()?w.ERROR:w.SUCCESS,i=t("Success"),o=t("Info"),a=t("Warning");return new w(n,s,r,i,o,a)}}Object.defineProperty(w,"SUCCESS",{value:"success",writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(w,"ERROR",{value:"error",writable:!1,enumerable:!1,configurable:!1});const v=(0,o.createContext)({getUrl(e,t){e="settings"===e?"itsec":"itsec-"+e;const r=(0,a.removeQueryArgs)(document.location.href,...Object.keys((0,a.getQueryArgs)(document.location.href)));return(0,a.addQueryArgs)(r,t?{page:e,path:t}:{page:e})}});function b(e,t){const{getUrl:r}=(0,o.useContext)(v);return r(e,t)}function _(e){if(e<=999)return e.toString();if(e<=9999){const t=(e/1e3).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","k"):`${t}k`}if(e<=99999)return e.toString().substring(0,2)+"k";if(e<=999999)return e.toString().substring(0,3)+"k";if(e<=9999999){const t=(e/1e6).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","m"):`${t}m`}if(e<=99999999)return e.toString().substring(0,2)+"m";if(e<=999999999)return e.toString().substring(0,3)+"m";if(e<=9999999999){const t=(e/1e9).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","b"):`${t}b`}return e}function E(e){if(!(0,s.isPlainObject)(e))return!1;const t=Object.keys(e);return 2===t.length&&t.includes("errors")&&t.includes("error_data")}function y(e){if(!(0,s.isPlainObject)(e))return!1;const t=Object.keys(e);return(3===t.length||4===t.length)&&!(4===t.length&&!t.includes("additional_errors"))&&t.includes("code")&&t.includes("message")&&t.includes("data")}function S(e){return e instanceof m?e:E(e)?m.fromPHPObject(e):y(e)?m.fromApiError(e):new m}function Z(e){const t={};for(const[r,s]of e)t[r]=s;return t}function x(e,t){const r=[[],[]];for(const s of e)r[t(s)?0:1].push(s);return r}function O(e){if(e instanceof Error)throw e;throw new g(e)}const k="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&f=y&r=g";function C(e,t,r=!0){return(0,s.get)(e,["_links","self",0,"targetHints",t],r?void 0:[])}function I(e){return L(e,"self")}function L(e,t){return(0,s.get)(e,["_links",t,0,"href"])}function P(e,t){if(e&&e.links)for(const r of e.links)if(r.rel===t)return r}function M(e,t){if("object"!==e.type)return e;let r;for(const n in t)t.hasOwnProperty(n)&&"hidden"===t[n]["ui:widget"]&&(r||(r=(0,s.cloneDeep)(e)),delete r.properties[n]);return r||e}function N(e){let t=[];if(!e)return t;const r=e instanceof m?e:S((0,s.pick)(e,["code","message","data"]));return"rest_invalid_param"===r.getErrorCode()&&(t=Object.values(r.getErrorData().params)),[...r.getAllErrorMessages(),...t]}function V(e){const t=new Date;if(e>t)return(0,c.__)("Online Recently","better-wp-security");const r=Math.floor((t-e)/1e3);let s=r/31536e3;return s>1?(0,c.sprintf)((0,c.__)("%s years","better-wp-security"),Math.floor(s)):(s=r/2592e3,s>1?(0,c.sprintf)((0,c.__)("%s months","better-wp-security"),Math.floor(s)):(s=r/86400,s>1?(0,c.sprintf)((0,c.__)("%s days","better-wp-security"),Math.floor(s)):(s=r/3600,s>1?(0,c.sprintf)((0,c.__)("%s hours","better-wp-security"),Math.floor(s)):(s=r/60,s>1?(0,c.sprintf)((0,c.__)("%s minutes","better-wp-security"),Math.floor(s)):(0,c.sprintf)((0,c.__)("%s seconds","better-wp-security"),Math.floor(s))))))}function A(){return A.instance||(A.instance=new(i())({schemaId:"id"}),A.instance.addMetaSchema(r(27171)),A.instance.addFormat("html",{type:"string",validate:()=>!0}),A.instance.addFormat("relative-file-path",{type:"string",validate:e=>!e.includes("../")}),A.instance.addFormat("file-path",{type:"string",validate:e=>!!e.startsWith("/")&&!e.includes("../")}),A.instance.addFormat("directory",{type:"string",validate:e=>!!e.startsWith("/")&&!e.includes("../")})),A.instance}function j(e){const t=e.toUpperCase().split("").map((e=>127397+e.charCodeAt()));return String.fromCodePoint(...t)}},36713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(6293),n=r(14776);const i=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.Path,{d:"M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"}))},26755:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(6293),n=r(14776);const i=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},71941:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(6293),n=r(14776);const i=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},67527:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(6293),n=r(14776);const i=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.Path,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"}))},48562:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(6293),n=r(14776);const i=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(n.Path,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},78930:e=>{e.exports=function(){return this.itsec.pages["site-scan"]}()},87514:e=>{e.exports=function(){return this.wp.apiFetch}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},6293:e=>{e.exports=function(){return this.wp.element}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},3571:e=>{e.exports=function(){return this.wp.plugins}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React},92819:e=>{"use strict";e.exports=window.lodash}},e=>{e.O(0,[1930,5307],(()=>(4327,e(e.s=4327))));var t=e.O();((window.itsec=window.itsec||{})["site-scanner"]=window.itsec["site-scanner"]||{})["site-scan"]=t}]);