import{s as j}from"../chunks/scheduler.5cba145a.js";import{S as k,i as O,g as _,s as w,r as A,G as q,h,f as r,c as E,u as M,k as o,y as g,a as P,v as S,d as v,t as b,w as C}from"../chunks/index.1b9f201c.js";import{c as z}from"../chunks/c.f156c77b.js";import{P as B}from"../chunks/PostCard.9408f6da.js";import{P as G}from"../chunks/PageSummaryCard.f780ba04.js";async function I({fetch:n}){return{posts:await(await n("api/posts")).json()}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"}));function D(n){let s,m,p,c,u,a,l,i,$,d,T,f,y;return document.title=s=n[2],d=new G({props:{title:n[0],description:n[1]}}),f=new B({props:{posts:n[3]}}),{c(){m=_("meta"),p=_("meta"),c=_("meta"),u=_("meta"),a=_("meta"),l=_("meta"),i=_("meta"),$=w(),A(d.$$.fragment),T=w(),A(f.$$.fragment),this.h()},l(t){const e=q("svelte-lhpand",document.head);m=h(e,"META",{name:!0,content:!0}),p=h(e,"META",{property:!0,content:!0}),c=h(e,"META",{property:!0,content:!0}),u=h(e,"META",{property:!0,content:!0}),a=h(e,"META",{property:!0,content:!0}),l=h(e,"META",{name:!0,content:!0}),i=h(e,"META",{name:!0,content:!0}),e.forEach(r),$=E(t),M(d.$$.fragment,t),T=E(t),M(f.$$.fragment,t),this.h()},h(){o(m,"name","description"),o(m,"content",n[1]),o(p,"property","og:title"),o(p,"content",n[2]),o(c,"property","og:description"),o(c,"content",n[1]),o(u,"property","og:url"),o(u,"content","https://kspotlight.fr/"),o(a,"property","og:type"),o(a,"content","website"),o(l,"name","twitter:title"),o(l,"content",n[2]),o(i,"name","twitter:description"),o(i,"content",n[1])},m(t,e){g(document.head,m),g(document.head,p),g(document.head,c),g(document.head,u),g(document.head,a),g(document.head,l),g(document.head,i),P(t,$,e),S(d,t,e),P(t,T,e),S(f,t,e),y=!0},p(t,[e]){(!y||e&4)&&s!==(s=t[2])&&(document.title=s)},i(t){y||(v(d.$$.fragment,t),v(f.$$.fragment,t),y=!0)},o(t){b(d.$$.fragment,t),b(f.$$.fragment,t),y=!1},d(t){t&&(r($),r(T)),r(m),r(p),r(c),r(u),r(a),r(l),r(i),C(d,t),C(f,t)}}}function F(n,s,m){const{homePageTitle:p,description:c,titleSite:u}=z;let{data:a}=s;const l=a.posts.slice(0,4);return n.$$set=i=>{"data"in i&&m(4,a=i.data)},console.log({}.BASIC),[p,c,u,l,a]}class R extends k{constructor(s){super(),O(this,s,F,D,j,{data:4})}}export{R as component,Q as universal};