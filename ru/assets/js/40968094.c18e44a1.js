(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{127:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return u}));var t=n(3),i=n(8),o=(n(0),n(318)),c={id:"why",title:"pnpm why"},a={unversionedId:"cli/why",id:"version-6.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/why.md",slug:"/cli/why",permalink:"/ru/cli/why",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/ru/cli/outdated"},next:{title:"pnpm run",permalink:"/ru/cli/run"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Added in: 3.7.0"),Object(o.b)("p",null,"Show information in JSON format."),Object(o.b)("h3",{id:"--long"},"--long"),Object(o.b)("p",null,"Show verbose output."),Object(o.b)("h3",{id:"--parseable"},"--parseable"),Object(o.b)("p",null,"Show parseable output instead of tree view."),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Only display the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Only display the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/ru/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},318:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return n?i.a.createElement(f,a(a({ref:r},p),{},{components:n})):i.a.createElement(f,a({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=b;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);