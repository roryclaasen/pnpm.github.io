(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(446)),c={id:"production",title:"Production"},a={unversionedId:"production",id:"version-6.x/production",isDocsHomePage:!1,title:"Production",description:"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run pnpm install - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/production.md",slug:"/production",permalink:"/ru/production",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x"},p=[],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments."),Object(i.b)("p",null,"The other method is to commit the lockfile AND copy the package store to your production environment (you can change where with the ",Object(i.b)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),"). Then, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --offline")," and pnpm will use the packages from the global store, so it will not make any requests to the registry. This is recommended ",Object(i.b)("strong",{parentName:"p"},"ONLY")," for environments where external access to the registry is unavailable for whatever reason."))}u.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);