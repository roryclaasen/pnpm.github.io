(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),p=(t(0),t(318)),o={id:"pnpx-cli",title:"pnpx CLI"},c={unversionedId:"pnpx-cli",id:"pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"For new users",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/pnpx-cli.md",slug:"/pnpx-cli",permalink:"/pt/next/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/pt",version:"current",sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/pt/next/pnpm-cli"},next:{title:"Configuring",permalink:"/pt/next/configuring"}},i=[{value:"For new users",id:"for-new-users",children:[]},{value:"For npm users",id:"for-npm-users",children:[]}],l={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"for-new-users"},"For new users"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),Object(p.b)("p",null,"For example, to use ",Object(p.b)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),Object(p.b)("p",null,"This will fetch ",Object(p.b)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",Object(p.b)("inlineCode",{parentName:"p"},"npm")," instead of ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),Object(p.b)("h2",{id:"for-npm-users"},"For npm users"),Object(p.b)("p",null,"npm has a great package runner called ",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",Object(p.b)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",Object(p.b)("inlineCode",{parentName:"p"},"pnpx")," uses ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}u.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,b=s["".concat(o,".").concat(f)]||s[f]||m[f]||p;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<p;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);