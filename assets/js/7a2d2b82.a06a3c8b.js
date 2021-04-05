(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{245:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),a=(t(0),t(446)),o={id:"package_json",title:"package.json",original_id:"package_json"},p={unversionedId:"package_json",id:"version-3.x/package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package.",source:"@site/versioned_docs/version-3.x/package_json.md",slug:"/package_json",permalink:"/3.x/package_json",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-3.x/package_json.md",version:"3.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-3.x/docs",previous:{title:"pnpm store",permalink:"/3.x/cli/store"},next:{title:".npmrc",permalink:"/3.x/npmrc"}},c=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]}]}],l={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The manifest file of a package."),Object(a.b)("h2",{id:"fields"},"Fields"),Object(a.b)("h3",{id:"engines"},"engines"),Object(a.b)("p",null,"You can specify the version of Node and pnpm that your stuff works on:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),Object(a.b)("p",null,"During local development, pnpm will always fail with an error message\nwhen its version will not match the one in ",Object(a.b)("inlineCode",{parentName:"p"},"engines.pnpm"),"."),Object(a.b)("p",null,"Unless the user has set the ",Object(a.b)("inlineCode",{parentName:"p"},"engine-strict")," config flag, this field is advisory only and will only produce warnings when your package is installed as a dependency."),Object(a.b)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),Object(a.b)("p",null,"This field lists some extra information related to the dependencies listed in the ",Object(a.b)("inlineCode",{parentName:"p"},"peerDependencies")," field."),Object(a.b)("h4",{id:"peerdependenciesmetapkgoptional"},"peerDependenciesMeta","[pkg]",".optional"),Object(a.b)("p",null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependenciesMeta": {\n        "react-dom": {\n            "optional": true,\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"publishconfig"},"publishConfig"),Object(a.b)("p",null,"Added in: v3.4.0"),Object(a.b)("p",null,"It is possible to override some fields in the manifest, before the package is packed.\nThe following fields may be overriden: ",Object(a.b)("inlineCode",{parentName:"p"},"typings"),", ",Object(a.b)("inlineCode",{parentName:"p"},"types"),", ",Object(a.b)("inlineCode",{parentName:"p"},"main")," and ",Object(a.b)("inlineCode",{parentName:"p"},"module"),".\nTo override a field, add the publish version of the field to ",Object(a.b)("inlineCode",{parentName:"p"},"publishConfig"),"."),Object(a.b)("p",null,"For instance, the following ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),Object(a.b)("p",null,"Will be published as:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')))}s.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||a;return t?i.a.createElement(m,p(p({ref:n},l),{},{components:t})):i.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);