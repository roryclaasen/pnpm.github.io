(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(446)),i={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",original_id:"installation"},c={unversionedId:"installation",id:"version-2.x/installation",isDocsHomePage:!1,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"Using a standalone script:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-2.x/installation.md",slug:"/installation",permalink:"/ru/2.x/installation",editUrl:"https://crowdin.com/project/pnpm/ru",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/2.x/motivation"},next:{title:"pnpm CLI",permalink:"/ru/2.x/pnpm-cli"}},p=[],l={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/self-installer#readme"},"standalone script"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"curl -L https://unpkg.com/@pnpm/self-installer | node\n")),Object(o.b)("p",null,"Via npm:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(o.b)("p",null,"Once you first installed pnpm, you can upgrade it using pnpm:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install -g pnpm\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Do you wanna use pnpm on CI servers? \u0421\u043c.: ",Object(o.b)("a",{parentName:"p",href:"/ru/2.x/continuous-integration"},"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"),".")))}u.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);