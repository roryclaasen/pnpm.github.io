(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),c=(n(0),n(446)),a={id:"publish",title:"pnpm publish"},l={unversionedId:"cli/publish",id:"version-2.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-2.x/cli/publish.md",slug:"/cli/publish",permalink:"/ru/2.x/cli/publish",editUrl:"https://crowdin.com/project/pnpm/ru",version:"2.x"},p=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"--force",id:"--force",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"--force",id:"--force-1",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),Object(c.b)("p",null,"When publishing a package inside a ",Object(c.b)("a",{parentName:"p",href:"/ru/2.x/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),Object(c.b)("p",null,"You may override some fields before publish, using the ",Object(c.b)("a",{parentName:"p",href:"/ru/2.x/package_json#publishconfig"},"publishConfig")," field in ",Object(c.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(c.b)("p",null,"When running this command recursively (",Object(c.b)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),Object(c.b)("p",null,"Publishes the package with the given tag. By default, ",Object(c.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(c.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(c.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),Object(c.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(c.b)("h3",{id:"--force"},"--force"),Object(c.b)("p",null,"Added in: v5.18.0"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"pnpm publish -r --force")," will try to publish packages even if their current version is already in the registry."),Object(c.b)("h3",{id:"git-checks"},"git-checks"),Object(c.b)("p",null,"Added in: v4.11.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default : ",Object(c.b)("strong",{parentName:"li"},"true")," (since v5)"),Object(c.b)("li",{parentName:"ul"},"Type: ",Object(c.b)("strong",{parentName:"li"},"Boolean"))),Object(c.b)("p",null,"When true, ",Object(c.b)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),Object(c.b)("h3",{id:"publish-branch"},"publish-branch"),Object(c.b)("p",null,"Added in: v4.11.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default: ",Object(c.b)("strong",{parentName:"li"},"master")),Object(c.b)("li",{parentName:"ul"},"Types: ",Object(c.b)("strong",{parentName:"li"},"String"))),Object(c.b)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),Object(c.b)("h3",{id:"--force-1"},"--force"),Object(c.b)("p",null,"Added in: v5.18.0"),Object(c.b)("p",null,"Try to publish packages even if their current version is already found in the registry or any other checks fail."),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(c.b)("p",null,"Added in: 4.6.0"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/ru/2.x/filtering"},"Read more about filtering.")))}b.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(n),h=r,d=u["".concat(a,".").concat(h)]||u[h]||s[h]||c;return n?i.a.createElement(d,l(l({ref:t},o),{},{components:n})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var o=2;o<c;o++)a[o]=n[o];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);