(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{g9hB:function(e,t,n){"use strict";n.r(t);var a=n("MUpH"),l=n("q1tI"),r=n.n(l),c=n("5SEd"),u=n("Bl7J");function i(){var e=Object(a.a)(["\n  width: 150px;\n"]);return i=function(){return e},e}function m(){var e=Object(a.a)(["\n  width: 100%;\n  td {\n    border-top: 1px solid black;\n    &.no-border {\n      border-top: none;\n    }\n  }\n  ul {\n    list-style-type: none;\n    li {\n      display: inline-block;\n      margin-right: 1rem;\n    }\n    a {\n      color: black;\n    }\n  }\n"]);return m=function(){return e},e}var o=["primary","secondary","tertiary","quaternary","quinary"],s=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},p=c.a.table(m());c.a.td(i());t.default=function(e){var t=e.pageContext,n={};return t.screenshots.forEach((function(e){void 0===n[e.date]&&(n[e.date]={date:e.date,types:{}}),void 0===n[e.date].types[e.type]&&(n[e.date].types[e.type]=[]),n[e.date].types[e.type].push(e)})),Object.keys(n).forEach((function(e){n[e].types=Object.values(n[e].types).sort((function(e,t){var n=e[0].type,a=t[0].type;return-1===o.indexOf(n)?1:o.indexOf(n)<o.indexOf(a)?-1:1}))})),r.a.createElement(u.a,null,r.a.createElement("h2",null,t.state.name),r.a.createElement("p",null,r.a.createElement("a",{href:"https://covidtracking.com/data/state/"+t.state.slug},"View state information")),t.links&&r.a.createElement("ul",null,t.state.twitter&&r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"+t.state.twitter},"Official Twitter account")),t.links.childTacoYaml.links.map((function(e){return r.a.createElement("li",null,r.a.createElement("strong",null,e.name.charAt(0).toUpperCase()+e.name.slice(1),":")," ",e.url.search("http")>0?r.a.createElement(r.a.Fragment,null,"We dynamically generate the URL, based on this pattern:",r.a.createElement("br",null),r.a.createElement("code",null,e.url)):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e.url,target:"_blank"},e.url)))}))),r.a.createElement(p,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Source"),r.a.createElement("th",null,"Screenshots"))),r.a.createElement("tbody",null,Object.values(n).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,e.date)),r.a.createElement("td",null,s(e.types[0][0].type)),r.a.createElement("td",null,r.a.createElement("ul",null,e.types[0].map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.time))}))))),e.types.splice(1,e.types.length).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"no-border"}),r.a.createElement("td",null,s(e[0].type.replace(":"," ").replace(" source","")),e[0].isManual&&r.a.createElement(r.a.Fragment,null," (manual)")),r.a.createElement("td",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.time))})))))})))})))))}}}]);
//# sourceMappingURL=component---src-templates-state-js-7bf3f2fcd3ba4c3f87a2.js.map