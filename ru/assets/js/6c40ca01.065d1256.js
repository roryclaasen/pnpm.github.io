(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{223:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(8),i=(t(0),t(446)),r={id:"faq",title:"Frequently Asked Questions"},s={unversionedId:"faq",id:"version-6.x/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why does my node_modules folder use disk space if packages are stored in a global store?",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/faq.md",slug:"/faq",permalink:"/ru/faq",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x"},p=[{value:"Why does my <code>node_modules</code> folder use disk space if packages are stored in a global store?",id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store",children:[]},{value:"Does it work on Windows?",id:"does-it-work-on-windows",children:[]},{value:"But the nested <code>node_modules</code> approach is incompatible with Windows?",id:"but-the-nested-node_modules-approach-is-incompatible-with-windows",children:[]},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",children:[{value:"Store path is specified",id:"store-path-is-specified",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[]},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"Solution 1",id:"solution-1",children:[]},{value:"Solution 2",id:"solution-2",children:[]},{value:"Solution 3",id:"solution-3",children:[]}]}],l={toc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store"},"Why does my ",Object(i.b)("inlineCode",{parentName:"h2"},"node_modules")," folder use disk space if packages are stored in a global store?"),Object(i.b)("p",null,"pnpm creates ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," from the global store to the project's ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folders. Hard links point to the same place on the disk where the original files are. So, for example, if you have ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency and it occupies 1MB of space, then it will look like it occupies 1MB of space in the project's ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder and the same amount of space in the global store. However, that 1MB is ",Object(i.b)("em",{parentName:"p"},"the same space")," on the disk addressed from two different locations. So in total ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," occupies 1MB, not 2MB."),Object(i.b)("p",null,"For more on this subject:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),Object(i.b)("h2",{id:"does-it-work-on-windows"},"Does it work on Windows?"),Object(i.b)("p",null,"Short answer: Yes Long answer: Using symbolic linking on Windows is problematic to say the least, however, pnpm has a workaround. For Windows, we use ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions")," instead."),Object(i.b)("h2",{id:"but-the-nested-node_modules-approach-is-incompatible-with-windows"},"But the nested ",Object(i.b)("inlineCode",{parentName:"h2"},"node_modules")," approach is incompatible with Windows?"),Object(i.b)("p",null,"Early versions of npm had issues because of nesting all ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". However, pnpm does not create deep folders, it stores all packages flatly and uses symbolic links to create the dependency tree structure."),Object(i.b)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),Object(i.b)("p",null,"Although pnpm uses linking to put dependencies into ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",Object(i.b)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," together with its own dependencies."),Object(i.b)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),Object(i.b)("p",null,"One package can have different sets of dependencies on one machine."),Object(i.b)("p",null,"In project ",Object(i.b)("strong",{parentName:"p"},"A")," ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",Object(i.b)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",Object(i.b)("strong",{parentName:"p"},"B")," the same dependency of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," might resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),Object(i.b)("p",null,"Direct symlinking to the global store would work with Node's ",Object(i.b)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),Object(i.b)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),Object(i.b)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),Object(i.b)("p",null,"pnpm functions differently in the 2 cases below:"),Object(i.b)("h3",{id:"store-path-is-specified"},"Store path is specified"),Object(i.b)("p",null,"If the store path is specified via ",Object(i.b)("a",{parentName:"p",href:"/ru/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),Object(i.b)("p",null,"If you run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",Object(i.b)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",Object(i.b)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",Object(i.b)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),Object(i.b)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),Object(i.b)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),Object(i.b)("p",null,"If installation is run on disk ",Object(i.b)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",Object(i.b)("inlineCode",{parentName:"p"},"A")," ",Object(i.b)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",Object(i.b)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",Object(i.b)("inlineCode",{parentName:"p"},"B")," at ",Object(i.b)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),Object(i.b)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",Object(i.b)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),Object(i.b)("p",null,"The command ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",Object(i.b)("em",{parentName:"p"},"unreferenced packages"),"."),Object(i.b)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),Object(i.b)("p",null,"For example, during ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install"),", package ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),Object(i.b)("p",null,"It is best practice to run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),Object(i.b)("h2",{id:"what-does-pnpm-stand-for"},"What does ",Object(i.b)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm")," stands for ",Object(i.b)("inlineCode",{parentName:"p"},"performant npm"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"Rico Sta. Cruz")," came up with the name."),Object(i.b)("h2",{id:"pnpm-does-not-work-with-your-project-here"},Object(i.b)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),Object(i.b)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),Object(i.b)("h3",{id:"solution-1"},"Solution 1"),Object(i.b)("p",null,"In the following example, a dependency does ",Object(i.b)("strong",{parentName:"p"},"not")," have the ",Object(i.b)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),Object(i.b)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",Object(i.b)("strong",{parentName:"p"},"add ",Object(i.b)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",Object(i.b)("inlineCode",{parentName:"strong"},"package.json")),"."),Object(i.b)("p",null,"You can do so, by installing it via ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),Object(i.b)("h3",{id:"solution-2"},"Solution 2"),Object(i.b)("p",null,"One of the solutions is to use ",Object(i.b)("a",{parentName:"p",href:"/ru/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"An example was ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm")," now."),Object(i.b)("p",null,"It used to throw an error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),Object(i.b)("p",null,"The problem was that ",Object(i.b)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",Object(i.b)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",Object(i.b)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",Object(i.b)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",Object(i.b)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," and ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(i.b)("p",null,"The solution was to create a ",Object(i.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),Object(i.b)("p",null,"After creating a ",Object(i.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only effect module resolution. Then, rebuild the dependencies & it should be working."),Object(i.b)("h3",{id:"solution-3"},"Solution 3"),Object(i.b)("p",null,"In case there are too many issues, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," approach."),Object(i.b)("p",null,"To use it, try ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}c.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||i;return t?a.a.createElement(u,s(s({ref:n},l),{},{components:t})):a.a.createElement(u,s({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);