(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{257:function(t,e,n){"use strict";n.r(e);var r=n(34),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar is-light",attrs:{role:"navigation","aria-label":"main navigation"}},[this._m(0),this._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[e("div",{staticClass:"navbar-start"},[e("a",{staticClass:"navbar-item"},[this._v("勤怠くん")]),this._v(" "),e("NuxtLink",{staticClass:"navbar-item",attrs:{to:"/timestamp"}},[this._v("打刻")]),this._v(" "),e("NuxtLink",{staticClass:"navbar-item",attrs:{to:"/works"}},[this._v("一覧")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])])}],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";var r=n(3),c=n(259).start;r({target:"String",proto:!0,forced:n(260)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},259:function(t,e,n){var r=n(16),c=n(176),o=n(18),l=Math.ceil,d=function(t){return function(e,n,d){var v,m,j=String(o(e)),h=j.length,O=void 0===d?" ":String(d),f=r(n);return f<=h||""==O?j:(v=f-h,(m=c.call(O,l(v/O.length))).length>v&&(m=m.slice(0,v)),t?j+m:m+j)}};t.exports={start:d(!1),end:d(!0)}},260:function(t,e,n){var r=n(86);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(4),c=n(2);function o(t,e){Object(c.a)(2,arguments);var n=Object(r.a)(t),o=Object(r.a)(e),l=n.getFullYear()-o.getFullYear(),d=n.getMonth()-o.getMonth();return 12*l+d}},312:function(t,e,n){"use strict";n.r(e);n(47);var r=n(28),c=n(41),o=Object(r.defineComponent)({setup:function(){var t=0,e=Object(r.reactive)({clock:Object(c.a)(new Date,"H:mm:ss")}),n=function(){t=setInterval((function(){var t;t=new Date,e.clock=Object(c.a)(t,"H:mm:ss")}))};return Object(r.onMounted)((function(){n()})),Object(r.onUnmounted)((function(){clearInterval(t)})),{state:e}}}),l=n(34),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.state.clock))])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);n(84),n(17),n(59),n(258);var r=n(28),c=n(89),o=n(41),l=n(4),d=n(2);function v(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e),c=n.getTime()-r.getTime();return c<0?-1:c>0?1:c}function m(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e);return n.getFullYear()-r.getFullYear()}function j(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e),c=v(n,r),o=Math.abs(m(n,r));n.setFullYear("1584"),r.setFullYear("1584");var j=v(n,r)===-c,h=c*(o-j);return 0===h?0:h}var h=n(261);function O(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e),c=v(n,r),o=Math.abs(Object(h.a)(n,r));n.setMonth(n.getMonth()-c*o);var m=v(n,r)===-c,j=c*(o-m);return 0===j?0:j}var f=n(162);function C(t){Object(d.a)(1,arguments);var e=Object(l.a)(t);return e.setHours(0,0,0,0),e}function _(t,e){Object(d.a)(2,arguments);var n=C(t),r=C(e),c=n.getTime()-Object(f.a)(n),o=r.getTime()-Object(f.a)(r);return Math.round((c-o)/864e5)}function M(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function w(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e),c=M(n,r),o=Math.abs(_(n,r));n.setDate(n.getDate()-c*o);var v=M(n,r)===-c,m=c*(o-v);return 0===m?0:m}function S(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(l.a)(e);return n.getTime()-r.getTime()}function k(t,e){Object(d.a)(2,arguments);var n=S(t,e)/36e5;return n>0?Math.floor(n):Math.ceil(n)}function A(t,e){Object(d.a)(2,arguments);var n=S(t,e)/6e4;return n>0?Math.floor(n):Math.ceil(n)}function y(t,e){Object(d.a)(2,arguments);var n=S(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var D=n(161),E=n(8);function x(t,e){Object(d.a)(2,arguments);var n=Object(l.a)(t),r=Object(E.a)(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function T(t,e){Object(d.a)(2,arguments);var n=Object(E.a)(e);return x(t,-n)}var N=n(125);function sub(t,e){if(Object(d.a)(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var n="years"in e?Object(E.a)(e.years):0,r="months"in e?Object(E.a)(e.months):0,c="weeks"in e?Object(E.a)(e.weeks):0,o="days"in e?Object(E.a)(e.days):0,v="hours"in e?Object(E.a)(e.hours):0,m="minutes"in e?Object(E.a)(e.minutes):0,j="seconds"in e?Object(E.a)(e.seconds):0,h=Object(N.a)(Object(l.a)(t),r+12*n),O=T(h,o+7*c),f=m+60*v,C=j+60*f,_=1e3*C,M=new Date(O.getTime()-_);return M}var H=Object(r.defineComponent)({setup:function(){var t=Object(o.a)(new Date,"yyyy-MM-dd"),e=Object(o.a)(new Date,"y年M月dd日"),n=Object(r.inject)(c.a);if(!n)throw new Error("".concat(c.a," is not provided"));var m=Object(r.computed)((function(){var e=n.getKintaiCalendarState(t);return e.startAt?Object(o.a)(e.startAt,"H:mm"):null})),h=Object(r.computed)((function(){var e=n.getKintaiCalendarState(t);return e.endAt?Object(o.a)(e.endAt,"H:mm"):null})),f=Object(r.computed)((function(){var e,r=n.getKintaiCalendarState(t);return r.duration?"".concat(r.duration.hours,":").concat(null===(e=r.duration.minutes)||void 0===e?void 0:e.toString().padStart(2,"0")):null})),C=Object(r.computed)((function(){return!!n.getKintaiCalendarState(t).startAt})),_=Object(r.computed)((function(){var e=n.getKintaiCalendarState(t);return!e.startAt||!!e.endAt}));return{state:n,todayJp:e,onClickStartTime:function(){var e=n.getKintaiCalendarState(t),r=new Date;e.startAt=r,e.startString=Object(o.a)(r,"H:mm"),n.setKintaiCalendarState(t,e)},onClickEndTime:function(){var e=n.getKintaiCalendarState(t),r=new Date;e.endAt=r,e.endString=Object(o.a)(r,"H:mm"),e.startAt&&e.endAt&&(e.duration=function(t){var e=t.start,n=t.end;Object(d.a)(1,arguments);var r=Object(l.a)(e),c=Object(l.a)(n);if(!Object(D.a)(r))throw new RangeError("Start Date is invalid");if(!Object(D.a)(c))throw new RangeError("End Date is invalid");var o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},m=v(r,c);o.years=Math.abs(j(r,c));var h=sub(r,{years:m*o.years});o.months=Math.abs(O(h,c));var f=sub(h,{months:m*o.months});o.days=Math.abs(w(f,c));var C=sub(f,{days:m*o.days});o.hours=Math.abs(k(C,c));var _=sub(C,{hours:m*o.hours});o.minutes=Math.abs(A(_,c));var M=sub(_,{minutes:m*o.minutes});return o.seconds=Math.abs(y(M,c)),o}({start:e.startAt,end:e.endAt})),n.setKintaiCalendarState(t,e)},startAt:m,endAt:h,workingTime:f,disabledStartAtButton:C,disabledEndAtButton:_}}}),K=n(34),component=Object(K.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"columns mt-5"},[n("div",{staticClass:"column has-text-left"}),t._v(" "),n("div",{staticClass:"column has-text-centered"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("p",{staticClass:"subtitle mt-4"},[t._v(t._s(t.todayJp))]),t._v(" "),n("p",{staticClass:"title mt-4"},[n("Clock")],1),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"mt-4"},[t._v("出 勤 "+t._s(t.startAt))]),t._v(" "),n("p",{staticClass:"mt-4"},[t._v("退 勤 "+t._s(t.endAt))]),t._v(" "),n("p",{staticClass:"mt-4"},[t._v("時 間 "+t._s(t.workingTime))]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control mt-4"},[n("button",{staticClass:"button is-link",attrs:{disabled:t.disabledStartAtButton},on:{click:t.onClickStartTime}},[t._v("出　勤")])]),t._v(" "),n("div",{staticClass:"control mt-4 mb-4"},[n("button",{staticClass:"button is-link is-light",attrs:{disabled:t.disabledEndAtButton},on:{click:t.onClickEndTime}},[t._v("退　勤")])])])])])])]),t._v(" "),n("div",{staticClass:"column has-text-right"})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(257).default,Clock:n(312).default})}}]);