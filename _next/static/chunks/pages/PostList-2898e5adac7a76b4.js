(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7089],{53953:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/PostList",function(){return r(45728)}])},9900:function(e,t,r){"use strict";var s=r(85893),a=r(98388);t.Z=e=>{let{className:t,children:r}=e;return(0,s.jsx)("section",{className:(0,a.m6)("max-w-full xl:max-w-[1200px] px-[16px] md:px-[40px] mx-auto",t),children:r})}},60763:function(e,t,r){"use strict";var s=r(85893),a=r(48180),l=r(67294),n=r(98388);t.Z=e=>{let{src:t,className:r,vertical:i,imgClassName:o,...c}=e,d=(0,l.useMemo)(()=>(0,a.M)(t||""),[t]);return(0,s.jsx)("div",{className:(0,n.m6)("w-full",!i&&"aspect-[16/9]",r),style:{borderRadius:"5px",overflow:"hidden"},children:(0,s.jsx)("img",{className:(0,n.m6)("w-full h-full",o),style:{objectFit:"cover",borderRadius:"5px",overflow:"hidden"},src:d,alt:"full-size-image",...c})})}},44727:function(e,t,r){"use strict";var s=r(85893);r(67294);var a=r(60763),l=r(76176),n=r(41664),i=r.n(n),o=r(9540),c=r(27484),d=r.n(c);t.Z=e=>{let{post:t}=e;return(0,s.jsx)(i(),{href:"/post/".concat(t.id),children:(0,s.jsxs)("div",{className:"w-full group/card ",children:[(0,s.jsx)(a.Z,{src:t.metadata.image,className:"!rounded-[16px]",imgClassName:"group-hover/card:scale-[1.2] transition-all duration-500 group-hover/card:grayscale-[0.5]"}),(0,s.jsxs)("div",{className:"flex items-center mt-3",children:[(0,s.jsx)(o.IiJ,{className:"size-[16px] !text-gray-light dark:!text-gray"}),(0,s.jsx)(l.Z,{className:"ml-2 !text-gray-light dark:!text-gray !text-[0.8rem] lg!text-[0.875rem] font-semibold",children:d()(t.metadata.date,"DD-MM-YYYY").format("LL")})]}),(0,s.jsx)(l.Z,{className:"my-2 font-bold text-[1.2rem] lg:text-[1.5rem] overflow-hidden group-hover/card:underline",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.title}),(0,s.jsx)(l.Z,{className:"text-[0.875rem] lg:text-[1rem] !text-gray-light dark:!text-gray overflow-hidden font-medium",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.description})]})})}},76176:function(e,t,r){"use strict";var s=r(85893),a=r(67294),l=r(98388);t.Z=e=>{let{children:t,className:r,component:n,overflowToolTip:i,...o}=e;return(0,s.jsx)(s.Fragment,{children:a.createElement(n||"p",{className:(0,l.m6)("font-normal text-text-color dark:text-text-color-dark antialiased",r),...o},t)})}},81631:function(e,t,r){"use strict";r.d(t,{f:function(){return m}}),r(85893);var s=r(67294),a=r(10285),l=r.n(a),n=r(56176),i=r.n(n);r(8520);var o=r(27484),c=r.n(o);c().extend(i()),c().extend(l());let d=s.createContext({posts:[],tags:[]}),m=()=>(0,s.useContext)(d)},45728:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(85893),a=r(9900),l=r(44727),n=r(98388),i=e=>{let{label:t,selected:r,className:a,...l}=e;return(0,s.jsx)("div",{className:(0,n.m6)("box-border cursor-pointer text-blue text-[0.875rem] font-medium px-3 py-1 rounded-full border border-blue transition-colors",r&&"bg-blue text-white",a),...l,children:t})},o=r(76176),c=r(81631),d=r(67294),m=r(96376),u=()=>{let[e,t]=(0,d.useState)([]),{posts:r,tags:n}=(0,c.f)(),u=(0,d.useMemo)(()=>0===e.length?r:r.filter(t=>t.metadata.tags.some(t=>e.includes(t))),[r,e]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{children:(0,s.jsxs)("div",{className:"flex flex-col mb-8",children:[(0,s.jsx)(o.Z,{component:"h1",className:"!text-[3rem] font-semibold",children:"Posts"}),(0,s.jsx)("section",{className:"flex gap-2 flex-wrap mt-4 mb-10",children:n.map(r=>(0,s.jsx)(i,{label:r,onClick:()=>{let s=new Set(e);s.has(r)?s.delete(r):s.add(r),t(Array.from(s))},selected:e.includes(r)},r))}),(0,s.jsx)("section",{className:"grid grid-cols-12 gap-6 overflow-hidden",children:(u||[]).map(e=>(0,s.jsx)(m.E.div,{className:"col-span-12 lg:col-span-4",initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{duration:.5},children:(0,s.jsx)(l.Z,{post:e})},e.id))})]})})})}},48180:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});let s=e=>e.startsWith("https://")||e.startsWith("http://")?e:"".concat("/duc-huy-hoang-blog-v2","/").concat(e).replace("//","/")}},function(e){e.O(0,[3365,8388,1664,7958,8206,2888,9774,179],function(){return e(e.s=53953)}),_N_E=e.O()}]);