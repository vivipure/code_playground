const u={};function O(e){u.context=e}function te(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const ne=(e,t)=>e===t,se=Symbol("solid-proxy"),m={equals:ne};let Y=X;const y=1,C=2,G={owned:null,cleanups:null,context:null,owner:null};var c=null;let b=null,f=null,a=null,g=null,k=0;function ie(e,t){const n=f,s=c,i=e.length===0,o=i?G:{owned:null,cleanups:null,context:null,owner:t||s},l=i?e:()=>e(()=>w(()=>U(o)));c=o,f=null;try{return S(l,!0)}finally{f=n,c=s}}function we(e,t){t=t?Object.assign({},m,t):m;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),W(n,i));return[K.bind(n),s]}function $(e,t,n){const s=q(e,t,!1,y);v(s)}function re(e,t,n){Y=fe;const s=q(e,t,!1,y),i=_&&j(c,_.id);i&&(s.suspense=i),s.user=!0,g?g.push(s):v(s)}function M(e,t,n){n=n?Object.assign({},m,n):m;const s=q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,v(s),K.bind(s)}function w(e){let t,n=f;return f=null,t=e(),f=n,t}function Ae(e){re(()=>w(e))}function ve(e){return c===null||(c.cleanups===null?c.cleanups=[e]:c.cleanups.push(e)),e}function Se(e){const t=Symbol("context");return{id:t,Provider:ae(t),defaultValue:e}}function Ee(e){let t;return(t=j(c,e.id))!==void 0?t:e.defaultValue}function oe(e){const t=M(e),n=M(()=>B(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let _;function K(){const e=b;if(this.sources&&(this.state||e))if(this.state===y||e)v(this);else{const t=a;a=null,S(()=>N(this),!1),a=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function W(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=b&&b.running;l&&b.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?a.push(o):g.push(o),o.observers&&Q(o)),l||(o.state=y)}if(a.length>1e6)throw a=[],new Error},!1)),t}function v(e){if(!e.fn)return;U(e);const t=c,n=f,s=k;f=c=e,le(e,e.value,s),f=n,c=t}function le(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=y),J(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=n)}function q(e,t,n,s=y,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:null,pure:n};return c===null||c!==G&&(c.owned?c.owned.push(o):c.owned=[o]),o}function T(e){const t=b;if(e.state===0||t)return;if(e.state===C||t)return N(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<k);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===y||t)v(e);else if(e.state===C||t){const i=a;a=null,S(()=>N(e,n[0]),!1),a=i}}function S(e,t){if(a)return e();let n=!1;t||(a=[]),g?n=!0:g=[],k++;try{const s=e();return ue(n),s}catch(s){a||(g=null),J(s)}}function ue(e){if(a&&(X(a),a=null),e)return;const t=g;g=null,t.length&&S(()=>Y(t),!1)}function X(e){for(let t=0;t<e.length;t++)T(e[t])}function fe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:T(s)}for(u.context&&O(),t=0;t<n;t++)T(e[t])}function N(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===y||n?i!==t&&T(i):(i.state===C||n)&&N(i,t))}}function Q(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=C,s.pure?a.push(s):g.push(s),s.observers&&Q(s))}}function U(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)U(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function J(e){throw e=ce(e),e}function j(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:j(e.owner,t):void 0}function B(e){if(typeof e=="function"&&!e.length)return B(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=B(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function ae(e){return function(n){let s;return $(()=>s=w(()=>(c.context={[e]:n.value},oe(()=>n.children)))),s}}let Z=!1;function he(){Z=!0}function me(e,t){if(Z&&u.context){const n=u.context;O(te());const s=w(()=>e(t||{}));return O(n),s}return w(()=>e(t||{}))}function E(){return!0}const de={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return e.has(t)},set:E,deleteProperty:E,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:E,deleteProperty:E}},ownKeys(e){return e.keys()}};function L(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Ce(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=L(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in L(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(L(e[n])));return[...new Set(t)]}},de)}function $e(e,t){return M(e,void 0,t?void 0:{equals:t})}function pe(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,h=t[i-1].nextSibling,d=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const p=o<s?r?n[r-1].nextSibling:n[o-r]:h;for(;r<o;)e.insertBefore(n[r++],p)}else if(o===r)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],p),t[i]=n[o]}else{if(!d){d=new Map;let x=r;for(;x<o;)d.set(n[x],x++)}const p=d.get(t[l]);if(p!=null)if(r<p&&p<o){let x=l,H=1,F;for(;++x<i&&x<o&&!((F=d.get(t[x]))==null||F!==p+H);)H++;if(H>p-r){const ee=t[l];for(;r<p;)e.insertBefore(n[r++],ee)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const I="_$DX_DELEGATE";function ge(e,t,n){let s;return ie(i=>{s=i,t===document?e():ye(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function Te(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ne(e,t=window.document){const n=t[I]||(t[I]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,z))}}function Pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function He(e,t){t==null?e.removeAttribute("class"):e.className=t}function Le(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=o=>i.call(e,n[1],o))}else e.addEventListener(t,n)}function Oe(e,t){!u.context&&(e.innerHTML=t)}function Me(e,t,n){return w(()=>e(t,n))}function ye(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return P(e,t,s,n);$(i=>P(e,t(),i,n),s)}function xe(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=globalThis._$HY.load,u.gather=i=>V(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},V(t,n.renderId);const s=ge(e,t,[...t.childNodes]);return u.context=null,s}function Be(e){let t,n;return!u.context||!(t=u.registry.get(n=be()))?e.cloneNode(!0):(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function De(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function ke(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;z(s),t.shift()}}),u.events.queued=!0)}function z(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function P(e,t,n,s,i){for(u.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(u.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=A(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(u.context)return n;n=A(e,n,s)}else{if(o==="function")return $(()=>{let r=t();for(;typeof r=="function";)r=r();n=P(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],h=n&&Array.isArray(n);if(D(r,t,n,i))return $(()=>n=P(e,r,n,s,!0)),()=>n;if(u.context){if(!r.length)return n;for(let d=0;d<r.length;d++)if(r[d].parentNode)return n=r}if(r.length===0){if(n=A(e,n,s),l)return n}else h?n.length===0?R(e,r,s):pe(e,n,r):(n&&A(e),R(e,r));n=r}else if(t instanceof Node){if(u.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=A(e,n,s,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function D(e,t,n,s){let i=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],h=n&&n[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=D(e,r,h)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=D(e,Array.isArray(r)?r:[r],Array.isArray(h)?h:[h])||i}else e.push(r),i=!0;else{const d=String(r);h&&h.nodeType===3&&h.data===d?e.push(h):e.push(document.createTextNode(d))}}return i}function R(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function A(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const h=r.parentNode===e;!o&&!l?h?e.replaceChild(i,r):e.insertBefore(i,n):h&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function V(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],o=i.getAttribute("data-hk");(!t||o.startsWith(t))&&!u.registry.has(o)&&u.registry.set(o,i)}}function be(){const e=u.context;return`${e.id}${e.count++}`}const qe=(...e)=>(he(),xe(...e));export{He as a,re as b,we as c,Ne as d,De as e,me as f,Be as g,$ as h,ye as i,Oe as j,Le as k,ve as l,Ce as m,$e as n,Ae as o,Se as p,Ee as q,ke as r,Pe as s,Te as t,Me as u,u as v,ge as w,qe as x};
