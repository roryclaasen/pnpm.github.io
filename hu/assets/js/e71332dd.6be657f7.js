(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{294:function(I,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return n})),i.d(e,"metadata",(function(){return b})),i.d(e,"toc",(function(){return g})),i.d(e,"default",(function(){return d}));var t=i(3),a=i(8),l=(i(0),i(318)),n={},b={type:"mdx",permalink:"/hu/benchmarks",source:"@site/src/pages/benchmarks.md"},g=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:g};function d(I){var e=I.components,n=Object(a.a)(I,["components"]);return Object(l.b)("wrapper",Object(t.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),Object(l.b)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),Object(l.b)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),Object(l.b)("h2",{id:"lots-of-files"},"Lots of Files"),Object(l.b)("p",null,"The app's ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"action"),Object(l.b)("th",{parentName:"tr",align:null},"cache"),Object(l.b)("th",{parentName:"tr",align:null},"lockfile"),Object(l.b)("th",{parentName:"tr",align:null},"node_modules"),Object(l.b)("th",{parentName:"tr",align:null},"npm"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn PnP"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"44.6s"),Object(l.b)("td",{parentName:"tr",align:null},"13.6s"),Object(l.b)("td",{parentName:"tr",align:null},"39.1s"),Object(l.b)("td",{parentName:"tr",align:null},"29.1s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2s"),Object(l.b)("td",{parentName:"tr",align:null},"1.2s"),Object(l.b)("td",{parentName:"tr",align:null},"707ms"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"11.7s"),Object(l.b)("td",{parentName:"tr",align:null},"3.8s"),Object(l.b)("td",{parentName:"tr",align:null},"11s"),Object(l.b)("td",{parentName:"tr",align:null},"1.8s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"25.8s"),Object(l.b)("td",{parentName:"tr",align:null},"6.1s"),Object(l.b)("td",{parentName:"tr",align:null},"26.5s"),Object(l.b)("td",{parentName:"tr",align:null},"17.2s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"28.9s"),Object(l.b)("td",{parentName:"tr",align:null},"10.9s"),Object(l.b)("td",{parentName:"tr",align:null},"23.3s"),Object(l.b)("td",{parentName:"tr",align:null},"14.2s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2.7s"),Object(l.b)("td",{parentName:"tr",align:null},"1.7s"),Object(l.b)("td",{parentName:"tr",align:null},"22.1s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"1.9s"),Object(l.b)("td",{parentName:"tr",align:null},"1.2s"),Object(l.b)("td",{parentName:"tr",align:null},"713ms"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2.8s"),Object(l.b)("td",{parentName:"tr",align:null},"5s"),Object(l.b)("td",{parentName:"tr",align:null},"41.1s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"update"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"1.9s"),Object(l.b)("td",{parentName:"tr",align:null},"9.8s"),Object(l.b)("td",{parentName:"tr",align:null},"35.4s"),Object(l.b)("td",{parentName:"tr",align:null},"28.3s")))),Object(l.b)("p",null,Object(l.b)("img",{alt:"Graph of the alotta-files results",src:i(410).default})))}d.isMDXComponent=!0},318:function(I,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return N}));var t=i(0),a=i.n(t);function l(I,e,i){return e in I?Object.defineProperty(I,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[e]=i,I}function n(I,e){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(I,e).enumerable}))),i.push.apply(i,t)}return i}function b(I){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){l(I,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(I,e,Object.getOwnPropertyDescriptor(i,e))}))}return I}function g(I,e){if(null==I)return{};var i,t,a=function(I,e){if(null==I)return{};var i,t,a={},l=Object.keys(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||(a[i]=I[i]);return a}(I,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(a[i]=I[i])}return a}var j=a.a.createContext({}),d=function(I){var e=a.a.useContext(j),i=e;return I&&(i="function"==typeof I?I(e):b(b({},e),I)),i},c=function(I){var e=d(I.components);return a.a.createElement(j.Provider,{value:e},I.children)},r={inlineCode:"code",wrapper:function(I){var e=I.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(I,e){var i=I.components,t=I.mdxType,l=I.originalType,n=I.parentName,j=g(I,["components","mdxType","originalType","parentName"]),c=d(i),m=t,N=c["".concat(n,".").concat(m)]||c[m]||r[m]||l;return i?a.a.createElement(N,b(b({ref:e},j),{},{components:i})):a.a.createElement(N,b({ref:e},j))}));function N(I,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof I||t){var l=i.length,n=new Array(l);n[0]=m;var b={};for(var g in e)hasOwnProperty.call(e,g)&&(b[g]=e[g]);b.originalType=I,b.mdxType="string"==typeof I?I:t,n[1]=b;for(var j=2;j<l;j++)n[j]=i[j];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},410:function(I,e,i){"use strict";i.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY3LjEyLjA8L3RleHQ+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2IiByPSI0IiBmaWxsPSIjZmJhZTAwIj48L2NpcmNsZT4KICA8dGV4dCB4PSI2MCIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wbnBtPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY2LjIuNTwvdGV4dD4KICA8Y2lyY2xlIGN4PSI3NiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9Ijc2IiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm48L3RleHQ+CiAgPHRleHQgeD0iNzYiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djEuMjIuMTA8L3RleHQ+CiAgPGNpcmNsZSBjeD0iOTIiIGN5PSI2IiByPSI0IiBmaWxsPSIjMjQ4ZWJkIj48L2NpcmNsZT4KICA8dGV4dCB4PSI5MiIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ZYXJuIFBuUDwvdGV4dD4KICA8dGV4dCB4PSI5MiIgeT0iMTgiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52MS4yMi4xMDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8bGluZSB4MT0iOTAiIHkxPSIzMSIgeDI9IjkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OTwvdGV4dD4KICA8dGV4dCB4PSI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PgogIDxsaW5lIHgxPSIxNDAiIHkxPSIzMSIgeDI9IjE0MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIxNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xODwvdGV4dD4KICA8dGV4dCB4PSIxNDAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTg8L3RleHQ+CiAgPGxpbmUgeDE9IjE5MCIgeTE9IjMxIiB4Mj0iMTkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjE5MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI3PC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yNzwvdGV4dD4KICA8bGluZSB4MT0iMjQwIiB5MT0iMzEiIHgyPSIyNDAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzY8L3RleHQ+CiAgPHRleHQgeD0iMjQwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM2PC90ZXh0PgogIDxsaW5lIHgxPSIyOTAiIHkxPSIzMSIgeDI9IjI5MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40NTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDU8L3RleHQ+CiAgPHRleHQgeD0iMjkwIiB5PSIyMCIgY2xhc3M9ImZvbnQgczQgdGV4dCIgZm9udC1zdHlsZT0iaXRhbGljIiB0ZXh0LWFuY2hvcj0iZW5kIj5JbnN0YWxsYXRpb24gdGltZSBpbiBzZWNvbmRzIChsb3dlciBpcyBiZXR0ZXIpPC90ZXh0PgogIDxyZWN0IHg9IjQwIiB5PSIzNSIgd2lkdGg9IjI0OCIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNDEuNSIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0OCIgd2lkdGg9IjIxNyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNTQuNSIgd2lkdGg9IjE2MiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNzEuNSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijc4IiB3aWR0aD0iNCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iODQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijk1IiB3aWR0aD0iNjUiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwMS41IiB3aWR0aD0iMjEiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwOCIgd2lkdGg9IjYxIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMTQuNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjUiIHdpZHRoPSIxNDMiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzMS41IiB3aWR0aD0iMzQiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzOCIgd2lkdGg9IjE0NyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSI5NiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTYxIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9IjYxIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSIxMjkiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE3NC41IiB3aWR0aD0iNzkiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxOTEuNSIgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5OCIgd2lkdGg9IjEyMyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjA0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMTUiIHdpZHRoPSIxMSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjIxLjUiIHdpZHRoPSI3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMzQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI0NSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTEuNSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTgiIHdpZHRoPSIyMjgiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjc1IiB3aWR0aD0iMTEiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI4MS41IiB3aWR0aD0iNTQiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI4OCIgd2lkdGg9IjE5NyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjk0LjUiIHdpZHRoPSIxNTciIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMzEiIHgyPSI0MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUiPjwvbGluZT4KICA8dGV4dCB4PSIzOCIgeT0iNDQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPmNsZWFuIGluc3RhbGw8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjcwLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzguNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMDIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEwNi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTM0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxNjQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE5Mi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTk2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjIyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjI2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyNTQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyODQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPnVwZGF0ZTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjMxNyIgY2xhc3M9ImZvbnQgczQgdGV4dCIgdGV4dC1hbmNob3I9ImVuZCI+VGVzdHMgd2VyZSBydW4gdXNpbmcgTm9kZS5qcyB2MTIuMjIuMTwvdGV4dD4KPC9zdmc+Cg=="}}]);