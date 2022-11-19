import{d as k,c,g as v,i as f,a as H,r as S,t as x,b as D,e as M,f as _,u as j}from"./chunks/web.ae797043.js";import{u as A,E as V}from"./chunks/Editor.9a885306.js";import"./chunks/monaco.323a397d.js";/* empty css                        */const P=x('<ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 " id="tabs-tab" role="tablist"></ul>'),U=x('<li class="nav-item" role="presentation"><span id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true"></span></li>');function q({list:t=[],onChange:d,activeFile:u}){const[l,p]=c(u),b=a=>{a.id!==l().id&&(p(a),d&&d(a))};return(()=>{const a=v(P);return f(a,()=>t.map(i=>{const g=i.id===l().id;return(()=>{const r=v(U),s=r.firstChild;return r.$$click=()=>b(i),H(s,`
              nav-link
              block
              cursor-pointer
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              hover:text-[#2563eb] hover:border-[#2563eb]
              focus:border-transparent
              active
              ${g?"text-[#2563eb] border-[#2563eb]":""}
            `),f(s,()=>i.fileName),S(),r})()})),a})()}k(["click"]);const z=x('<div class="w-full h-[100vh] flex flex-col"><!#><!/><div class="flex flex-1"><div class="overflow-hidden flex-1 flex flex-row"></div><div class="h-full w-1 bg-slate-500"></div><div class="flex-1 h-full bg-white"><iframe class="h-full w-full"></iframe></div></div></div>'),G={1:"// write your javascript code",2:`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      </style>
  </head>
  
  <body>
      <h1>Hello world!</h1>
  </body>
  </html>`,3:`* {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}
`},I=[{id:"1",fileName:"js",type:"javascript"},{id:"2",fileName:"html",type:"html"},{id:"3",fileName:"css",type:"css"}];function B(){const[t,d]=A("fileContent",G),[u]=c(I),[l,p]=c(u()[0]),b=t()[l().id],[a,i]=c(l().type),[g,r]=c(b),s=()=>t()[l().id],w=e=>{p(e),i(e.type),r(s()),console.log(e.type,s())};let h;const E=e=>{const n={...t(),[l().id]:e};d(n)};function F(){const e=h.contentDocument;e.documentElement.innerHTML=t()[2];const n=e.head;let o=document.createElement("style");n.appendChild(o),o.textContent=t()[3];let m=document.createElement("script");n.appendChild(m),m.textContent=t()[1]}return D(()=>{F()}),(()=>{const e=v(z),n=e.firstChild,[o,m]=M(n.nextSibling),T=o.nextSibling,$=T.firstChild,L=$.nextSibling,N=L.nextSibling,y=N.firstChild;f(e,_(q,{get list(){return u()},get activeFile(){return l()},onChange:w}),o,m),f($,_(V,{onChange:E,get language(){return a()},get value(){return g()}}));const C=h;return typeof C=="function"?j(C,y):h=y,e})()}export{B as default};
