(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(446)),i={id:"continuous-integration",title:"Continuous Integration",original_id:"continuous-integration"},p={unversionedId:"continuous-integration",id:"version-2.x/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/continuous-integration.md",slug:"/continuous-integration",permalink:"/es/2.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/es",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"pnpm import",permalink:"/es/2.x/pnpm-import"},next:{title:"Workspace",permalink:"/es/2.x/workspace"}},c=[{value:"Travis",id:"travis",children:[]},{value:"Semaphore",id:"semaphore",children:[]},{value:"AppVeyor",id:"appveyor",children:[]},{value:"Sail CI",id:"sail-ci",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm can easily be used in various continuous integration systems."),Object(o.b)("h2",{id:"travis"},"Travis"),Object(o.b)("p",null,"On ",Object(o.b)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this to your ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"before_install:\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\ninstall:\n  - pnpm install\n")),Object(o.b)("h2",{id:"semaphore"},"Semaphore"),Object(o.b)("p",null,"On ",Object(o.b)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",Object(o.b)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -L https://unpkg.com/@pnpm/self-installer | node\n            - checkout\n            - cache restore node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json),node-modules-$SEMAPHORE_GIT_BRANCH,node-modules-master\n            - pnpm install\n            - cache store node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json) node_modules\n")),Object(o.b)("h2",{id:"appveyor"},"AppVeyor"),Object(o.b)("p",null,"On ",Object(o.b)("a",{parentName:"p",href:"https://www.appveyor.com/"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this to your ",Object(o.b)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\n  - pnpm install\n")),Object(o.b)("h2",{id:"sail-ci"},"Sail CI"),Object(o.b)("p",null,"On ",Object(o.b)("a",{parentName:"p",href:"https://sail.ci/"},"Sail CI"),", you can use pnpm for installing your dependencies by adding this to your ",Object(o.b)("inlineCode",{parentName:"p"},".sail.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),Object(o.b)("p",null,"To get the exact Node version and pnpm version you require you can always make your own Docker image and push to ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."))}l.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,p(p({ref:n},s),{},{components:t})):a.a.createElement(b,p({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);