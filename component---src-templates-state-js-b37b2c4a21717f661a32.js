(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{g9hB:function(e,t,a){"use strict";a.r(t);var n=a("MUpH"),l=a("q1tI"),r=a.n(l),c=a("5SEd"),u=a("Bl7J");function i(){var e=Object(n.a)(["\n  width: 150px;\n"]);return i=function(){return e},e}function m(){var e=Object(n.a)(["\n  width: 100%;\n  tr {\n    border-bottom: 1px solid black;\n  }\n  ul {\n    list-style-type: none;\n    li {\n      display: inline-block;\n      margin-right: 1rem;\n    }\n    a {\n      color: black;\n    }\n  }\n"]);return m=function(){return e},e}var o=c.a.table(m()),d=c.a.td(i());t.default=function(e){var t=e.pageContext,a={};return t.screenshots.forEach((function(e){void 0===a[e.date]&&(a[e.date]={date:e.date,primary:[],secondary:[],tertiary:[]}),e.tertiary?a[e.date].tertiary.push(e):e.secondary?a[e.date].secondary.push(e):a[e.date].primary.push(e)})),r.a.createElement(u.a,{title:t.state.name},r.a.createElement("p",null,r.a.createElement("a",{href:"https://covidtracking.com/data/state/"+t.state.slug},"View state information")),t.links&&r.a.createElement("ul",null,t.links.childTacoYaml.links.map((function(e){return r.a.createElement("li",null,r.a.createElement("strong",null,e.name.charAt(0).toUpperCase()+e.name.slice(1),":")," ",r.a.createElement("a",{href:e.url,target:"_blank"},e.url))}))),r.a.createElement(o,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Primary"),r.a.createElement("th",null,"Secondary"),r.a.createElement("th",null,"Tertiary"))),r.a.createElement("tbody",null,Object.values(a).map((function(e){return r.a.createElement("tr",null,r.a.createElement(d,null,e.date),r.a.createElement("td",null,r.a.createElement("ul",null,e.primary.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.time))})))),r.a.createElement("td",null,r.a.createElement("ul",null,e.secondary.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.time))})))),r.a.createElement("td",null,r.a.createElement("ul",null,e.tertiary.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.time))})))))})))))}}}]);
//# sourceMappingURL=component---src-templates-state-js-b37b2c4a21717f661a32.js.map