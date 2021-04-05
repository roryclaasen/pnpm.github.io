(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(446)),i={id:"motivation",title:"Motivation",original_id:"motivation"},s={unversionedId:"motivation",id:"version-2.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"pnpm uses hard links and symlinks to save one version of a module only ever once on a disk.",source:"@site/versioned_docs/version-2.x/motivation.md",slug:"/motivation",permalink:"/2.x/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-2.x/motivation.md",version:"2.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-2.x/docs",next:{title:"Installation",permalink:"/2.x/installation"}},l=[],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"pnpm uses hard links and symlinks to save one version of a module only ever once on a disk.\nWhen using npm or Yarn for example, if you have 100 projects using the same version\nof lodash, you will have 100 copies of lodash on disk. With pnpm, lodash will be saved in a\nsingle place on the disk and a hard link will put it into the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," where it should\nbe installed."),Object(a.b)("p",null,"As a result, you save gigabytes of space on your disk and you have a lot faster installations!\nIf you'd like more details about the unique ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and\nwhy it works fine with the Node.js ecosystem, read this small article: ",Object(a.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?")))}p.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(f,s(s({ref:t},c),{},{components:n})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);