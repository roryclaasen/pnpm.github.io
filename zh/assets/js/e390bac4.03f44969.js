(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{400:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),p=(t(0),t(446)),o={id:"package_json",title:"package.json"},i={unversionedId:"package_json",id:"package_json",isDocsHomePage:!1,title:"package.json",description:"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/package_json.md",slug:"/package_json",permalink:"/zh/next/package_json",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",sidebar:"docs",previous:{title:"pnpm store",permalink:"/zh/next/cli/store"},next:{title:".npmrc",permalink:"/zh/next/npmrc"}},c=[{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],b={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002"),Object(p.b)("h2",{id:"\u5b57\u6bb5"},"\u5b57\u6bb5"),Object(p.b)("h3",{id:"engines"},"engines"),Object(p.b)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4f60\u7684\u8f6f\u4ef6\u80fd\u591f\u8fd0\u884c\u7684 Node \u7248\u672c\u548c pnpm \u7248\u672c\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),Object(p.b)("p",null,"\u5728\u672c\u5730\u5f00\u53d1\u65f6\uff0c \u5982\u679c\u5176\u7248\u672c\u4e0e ",Object(p.b)("inlineCode",{parentName:"p"},"engines")," \u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u4e0d\u5339\u914d\uff0cpnpm \u5c06\u59cb\u7ec8\u5931\u8d25\u5e76\u62a5\u9519\u3002"),Object(p.b)("p",null,"\u5f53\u4f60\u7684\u5305\u4f5c\u4e3a\u4f9d\u8d56\u88ab\u5b89\u88c5\u65f6\uff0c\u9664\u975e\u7528\u6237\u5df2\u8bbe\u7f6e ",Object(p.b)("inlineCode",{parentName:"p"},"engine-strict")," \u914d\u7f6e\u6807\u5fd7 (\u53c2\u9605 ",Object(p.b)("a",{parentName:"p",href:"/zh/next/npmrc#engine-strict"},".npmrc"),")\uff0c\u5426\u5219\u6b64\u5b57\u6bb5\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e14\u53ea\u4f1a\u4ea7\u751f\u8b66\u544a\u3002"),Object(p.b)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),Object(p.b)("p",null,"\u6b64\u5b57\u6bb5\u5217\u51fa\u4e86\u4e00\u4e9b\u4e0e ",Object(p.b)("inlineCode",{parentName:"p"},"peerDependencies")," \u5b57\u6bb5\u4e2d\u5217\u51fa\u7684\u4f9d\u8d56\u5173\u7cfb\u76f8\u5173\u7684\u989d\u5916\u4fe1\u606f\u3002"),Object(p.b)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),Object(p.b)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u6240\u9009\u5bf9 peer dependency \u5c06\u88ab\u5305\u7ba1\u7406\u5de5\u5177\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0c\u7701\u7565\u5b83\u5c06\u4e0d\u518d\u662f\u88ab\u62a5\u544a\u4e3a\u9519\u8bef\u3002"),Object(p.b)("p",null,"\u4f8b\u5982\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),Object(p.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5373\u4f7f\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"peerDependencies"),"\u4e2d\u6ca1\u6709\u6307\u5b9a ",Object(p.b)("inlineCode",{parentName:"p"},"bar"),", \u4f46\u5b83\u662f\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0cpnpm \u5c06\u5047\u5b9a\u4efb\u4f55\u7248\u672c\u7684 bar \u90fd\u662f\u53ef\u4ee5\u7684\u3002 \u7136\u800c\uff0c ",Object(p.b)("inlineCode",{parentName:"p"},"foo")," \u662f\u53ef\u9009\u7684\uff0c\u4f46\u4ec5\u9002\u7528\u4e8e\u6240\u6307\u5b9a\u7684\u7248\u672c\u3002"),Object(p.b)("h3",{id:"publishconfig"},"publishConfig"),Object(p.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av3.4.0"),Object(p.b)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},Object(p.b)("inlineCode",{parentName:"a"},"bin")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},Object(p.b)("inlineCode",{parentName:"a"},"main")),", ",Object(p.b)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},Object(p.b)("inlineCode",{parentName:"a"},"exports")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},Object(p.b)("inlineCode",{parentName:"a"},"types")," or ",Object(p.b)("inlineCode",{parentName:"a"},"typings")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},Object(p.b)("inlineCode",{parentName:"a"},"module")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},Object(p.b)("inlineCode",{parentName:"a"},"browser")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},Object(p.b)("inlineCode",{parentName:"a"},"esnext")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},Object(p.b)("inlineCode",{parentName:"a"},"es2015")),", ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},Object(p.b)("inlineCode",{parentName:"a"},"unpkg"))," and ",Object(p.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},Object(p.b)("inlineCode",{parentName:"a"},"umd:main")),"."),Object(p.b)("p",null,"To override a field, add the publish version of the field to ",Object(p.b)("inlineCode",{parentName:"p"},"publishConfig"),"."),Object(p.b)("p",null,"For instance, the following ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),Object(p.b)("p",null,"Will be published as:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),Object(p.b)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),Object(p.b)("p",null,"Added in: v5.10.1"),Object(p.b)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),Object(p.b)("p",null,"Note that the overrides field can only be set at the root of the project."),Object(p.b)("p",null,"An example of the ",Object(p.b)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),Object(p.b)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',Object(p.b)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",Object(p.b)("inlineCode",{parentName:"p"},"zoo")," dependency of ",Object(p.b)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),Object(p.b)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),Object(p.b)("p",null,"Added in: v5.16.0"),Object(p.b)("p",null,"This field allows to ignore the builds of specific dependencies."),Object(p.b)("p",null,"An example of the ",Object(p.b)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}l.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||p;return t?a.a.createElement(m,i(i({ref:n},b),{},{components:t})):a.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<p;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);