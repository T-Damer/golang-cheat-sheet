(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),u=n("O40h"),c=n("doui"),i=n("q1tI"),s=n.n(i),o=n("apO0"),l=n("yWC8"),m=n("/+cc"),p=n.n(m),d=n("Jzln"),f=n("/MKj"),w=n("KOzM"),b=function(e){var t=Object(i.useState)(e.items),n=Object(c.default)(t,2),a=n[0],r=(n[1],new p.a(a,d.a));return s.a.createElement(o.a,null,s.a.createElement("input",{autoFocus:!0,type:"text",className:"input is-info",placeholder:"Type here...",onChange:function(t){return n=t.target.value,void e.searchMarkdownJson(r,a,n);var n}}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"columns is-multiline"},e.items.map(function(e,t){return s.a.createElement("div",{className:"column is-12",key:t},s.a.createElement(l.a,{item:e}))})))};b.getInitialProps=function(){var e=Object(u.default)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch(Object(w.a)("Golang"));case 2:return n=e.sent,a=n.items,e.abrupt("return",{items:a});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var h={searchMarkdownJson:w.b};t.default=Object(f.b)(function(e){return{items:e.markdownReducer.items}},h)(b)}},[["/EDR",1,0]]]);