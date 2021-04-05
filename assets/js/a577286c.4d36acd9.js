(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),i=(t(0),t(446)),a={id:"configuring",title:"Configuring"},c={unversionedId:"configuring",id:"version-6.x/configuring",isDocsHomePage:!1,title:"Configuring",description:"pnpm uses [npm's configuration] formats. Hence, you should set configuration",source:"@site/versioned_docs/version-6.x/configuring.md",slug:"/configuring",permalink:"/configuring",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-6.x/configuring.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617662238,formattedLastUpdatedAt:"4/5/2021",sidebar:"version-6.x/docs",previous:{title:"pnpx CLI",permalink:"/pnpx-cli"},next:{title:"Filtering",permalink:"/filtering"}},p=[],s={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"pnpm uses ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configuration")," formats. Hence, you should set configuration\nthe same way you would for npm. For example,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),Object(i.b)("p",null,"If no store is configured, then pnpm will automatically create a store on the\nsame drive. If you need pnpm to work across multiple hard drives or filesystems,\nplease read ",Object(i.b)("a",{parentName:"p",href:"/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),Object(i.b)("p",null,"Furthermore, pnpm uses the same configuration that npm uses for doing\ninstallations. If you have a private registry and npm is configured to work with\nit, pnpm should be able to authorize requests as well, with no additional\nconfiguration."),Object(i.b)("p",null,"In addition to those options, pnpm also allows you to use all parameters that\nare flags (for example ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"/cli/config"},Object(i.b)("inlineCode",{parentName:"a"},"config")," command")," for more information."))}u.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,d=l["".concat(a,".").concat(m)]||l[m]||f[m]||i;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);