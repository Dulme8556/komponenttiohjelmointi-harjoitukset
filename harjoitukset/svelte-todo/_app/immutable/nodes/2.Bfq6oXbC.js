import{a as L,t as I,d as Lt}from"../chunks/DWKG7UOv.js";import{i as j}from"../chunks/DPvfKd1h.js";import{A as Nt,k as It,p as M,F as rt,G as Mt,i as St,ao as yt,P as Dt,Q as dt,R as lt,q as X,at as Q,V as gt,m as kt,W as Rt,C as ft,au as Ht,av as Vt,an as Bt,aw as Yt,o as Gt,B as qt,ak as zt,ad as Jt,ab as Kt,J as ut,ax as Pt,ay as Ut,az as Wt,ai as Xt,X as vt,b as xt,aA as Ot,aB as Qt,O as Ft,aC as Zt,aD as jt,Y as te,s as J,aE as B,aF as Y,aG as ee,aH as ae,w as U,v as K,g as i,L as N,z as k,x as g,y,aI as O,t as ct,h as F,aJ as re,aK as _t}from"../chunks/CokK6K1_.js";import{p as Tt,b as Et,i as le,a as pt}from"../chunks/C7yTFtH9.js";import{a as se,l as ne,d as tt,e as At,s as z}from"../chunks/Bx8ebinZ.js";import{o as ht,c as wt}from"../chunks/tolhfdif.js";function oe(e,t){return t}function ie(e,t,a,r){for(var l=[],s=t.length,n=0;n<s;n++)Vt(t[n].e,l,!0);var c=s>0&&l.length===0&&a!==null;if(c){var m=a.parentNode;Bt(m),m.append(a),r.clear(),V(e,t[0].prev,t[s-1].next)}Yt(l,()=>{for(var _=0;_<s;_++){var h=t[_];c||(r.delete(h.k),V(e,h.prev,h.next)),Gt(h.e,!c)}})}function ve(e,t,a,r,l,s=null){var n=e,c={flags:t,items:new Map,first:null};{var m=e;n=M?rt(qt(m)):m.appendChild(Nt())}M&&Mt();var _=null,h=!1;It(()=>{var o=a(),f=St(o)?o:o==null?[]:yt(o),v=f.length;if(h&&v===0)return;h=v===0;let u=!1;if(M){var p=n.data===Dt;p!==(v===0)&&(n=dt(),rt(n),lt(!1),u=!0)}if(M){for(var x=null,T,b=0;b<v;b++){if(X.nodeType===8&&X.data===zt){n=X,u=!0,lt(!1);break}var d=f[b],w=r(d,b);T=Ct(X,c,x,null,d,w,b,l,t),c.items.set(w,T),x=T}v>0&&rt(dt())}if(!M){var A=Jt;ce(f,c,n,l,t,(A.f&Q)!==0,r)}s!==null&&(v===0?_?gt(_):_=kt(()=>s(n)):_!==null&&Rt(_,()=>{_=null})),u&&lt(!0),a()}),M&&(n=X)}function ce(e,t,a,r,l,s,n,c){var m=e.length,_=t.items,h=t.first,o=h,f,v=null,u=[],p=[],x,T,b,d;for(d=0;d<m;d+=1){if(x=e[d],T=n(x,d),b=_.get(T),b===void 0){var w=o?o.e.nodes_start:a;v=Ct(w,t,v,v===null?t.first:v.next,x,T,d,r,l),_.set(T,v),u=[],p=[],o=v.next;continue}if(de(b,x,d),b.e.f&Q&&gt(b.e),b!==o){if(f!==void 0&&f.has(b)){if(u.length<p.length){var A=p[0],E;v=A.prev;var H=u[0],C=u[u.length-1];for(E=0;E<u.length;E+=1)bt(u[E],A,a);for(E=0;E<p.length;E+=1)f.delete(p[E]);V(t,H.prev,C.next),V(t,v,H),V(t,C,A),o=A,v=C,d-=1,u=[],p=[]}else f.delete(b),bt(b,o,a),V(t,b.prev,b.next),V(t,b,v===null?t.first:v.next),V(t,v,b),v=b;continue}for(u=[],p=[];o!==null&&o.k!==T;)(s||!(o.e.f&Q))&&(f??(f=new Set)).add(o),p.push(o),o=o.next;if(o===null)continue;b=o}u.push(b),v=b,o=b.next}if(o!==null||f!==void 0){for(var S=f===void 0?[]:yt(f);o!==null;)(s||!(o.e.f&Q))&&S.push(o),o=o.next;var $=S.length;if($>0){var G=m===0?a:null;ie(t,S,G,_)}}ft.first=t.first&&t.first.e,ft.last=v&&v.e}function de(e,t,a,r){Ht(e.v,t),e.i=a}function Ct(e,t,a,r,l,s,n,c,m,_){var h=(m&Ut)!==0,o=(m&Wt)===0,f=h?o?Kt(l):ut(l):l,v=m&Pt?ut(n):n,u={i:v,v:f,k:s,a:null,e:null,prev:a,next:r};try{return u.e=kt(()=>c(e,f,v),M),u.e.prev=a&&a.e,u.e.next=r&&r.e,a===null?t.first=u:(a.next=u,a.e.next=u.e),r!==null&&(r.prev=u,r.e.prev=u.e),u}finally{}}function bt(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,l=t?t.e.nodes_start:a,s=e.e.nodes_start;s!==r;){var n=Xt(s);l.before(s),s=n}}function V(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function Z(e,t,a){vt(()=>{var r=xt(()=>t(e,a==null?void 0:a())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function it(e){if(M){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;R(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var l=e.checked;R(e,"checked",null),e.checked=l}}};e.__on_r=a,Ot(a),se()}}function fe(e,t){var a=e.__attributes??(e.__attributes={});a.checked!==(a.checked=t??void 0)&&(e.checked=t)}function R(e,t,a,r){var l=e.__attributes??(e.__attributes={});M&&(l[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||l[t]!==(l[t]=a)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Qt]=a),a==null?e.removeAttribute(t):typeof a!="string"&&ue(e).includes(t)?e[t]=a:e.setAttribute(t,a))}var mt=new Map;function ue(e){var t=mt.get(e.nodeName);if(t)return t;mt.set(e.nodeName,t=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=Zt(r);for(var s in a)a[s].set&&t.push(s);r=Ft(r)}return t}function st(e,t,a){if(a){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function $t(e,t,a=t){var r=jt();ne(e,"input",l=>{var s=l?e.defaultValue:e.value;if(s=nt(e)?ot(s):s,a(s),r&&s!==(s=t())){var n=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=n,e.selectionEnd=Math.min(c,e.value.length))}}),(M&&e.defaultValue!==e.value||xt(t)==null&&e.value)&&a(nt(e)?ot(e.value):e.value),te(()=>{var l=t();nt(e)&&l===ot(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function nt(e){var t=e.type;return t==="number"||t==="range"}function ot(e){return e===""?null:+e}function P(e){if(e&&typeof e.select=="function"){const t=a=>e.select();return e.addEventListener("focus",t),{destroy:()=>e.removeEventListener("focus",t)}}}var _e=(e,t)=>e.key==="Escape"&&t(),pe=I('<form><h2 class="label-wrapper"><label for="todo-0" class="label__lg">What needs to be done?</label></h2> <input type="text" id="todo-0" autocomplete="off" class="input input__lg"> <button type="submit" class="btn btn__primary btn__lg">Add</button></form>');function he(e,t){J(t,!1);let a=B(Y("tehtavat")),r=Tt(t,"autofocus",8,!0),l=B(""),s=B(""),n=B();ht(()=>r()&&i(n).focus());function c(f){f.preventDefault(),O(a,i(a).tehtavat=[...i(a).tehtavat,{id:i(s),name:i(l),completed:!1}]),N(l,""),i(n).focus()}const m=()=>{N(l,""),i(n).focus()};ht(()=>r()&&i(n).focus()),ee(()=>i(a),()=>{N(s,i(a).tehtavat.length?Math.max(...i(a).tehtavat.map(f=>f.id))+1:1)}),ae(),j();var _=pe();_.__keydown=[_e,m];var h=k(g(_),2);it(h),vt(()=>$t(h,()=>i(l),f=>N(l,f))),Et(h,f=>N(n,f),()=>i(n)),Z(h,f=>P==null?void 0:P(f));var o=k(h,2);y(_),U(()=>o.disabled=!i(l)),At("submit",_,c),L(e,_),K()}tt(["keydown"]);function be(e,t,a){t("remove",a())}function me(e,t){t(t().completed=!t().completed,!0)}var ye=(e,t)=>e.key==="Escape"&&t(),ge=I('<form class="stack-small"><div class="form-group"><label class="todo-label"> </label> <input type="text" autocomplete="off" class="todo-text"></div> <div class="btn-group"><button class="btn todo-cancel" type="button">Cancel<span class="visually-hidden"> </span></button> <button class="btn btn__primary todo-edit" type="submit">Save<span class="visually-hidden"> </span></button></div></form>'),ke=I('<div class="c-cb"><input type="checkbox"> <label class="todo-label"> </label></div> <div class="btn-group"><button type="button" class="btn">Edit <span class="visually-hidden"> </span></button> <button type="button" class="btn btn__danger">Delete <span class="visually-hidden"> </span></button></div>',1),xe=I('<div class="stack-small"><!></div>');function Te(e,t){J(t,!1);let a=Tt(t,"todo",12),r=B();const l=wt();let s=Y("tehtavat"),n=B(!1),c=B(s.tehtavat.name),m=!1;function _(d){a({...a(),...d}),l("update",a())}function h(){N(c,a().name),N(n,!1)}function o(d){d.preventDefault(),_({name:i(c)}),N(n,!1)}function f(){m=!0,N(n,!0)}const v=d=>m&&d.focus(),u=d=>d&&typeof d.focus=="function"&&d.foucs();j();var p=xe(),x=g(p);{var T=d=>{var w=ge();w.__keydown=[ye,h];var A=g(w),E=g(A),H=g(E);y(E);var C=k(E,2);it(C),vt(()=>$t(C,()=>i(c),D=>N(c,D))),Et(C,D=>N(r,D),()=>i(r)),Z(C,D=>P==null?void 0:P(D)),Z(C,D=>u==null?void 0:u(D)),y(A);var S=k(A,2),$=g(S);$.__click=h;var G=k(g($)),et=g(G);y(G),y($);var q=k($,2),W=k(g(q)),at=g(W);y(W),y(q),y(S),y(w),U(()=>{R(E,"for",`todo-${a().id??""}`),z(H,`New name for '${a().name??""}'`),R(C,"id",`todo-${a().id??""}`),z(et,`renaming ${a().name??""}`),q.disabled=!i(c),z(at,`new name for ${a().name??""}`)}),At("submit",w,o),L(d,w)},b=d=>{var w=ke(),A=ct(w),E=g(A);it(E),E.__click=[me,a];var H=k(E,2),C=g(H,!0);y(H),y(A);var S=k(A,2),$=g(S);$.__click=f;var G=k(g($)),et=g(G,!0);y(G),y($),Z($,D=>v==null?void 0:v(D));var q=k($,2);q.__click=[be,l,a];var W=k(g(q)),at=g(W,!0);y(W),y(q),y(S),U(()=>{R(E,"id",`todo-${a().id??""}`),fe(E,a().completed),R(H,"for",`todo-${a().id??""}`),z(C,a().name),z(et,a().name),z(at,a().name)}),L(d,w)};le(x,d=>{i(n)?d(T):d(b,!1)})}y(p),L(e,p),K()}tt(["keydown","click"]);const Ee=(e,t)=>t("removeCompleted");var Ae=I('<div class="btn-group"><button type="button" class="btn btn__primary"></button> <button type="button" class="btn btn__primary">Remove completed</button></div>');function we(e,t){J(t,!0);const a=wt();let r=Y("tehtavat"),l=!0;const s=()=>{a("checkAll",l),l=!l};let n=F(()=>r.tehtavat.filter(h=>h.completed).length);var c=Ae(),m=g(c);m.__click=s,m.textContent=`${(l?"Check":"Uncheck")??""} all`;var _=k(m,2);_.__click=[Ee,a],y(c),U(()=>{m.disabled=r.tehtavat.length===0,_.disabled=i(n)===0}),L(e,c),K()}tt(["click"]);var Ce=I('<h2 id="list-heading"> </h2>');function $e(e,t){J(t,!1);let a=Y("tehtavat");j();var r=Ce(),l=g(r);U(()=>z(l,`${a.tehtavat.filter(s=>s.completed).length??""} out of ${a.tehtavat.length??""} items completed`)),y(r),L(e,r),K()}var Le=I('<li class="todo"><!></li>'),Ne=I('<!> <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading"></ul> <hr> <!>',1);function Ie(e,t){J(t,!0);let a=Y("tehtavat"),r=Y("filtteri");a.tehtavat=[{id:1,name:"Create a Svelte starter app",completed:!0},{id:2,name:"Create your first component",completed:!0},{id:3,name:"Complete the rest of the tutorial",completed:!1}];let l=F(()=>a.tehtavat);a.tehtavienMaara=i(l);let s=F(()=>r.filterTodos),n=F(()=>r.filter);function c(p){a.tehtavat=a.tehtavat.filter(x=>x.id!==p.id)}function m(p){const x=a.tehtavat.findIndex(T=>T.id===p.id);a.tehtavat[x]={...a.tehtavat[x],...p}}const _=p=>{a.tehtavat.forEach((x,T)=>a.tehtavat[T].completed=p)},h=()=>a.tehtavat=a.tehtavat.filter(p=>!p.completed);var o=Ne(),f=ct(o);$e(f,{});var v=k(f,2);ve(v,21,()=>i(s)(i(n),a.tehtavat),oe,(p,x)=>{var T=Le(),b=g(T);Te(b,{get todo(){return i(x)},onupdate:d=>m(d.detail),$$events:{remove:d=>c(d.detail)}}),y(T),L(p,T)},p=>{re();var x=Lt("Nothing to do here!");L(p,x)}),y(v);var u=k(v,4);we(u,{$$events:{checkAll:p=>_(p.detail),removeCompleted:h}}),L(e,o),K()}var Me=(e,t)=>O(t,i(t).filter="all"),Se=(e,t)=>O(t,i(t).filter="active"),De=(e,t)=>O(t,i(t).filter="completed"),Re=I('<div class="filters btn-group stack-exception"><button class="btn toggle-btn"><span class="visually-hidden">Show</span> <span>All</span> <span class="visually-hidden">tasks</span></button> <button class="btn toggle-btn"><span class="visually-hidden">Show</span> <span>Active</span> <span class="visually-hidden">tasks</span></button> <button class="btn toggle-btn"><span class="visually-hidden">Show</span> <span>Completed</span> <span class="visually-hidden">tasks</span></button></div>');function He(e,t){J(t,!1);let a=Y("tehtavat"),r=B(Y("filtteri"));i(r).filter,a.tehtavat,O(r,i(r).filterTodos=(m,_)=>m==="active"?a.tehtavat.filter(h=>!h.completed):m==="completed"?a.tehtavat.filter(h=>h.completed):a.tehtavat),j();var l=Re(),s=g(l);s.__click=[Me,r];var n=k(s,2);n.__click=[Se,r];var c=k(n,2);c.__click=[De,r],y(l),U(()=>{R(s,"aria-pressed",i(r).filter==="all"),st(s,"btn__primary",i(r).filter==="all"),R(n,"aria-pressed",i(r).filter==="active"),st(n,"btn__primary",i(r).filter==="active"),R(c,"aria-pressed",i(r).filter==="completed"),st(c,"btn__primary",i(r).filter==="completed")}),L(e,l),K()}tt(["click"]);var Ve=I('<div class="todoapp stack-large"><!> <!> <!></div>');function Be(e,t){J(t,!0);let a=pt({tehtavat:[],suoritetut:[],tehtavienMaara:0,suoritettujenMaara:0}),r=pt({filter:"all",filterTodos:""});_t("tehtavat",a),_t("filtteri",r);var l=Ve(),s=g(l);he(s,{});var n=k(s,2);He(n,{});var c=k(n,2);Ie(c,{}),y(l),L(e,l),K()}var Ye=I("<!> <!>",1);function Ge(e){var t=Ye(),a=ct(t);Be(a,{}),k(a,2),L(e,t)}function We(e){Ge(e)}export{We as component};
