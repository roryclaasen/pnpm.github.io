(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(8),r=(n(0),n(446)),i={id:"npmrc",title:".npmrc",original_id:"npmrc"},c={unversionedId:"npmrc",id:"version-3.x/npmrc",isDocsHomePage:!1,title:".npmrc",description:"pnpm gets its config settings from the command line, environment variables, and .npmrc files.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-3.x/npmrc.md",slug:"/npmrc",permalink:"/hu/3.x/npmrc",editUrl:"https://crowdin.com/project/pnpm/hu",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"package.json",permalink:"/hu/3.x/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/hu/3.x/pnpm-workspace_yaml"}},b=[{value:"Settings",id:"settings",children:[{value:"always-auth",id:"always-auth",children:[]},{value:"ca",id:"ca",children:[]},{value:"cafile",id:"cafile",children:[]},{value:"cert",id:"cert",children:[]},{value:"store",id:"store",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"lock",id:"lock",children:[]},{value:"independent-leaves",id:"independent-leaves",children:[]},{value:"verify-store-integrity",id:"verify-store-integrity",children:[]},{value:"package-import-method",id:"package-import-method",children:[]},{value:"lockfile",id:"lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]},{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"shamefully-flatten",id:"shamefully-flatten",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"resolution-strategy",id:"resolution-strategy",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]},{value:"engine-strict",id:"engine-strict",children:[]},{value:"fetch-retries",id:"fetch-retries",children:[]},{value:"fetch-retry-factor",id:"fetch-retry-factor",children:[]},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",children:[]},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",children:[]},{value:"https-proxy",id:"https-proxy",children:[]},{value:"key",id:"key",children:[]},{value:"local-address",id:"local-address",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"registry",id:"registry",children:[]},{value:"save-prefix",id:"save-prefix",children:[]},{value:"strict-ssl",id:"strict-ssl",children:[]},{value:"tag",id:"tag",children:[]},{value:"unsafe-perm",id:"unsafe-perm",children:[]}]}],o={toc:b};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"pnpm gets its config settings from the command line, environment variables, and ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the user and global ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(r.b)("p",null,"The four relevant files are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"per-project config file (/path/to/my/project/.npmrc)"),Object(r.b)("li",{parentName:"ul"},"per-workspace config file (the directory that contains the ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),Object(r.b)("li",{parentName:"ul"},"per-user config file (",Object(r.b)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),Object(r.b)("li",{parentName:"ul"},"global config file (",Object(r.b)("inlineCode",{parentName:"li"},"$PREFIX/etc/npmrc"),")")),Object(r.b)("p",null,"All ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files are an ini-formatted list of ",Object(r.b)("inlineCode",{parentName:"p"},"key = value")," parameters."),Object(r.b)("h2",{id:"settings"},"Settings"),Object(r.b)("h3",{id:"always-auth"},"always-auth"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Force pnpm to always require authentication when accessing the registry, even for GET requests."),Object(r.b)("h3",{id:"ca"},"ca"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"The npm CA certificate")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String, Array or null"))),Object(r.b)("p",null,'The Certificate Authority signing certificate that is trusted for SSL connections to the registry. Values should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(r.b)("p",null,'Set to null to only allow "known" registrars, or to a specific CA cert to trust only that specific signing authority.'),Object(r.b)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-test"},'ca[]="..."\nca[]="..."\n')),Object(r.b)("p",null,"See also the ",Object(r.b)("inlineCode",{parentName:"p"},"strict-ssl")," config."),Object(r.b)("h3",{id:"cafile"},"cafile"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"A path to a file containing one or multiple Certificate Authority signing certificates. Similar to the ca setting, but allows for multiple CA\u2019s, as well as for the CA information to be stored in a file on disk."),Object(r.b)("h3",{id:"cert"},"cert"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,'A client certificate to pass when accessing the registry. Values should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(r.b)("p",null,'It is not the path to a certificate file (and there is no "certfile" option).'),Object(r.b)("h3",{id:"store"},"store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"~/.pnpm-store")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The location where all the packages are saved on the disk."),Object(r.b)("p",null,"The store should be always on the same disk on which installation is happening. So there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",Object(r.b)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no homedir on the disk, then the store is created in the root. For example, if installation is happening on disk ",Object(r.b)("inlineCode",{parentName:"p"},"D")," then the store will be created in ",Object(r.b)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),Object(r.b)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy, not link, packages from the store. Hard links are possible only inside a filesystem."),Object(r.b)("h3",{id:"network-concurrency"},"network-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"16")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the maximum number of HTTP requests that can be done simultaneously."),Object(r.b)("h3",{id:"child-concurrency"},"child-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"5")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the number of child processes run parallelly to build node modules."),Object(r.b)("h3",{id:"lock"},"lock"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Dangerous! If false, the store is not locked. It means that several installations using the same store can run simultaneously."),Object(r.b)("p",null,"Can be passed in via a CLI option. ",Object(r.b)("inlineCode",{parentName:"p"},"--no-lock")," to set it to false. E.g.: ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install --no-lock"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you experience issues similar to the ones described in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/594"},"#594"),", use this option to disable locking. In the meanwhile, we'll try to find a solution that will make locking work for everyone.")),Object(r.b)("h3",{id:"independent-leaves"},"independent-leaves"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, symlinks leaf dependencies directly from the global store. Leaf dependencies are packages that have no dependencies of their own. Setting this config to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," might break some packages that rely on location but gives an average of ",Object(r.b)("strong",{parentName:"p"},"8% installation speed improvement"),"."),Object(r.b)("h3",{id:"verify-store-integrity"},"verify-store-integrity"),Object(r.b)("p",null,"Added in: v1.8.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If false, doesn't check whether packages in the store were mutated."),Object(r.b)("h3",{id:"package-import-method"},"package-import-method"),Object(r.b)("p",null,"Added in: v1.25.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"auto")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"auto"),", ",Object(r.b)("strong",{parentName:"li"},"hardlink"),", ",Object(r.b)("strong",{parentName:"li"},"copy"),", ",Object(r.b)("strong",{parentName:"li"},"reflink"))),Object(r.b)("p",null,"Controls the way packages are imported from the store."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"auto")," - try to hardlink packages from the store. If it fails, fallback to copy"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hardlink")," - hardlink packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"copy")," - copy packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reflink")," - reflink (aka copy-on-write) packages from the store")),Object(r.b)("h3",{id:"lockfile"},"lockfile"),Object(r.b)("p",null,"Added in: v1.32.0 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),Object(r.b)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),Object(r.b)("p",null,"Added in: v1.37.1 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")," (from v1.38.0)"),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and the available ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," then a headless installation is performed. A headless installation is faster than a regular one because it skips dependencies resolution and peers resolution."),Object(r.b)("h3",{id:"use-running-store-server"},"use-running-store-server"),Object(r.b)("p",null,"Added in: v2.5.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),Object(r.b)("h3",{id:"side-effects-cache"},"side-effects-cache"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Use and cache the results of (pre/post)install hooks."),Object(r.b)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only use the side effects cache if present, do not create it for new packages."),Object(r.b)("h3",{id:"shamefully-flatten"},"shamefully-flatten"),Object(r.b)("p",null,"Added in: v1.34.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, pnpm creates a flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," that look almost like a ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm or Yarn. Please only use this option when there is no other way to make a project work with pnpm. The strict ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm should always work, if it does not, most likely a dependency is missing from ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". Use this config only as a temporary fix."),Object(r.b)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),Object(r.b)("p",null,"Added in: v2.15.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, commands fail on missing or invalid peer dependencies."),Object(r.b)("h3",{id:"resolution-strategy"},"resolution-strategy"),Object(r.b)("p",null,"Added in: v3.1.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"fast")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"fast"),", ",Object(r.b)("strong",{parentName:"li"},"fewer-dependencies"))),Object(r.b)("p",null,"Sets the resolutions strategy used during installation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fast")," - the default resolution strategy. Speed is preferred over deduplication"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fewer-dependencies")," - already installed dependencies are preferred even if newer versions satisfy a range")),Object(r.b)("h3",{id:"use-beta-cli"},"use-beta-cli"),Object(r.b)("p",null,"Added in: v3.6.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", beta features of the CLI are used. This means that you may get some changes to the CLI functionality that are breaking changes."),Object(r.b)("h3",{id:"engine-strict"},"engine-strict"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If set to true, then pnpm will stubbornly refuse to install (or even consider installing) any package that claims to not be compatible with the current Node.js version."),Object(r.b)("p",null,"Regardless of this config, installation will always fail when a project (not a dependency) will specify an incompatible pnpm version in its ",Object(r.b)("inlineCode",{parentName:"p"},"engines")," field."),Object(r.b)("h3",{id:"fetch-retries"},"fetch-retries"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"2")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "retries" config for the retry module to use when fetching packages from the registry.'),Object(r.b)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"10")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "factor" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"10000 (10 seconds)")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "minTimeout" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"60000 (1 minute)")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "maxTimeout" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"https-proxy"},"https-proxy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"A proxy to use for outgoing https requests. If the ",Object(r.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," or ",Object(r.b)("inlineCode",{parentName:"p"},"https_proxy")," or ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",Object(r.b)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, proxy settings will be honored by the underlying request library."),Object(r.b)("h3",{id:"key"},"key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format with newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),Object(r.b)("p",null,'It is not the path to a key file (and there is no "keyfile" option).'),Object(r.b)("h3",{id:"local-address"},"local-address"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"undefined")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"IP Address"))),Object(r.b)("p",null,"The IP address of the local interface to use when making connections to the npm registry. Must be IPv4 in versions of Node prior to 0.12."),Object(r.b)("h3",{id:"proxy"},"proxy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library."),Object(r.b)("h3",{id:"registry"},"registry"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"The base URL of the npm package registry."),Object(r.b)("h3",{id:"save-prefix"},"save-prefix"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"'^'")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,"Configure how versions of packages installed to a ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file get prefixed."),Object(r.b)("p",null,"For example, if a package has version ",Object(r.b)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to ",Object(r.b)("inlineCode",{parentName:"p"},"^1.2.3")," which allows minor upgrades for that package, but after ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'")," it would be set to ",Object(r.b)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows patch upgrades."),Object(r.b)("p",null,"This config is ignored when the added package has a range specified. For instance, ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will add ",Object(r.b)("inlineCode",{parentName:"p"},"2")," to ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", regardless of the value of ",Object(r.b)("inlineCode",{parentName:"p"},"save-prefix"),"."),Object(r.b)("h3",{id:"strict-ssl"},"strict-ssl"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Whether or not to do SSL key validation when making requests to the registry via https."),Object(r.b)("p",null,"See also the ",Object(r.b)("inlineCode",{parentName:"p"},"ca")," config."),Object(r.b)("h3",{id:"tag"},"tag"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"latest")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,"If you ask pnpm to install a package and don\u2019t tell it a specific version, then it will install the specified tag."),Object(r.b)("p",null,"Also the tag that is added to the ",Object(r.b)("inlineCode",{parentName:"p"},"package@version")," specified by the ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm tag")," command, if no explicit tag is given."),Object(r.b)("h3",{id:"unsafe-perm"},"unsafe-perm"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false if running as root, true otherwise")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Set to true to suppress the UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail."))}p.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?l.a.createElement(d,c(c({ref:t},o),{},{components:n})):l.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);