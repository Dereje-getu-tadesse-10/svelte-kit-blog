import{s as H,n as $,c as I}from"../chunks/scheduler.5cba145a.js";import{S as P,i as z,g as m,s as N,m as k,G as B,h as p,f as a,c as j,j as x,n as O,k as t,y as s,a as q,o as G}from"../chunks/index.1b9f201c.js";import{d as D}from"../chunks/singletons.13742bb2.js";const F=()=>{const e=D;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},J={subscribe(e){return F().page.subscribe(e)}};function K(e){let u,c,n,d,l,_,h,g,b,y,i,f,v,w,E,M,A;return document.title=u="Error "+e[0],{c(){c=m("meta"),n=m("meta"),l=m("meta"),_=m("meta"),h=m("meta"),b=m("meta"),y=N(),i=m("section"),f=m("span"),v=k(e[0]),w=N(),E=m("h1"),M=k("Error "),A=k(e[0]),this.h()},l(o){const r=B("svelte-1bk8s80",document.head);c=p(r,"META",{name:!0,content:!0}),n=p(r,"META",{property:!0,content:!0}),l=p(r,"META",{property:!0,content:!0}),_=p(r,"META",{property:!0,content:!0}),h=p(r,"META",{name:!0,content:!0}),b=p(r,"META",{name:!0,content:!0}),r.forEach(a),y=j(o),i=p(o,"SECTION",{class:!0});var T=x(i);f=p(T,"SPAN",{class:!0});var C=x(f);v=O(C,e[0]),C.forEach(a),w=j(T),E=p(T,"H1",{class:!0});var S=x(E);M=O(S,"Error "),A=O(S,e[0]),S.forEach(a),T.forEach(a),this.h()},h(){t(c,"name","description"),t(c,"content","Oops, an error has occurred."),t(n,"property","og:title"),t(n,"content",d="Error "+e[0]),t(l,"property","og:description"),t(l,"content","Oops, an error has occurred."),t(_,"property","og:type"),t(_,"content","website"),t(h,"name","twitter:title"),t(h,"content",g="Error "+e[0]),t(b,"name","twitter:description"),t(b,"content","Oops, an error has occurred."),t(f,"class","mx-auto my-7 block w-min rounded-md px-4 text-white drop-shadow-lg bg-primary py-[2px]"),t(E,"class","text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl"),t(i,"class","mt-16 min-h-screen sm:mt-32")},m(o,r){s(document.head,c),s(document.head,n),s(document.head,l),s(document.head,_),s(document.head,h),s(document.head,b),q(o,y,r),q(o,i,r),s(i,f),s(f,v),s(i,w),s(i,E),s(E,M),s(E,A)},p(o,[r]){r&1&&u!==(u="Error "+o[0])&&(document.title=u),r&1&&d!==(d="Error "+o[0])&&t(n,"content",d),r&1&&g!==(g="Error "+o[0])&&t(h,"content",g),r&1&&G(v,o[0]),r&1&&G(A,o[0])},i:$,o:$,d(o){o&&(a(y),a(i)),a(c),a(n),a(l),a(_),a(h),a(b)}}}function L(e,u,c){let n;I(e,J,l=>c(1,n=l));let d=null;return e.$$.update=()=>{e.$$.dirty&2&&n.error&&c(0,d=n.error.code)},[d,n]}let V=class extends P{constructor(u){super(),z(this,u,L,K,H,{})}};export{V as component};