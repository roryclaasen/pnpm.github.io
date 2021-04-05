(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{386:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(8),a=(t(0),t(446)),p={id:"how-peers-are-resolved",title:"How peers are resolved"},i={unversionedId:"how-peers-are-resolved",id:"version-5.x/how-peers-are-resolved",isDocsHomePage:!1,title:"How peers are resolved",description:"One of the best features of pnpm is that in one project, a specific version of a package will always have one set of dependencies. There is one exception from this rule, though - packages with peer dependencies.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/how-peers-are-resolved.md",slug:"/how-peers-are-resolved",permalink:"/es/5.x/how-peers-are-resolved",editUrl:"https://crowdin.com/project/pnpm/es",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Symlinked `node_modules` structure",permalink:"/es/5.x/symlinked-node-modules-structure"}},s=[],c={toc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the best features of pnpm is that in one project, a specific version of a package will always have one set of dependencies. There is one exception from this rule, though - packages with ",Object(a.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"peer dependencies"),"."),Object(a.b)("p",null,"Peer dependencies are resolved from dependencies installed higher in the dependency graph, since they share the same version as their parent. That means that if ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," has two peers (",Object(a.b)("inlineCode",{parentName:"p"},"bar@^1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"baz@^1"),") then it might have multiple different sets of dependencies in the same project."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),Object(a.b)("p",null,"In the example above, ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is installed for ",Object(a.b)("inlineCode",{parentName:"p"},"foo-parent-1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"foo-parent-2"),". Both packages have ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(a.b)("inlineCode",{parentName:"p"},"baz"),"as well, but they depend on different versions of ",Object(a.b)("inlineCode",{parentName:"p"},"baz"),". As a result, ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," has two different sets of dependencies: one with ",Object(a.b)("inlineCode",{parentName:"p"},"baz@1.0.0")," and the other one with ",Object(a.b)("inlineCode",{parentName:"p"},"baz@1.1.0"),". To support these use cases, pnpm has to hard link ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," as many times as there are different dependency sets."),Object(a.b)("p",null,"Normally, if a package does not have peer dependencies, it is hard linked to a ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder next to symlinks of its dependencies, like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),Object(a.b)("p",null,"However, if ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," has peer dependencies, there may be multiple sets of dependencies for it, so we create different sets for different peer dependency resolutions:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),Object(a.b)("p",null,"We create symlinks either to the ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," that is inside ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0")," or to the one in ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),". As a consequence, the Node.js module resolver will find the correct peers."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"If a package has no peer dependencies but has dependencies with peers that are resolved higher in the graph"),", then that transitive package can appear in the project with different sets of dependencies. For instance, there's package ",Object(a.b)("inlineCode",{parentName:"p"},"a@1.0.0")," with a single dependency ",Object(a.b)("inlineCode",{parentName:"p"},"b@1.0.0"),". ",Object(a.b)("inlineCode",{parentName:"p"},"b@1.0.0")," has a peer dependency ",Object(a.b)("inlineCode",{parentName:"p"},"c@^1"),". ",Object(a.b)("inlineCode",{parentName:"p"},"a@1.0.0")," will never resolve the peers of ",Object(a.b)("inlineCode",{parentName:"p"},"b@1.0.0"),", so it becomes dependent from the peers of ",Object(a.b)("inlineCode",{parentName:"p"},"b@1.0.0")," as well."),Object(a.b)("p",null,"Here's how that structure will look in ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),". In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"a@1.0.0")," will need to appear twice in the project's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," - resolved once with ",Object(a.b)("inlineCode",{parentName:"p"},"c@1.0.0")," and again with ",Object(a.b)("inlineCode",{parentName:"p"},"c@1.1.0"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../cn@1.1.0/node_modules/plugin\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}l.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,m=d["".concat(p,".").concat(u)]||d[u]||b[u]||a;return t?r.a.createElement(m,i(i({ref:n},c),{},{components:t})):r.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);