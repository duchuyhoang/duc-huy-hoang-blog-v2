(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4024],{59145:function(e,t,a){Promise.resolve().then(a.bind(a,94568))},87138:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var s=a(231),r=a.n(s)},37830:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=Symbol.for("react.element"),s=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),r=Object.assign,l={};function n(e,t,a){this.props=e,this.context=t,this.refs=l,this.updater=a||s}function i(){}function o(e,t,a){this.props=e,this.context=t,this.refs=l,this.updater=a||s}n.prototype.isReactComponent={},n.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=n.prototype;var c=o.prototype=new i;c.constructor=o,r(c,n.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,s){var r,l={},n=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(n=""+t.key),t)d.call(t,r)&&!m.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(1===o)l.children=s;else if(1<o){for(var c=Array(o),x=0;x<o;x++)c[x]=arguments[x+2];l.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===l[r]&&(l[r]=o[r]);return{$$typeof:a,type:e,key:n,ref:i,props:l,_owner:null}}},4410:function(e,t,a){"use strict";e.exports=a(37830)},63652:function(e,t,a){"use strict";var s=a(57437),r=a(96164);t.Z=e=>{let{className:t,children:a}=e;return(0,s.jsx)("section",{className:(0,r.m6)("max-w-full xl:max-w-[1200px] px-[16px] md:px-[40px] mx-auto",t),children:a})}},579:function(e,t,a){"use strict";var s=a(57437),r=a(96164);t.Z=e=>{let{className:t}=e;return(0,s.jsx)("hr",{className:(0,r.m6)("w-full border-b-2 rounded-sm border-primary dark:border-dark-primary outline-none",t)})}},12738:function(e,t,a){"use strict";var s=a(57437),r=a(12621),l=a(2265),n=a(96164);t.Z=e=>{let{src:t,className:a,vertical:i,imgClassName:o,...c}=e,d=(0,l.useMemo)(()=>(0,r.M)(t||""),[t]);return(0,s.jsx)("div",{className:(0,n.m6)("w-full",!i&&"aspect-[16/9]",a),style:{borderRadius:"5px",overflow:"hidden"},children:(0,s.jsx)("img",{className:(0,n.m6)("w-full h-full",o),style:{objectFit:"cover",borderRadius:"5px",overflow:"hidden"},src:d,alt:"full-size-image",...c})})}},39665:function(e,t,a){"use strict";var s=a(57437);a(2265);var r=a(12738),l=a(86727),n=a(87138),i=a(41942),o=a(62737),c=a.n(o);t.Z=e=>{let{post:t}=e;return(0,s.jsx)(n.default,{href:"/post/".concat(t.id),children:(0,s.jsxs)("div",{className:"w-full group/card ",children:[(0,s.jsx)(r.Z,{src:t.metadata.image,className:"!rounded-[16px]",imgClassName:"group-hover/card:scale-[1.2] transition-all duration-500 group-hover/card:grayscale-[0.5]"}),(0,s.jsxs)("div",{className:"flex items-center mt-3",children:[(0,s.jsx)(i.IiJ,{className:"size-[16px] !text-gray-light dark:!text-gray"}),(0,s.jsx)(l.Z,{className:"ml-2 !text-gray-light dark:!text-gray !text-[0.8rem] lg!text-[0.875rem] font-semibold",children:c()(t.metadata.date,"DD-MM-YYYY").format("LL")})]}),(0,s.jsx)(l.Z,{className:"my-2 font-bold text-[1.2rem] lg:text-[1.5rem] overflow-hidden group-hover/card:underline",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.title}),(0,s.jsx)(l.Z,{className:"text-[0.875rem] lg:text-[1rem] !text-gray-light dark:!text-gray overflow-hidden font-medium",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.description})]})})}},48330:function(e,t,a){"use strict";a.d(t,{f:function(){return x}});var s=a(57437),r=a(2265),l=a(7905),n=a.n(l),i=a(78322),o=a.n(i);a(13789);var c=a(62737),d=a.n(c);d().extend(o()),d().extend(n());let m=r.createContext({posts:[],tags:[]}),x=()=>(0,r.useContext)(m);t.default=e=>{let{posts:t,children:a}=e,l=(0,r.useMemo)(()=>t.sort((e,t)=>d()(t.metadata.date,"DD-MM-YYYY").toDate().getTime()-d()(e.metadata.date,"DD-MM-YYYY").toDate().getTime()),[t]),n=(0,r.useMemo)(()=>t.reduce((e,t)=>(t.metadata.tags.forEach(t=>{e.add(t)}),e),new Set),[t]);return(0,s.jsx)(m.Provider,{value:{posts:l,tags:Array.from(n)},children:a})}},94568:function(e,t,a){"use strict";a.d(t,{default:function(){return b}});var s=a(57437),r=a(63652),l=a(86727),n=a(87138),i=a(41942),o=a(92867),c=a(98492);a(97491);var d=a(17847);let m=[(0,s.jsx)(c.xg,{className:"size-full"},"ts"),(0,s.jsx)(i.huN,{className:"text-[#61dafb] size-full"},"react"),(0,s.jsx)(o.Z,{className:"size-full"},"vue"),(0,s.jsx)(c.N1,{className:"size-full"},"express"),(0,s.jsx)(c.LT,{className:"size-full"},"nest"),(0,s.jsx)(c.EI,{className:"size-full"},"pg"),(0,s.jsx)(c.z4,{className:"size-full"},"sql"),(0,s.jsx)(c._P,{className:"size-full"},"mongo")];var x=()=>(0,s.jsxs)("section",{className:"grid grid-cols-12 gap-4 lg:gap-8",children:[(0,s.jsxs)("div",{className:"col-span-12 lg:col-span-6 flex flex-col",children:[(0,s.jsxs)(l.Z,{component:"h1",className:"!text-[2rem] lg:!text-[3.2rem] !font-bold",children:["Hey, there"," ",(0,s.jsx)("span",{className:"inline-block w-max animate-waving-hand",children:"\uD83D\uDC4B"}),(0,s.jsx)("br",{}),"I’m",(0,s.jsx)("span",{className:"ml-[0.5rem] text-secondary dark:text-secondary-dark",children:"Hoang Duc Huy \uD83D\uDE80"})]}),(0,s.jsxs)(l.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:["I’m a Software Engineer and Technical Writer with over"," ",(0,s.jsx)("b",{className:"text-secondary dark:text-secondary-dark",children:"3"})," years experience working with several companies to write technical articles that pushes the product of the company."]}),(0,s.jsxs)(l.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:["I’m a fullstack developer. I have approximately"," ",(0,s.jsx)("b",{className:"text-secondary dark:text-secondary-dark",children:"4.5"})," years of experience in frontend developer and"," ",(0,s.jsx)("b",{className:"text-secondary dark:text-secondary-dark",children:"2"})," years of experience in backend developer."]}),(0,s.jsxs)(l.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:["I currenty work at"," ",(0,s.jsx)(n.default,{href:"/",className:"text-secondary dark:text-secondary-dark hover:underline",children:"VMO"}),", as a Technical Editor where I write content, review content, curate ideas that contribute to the growth of the company."]}),(0,s.jsx)(d.E.div,{className:"mt-1 flex justify-start lg:justify-center gap-[16px]",variants:{show:{transition:{staggerChildren:.2}}},initial:"hidden",whileInView:"show",children:m.map((e,t)=>(0,s.jsx)(d.E.div,{className:"size-[32px] md:size-[64px]",variants:{hidden:{opacity:0,scale:0},show:{opacity:1,scale:1,transition:{duration:.5}}},children:e},"self_".concat(t)))})]}),(0,s.jsx)("div",{className:"col-span-12 lg:col-span-6 flex justify-end",children:(0,s.jsx)(d.E.img,{src:"/duc-huy-hoang-blog-v2/_next/static/media/avatar.0563fb36.png",className:"self-image object-cover object-top rounded-[20px] w-[100%] lg:w-[90%]",style:{aspectRatio:1},alt:"self",initial:{clipPath:"circle(0% at 0 0)"},whileInView:{clipPath:"circle(200% at 0 0)"},transition:{duration:3}})})]}),u=a(579),f=a(12738),p=e=>{let{featurePost:t,posts:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(l.Z,{className:"text-[1.5rem] font-bold",children:"Featured Posts"}),(0,s.jsxs)("section",{className:"mt-4 grid grid-cols-12 lg:gap-5",children:[(0,s.jsx)("div",{className:"col-span-12 lg:col-span-8 flex flex-col",children:t&&(0,s.jsx)(n.default,{href:"/post/".concat(null==t?void 0:t.id),children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(f.Z,{src:t.metadata.image,className:"!rounded-[20px]"}),(0,s.jsx)(l.Z,{component:"h1",className:"font-bold text-[1.8rem] lg:text-[2.5rem] lg:my-4 leading-[52px]",children:t.metadata.title}),(0,s.jsx)(l.Z,{className:"mb-4 font-bold text-[1rem] lg:text-[1.125rem] !text-gray-light dark:!text-gray overflow-hidden",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.description})]})})}),(0,s.jsx)("div",{className:"col-span-12 lg:col-span-4 flex flex-col",children:(a||[]).map((e,t)=>(0,s.jsx)(n.default,{href:"/post/".concat(e.id),children:(0,s.jsxs)("div",{className:"grid grid-cols-12",style:{...t<a.length-1&&{marginBottom:"32px"}},children:[(0,s.jsx)("div",{className:"col-span-5",children:(0,s.jsx)(f.Z,{src:e.metadata.image})}),(0,s.jsx)("div",{className:"col-span-7 ml-4 flex flex-col",children:(0,s.jsx)(l.Z,{className:"text-[1rem] font-bold overflow-hidden mt-[2px]",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:e.metadata.title})})]})},"main_post_".concat(e.id)))})]})]})})},h=a(48330),g=a(2265),y=a(39665),j=e=>{let{posts:t}=e,[a,r]=(0,g.useState)(0);return(0,s.jsxs)("section",{className:"flex flex-col",children:[(0,s.jsx)(l.Z,{component:"h4",className:"text-[1.5rem] font-bold mb-4",children:"Most posts"}),(0,s.jsx)("div",{className:"grid grid-cols-12 gap-6",children:(t||[]).map(e=>(0,s.jsx)("div",{className:"col-span-12 lg:col-span-4",children:(0,s.jsx)(y.Z,{post:e})},e.id))})]})},b=()=>{let{posts:e}=(0,h.f)(),t=(0,g.useMemo)(()=>e.filter(e=>e.metadata.isFeature)[0],[e]),a=(0,g.useMemo)(()=>e.filter(e=>e.metadata.isFeature&&e.id!==(null==t?void 0:t.id)).slice(0,5),[e,t]),l=(0,g.useMemo)(()=>e.filter(e=>e.id!==(null==t?void 0:t.id)&&!a.find(t=>t.id===e.id)),[e,t,a]);return(0,s.jsxs)(r.Z,{className:"flex flex-col pb-8",children:[(0,s.jsx)(x,{}),(0,s.jsx)(u.Z,{className:"mt-6 mb-3 lg:my-[3rem]"}),(0,s.jsx)(p,{featurePost:t,posts:a}),(0,s.jsx)(u.Z,{className:"mt-6 mb-3 lg:my-[3rem]"}),(0,s.jsx)("div",{className:"lg:mt-4",children:(0,s.jsx)(j,{posts:l})})]})}},12621:function(e,t,a){"use strict";a.d(t,{M:function(){return s}});let s=e=>e.startsWith("https://")||e.startsWith("http://")?e:"".concat("/duc-huy-hoang-blog-v2","/").concat(e).replace("//","/")},97491:function(){}},function(e){e.O(0,[2941,7699,6696,231,1296,4783,2971,7023,1744],function(){return e(e.s=59145)}),_N_E=e.O()}]);