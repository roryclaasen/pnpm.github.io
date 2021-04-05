(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),c=(t(0),t(446)),i={id:"link",title:"pnpm link",original_id:"link"},a={unversionedId:"cli/link",id:"version-4.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Connect the local project to another one.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/link.md",slug:"/cli/link",permalink:"/hu/4.x/cli/link",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm remove",permalink:"/hu/4.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/hu/4.x/cli/unlink"}},l=[{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Connect the local project to another one."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"pnpm link (in package dir)\npnpm link <pkg>\npnpm link <folder>\n")),Object(c.b)("p",null,"Alias: ln"),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"Link webpack from a local directory:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm link ../webpack\n")))}u.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,b=s["".concat(i,".").concat(f)]||s[f]||m[f]||c;return t?o.a.createElement(b,a(a({ref:n},p),{},{components:t})):o.a.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);