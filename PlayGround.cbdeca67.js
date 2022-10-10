import{d as H,a as r,g as p,i as f,f as N,h as j,r as k,t as v,j as S,c as y,u as D}from"./chunks/web.678fa43f.js";import{u as M,E as V}from"./chunks/Editor.34503d3c.js";import"./chunks/monaco.ebf98771.js";/* empty css                       */const A=v('<ul class="flex  bg-black"></ul>'),P=v("<li></li>");function R({list:t=[],onChange:o,activeFile:c}){const[l,m]=r(c),g=n=>{n.id!==l().id&&(m(n),o&&o(n))};return(()=>{const n=p(A);return f(n,()=>t.map(s=>(()=>{const a=p(P);return a.$$click=()=>g(s),f(a,()=>s.fileName),N(()=>j(a,`border-solid font-serif  min-w-[4em] text-center  border-transparent  border-b-4 cursor-pointer  ${s.id===l().id?"border-green-400 text-green-400 ":"text-white hover:border-green-400  hover:text-green-400"}`)),k(),a})())),n})()}H(["click"]);const U=v('<div class="w-full h-[100vh] flex flex-col"><div class="flex bg-black"><div class="flex-1 "></div><div class="flex-1 justify-end flex"><a class="text-white" href="/">\u56DE\u5230\u9996\u9875</a></div></div><div class="flex flex-1"><div class="flex-1 flex flex-row"></div><div class="h-full w-1 bg-slate-500"></div><div class="flex-1 h-full"><iframe class="h-full w-full"></iframe></div></div></div>'),q={1:"// write your javascript code",2:`<!DOCTYPE html>
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
`},z=[{id:"1",fileName:"js",type:"javascript"},{id:"2",fileName:"html",type:"html"},{id:"3",fileName:"css",type:"css"}];function Y(){const[t,o]=M("fileContent",q),[c]=r(z),[l,m]=r(c()[0]),g=t()[l().id],[n,s]=r(l().type),[a,_]=r(g),x=()=>t()[l().id],w=e=>{m(e),s(e.type),_(x()),console.log(e.type,x())};let h;const E=e=>{const i={...t(),[l().id]:e};o(i)};function F(){const e=h.contentDocument;e.documentElement.innerHTML=t()[2];const i=e.head;let d=document.createElement("style");i.appendChild(d),d.textContent=t()[3];let u=document.createElement("script");i.appendChild(u),u.textContent=t()[1]}return S(()=>{F()}),(()=>{const e=p(U),i=e.firstChild,d=i.firstChild,u=i.nextSibling,b=u.firstChild,T=b.nextSibling,L=T.nextSibling,C=L.firstChild;f(d,y(R,{get list(){return c()},get activeFile(){return l()},onChange:w})),f(b,y(V,{onChange:E,get language(){return n()},get value(){return a()}}));const $=h;return typeof $=="function"?D($,C):h=C,e})()}export{Y as default};
