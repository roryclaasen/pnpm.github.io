(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(8),a=(t(0),t(446)),o={id:"limitations",title:"Limitations",original_id:"limitations"},s={unversionedId:"limitations",id:"version-4.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm's shrinkwrap file is designed to reflect the node_modules layout created by npm. pnpm cannot create a similar layout, so it cannot respect npm's lockfile format. However, see pnpm import.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/limitations.md",slug:"/limitations",permalink:"/ru/4.x/limitations",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"Benchmark",permalink:"/ru/4.x/benchmark"},next:{title:"About the package store",permalink:"/ru/4.x/about-package-store"}},l=[],p={toc:l};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",Object(a.b)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm can install the same ",Object(a.b)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of dependencies. npm's shrinkwrap file is designed to reflect the ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," layout created by npm. pnpm cannot create a similar layout, so it cannot respect npm's lockfile format. However, see ",Object(a.b)("a",{parentName:"li",href:"/ru/4.x/cli/import"},"pnpm import"),"."),Object(a.b)("li",{parentName:"ol"},"You can't publish npm modules with ",Object(a.b)("inlineCode",{parentName:"li"},"bundleDependencies")," managed by pnpm."),Object(a.b)("li",{parentName:"ol"},"Binstubs (files in ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a js file, just reference the original file instead, as described in ",Object(a.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),Object(a.b)("li",{parentName:"ol"},"Node.js doesn't work with the ",Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag when executed in a project that uses pnpm.")),Object(a.b)("p",null,"Got an idea for workarounds for these issues? ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}c.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return t?i.a.createElement(b,s(s({ref:n},p),{},{components:t})):i.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);