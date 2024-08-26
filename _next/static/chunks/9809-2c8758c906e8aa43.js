"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9809],{39649:function(e,t,r){var n=r(85893),a=r(48180),s=r(67294),o=r(98388);t.Z=e=>{let{className:t,src:r,...i}=e,[l,c]=(0,s.useState)("");return(0,s.useEffect)(()=>{c((0,a.M)(r||""))},[r]),(0,n.jsx)("img",{...i,src:l,className:(0,o.m6)("rounded-full object-cover",t),onError:()=>{}})}},38029:function(e,t,r){var n=r(85893),a=r(98388);t.Z=e=>{let{className:t,variant:r,size:s,children:o,disabled:i,...l}=e;return(0,n.jsx)("button",{className:(0,a.m6)(i&&"opacity-50","group box-border inline-flex justify-center items-center px-[1.5rem]","sm"===s&&"h-[40px] leading-[40px] rounded-[20px]","primary"===r&&"bg-blue hover:opacity-[0.8]",t),disabled:i,...l,children:"object"==typeof o?(0,n.jsx)(n.Fragment,{children:o}):(0,n.jsx)("p",{className:"text-white font-medium",children:o})})}},19279:function(e,t,r){r.d(t,{fm:function(){return n},dd:function(){return o}}),r(85893);var n,a=r(67294);r(49113),r(76176),r(2370),r(91717),(n||(n={})).SIGN_IN="SIGN_IN";let s=a.createContext({states:[],closeModal:e=>{},openModal:(e,t)=>{}}),o=()=>(0,a.useContext)(s)},91717:function(e,t,r){r.d(t,{E:function(){return x}}),r(85893);var n=r(2370),a=r(2418);let s=(0,n.v0)(a.Z);var o=r(67294);r(66739);var i=r(86650),l=r(47792);let c=(0,i.cF)(a.Z);class d{async uploadImageByUrl(e){let t=await new Promise((t,r)=>{let n=new Image;n.src=e.url,n.crossOrigin="anonymous",n.onload=function(){let e=document.createElement("canvas");e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0),e.toBlob(e=>{e?t(e):r(Error("Failed to convert image to blob"))})}}),r=await (0,i.KV)((0,i.iH)(this.storage,e.fileName||"".concat((0,l.k)(),".").concat(t.type)),t);return{result:r,url:await (0,i.Jt)(r.ref)}}constructor(e){this.storage=e}}new d(c);let u=o.createContext({auth:s,eagerSignInLoading:!0,user:null,signOut:()=>{}}),x=()=>(0,o.useContext)(u)},2418:function(e,t,r){let n=(0,r(83977).ZF)({apiKey:"AIzaSyD63hodF2l2YG1qBYA3KrG_1lP6G34nHJY",authDomain:"duchuyhoangblog-5e5df.firebaseapp.com",databaseURL:"https://duchuyhoangblog-5e5df-default-rtdb.europe-west1.firebasedatabase.app",projectId:"duchuyhoangblog-5e5df",storageBucket:"duchuyhoangblog-5e5df.appspot.com",messagingSenderId:"1096120152389",appId:"1:1096120152389:web:a9dc5229dfdf01f9168e2c",measurementId:"G-B61M3RRE1T"});t.Z=n},45306:function(e,t,r){var n=r(39828),a=r(2418);let s=(0,n.ad)(a.Z);t.Z=s},44620:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(39828),a=r(45306),s=r(47792);class o{async upsert(e,t){let r=(0,n.JU)(this.ref,e);return(await (0,n.QT)(r)).exists()?(0,n.r7)(r,t):this.create(t,{id:e})}async create(e,t){let{id:r,...a}=t||{};return(0,n.pl)((0,n.JU)(this.ref,r||(0,s.k)()),e,a)}async findById(e){let t=(0,n.JU)(this.ref,e);return(await (0,n.QT)(t)).data()}async getAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[this.ref,...e];return(0,n.PL)(n.IO.apply(null,t))}async deleteByConditions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[this.ref,...e],r=await (0,n.PL)(n.IO.apply(null,t));await Promise.all(r.docs.map(async e=>{let t=(0,n.JU)(this.ref,e.id);await (0,n.oe)(t)}))}constructor(e,t){this.dbName=e,this.ref=t?(0,n.hJ)(a.Z,this.dbName).withConverter(t):(0,n.hJ)(a.Z,this.dbName)}}},41731:function(e,t,r){r.d(t,{Pe:function(){return l}});var n=r(39828),a=r(44620),s=r(66739),o=r(45306);class i{constructor(e,t,r,n,a){this.id=e,this.postId=t,this.content=r,this.user=n,this.createAt=a}}let l=new a.Z("post-comments",{toFirestore:e=>({content:e.content,createAt:(0,n.Bt)(),postId:e.postId,user:(0,n.JU)(o.Z,"".concat(s.y,"/").concat(e.user.uid))}),fromFirestore(e,t){let r=e.data();return new i(e.id,r.postId,r.content,r.user,r.createAt)}})},66739:function(e,t,r){r.d(t,{y:function(){return a}});var n=r(44620);let a="users";new n.Z(a,null)},19809:function(e,t,r){r.r(t);var n=r(85893),a=r(39649),s=r(38029),o=r(19279),i=r(91717),l=r(67294),c=r(98388),d=r(88937),u=r(76176),x=r(49113),m=r(39828),h=r(41731),f=r(47792);t.default=e=>{let{postId:t,handleAddCommentSucceed:r}=e,{user:p}=(0,i.E)(),[g,y]=(0,l.useState)(""),[b,v]=(0,l.useState)(!1),N=(0,l.useRef)(null),{openModal:w}=(0,o.dd)();(0,l.useEffect)(()=>{p||y("")},[p]);let j=async e=>{if(e.preventDefault(),!g.trim())return;v(!0);let n=m.EK.now(),a=(0,f.k)();await h.Pe.create({content:g.trim(),postId:t,user:p,createAt:n},{id:a}),r({content:g.trim(),postId:t,createAt:n,user:p,id:a}),y(""),v(!1),console.log(e)};return(0,n.jsxs)("section",{className:"flex",children:[(0,n.jsx)(a.Z,{className:"size-[46px] mr-4",src:null==p?void 0:p.photoURL}),(0,n.jsxs)("form",{className:"flex-1 flex flex-col",onSubmit:j,children:[(0,n.jsxs)("div",{className:"relative w-full",children:[!p&&(0,n.jsx)("div",{className:"rounded-[5px] absolute inset-0 flex justify-center items-center",style:{background:"rgba(0,0,0,0.15)"},children:(0,n.jsx)(s.Z,{size:"sm",variant:"primary",onClick:()=>{w(o.fm.SIGN_IN)},children:"Sign in"})}),(0,n.jsx)("textarea",{value:g,ref:N,onChange:e=>{N.current&&(N.current.style.height="auto",N.current.style.height="".concat(N.current.scrollHeight,"px")),e.target.value.trim().length<=255&&y(e.target.value)},rows:4,className:(0,c.m6)("min-h-full break-all","min-w-full outline-none rounded-[5px] p-[10px] resize-none dark border-[1px] border-solid border-primary","dark:bg-[rgba(0,0,0,0.15)] dark:border-dark-primary","dark:text-text-color-dark","placeholder-gray-light dark:placeholder-gray placeholder:font-medium"),placeholder:p?"Write your comment.":"Sign in to comment"}),p&&(0,n.jsx)("div",{className:"absolute right-1 bottom-1",children:(0,n.jsxs)(u.Z,{className:"text-[12px] text-gray-light dark:!text-gray font-semibold",children:[g.trim().length," / ",255]})})]}),p&&(0,n.jsx)("div",{className:"flex justify-end mt-2",children:(0,n.jsx)(s.Z,{type:"submit",variant:"primary",size:"sm",className:"rounded-[6px] px-[1rem]",disabled:b,children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(u.Z,{className:"text-text-color-dark font-semibold",children:"Send"}),b?(0,n.jsx)(x.Qj,{className:"ml-1 text-text-color-dark animate-spin",style:{animationDuration:.25}}):(0,n.jsx)(d.OUD,{className:"size-6 ml-1 text-text-color-dark"})]})})})]})]})}},48180:function(e,t,r){r.d(t,{M:function(){return n}});let n=e=>e.startsWith("https://")||e.startsWith("http://")?e:"".concat("/duc-huy-hoang-blog-v2","/").concat(e).replace("//","/")},47792:function(e,t,r){r.d(t,{k:function(){return n}});function n(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}}]);