(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{426:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),p=(t(0),t(446)),i={id:"pnpm-cli",title:"pnpm CLI",original_id:"pnpm-cli"},l={unversionedId:"pnpm-cli",id:"version-2.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Just use pnpm in place of npm:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.x/pnpm-cli.md",slug:"/pnpm-cli",permalink:"/zh/2.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"\u5b89\u88c5",permalink:"/zh/2.x/installation"},next:{title:"pnpx CLI",permalink:"/zh/2.x/pnpx-cli"}},c=[],o={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Just use pnpm in place of npm:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install lodash\n")),Object(p.b)("p",null,"npm commands that are re-implemented in pnpm:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/zh/2.x/pnpm-install"},"install")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"update")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"uninstall")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"link")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"prune")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"list")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"install-test")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"outdated")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"rebuild")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"root")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"help"))),Object(p.b)("p",null,"Also, there are some commands unique to pnpm:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/zh/2.x/pnpm-recursive"},"recursive")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/zh/2.x/pnpm-store"},"store")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/zh/2.x/pnpm-server"},"server")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/zh/2.x/pnpm-import"},"import"))),Object(p.b)("p",null,"The rest of the commands pass through to npm."),Object(p.b)("p",null,"For using the programmatic API, use pnpm's engine: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/tree/master/packages/supi"},"supi"),"."))}b.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(t),s=r,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||p;return t?a.a.createElement(O,l(l({ref:n},o),{},{components:t})):a.a.createElement(O,l({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);