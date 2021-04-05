(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(446)),c={id:"publish",title:"pnpm publish"},l={unversionedId:"cli/publish",id:"version-6.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",slug:"/cli/publish",permalink:"/es/cli/publish",editUrl:"https://crowdin.com/project/pnpm/es",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/es/cli/start"},next:{title:"pnpm recursive",permalink:"/es/cli/recursive"}},p=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"--force",id:"--force",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Publishes a package to the registry."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),Object(a.b)("p",null,"When publishing a package inside a ",Object(a.b)("a",{parentName:"p",href:"/es/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),Object(a.b)("p",null,"You may override some fields before publish, using the ",Object(a.b)("a",{parentName:"p",href:"/es/package_json#publishconfig"},"publishConfig")," field in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("p",null,"When running this command recursively (",Object(a.b)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),Object(a.b)("p",null,"Publishes the package with the given tag. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(a.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(a.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),Object(a.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(a.b)("h3",{id:"git-checks"},"git-checks"),Object(a.b)("p",null,"Added in: v4.11.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default : ",Object(a.b)("strong",{parentName:"li"},"true")," (since v5)"),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When true, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),Object(a.b)("h3",{id:"publish-branch"},"publish-branch"),Object(a.b)("p",null,"Added in: v4.11.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"master")),Object(a.b)("li",{parentName:"ul"},"Types: ",Object(a.b)("strong",{parentName:"li"},"String"))),Object(a.b)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),Object(a.b)("h3",{id:"--force"},"--force"),Object(a.b)("p",null,"Added in: v5.18.0"),Object(a.b)("p",null,"Try to publish packages even if their current version is already found in the registry."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,"Added in: 4.6.0"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/es/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),s=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=s(n),h=r,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||a;return n?i.a.createElement(d,l(l({ref:t},o),{},{components:n})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);