(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4024],{59145:function(e,t,r){Promise.resolve().then(r.bind(r,94568))},62737:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",s="week",a="month",i="quarter",o="year",c="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var p="$isDayjsObject",x=function(e){return e instanceof M||!(!e||!e[p])},v=function e(t,r,n){var s;if(!t)return h;if("string"==typeof t){var a=t.toLowerCase();m[a]&&(s=a),r&&(m[a]=r,s=a);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var o=t.name;m[o]=t,s=o}return!n&&s&&(h=s),s||!n&&h},g=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new M(r)},y={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,a),i=r-s<0,o=t.clone().add(n+(i?-1:1),a);return+(-(n+(r-s)/(i?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:a,y:o,w:s,d:"day",D:c,h:n,m:r,s:t,ms:e,Q:i})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=v,y.i=x,y.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function f(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(u);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var r=g(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return g(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<g(e)},h.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,i){var l=this,u=!!y.u(i)||i,d=y.p(e),f=function(e,t){var r=y.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},h=function(e,t){return y.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,p=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case o:return u?f(1,0):f(31,11);case a:return u?f(1,p):f(0,p+1);case s:var g=this.$locale().weekStart||0,M=(m<g?m+7:m)-g;return f(u?x-M:x+(6-M),p);case"day":case c:return h(v+"Hours",0);case n:return h(v+"Minutes",1);case r:return h(v+"Seconds",2);case t:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(s,i){var l,u=y.p(s),d="set"+(this.$u?"UTC":""),f=((l={}).day=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[o]=d+"FullYear",l[n]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[u],h="day"===u?this.$D+(i-this.$W):i;if(u===a||u===o){var m=this.clone().set(c,1);m.$d[f](h),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,i){var c,l=this;e=Number(e);var u=y.p(i),d=function(t){var r=g(l);return y.w(r.date(r.date()+Math.round(t*e)),l)};if(u===a)return this.set(a,this.$M+e);if(u===o)return this.set(o,this.$y+e);if("day"===u)return d(1);if(u===s)return d(7);var f=((c={})[r]=6e4,c[n]=36e5,c[t]=1e3,c)[u]||1,h=this.$d.getTime()+e*f;return y.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),a=this.$H,i=this.$m,o=this.$M,c=r.weekdays,u=r.months,f=r.meridiem,h=function(e,r,s,a){return e&&(e[r]||e(t,n))||s[r].slice(0,a)},m=function(e){return y.s(a%12||12,e,"0")},p=f||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(d,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return o+1;case"MM":return y.s(o+1,2,"0");case"MMM":return h(r.monthsShort,o,u,3);case"MMMM":return h(u,o);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(r.weekdaysMin,t.$W,c,2);case"ddd":return h(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(a);case"HH":return y.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(a,i,!0);case"A":return p(a,i,!1);case"m":return String(i);case"mm":return y.s(i,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,c,l){var u,d=this,f=y.p(c),h=g(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,x=function(){return y.m(d,h)};switch(f){case o:u=x()/12;break;case a:u=x();break;case i:u=x()/3;break;case s:u=(p-m)/6048e5;break;case"day":u=(p-m)/864e5;break;case n:u=p/36e5;break;case r:u=p/6e4;break;case t:u=p/1e3;break;default:u=p}return l?u:y.a(u)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=v(e,t,!0);return n&&(r.$L=n),r},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),$=M.prototype;return g.prototype=$,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,M,g),e.$i=!0),g},g.locale=v,g.isDayjs=x,g.unix=function(e){return g(1e3*e)},g.en=m[h],g.Ls=m,g.p={},g},e.exports=t()},7905:function(e){var t;t=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},i=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e||"Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],l=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var s=1;s<=24;s+=1)if(e.indexOf(n(s,0,t))>-1){r=s>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[s,function(e){this.afternoon=u(e,!1)}],a:[s,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[r,o("day")],Do:[s,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[r,o("month")],MMM:[s,function(e){var t=l("months"),r=(l("monthsShort")||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(r<1)throw Error();this.month=r%12||r}],MMMM:[s,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,o("year")],YY:[r,function(e){this.year=i(e)}],YYYY:[/\d{4}/,o("year")],Z:c,ZZ:c};return function(r,n,s){s.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(i=r.parseTwoDigitYear);var o=n.prototype,c=o.parse;o.parse=function(r){var n=r.date,i=r.utc,o=r.args;this.$u=i;var l=o[1];if("string"==typeof l){var u=!0===o[2],f=!0===o[3],h=o[2];f&&(h=o[2]),a=this.$locale(),!u&&h&&(a=s.Ls[h]),this.$d=function(r,n,s){try{if(["x","X"].indexOf(n)>-1)return new Date(("X"===n?1e3:1)*r);var i=(function(r){var n,s;n=r,s=a&&a.formats;for(var i=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,r,n){var a=n&&n.toUpperCase();return r||s[n]||e[n]||s[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,r){return t||r.slice(1)})})).match(t),o=i.length,c=0;c<o;c+=1){var l=i[c],u=d[l],f=u&&u[0],h=u&&u[1];i[c]=h?{regex:f,parser:h}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<o;r+=1){var s=i[r];if("string"==typeof s)n+=s.length;else{var a=s.regex,c=s.parser,l=e.slice(n),u=a.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}})(n)(r),o=i.year,c=i.month,l=i.day,u=i.hours,f=i.minutes,h=i.seconds,m=i.milliseconds,p=i.zone,x=new Date,v=l||(o||c?1:x.getDate()),g=o||x.getFullYear(),y=0;o&&!c||(y=c>0?c-1:x.getMonth());var M=u||0,$=f||0,b=h||0,w=m||0;return p?new Date(Date.UTC(g,y,v,M,$,b,w+60*p.offset*1e3)):s?new Date(Date.UTC(g,y,v,M,$,b,w)):new Date(g,y,v,M,$,b,w)}catch(e){return new Date("")}}(n,l,i),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),(u||f)&&n!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,p=1;p<=m;p+=1){o[1]=l[p-1];var x=s.apply(this,o);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}p===m&&(this.$d=new Date(""))}else c.call(this,r)}}},e.exports=t()},78322:function(e){var t;t=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,r,n){var s=r.prototype,a=s.format;n.en.formats=e,s.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var r,n,s=this.$locale().formats,i=(r=t,n=void 0===s?{}:s,r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,r,s){var a=s&&s.toUpperCase();return r||n[s]||e[s]||n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,r){return t||r.slice(1)})}));return a.call(this,i)}}},e.exports=t()},37830:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,a={};function i(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}function o(){}function c(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=i.prototype;var l=c.prototype=new o;l.constructor=c,s(l,i.prototype),l.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var s,a={},i=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)u.call(t,s)&&!d.hasOwnProperty(s)&&(a[s]=t[s]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===a[s]&&(a[s]=c[s]);return{$$typeof:r,type:e,key:i,ref:o,props:a,_owner:null}}},4410:function(e,t,r){"use strict";e.exports=r(37830)},63652:function(e,t,r){"use strict";var n=r(57437),s=r(96164);t.Z=e=>{let{className:t,children:r}=e;return(0,n.jsx)("section",{className:(0,s.m6)("max-w-full xl:max-w-[1200px] px-[16px] md:px-[40px] mx-auto",t),children:r})}},579:function(e,t,r){"use strict";var n=r(57437),s=r(96164);t.Z=e=>{let{className:t}=e;return(0,n.jsx)("hr",{className:(0,s.m6)("w-full border-b-2 rounded-sm border-primary dark:border-dark-primary outline-none",t)})}},12738:function(e,t,r){"use strict";var n=r(57437),s=r(39392),a=r(2265),i=r(96164);t.Z=e=>{let{src:t,className:r,vertical:o,imgClassName:c,...l}=e,u=(0,a.useMemo)(()=>(0,s.M)(t||""),[t]);return(0,n.jsx)("div",{className:(0,i.m6)("w-full",!o&&"aspect-[16/9]",r),style:{borderRadius:"5px",overflow:"hidden"},children:(0,n.jsx)("img",{className:(0,i.m6)("w-full h-full",c),style:{objectFit:"cover",borderRadius:"5px",overflow:"hidden"},src:u,alt:"full-size-image",...l})})}},39665:function(e,t,r){"use strict";var n=r(57437);r(2265);var s=r(12738),a=r(86727),i=r(87138),o=r(41942),c=r(62737),l=r.n(c);t.Z=e=>{let{post:t}=e;return(0,n.jsx)(i.default,{href:"/post/".concat(t.id),children:(0,n.jsxs)("div",{className:"w-full group/card ",children:[(0,n.jsx)(s.Z,{src:t.metadata.image,className:"!rounded-[16px]",imgClassName:"group-hover/card:scale-[1.2] transition-all duration-500 group-hover/card:grayscale-[0.5]"}),(0,n.jsxs)("div",{className:"flex items-center mt-3",children:[(0,n.jsx)(o.IiJ,{className:"size-[16px] !text-gray-light dark:!text-gray"}),(0,n.jsx)(a.Z,{className:"ml-2 !text-gray-light dark:!text-gray !text-[0.8rem] lg!text-[0.875rem] font-semibold",children:l()(t.metadata.date,"DD-MM-YYYY").format("LL")})]}),(0,n.jsx)(a.Z,{className:"my-2 font-bold text-[1.2rem] lg:text-[1.5rem] overflow-hidden group-hover/card:underline",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.title}),(0,n.jsx)(a.Z,{className:"text-[0.875rem] lg:text-[1rem] !text-gray-light dark:!text-gray overflow-hidden font-medium",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.description})]})})}},48330:function(e,t,r){"use strict";r.d(t,{f:function(){return f}});var n=r(57437),s=r(2265),a=r(7905),i=r.n(a),o=r(78322),c=r.n(o),l=r(62737),u=r.n(l);u().extend(c()),u().extend(i());let d=s.createContext({posts:[],tags:[]}),f=()=>(0,s.useContext)(d);t.default=e=>{let{posts:t,children:r}=e,a=(0,s.useMemo)(()=>t.sort((e,t)=>u()(t.metadata.date,"DD-MM-YYYY").toDate().getTime()-u()(e.metadata.date,"DD-MM-YYYY").toDate().getTime()),[t]),i=(0,s.useMemo)(()=>t.reduce((e,t)=>(t.metadata.tags.forEach(t=>{e.add(t)}),e),new Set),[t]);return(0,n.jsx)(d.Provider,{value:{posts:a,tags:Array.from(i)},children:r})}},94568:function(e,t,r){"use strict";r.d(t,{default:function(){return y}});var n=r(57437),s=r(63652),a=r(86727),i=r(87138),o=r(41942),c=r(92867),l=r(24272);r(97491);var u=r(17847),d=()=>(0,n.jsxs)("section",{className:"grid grid-cols-12 gap-4 lg:gap-8",children:[(0,n.jsxs)("div",{className:"col-span-12 lg:col-span-6 flex flex-col",children:[(0,n.jsxs)(a.Z,{component:"h1",className:"!text-[2rem] lg:!text-[3.2rem] !font-bold",children:["Hey, there"," ",(0,n.jsx)("span",{className:"inline-block w-max animate-waving-hand",children:"\uD83D\uDC4B"}),(0,n.jsx)("br",{}),"I’m",(0,n.jsx)("span",{className:"ml-[0.5rem] text-secondary dark:text-secondary-dark",children:"Hoang Duc Huy \uD83D\uDE80"})]}),(0,n.jsx)(a.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:"I’m a Software Engineer and Technical Writer with over 3 years experience working with several companies to write technical articles that pushes the product of the company."}),(0,n.jsx)(a.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:"I’m a fullstack developer. I have approximately 4.5 years of experience in frontend developer and 2 years of experience in backend developer."}),(0,n.jsxs)(a.Z,{component:"p",className:"lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]",children:["I currenty work at"," ",(0,n.jsx)(i.default,{href:"/",className:"text-secondary dark:text-secondary-dark hover:underline",children:"VMO"}),", as a Technical Editor where I write content, review content, curate ideas that contribute to the growth of the company."]}),(0,n.jsxs)("div",{className:"flex justify-center gap-[16px]",children:[(0,n.jsx)(l.xg,{className:"w-[64px] h-[64px]"}),(0,n.jsx)(o.huN,{className:"text-[#61dafb] w-[64px] h-[64px]"}),(0,n.jsx)(c.Z,{className:"w-[64px] h-[64px]"}),(0,n.jsx)(l.N1,{className:"w-[64px] h-[64px]"}),(0,n.jsx)(l.LT,{className:"w-[64px] h-[64px]"}),(0,n.jsx)(l.EI,{className:"w-[64px] h-[64px]"}),(0,n.jsx)(l.z4,{className:"w-[64px] h-[64px]"})]})]}),(0,n.jsx)("div",{className:"col-span-12 lg:col-span-6 flex justify-end",children:(0,n.jsx)(u.E.img,{src:"/duc-huy-hoang-blog-v2/_next/static/media/avatar.0563fb36.png",className:"self-image object-cover object-top rounded-[20px] w-[100%] lg:w-[90%]",style:{aspectRatio:1},alt:"self",initial:{clipPath:"circle(0% at 0 0)"},whileInView:{clipPath:"circle(200% at 0 0)"},transition:{duration:3}})})]}),f=r(579),h=r(12738),m=e=>{let{featurePost:t,posts:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(a.Z,{className:"text-[1.5rem] font-bold",children:"Featured Posts"}),(0,n.jsxs)("section",{className:"mt-4 grid grid-cols-12 lg:gap-5",children:[(0,n.jsx)("div",{className:"col-span-12 lg:col-span-8 flex flex-col",children:t&&(0,n.jsx)(i.default,{href:"/post/".concat(null==t?void 0:t.id),children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(h.Z,{src:t.metadata.image,className:"!rounded-[20px]"}),(0,n.jsx)(a.Z,{component:"h1",className:"font-bold text-[1.8rem] lg:text-[2.5rem] lg:my-4 leading-[52px]",children:t.metadata.title}),(0,n.jsx)(a.Z,{className:"mb-4 font-bold text-[1rem] lg:text-[1.125rem] !text-gray-light dark:!text-gray overflow-hidden",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.metadata.description})]})})}),(0,n.jsx)("div",{className:"col-span-12 lg:col-span-4 flex flex-col",children:(r||[]).map((e,t)=>(0,n.jsx)(i.default,{href:"/post/".concat(e.id),children:(0,n.jsxs)("div",{className:"grid grid-cols-12",style:{...t<r.length-1&&{marginBottom:"32px"}},children:[(0,n.jsx)("div",{className:"col-span-5",children:(0,n.jsx)(h.Z,{src:e.metadata.image})}),(0,n.jsx)("div",{className:"col-span-7 ml-4 flex flex-col",children:(0,n.jsx)(a.Z,{className:"text-[1rem] font-bold overflow-hidden mt-[2px]",style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:e.metadata.title})})]})},"main_post_".concat(e.id)))})]})]})})},p=r(48330),x=r(2265),v=r(39665),g=e=>{let{posts:t}=e,[r,s]=(0,x.useState)(0);return(0,n.jsxs)("section",{className:"flex flex-col",children:[(0,n.jsx)(a.Z,{component:"h4",className:"text-[1.5rem] font-bold mb-4",children:"Most posts"}),(0,n.jsx)("div",{className:"grid grid-cols-12 gap-6",children:(t||[]).map(e=>(0,n.jsx)("div",{className:"col-span-12 lg:col-span-4",children:(0,n.jsx)(v.Z,{post:e})},e.id))})]})},y=()=>{let{posts:e}=(0,p.f)(),t=(0,x.useMemo)(()=>e.filter(e=>e.metadata.isFeature)[0],[e]),r=(0,x.useMemo)(()=>e.filter(e=>e.metadata.isFeature&&e.id!==(null==t?void 0:t.id)).slice(0,5),[e,t]),a=(0,x.useMemo)(()=>e.filter(e=>e.id!==(null==t?void 0:t.id)&&!r.find(t=>t.id===e.id)),[e,t,r]);return(0,n.jsxs)(s.Z,{className:"flex flex-col pb-8",children:[(0,n.jsx)(d,{}),(0,n.jsx)(f.Z,{className:"mt-6 mb-3 lg:my-[3rem]"}),(0,n.jsx)(m,{featurePost:t,posts:r}),(0,n.jsx)(f.Z,{className:"mt-6 mb-3 lg:my-[3rem]"}),(0,n.jsx)("div",{className:"lg:mt-4",children:(0,n.jsx)(g,{posts:a})})]})}},39392:function(e,t,r){"use strict";r.d(t,{M:function(){return n}});let n=e=>e.startsWith("https://")||e.startsWith("http://")?e:"".concat("/duc-huy-hoang-blog-v2","/").concat(e).replace("//","/")},97491:function(){}},function(e){e.O(0,[2941,7699,7825,231,5030,8424,2971,7023,1744],function(){return e(e.s=59145)}),_N_E=e.O()}]);