(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a(450),o=a(462),m=a(453);t.default=function(){var e=Object(r.default)().siteConfig,t=Object(m.useVersions)(),a=Object(m.useLatestVersion)(),n=t.find((function(e){return"current"===e.name})),s=t.filter((function(e){return e!==a&&"current"!==e.name})),u="https://github.com/"+e.organizationName+"/"+e.projectName;return l.a.createElement(o.a,{title:"Versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.a.createElement("main",{className:"container margin-vert--lg"},l.a.createElement("h1",null,"Docusaurus documentation versions"),a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Current version (Stable)"),l.a.createElement("p",null,"Here you can find the documentation for current released version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,a.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:a.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:u+"/releases/tag/v"+a.name},"Release Notes")))))),n!==a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:n.path},"Documentation")))))),s.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),l.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),l.a.createElement("table",null,l.a.createElement("tbody",null,s.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("th",null,e.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:e.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:u+"/releases/tag/v"+e.name},"Release Notes")))})))))))}}}]);