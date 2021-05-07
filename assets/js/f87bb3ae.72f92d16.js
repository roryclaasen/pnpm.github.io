(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(318)),o={id:"audit",title:"pnpm audit"},l={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/docs/cli/audit.md",slug:"/cli/audit",permalink:"/next/cli/audit",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/cli/audit.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1620427642,formattedLastUpdatedAt:"5/7/2021",sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/next/cli/install-test"},next:{title:"pnpm list",permalink:"/next/cli/list"}},c=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Added in: 4.3.0"),Object(a.b)("p",null,"Checks for known security issues with the installed packages."),Object(a.b)("p",null,"If security issues are found, try to update your dependencies via ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm update"),".\nIf a simple update does not fix all the issues, use ",Object(a.b)("a",{parentName:"p",href:"/next/package_json#pnpmoverrides"},"overrides")," to force\nversions that are not vulnerable. For instance, if ",Object(a.b)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable,\nuse this overrides to force ",Object(a.b)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"low"),", ",Object(a.b)("strong",{parentName:"li"},"moderate"),", ",Object(a.b)("strong",{parentName:"li"},"high"),", ",Object(a.b)("strong",{parentName:"li"},"critical")),Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"low"))),Object(a.b)("p",null,"Only print advisories with severity greater than or equal to ",Object(a.b)("inlineCode",{parentName:"p"},"<severity>"),"."),Object(a.b)("h3",{id:"--json"},"--json"),Object(a.b)("p",null,"Output audit report in JSON format."),Object(a.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(a.b)("p",null,"Only audit dev dependencies."),Object(a.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(a.b)("p",null,"Only audit production dependencies."),Object(a.b)("h3",{id:"--no-optional"},"--no-optional"),Object(a.b)("p",null,"Don't audit ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||s[b]||a;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);