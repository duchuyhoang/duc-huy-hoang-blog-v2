(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6406],{27484:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",s="week",i="month",a="quarter",u="year",o="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}};var p="$isDayjsObject",v=function(t){return t instanceof x||!(!t||!t[p])},y=function t(e,r,n){var s;if(!e)return h;if("string"==typeof e){var i=e.toLowerCase();m[i]&&(s=i),r&&(m[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;m[u]=e,s=u}return!n&&s&&(h=s),s||!n&&h},$=function(t,e){if(v(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},g={s:d,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(r/60),2,"0")+":"+d(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,i),a=r-s<0,u=e.clone().add(n+(a?-1:1),i);return+(-(n+(r-s)/(a?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return({M:i,y:u,w:s,d:"day",D:o,h:n,m:r,s:e,ms:t,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};g.l=y,g.i=v,g.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function d(t){this.$L=y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(t,e){var r=$(t);return this.startOf(e)<=r&&r<=this.endOf(e)},h.isAfter=function(t,e){return $(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<$(t)},h.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,l=!!g.u(a)||a,f=g.p(t),d=function(t,e){var r=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?r:r.endOf("day")},h=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return l?d(1,0):d(31,11);case i:return l?d(1,p):d(0,p+1);case s:var $=this.$locale().weekStart||0,x=(m<$?m+7:m)-$;return d(l?v-x:v+(6-x),p);case"day":case o:return h(y+"Hours",0);case n:return h(y+"Minutes",1);case r:return h(y+"Seconds",2);case e:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var c,l=g.p(s),f="set"+(this.$u?"UTC":""),d=((c={}).day=f+"Date",c[o]=f+"Date",c[i]=f+"Month",c[u]=f+"FullYear",c[n]=f+"Hours",c[r]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],h="day"===l?this.$D+(a-this.$W):a;if(l===i||l===u){var m=this.clone().set(o,1);m.$d[d](h),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,a){var o,c=this;t=Number(t);var l=g.p(a),f=function(e){var r=$(c);return g.w(r.date(r.date()+Math.round(e*t)),c)};if(l===i)return this.set(i,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return f(1);if(l===s)return f(7);var d=((o={})[r]=6e4,o[n]=36e5,o[e]=1e3,o)[l]||1,h=this.$d.getTime()+t*d;return g.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),i=this.$H,a=this.$m,u=this.$M,o=r.weekdays,l=r.months,d=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},m=function(t){return g.s(i%12||12,t,"0")},p=d||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return g.s(e.$y,4,"0");case"M":return u+1;case"MM":return g.s(u+1,2,"0");case"MMM":return h(r.monthsShort,u,l,3);case"MMMM":return h(l,u);case"D":return e.$D;case"DD":return g.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return g.s(a,2,"0");case"s":return String(e.$s);case"ss":return g.s(e.$s,2,"0");case"SSS":return g.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,o,c){var l,f=this,d=g.p(o),h=$(t),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,v=function(){return g.m(f,h)};switch(d){case u:l=v()/12;break;case i:l=v();break;case a:l=v()/3;break;case s:l=(p-m)/6048e5;break;case"day":l=(p-m)/864e5;break;case n:l=p/36e5;break;case r:l=p/6e4;break;case e:l=p/1e3;break;default:l=p}return c?l:g.a(l)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=y(t,e,!0);return n&&(r.$L=n),r},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),b=x.prototype;return $.prototype=b,[["$ms",t],["$s",e],["$m",r],["$H",n],["$W","day"],["$M",i],["$y",u],["$D",o]].forEach(function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),$.extend=function(t,e){return t.$i||(t(e,x,$),t.$i=!0),$},$.locale=y,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=m[h],$.Ls=m,$.p={},$},t.exports=e()},60908:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/PostDetail/components/PostComments",function(){return r(82683)}])},41862:function(t,e,r){"use strict";r.r(e);var n=r(85893),s=r(39649),i=r(76176),a=r(27484),u=r.n(a),o=r(98388);e.default=t=>{var e,r;let{comment:a}=t;return a?(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"mt-2 mr-3 size-[50px] min-w-[50px]",children:(0,n.jsx)(s.Z,{src:null==a?void 0:null===(e=a.user)||void 0===e?void 0:e.photoURL,className:"size-full"})}),(0,n.jsxs)("div",{className:"flex flex-col w-[calc(100%_-_62px)]",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(i.Z,{component:"strong",className:"font-semibold !text-[13px]",children:(null==a?void 0:null===(r=a.user)||void 0===r?void 0:r.displayName)||"Anomyous"}),(0,n.jsxs)(i.Z,{component:"p",className:"font-semibold !text-[12px] !text-gray ml-1",children:["write in"," ",u()(a.createAt.toDate()).format("DD-MM-YYYY HH:mm:ss")]})]}),(0,n.jsx)("div",{className:(0,o.m6)("break-all max-w-full","whitespace-pre-wrap w-max mt-2 outline-none rounded-[5px] p-[10px] resize-none dark border-[1px] border-solid border-primary","dark:bg-[rgba(0,0,0,0.15)] dark:border-dark-primary","dark:text-text-color-dark"),children:a.content})]})]}):null}},82683:function(t,e,r){"use strict";r.r(e),r.d(e,{POST_COMMENT_ID:function(){return m},default:function(){return p}});var n=r(85893),s=r(41731),i=r(39828),a=r(67294),u=r(19809),o=r(41862),c=r(76176),l=r(98388),f=r(49113),d=t=>{let{size:e,className:r}=t;return(0,n.jsx)("div",{className:(0,l.m6)("flex justify-center items-center",r),children:(0,n.jsx)(f.Qj,{className:(0,l.m6)("animate-spin text-text-color-dark","sm"===e&&"size-4","md"===e&&"size-6","lg"===e&&"size-12"),style:{animationDuration:.25}})})},h=r(38029);let m="post-comment";var p=t=>{let{postId:e}=t,[r,l]=(0,a.useState)(!1),[f,p]=(0,a.useState)(!1),[v,y]=(0,a.useState)(0),[$,g]=(0,a.useState)([]);return console.log($),(0,a.useLayoutEffect)(()=>{(async()=>{p(!0);let t=await s.Pe.getAll([(0,i.ar)("postId","==",e)]);g(await Promise.all(t.docs.map(async t=>{let e=t.data(),r=(await (0,i.QT)(e.user)).data();return{...e,user:r}}))),p(!1)})()},[e]),(0,n.jsx)("section",{id:m,className:"flex flex-col mb-16 mt-12",children:f?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d,{size:"lg",className:"w-full h-full my-6"})}):(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)(c.Z,{component:"h2",className:"!text-[1.375rem] mb-8 font-bold",children:[$.length," comments"]})}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[$.slice(0,(v+1)*2).map(t=>(0,n.jsx)("div",{children:(0,n.jsx)(o.default,{comment:t})},t.id)),(v+1)*2<$.length&&!r&&(0,n.jsx)("div",{className:"flex justify-center mt-4",children:(0,n.jsx)(h.Z,{variant:"primary",size:"sm",onClick:()=>{l(!0),setTimeout(()=>{y(v+1),l(!1)},1e3)},children:"Load more"})}),r&&(0,n.jsx)(d,{size:"md",className:"mt-4"})]}),(0,n.jsx)("section",{className:"mt-12",children:(0,n.jsx)(u.default,{postId:e,handleAddCommentSucceed:t=>{g(e=>[t,...e])}})})]})})}},41150:function(t,e,r){"use strict";r.d(e,{w_:function(){return l}});var n=r(67294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(s),a=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){var n,s;n=e,s=r[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(n))in t?Object.defineProperty(t,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t){return e=>n.createElement(f,u({attr:c({},t.attr)},e),function t(e){return e&&e.map((e,r)=>n.createElement(e.tag,c({key:r},e.attr),t(e.child)))}(t.child))}function f(t){var e=e=>{var r,{attr:s,size:i,title:o}=t,l=function(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}(t,a),f=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,s,l,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),t.children)};return void 0!==i?n.createElement(i.Consumer,null,t=>e(t)):e(s)}}},function(t){t.O(0,[2016,1890,509,8388,2915,2137,9809,2888,9774,179],function(){return t(t.s=60908)}),_N_E=t.O()}]);