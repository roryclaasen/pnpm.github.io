(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(446)),c={id:"filtering",title:"Filtering",original_id:"filtering"},l={unversionedId:"filtering",id:"version-4.x/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/filtering.md",slug:"/filtering",permalink:"/ru/4.x/filtering",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"Configuring",permalink:"/ru/4.x/configuring"},next:{title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>",permalink:"/ru/4.x/cli/add"}},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter ...^&lt;package_name&gt;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter <since>",id:"--filter-since",children:[]}],o={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"Filtering allows to restrict commands to subsets of packages."),Object(i.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),Object(i.b)("p",null,"Selectors may be specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> --filter <package_selector>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"An article that compares Lerna's filtering to pnpm's: ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"))),Object(i.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select an exact package, just specify its name (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern to select a set of packages (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/*"),")."),Object(i.b)("p",null,"Usage examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter @babel/core\npnpm test --filter @babel/*\npnpm test --filter *core\n")),Object(i.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run installation in all dependencies of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo...\n")),Object(i.b)("p",null,'You may use a pattern to select a set of "root" packages:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter @babel/preset-*...\n")),Object(i.b)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"Selects dependencies of a package (both direct and non-direct). For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo^...\n")),Object(i.b)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),Object(i.b)("p",null,"Added in: v2.14.0"),Object(i.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, the next command will run installation in all dependents of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo\n")),Object(i.b)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo --filter bar --filter qar...\n")),Object(i.b)("h2",{id:"--filter-package_name-4"},"--filter ...^","<","package_name>"),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"Selects dependent of a package (both direct and non-direct). For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...^foo\n")),Object(i.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(i.b)("p",null,"Added in: v2.15.0"),Object(i.b)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Includes all projects that are under the specified directory."),Object(i.b)("p",null,'It may be used with "..." to select dependents/dependencies as well:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(i.b)("p",null,"It may be combined with ",Object(i.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter {packages}[origin/master]\npnpm <cmd> --filter ...{packages}[origin/master]\npnpm <cmd> --filter {packages}[origin/master]...\npnpm <cmd> --filter ...{packages}[origin/master]...\n")),Object(i.b)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter @babel/*{components}\npnpm <cmd> --filter @babel/*{components}[origin/master]\npnpm <cmd> --filter ...@babel/*{components}[origin/master]\n")),Object(i.b)("h2",{id:"--filter-since"},"--filter ","[<","since>]"),Object(i.b)("p",null,"Added in: v4.6.0"),Object(i.b)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(i.b)("p",null,"For example, the next command will run tests in all changed packages since ",Object(i.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter ...[origin/master]\n")))}b.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);