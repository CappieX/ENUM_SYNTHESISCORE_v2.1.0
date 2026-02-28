const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-DebOuiqR.js","assets/vendor-three-DEOYLwZ5.js","assets/vendor-framer-BZIjBYtZ.js","assets/Toggle-R9nab3-G.js","assets/plus-tWZbJ_UD.js","assets/Templates-rdJKTBeo.js","assets/MyProjects-Bxfd_nrB.js","assets/AIAssistant-DcTI0P5B.js","assets/Settings-C3YvsvYd.js"])))=>i.map(i=>d[i]);
import{a as e,j as t,m as n,u as r,b as s,A as i,R as a}from"./vendor-framer-BZIjBYtZ.js";import{c as o,p as c,_ as l,R as u}from"./vendor-three-DEOYLwZ5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var h="popstate";function d(e){return"object"==typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function p(e={}){return function(e,t,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,o="POP",c=null,l=u();null==l&&(l=0,a.replaceState({...a.state,idx:l},""));function u(){return(a.state||{idx:null}).idx}function p(){o="POP";let e=u(),t=null==e?null:e-l;l=e,c&&c({action:o,location:x.location,delta:t})}function m(e,t){o="PUSH";let n=d(e)?e:y(x.location,e,t);l=u()+1;let r=g(n,l),h=x.createHref(n.unstable_mask||n);try{a.pushState(r,"",h)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;s.location.assign(h)}i&&c&&c({action:o,location:x.location,delta:1})}function b(e,t){o="REPLACE";let n=d(e)?e:y(x.location,e,t);l=u();let r=g(n,l),s=x.createHref(n.unstable_mask||n);a.replaceState(r,"",s),i&&c&&c({action:o,location:x.location,delta:0})}function w(e){return function(e,t=!1){let n="http://localhost";"undefined"!=typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href);f(n,"No window.location.(origin|href) available to create URL");let r="string"==typeof e?e:v(e);r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r);return new URL(r,n)}(e)}let x={get action(){return o},get location(){return e(s,a)},listen(e){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(h,p),c=e,()=>{s.removeEventListener(h,p),c=null}},createHref:e=>t(s,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:m,replace:b,go:e=>a.go(e)};return x}(function(e,t){let n=t.state?.masked,{pathname:r,search:s,hash:i}=n||e.location;return y("",{pathname:r,search:s,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"==typeof t?t:v(t)},0,e)}function f(e,t){if(!1===e||null==e)throw new Error(t)}function m(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function g(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function y(e,t,n=null,r,s){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?b(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:s}}function v({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function w(e,t,n="/"){return function(e,t,n,r){let s="string"==typeof t?b(t):t,i=O(s.pathname||"/",n);if(null==i)return null;let a=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let c=0;null==o&&c<a.length;++c){let e=P(i);o=R(a[c],e,r)}return o}(e,t,n,!1)}function x(e,t=[],n=[],r="",s=!1){let i=(e,i,a=s,o)=>{let c={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&a)return;f(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=F([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(f(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),x(e.children,t,u,l,a)),(null!=e.path||e.index)&&t.push({path:l,score:A(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of E(e.path))i(e,t,!0,n);else i(e,t)}),t}function E(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return s?[i,""]:[i];let a=E(r.join("/")),o=[];return o.push(...a.map(e=>""===e?i:[i,e].join("/"))),s&&o.push(...a),o.map(t=>e.startsWith("/")&&""===t?"/":t)}var _=/^:[\w-]+$/,k=3,T=2,I=1,S=10,C=-2,N=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=C),t&&(r+=T),n.filter(e=>!N(e)).reduce((e,t)=>e+(_.test(t)?k:""===t?I:S),r)}function R(e,t,n=!1){let{routesMeta:r}=e,s={},i="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],c=o===r.length-1,l="/"===i?t:t.slice(i.length)||"/",u=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:c},l),h=e.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=D({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},l)),!u)return null;Object.assign(s,u.params),a.push({params:s,pathname:F([i,u.pathname]),pathnameBase:z(F([i,u.pathnameBase])),route:h}),"/"!==u.pathnameBase&&(i=F([i,u.pathnameBase]))}return a}function D(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){m("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,s,i)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=i.charAt(s+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");e.endsWith("*")?(r.push({paramName:"*"}),s+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":""!==e&&"/"!==e&&(s+="(?:(?=\\/|$))");let i=new RegExp(s,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=o[r]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=o[r];return e[t]=n&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:a,pattern:e}}function P(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return m(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var L=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function j(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function M(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function V(e,t,n,r=!1){let s;"string"==typeof e?s=b(e):(s={...e},f(!s.pathname||!s.pathname.includes("?"),M("?","pathname","search",s)),f(!s.pathname||!s.pathname.includes("#"),M("#","pathname","hash",s)),f(!s.search||!s.search.includes("#"),M("#","search","hash",s)));let i,a=""===e||""===s.pathname,o=a?"/":s.pathname;if(null==o)i=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;s.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t="/"){let n,{pathname:r,search:s="",hash:i=""}="string"==typeof e?b(e):e;return r?(r=r.replace(/\/\/+/g,"/"),n=r.startsWith("/")?j(r.substring(1),"/"):j(r,t)):n=t,{pathname:n,search:$(s),hash:B(i)}}(s,i),l=o&&"/"!==o&&o.endsWith("/"),u=(a||"."===o)&&n.endsWith("/");return c.pathname.endsWith("/")||!l&&!u||(c.pathname+="/"),c}var F=e=>e.join("/").replace(/\/\/+/g,"/"),z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",q=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function H(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var G="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function K(e,t){let n=e;if("string"!=typeof n||!L.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,s=!1;if(G)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),i=O(r.pathname,t);r.origin===e.origin&&null!=i?n=i+r.search+r.hash:s=!0}catch(i){m(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var W=["POST","PUT","PATCH","DELETE"];new Set(W);var J=["GET",...W];new Set(J);var Q=e.createContext(null);Q.displayName="DataRouter";var Y=e.createContext(null);Y.displayName="DataRouterState";var X=e.createContext(!1),Z=e.createContext({isTransitioning:!1});Z.displayName="ViewTransition",e.createContext(new Map).displayName="Fetchers",e.createContext(null).displayName="Await";var ee=e.createContext(null);ee.displayName="Navigation";var te=e.createContext(null);te.displayName="Location";var ne=e.createContext({outlet:null,matches:[],isDataRoute:!1});ne.displayName="Route";var re=e.createContext(null);re.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ie(){return null!=e.useContext(te)}function ae(){return f(ie(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(te).location}var oe="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ce(t){e.useContext(ee).static||e.useLayoutEffect(t)}function le(){let{isDataRoute:t}=e.useContext(ne);return t?function(){let{router:t}=function(t){let n=e.useContext(Q);return f(n,be(t)),n}("useNavigate"),n=we("useNavigate"),r=e.useRef(!1);return ce(()=>{r.current=!0}),e.useCallback(async(e,s={})=>{m(r.current,oe),r.current&&("number"==typeof e?await t.navigate(e):await t.navigate(e,{fromRouteId:n,...s}))},[t,n])}():function(){f(ie(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(Q),{basename:n,navigator:r}=e.useContext(ee),{matches:s}=e.useContext(ne),{pathname:i}=ae(),a=JSON.stringify(U(s)),o=e.useRef(!1);return ce(()=>{o.current=!0}),e.useCallback((e,s={})=>{if(m(o.current,oe),!o.current)return;if("number"==typeof e)return void r.go(e);let c=V(e,JSON.parse(a),i,"path"===s.relative);null==t&&"/"!==n&&(c.pathname="/"===c.pathname?n:F([n,c.pathname])),(s.replace?r.replace:r.push)(c,s.state,s)},[n,r,a,i,t])}()}var ue=e.createContext(null);function he(t,{relative:n}={}){let{matches:r}=e.useContext(ne),{pathname:s}=ae(),i=JSON.stringify(U(r));return e.useMemo(()=>V(t,JSON.parse(i),s,"path"===n),[t,i,s,n])}function de(t,n,r){f(ie(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=e.useContext(ee),{matches:i}=e.useContext(ne),a=i[i.length-1],o=a?a.params:{},c=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route;{let e=u&&u.path||"";Ee(c,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let h,d=ae();if(n){let e="string"==typeof n?b(n):n;f("/"===l||e.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`),h=e}else h=d;let p=h.pathname||"/",g=p;if("/"!==l){let e=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=w(t,{pathname:g});m(u||null!=y,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),m(null==y||void 0!==y[y.length-1].route.element||void 0!==y[y.length-1].route.Component||void 0!==y[y.length-1].route.lazy,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=function(t,n=[],r){let s=r?.state;if(null==t){if(!s)return null;if(s.errors)t=s.matches;else{if(0!==n.length||s.initialized||!(s.matches.length>0))return null;t=s.matches}}let i=t,a=s?.errors;if(null!=a){let e=i.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);f(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,c=-1;if(r&&s){o=s.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:n}=s,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){r.isStatic&&(o=!0),i=c>=0?i.slice(0,c+1):[i[0]];break}}}}let l=r?.onError,u=s&&l?(e,t)=>{l(e,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:H(s.matches),errorInfo:t})}:void 0;return i.reduceRight((t,r,l)=>{let h,d=!1,p=null,f=null;s&&(h=a&&r.route.id?a[r.route.id]:void 0,p=r.route.errorElement||fe,o&&(c<0&&0===l?(Ee("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):c===l&&(d=!0,f=r.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,l+1)),g=()=>{let n;return n=h?p:d?f:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(ve,{match:r,routeContext:{outlet:t,matches:m,isDataRoute:null!=s},children:n})};return s&&(r.route.ErrorBoundary||r.route.errorElement||0===l)?e.createElement(me,{location:s.location,revalidation:s.revalidation,component:p,error:h,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:F([l,s.encodeLocation?s.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:F([l,s.encodeLocation?s.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,r);return n&&v?e.createElement(te.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...h},navigationType:"POP"}},v):v}function pe(){let t=function(){let t=e.useContext(re),n=function(t){let n=e.useContext(Y);return f(n,be(t)),n}("useRouteError"),r=we("useRouteError");if(void 0!==t)return t;return n.errors?.[r]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=e.createElement(e.Fragment,null,e.createElement("p",null,"💿 Hey developer 👋"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,o)}var fe=e.createElement(pe,null),me=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let t=this.state.error;if(this.context&&"object"==typeof t&&t&&"digest"in t&&"string"==typeof t.digest){const e=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText)return new q(t.status,t.statusText,t.data)}catch{}}(t.digest);e&&(t=e)}let n=void 0!==t?e.createElement(ne.Provider,{value:this.props.routeContext},e.createElement(re.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?e.createElement(ye,{error:t},n):n}};me.contextType=X;var ge=new WeakMap;function ye({children:t,error:n}){let{basename:r}=e.useContext(ee);if("object"==typeof n&&n&&"digest"in n&&"string"==typeof n.digest){let t=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"==typeof t&&t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"string"==typeof t.location&&"boolean"==typeof t.reloadDocument&&"boolean"==typeof t.replace)return t}catch{}}(n.digest);if(t){let s=ge.get(n);if(s)throw s;let i=K(t.location,r);if(G&&!ge.get(n)){if(!i.isExternal&&!t.reloadDocument){const e=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:t.replace}));throw ge.set(n,e),e}window.location.href=i.absoluteURL||i.to}return e.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function ve({routeContext:t,match:n,children:r}){let s=e.useContext(Q);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(ne.Provider,{value:t},r)}function be(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function we(t){let n=function(t){let n=e.useContext(ne);return f(n,be(t)),n}(t),r=n.matches[n.matches.length-1];return f(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}var xe={};function Ee(e,t,n){t||xe[e]||(xe[e]=!0,m(!1,n))}function _e({to:t,replace:n,state:r,relative:s}){f(ie(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=e.useContext(ee);m(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=e.useContext(ne),{pathname:o}=ae(),c=le(),l=V(t,U(a),o,"path"===s),u=JSON.stringify(l);return e.useEffect(()=>{c(JSON.parse(u),{replace:n,state:r,relative:s})},[c,u,s,n,r]),null}function ke(t){return function(t){let n=e.useContext(ne).outlet;return e.useMemo(()=>n&&e.createElement(ue.Provider,{value:t},n),[n,t])}(t.context)}function Te(e){f(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ie({basename:t="/",children:n=null,location:r,navigationType:s="POP",navigator:i,static:a=!1,unstable_useTransitions:o}){f(!ie(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),l=e.useMemo(()=>({basename:c,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[c,i,a,o]);"string"==typeof r&&(r=b(r));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:g="default",unstable_mask:y}=r,v=e.useMemo(()=>{let e=O(u,c);return null==e?null:{location:{pathname:e,search:h,hash:d,state:p,key:g,unstable_mask:y},navigationType:s}},[c,u,h,d,p,g,s,y]);return m(null!=v,`<Router basename="${c}"> is not able to match the URL "${u}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:e.createElement(ee.Provider,{value:l},e.createElement(te.Provider,{children:n,value:v}))}function Se({children:e,location:t}){return de(Ce(e),t)}function Ce(t,n=[]){let r=[];return e.Children.forEach(t,(t,s)=>{if(!e.isValidElement(t))return;let i=[...n,s];if(t.type===e.Fragment)return void r.push.apply(r,Ce(t.props.children,i));f(t.type===Te,`[${"string"==typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),f(!t.props.index||!t.props.children,"An index route cannot have child routes.");let a={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,middleware:t.props.middleware,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=Ce(t.props.children,i)),r.push(a)}),r}e.memo(function({routes:e,future:t,state:n,isStatic:r,onError:s}){return de(e,void 0,{state:n,isStatic:r,onError:s})});var Ne="get",Ae="application/x-www-form-urlencoded";function Re(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}var De=null;var Pe=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oe(e){return null==e||Pe.has(e)?e:(m(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ae}"`),null)}function Le(e,t){let n,r,s,i,a;if(Re(o=e)&&"form"===o.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?O(a,t):null,n=e.getAttribute("method")||Ne,s=Oe(e.getAttribute("enctype"))||Ae,i=new FormData(e)}else if(function(e){return Re(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Re(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||a.getAttribute("action");if(r=o?O(o,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Ne,s=Oe(e.getAttribute("formenctype"))||Oe(a.getAttribute("enctype"))||Ae,i=new FormData(a,e),!function(){if(null===De)try{new FormData(document.createElement("form"),0),De=!1}catch(e){De=!0}return De}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Re(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ne,r=null,s=Ae,a=e}var o;return i&&"text/plain"===s&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:a}}function je(e,t){if(!1===e||null==e)throw new Error(t)}function Me(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function Ue(e,t,n){return function(e,t){let n=new Set;return new Set(t),e.reduce((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(t));return n.has(r)||(n.add(r),e.push({key:r,link:t})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Me).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function Ve(e,t,n,r,s,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,o=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>a(e,t)||o(e,t)):"data"===i?t.filter((t,i)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(a(t,i)||o(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function Fe(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1),[...new Set(r)];var r}function ze(){let t=e.useContext(Q);return je(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $e=e.createContext(void 0);function Be(){let t=e.useContext($e);return je(t,"You must render this element inside a <HydratedRouter> element"),t}function qe(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He({page:t,...n}){let{router:r}=ze(),s=e.useMemo(()=>w(r.routes,t,r.basename),[r.routes,t,r.basename]);return s?e.createElement(Ge,{page:t,matches:s,...n}):null}function Ge({page:t,matches:n,...r}){let s=ae(),{future:i,manifest:a,routeModules:o}=Be(),{basename:c}=ze(),{loaderData:l,matches:u}=function(){let t=e.useContext(Y);return je(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}(),h=e.useMemo(()=>Ve(t,n,u,a,s,"data"),[t,n,u,a,s]),d=e.useMemo(()=>Ve(t,n,u,a,s,"assets"),[t,n,u,a,s]),p=e.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=a.routes[t.route.id];n&&n.hasLoader&&(!h.some(e=>e.route.id===t.route.id)&&t.route.id in l&&o[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let u=function(e,t,n,r){let s="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${r}`:s.pathname=`${s.pathname}.${r}`:"/"===s.pathname?s.pathname=`_root.${r}`:t&&"/"===O(s.pathname,t)?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}(t,c,i.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&u.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[u.pathname+u.search]},[c,i.unstable_trailingSlashAwareDataRequests,l,s,a,h,n,t,o]),f=e.useMemo(()=>Fe(d,a),[d,a]),m=function(t){let{manifest:n,routeModules:r}=Be(),[s,i]=e.useState([]);return e.useEffect(()=>{let e=!1;return Ue(t,n,r).then(t=>{e||i(t)}),()=>{e=!0}},[t,n,r]),s}(d);return e.createElement(e.Fragment,null,p.map(t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...r})),f.map(t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...r})),m.map(({key:t,link:n})=>e.createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})))}function Ke(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}$e.displayName="FrameworkContext";var We="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{We&&(window.__reactRouterVersion="7.13.1")}catch(by){}function Je({basename:t,children:n,unstable_useTransitions:r,window:s}){let i=e.useRef();null==i.current&&(i.current=p({window:s,v5Compat:!0}));let a=i.current,[o,c]=e.useState({action:a.action,location:a.location}),l=e.useCallback(t=>{!1===r?c(t):e.startTransition(()=>c(t))},[r]);return e.useLayoutEffect(()=>a.listen(l),[a,l]),e.createElement(Ie,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:r})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=e.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:a,unstable_mask:o,state:c,target:l,to:u,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:p,...m},g){let{basename:y,navigator:b,unstable_useTransitions:w}=e.useContext(ee),x="string"==typeof u&&Qe.test(u),E=K(u,y),_=function(t,{relative:n}={}){f(ie(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=e.useContext(ee),{hash:i,pathname:a,search:o}=he(t,{relative:n}),c=a;return"/"!==r&&(c="/"===a?r:F([r,a])),s.createHref({pathname:c,search:o,hash:i})}(u=E.to,{relative:s}),k=ae(),T=null;if(o){let e=V(o,[],k.unstable_mask?k.unstable_mask.pathname:"/",!0);"/"!==y&&(e.pathname="/"===e.pathname?y:F([y,e.pathname])),T=b.createHref(e)}let[I,S,C]=function(t,n){let r=e.useContext($e),[s,i]=e.useState(!1),[a,o]=e.useState(!1),{onFocus:c,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:d}=n,p=e.useRef(null);e.useEffect(()=>{if("render"===t&&o(!0),"viewport"===t){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[t]),e.useEffect(()=>{if(s){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[s]);let f=()=>{i(!0)},m=()=>{i(!1),o(!1)};return r?"intent"!==t?[a,p,{}]:[a,p,{onFocus:qe(c,f),onBlur:qe(l,m),onMouseEnter:qe(u,f),onMouseLeave:qe(h,m),onTouchStart:qe(d,f)}]:[!1,p,{}]}(r,m),N=function(t,{target:n,replace:r,unstable_mask:s,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let h=le(),d=ae(),p=he(t,{relative:o});return e.useCallback(f=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(f,n)){f.preventDefault();let n=void 0!==r?r:v(d)===v(p),m=()=>h(t,{replace:n,unstable_mask:s,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:l});u?e.startTransition(()=>m()):m()}},[d,h,p,r,s,i,n,t,a,o,c,l,u])}(u,{replace:a,unstable_mask:o,state:c,target:l,preventScrollReset:h,relative:s,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:w});let A=!(E.isExternal||i),R=e.createElement("a",{...m,...C,href:(A?T:void 0)||E.absoluteURL||_,onClick:A?function(e){t&&t(e),e.defaultPrevented||N(e)}:t,ref:Ke(g,S),target:l,"data-discover":x||"render"!==n?void 0:"true"});return I&&!x?e.createElement(e.Fragment,null,R,e.createElement(He,{page:_})):R});Ye.displayName="Link";var Xe=e.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:a,viewTransition:o,children:c,...l},u){let h=he(a,{relative:l.relative}),d=ae(),p=e.useContext(Y),{navigator:m,basename:g}=e.useContext(ee),y=null!=p&&function(t,{relative:n}={}){let r=e.useContext(Z);f(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=et("useViewTransitionState"),i=he(t,{relative:n});if(!r.isTransitioning)return!1;let a=O(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=O(r.nextLocation.pathname,s)||r.nextLocation.pathname;return null!=D(i.pathname,o)||null!=D(i.pathname,a)}(h)&&!0===o,v=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,b=d.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(b=b.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&g&&(w=O(w,g)||w);const x="/"!==v&&v.endsWith("/")?v.length-1:v.length;let E,_=b===v||!s&&b.startsWith(v)&&"/"===b.charAt(x),k=null!=w&&(w===v||!s&&w.startsWith(v)&&"/"===w.charAt(v.length)),T={isActive:_,isPending:k,isTransitioning:y},I=_?t:void 0;E="function"==typeof r?r(T):[r,_?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let S="function"==typeof i?i(T):i;return e.createElement(Ye,{...l,"aria-current":I,className:E,ref:u,style:S,to:a,viewTransition:o},"function"==typeof c?c(T):c)});Xe.displayName="NavLink";var Ze=e.forwardRef(({discover:t="render",fetcherKey:n,navigate:r,reloadDocument:s,replace:i,state:a,method:o=Ne,action:c,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:p,...m},g)=>{let{unstable_useTransitions:y}=e.useContext(ee),b=function(){let{router:t}=et("useSubmit"),{basename:n}=e.useContext(ee),r=we("useRouteId"),s=t.fetch,i=t.navigate;return e.useCallback(async(e,t={})=>{let{action:a,method:o,encType:c,formData:l,body:u}=Le(e,n);if(!1===t.navigate){let e=t.fetcherKey||nt();await s(e,r,t.action||a,{unstable_defaultShouldRevalidate:t.unstable_defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,formData:l,body:u,formMethod:t.method||o,formEncType:t.encType||c,flushSync:t.flushSync})}else await i(t.action||a,{unstable_defaultShouldRevalidate:t.unstable_defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,formData:l,body:u,formMethod:t.method||o,formEncType:t.encType||c,replace:t.replace,state:t.state,fromRouteId:r,flushSync:t.flushSync,viewTransition:t.viewTransition})},[s,i,n,r])}(),w=function(t,{relative:n}={}){let{basename:r}=e.useContext(ee),s=e.useContext(ne);f(s,"useFormAction must be used inside a RouteContext");let[i]=s.matches.slice(-1),a={...he(t||".",{relative:n})},o=ae();if(null==t){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}t&&"."!==t||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:F([r,a.pathname]));return v(a)}(c,{relative:u}),x="get"===o.toLowerCase()?"get":"post",E="string"==typeof c&&Qe.test(c);return e.createElement("form",{ref:g,method:x,action:w,onSubmit:s?l:t=>{if(l&&l(t),t.defaultPrevented)return;t.preventDefault();let s=t.nativeEvent.submitter,c=s?.getAttribute("formmethod")||o,f=()=>b(s||t.currentTarget,{fetcherKey:n,method:c,navigate:r,replace:i,state:a,relative:u,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:p});y&&!1!==r?e.startTransition(()=>f()):f()},...m,"data-discover":E||"render"!==t?void 0:"true"})});function et(t){let n=e.useContext(Q);return f(n,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(t)),n}Ze.displayName="Form";var tt=0,nt=()=>`__${String(++tt)}__`;var rt={};function st(){return"undefined"!=typeof window}function it(){try{}catch(by){}return"production"}function at(){return"development"===((st()?window.vam:it())||"production")}function ot(e={debug:!0}){var t;if(!st())return;!function(e="auto"){window.vam="auto"!==e?e:it()}(e.mode),window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)}),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));const n=function(e){return e.scriptSrc?e.scriptSrc:at()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js"}(e);if(document.head.querySelector(`script[src*="${n}"]`))return;const r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),r.dataset.sdkv="1.6.1",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint?r.dataset.endpoint=e.endpoint:e.basePath&&(r.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{const e=at()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},at()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}function ct(){if("undefined"!=typeof process)return rt.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function lt(t){return e.useEffect(()=>{var e;t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),e.useEffect(()=>{ot({framework:t.framework||"react",basePath:t.basePath??ct(),...void 0!==t.route&&{disableAutoTrack:!0},...t})},[]),e.useEffect(()=>{t.route&&t.path&&function({route:e,path:t}){var n;null==(n=window.va)||n.call(window,"pageview",{route:e,path:t})}({route:t.route,path:t.path})},[t.route,t.path]),null}
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),ht=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1},ft=e.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:i="",children:a,iconNode:o,...c},l)=>e.createElement("svg",{ref:l,...dt,width:n,height:n,stroke:t,strokeWidth:s?24*Number(r)/Number(n):r,className:ut("lucide",i),...!a&&!pt(c)&&{"aria-hidden":"true"},...c},[...o.map(([t,n])=>e.createElement(t,n)),...Array.isArray(a)?a:[a]])),mt=(t,n)=>{const r=e.forwardRef(({className:r,...s},i)=>{return e.createElement(ft,{ref:i,iconNode:n,className:ut(`lucide-${a=ht(t),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${t}`,r),...s});var a});return r.displayName=ht(t),r},gt=mt("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),yt=mt("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),vt=mt("box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),bt=mt("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),wt=mt("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),xt=mt("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),Et=mt("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),_t=mt("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),kt=mt("folder-git-2",[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]),Tt=mt("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),It=mt("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),St=mt("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),Ct=mt("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),Nt=mt("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),At=mt("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),Rt=mt("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Dt=mt("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Pt=mt("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]),Ot=mt("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),Lt=mt("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]),jt=mt("message-square-text",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]),Mt=mt("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),Ut=mt("mouse-pointer-2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]),Vt=mt("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Ft=mt("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),zt=mt("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),$t=mt("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),Bt=mt("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]),qt=mt("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ht=mt("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Gt=mt("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Kt=mt("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Wt={duration:3,repeat:1/0,ease:"easeInOut"},Jt={duration:20,repeat:1/0,ease:"linear"},Qt=()=>t.jsxs("div",{className:"relative w-12 h-12 flex items-center justify-center",children:[t.jsx(n.div,{animate:{rotate:[0,360]},transition:Jt,className:"absolute inset-0 border-2 border-primary-bright/30 rounded-lg blur-[1px]"}),t.jsx(n.div,{animate:{rotate:[-360,0]},transition:{duration:15,repeat:1/0,ease:"linear"},className:"absolute inset-1 border-2 border-primary-accent/40 rounded-full blur-[2px]"}),t.jsx(n.img,{src:"/assets/logo-VcCOJxtZ.png",alt:"Enum Synthesis Engine Logo",className:"w-8 h-8 relative z-10 drop-shadow-[0_0_8px_rgba(64,224,208,0.5)] object-contain",animate:{scale:[1,1.05,1],filter:["brightness(1) contrast(1)","brightness(1.2) contrast(1.1)","brightness(1) contrast(1)"]},transition:Wt})]}),Yt=()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"w-8 h-8",children:[t.jsx(n.circle,{cx:"32",cy:"32",r:"28",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"10,5",animate:{rotate:360},transition:Jt}),t.jsx("rect",{x:"20",y:"20",width:"10",height:"10",fill:"currentColor",opacity:"0.5"}),t.jsx("rect",{x:"34",y:"34",width:"10",height:"10",fill:"currentColor"}),t.jsx(n.path,{d:"M25,30 L39,34",stroke:"currentColor",strokeWidth:"2",animate:{opacity:[.8,1,.8],scale:[1,1.05,1]},transition:Wt})]}),Xt=()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"w-8 h-8",children:[t.jsx("rect",{x:"22",y:"12",width:"20",height:"40",rx:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx(n.path,{d:"M24,20 Q32,25 40,20 M24,30 Q32,35 40,30 M24,40 Q32,45 40,40",stroke:"currentColor",strokeWidth:"2",fill:"none",animate:{opacity:[.2,1,.2]},transition:{duration:2,repeat:1/0}})]}),Zt=()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"w-8 h-8",children:[[{x:32,y:15},{x:15,y:40},{x:49,y:40}].map((e,r)=>t.jsx(n.polygon,{points:`${e.x},${e.y-8} ${e.x+7},${e.y-4} ${e.x+7},${e.y+4} ${e.x},${e.y+8} ${e.x-7},${e.y+4} ${e.x-7},${e.y-4}`,fill:"currentColor",animate:{scale:[1,1.1,1],opacity:[.6,1,.6]},transition:{delay:.2*r,duration:2,repeat:1/0}},r)),t.jsx("path",{d:"M32,23 L20,35 M32,23 L44,35 M22,40 L42,40",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"2,2"})]}),en=()=>t.jsx("svg",{viewBox:"0 0 32 32",className:"w-6 h-6",children:t.jsx(n.path,{d:"M10,8 L24,16 L10,24 Z",fill:"currentColor",animate:{d:["M10,8 L24,16 L10,24 Z","M10,10 L22,10 L22,22 L10,22 Z","M10,8 L24,16 L10,24 Z"]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}})}),tn=o()(c(e=>({isAuthenticated:!1,userProfile:null,setAuthenticated:t=>e({isAuthenticated:t}),setUserProfile:t=>e({userProfile:t}),logout:()=>e({isAuthenticated:!1,userProfile:null,githubToken:null,user:null}),projectName:"GENESIS-ALPHA",destinationPath:"/root/projects/synthesis",selectedTemplate:"fullstack",gitEnabled:!0,dockerEnabled:!1,ciEnabled:!1,isDryRun:!1,githubToken:null,user:null,isGenerating:!1,isExplorerOpen:!1,isMoodBoardOpen:!1,logs:[`[${(new Date).toLocaleTimeString()}] System Ready. Waiting for synthesis command...`],setProjectName:t=>e({projectName:t}),setDestinationPath:t=>e({destinationPath:t}),setSelectedTemplate:t=>e({selectedTemplate:t}),setGitEnabled:t=>e({gitEnabled:t}),setDockerEnabled:t=>e({dockerEnabled:t}),setCiEnabled:t=>e({ciEnabled:t}),setDryRun:t=>e({isDryRun:t}),setGithubToken:t=>e({githubToken:t}),setUser:t=>e({user:t}),setIsGenerating:t=>e({isGenerating:t}),setIsExplorerOpen:t=>e({isExplorerOpen:t}),setIsMoodBoardOpen:t=>e({isMoodBoardOpen:t}),addLog:t=>e(e=>({logs:[...e.logs,`[${(new Date).toLocaleTimeString()}] ${t}`].slice(-100)})),clearLogs:()=>e({logs:[]}),resetConfig:()=>e({projectName:"GENESIS-ALPHA",destinationPath:"/root/projects/synthesis",selectedTemplate:"fullstack",gitEnabled:!0,dockerEnabled:!1,ciEnabled:!1})}),{name:"synthesis-engine-storage",partialize:e=>({isAuthenticated:e.isAuthenticated,userProfile:e.userProfile,githubToken:e.githubToken,user:e.user,projectName:e.projectName,destinationPath:e.destinationPath,selectedTemplate:e.selectedTemplate})}));
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nn={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},sn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,a=i?e[s+1]:0,o=s+2<e.length,c=o?e[s+2]:0,l=t>>2,u=(3&t)<<4|a>>4;let h=(15&a)<<2|c>>6,d=63&c;o||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length?n[e.charAt(s)]:0;++s;const a=s<e.length?n[e.charAt(s)]:64;++s;const o=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==i||null==a||null==o)throw new an;const c=t<<2|i>>4;if(r.push(c),64!==a){const e=i<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class an extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const on=function(e){return function(e){const t=rn(e);return sn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},cn=function(e){try{return sn.decodeString(e,!0)}catch(by){console.error("base64Decode failed: ",by)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,un=()=>{try{return ln()||(()=>{if("undefined"==typeof process)return;const e=nn.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(by){return}const t=e&&cn(e[1]);return t&&JSON.parse(t)})()}catch(by){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${by}`)}},hn=e=>un()?.emulatorHosts?.[e],dn=()=>un()?.config,pn=e=>un()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gn(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={};let vn=!1;function bn(e,t){if("undefined"==typeof window||"undefined"==typeof document||!mn(window.location.host)||yn[e]===t||yn[e]||vn)return;function n(e){return`__firebase__banner__${e}`}yn[e]=t;const r="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(yn))yn[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{vn=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),a=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),c=document.getElementById(o)||document.createElement("a"),l=n("preprendIcon"),u=document.getElementById(l)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(c,o);const n=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,l),t.append(u,a,c,n),document.body.appendChild(t)}s?(a.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function xn(){return!function(){const e=un()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(by){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class En extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(kn,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(s,n):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new En(r,a,n)}}const kn=/\{\$([^}]+)}/g;function Tn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(In(n)&&In(i)){if(!Tn(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function In(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Cn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Nn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class An{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Rn),void 0===r.error&&(r.error=Rn),void 0===r.complete&&(r.complete=Rn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(by){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(by){"undefined"!=typeof console&&console.error&&console.error(by)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rn(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return e&&e._delegate?e._delegate:e}class Pn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new fn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(by){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(by){if(n)return null;throw by}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch(by){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(by){}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===On?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class jn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ln(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Mn||(Mn={}));const Un={debug:Mn.DEBUG,verbose:Mn.VERBOSE,info:Mn.INFO,warn:Mn.WARN,error:Mn.ERROR,silent:Mn.SILENT},Vn=Mn.INFO,Fn={[Mn.DEBUG]:"log",[Mn.VERBOSE]:"log",[Mn.INFO]:"info",[Mn.WARN]:"warn",[Mn.ERROR]:"error"},zn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=Fn[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class $n{constructor(e){this.name=e,this._logLevel=Vn,this._logHandler=zn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mn))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Un[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mn.DEBUG,...e),this._logHandler(this,Mn.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mn.VERBOSE,...e),this._logHandler(this,Mn.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mn.INFO,...e),this._logHandler(this,Mn.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mn.WARN,...e),this._logHandler(this,Mn.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mn.ERROR,...e),this._logHandler(this,Mn.ERROR,...e)}}let Bn,qn;const Hn=new WeakMap,Gn=new WeakMap,Kn=new WeakMap,Wn=new WeakMap,Jn=new WeakMap;let Qn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Gn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Kn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Yn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(qn||(qn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(er(this),t),Zn(Hn.get(this))}:function(...t){return Zn(e.apply(er(this),t))}:function(t,...n){const r=e.call(er(this),t,...n);return Kn.set(r,t.sort?t.sort():[t]),Zn(r)}}function Xn(e){return"function"==typeof e?Yn(e):(e instanceof IDBTransaction&&function(e){if(Gn.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});Gn.set(e,t)}(e),t=e,(Bn||(Bn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Qn):e);var t}function Zn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Zn(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Hn.set(t,e)}).catch(()=>{}),Jn.set(t,e),t}(e);if(Wn.has(e))return Wn.get(e);const t=Xn(e);return t!==e&&(Wn.set(e,t),Jn.set(t,e)),t}const er=e=>Jn.get(e);const tr=["get","getKey","getAll","getAllKeys","count"],nr=["put","add","delete","clear"],rr=new Map;function sr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(rr.get(t))return rr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=nr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!tr.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),s&&i.done]))[0]};return rr.set(t,i),i}Qn=(e=>({...e,get:(t,n,r)=>sr(t,n)||e.get(t,n,r),has:(t,n)=>!!sr(t,n)||e.has(t,n)}))(Qn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const ar="@firebase/app",or="0.14.9",cr=new $n("@firebase/app"),lr="@firebase/app-compat",ur="@firebase/analytics-compat",hr="@firebase/analytics",dr="@firebase/app-check-compat",pr="@firebase/app-check",fr="@firebase/auth",mr="@firebase/auth-compat",gr="@firebase/database",yr="@firebase/data-connect",vr="@firebase/database-compat",br="@firebase/functions",wr="@firebase/functions-compat",xr="@firebase/installations",Er="@firebase/installations-compat",_r="@firebase/messaging",kr="@firebase/messaging-compat",Tr="@firebase/performance",Ir="@firebase/performance-compat",Sr="@firebase/remote-config",Cr="@firebase/remote-config-compat",Nr="@firebase/storage",Ar="@firebase/storage-compat",Rr="@firebase/firestore",Dr="@firebase/ai",Pr="@firebase/firestore-compat",Or="firebase",Lr="[DEFAULT]",jr={[ar]:"fire-core",[lr]:"fire-core-compat",[hr]:"fire-analytics",[ur]:"fire-analytics-compat",[pr]:"fire-app-check",[dr]:"fire-app-check-compat",[fr]:"fire-auth",[mr]:"fire-auth-compat",[gr]:"fire-rtdb",[yr]:"fire-data-connect",[vr]:"fire-rtdb-compat",[br]:"fire-fn",[wr]:"fire-fn-compat",[xr]:"fire-iid",[Er]:"fire-iid-compat",[_r]:"fire-fcm",[kr]:"fire-fcm-compat",[Tr]:"fire-perf",[Ir]:"fire-perf-compat",[Sr]:"fire-rc",[Cr]:"fire-rc-compat",[Nr]:"fire-gcs",[Ar]:"fire-gcs-compat",[Rr]:"fire-fst",[Pr]:"fire-fst-compat",[Dr]:"fire-vertex","fire-js":"fire-js",[Or]:"fire-js-all"},Mr=new Map,Ur=new Map,Vr=new Map;function Fr(e,t){try{e.container.addComponent(t)}catch(by){cr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,by)}}function zr(e){const t=e.name;if(Vr.has(t))return cr.debug(`There were multiple attempts to register component ${t}.`),!1;Vr.set(t,e);for(const n of Mr.values())Fr(n,e);for(const n of Ur.values())Fr(n,e);return!0}function $r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Br(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new _n("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="12.10.0";function Kr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Lr,automaticDataCollectionEnabled:!0,...t},s=r.name;if("string"!=typeof s||!s)throw qr.create("bad-app-name",{appName:String(s)});if(n||(n=dn()),!n)throw qr.create("no-options");const i=Mr.get(s);if(i){if(Tn(n,i.options)&&Tn(r,i.config))return i;throw qr.create("duplicate-app",{appName:s})}const a=new jn(s);for(const c of Vr.values())a.addComponent(c);const o=new Hr(n,r,a);return Mr.set(s,o),o}function Wr(e=Lr){const t=Mr.get(e);if(!t&&e===Lr&&dn())return Kr();if(!t)throw qr.create("no-app",{appName:e});return t}function Jr(e,t,n){let r=jr[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void cr.warn(e.join(" "))}zr(new Pn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="firebase-heartbeat-store";let Yr=null;function Xr(){return Yr||(Yr=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),o=Zn(a);return r&&a.addEventListener("upgradeneeded",e=>{r(Zn(a.result),e.oldVersion,e.newVersion,Zn(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Qr)}catch(by){console.warn(by)}}}).catch(e=>{throw qr.create("idb-open",{originalErrorMessage:e.message})})),Yr}async function Zr(e,t){try{const n=(await Xr()).transaction(Qr,"readwrite"),r=n.objectStore(Qr);await r.put(t,es(e)),await n.done}catch(by){if(by instanceof En)cr.warn(by.message);else{const t=qr.create("idb-set",{originalErrorMessage:by?.message});cr.warn(t.message)}}}function es(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rs(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ns();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(by){cr.warn(by)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=ns(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),ss(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ss(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=on(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(by){return cr.warn(by),""}}}function ns(){return(new Date).toISOString().substring(0,10)}class rs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(by){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Xr()).transaction(Qr),n=await t.objectStore(Qr).get(es(e));return await t.done,n}catch(by){if(by instanceof En)cr.warn(by.message);else{const t=qr.create("idb-get",{originalErrorMessage:by?.message});cr.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Zr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Zr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ss(e){return on(JSON.stringify({version:2,heartbeats:e})).length}var is;function as(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}is="",zr(new Pn("platform-logger",e=>new ir(e),"PRIVATE")),zr(new Pn("heartbeat",e=>new ts(e),"PRIVATE")),Jr(ar,or,is),Jr(ar,or,"esm2020"),Jr("fire-js","");const os=as,cs=new _n("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ls=new $n("@firebase/auth");function us(e,...t){ls.logLevel<=Mn.ERROR&&ls.error(`Auth (${Gr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,...t){throw ms(e,...t)}function ds(e,...t){return ms(e,...t)}function ps(e,t,n){const r={...os(),[t]:n};return new _n("auth","Firebase",r).create(t,{appName:e.name})}function fs(e){return ps(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ms(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cs.create(e,...t)}function gs(e,t,...n){if(!e)throw ms(t,...n)}function ys(e){const t="INTERNAL ASSERTION FAILED: "+e;throw us(t),new Error(t)}function vs(e,t){e||ys(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){return"undefined"!=typeof self&&self.location?.href||""}function ws(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ws()&&"https:"!==ws()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,vs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return xs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e,t){vs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Is=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ss=new Es(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Ns(e,t,n,r,s={}){return As(e,s,async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const a=Sn({key:e.config.apiKey,...i}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:o,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&mn(e.emulatorConfig.host)&&(c.credentials="include"),ks.fetch()(await Ds(e,e.config.apiHost,n,a),c)})}async function As(e,t,n){e._canInitEmulator=!1;const r={...Ts,...t};try{const t=new Os(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Ls(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ls(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Ls(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Ls(e,"user-disabled",i);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw ps(e,o,a);hs(e,o)}}catch(by){if(by instanceof En)throw by;hs(e,"network-request-failed",{message:String(by)})}}async function Rs(e,t,n,r,s={}){const i=await Ns(e,t,n,r,s);return"mfaPendingCredential"in i&&hs(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ds(e,t,n,r){const s=`${t}${n}?${r}`,i=e,a=i.config.emulator?_s(e.config,s):`${e.config.apiScheme}://${s}`;if(Is.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(a).toString()}return a}function Ps(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Os{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ds(this.auth,"network-request-failed")),Ss.get())})}}function Ls(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ds(e,t,r);return s.customData._tokenResponse=n,s}function js(e){return void 0!==e&&void 0!==e.enterprise}class Ms{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ps(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Us(e,t){return Ns(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(by){}}function Fs(e){return 1e3*Number(e)}function zs(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return us("JWT malformed, contained fewer than 3 sections"),null;try{const e=cn(n);return e?JSON.parse(e):(us("Failed to decode base64 JWT payload"),null)}catch(by){return us("Caught error parsing JWT payload as JSON",by?.toString()),null}}function $s(e){const t=zs(e);return gs(t,"internal-error"),gs(void 0!==t.exp,"internal-error"),gs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(e,t,n=!1){if(n)return t;try{return await t}catch(by){throw by instanceof En&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(by)&&e.auth.currentUser===e&&await e.auth.signOut(),by}}class qs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(by){return void("auth/network-request-failed"===by?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(e){const t=e.auth,n=await e.getIdToken(),r=await Bs(e,Us(t,{idToken:n}));gs(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ks(s.providerUserInfo):[],a=(o=e.providerData,c=i,[...o.filter(e=>!c.some(t=>t.providerId===e.providerId)),...c]);var o,c;const l=e.isAnonymous,u=!(e.email&&s.passwordHash||a?.length),h=!!l&&u,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hs(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function Ks(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gs(e.idToken,"internal-error"),gs(void 0!==e.idToken,"internal-error"),gs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):$s(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){gs(0!==e.length,"internal-error");const t=$s(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(gs(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await As(e,{},async()=>{const n=Sn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=await Ds(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:a,body:n};return e.emulatorConfig&&mn(e.emulatorConfig.host)&&(o.credentials="include"),ks.fetch()(i,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Ws;return n&&(gs("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(gs("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(gs("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return ys("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e,t){gs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Qs{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new qs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return gs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Dn(e),r=await n.getIdToken(t),s=zs(r);gs(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Vs(Fs(s.auth_time)),issuedAtTime:Vs(Fs(s.iat)),expirationTime:Vs(Fs(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Dn(e);await Gs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(gs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qs({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){gs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Gs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Br(this.auth.app))return Promise.reject(fs(this.auth));const e=await this.getIdToken();return await Bs(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Ns(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,c=t.createdAt??void 0,l=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:p,stsTokenManager:f}=t;gs(u&&f,e,"internal-error");const m=Ws.fromJSON(this.name,f);gs("string"==typeof u,e,"internal-error"),Js(n,e.name),Js(r,e.name),gs("boolean"==typeof h,e,"internal-error"),gs("boolean"==typeof d,e,"internal-error"),Js(s,e.name),Js(i,e.name),Js(a,e.name),Js(o,e.name),Js(c,e.name),Js(l,e.name);const g=new Qs({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:i,phoneNumber:s,tenantId:a,stsTokenManager:m,createdAt:c,lastLoginAt:l});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ws;r.updateFromServerResponse(t);const s=new Qs({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Gs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];gs(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?Ks(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||s?.length),a=new Ws;a.updateFromIdToken(n);const o=new Qs({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:i}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Hs(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||s?.length)};return Object.assign(o,c),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Map;function Xs(e){vs(e instanceof Function,"Expected a class definition");let t=Ys.get(e);return t?(vs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ys.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zs.type="NONE";const ei=Zs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return`firebase:${e}:${t}:${n}`}class ni{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ti(this.userKey,r.apiKey,s),this.fullPersistenceKey=ti("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Us(this.auth,{idToken:e}).catch(()=>{});return t?Qs._fromGetAccountInfoResponse(this.auth,t,e):null}return Qs._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ni(Xs(ei),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=r[0]||Xs(ei);const i=ti(n,e.config.apiKey,e.name);let a=null;for(const c of t)try{const t=await c._get(i);if(t){let n;if("string"==typeof t){const r=await Us(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Qs._fromGetAccountInfoResponse(e,r,t)}else n=Qs._fromJSON(e,t);c!==s&&(a=n),s=c;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&o.length?(s=o[0],a&&await s._set(i,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new ni(s,e,n)):new ni(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(si(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(li(t))return"Blackberry";if(ui(t))return"Webos";if(ii(t))return"Safari";if((t.includes("chrome/")||ai(t))&&!t.includes("edge/"))return"Chrome";if(ci(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function si(e=wn()){return/firefox\//i.test(e)}function ii(e=wn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ai(e=wn()){return/crios\//i.test(e)}function oi(e=wn()){return/iemobile/i.test(e)}function ci(e=wn()){return/android/i.test(e)}function li(e=wn()){return/blackberry/i.test(e)}function ui(e=wn()){return/webos/i.test(e)}function hi(e=wn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function di(){return function(){const e=wn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function pi(e=wn()){return hi(e)||ci(e)||ui(e)||li(e)||/windows phone/i.test(e)||oi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e,t=[]){let n;switch(e){case"Browser":n=ri(wn());break;case"Worker":n=`${ri(wn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(by){r(by)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(by){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:by?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bi(this),this.idTokenSubscription=new bi(this),this.beforeStateQueue=new mi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xs(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(by){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Us(this,{idToken:e}),n=await Qs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Br(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==s||!i?.user||(n=i.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(by){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(by))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return gs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(by){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gs(e)}catch(by){if("auth/network-request-failed"!==by?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Br(this.app))return Promise.reject(fs(this));const t=e?Dn(e):null;return t&&gs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&gs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Br(this.app)?Promise.reject(fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Br(this.app)?Promise.reject(fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xs(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Ns(e,"GET","/v2/passwordPolicy",Cs(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new gi(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _n("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Ns(e,"POST","/v2/accounts:revokeToken",Cs(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xs(e)||this._popupRedirectResolver;gs(t,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[Xs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(gs(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Br(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){ls.logLevel<=Mn.WARN&&ls.warn(`Auth (${Gr}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vi(e){return Dn(e)}class bi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new An(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return gs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xi(e){return wi.loadJS(e)}class Ei{constructor(){this.enterprise=new _i}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _i{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ki="NO_RECAPTCHA";class Ti{constructor(e){this.type="recaptcha-enterprise",this.auth=vi(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return Ns(e,"GET","/v2/recaptchaConfig",Cs(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Ms(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const s=window.grecaptcha;js(s)?s.enterprise.ready(()=>{s.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(ki)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Ei).execute("siteKey",{action:"verify"})}return new Promise((e,s)=>{n(this.auth).then(n=>{if(!t&&js(window.grecaptcha))r(n,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));let t=wi.recaptchaEnterpriseScript;0!==t.length&&(t+=n),xi(t).then(()=>{r(n,e,s)}).catch(e=>{s(e)})}}).catch(e=>{s(e)})})}}async function Ii(e,t,n,r=!1,s=!1){const i=new Ti(e);let a;if(s)a=ki;else try{a=await i.verify(n)}catch(c){a=await i.verify(n,!0)}const o={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Si(e,t,n,r,s){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ii(e,t,n,"getOobCode"===n);return r(e,s)}return r(e,t).catch(async s=>{if("auth/missing-recaptcha-token"===s.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ii(e,t,n,"getOobCode"===n);return r(e,s)}return Promise.reject(s)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t,n){const r=vi(e);gs(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=Ni(t),{host:i,port:a}=function(e){const t=Ni(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Ai(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ai(t)}}}(t),o=null===a?"":`:${a}`,c={url:`${s}//${i}${o}/`},l=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return gs(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void gs(Tn(c,r.config.emulator)&&Tn(l,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,mn(i)?(gn(`${s}//${i}${o}`),bn("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ni(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ai(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ri{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ys("not implemented")}_getIdTokenResponse(e){return ys("not implemented")}_linkToIdToken(e,t){return ys("not implemented")}_getReauthenticationResolver(e){return ys("not implemented")}}async function Di(e,t){return Ns(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e,t){return Rs(e,"POST","/v1/accounts:signInWithPassword",Cs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi extends Ri{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Oi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Oi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Si(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Pi);case"emailLink":return async function(e,t){return Rs(e,"POST","/v1/accounts:signInWithEmailLink",Cs(e,t))}(e,{email:this._email,oobCode:this._password});default:hs(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Si(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Di);case"emailLink":return async function(e,t){return Rs(e,"POST","/v1/accounts:signInWithEmailLink",Cs(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:hs(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){return Rs(e,"POST","/v1/accounts:signInWithIdp",Cs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hs("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const i=new ji(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return Li(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Li(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Li(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sn(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){const t=Cn(Nn(e)),n=t.apiKey??null,r=t.oobCode??null,s=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);gs(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=Cn(Nn(e)).link,n=t?Cn(Nn(t)).deep_link_id:null,r=Cn(Nn(e)).deep_link_id;return(r?Cn(Nn(r)).link:null)||r||n||t||e}(e);try{return new Mi(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,t){return Oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mi.parseLink(t);return gs(n,"argument-error"),Oi._fromEmailAndCode(e,n.code,n.tenantId)}}Ui.PROVIDER_ID="password",Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Vi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Fi{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return zi.credential(e.oauthAccessToken)}catch{return null}}}zi.FACEBOOK_SIGN_IN_METHOD="facebook.com",zi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ji._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $i.credential(t,n)}catch{return null}}}$i.GOOGLE_SIGN_IN_METHOD="google.com",$i.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi extends Fi{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.GITHUB_SIGN_IN_METHOD="github.com",Bi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi extends Fi{constructor(){super("twitter.com")}static credential(e,t){return ji._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qi.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hi(e,t){return Rs(e,"POST","/v1/accounts:signUp",Cs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qi.TWITTER_SIGN_IN_METHOD="twitter.com",qi.PROVIDER_ID="twitter.com";class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Qs._fromIdTokenResponse(e,n,r),i=Ki(n);return new Gi({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ki(n);return new Gi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ki(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends En{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Wi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Wi(e,t,n,r)}}function Ji(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Wi._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qi(e,t,n=!1){if(Br(e.app))return Promise.reject(fs(e));const r="signIn",s=await Ji(e,r,t),i=await Gi._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yi(e){const t=vi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Xi(e,t,n){return Br(e.app)?Promise.reject(fs(e)):async function(e,t){return Qi(vi(e),t)}(Dn(e),Ui.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Yi(e),t})}const Zi="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends ea{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);di()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ta.type="LOCAL";const na=ta;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends ea{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ra.type="SESSION";const sa=ra;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new ia(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map(async e=>e(t.origin,s)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aa(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ia.receivers=[];class oa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((a,o)=>{const c=aa("",20);r.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(t.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function la(){return void 0!==ca().WorkerGlobalScope&&"function"==typeof ca().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ua="firebaseLocalStorageDb",ha="firebaseLocalStorage",da="fbase_key";class pa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fa(e,t){return e.transaction([ha],t?"readwrite":"readonly").objectStore(ha)}function ma(){const e=indexedDB.open(ua,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ha,{keyPath:da})}catch(by){n(by)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ha)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ua);return new pa(e).toPromise()}(),t(await ma()))})})}async function ga(e,t,n){const r=fa(e,!0).put({[da]:t,value:n});return new pa(r).toPromise()}function ya(e,t){const n=fa(e,!0).delete(t);return new pa(n).toPromise()}class va{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ma()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(by){if(t++>3)throw by;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return la()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(la()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new oa(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await ga(e,Zi,"1"),await ya(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ga(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=fa(e,!1).get(t),r=await new pa(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ya(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=fa(e,!1).getAll();return new pa(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}va.type="LOCAL";const ba=va;new Es(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa extends Ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xa(e){return Qi(e.auth,new wa(e),e.bypassAuthState)}function Ea(e){const{auth:t,user:n}=e;return gs(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(Br(r.app))return Promise.reject(fs(r));const s="reauthenticate";try{const i=await Bs(e,Ji(r,s,t,e),n);gs(i.idToken,r,"internal-error");const a=zs(i.idToken);gs(a,r,"internal-error");const{sub:o}=a;return gs(e.uid===o,r,"user-mismatch"),Gi._forOperation(e,s,i)}catch(by){throw"auth/user-not-found"===by?.code&&hs(r,"user-mismatch"),by}}(n,new wa(e),e.bypassAuthState)}async function _a(e){const{auth:t,user:n}=e;return gs(n,t,"internal-error"),async function(e,t,n=!1){const r=await Bs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gi._forOperation(e,"link",r)}(n,new wa(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(by){this.reject(by)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:a}=e;if(i)return void this.reject(i);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(by){this.reject(by)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xa;case"linkViaPopup":case"linkViaRedirect":return _a;case"reauthViaPopup":case"reauthViaRedirect":return Ea;default:hs(this.auth,"internal-error")}}resolve(e){vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Es(2e3,1e4);class Ia extends ka{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Ia.currentPopupAction&&Ia.currentPopupAction.cancel(),Ia.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return gs(e,this.auth,"internal-error"),e}async onExecution(){vs(1===this.filter.length,"Popup operations only handle one event");const e=aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ds(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ds(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ia.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ds(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Ta.get())};e()}}Ia.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sa="pendingRedirect",Ca=new Map;class Na extends ka{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ti(Sa,e.config.apiKey,e.name)}(t),r=function(e){return Xs(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(by){e=()=>Promise.reject(by)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Aa(e,t){Ca.set(e._key(),t)}async function Ra(e,t,n=!1){if(Br(e.app))return Promise.reject(fs(e));const r=vi(e),s=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Xs(t):(gs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new Na(r,s,n),a=await i.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oa(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Oa(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ds(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Oa({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const La=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ja=/^https?/;async function Ma(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ns(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(Ua(n))return}catch{}hs(e,"unauthorized-domain")}function Ua(e){const t=bs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!ja.test(n))return!1;if(La.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Es(3e4,6e4);function Fa(){const e=ca().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function za(e){return new Promise((t,n)=>{function r(){Fa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fa(),n(ds(e,"network-request-failed"))},timeout:Va.get()})}if(ca().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!ca().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ca()[t]=()=>{gapi.load?r():n(ds(e,"network-request-failed"))},xi(`${wi.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw $a=null,e})}let $a=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ba=new Es(5e3,15e3),qa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ha=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ga(e){const t=e.config;gs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_s(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Gr},s=Ha.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Sn(r).slice(1)}`}async function Ka(e){const t=await function(e){return $a=$a||za(e),$a}(e),n=ca().gapi;return gs(n,e,"internal-error"),t.open({where:document.body,url:Ga(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qa,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=ds(e,"network-request-failed"),i=ca().setTimeout(()=>{r(s)},Ba.get());function a(){ca().clearTimeout(i),n(t)}t.ping(a).then(a,()=>{r(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ja{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(by){}}}function Qa(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...Wa,width:r.toString(),height:s.toString(),top:i,left:a},l=wn().toLowerCase();n&&(o=ai(l)?"_blank":n),si(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=wn()){return hi(e)&&!!window.navigator?.standalone}(l)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new Ja(null);const h=window.open(t||"",o,u);gs(h,e,"popup-blocked");try{h.focus()}catch(by){}return new Ja(h)}const Ya="__/auth/handler",Xa="emulator/auth/handler",Za=encodeURIComponent("fac");async function eo(e,t,n,r,s,i){gs(e.config.authDomain,e,"auth-domain-config-required"),gs(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(t instanceof Vi){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof Fi){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))void 0===o[u]&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${Za}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ya}`;return _s(e,Xa)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Sn(o).slice(1)}${l}`}const to="webStorageSupport";const no=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sa,this._completeRedirectFn=Ra,this._overrideRedirectResult=Aa}async _openPopup(e,t,n,r){vs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Qa(e,await eo(e,t,n,bs(),r),aa())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){ca().location.href=e}(await eo(e,t,n,bs(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(vs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ka(e),n=new Da(e);return t.register("authEvent",t=>{gs(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(to,{type:to},n=>{const r=n?.[0]?.[to];void 0!==r&&t(!!r),hs(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ma(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pi()||ii()||hi()}};var ro="@firebase/auth",so="1.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao=pn("authIdTokenMaxAge")||300;let oo=null;var co;wi={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ds("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},co="Browser",zr(new Pn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=n.options;gs(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:i,authDomain:a,clientPlatform:co,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(co)},c=new yi(n,r,s,o);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Xs);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),zr(new Pn("auth-internal",e=>(e=>new io(e))(vi(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Jr(ro,so,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(co)),Jr(ro,so,"esm2020");var lo,uo,ho="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var s=0;s<16;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];let i,a=e.g[3];i=t+(a^n&(s^a))+r[0]+3614090360&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[2]+606105819&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[3]+3250441966&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[4]+4118548399&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[6]+2821735955&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[7]+4249261313&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[8]+1770035416&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[10]+4294925233&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[11]+2304563134&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[12]+1804603682&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[14]+2792965006&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[15]+1236535329&4294967295,i=t+(s^a&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[11]+643717713&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[0]+3921069994&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[15]+3634488961&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[4]+3889429448&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[3]+4107603335&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[8]+1163531501&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[7]+1735328473&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[12]+2368359562&4294967295,i=t+((n=s+(i<<20&4294967295|i>>>12))^s^a)+r[5]+4294588738&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[11]+1839030562&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[14]+4259657740&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[1]+2763975236&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[7]+4139469664&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[10]+3200236656&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[13]+681279174&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[3]+3572445317&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[6]+76029189&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[9]+3654602809&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[15]+530742520&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[2]+3299628645&4294967295,i=t+(s^((n=s+(i<<23&4294967295|i>>>9))|~a))+r[0]+4096336452&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[14]+2878612391&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[5]+4237533241&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[12]+1700485571&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[10]+4293915773&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[1]+2240044497&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[8]+1873313359&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[6]+2734768916&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[13]+1309151649&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[4]+4149444226&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[2]+718787259&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+a&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,s=this.C;let i=this.h,a=0;for(;a<t;){if(0==i)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(s[i++]=e.charCodeAt(a++),i==this.blockSize){n(this,s),i=0;break}}else for(;a<t;)if(s[i++]=e[a++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var s={};function i(e){return-128<=e&&e<128?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return d(a(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=i(0),c=i(1),l=i(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(c)}function p(e,t){return e.add(d(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;r.l(e)<=0;)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var l=i.add(r);l.l(e)<=0&&(s=s.add(n),i=l),r=v(r,1),n=v(n,1)}return t=p(e,s.j(t)),new m(s,t)}for(s=o;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),l=(i=a(n)).j(t);h(l)||l.l(e)>0;)l=(i=a(n-=r)).j(t);u(i)&&(i=c),s=s.add(i),e=p(e,l)}return new m(s,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const s=e.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=a(Math.pow(e,6));var n=this;let r="";for(;;){const s=g(n,t).g;let i=(((n=p(n,s.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let s=0;for(let r=0;r<=t;r++){let t=s+(65535&this.i(r))+(65535&e.i(r)),i=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);s=i>>>16,t&=65535,i&=65535,n[r]=i<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(l)<0&&e.l(l)<0)return a(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let t=0;t<e.g.length;t++){const r=this.i(s)>>>16,i=65535&this.i(s),a=e.i(t)>>>16,o=65535&e.i(t);n[2*s+2*t]+=i*o,f(n,2*s+2*t),n[2*s+2*t+1]+=r*o,f(n,2*s+2*t+1),n[2*s+2*t+1]+=i*a,f(n,2*s+2*t+1),n[2*s+2*t+2]+=r*a,f(n,2*s+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,uo=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=a(Math.pow(n,8));let s=o;for(let o=0;o<t.length;o+=8){var i=Math.min(8,t.length-o);const e=parseInt(t.substring(o,o+i),n);i<8?(i=a(Math.pow(n,i)),s=s.j(i).add(a(e))):(s=s.j(r),s=s.add(a(e)))}return s},lo=r}).apply(void 0!==ho?ho:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var po,fo,mo,go,yo,vo,bo,wo,xo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof xo&&xo];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var a=e[i];if(!(a in s))break e;s=s[a]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},i=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){return(c=o).apply(null,arguments)}function l(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function f(e){i.setTimeout(()=>{throw e},0)}function m(){var e=w;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,b=!1,w=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},x=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=m();){try{e.h.call(e.g)}catch(n){f(n)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}b=!1}function _(){this.u=this.u,this.C=this.C}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},k.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}function S(e,t){k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(S,k),S.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&S.Z.h.call(this)},S.prototype.h=function(){S.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var C="closure_listenable_"+(1e6*Math.random()|0),N=0;function A(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++N,this.da=this.fa=!1}function R(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function D(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<O.length;t++)n=O[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function j(e){this.src=e,this.g={},this.h=0}function M(e,t){const n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(R(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,r){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}j.prototype.add=function(e,t,n,r,s){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const a=U(e,t,r,s);return a>-1?(t=e[a],n||(t.fa=!1)):((t=new A(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var V="closure_lm_"+(1e6*Math.random()|0),F={};function z(e,t,n,r,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)z(e,t[i],n,r,s);return null}return n=W(n),e&&e[C]?e.J(t,n,!!a(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");const o=a(s)?!!s.capture:!!s;let c=G(e);if(c||(e[V]=c=new j(e)),n=c.add(t,n,r,o,i),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=H;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function $(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)$(e,t[i],n,r,s);else r=a(r)?!!r.capture:!!r,n=W(n),e&&e[C]?(e=e.i,(i=String(t).toString())in e.g&&((n=U(t=e.g[i],n,r,s))>-1&&(R(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=G(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,r,s)),(n=e>-1?t[e]:null)&&B(n))}function B(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[C])M(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=G(t))?(M(n,e),0==n.h&&(n.src=null,t[V]=null)):R(e)}}}function q(e){return e in F?F[e]:F[e]="on"+e}function H(e,t){if(e.da)e=!0;else{t=new S(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&B(e),e=n.call(r,t)}return e}function G(e){return(e=e[V])instanceof j?e:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function W(e){return"function"==typeof e?e:(e[K]||(e[K]=function(t){return e.handleEvent(t)}),e[K])}function J(){_.call(this),this.i=new j(this),this.M=this,this.G=null}function Q(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var s=t;L(t=new k(r,e),s)}let i,a;if(s=!0,n)for(a=n.length-1;a>=0;a--)i=t.g=n[a],s=Y(i,r,!0,t)&&s;if(i=t.g=e,s=Y(i,r,!0,t)&&s,s=Y(i,r,!1,t)&&s,n)for(a=0;a<n.length;a++)i=t.g=n[a],s=Y(i,r,!1,t)&&s}function Y(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const a=t[i];if(a&&!a.da&&a.capture==n){const t=a.listener,n=a.ha||a.src;a.fa&&M(e.i,a),s=!1!==t.call(n,r)&&s}}return s&&!r.defaultPrevented}function X(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,X(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(J,_),J.prototype[C]=!0,J.prototype.removeEventListener=function(e,t,n,r){$(this,e,t,n,r)},J.prototype.N=function(){if(J.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)R(n[e]);delete e.g[t],e.h--}}this.G=null},J.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},J.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Z extends _{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(e){_.call(this),this.h=e,this.g={}}u(ee,_);var te=[];function ne(e){D(e.g,function(e,t){this.g.hasOwnProperty(t)&&B(e)},e),e.g={}}ee.prototype.N=function(){ee.Z.N.call(this),ne(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var re=i.JSON.stringify,se=i.JSON.parse,ie=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function ae(){}function oe(){}var ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function le(){k.call(this,"d")}function ue(){k.call(this,"c")}u(le,k),u(ue,k);var he={},de=null;function pe(){return de=de||new J}function fe(e){k.call(this,he.Ia,e)}function me(e){const t=pe();Q(t,new fe(t))}function ge(e,t){k.call(this,he.STAT_EVENT,e),this.stat=t}function ye(e){const t=pe();Q(t,new ge(t,e))}function ve(e,t){k.call(this,he.Ja,e),this.size=t}function be(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function we(){this.g=!0}function xe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<r.length;e++)r[e]=""}}}return re(i)}catch(i){return t}}(e,n)+(r?" "+r:"")})}he.Ia="serverreachability",u(fe,k),he.STAT_EVENT="statevent",u(ge,k),he.Ja="timingevent",u(ve,k),we.prototype.ua=function(){this.g=!1},we.prototype.info=function(){};var Ee,_e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ke={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Te(){}function Ie(e){return encodeURIComponent(String(e))}function Se(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ce(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ne}function Ne(){this.i=null,this.g="",this.h=!1}u(Te,ae),Te.prototype.g=function(){return new XMLHttpRequest},Ee=new Te;var Ae={},Re={};function De(e,t,n){e.M=1,e.A=rt(Xe(t)),e.u=n,e.R=!0,Pe(e,null)}function Pe(e,t){e.F=Date.now(),je(e),e.B=Xe(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),yt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ne,e.g=rn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Z(c(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(te[0]=s.toString()),s=te);for(let i=0;i<s.length;i++){const e=z(n,s[i],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?P(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),me(),function(e,t,n,r,s,i){e.info(function(){if(e.g)if(i){var a="",o=i.split("&");for(let e=0;e<o.length;e++){var c=o[e].split("=");if(c.length>1){const e=c[0];c=c[1];const t=e.split("_");a=t.length>=2&&"type"==t[1]?a+(e+"=")+c+"&":a+(e+"=redacted&")}}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Oe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Le(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Re:(n=Number(t.substring(n,r)),isNaN(n)?Ae:(r+=1)+n>t.length?Re:(t=t.slice(r,r+n),e.C=r+n,t))}function je(e){e.T=Date.now()+e.H,Me(e,e.H)}function Me(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=be(c(e.aa,e),t)}function Ue(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function Ve(e){0==e.j.I||e.K||Xt(e.j,e)}function Fe(e){Ue(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ne(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function ze(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ge(n.h,e)))if(!e.L&&Ge(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Yt(n),zt(n)}Wt(n),ye(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=be(c(n.Va,n),6e3));He(n.h)<=1&&n.ta&&(n.ta=void 0)}else en(n,11)}else if((e.L||n.g==e)&&Yt(n),!I(t))for(s=n.Ba.g.parse(t),t=0;t<s.length;t++){let c=s[t];const u=c[0];if(!(u<=n.K))if(n.K=u,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const t=c[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ke(i,i.h),i.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,nt(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var a=e;if((r=n).na=nn(r,r.L?r.ba:null,r.W),a.L){We(r.h,a);var o=a,l=r.O;l&&(o.H=l),o.D&&(Ue(o),je(o)),r.g=a}else Kt(r);n.i.length>0&&Bt(n)}else"stop"!=c[0]&&"close"!=c[0]||en(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?en(n,7):Ft(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}me()}catch(u){}}Ce.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==jt(e)?t.j():this.Y(e)},Ce.prototype.Y=function(e){try{if(e==this.g)e:{const c=jt(this.g),l=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Mt(this.g)))){this.K||4!=c||7==l||me(),Ue(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Oe(e))return e.g.la();const t=Mt(e.g);if(""===t)return"";let n="";const r=t.length,s=4==jt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Fe(e),Ve(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<r;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(s&&i==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,s,i,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+a})}(this.i,this.v,this.B,this.l,this.S,c,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(r)){var a=r;break t}}a=null}if(!(e=a)){this.o=!1,this.m=3,ye(12),Fe(this),Ve(this);break e}xe(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ze(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Le(this,n),t==Re){4==c&&(this.m=4,ye(14),e=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}if(t==Ae){this.m=4,ye(15),xe(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}xe(this.i,this.l,t,null),ze(this,t)}if(Oe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,ye(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jt(o),o.P=!0,ye(11))}}else xe(this.i,this.l,n,"[Invalid Chunked Response]"),Fe(this),Ve(this)}else xe(this.i,this.l,n,null),ze(this,n);4==c&&Fe(this),this.o&&!this.K&&(4==c?Xt(this.j,this):(this.o=!1,je(this)))}else(function(e){const t={};e=(e.g&&jt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(I(e[r]))continue;var n=Se(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),Fe(this),Ve(this)}}}catch(c){}},Ce.prototype.cancel=function(){this.K=!0,Fe(this)},Ce.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(me(),ye(17)),Fe(this),this.m=2,Ve(this)):Me(this,this.T-e)};var $e=class{constructor(e,t){this.g=e,this.map=t}};function Be(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function He(e){return e.h?1:e.g?e.g.size:0}function Ge(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ke(e,t){e.g?e.g.add(t):e.h=t}function We(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Je(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}Be.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Qe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ye(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ye?(this.l=e.l,Ze(this,e.j),this.o=e.o,this.g=e.g,et(this,e.u),this.h=e.h,tt(this,vt(e.i)),this.m=e.m):e&&(t=String(e).match(Qe))?(this.l=!1,Ze(this,t[1]||"",!0),this.o=st(t[2]||""),this.g=st(t[3]||"",!0),et(this,t[4]),this.h=st(t[5]||"",!0),tt(this,t[6]||"",!0),this.m=st(t[7]||"")):(this.l=!1,this.i=new dt(null,this.l))}function Xe(e){return new Ye(e)}function Ze(e,t,n){e.j=n?st(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function et(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function tt(e,t,n){t instanceof dt?(e.i=t,function(e,t){t&&!e.j&&(pt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(ft(this,t),yt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=it(t,ut)),e.i=new dt(t,e.l))}function nt(e,t,n){e.i.set(t,n)}function rt(e){return nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function st(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function it(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,at),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function at(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ye.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(it(t,ot,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(it(t,ot,!0),"@"),e.push(Ie(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(it(n,"/"==n.charAt(0)?lt:ct,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",it(n,ht)),e.join("")},Ye.prototype.resolve=function(e){const t=Xe(this);let n=!!e.j;n?Ze(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)et(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=t.h.lastIndexOf("/");-1!=s&&(r=t.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const n=s[t++];"."==n?r&&t==s.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==s.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=s}return n?t.h=r:n=""!==e.i.toString(),n?tt(t,vt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ot=/[#\/\?@]/g,ct=/[#\?:]/g,lt=/[#\?]/g,ut=/[#\?@]/g,ht=/#/g;function dt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let s,i=null;r>=0?(s=e[n].substring(0,r),i=e[n].substring(r+1)):s=e[n],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function ft(e,t){pt(e),t=bt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mt(e,t){return pt(e),t=bt(e,t),e.g.has(t)}function gt(e,t){pt(e);let n=[];if("string"==typeof t)mt(e,t)&&(n=n.concat(e.g.get(bt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function yt(e,t,n){ft(e,t),n.length>0&&(e.i=null,e.g.set(bt(e,t),d(n)),e.h+=n.length)}function vt(e){const t=new dt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function bt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wt(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function xt(){this.g=new ie}function Et(e){this.i=e.Sb||null,this.h=e.ab||!1}function _t(e,t){J.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function kt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Tt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,It(e)}function It(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function St(e){let t="";return D(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Ct(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=St(n),"string"==typeof e?null!=n&&Ie(n):nt(e,t,n))}function Nt(e){J.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=dt.prototype).add=function(e,t){pt(this),this.i=null,e=bt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){pt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return pt(this),this.i=null,mt(this,e=bt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=gt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const s=Ie(n);n=gt(this,n);for(let t=0;t<n.length;t++){let r=s;""!==n[t]&&(r+="="+Ie(n[t])),e.push(r)}}return this.i=e.join("&")},u(Et,ae),Et.prototype.g=function(){return new _t(this.i,this.h)},u(_t,J),(e=_t.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,It(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Tt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Tt(this):It(this),3==this.readyState&&kt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Tt(this))},e.Na=function(e){this.g&&(this.response=e,Tt(this))},e.ga=function(){this.g&&Tt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_t.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(Nt,J);var At=/^https?$/i,Rt=["POST","PUT"];function Dt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Pt(e),Lt(e)}function Pt(e){e.A||(e.A=!0,Q(e,"complete"),Q(e,"error"))}function Ot(e){if(e.h&&void 0!==s)if(e.v&&4==jt(e))setTimeout(e.Ca.bind(e),0);else if(Q(e,"readystatechange"),4==jt(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){let t=String(e.D).match(Qe)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),r=!At.test(t?t.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.o=6;try{var a=jt(e)>2?e.g.statusText:""}catch(o){a=""}e.l=a+" ["+e.ca()+"]",Pt(e)}}finally{Lt(e)}}}function Lt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||Q(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function jt(e){return e.g?e.g.readyState:0}function Mt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ut(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vt(e){this.za=0,this.i=[],this.j=new we,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ut("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ut("baseRetryDelayMs",5e3,e),this.Za=Ut("retryDelaySeedMs",1e4,e),this.Ta=Ut("forwardChannelMaxRetries",2,e),this.va=Ut("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Be(e&&e.concurrentRequestLimit),this.Ba=new xt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Ft(e){if($t(e),3==e.I){var t=e.V++,n=Xe(e.J);if(nt(n,"SID",e.M),nt(n,"RID",t),nt(n,"TYPE","terminate"),Ht(e,n),(t=new Ce(e,e.j,t)).M=2,t.A=rt(Xe(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.A,n=!0),n||(t.g=rn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),je(t)}tn(e)}function zt(e){e.g&&(Jt(e),e.g.cancel(),e.g=null)}function $t(e){zt(e),e.v&&(i.clearTimeout(e.v),e.v=null),Yt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function Bt(e){if(!qe(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||x(),b||(v(),b=!0),w.add(t,e),e.D=0}}function qt(e,t){var n;n=t?t.l:e.V++;const r=Xe(e.J);nt(r,"SID",e.M),nt(r,"RID",n),nt(r,"AID",e.K),Ht(e,r),e.u&&e.o&&Ct(r,e.u,e.o),n=new Ce(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Gt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Ke(e.h,n),De(n,r,t)}function Ht(e,t){e.H&&D(e.H,function(e,n){nt(t,n,e)}),e.l&&D({},function(e,n){nt(t,n,e)})}function Gt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?c(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let c=!0;for(let l=0;l<n;l++){var i=s[l].g;const n=s[l].map;if((i-=t)<0)t=Math.max(0,s[l].g-100),c=!1;else try{i="req"+i+"_"||"";try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;a(n)&&(r=re(n)),e.push(i+t+"="+encodeURIComponent(r))}}catch(Zo){throw e.push(i+"type="+encodeURIComponent("_badmap")),Zo}}catch(Zo){r&&r(n)}}if(c){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Kt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||x(),b||(v(),b=!0),w.add(t,e),e.A=0}}function Wt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=be(c(e.Da,e),Zt(e,e.A)),e.A++,!0)}function Jt(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function Qt(e){e.g=new Ce(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=Xe(e.na);nt(t,"RID","rpc"),nt(t,"SID",e.M),nt(t,"AID",e.K),nt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&nt(t,"TO",e.ia),nt(t,"TYPE","xmlhttp"),Ht(e,t),e.u&&e.o&&Ct(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=rt(Xe(t)),n.u=null,n.R=!0,Pe(n,e)}function Yt(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function Xt(e,t){var n=null;if(e.g==t){Yt(e),Jt(e),e.g=null;var r=2}else{if(!Ge(e.h,t))return;n=t.G,We(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;Q(r=pe(),new ve(r,n)),Bt(e)}else Kt(e);else if(3==(s=t.m)||0==s&&t.X>0||!(1==r&&function(e,t){return!(He(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=be(c(e.Ea,e,t),Zt(e,e.D)),e.D++,0)))}(e,t)||2==r&&Wt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),s){case 1:en(e,5);break;case 4:en(e,10);break;case 3:en(e,6);break;default:en(e,2)}}function Zt(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function en(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.bb,e),r=e.Ua;const t=!r;r=new Ye(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||Ze(r,"https"),rt(r),t?function(e,t){const n=new we;if(i.Image){const r=new Image;r.onload=l(wt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=l(wt,n,"TestLoadImage: error",!1,t,r),r.onabort=l(wt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=l(wt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new we;const n=new AbortController,r=setTimeout(()=>{n.abort(),wt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?wt(0,0,!0,t):wt(0,0,!1,t)}).catch(()=>{clearTimeout(r),wt(0,0,!1,t)})}(r.toString(),n)}else ye(2);e.I=0,e.l&&e.l.pa(t),tn(e),$t(e)}function tn(e){if(e.I=0,e.ja=[],e.l){const t=Je(e.h);0==t.length&&0==e.i.length||(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function nn(e,t,n){var r=n instanceof Ye?Xe(n):new Ye(n);if(""!=r.g)t&&(r.g=t+"."+r.g),et(r,r.u);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new Ye(null);r&&Ze(e,r),t&&(e.g=t),s&&et(e,s),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&nt(r,n,t),nt(r,"VER",e.ka),Ht(e,r),r}function rn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Nt(new Et({ab:n})):new Nt(e.ma)).Fa(e.L),t}function sn(){}function an(){}function on(e,t){J.call(this),this.g=new Vt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!I(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new un(this)}function cn(e){le.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ln(){ue.call(this),this.status=1}function un(e){this.g=e}(e=Nt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ee.g(),this.g.onreadystatechange=h(c(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Dt(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(Rt,t,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(a){Dt(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Q(this,"complete"),Q(this,"abort"),Lt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ot(this):this.Xa())},e.Xa=function(){Ot(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return jt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),se(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Vt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){ye(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=nn(this,null,this.W),Bt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Ce(this,this.j,e);let i=this.o;if(this.U&&(i?(i=P(i),L(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Gt(this,s,t),nt(n=Xe(this.J),"RID",e),nt(n,"CVER",22),this.G&&nt(n,"X-HTTP-Session-Id",this.G),Ht(this,n),i&&(this.R?t="headers="+Ie(St(i))+"&"+t:this.u&&Ct(n,this.u,i)),Ke(this.h,s),this.Ra&&nt(n,"TYPE","init"),this.S?(nt(n,"$req",t),nt(n,"SID","null"),s.U=!0,De(s,n,null)):De(s,n,t),this.I=2}}else 3==this.I&&(e?qt(this,e):0==this.i.length||qe(this.h)||qt(this))},e.Da=function(){if(this.v=null,Qt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=be(c(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),zt(this),Qt(this))},e.Va=function(){null!=this.C&&(this.C=null,zt(this),Wt(this),ye(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=sn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},an.prototype.g=function(e,t){return new on(e,t)},u(on,J),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Ft(this.g)},on.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=re(e),e=n);t.i.push(new $e(t.Ya++,e)),3==t.I&&Bt(t)},on.prototype.N=function(){this.g.l=null,delete this.j,Ft(this.g),delete this.g,on.Z.N.call(this)},u(cn,le),u(ln,ue),u(un,sn),un.prototype.ra=function(){Q(this.g,"a")},un.prototype.qa=function(e){Q(this.g,new cn(e))},un.prototype.pa=function(e){Q(this.g,new ln)},un.prototype.oa=function(){Q(this.g,"b")},an.prototype.createWebChannel=an.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,wo=function(){return new an},bo=function(){return pe()},vo=he,yo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,go=_e,ke.COMPLETE="complete",mo=ke,oe.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",J.prototype.listen=J.prototype.J,fo=oe,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,po=Nt}).apply(void 0!==xo?xo:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Eo.UNAUTHENTICATED=new Eo(null),Eo.GOOGLE_CREDENTIALS=new Eo("google-credentials-uid"),Eo.FIRST_PARTY=new Eo("first-party-uid"),Eo.MOCK_USER=new Eo("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _o="12.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ko=new $n("@firebase/firestore");function To(){return ko.logLevel}function Io(e,...t){if(ko.logLevel<=Mn.DEBUG){const n=t.map(No);ko.debug(`Firestore (${_o}): ${e}`,...n)}}function So(e,...t){if(ko.logLevel<=Mn.ERROR){const n=t.map(No);ko.error(`Firestore (${_o}): ${e}`,...n)}}function Co(e,...t){if(ko.logLevel<=Mn.WARN){const n=t.map(No);ko.warn(`Firestore (${_o}): ${e}`,...n)}}function No(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Ro(e,r,n)}function Ro(e,t,n){let r=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw So(r),new Error(r)}function Do(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||Ro(t,s,r)}function Po(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Lo extends En{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Eo.UNAUTHENTICATED))}shutdown(){}}class Vo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Fo{constructor(e){this.t=e,this.currentUser=Eo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Do(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new jo;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jo,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{Io("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Io("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jo)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Io("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Do("string"==typeof t.accessToken,31837,{l:t}),new Mo(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Do(null===e||"string"==typeof e,2055,{h:e}),new Eo(e)}}class zo{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Eo.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class $o{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new zo(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Eo.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qo{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Br(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Do(void 0===this.o,3512);const n=e=>{null!=e.error&&Io("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Io("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Io("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Io("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Do("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Bo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Ho(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Ko(e,t){return e<t?-1:e>t?1:0}function Wo(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return Yo(n)===Yo(s)?Ko(n,s):Yo(n)?1:-1}return Ko(e.length,t.length)}const Jo=55296,Qo=57343;function Yo(e){const t=e.charCodeAt(0);return t>=Jo&&t<=Qo}function Xo(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="__name__";class ec{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ao(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Ao(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ec.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ec?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ec.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Ko(e.length,t.length)}static compareSegments(e,t){const n=ec.isNumericId(e),r=ec.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ec.extractNumericId(e).compare(ec.extractNumericId(t)):Wo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lo.fromString(e.substring(4,e.length-2))}}class tc extends ec{construct(e,t,n){return new tc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Lo(Oo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new tc(t)}static emptyPath(){return new tc([])}}const nc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rc extends ec{construct(e,t,n){return new rc(e,t,n)}static isValidIdentifier(e){return nc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rc.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Zo}static keyField(){return new rc([Zo])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Lo(Oo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Lo(Oo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Lo(Oo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Lo(Oo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rc(t)}static emptyPath(){return new rc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.path=e}static fromPath(e){return new sc(tc.fromString(e))}static fromName(e){return new sc(tc.fromString(e).popFirst(5))}static empty(){return new sc(tc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===tc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return tc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new sc(new tc(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e){if(!sc.isDocumentKey(e))throw new Lo(Oo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ac(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function oc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ao(12329,{type:typeof e})}function cc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Lo(Oo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(e);throw new Lo(Oo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e,t){const n={typeString:e};return t&&(n.value=t),n}function uc(e,t){if(!ac(e))throw new Lo(Oo.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Lo(Oo.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=-62135596800,dc=1e6;class pc{static now(){return pc.fromMillis(Date.now())}static fromDate(e){return pc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*dc);return new pc(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Lo(Oo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Lo(Oo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hc)throw new Lo(Oo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Lo(Oo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dc}_compareTo(e){return this.seconds===e.seconds?Ko(this.nanoseconds,e.nanoseconds):Ko(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pc._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uc(e,pc._jsonSchema))return new pc(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pc._jsonSchemaVersion="firestore/timestamp/1.0",pc._jsonSchema={type:lc("string",pc._jsonSchemaVersion),seconds:lc("number"),nanoseconds:lc("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{static fromTimestamp(e){return new fc(e)}static min(){return new fc(new pc(0,0))}static max(){return new fc(new pc(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e){return new gc(e.readTime,e.key,-1)}class gc{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gc(fc.min(),sc.empty(),-1)}static max(){return new gc(fc.max(),sc.empty(),-1)}}function yc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=sc.comparator(e.documentKey,t.documentKey),0!==n?n:Ko(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class vc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(e){if(e.code!==Oo.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Io("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ao(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new wc((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof wc?t:wc.resolve(t)}catch(e){return wc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):wc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):wc.reject(t)}static resolve(e){return new wc((t,n)=>{t(e)})}static reject(e){return new wc((t,n)=>{n(e)})}static waitFor(e){return new wc((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=wc.resolve(!1);for(const n of e)t=t.next(e=>e?wc.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new wc((n,r)=>{const s=e.length,i=new Array(s);let a=0;for(let o=0;o<s;o++){const c=o;t(e[c]).next(e=>{i[c]=e,++a,a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new wc((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function xc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ec.ce=-1;function _c(e){return null==e}function kc(e){return 0===e&&1/e==-1/0}function Tc(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Ic(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Cc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Nc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.comparator=e,this.root=t||Dc.EMPTY}insert(e,t){return new Ac(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dc.BLACK,null,null))}remove(e){return new Ac(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rc(this.root,e,this.comparator,!0)}}class Rc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dc{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Dc.RED,this.left=null!=r?r:Dc.EMPTY,this.right=null!=s?s:Dc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Dc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Dc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Dc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ao(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ao(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ao(27949);return e+(this.isRed()?0:1)}}Dc.EMPTY=null,Dc.RED=!0,Dc.BLACK=!1,Dc.EMPTY=new class{constructor(){this.size=0}get key(){throw Ao(57766)}get value(){throw Ao(16141)}get color(){throw Ao(16727)}get left(){throw Ao(29726)}get right(){throw Ao(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new Dc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{constructor(e){this.comparator=e,this.data=new Ac(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oc(this.data.getIterator())}getIteratorFrom(e){return new Oc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Pc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pc(this.comparator);return t.data=e,t}}class Oc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.fields=e,e.sort(rc.comparator)}static empty(){return new Lc([])}unionWith(e){let t=new Pc(rc.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Lc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new jc("Invalid base64 string: "+e):e}}(e);return new Mc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Mc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ko(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mc.EMPTY_BYTE_STRING=new Mc("");const Uc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vc(e){if(Do(!!e,39018),"string"==typeof e){let t=0;const n=Uc.exec(e);if(Do(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Fc(e.seconds),nanos:Fc(e.nanos)}}function Fc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function zc(e){return"string"==typeof e?Mc.fromBase64String(e):Mc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="server_timestamp",Bc="__type__",qc="__previous_value__",Hc="__local_write_time__";function Gc(e){const t=(e?.mapValue?.fields||{})[Bc]?.stringValue;return t===$c}function Kc(e){const t=e.mapValue.fields[qc];return Gc(t)?Kc(t):t}function Wc(e){const t=Vc(e.mapValue.fields[Hc].timestampValue);return new pc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,n,r,s,i,a,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=u}}const Qc="(default)";class Yc{constructor(e,t){this.projectId=e,this.database=t||Qc}static empty(){return new Yc("","")}get isDefaultDatabase(){return this.database===Qc}isEqual(e){return e instanceof Yc&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xc="__type__",Zc="__max__",el={},tl="__vector__",nl="value";function rl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gc(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Zc}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[Xc]?.stringValue;return t===tl}(e)?10:11:Ao(28295,{value:e})}function sl(e,t){if(e===t)return!0;const n=rl(e);if(n!==rl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Wc(e).isEqual(Wc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Vc(e.timestampValue),r=Vc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return zc(e.bytesValue).isEqual(zc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Fc(e.geoPointValue.latitude)===Fc(t.geoPointValue.latitude)&&Fc(e.geoPointValue.longitude)===Fc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Fc(e.integerValue)===Fc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Fc(e.doubleValue),r=Fc(t.doubleValue);return n===r?kc(n)===kc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Xo(e.arrayValue.values||[],t.arrayValue.values||[],sl);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Sc(n)!==Sc(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!sl(n[s],r[s])))return!1;return!0}(e,t);default:return Ao(52216,{left:e})}}function il(e,t){return void 0!==(e.values||[]).find(e=>sl(e,t))}function al(e,t){if(e===t)return 0;const n=rl(e),r=rl(t);if(n!==r)return Ko(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ko(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Fc(e.integerValue||e.doubleValue),r=Fc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ol(e.timestampValue,t.timestampValue);case 4:return ol(Wc(e),Wc(t));case 5:return Wo(e.stringValue,t.stringValue);case 6:return function(e,t){const n=zc(e),r=zc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Ko(n[s],r[s]);if(0!==e)return e}return Ko(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ko(Fc(e.latitude),Fc(t.latitude));return 0!==n?n:Ko(Fc(e.longitude),Fc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return cl(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},s=n[nl]?.arrayValue,i=r[nl]?.arrayValue,a=Ko(s?.values?.length||0,i?.values?.length||0);return 0!==a?a:cl(s,i)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===el&&t===el)return 0;if(e===el)return 1;if(t===el)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=Wo(r[a],i[a]);if(0!==e)return e;const t=al(n[r[a]],s[i[a]]);if(0!==t)return t}return Ko(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Ao(23264,{he:n})}}function ol(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ko(e,t);const n=Vc(e),r=Vc(t),s=Ko(n.seconds,r.seconds);return 0!==s?s:Ko(n.nanos,r.nanos)}function cl(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=al(n[s],r[s]);if(e)return e}return Ko(n.length,r.length)}function ll(e){return ul(e)}function ul(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Vc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return zc(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return sc.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ul(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${ul(e.fields[s])}`;return n+"}"}(e.mapValue):Ao(61005,{value:e})}function hl(e){switch(rl(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Kc(e);return t?16+hl(t):16;case 5:return 2*e.stringValue.length;case 6:return zc(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+hl(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Cc(e.fields,(e,n)=>{t+=e.length+hl(n)}),t}(e.mapValue);default:throw Ao(13486,{value:e})}}function dl(e){return!!e&&"integerValue"in e}function pl(e){return!!e&&"arrayValue"in e}function fl(e){return!!e&&"nullValue"in e}function ml(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function gl(e){return!!e&&"mapValue"in e}function yl(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Cc(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=yl(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yl(e.arrayValue.values[n]);return t}return{...e}}class vl{constructor(e){this.value=e}static empty(){return new vl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(t)}setAll(e){let t=rc.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=yl(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());gl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sl(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];gl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Cc(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new vl(yl(this.value))}}function bl(e){const t=[];return Cc(e.fields,(e,n)=>{const r=new rc([e]);if(gl(n)){const e=bl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Lc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wl{constructor(e,t,n,r,s,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new wl(e,0,fc.min(),fc.min(),fc.min(),vl.empty(),0)}static newFoundDocument(e,t,n,r){return new wl(e,1,t,fc.min(),n,r,0)}static newNoDocument(e,t){return new wl(e,2,t,fc.min(),fc.min(),vl.empty(),0)}static newUnknownDocument(e,t){return new wl(e,3,t,fc.min(),fc.min(),vl.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(fc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wl(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.position=e,this.inclusive=t}}function El(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(r=i.field.isKeyField()?sc.comparator(sc.fromName(a.referenceValue),n.key):al(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function _l(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sl(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{}class Sl extends Il{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ol(e,t,n):"array-contains"===t?new Ul(e,n):"in"===t?new Vl(e,n):"not-in"===t?new Fl(e,n):"array-contains-any"===t?new zl(e,n):new Sl(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ll(e,n):new jl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(al(t,this.value)):null!==t&&rl(this.value)===rl(t)&&this.matchesComparison(al(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ao(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cl extends Il{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Cl(e,t)}matches(e){return Nl(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nl(e){return"and"===e.op}function Al(e){return function(e){for(const t of e.filters)if(t instanceof Cl)return!1;return!0}(e)&&Nl(e)}function Rl(e){if(e instanceof Sl)return e.field.canonicalString()+e.op.toString()+ll(e.value);if(Al(e))return e.filters.map(e=>Rl(e)).join(",");{const t=e.filters.map(e=>Rl(e)).join(",");return`${e.op}(${t})`}}function Dl(e,t){return e instanceof Sl?function(e,t){return t instanceof Sl&&e.op===t.op&&e.field.isEqual(t.field)&&sl(e.value,t.value)}(e,t):e instanceof Cl?function(e,t){return t instanceof Cl&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Dl(n,t.filters[r]),!0)}(e,t):void Ao(19439)}function Pl(e){return e instanceof Sl?function(e){return`${e.field.canonicalString()} ${e.op} ${ll(e.value)}`}(e):e instanceof Cl?function(e){return e.op.toString()+" {"+e.getFilters().map(Pl).join(" ,")+"}"}(e):"Filter"}class Ol extends Sl{constructor(e,t,n){super(e,t,n),this.key=sc.fromName(n.referenceValue)}matches(e){const t=sc.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ll extends Sl{constructor(e,t){super(e,"in",t),this.keys=Ml("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jl extends Sl{constructor(e,t){super(e,"not-in",t),this.keys=Ml("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ml(e,t){return(t.arrayValue?.values||[]).map(e=>sc.fromName(e.referenceValue))}class Ul extends Sl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pl(t)&&il(t.arrayValue,this.value)}}class Vl extends Sl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&il(this.value.arrayValue,t)}}class Fl extends Sl{constructor(e,t){super(e,"not-in",t)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!il(this.value.arrayValue,t)}}class zl extends Sl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>il(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.Te=null}}function Bl(e,t=null,n=[],r=[],s=null,i=null,a=null){return new $l(e,t,n,r,s,i,a)}function ql(e){const t=Po(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Rl(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),_c(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>ll(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>ll(e)).join(",")),t.Te=e}return t.Te}function Hl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Tl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Dl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_l(e.startAt,t.startAt)&&_l(e.endAt,t.endAt)}function Gl(e){return sc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Wl(e){return new Kl(e)}function Jl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ql(e){const t=Po(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Pc(rc.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new kl(r,n))}),e.has(rc.keyField().canonicalString())||t.Ie.push(new kl(rc.keyField(),n))}return t.Ie}function Yl(e){const t=Po(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return Bl(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new kl(e.field,t)});const n=e.endAt?new xl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xl(e.startAt.position,e.startAt.inclusive):null;return Bl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Ql(e))),t.Ee}function Xl(e,t,n){return new Kl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zl(e,t){return Hl(Yl(e),Yl(t))&&e.limitType===t.limitType}function eu(e){return`${ql(Yl(e))}|lt:${e.limitType}`}function tu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Pl(e)).join(", ")}]`),_c(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ll(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ll(e)).join(",")),`Target(${t})`}(Yl(e))}; limitType=${e.limitType})`}function nu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):sc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ql(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=El(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ql(e),t))&&!(e.endAt&&!function(e,t,n){const r=El(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ql(e),t))}(e,t)}function ru(e){return(t,n)=>{let r=!1;for(const s of Ql(e)){const e=su(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function su(e,t,n){const r=e.field.isKeyField()?sc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?al(r,s):Ao(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ao(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Cc(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Nc(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Ac(sc.comparator);function ou(){return au}const cu=new Ac(sc.comparator);function lu(...e){let t=cu;for(const n of e)t=t.insert(n.key,n);return t}function uu(e){let t=cu;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function hu(){return pu()}function du(){return pu()}function pu(){return new iu(e=>e.toString(),(e,t)=>e.isEqual(t))}const fu=new Ac(sc.comparator),mu=new Pc(sc.comparator);function gu(...e){let t=mu;for(const n of e)t=t.add(n);return t}const yu=new Pc(Ko);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(t)?"-0":t}}function bu(e){return{integerValue:""+e}}function wu(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!kc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?bu(t):vu(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this._=void 0}}function Eu(e,t,n){return e instanceof Tu?function(e,t){const n={fields:{[Bc]:{stringValue:$c},[Hc]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Gc(t)&&(t=Kc(t)),t&&(n.fields[qc]=t),{mapValue:n}}(n,t):e instanceof Iu?Su(e,t):e instanceof Cu?Nu(e,t):function(e,t){const n=ku(e,t),r=Ru(n)+Ru(e.Ae);return dl(n)&&dl(e.Ae)?bu(r):vu(e.serializer,r)}(e,t)}function _u(e,t,n){return e instanceof Iu?Su(e,t):e instanceof Cu?Nu(e,t):n}function ku(e,t){return e instanceof Au?function(e){return dl(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Tu extends xu{}class Iu extends xu{constructor(e){super(),this.elements=e}}function Su(e,t){const n=Du(t);for(const r of e.elements)n.some(e=>sl(e,r))||n.push(r);return{arrayValue:{values:n}}}class Cu extends xu{constructor(e){super(),this.elements=e}}function Nu(e,t){let n=Du(t);for(const r of e.elements)n=n.filter(e=>!sl(e,r));return{arrayValue:{values:n}}}class Au extends xu{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ru(e){return Fc(e.integerValue||e.doubleValue)}function Du(e){return pl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Pu{constructor(e,t){this.version=e,this.transformResults=t}}class Ou{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ou}static exists(e){return new Ou(void 0,e)}static updateTime(e){return new Ou(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ju{}function Mu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ku(e.key,Ou.none()):new $u(e.key,e.data,Ou.none());{const n=e.data,r=vl.empty();let s=new Pc(rc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Bu(e.key,r,new Lc(s.toArray()),Ou.none())}}function Uu(e,t,n){e instanceof $u?function(e,t,n){const r=e.value.clone(),s=Hu(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Bu?function(e,t,n){if(!Lu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Hu(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(qu(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Vu(e,t,n,r){return e instanceof $u?function(e,t,n,r){if(!Lu(e.precondition,t))return n;const s=e.value.clone(),i=Gu(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bu?function(e,t,n,r){if(!Lu(e.precondition,t))return n;const s=Gu(e.fieldTransforms,r,t),i=t.data;return i.setAll(qu(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Lu(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Fu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=ku(r.transform,e||null);null!=s&&(null===n&&(n=vl.empty()),n.set(r.field,s))}return n||null}function zu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Xo(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Iu&&t instanceof Iu||e instanceof Cu&&t instanceof Cu?Xo(e.elements,t.elements,sl):e instanceof Au&&t instanceof Au?sl(e.Ae,t.Ae):e instanceof Tu&&t instanceof Tu}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $u extends ju{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Bu extends ju{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Hu(e,t,n){const r=new Map;Do(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,o=t.data.field(i.field);r.set(i.field,_u(a,o,n[s]))}return r}function Gu(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Eu(e,i,t))}return r}class Ku extends ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wu extends ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Uu(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vu(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=du();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=t.has(r.key)?null:a;const o=Mu(i,a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(fc.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),gu())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,(e,t)=>zu(e,t))&&Xo(this.baseMutations,e.baseMutations,(e,t)=>zu(e,t))}}class Qu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Do(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=fu;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Qu(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu,eh;function th(e){if(void 0===e)return So("GRPC error has no .code"),Oo.UNKNOWN;switch(e){case Zu.OK:return Oo.OK;case Zu.CANCELLED:return Oo.CANCELLED;case Zu.UNKNOWN:return Oo.UNKNOWN;case Zu.DEADLINE_EXCEEDED:return Oo.DEADLINE_EXCEEDED;case Zu.RESOURCE_EXHAUSTED:return Oo.RESOURCE_EXHAUSTED;case Zu.INTERNAL:return Oo.INTERNAL;case Zu.UNAVAILABLE:return Oo.UNAVAILABLE;case Zu.UNAUTHENTICATED:return Oo.UNAUTHENTICATED;case Zu.INVALID_ARGUMENT:return Oo.INVALID_ARGUMENT;case Zu.NOT_FOUND:return Oo.NOT_FOUND;case Zu.ALREADY_EXISTS:return Oo.ALREADY_EXISTS;case Zu.PERMISSION_DENIED:return Oo.PERMISSION_DENIED;case Zu.FAILED_PRECONDITION:return Oo.FAILED_PRECONDITION;case Zu.ABORTED:return Oo.ABORTED;case Zu.OUT_OF_RANGE:return Oo.OUT_OF_RANGE;case Zu.UNIMPLEMENTED:return Oo.UNIMPLEMENTED;case Zu.DATA_LOSS:return Oo.DATA_LOSS;default:return Ao(39323,{code:e})}}(eh=Zu||(Zu={}))[eh.OK=0]="OK",eh[eh.CANCELLED=1]="CANCELLED",eh[eh.UNKNOWN=2]="UNKNOWN",eh[eh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",eh[eh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",eh[eh.NOT_FOUND=5]="NOT_FOUND",eh[eh.ALREADY_EXISTS=6]="ALREADY_EXISTS",eh[eh.PERMISSION_DENIED=7]="PERMISSION_DENIED",eh[eh.UNAUTHENTICATED=16]="UNAUTHENTICATED",eh[eh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",eh[eh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",eh[eh.ABORTED=10]="ABORTED",eh[eh.OUT_OF_RANGE=11]="OUT_OF_RANGE",eh[eh.UNIMPLEMENTED=12]="UNIMPLEMENTED",eh[eh.INTERNAL=13]="INTERNAL",eh[eh.UNAVAILABLE=14]="UNAVAILABLE",eh[eh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nh=new lo([4294967295,4294967295],0);function rh(e){const t=(new TextEncoder).encode(e),n=new uo;return n.update(t),new Uint8Array(n.digest())}function sh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new lo([n,r],0),new lo([s,i],0)]}class ih{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ah(`Invalid padding: ${t}`);if(n<0)throw new ah(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ah(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ah(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=lo.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(lo.fromNumber(n)));return 1===r.compare(nh)&&(r=new lo([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=rh(e),[n,r]=sh(t);for(let s=0;s<this.hashCount;s++){const e=this.ye(n,r,s);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new ih(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.ge)return;const t=rh(e),[n,r]=sh(t);for(let s=0;s<this.hashCount;s++){const e=this.ye(n,r,s);this.be(e)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ah extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ch.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new oh(fc.min(),r,new Ac(Ko),ou(),gu())}}class ch{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ch(n,t,gu(),gu(),gu())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.De=r}}class uh{constructor(e,t){this.targetId=e,this.Ce=t}}class hh{constructor(e,t,n=Mc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dh{constructor(){this.ve=0,this.Fe=mh(),this.Me=Mc.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=gu(),t=gu(),n=gu();return this.Fe.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ao(38017,{changeType:s})}}),new ch(this.Me,this.xe,e,t,n)}Ke(){this.Oe=!1,this.Fe=mh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Do(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ph{constructor(e){this.Ge=e,this.ze=new Map,this.je=ou(),this.He=fh(),this.Je=fh(),this.Ze=new Ac(Ko)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Ao(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const s=r.target;if(Gl(s))if(0===n){const e=new sc(s.path);this.et(t,e,wl.newNoDocument(e,fc.min()))}else Do(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),s=n?this.ct(n,e,r):1;if(0!==s){this.it(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,a;try{i=zc(n).toUint8Array()}catch(e){if(e instanceof jc)return Co("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new ih(i,r,s)}catch(e){return Co(e instanceof ah?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.ge?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.Ge.ht(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const s=this.ot(r);if(s){if(n.current&&Gl(s.target)){const t=new sc(s.target.path);this.It(t).has(r)||this.Et(r,t)||this.et(r,t,wl.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.Ke())}});let n=gu();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new oh(e,t,this.Ze,this.je,n);return this.je=ou(),this.He=fh(),this.Je=fh(),this.Ze=new Ac(Ko),r}Ye(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,n),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new dh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Pc(Ko),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Pc(Ko),this.He=this.He.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Io("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fh(){return new Ac(sc.comparator)}function mh(){return new Ac(sc.comparator)}const gh={asc:"ASCENDING",desc:"DESCENDING"},yh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vh={and:"AND",or:"OR"};class bh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wh(e,t){return e.useProto3Json||_c(t)?t:{value:t}}function xh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _h(e,t){return xh(e,t.toTimestamp())}function kh(e){return Do(!!e,49232),fc.fromTimestamp(function(e){const t=Vc(e);return new pc(t.seconds,t.nanos)}(e))}function Th(e,t){return Ih(e,t).canonicalString()}function Ih(e,t){const n=function(e){return new tc(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Sh(e){const t=tc.fromString(e);return Do(Hh(t),10190,{key:t.toString()}),t}function Ch(e,t){return Th(e.databaseId,t.path)}function Nh(e,t){const n=Sh(t);if(n.get(1)!==e.databaseId.projectId)throw new Lo(Oo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Lo(Oo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new sc(Dh(n))}function Ah(e,t){return Th(e.databaseId,t)}function Rh(e){return new tc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dh(e){return Do(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Ph(e,t,n){return{name:Ch(e,t),fields:n.value.mapValue.fields}}function Oh(e,t){return{documents:[Ah(e,t.path)]}}function Lh(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ah(e,s);const i=function(e){if(0!==e.length)return Bh(Cl.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:zh(e.field),direction:Uh(e.dir)}}(e))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=wh(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:s}}function jh(e){let t=function(e){const t=Sh(e);return 4===t.length?tc.emptyPath():Dh(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Do(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Mh(e);return t instanceof Cl&&Al(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map(e=>function(e){return new kl($h(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,_c(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new xl(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new xl(n,t)}(n.endAt)),function(e,t,n,r,s,i,a,o){return new Kl(e,t,n,r,s,i,a,o)}(t,s,a,i,o,"F",c,l)}function Mh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$h(e.unaryFilter.field);return Sl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=$h(e.unaryFilter.field);return Sl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$h(e.unaryFilter.field);return Sl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$h(e.unaryFilter.field);return Sl.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ao(61313);default:return Ao(60726)}}(e):void 0!==e.fieldFilter?function(e){return Sl.create($h(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ao(58110);default:return Ao(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Cl.create(e.compositeFilter.filters.map(e=>Mh(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ao(1026)}}(e.compositeFilter.op))}(e):Ao(30097,{filter:e})}function Uh(e){return gh[e]}function Vh(e){return yh[e]}function Fh(e){return vh[e]}function zh(e){return{fieldPath:e.canonicalString()}}function $h(e){return rc.fromServerFormat(e.fieldPath)}function Bh(e){return e instanceof Sl?function(e){if("=="===e.op){if(ml(e.value))return{unaryFilter:{field:zh(e.field),op:"IS_NAN"}};if(fl(e.value))return{unaryFilter:{field:zh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ml(e.value))return{unaryFilter:{field:zh(e.field),op:"IS_NOT_NAN"}};if(fl(e.value))return{unaryFilter:{field:zh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zh(e.field),op:Vh(e.op),value:e.value}}}(e):e instanceof Cl?function(e){const t=e.getFilters().map(e=>Bh(e));return 1===t.length?t[0]:{compositeFilter:{op:Fh(e.op),filters:t}}}(e):Ao(54877,{filter:e})}function qh(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Hh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Gh(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,r,s=fc.min(),i=fc.min(),a=Mc.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Kh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.yt=e}}function Jh(e){const t=jh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.Sn=new Yh}addToCollectionParentIndex(e,t){return this.Sn.add(t),wc.resolve()}getCollectionParents(e,t){return wc.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return wc.resolve()}deleteFieldIndex(e,t){return wc.resolve()}deleteAllFieldIndexes(e){return wc.resolve()}createTargetIndexes(e,t){return wc.resolve()}getDocumentsMatchingTarget(e,t){return wc.resolve(null)}getIndexType(e,t){return wc.resolve(0)}getFieldIndexes(e,t){return wc.resolve([])}getNextCollectionGroupToUpdate(e){return wc.resolve(null)}getMinOffset(e,t){return wc.resolve(gc.min())}getMinOffsetFromCollectionGroup(e,t){return wc.resolve(gc.min())}updateCollectionGroup(e,t,n){return wc.resolve()}updateIndexEntries(e,t){return wc.resolve()}}class Yh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Pc(tc.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Pc(tc.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zh=41943040;class ed{static withCacheSize(e){return new ed(e,ed.DEFAULT_COLLECTION_PERCENTILE,ed.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ed.DEFAULT_COLLECTION_PERCENTILE=10,ed.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ed.DEFAULT=new ed(Zh,ed.DEFAULT_COLLECTION_PERCENTILE,ed.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ed.DISABLED=new ed(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class td{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new td(0)}static ar(){return new td(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="LruGarbageCollector";function rd([e,t],[n,r]){const s=Ko(e,n);return 0===s?Ko(t,r):s}class sd{constructor(e){this.Pr=e,this.buffer=new Pc(rd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();rd(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class id{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Io(nd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xc(e)?Io(nd,"Ignoring IndexedDB error during garbage collection: ",e):await bc(e)}await this.Ar(3e5)})}}class ad{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return wc.resolve(Ec.ce);const n=new sd(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Io("LruGarbageCollector","Garbage collection skipped; disabled"),wc.resolve(Xh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Io("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xh):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,s,i,a,o,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Io("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),To()<=Mn.DEBUG&&Io("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(a-i)+"ms\n"+`\tRemoved ${s} targets in `+(o-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-o)+"ms\n"+`Total Duration: ${c-l}ms`),wc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od{constructor(){this.changes=new iu(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?wc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Vu(n.mutation,e,Lc.empty(),pc.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,gu()).next(()=>t))}getLocalViewOfDocuments(e,t,n=gu()){const r=hu();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=lu();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=hu();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,gu()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=ou();const i=pu(),a=pu();return t.forEach((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Bu)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),Vu(a.mutation,t,a.mutation.getFieldMask(),pc.now())):i.set(t.key,Lc.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>a.set(e,new cd(t,i.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){const n=pu();let r=new Ac((e,t)=>e-t),s=gu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||Lc.empty();a=s.applyToLocalView(i,a),n.set(e,a);const o=(r.get(s.batchId)||gu()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,c=r.value,l=du();c.forEach(e=>{if(!s.has(e)){const r=Mu(t.get(e),n.get(e));null!==r&&l.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,l))}return wc.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return sc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):wc.resolve(hu());let a=-1,o=s;return i.next(t=>wc.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?wc.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,gu())).next(e=>({batchId:a,changes:uu(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new sc(t)).next(e=>{let t=lu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=lu();return this.indexManager.getCollectionParents(e,s).next(a=>wc.forEach(a,a=>{const o=function(e,t){return new Kl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,wl.newInvalidDocument(r)))});let n=lu();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&Vu(i.mutation,r,Lc.empty(),pc.now()),nu(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return wc.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:kh(e.createTime)}}(t)),wc.resolve()}getNamedQuery(e,t){return wc.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(e){return{name:e.name,query:Jh(e.bundledQuery),readTime:kh(e.readTime)}}(t)),wc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.overlays=new Ac(sc.comparator),this.Lr=new Map}getOverlay(e,t){return wc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=hu();return wc.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.bt(e,t,r)}),wc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),wc.resolve()}getOverlaysForCollection(e,t,n){const r=hu(),s=t.length+1,i=new sc(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return wc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Ac((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=hu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=hu(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return wc.resolve(a)}bt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Yu(t,n));let s=this.Lr.get(t);void 0===s&&(s=gu(),this.Lr.set(t,s)),this.Lr.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.sessionToken=Mc.EMPTY_BYTE_STRING}getSessionToken(e){return wc.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,wc.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.kr=new Pc(fd.Kr),this.qr=new Pc(fd.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new fd(e,t);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new fd(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new sc(new tc([])),n=new fd(t,e),r=new fd(t,e+1),s=[];return this.qr.forEachInRange([n,r],e=>{this.Wr(e),s.push(e.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new sc(new tc([])),n=new fd(t,e),r=new fd(t,e+1);let s=gu();return this.qr.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new fd(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fd{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return sc.comparator(e.key,t.key)||Ko(e.Hr,t.Hr)}static Ur(e,t){return Ko(e.Hr,t.Hr)||sc.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Pc(fd.Kr)}checkEmpty(e){return wc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ju(s,t,n,r);this.mutationQueue.push(i);for(const a of r)this.Jr=this.Jr.add(new fd(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return wc.resolve(i)}lookupMutationBatch(e,t){return wc.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return wc.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return wc.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(e){return wc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fd(t,0),r=new fd(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);s.push(t)}),wc.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Pc(Ko);return t.forEach(e=>{const t=new fd(e,0),r=new fd(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),wc.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;sc.isDocumentKey(s)||(s=s.child(""));const i=new fd(new sc(s),0);let a=new Pc(Ko);return this.Jr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Hr)),!0)},i),wc.resolve(this.Yr(a))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Do(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return wc.forEach(t.mutations,r=>{const s=new fd(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}nr(e){}containsKey(e,t){const n=new fd(t,0),r=this.Jr.firstAfterOrEqual(n);return wc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,wc.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.ti=e,this.docs=new Ac(sc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return wc.resolve(n?n.document.mutableCopy():wl.newInvalidDocument(t))}getEntries(e,t){let n=ou();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():wl.newInvalidDocument(e))}),wc.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=ou();const i=t.path,a=new sc(i.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||yc(mc(a),n)<=0||(r.has(a.key)||nu(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return wc.resolve(s)}getAllFromCollectionGroup(e,t,n,r){Ao(9500)}ni(e,t){return wc.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new yd(this)}getSize(e){return wc.resolve(this.size)}}class yd extends od{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),wc.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.persistence=e,this.ri=new iu(e=>ql(e),Hl),this.lastRemoteSnapshotVersion=fc.min(),this.highestTargetId=0,this.ii=0,this.si=new pd,this.targetCount=0,this.oi=td._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),wc.resolve()}getLastRemoteSnapshotVersion(e){return wc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return wc.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),wc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),wc.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new td(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,wc.resolve()}updateTargetData(e,t){return this.lr(t),wc.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,wc.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ri.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ri.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),wc.waitFor(s).next(()=>r)}getTargetCount(e){return wc.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return wc.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),wc.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),wc.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),wc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return wc.resolve(n)}containsKey(e,t){return wc.resolve(this.si.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this._i={},this.overlays={},this.ai=new Ec(0),this.ui=!1,this.ui=!0,this.ci=new dd,this.referenceDelegate=e(this),this.li=new vd(this),this.indexManager=new Qh,this.remoteDocumentCache=function(e){return new gd(e)}(e=>this.referenceDelegate.hi(e)),this.serializer=new Wh(t),this.Pi=new ud(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new md(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Io("MemoryPersistence","Starting transaction:",e);const r=new wd(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ii(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return wc.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class wd extends vc{constructor(e){super(),this.currentSequenceNumber=e}}class xd{constructor(e){this.persistence=e,this.Ri=new pd,this.Ai=null}static Vi(e){return new xd(e)}get di(){if(this.Ai)return this.Ai;throw Ao(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),wc.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),wc.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),wc.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wc.forEach(this.di,n=>{const r=sc.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,fc.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return wc.or([()=>wc.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ed{constructor(e,t){this.persistence=e,this.fi=new iu(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ic(t)),t=Tc(e.get(n),t);return Ic(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new ad(e,t)}(this,t)}static Vi(e,t){return new Ed(e,t)}Ti(){}Ii(e){return wc.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return wc.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?wc.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,s.removeEntry(r,fc.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),wc.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),wc.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),wc.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),wc.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hl(e.data.value)),t}wr(e,t,n){return wc.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return wc.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Is=r}static Es(e,t){let n=gu(),r=gu();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new _d(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=xn()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(wn())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.gs(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ps(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new kd;return this.ys(e,t,n).next(r=>{if(s.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>s.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(To()<=Mn.DEBUG&&Io("QueryEngine","SDK will not create cache indexes for query:",tu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),wc.resolve()):(To()<=Mn.DEBUG&&Io("QueryEngine","Query:",tu(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(To()<=Mn.DEBUG&&Io("QueryEngine","The SDK decides to create cache indexes for query:",tu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yl(t))):wc.resolve())}gs(e,t){if(Jl(t))return wc.resolve(null);let n=Yl(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Xl(t,null,"F"),n=Yl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=gu(...r);return this.fs.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.bs(t,r);return this.Ss(t,i,s,n.readTime)?this.gs(e,Xl(t,null,"F")):this.Ds(e,i,t,n)}))})))}ps(e,t,n,r){return Jl(t)||r.isEqual(fc.min())?wc.resolve(null):this.fs.getDocuments(e,n).next(s=>{const i=this.bs(t,s);return this.Ss(t,i,n,r)?wc.resolve(null):(To()<=Mn.DEBUG&&Io("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tu(t)),this.Ds(e,i,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=fc.fromTimestamp(1e9===r?new pc(n+1,0):new pc(n,r));return new gc(s,sc.empty(),t)}(r,-1)).next(e=>e))})}bs(e,t){let n=new Pc(ru(e));return t.forEach((t,r)=>{nu(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(e,t,n){return To()<=Mn.DEBUG&&Io("QueryEngine","Using full collection scan to execute query:",tu(t)),this.fs.getDocumentsMatchingQuery(e,t,gc.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="LocalStore";class Sd{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Ac(Ko),this.Fs=new iu(e=>ql(e),Hl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ld(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}async function Cd(e,t){const n=Po(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let a=gu();for(const e of r){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next(e=>({Ns:e,removedBatchIds:s,addedBatchIds:i}))})})}function Nd(e){const t=Po(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Ad(e,t){const n=Po(e),r=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];t.targetChanges.forEach((i,o)=>{const c=s.get(o);if(!c)return;a.push(n.li.removeMatchingKeys(e,i.removedDocuments,o).next(()=>n.li.addMatchingKeys(e,i.addedDocuments,o)));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?l=l.withResumeToken(Mc.EMPTY_BYTE_STRING,fc.min()).withLastLimboFreeSnapshotVersion(fc.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(o,l),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,i)&&a.push(n.li.updateTargetData(e,l))});let o=ou(),c=gu();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(function(e,t,n){let r=gu(),s=gu();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=ou();return n.forEach((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(fc.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Io(Id,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)}),{Bs:r,Ls:s}})}(e,i,t.documentUpdates).next(e=>{o=e.Bs,c=e.Ls})),!r.isEqual(fc.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return wc.waitFor(a).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,c)).next(()=>o)}).then(e=>(n.vs=s,e))}function Rd(e,t){const n=Po(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function Dd(e,t,n){const r=Po(e),s=r.vs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!xc(e))throw e;Io(Id,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Pd(e,t,n){const r=Po(e);let s=fc.min(),i=gu();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Po(e),s=r.Fs.get(n);return void 0!==s?wc.resolve(r.vs.get(s)):r.li.getTargetData(t,n)}(r,e,Yl(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?s:fc.min(),n?i:gu())).next(e=>(function(e,t,n){let r=e.Ms.get(t)||fc.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ks:i})))}class Od{constructor(){this.activeTargetIds=yu}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ld{constructor(){this.vo=new Od,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Od,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{Mo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="ConnectivityMonitor";class Ud{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Io(Md,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Io(Md,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd=null;function Fd(){return null===Vd?Vd=268435456+Math.round(2147483648*Math.random()):Vd++,"0x"+Vd.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zd="RestConnection",$d={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Bd{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Qc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const i=Fd(),a=this.Qo(e,t.toUriEncodedString());Io(zd,`Sending RPC '${e}' ${i}:`,a,n);const o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(o,r,s);const{host:c}=new URL(a),l=mn(c);return this.zo(e,a,o,n,l).then(t=>(Io(zd,`Received RPC '${e}' ${i}: `,t),t),t=>{throw Co(zd,`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}jo(e,t,n,r,s,i){return this.Wo(e,t,n,r,s)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_o,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=$d[e];let r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="WebChannelConnection",Gd=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Kd extends Bd{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Kd.c_){const e=bo();Gd(e,vo.STAT_EVENT,e=>{e.stat===yo.PROXY?Io(Hd,"STAT_EVENT: detected buffering proxy"):e.stat===yo.NOPROXY&&Io(Hd,"STAT_EVENT: detected no buffering proxy")}),Kd.c_=!0}}zo(e,t,n,r,s){const i=Fd();return new Promise((s,a)=>{const o=new po;o.setWithCredentials(!0),o.listenOnce(mo.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case go.NO_ERROR:const t=o.getResponseJson();Io(Hd,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case go.TIMEOUT:Io(Hd,`RPC '${e}' ${i} timed out`),a(new Lo(Oo.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const n=o.getStatus();if(Io(Hd,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Oo).indexOf(t)>=0?t:Oo.UNKNOWN}(t.status);a(new Lo(e,t.message))}else a(new Lo(Oo.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Lo(Oo.UNAVAILABLE,"Connection failed."));break;default:Ao(9055,{l_:e,streamId:i,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{Io(Hd,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);Io(Hd,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",c,n,15)})}T_(e,t,n){const r=Fd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(a.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");Io(Hd,`Creating RPC '${e}' stream ${r}: ${c}`,a);const l=i.createWebChannel(c,a);this.I_(l);let u=!1,h=!1;const d=new qd({Ho:t=>{h?Io(Hd,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Io(Hd,`Opening RPC '${e}' stream ${r} transport.`),l.open(),u=!0),Io(Hd,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Jo:()=>l.close()});return Gd(l,fo.EventType.OPEN,()=>{h||(Io(Hd,`RPC '${e}' stream ${r} transport opened.`),d.i_())}),Gd(l,fo.EventType.CLOSE,()=>{h||(h=!0,Io(Hd,`RPC '${e}' stream ${r} transport closed`),d.o_(),this.E_(l))}),Gd(l,fo.EventType.ERROR,t=>{h||(h=!0,Co(Hd,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new Lo(Oo.UNAVAILABLE,"The operation could not be completed")))}),Gd(l,fo.EventType.MESSAGE,t=>{if(!h){const n=t.data[0];Do(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){Io(Hd,`RPC '${e}' stream ${r} received error:`,i);const t=i.status;let n=function(e){const t=Zu[e];if(void 0!==t)return th(t)}(t),s=i.message;"NOT_FOUND"===t&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&Co(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=Oo.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),h=!0,d.o_(new Lo(n,s)),l.close()}else Io(Hd,`RPC '${e}' stream ${r} received:`,n),d.__(n)}}),Kd.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wo()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(e){return new bh(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kd.c_=!1;class Qd{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Io("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="PersistentStream";class Xd{constructor(e,t,n,r,s,i,a,o){this.Ci=e,this.b_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qd(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Oo.RESOURCE_EXHAUSTED?(So(t.toString()),So("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Oo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new Lo(Oo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.H_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Io(Yd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Io(Yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zd extends Xd{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ao(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(Do(void 0===t||"string"==typeof t,58123),Mc.fromBase64String(t||"")):(Do(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Mc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,o=a&&function(e){const t=void 0===e.code?Oo.UNKNOWN:th(e.code);return new Lo(t,e.message||"")}(a);n=new hh(r,s,i,o||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nh(e,r.document.name),i=kh(r.document.updateTime),a=r.document.createTime?kh(r.document.createTime):fc.min(),o=new vl({mapValue:{fields:r.document.fields}}),c=wl.newFoundDocument(s,i,a,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new lh(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Nh(e,r.document),i=r.readTime?kh(r.readTime):fc.min(),a=wl.newNoDocument(s,i),o=r.removedTargetIds||[];n=new lh([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Nh(e,r.document),i=r.removedTargetIds||[];n=new lh([],i,s,null)}else{if(!("filter"in t))return Ao(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new Xu(r,s),a=e.targetId;n=new uh(a,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return fc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?fc.min():t.readTime?kh(t.readTime):fc.min()}(e);return this.listener.J_(t,n)}Z_(e){const t={};t.database=Rh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Gl(r)?{documents:Oh(e,r)}:{query:Lh(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Eh(e,t.resumeToken);const r=wh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(fc.min())>0){n.readTime=xh(e,t.snapshotVersion.toTimestamp());const r=wh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ao(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.K_(t)}X_(e){const t={};t.database=Rh(this.serializer),t.removeTarget=e,this.K_(t)}}class ep extends Xd{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Do(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Do(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Do(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Do(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?kh(e.updateTime):kh(t);return n.isEqual(fc.min())&&(n=kh(t)),new Pu(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=kh(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Rh(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof $u)n={update:Ph(e,t.key,t.value)};else if(t instanceof Ku)n={delete:Ch(e,t.key)};else if(t instanceof Bu)n={update:Ph(e,t.key,t.data),updateMask:qh(t.fieldMask)};else{if(!(t instanceof Wu))return Ao(16599,{dt:t.type});n={verify:Ch(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Tu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Iu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Cu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Au)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Ao(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_h(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ao(27497)}(e,t.precondition)),n}(this.serializer,e))};this.K_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{}class np extends tp{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Lo(Oo.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(e,Ih(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Oo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Lo(Oo.UNKNOWN,e.toString())})}jo(e,t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.jo(e,Ih(t,n),r,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Oo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Lo(Oo.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(So(t),this.aa=!1):Io("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="RemoteStore";class ip{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{fp(this)&&(Io(sp,"Restarting streams for network reachability change."),await async function(e){const t=Po(e);t.Ea.add(4),await op(t),t.Va.set("Unknown"),t.Ea.delete(4),await ap(t)}(this))})}),this.Va=new rp(n,r)}}async function ap(e){if(fp(e))for(const t of e.Ra)await t(!0)}async function op(e){for(const t of e.Ra)await t(!1)}function cp(e,t){const n=Po(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),pp(n)?dp(n):Dp(n).O_()&&up(n,t))}function lp(e,t){const n=Po(e),r=Dp(n);n.Ia.delete(t),r.O_()&&hp(n,t),0===n.Ia.size&&(r.O_()?r.L_():fp(n)&&n.Va.set("Unknown"))}function up(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(fc.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dp(e).Z_(t)}function hp(e,t){e.da.$e(t),Dp(e).X_(t)}function dp(e){e.da=new ph({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Dp(e).start(),e.Va.ua()}function pp(e){return fp(e)&&!Dp(e).x_()&&e.Ia.size>0}function fp(e){return 0===Po(e).Ea.size}function mp(e){e.da=void 0}async function gp(e){e.Va.set("Online")}async function yp(e){e.Ia.forEach((t,n)=>{up(e,t)})}async function vp(e,t){mp(e),pp(e)?(e.Va.ha(t),dp(e)):e.Va.set("Unknown")}async function bp(e,t,n){if(e.Va.set("Online"),t instanceof hh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){Io(sp,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wp(e,n)}else if(t instanceof lh?e.da.Xe(t):t instanceof uh?e.da.st(t):e.da.tt(t),!n.isEqual(fc.min()))try{const t=await Nd(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Ia.get(r);s&&e.Ia.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t);if(!r)return;e.Ia.set(t,r.withResumeToken(Mc.EMPTY_BYTE_STRING,r.snapshotVersion)),hp(e,t);const s=new Kh(r.target,t,n,r.sequenceNumber);up(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Io(sp,"Failed to raise snapshot:",t),await wp(e,t)}}async function wp(e,t,n){if(!xc(t))throw t;e.Ea.add(1),await op(e),e.Va.set("Offline"),n||(n=()=>Nd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Io(sp,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await ap(e)})}function xp(e,t){return t().catch(n=>wp(e,n,t))}async function Ep(e){const t=Po(e),n=Pp(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;_p(t);)try{const e=await Rd(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,kp(t,e)}catch(e){await wp(t,e)}Tp(t)&&Ip(t)}function _p(e){return fp(e)&&e.Ta.length<10}function kp(e,t){e.Ta.push(t);const n=Pp(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Tp(e){return fp(e)&&!Pp(e).x_()&&e.Ta.length>0}function Ip(e){Pp(e).start()}async function Sp(e){Pp(e).ra()}async function Cp(e){const t=Pp(e);for(const n of e.Ta)t.ea(n.mutations)}async function Np(e,t,n){const r=e.Ta.shift(),s=Qu.from(r,t,n);await xp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ep(e)}async function Ap(e,t){t&&Pp(e).Y_&&await async function(e,t){if(function(e){return function(e){switch(e){case Oo.OK:return Ao(64938);case Oo.CANCELLED:case Oo.UNKNOWN:case Oo.DEADLINE_EXCEEDED:case Oo.RESOURCE_EXHAUSTED:case Oo.INTERNAL:case Oo.UNAVAILABLE:case Oo.UNAUTHENTICATED:return!1;case Oo.INVALID_ARGUMENT:case Oo.NOT_FOUND:case Oo.ALREADY_EXISTS:case Oo.PERMISSION_DENIED:case Oo.FAILED_PRECONDITION:case Oo.ABORTED:case Oo.OUT_OF_RANGE:case Oo.UNIMPLEMENTED:case Oo.DATA_LOSS:return!0;default:return Ao(15467,{code:e})}}(e)&&e!==Oo.ABORTED}(t.code)){const n=e.Ta.shift();Pp(e).B_(),await xp(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ep(e)}}(e,t),Tp(e)&&Ip(e)}async function Rp(e,t){const n=Po(e);n.asyncQueue.verifyOperationInProgress(),Io(sp,"RemoteStore received new credentials");const r=fp(n);n.Ea.add(3),await op(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await ap(n)}function Dp(e){return e.ma||(e.ma=function(e,t,n){const r=Po(e);return r.sa(),new Zd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Zo:gp.bind(null,e),Yo:yp.bind(null,e),t_:vp.bind(null,e),J_:bp.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),pp(e)?dp(e):e.Va.set("Unknown")):(await e.ma.stop(),mp(e))})),e.ma}function Pp(e){return e.fa||(e.fa=function(e,t,n){const r=Po(e);return r.sa(),new ep(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Sp.bind(null,e),t_:Ap.bind(null,e),ta:Cp.bind(null,e),na:Np.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Ep(e)):(await e.fa.stop(),e.Ta.length>0&&(Io(sp,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Op{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new jo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,a=new Op(e,t,i,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Lo(Oo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(e,t){if(So("AsyncQueue",`${t}: ${e}`),xc(e))return new Lo(Oo.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{static emptySet(e){return new jp(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||sc.comparator(t.key,n.key):(e,t)=>sc.comparator(e.key,t.key),this.keyedMap=lu(),this.sortedSet=new Ac(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new jp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.ga=new Ac(sc.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ao(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Up{constructor(e,t,n,r,s,i,a,o,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Up(e,t,jp.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Fp{constructor(){this.queries=zp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Po(e),r=n.queries;n.queries=zp(),r.forEach((e,n)=>{for(const r of n.ba)r.onError(t)})}(this,new Lo(Oo.ABORTED,"Firestore shutting down"))}}function zp(){return new iu(e=>eu(e),Zl)}function $p(e,t){const n=Po(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.ba)e.Fa(s)&&(r=!0);t.wa=s}}r&&qp(n)}function Bp(e,t,n){const r=Po(e),s=r.queries.get(t);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(t)}function qp(e){e.Ca.forEach(e=>{e.next()})}var Hp,Gp;(Gp=Hp||(Hp={})).Ma="default",Gp.Cache="cache";class Kp{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Up(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.Ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Up.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Hp.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.key=e}}class Jp{constructor(e){this.key=e}}class Qp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=gu(),this.mutatedKeys=gu(),this.eu=ru(e),this.tu=new jp(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Mp,r=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const l=r.get(e),u=nu(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.su(l,u)||(n.track({type:2,doc:u}),p=!0,(o&&this.eu(u,o)>0||c&&this.eu(u,c)<0)&&(a=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(o||c)&&(a=!0)),p&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{tu:i,iu:n,Ss:a,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const i=e.iu.ya();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ao(20277,{Vt:e})}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const a=t&&!r?this._u():[],o=0===this.Ya.size&&this.current&&!r?1:0,c=o!==this.Xa;return this.Xa=o,0!==i.length||c?{snapshot:new Up(this.query,e.tu,s,i,e.mutatedKeys,0===o,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Mp,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=gu(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new Jp(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Wp(n))}),t}cu(e){this.Za=e.ks,this.Ya=gu();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Up.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const Yp="SyncEngine";class Xp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Zp{constructor(e){this.key=e,this.hu=!1}}class ef{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new iu(e=>eu(e),Zl),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ac(sc.comparator),this.Au=new Map,this.Vu=new pd,this.du={},this.mu=new Map,this.fu=td.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function tf(e,t,n=!0){const r=_f(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await rf(r,t,n,!0),s}async function nf(e,t){const n=_f(e);await rf(n,t,!0,!1)}async function rf(e,t,n,r){const s=await function(e,t){const n=Po(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(s=>s?(r=s,wc.resolve(r)):n.li.allocateTargetId(e).next(s=>(r=new Kh(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}(e.localStore,Yl(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let o;return r&&(o=await async function(e,t,n,r,s){e.pu=(t,n,r)=>async function(e,t,n,r){let s=t.view.ru(n);s.Ss&&(s=await Pd(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,s)));const i=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i,a);return yf(e,t.targetId,o.au),o.snapshot}(e,t,n,r);const i=await Pd(e.localStore,t,!0),a=new Qp(t,i.ks),o=a.ru(i.documents),c=ch.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),l=a.applyChanges(o,e.isPrimaryClient,c);yf(e,n,l.au);const u=new Xp(t,n,a);return e.Tu.set(t,u),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),l.snapshot}(e,t,i,"current"===a,s.resumeToken)),e.isPrimaryClient&&n&&cp(e.remoteStore,s),o}async function sf(e,t,n){const r=Po(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(e=>!Zl(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&lp(r.remoteStore,s.targetId),mf(r,s.targetId)}).catch(bc)):(mf(r,s.targetId),await Dd(r.localStore,s.targetId,!0))}async function af(e,t){const n=Po(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lp(n.remoteStore,r.targetId))}async function of(e,t,n){const r=function(e){const t=Po(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=df.bind(null,t),t}(e);try{const e=await function(e,t){const n=Po(e),r=pc.now(),s=t.reduce((e,t)=>e.add(t.key),gu());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=ou(),c=gu();return n.xs.getEntries(e,s).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(s=>{i=s;const a=[];for(const e of t){const t=Fu(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new Bu(e.key,t,bl(t.value.mapValue),Ou.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)}).next(t=>{a=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:uu(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new Ac(Ko)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await wf(r,e.changes),await Ep(r.remoteStore)}catch(e){const t=Lp(e,"Failed to persist write");n.reject(t)}}async function cf(e,t){const n=Po(e);try{const e=await Ad(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(Do(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?Do(r.hu,14607):e.removedDocuments.size>0&&(Do(r.hu,42227),r.hu=!1))}),await wf(n,e,t)}catch(e){await bc(e)}}function lf(e,t,n){const r=Po(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const s=r.view.va(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=Po(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.ba)s.va(t)&&(r=!0)}),r&&qp(n)}(r.eventManager,t),e.length&&r.Pu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uf(e,t,n){const r=Po(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let e=new Ac(sc.comparator);e=e.insert(i,wl.newNoDocument(i,fc.min()));const n=gu().add(i),s=new oh(fc.min(),new Map,new Ac(Ko),e,n);await cf(r,s),r.Ru=r.Ru.remove(i),r.Au.delete(t),bf(r)}else await Dd(r.localStore,t,!1).then(()=>mf(r,t,n)).catch(bc)}async function hf(e,t){const n=Po(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Po(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let a=wc.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);Do(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=gu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);ff(n,r,null),pf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wf(n,e)}catch(e){await bc(e)}}async function df(e,t,n){const r=Po(e);try{const e=await function(e,t){const n=Po(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Do(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);ff(r,t,n),pf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await wf(r,e)}catch(n){await bc(n)}}function pf(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function ff(e,t,n){const r=Po(e);let s=r.du[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function mf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||gf(e,t)})}function gf(e,t){e.Eu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(lp(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),bf(e))}function yf(e,t,n){for(const r of n)r instanceof Wp?(e.Vu.addReference(r.key,t),vf(e,r)):r instanceof Jp?(Io(Yp,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||gf(e,r.key)):Ao(19791,{wu:r})}function vf(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Eu.has(r)||(Io(Yp,"New document in limbo: "+n),e.Eu.add(r),bf(e))}function bf(e){for(;e.Eu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new sc(tc.fromString(t)),r=e.fu.next();e.Au.set(r,new Zp(n)),e.Ru=e.Ru.insert(n,r),cp(e.remoteStore,new Kh(Yl(Wl(n.path)),r,"TargetPurposeLimboResolution",Ec.ce))}}async function wf(e,t,n){const r=Po(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((e,o)=>{a.push(r.pu(o,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(o.targetId)?.current;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){s.push(e);const t=_d.Es(o.targetId,e);i.push(t)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(e,t){const n=Po(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>wc.forEach(t,t=>wc.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>wc.forEach(t.Is,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!xc(e))throw e;Io(Id,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.vs.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(e,s)}}}(r.localStore,i))}async function xf(e,t){const n=Po(e);if(!n.currentUser.isEqual(t)){Io(Yp,"User change. New user:",t.toKey());const e=await Cd(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new Lo(Oo.CANCELLED,t))})}),e.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await wf(n,e.Ns)}}function Ef(e,t){const n=Po(e),r=n.Au.get(t);if(r&&r.hu)return gu().add(r.key);{let e=gu();const r=n.Iu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function _f(e){const t=Po(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uf.bind(null,t),t.Pu.J_=$p.bind(null,t.eventManager),t.Pu.yu=Bp.bind(null,t.eventManager),t}class kf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new Sd(e,t,n,r)}(this.persistence,new Td,e.initialUser,this.serializer)}Cu(e){return new bd(xd.Vi,this.serializer)}Du(e){return new Ld}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kf.provider={build:()=>new kf};class Tf extends kf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Do(this.persistence.referenceDelegate instanceof Ed,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new id(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?ed.withCacheSize(this.cacheSizeBytes):ed.DEFAULT;return new bd(e=>Ed.Vi(e,t),this.serializer)}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=xf.bind(null,this.syncEngine),await async function(e,t){const n=Po(e);t?(n.Ea.delete(2),await ap(n)):t||(n.Ea.add(2),await op(n),n.Va.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fp}createDatastore(e){const t=Jd(e.databaseInfo.databaseId),n=function(e){return new Kd(e)}(e.databaseInfo);return function(e,t,n,r){return new np(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new ip(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>lf(this.syncEngine,e,0),Ud.v()?new Ud:new jd)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){const o=new ef(e,t,n,r,s,i);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Po(e);Io(sp,"RemoteStore shutting down."),t.Ea.add(5),await op(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}If.provider={build:()=>new If};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):So("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="FirestoreClient";class Nf{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=Eo.UNAUTHENTICATED,this.clientId=Go.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{Io(Cf,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Io(Cf,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Lp(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Af(e,t){e.asyncQueue.verifyOperationInProgress(),Io(Cf,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Cd(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Rf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Io(Cf,"Using user provided OfflineComponentProvider");try{await Af(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!function(e){return"FirebaseError"===e.name?e.code===Oo.FAILED_PRECONDITION||e.code===Oo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(r))throw r;Co("Error using user provided cache. Falling back to memory cache: "+r),await Af(e,new kf)}}else Io(Cf,"Using default OfflineComponentProvider"),await Af(e,new Tf(void 0));return e._offlineComponents}(e);Io(Cf,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Rp(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Rp(t.remoteStore,n)),e._onlineComponents=t}async function Df(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Io(Cf,"Using user provided OnlineComponentProvider"),await Rf(e,e._uninitializedComponentsProvider._online)):(Io(Cf,"Using default OnlineComponentProvider"),await Rf(e,new If))),e._onlineComponents}async function Pf(e){const t=await Df(e),n=t.eventManager;return n.onListen=tf.bind(null,t.syncEngine),n.onUnlisten=sf.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=nf.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=af.bind(null,t.syncEngine),n}function Of(e,t,n={}){const r=new jo;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Sf({next:o=>{i.Nu(),t.enqueueAndForget(()=>async function(e,t){const n=Po(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.ba.indexOf(t);e>=0&&(i.ba.splice(e,1),0===i.ba.length?s=t.Da()?0:1:!i.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,a));const c=o.docs.has(n);!c&&o.fromCache?s.reject(new Lo(Oo.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&o.fromCache&&r&&"server"===r.source?s.reject(new Lo(Oo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(o)},error:e=>s.reject(e)}),a=new Kp(Wl(n.path),i,{includeMetadataChanges:!0,Ka:!0});return async function(e,t){const n=Po(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Sa()&&t.Da()&&(r=2):(i=new Vp,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=Lp(e,`Initialization of query '${tu(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.ba.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&qp(n)}(e,a)}(await Pf(e),e.asyncQueue,t,n,r)),r.promise}function Lf(e,t){const n=new jo;return e.asyncQueue.enqueueAndForget(async()=>of(await function(e){return Df(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function jf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Mf=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uf="firestore.googleapis.com",Vf=!0;class Ff{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Lo(Oo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uf,this.ssl=Vf}else this.host=e.host,this.ssl=e.ssl??Vf;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Zh;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Lo(Oo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Lo(Oo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jf(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Lo(Oo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Lo(Oo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Lo(Oo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Lo(Oo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Lo(Oo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Uo;switch(e.type){case"firstParty":return new $o(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Lo(Oo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Mf.get(e);t&&(Io("ComponentProvider","Removing Datastore"),Mf.delete(e),t.terminate())}(this),Promise.resolve()}}function $f(e,t,n,r={}){e=cc(e,zf);const s=mn(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;s&&(gn(`https://${o}`),bn("Firestore",!0)),i.host!==Uf&&i.host!==o&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:o,ssl:s,emulatorOptions:r};if(!Tn(c,a)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Eo.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[on(JSON.stringify({alg:"none",type:"JWT"})),on(JSON.stringify(i)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Lo(Oo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Eo(s)}e._authCredentials=new Vo(new Mo(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Bf(this.firestore,e,this._query)}}class qf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qf(this.firestore,e,this._key)}toJSON(){return{type:qf._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(uc(t,qf._jsonSchema))return new qf(e,n||null,new sc(tc.fromString(t.referencePath)))}}qf._jsonSchemaVersion="firestore/documentReference/1.0",qf._jsonSchema={type:lc("string",qf._jsonSchemaVersion),referencePath:lc("string")};class Hf extends Bf{constructor(e,t,n){super(e,t,Wl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qf(this.firestore,null,new sc(e))}withConverter(e){return new Hf(this.firestore,e,this._path)}}function Gf(e,t,...n){if(e=Dn(e),1===arguments.length&&(t=Go.newId()),function(e,t,n){if(!n)throw new Lo(Oo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof zf){const r=tc.fromString(t,...n);return ic(r),new qf(e,null,new sc(r))}{if(!(e instanceof qf||e instanceof Hf))throw new Lo(Oo.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(tc.fromString(t,...n));return ic(r),new qf(e.firestore,e instanceof Hf?e.converter:null,new sc(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="AsyncQueue";class Wf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qd(this,"async_queue_retry"),this._c=()=>{const e=Wd();e&&Io(Kf,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=Wd();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new jo;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(by){if(!xc(by))throw by;Io(Kf,"Operation failed with retryable error: "+by)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,So("INTERNAL UNHANDLED ERROR: ",Jf(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Op.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Ao(47125,{Pc:Jf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Qf extends zf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Wf,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wf(e),this._firestoreClient=void 0,await e}}}function Yf(e){if(e._terminated)throw new Lo(Oo.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,r,s){return new Jc(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,jf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Nf(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Xf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xf(Mc.fromBase64String(e))}catch(e){throw new Lo(Oo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Xf(Mc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xf._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uc(e,Xf._jsonSchema))return Xf.fromBase64String(e.bytes)}}Xf._jsonSchemaVersion="firestore/bytes/1.0",Xf._jsonSchema={type:lc("string",Xf._jsonSchemaVersion),bytes:lc("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Lo(Oo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Lo(Oo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Lo(Oo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ko(this._lat,e._lat)||Ko(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tm._jsonSchemaVersion}}static fromJSON(e){if(uc(e,tm._jsonSchema))return new tm(e.latitude,e.longitude)}}tm._jsonSchemaVersion="firestore/geoPoint/1.0",tm._jsonSchema={type:lc("string",tm._jsonSchemaVersion),latitude:lc("number"),longitude:lc("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nm{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nm._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uc(e,nm._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new nm(e.vectorValues);throw new Lo(Oo.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nm._jsonSchemaVersion="firestore/vectorValue/1.0",nm._jsonSchema={type:lc("string",nm._jsonSchemaVersion),vectorValues:lc("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rm=/^__.*__$/;class sm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Bu(e,this.data,this.fieldMask,t,this.fieldTransforms):new $u(e,this.data,t,this.fieldTransforms)}}function im(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ao(40011,{dataSource:e})}}class am{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new am({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return mm(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(0===e.length)throw this.createError("Document fields must not be empty");if(im(this.dataSource)&&rm.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class om{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Jd(e)}createContext(e,t,n,r=!1){return new am({dataSource:e,methodName:t,targetDoc:n,path:rc.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cm(e,t,n,r,s,i={}){const a=e.createContext(i.merge||i.mergeFields?2:0,t,n,s);dm("Data must be an object, but it was:",a,r);const o=um(r,a);let c,l;if(i.merge)c=new Lc(a.fieldMask),l=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=pm(t,r,n);if(!a.contains(s))throw new Lo(Oo.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);gm(e,s)||e.push(s)}c=new Lc(e),l=a.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,l=a.fieldTransforms;return new sm(new vl(o),c,l)}function lm(e,t){if(hm(e=Dn(e)))return dm("Unsupported field value:",t,e),um(e,t);if(e instanceof em)return function(e,t){if(!im(t.dataSource))throw t.createError(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.createError(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.createError("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=lm(s,t.childContextForArray(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Dn(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return wu(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=pc.fromDate(e);return{timestampValue:xh(t.serializer,n)}}if(e instanceof pc){const n=new pc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:xh(t.serializer,n)}}if(e instanceof tm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Xf)return{bytesValue:Eh(t.serializer,e._byteString)};if(e instanceof qf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Th(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof nm)return function(e,t){const n=e instanceof nm?e.toArray():e,r={fields:{[Xc]:{stringValue:tl},[nl]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.createError("VectorValues must only contain numeric values.");return vu(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if(Gh(e))return e._toProto(t.serializer);throw t.createError(`Unsupported field value: ${oc(e)}`)}(e,t)}function um(e,t){const n={};return Nc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Cc(e,(e,r)=>{const s=lm(r,t.childContextForField(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function hm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof pc||e instanceof tm||e instanceof Xf||e instanceof qf||e instanceof em||e instanceof nm||Gh(e))}function dm(e,t,n){if(!hm(n)||!ac(n)){const r=oc(n);throw"an object"===r?t.createError(e+" a custom object"):t.createError(e+" "+r)}}function pm(e,t,n){if((t=Dn(t))instanceof Zf)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(fm)>=0)throw mm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zf(...t.split("."))._internalPath}catch(zm){throw mm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw mm("Field path arguments must be of type string or ",e,!1,void 0,n)}const fm=new RegExp("[~\\*/\\[\\]]");function mm(e,t,n,r,s){const i=r&&!r.isEmpty(),a=void 0!==s;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Lo(Oo.INVALID_ARGUMENT,o+e+c)}function gm(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{convertValue(e,t="none"){switch(rl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ao(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Cc(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[nl].arrayValue?.values?.map(e=>Fc(e.doubleValue));return new nm(t)}convertGeoPoint(e){return new tm(Fc(e.latitude),Fc(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Kc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wc(e));default:return null}}convertTimestamp(e){const t=Vc(e);return new pc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=tc.fromString(e);Do(Hh(n),9688,{name:e});const r=new Yc(n.get(1),n.get(3)),s=new sc(n.popFirst(5));return r.isEqual(t)||So(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qf(this.firestore,null,t)}}const bm="@firebase/firestore",wm="4.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Em(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(pm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Em extends xm{data(){return super.data()}}class _m{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class km extends xm{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(pm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Lo(Oo.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=km._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}km._jsonSchemaVersion="firestore/documentSnapshot/1.0",km._jsonSchema={type:lc("string",km._jsonSchemaVersion),bundleSource:lc("string","DocumentSnapshot"),bundleName:lc("string"),bundle:lc("string")};class Tm extends km{data(e={}){return super.data(e)}}class Im{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new _m(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Tm(this._firestore,this._userDataWriter,n.key,n,new _m(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Lo(Oo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Tm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new _m(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Tm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new _m(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Sm(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Lo(Oo.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Im._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Go.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Sm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ao(61501,{type:e})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cm(e){e=cc(e,qf);const t=cc(e.firestore,Qf);return Of(Yf(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),s=new vm(e);return new km(e,s,t._key,r,new _m(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}function Nm(e,t,n){e=cc(e,qf);const r=cc(e.firestore,Qf),s=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t),i=function(e){const t=e._freezeSettings(),n=Jd(e._databaseId);return new om(e._databaseId,!!t.ignoreUndefinedProperties,n)}(r);return function(e,t){const n=Yf(e);return Lf(n,t)}(r,[cm(i,"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Ou.none())])}Im._jsonSchemaVersion="firestore/querySnapshot/1.0",Im._jsonSchema={type:lc("string",Im._jsonSchemaVersion),bundleSource:lc("string","QuerySnapshot"),bundleName:lc("string"),bundle:lc("string")},function(e,t=!0){_o=Gr,zr(new Pn("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Qf(new Fo(e.getProvider("auth-internal")),new qo(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Lo(Oo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yc(e.options.projectId,t)}(s,n),s);return r={useFetchStreams:t,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Jr(bm,wm,e),Jr(bm,wm,"esm2020")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Jr("firebase","12.10.0","app"),console.log("Firebase config loaded:",{apiKey:!0,authDomain:!0,projectId:"enum-synthesis-engine"});const Am=Kr({apiKey:"AIzaSyAZWV9H6o9xcHx0qmSE_jrFwZ8J6Zq7kSk",authDomain:"enum-synthesis-engine.firebaseapp.com",projectId:"enum-synthesis-engine",storageBucket:"enum-synthesis-engine.firebasestorage.app",messagingSenderId:"162538938526",appId:"1:162538938526:web:5ffa568f4d5704d57d9b8f"}),Rm=function(e=Wr()){const t=$r(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=$r(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Tn(n.getOptions(),t??{}))return e;hs(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:no,persistence:[ba,na,sa]}),r=pn("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ao)return;const r=t?.token;oo!==r&&(oo=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Dn(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Dn(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var s;const i=hn("auth");return i&&Ci(n,`http://${i}`),n}(Am),Dm=function(e){const t="object"==typeof e?e:Wr(),n="string"==typeof e?e:Qc,r=$r(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const e=(e=>{const t=hn(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&$f(r,...e)}return r}(Am),Pm=e=>e&&"object"==typeof e&&"code"in e&&"message"in e?{code:e.code,message:e.message,stack:e.stack}:e instanceof Error?{code:"unknown",message:e.message,stack:e.stack}:{code:"unknown",message:String(e),stack:void 0},Om=async(e,t)=>{try{const n=await async function(e,t,n){if(Br(e.app))return Promise.reject(fs(e));const r=vi(e),s=Si(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hi),i=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Yi(e),t}),a=await Gi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(a.user),a}(Rm,e,t),r=n.user,s={uid:r.uid,email:r.email,displayName:r.displayName,photoURL:r.photoURL,role:"free"};return await Nm(Gf(Dm,"users",r.uid),{role:"free",email:r.email,createdAt:(new Date).toISOString()}),s}catch(n){const e=Pm(n);throw console.error("🔥 signUp error:",e),n}},Lm=async(e,t)=>{try{console.log("🔐 Attempting sign-in for:",e);const n=await Xi(Rm,e,t);console.log("✅ Firebase auth success, UID:",n.user.uid);const r=n.user,s=await Cm(Gf(Dm,"users",r.uid)),i=s.exists()?s.data().role:"free";return console.log("👤 User role:",i),{uid:r.uid,email:r.email,displayName:r.displayName,photoURL:r.photoURL,role:i}}catch(n){const e=Pm(n);throw console.error("🔥 signIn error:",e),n}},jm=async()=>{try{await function(e){return Dn(e).signOut()}(Rm),console.log("👋 User signed out")}catch(e){const t=Pm(e);throw console.error("🔥 logOut error:",t),e}},Mm=e=>function(e,t,n,r){return Dn(e).onAuthStateChanged(t,n,r)}(Rm,async t=>{try{if(t){const n=await Cm(Gf(Dm,"users",t.uid)),r=n.exists()?n.data().role:"free";e({uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:r})}else e(null)}catch(n){const t=Pm(n);console.error("🔥 auth state change error:",t),e(null)}}),Um=()=>{const[r]=e.useState(!1),{userProfile:s,setAuthenticated:i,setUserProfile:a}=tn(),o=le(),c=[{icon:Rt,label:"Dashboard",path:"/dashboard"},{icon:At,label:"Templates",path:"/templates"},{icon:kt,label:"My Projects",path:"/projects"},{icon:jt,label:"AI Assistant",path:"/ai-assistant",role:["paid","admin"]},{icon:Vt,label:"Settings",path:"/settings"}].filter(e=>!e.role||s&&e.role.includes(s.role));return t.jsxs(n.aside,{animate:{width:r?"80px":"280px"},className:"h-full bg-background-surface/30 backdrop-blur-2xl border-r border-glass-border flex flex-col relative z-50 transition-all duration-300",children:[t.jsxs("div",{className:"p-6 mb-8 flex items-center gap-4 "+(r?"justify-center":""),children:[t.jsx(Qt,{}),!r&&t.jsxs(n.div,{initial:{opacity:0},animate:{opacity:1},className:"flex flex-col",children:[t.jsx("span",{className:"text-sm font-black tracking-tighter text-white",children:"ENUM_SYNTHESIS"}),t.jsx("span",{className:"text-[8px] font-mono text-primary-accent tracking-[0.2em]",children:"CORE_v2.1.0"})]})]}),t.jsx("nav",{className:"flex-1 px-4 space-y-2",children:c.map(e=>t.jsxs(Xe,{to:e.path,className:({isActive:e})=>`\n              flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group relative\n              ${e?"bg-primary-bright/10 text-primary-bright border border-primary-bright/20":"text-text-tertiary hover:bg-white/5 hover:text-white"}\n              ${r?"justify-center":""}\n            `,children:[t.jsx(e.icon,{size:20,className:"shrink-0"}),!r&&t.jsx("span",{className:"text-sm font-bold tracking-tight",children:e.label}),r&&t.jsx("div",{className:"absolute left-full ml-4 px-3 py-1 bg-background-surface border border-glass-border rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-[10px] font-black uppercase whitespace-nowrap z-[100]",children:e.label})]},e.path))}),t.jsxs("div",{className:"p-4 border-t border-glass-border",children:[t.jsxs("div",{className:"flex items-center gap-4 p-2 rounded-2xl "+(r?"justify-center":""),children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0",children:s?.photoURL?t.jsx("img",{src:s.photoURL,alt:"User Avatar",className:"w-full h-full object-cover"}):t.jsx(Gt,{size:20,className:"text-text-tertiary"})}),!r&&t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"text-xs font-bold text-white truncate",children:s?.displayName||s?.email?.split("@")[0]||"Synthesizer_01"}),t.jsxs("p",{className:"text-[10px] text-text-tertiary font-mono uppercase tracking-tighter",children:[s?.role||"free","_Tier"]})]})]}),t.jsxs("button",{onClick:async()=>{await jm(),a(null),i(!1),o("/")},className:`\n            w-full mt-4 flex items-center gap-4 px-4 py-3 rounded-2xl text-status-error hover:bg-status-error/10 transition-all group relative\n            ${r?"justify-center":""}\n          `,children:[t.jsx(Pt,{size:20,className:"shrink-0"}),!r&&t.jsx("span",{className:"text-sm font-bold tracking-tight",children:"Disconnect"}),r&&t.jsx("div",{className:"absolute left-full ml-4 px-3 py-1 bg-status-error text-white rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-[10px] font-black uppercase whitespace-nowrap z-[100]",children:"Disconnect"})]})]})]})},Vm=()=>t.jsxs("div",{className:"h-screen w-screen flex bg-background-deep text-text-primary overflow-hidden",children:[t.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:[t.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-bright/5 rounded-full blur-[120px] animate-pulse"}),t.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-accent/5 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"2s"}})]}),t.jsx(Um,{}),t.jsxs("div",{className:"flex-1 flex flex-col relative z-10 overflow-hidden",children:[t.jsx("main",{className:"flex-1 overflow-y-auto overflow-x-hidden p-8",children:t.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"h-full max-w-7xl mx-auto",children:t.jsx(ke,{})})}),t.jsxs("footer",{className:"h-10 px-8 border-t border-glass-border bg-background-surface/80 backdrop-blur-md flex items-center justify-between text-[10px] font-bold text-text-tertiary uppercase tracking-widest shrink-0",children:[t.jsxs("div",{className:"flex gap-8",children:[t.jsxs("span",{className:"flex items-center gap-2 text-status-success",children:[t.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-status-success animate-pulse"}),"Engine_Operational"]}),t.jsxs("span",{className:"flex items-center gap-2 hidden sm:flex",children:[t.jsx(Bt,{size:12,className:"text-primary-accent"}),"Link_Status: Encrypted"]})]}),t.jsxs("div",{className:"flex gap-8 items-center",children:[t.jsxs("span",{className:"flex items-center gap-2 opacity-50 hidden lg:flex font-mono",children:[t.jsx(St,{size:12}),"Sync: ",(new Date).getFullYear(),".",(new Date).getMonth()+1,".",(new Date).getDate()]}),t.jsx("span",{className:"text-primary-bright font-black",children:"SYNTHESIS_HUB_v2.1.0"})]})]})]})]}),Fm=()=>{const i=le(),[a,o]=e.useState(""),{scrollYProgress:c}=r(),l=s(c,[0,1],[0,-500]),u=[{icon:Et,title:"Automated Structure",desc:"Transform complex architecture blueprints into production-ready codebases with zero manual setup.",detail:"Supports nested layouts, module patterns, and boilerplate automation."},{icon:Tt,title:"GitHub Orchestration",desc:"Seamlessly provision public or private repositories with pre-configured CI/CD pipelines.",detail:"Automated workflow generation for GitHub Actions and security scanning."},{icon:Ft,title:"Dry-Run Validation",desc:"Predictive modeling of filesystem changes before a single byte is committed to your drive.",detail:"Visual diff previews and dependency conflict detection."},{icon:At,title:"Extensible Templates",desc:"Modular JSON-based system allowing you to build, share, and expand project archetypes.",detail:"Dynamic schema validation and template inheritance support."},{icon:It,title:"Cross-Platform Engine",desc:"High-performance synthesis powered by PowerShell 7, running natively on Windows, macOS, and Linux.",detail:"Consistent execution environment across development teams."},{icon:Mt,title:"Modern 3D UI",desc:"High-fidelity glass-morphism interface with real-time 3D visualization of your project core.",detail:"Immersive synthesis experience with pulsing telemetry data."}],h=[{name:"Fullstack Genesis",stack:"React • Node.js • PostgreSQL",category:"Web",color:"from-primary-bright to-primary-accent",icon:It},{name:"Mobile Flux",stack:"React Native • Expo • Firebase",category:"Mobile",color:"from-accent-gold to-accent-warm",icon:zt},{name:"Micro-Grid",stack:"Go • Kubernetes • gRPC",category:"System",color:"from-status-info to-primary-bright",icon:Kt},{name:"Neural-Node",stack:"Python • FastAPI • PyTorch",category:"AI",color:"from-primary-accent to-status-success",icon:_t},{name:"Frontend Kit",stack:"Vite • Tailwind • Framer",category:"Web",color:"from-accent-warm to-primary-bright",icon:xt},{name:"Backend Core",stack:"Rust • Axum • Prisma",category:"API",color:"from-status-success to-primary-accent",icon:vt}],d=[{title:"CHOOSE_BLUEPRINT",desc:"Select from our library of battle-tested architectures or upload your custom JSON matrix.",icon:At},{title:"CONFIGURE_MATRIX",desc:"Define your project identity, repository visibility, and cloud orchestration parameters.",icon:Et},{title:"SYNTHESIZE_REALITY",desc:"Execute the high-fidelity engine and watch your vision transform into production code.",icon:Kt}];return t.jsxs("div",{className:"bg-background-deep text-text-primary selection:bg-primary-accent/30 selection:text-white overflow-x-hidden relative",children:[t.jsxs(n.div,{style:{y:l},className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:[t.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary-bright/10 rounded-full blur-[180px] animate-pulse"}),t.jsx("div",{className:"absolute bottom-[-10%] right-[-20%] w-[70%] h-[70%] bg-primary-accent/5 rounded-full blur-[180px] animate-pulse",style:{animationDelay:"3s"}}),t.jsx("div",{className:"absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-accent-gold/5 rounded-full blur-[150px] animate-pulse",style:{animationDelay:"1.5s"}})]}),t.jsx("div",{className:"fixed inset-0 pointer-events-none z-[1] opacity-30",children:[...Array(20)].map((e,r)=>t.jsx(n.div,{initial:{opacity:0,scale:0},animate:{opacity:[0,1,0],scale:[0,1,0],y:[0,-100],x:100*Math.random()-50},transition:{duration:5*Math.random()+5,repeat:1/0,delay:5*Math.random()},className:"absolute w-1 h-1 bg-primary-bright rounded-full",style:{left:100*Math.random()+"%",top:100*Math.random()+"%"}},r))}),t.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-[100] h-20 px-6 md:px-12 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-background-deep/40",children:[t.jsxs("div",{className:"flex items-center gap-4 group cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[t.jsx(Qt,{}),t.jsx("span",{className:"text-xl font-black tracking-tighter group-hover:text-primary-bright transition-colors",children:"ENUM_SYNTHESIS"})]}),t.jsxs("div",{className:"hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary",children:[t.jsx("a",{href:"#features",className:"hover:text-white transition-colors",children:"Features"}),t.jsx("a",{href:"#templates",className:"hover:text-white transition-colors",children:"Templates"}),t.jsx("a",{href:"#workflow",className:"hover:text-white transition-colors",children:"Workflow"}),t.jsx("button",{onClick:()=>i("/signin"),className:"px-8 py-2.5 rounded-full glass border border-primary-bright/20 text-primary-bright hover:bg-primary-bright/10 hover:border-primary-bright/40 transition-all active:scale-95",children:"Sign_In"})]}),t.jsx("div",{className:"md:hidden",children:t.jsx("button",{className:"p-2 glass rounded-lg text-primary-bright",children:t.jsx(At,{size:20})})})]}),t.jsxs("header",{className:"relative z-10 pt-48 pb-32 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto min-h-screen justify-center",children:[t.jsxs(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary-accent/20 text-[10px] font-black uppercase tracking-[0.4em] text-primary-accent mb-10 shadow-lg shadow-primary-accent/5",children:[t.jsx($t,{size:12,className:"animate-pulse"})," THE FUTURE OF SCAFFOLDING IS HERE"]}),t.jsxs(n.h1,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.1,duration:.8},className:"text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent",children:["SYNTHESIZE YOUR ",t.jsx("br",{})," VISION INTO REALITY."]}),t.jsx(n.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"text-lg md:text-2xl text-text-tertiary max-w-3xl mb-14 font-medium leading-relaxed px-4",children:"A high-fidelity engine that transforms project blueprints into production-ready architectures in seconds. Stop scaffolding, start synthesizing."}),t.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"w-full max-w-xl p-2 glass rounded-[2.5rem] border border-white/10 flex flex-col sm:flex-row gap-2 shadow-2xl shadow-black/50",children:t.jsxs("form",{onSubmit:e=>{e.preventDefault(),i("/signup")},className:"flex flex-col sm:flex-row gap-2 w-full",children:[t.jsxs("div",{className:"flex-1 relative group",children:[t.jsx(Bt,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"email",placeholder:"Enter your transmission address...",required:!0,value:a,onChange:e=>o(e.target.value),className:"w-full bg-white/5 border border-transparent rounded-[1.8rem] pl-14 pr-6 py-5 focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20 text-sm"})]}),t.jsxs("button",{type:"submit",className:"px-10 py-5 bg-primary-bright text-background-deep font-black rounded-[1.8rem] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary-bright/30 group/btn",children:["START_SYNTHESIS ",t.jsx(yt,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})]})}),t.jsx("div",{className:"absolute top-[20%] left-0 w-32 h-32 glass rounded-full blur-2xl opacity-20 animate-pulse pointer-events-none"}),t.jsx("div",{className:"absolute bottom-0 right-0 w-48 h-48 glass rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none",style:{animationDelay:"1s"}})]}),t.jsx("section",{className:"relative z-10 px-6 md:px-12 pb-32 max-w-7xl mx-auto",children:t.jsxs(n.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"w-full aspect-video glass-elevated rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-2xl",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-primary-bright/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"}),t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsxs("div",{className:"flex flex-col items-center gap-6 opacity-20 group-hover:opacity-40 transition-opacity duration-700",children:[t.jsxs("div",{className:"relative",children:[t.jsx(Bt,{size:80,className:"text-primary-bright"}),t.jsx(n.div,{animate:{rotate:360},transition:{duration:10,repeat:1/0,ease:"linear"},className:"absolute -inset-4 border border-dashed border-primary-bright/50 rounded-full"})]}),t.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.6em] text-primary-bright",children:"System_Matrix_Active"})]})}),t.jsxs("div",{className:"absolute top-10 left-10 space-y-4",children:[t.jsx("div",{className:"w-64 h-3 glass rounded-full opacity-40"}),t.jsx("div",{className:"w-48 h-3 glass rounded-full opacity-20"}),t.jsx("div",{className:"w-56 h-3 glass rounded-full opacity-30"})]}),t.jsx("div",{className:"absolute bottom-10 right-10",children:t.jsx("div",{className:"w-32 h-32 rounded-full border-2 border-primary-accent/20 flex items-center justify-center",children:t.jsx("div",{className:"w-24 h-24 rounded-full border-2 border-primary-bright/40 animate-ping"})})})]})}),t.jsxs("section",{id:"features",className:"py-40 px-6 md:px-12 max-w-7xl mx-auto relative z-10",children:[t.jsxs("div",{className:"text-center mb-24",children:[t.jsx("h2",{className:"text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase",children:"Engine_Capabilities"}),t.jsx("div",{className:"h-1 w-24 bg-primary-bright mx-auto rounded-full"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map((e,r)=>t.jsxs(n.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},whileHover:{y:-10},className:"p-10 glass rounded-[2.5rem] border border-white/5 hover:border-primary-bright/20 transition-all group relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-primary-bright/5 rounded-full blur-3xl group-hover:bg-primary-bright/10 transition-colors"}),t.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary-bright/10 group-hover:text-primary-bright transition-all shadow-inner",children:t.jsx(e.icon,{size:32})}),t.jsx("h3",{className:"text-2xl font-bold mb-5 tracking-tight group-hover:text-primary-bright transition-colors",children:e.title}),t.jsx("p",{className:"text-text-tertiary leading-relaxed text-sm mb-6 font-medium",children:e.desc}),t.jsxs("div",{className:"pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0",children:[t.jsx(Nt,{size:14})," ",e.detail]})]},r))})]}),t.jsx("section",{id:"templates",className:"py-40 bg-white/[0.01] border-y border-white/5 relative z-10",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[t.jsxs("div",{className:"flex flex-col md:flex-row items-end justify-between mb-24 gap-10",children:[t.jsxs("div",{className:"max-w-2xl",children:[t.jsx("h2",{className:"text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-none",children:"THE_SYNTHESIS_MATRIX"}),t.jsx("p",{className:"text-xl text-text-tertiary font-medium",children:"Select from our library of high-fidelity architectures or define your own custom project lineage."})]}),t.jsxs("button",{onClick:()=>{i("/signup")},className:"flex items-center gap-4 text-primary-bright font-black uppercase tracking-[0.3em] text-[10px] hover:gap-6 transition-all group px-8 py-4 glass rounded-2xl border border-primary-bright/10",children:["EXPLORE_ALL_TEMPLATES ",t.jsx(yt,{size:18,className:"group-hover:translate-x-1 transition-transform"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map((e,r)=>t.jsxs(n.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.05*r},className:"group relative",children:[t.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity rounded-[2.5rem]`}),t.jsxs("div",{className:"relative glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col h-full hover:border-white/10 transition-all cursor-pointer",children:[t.jsxs("div",{className:"flex justify-between items-start mb-16",children:[t.jsx("div",{className:`w-14 h-14 rounded-2xl bg-gradient-to-br ${e.color} flex items-center justify-center text-background-deep shadow-xl shadow-black/20 group-hover:scale-110 transition-transform`,children:t.jsx(e.icon,{size:28})}),t.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary bg-white/5 px-3 py-1 rounded-full",children:e.category})]}),t.jsx("h4",{className:"text-2xl font-black mb-3 tracking-tight group-hover:text-primary-bright transition-colors",children:e.name}),t.jsx("p",{className:"text-xs text-text-tertiary font-mono mb-8 opacity-60",children:e.stack}),t.jsxs("div",{className:"mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-bright opacity-0 group-hover:opacity-100 transition-all",children:["LOAD_BLUEPRINT ",t.jsx(Ut,{size:12})]})]})]},r))})]})}),t.jsxs("section",{id:"workflow",className:"py-40 px-6 md:px-12 max-w-7xl mx-auto relative z-10",children:[t.jsxs("div",{className:"text-center mb-24",children:[t.jsx("h2",{className:"text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase",children:"OPERATIONAL_WORKFLOW"}),t.jsx("p",{className:"text-text-tertiary font-medium uppercase tracking-[0.2em] text-sm",children:"Three phases to production readiness"})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12 relative",children:[t.jsx("div",{className:"hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"}),d.map((e,r)=>t.jsxs(n.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2*r},className:"relative z-10 flex flex-col items-center text-center p-8",children:[t.jsxs("div",{className:"w-24 h-24 rounded-[2rem] glass border border-white/10 flex items-center justify-center mb-10 relative group shadow-2xl",children:[t.jsx("div",{className:"absolute inset-0 bg-primary-bright/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform duration-500"}),t.jsx(e.icon,{size:40,className:"text-primary-bright group-hover:scale-110 transition-transform"}),t.jsxs("div",{className:"absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background-deep border border-primary-bright/40 flex items-center justify-center text-[10px] font-black text-primary-bright shadow-lg",children:["0",r+1]})]}),t.jsx("h3",{className:"text-xl font-black mb-4 tracking-[0.2em]",children:e.title}),t.jsx("p",{className:"text-text-tertiary text-sm leading-relaxed max-w-xs font-medium",children:e.desc})]},r))]})]}),t.jsx("section",{className:"py-20 px-6 md:px-12 max-w-5xl mx-auto relative z-10",children:t.jsxs(n.div,{whileHover:{scale:1.01},className:"glass-elevated p-12 md:p-16 rounded-[4rem] border border-primary-bright/20 bg-primary-bright/[0.03] relative overflow-hidden group shadow-2xl shadow-primary-bright/5",children:[t.jsx("div",{className:"absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity",children:t.jsx($t,{size:120,className:"text-primary-bright"})}),t.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left",children:[t.jsx("div",{className:"w-24 h-24 rounded-3xl bg-primary-bright/10 border border-primary-bright/30 flex items-center justify-center text-primary-bright shrink-0 shadow-lg shadow-primary-bright/20",children:t.jsx($t,{size:48,className:"animate-pulse"})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bright text-background-deep text-[8px] font-black uppercase tracking-[0.2em] mb-4",children:"Coming_Soon: Neural_Assistant"}),t.jsxs("h3",{className:"text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight uppercase",children:["AI-ORCHESTRATED ",t.jsx("br",{})," ARCHITECTURE"]}),t.jsx("p",{className:"text-text-tertiary text-lg font-medium mb-8 max-w-xl",children:"Let our upcoming AI Orchestrator guide your synthesis process, recommending optimizations and generating custom templates on the fly."}),t.jsxs("button",{className:"flex items-center gap-2 text-primary-bright font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all group",children:["LEARN_ABOUT_NEURAL_CORE ",t.jsx(yt,{size:16})]})]})]})]})}),t.jsxs("footer",{className:"relative z-10 pt-40 pb-20 px-6 md:px-12 border-t border-white/5 bg-black/20 mt-20",children:[t.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32",children:[t.jsxs("div",{className:"col-span-1 lg:col-span-1",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[t.jsx(Qt,{}),t.jsx("span",{className:"text-2xl font-black tracking-tighter",children:"ENUM_SYNTHESIS"})]}),t.jsx("p",{className:"text-text-tertiary text-sm font-medium leading-relaxed mb-10 max-w-xs",children:"Revolutionizing project orchestration with high-fidelity synthesis. Built for the modern engineer by Enum Technologies."}),t.jsx("div",{className:"flex gap-4",children:[Ht,Lt,Tt].map((e,n)=>t.jsx("div",{className:"w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center hover:text-primary-bright hover:border-primary-bright/20 cursor-pointer transition-all active:scale-90 group shadow-lg",children:t.jsx(e,{size:20,className:"group-hover:scale-110 transition-transform"})},n))})]}),t.jsxs("div",{children:[t.jsxs("h5",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-[1px] bg-primary-bright"})," Ecosystem"]}),t.jsxs("ul",{className:"space-y-5 text-sm font-bold text-text-tertiary uppercase tracking-widest",children:[t.jsx("li",{children:t.jsxs("a",{href:"#",className:"hover:text-primary-bright transition-colors flex items-center justify-between group",children:["Documentation ",t.jsx(bt,{size:14,className:"opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#",className:"hover:text-primary-bright transition-colors flex items-center justify-between group",children:["Template_Gallery ",t.jsx(bt,{size:14,className:"opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#",className:"hover:text-primary-bright transition-colors flex items-center justify-between group",children:["Synthesis_Core ",t.jsx(bt,{size:14,className:"opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#",className:"hover:text-primary-bright transition-colors flex items-center justify-between group",children:["Community_Blueprints ",t.jsx(bt,{size:14,className:"opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]})})]})]}),t.jsxs("div",{children:[t.jsxs("h5",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-[1px] bg-primary-bright"})," Security"]}),t.jsxs("ul",{className:"space-y-5 text-sm font-bold text-text-tertiary uppercase tracking-widest",children:[t.jsx("li",{children:t.jsx("a",{href:"#",className:"hover:text-primary-bright transition-colors",children:"Privacy_Protocol"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"hover:text-primary-bright transition-colors",children:"Terms_of_Service"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"hover:text-primary-bright transition-colors",children:"Vulnerability_Vault"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"hover:text-primary-bright transition-colors",children:"System_Status"})})]})]}),t.jsxs("div",{children:[t.jsxs("h5",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-[1px] bg-primary-bright"})," Transmission"]}),t.jsx("p",{className:"text-xs text-text-tertiary font-medium mb-6 uppercase tracking-wider",children:"Join the neural network for updates."}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"text",placeholder:"EMAIL",className:"bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-black focus:outline-none focus:border-primary-bright/40 flex-1 uppercase tracking-widest"}),t.jsx("button",{className:"w-12 h-12 rounded-xl bg-primary-bright text-background-deep flex items-center justify-center hover:scale-105 active:scale-95 transition-all",children:t.jsx(yt,{size:20})})]})]})]}),t.jsxs("div",{className:"max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6",children:[t.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-white/20",children:"Powered By Enum Technologies // v2.1.0-STABLE"}),t.jsx("p",{className:"text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]",children:"© 2026 Enum Technologies. All rights reserved."})]})]})]})};function zm(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=zm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function $m(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=zm(e))&&(r&&(r+=" "),r+=t);return r}const Bm=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),qm="-",Hm=[],Gm=e=>{const t=Jm(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]"))return Wm(e);const n=e.split(qm),r=""===n[0]&&n.length>1?1:0;return Km(n,r,t)},getConflictingClassGroupIds:(e,t)=>{if(t){const t=r[e],s=n[e];return t?s?((e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n})(s,t):t:s||Hm}return n[e]||Hm}}},Km=(e,t,n)=>{if(0===e.length-t)return n.classGroupId;const r=e[t],s=n.nextPart.get(r);if(s){const n=Km(e,t+1,s);if(n)return n}const i=n.validators;if(null===i)return;const a=0===t?e.join(qm):e.slice(t).join(qm),o=i.length;for(let c=0;c<o;c++){const e=i[c];if(e.validator(a))return e.classGroupId}},Wm=e=>-1===e.slice(1,-1).indexOf(":")?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?"arbitrary.."+r:void 0})(),Jm=e=>{const{theme:t,classGroups:n}=e;return Qm(n,t)},Qm=(e,t)=>{const n=Bm();for(const r in e){const s=e[r];Ym(s,n,r,t)}return n},Ym=(e,t,n,r)=>{const s=e.length;for(let i=0;i<s;i++){const s=e[i];Xm(s,t,n,r)}},Xm=(e,t,n,r)=>{"string"!=typeof e?"function"!=typeof e?tg(e,t,n,r):eg(e,t,n,r):Zm(e,t,n)},Zm=(e,t,n)=>{(""===e?t:ng(t,e)).classGroupId=n},eg=(e,t,n,r)=>{rg(e)?Ym(e(r),t,n,r):(null===t.validators&&(t.validators=[]),t.validators.push(((e,t)=>({classGroupId:e,validator:t}))(n,e)))},tg=(e,t,n,r)=>{const s=Object.entries(e),i=s.length;for(let a=0;a<i;a++){const[e,i]=s[a];Ym(i,ng(t,e),n,r)}},ng=(e,t)=>{let n=e;const r=t.split(qm),s=r.length;for(let i=0;i<s;i++){const e=r[i];let t=n.nextPart.get(e);t||(t=Bm(),n.nextPart.set(e,t)),n=t}return n},rg=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,sg=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(s,i)=>{n[s]=i,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];return void 0!==t?t:void 0!==(t=r[e])?(s(e,t),t):void 0},set(e,t){e in n?n[e]=t:s(e,t)}}},ig=[],ag=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),og=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=e=>{const t=[];let n,r=0,s=0,i=0;const a=e.length;for(let u=0;u<a;u++){const a=e[u];if(0===r&&0===s){if(":"===a){t.push(e.slice(i,u)),i=u+1;continue}if("/"===a){n=u;continue}}"["===a?r++:"]"===a?r--:"("===a?s++:")"===a&&s--}const o=0===t.length?e:e.slice(i);let c=o,l=!1;o.endsWith("!")?(c=o.slice(0,-1),l=!0):o.startsWith("!")&&(c=o.slice(1),l=!0);return ag(t,l,c,n&&n>i?n-i:void 0)};if(t){const e=t+":",n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):ag(ig,!1,t,void 0,!0)}if(n){const e=r;r=t=>n({className:t,parseClassName:e})}return r},cg=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{const n=[];let r=[];for(let s=0;s<e.length;s++){const i=e[s],a="["===i[0],o=t.has(i);a||o?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(i)):r.push(i)}return r.length>0&&(r.sort(),n.push(...r)),n}},lg=/\s+/,ug=e=>{if("string"==typeof e)return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=ug(e[r]))&&(n&&(n+=" "),n+=t);return n},hg=[],dg=e=>{const t=t=>t[e]||hg;return t.isThemeGetter=!0,t},pg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,fg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,mg=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,gg=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yg=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vg=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,bg=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wg=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xg=e=>mg.test(e),Eg=e=>!!e&&!Number.isNaN(Number(e)),_g=e=>!!e&&Number.isInteger(Number(e)),kg=e=>e.endsWith("%")&&Eg(e.slice(0,-1)),Tg=e=>gg.test(e),Ig=()=>!0,Sg=e=>yg.test(e)&&!vg.test(e),Cg=()=>!1,Ng=e=>bg.test(e),Ag=e=>wg.test(e),Rg=e=>!Pg(e)&&!zg(e),Dg=e=>Jg(e,Zg,Cg),Pg=e=>pg.test(e),Og=e=>Jg(e,ey,Sg),Lg=e=>Jg(e,ty,Eg),jg=e=>Jg(e,ry,Ig),Mg=e=>Jg(e,ny,Cg),Ug=e=>Jg(e,Yg,Cg),Vg=e=>Jg(e,Xg,Ag),Fg=e=>Jg(e,sy,Ng),zg=e=>fg.test(e),$g=e=>Qg(e,ey),Bg=e=>Qg(e,ny),qg=e=>Qg(e,Yg),Hg=e=>Qg(e,Zg),Gg=e=>Qg(e,Xg),Kg=e=>Qg(e,sy,!0),Wg=e=>Qg(e,ry,!0),Jg=(e,t,n)=>{const r=pg.exec(e);return!!r&&(r[1]?t(r[1]):n(r[2]))},Qg=(e,t,n=!1)=>{const r=fg.exec(e);return!!r&&(r[1]?t(r[1]):n)},Yg=e=>"position"===e||"percentage"===e,Xg=e=>"image"===e||"url"===e,Zg=e=>"length"===e||"size"===e||"bg-size"===e,ey=e=>"length"===e,ty=e=>"number"===e,ny=e=>"family-name"===e,ry=e=>"number"===e||"weight"===e,sy=e=>"shadow"===e,iy=((e,...t)=>{let n,r,s,i;const a=e=>{const t=r(e);if(t)return t;const i=((e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=t,a=[],o=e.trim().split(lg);let c="";for(let l=o.length-1;l>=0;l-=1){const e=o[l],{isExternal:t,modifiers:u,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:p}=n(e);if(t){c=e+(c.length>0?" "+c:c);continue}let f=!!p,m=r(f?d.substring(0,p):d);if(!m){if(!f){c=e+(c.length>0?" "+c:c);continue}if(m=r(d),!m){c=e+(c.length>0?" "+c:c);continue}f=!1}const g=0===u.length?"":1===u.length?u[0]:i(u).join(":"),y=h?g+"!":g,v=y+m;if(a.indexOf(v)>-1)continue;a.push(v);const b=s(m,f);for(let n=0;n<b.length;++n){const e=b[n];a.push(y+e)}c=e+(c.length>0?" "+c:c)}return c})(e,n);return s(e,i),i};return i=o=>{const c=t.reduce((e,t)=>t(e),e());return n=(e=>({cache:sg(e.cacheSize),parseClassName:og(e),sortModifiers:cg(e),...Gm(e)}))(c),r=n.cache.get,s=n.cache.set,i=a,a(o)},(...e)=>i(((...e)=>{let t,n,r=0,s="";for(;r<e.length;)(t=e[r++])&&(n=ug(t))&&(s&&(s+=" "),s+=n);return s})(...e))})(()=>{const e=dg("color"),t=dg("font"),n=dg("text"),r=dg("font-weight"),s=dg("tracking"),i=dg("leading"),a=dg("breakpoint"),o=dg("container"),c=dg("spacing"),l=dg("radius"),u=dg("shadow"),h=dg("inset-shadow"),d=dg("text-shadow"),p=dg("drop-shadow"),f=dg("blur"),m=dg("perspective"),g=dg("aspect"),y=dg("ease"),v=dg("animate"),b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom",zg,Pg],w=()=>[zg,Pg,c],x=()=>[xg,"full","auto",...w()],E=()=>[_g,"none","subgrid",zg,Pg],_=()=>["auto",{span:["full",_g,zg,Pg]},_g,zg,Pg],k=()=>[_g,"auto",zg,Pg],T=()=>["auto","min","max","fr",zg,Pg],I=()=>["auto",...w()],S=()=>[xg,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...w()],C=()=>[xg,"screen","full","dvw","lvw","svw","min","max","fit",...w()],N=()=>[xg,"screen","full","lh","dvh","lvh","svh","min","max","fit",...w()],A=()=>[e,zg,Pg],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom",qg,Ug,{position:[zg,Pg]}],D=()=>["auto","cover","contain",Hg,Dg,{size:[zg,Pg]}],P=()=>[kg,$g,Og],O=()=>["","none","full",l,zg,Pg],L=()=>["",Eg,$g,Og],j=()=>[Eg,kg,qg,Ug],M=()=>["","none",f,zg,Pg],U=()=>["none",Eg,zg,Pg],V=()=>["none",Eg,zg,Pg],F=()=>[Eg,zg,Pg],z=()=>[xg,"full",...w()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Tg],breakpoint:[Tg],color:[Ig],container:[Tg],"drop-shadow":[Tg],ease:["in","out","in-out"],font:[Rg],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Tg],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Tg],shadow:[Tg],spacing:["px",Eg],text:[Tg],"text-shadow":[Tg],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",xg,Pg,zg,g]}],container:["container"],columns:[{columns:[Eg,Pg,zg,o]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:b()}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:x()}],"inset-x":[{"inset-x":x()}],"inset-y":[{"inset-y":x()}],start:[{"inset-s":x(),start:x()}],end:[{"inset-e":x(),end:x()}],"inset-bs":[{"inset-bs":x()}],"inset-be":[{"inset-be":x()}],top:[{top:x()}],right:[{right:x()}],bottom:[{bottom:x()}],left:[{left:x()}],visibility:["visible","invisible","collapse"],z:[{z:[_g,"auto",zg,Pg]}],basis:[{basis:[xg,"full","auto",o,...w()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Eg,xg,"auto","initial","none",Pg]}],grow:[{grow:["",Eg,zg,Pg]}],shrink:[{shrink:["",Eg,zg,Pg]}],order:[{order:[_g,"first","last","none",zg,Pg]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:_()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:_()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":T()}],"auto-rows":[{"auto-rows":T()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe","normal"]}],"justify-items":[{"justify-items":["start","end","center","stretch","center-safe","end-safe","normal"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],"align-items":[{items:["start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],"align-self":[{self:["auto","start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],"place-items":[{"place-items":["start","end","center","stretch","center-safe","end-safe","baseline"]}],"place-self":[{"place-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:I()}],mx:[{mx:I()}],my:[{my:I()}],ms:[{ms:I()}],me:[{me:I()}],mbs:[{mbs:I()}],mbe:[{mbe:I()}],mt:[{mt:I()}],mr:[{mr:I()}],mb:[{mb:I()}],ml:[{ml:I()}],"space-x":[{"space-x":w()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":w()}],"space-y-reverse":["space-y-reverse"],size:[{size:S()}],"inline-size":[{inline:["auto",...C()]}],"min-inline-size":[{"min-inline":["auto",...C()]}],"max-inline-size":[{"max-inline":["none",...C()]}],"block-size":[{block:["auto",...N()]}],"min-block-size":[{"min-block":["auto",...N()]}],"max-block-size":[{"max-block":["none",...N()]}],w:[{w:[o,"screen",...S()]}],"min-w":[{"min-w":[o,"screen","none",...S()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...S()]}],h:[{h:["screen","lh",...S()]}],"min-h":[{"min-h":["screen","lh","none",...S()]}],"max-h":[{"max-h":["screen","lh",...S()]}],"font-size":[{text:["base",n,$g,Og]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Wg,jg]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",kg,Pg]}],"font-family":[{font:[Bg,Mg,t]}],"font-features":[{"font-features":[Pg]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,zg,Pg]}],"line-clamp":[{"line-clamp":[Eg,"none",zg,Lg]}],leading:[{leading:[i,...w()]}],"list-image":[{"list-image":["none",zg,Pg]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",zg,Pg]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","wavy"]}],"text-decoration-thickness":[{decoration:[Eg,"from-font","auto",zg,Og]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[Eg,"auto",zg,Pg]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",zg,Pg]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",zg,Pg]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:R()}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:D()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},_g,zg,Pg],radial:["",zg,Pg],conic:[_g,zg,Pg]},Gg,Vg]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:P()}],"gradient-via-pos":[{via:P()}],"gradient-to-pos":[{to:P()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:O()}],"rounded-s":[{"rounded-s":O()}],"rounded-e":[{"rounded-e":O()}],"rounded-t":[{"rounded-t":O()}],"rounded-r":[{"rounded-r":O()}],"rounded-b":[{"rounded-b":O()}],"rounded-l":[{"rounded-l":O()}],"rounded-ss":[{"rounded-ss":O()}],"rounded-se":[{"rounded-se":O()}],"rounded-ee":[{"rounded-ee":O()}],"rounded-es":[{"rounded-es":O()}],"rounded-tl":[{"rounded-tl":O()}],"rounded-tr":[{"rounded-tr":O()}],"rounded-br":[{"rounded-br":O()}],"rounded-bl":[{"rounded-bl":O()}],"border-w":[{border:L()}],"border-w-x":[{"border-x":L()}],"border-w-y":[{"border-y":L()}],"border-w-s":[{"border-s":L()}],"border-w-e":[{"border-e":L()}],"border-w-bs":[{"border-bs":L()}],"border-w-be":[{"border-be":L()}],"border-w-t":[{"border-t":L()}],"border-w-r":[{"border-r":L()}],"border-w-b":[{"border-b":L()}],"border-w-l":[{"border-l":L()}],"divide-x":[{"divide-x":L()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":L()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:["solid","dashed","dotted","double","hidden","none"]}],"divide-style":[{divide:["solid","dashed","dotted","double","hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-bs":[{"border-bs":A()}],"border-color-be":[{"border-be":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:["solid","dashed","dotted","double","none","hidden"]}],"outline-offset":[{"outline-offset":[Eg,zg,Pg]}],"outline-w":[{outline:["",Eg,$g,Og]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",u,Kg,Fg]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",h,Kg,Fg]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[Eg,Og]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":L()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",d,Kg,Fg]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[Eg,zg,Pg]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Eg]}],"mask-image-linear-from-pos":[{"mask-linear-from":j()}],"mask-image-linear-to-pos":[{"mask-linear-to":j()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":j()}],"mask-image-t-to-pos":[{"mask-t-to":j()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":j()}],"mask-image-r-to-pos":[{"mask-r-to":j()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":j()}],"mask-image-b-to-pos":[{"mask-b-to":j()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":j()}],"mask-image-l-to-pos":[{"mask-l-to":j()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":j()}],"mask-image-x-to-pos":[{"mask-x-to":j()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":j()}],"mask-image-y-to-pos":[{"mask-y-to":j()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[zg,Pg]}],"mask-image-radial-from-pos":[{"mask-radial-from":j()}],"mask-image-radial-to-pos":[{"mask-radial-to":j()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"]}],"mask-image-conic-pos":[{"mask-conic":[Eg]}],"mask-image-conic-from-pos":[{"mask-conic-from":j()}],"mask-image-conic-to-pos":[{"mask-conic-to":j()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:R()}],"mask-repeat":[{mask:["no-repeat",{repeat:["","x","y","space","round"]}]}],"mask-size":[{mask:D()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",zg,Pg]}],filter:[{filter:["","none",zg,Pg]}],blur:[{blur:M()}],brightness:[{brightness:[Eg,zg,Pg]}],contrast:[{contrast:[Eg,zg,Pg]}],"drop-shadow":[{"drop-shadow":["","none",p,Kg,Fg]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",Eg,zg,Pg]}],"hue-rotate":[{"hue-rotate":[Eg,zg,Pg]}],invert:[{invert:["",Eg,zg,Pg]}],saturate:[{saturate:[Eg,zg,Pg]}],sepia:[{sepia:["",Eg,zg,Pg]}],"backdrop-filter":[{"backdrop-filter":["","none",zg,Pg]}],"backdrop-blur":[{"backdrop-blur":M()}],"backdrop-brightness":[{"backdrop-brightness":[Eg,zg,Pg]}],"backdrop-contrast":[{"backdrop-contrast":[Eg,zg,Pg]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Eg,zg,Pg]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Eg,zg,Pg]}],"backdrop-invert":[{"backdrop-invert":["",Eg,zg,Pg]}],"backdrop-opacity":[{"backdrop-opacity":[Eg,zg,Pg]}],"backdrop-saturate":[{"backdrop-saturate":[Eg,zg,Pg]}],"backdrop-sepia":[{"backdrop-sepia":["",Eg,zg,Pg]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",zg,Pg]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Eg,"initial",zg,Pg]}],ease:[{ease:["linear","initial",y,zg,Pg]}],delay:[{delay:[Eg,zg,Pg]}],animate:[{animate:["none",v,zg,Pg]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,zg,Pg]}],"perspective-origin":[{"perspective-origin":b()}],rotate:[{rotate:U()}],"rotate-x":[{"rotate-x":U()}],"rotate-y":[{"rotate-y":U()}],"rotate-z":[{"rotate-z":U()}],scale:[{scale:V()}],"scale-x":[{"scale-x":V()}],"scale-y":[{"scale-y":V()}],"scale-z":[{"scale-z":V()}],"scale-3d":["scale-3d"],skew:[{skew:F()}],"skew-x":[{"skew-x":F()}],"skew-y":[{"skew-y":F()}],transform:[{transform:[zg,Pg,"","none","gpu","cpu"]}],"transform-origin":[{origin:b()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:z()}],"translate-x":[{"translate-x":z()}],"translate-y":[{"translate-y":z()}],"translate-z":[{"translate-z":z()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",zg,Pg]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",zg,Pg]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[Eg,$g,Og,Lg]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function ay(...e){return iy($m(e))}const oy=({children:e,className:r,variant:s="primary",size:i="md",isLoading:a,...o})=>t.jsxs(n.button,{whileHover:{y:-2},className:ay("relative flex items-center justify-center gap-2 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group",{primary:"bg-gradient-to-r from-primary-bright to-primary-accent text-white shadow-lg shadow-primary-bright/20 hover:shadow-primary-bright/40",secondary:"bg-background-elevated border border-glass-border text-text-secondary hover:text-white hover:border-primary-accent",glass:"glass text-text-tertiary hover:text-white hover:border-primary-bright/50",ghost:"text-text-tertiary hover:text-white hover:bg-white/5"}[s],{sm:"px-4 py-2 text-[10px] uppercase tracking-widest",md:"px-6 py-3 text-sm",lg:"px-8 py-4 text-lg"}[i],r),role:"button","aria-busy":a,...o,children:[t.jsx("div",{className:"absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"}),a?t.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}):e]}),cy=()=>{const r=le(),{setAuthenticated:s,setUserProfile:i}=tn(),[a,o]=e.useState(""),[c,l]=e.useState(""),[u,h]=e.useState(null),[d,p]=e.useState(!1);return t.jsxs("div",{className:"min-h-screen bg-background-deep flex items-center justify-center p-6 relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-bright/10 rounded-full blur-[120px] animate-pulse"}),t.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-accent/5 rounded-full blur-[120px] animate-pulse"}),t.jsxs(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md z-10",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("div",{className:"inline-flex items-center justify-center p-4 glass rounded-[2rem] border border-primary-bright/20 mb-6",children:t.jsx(Qt,{})}),t.jsx("h1",{className:"text-4xl font-black tracking-tighter text-white uppercase mb-2",children:"Authorize_Access"}),t.jsx("p",{className:"text-text-tertiary text-xs font-black uppercase tracking-[0.3em]",children:"Neural Synthesis Core Login"})]}),t.jsxs("form",{onSubmit:async e=>{e.preventDefault(),h(null),p(!0);try{const e=await Lm(a,c);i(e),s(!0),r("/dashboard")}catch(t){h(t.message||"Failed to authorize synthesis transmission.")}finally{p(!1)}},className:"glass-elevated p-10 rounded-[3rem] border border-white/5 space-y-6",children:[u&&t.jsxs(n.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"p-4 rounded-2xl bg-status-error/10 border border-status-error/20 flex items-center gap-3 text-status-error text-xs font-bold uppercase tracking-tight",children:[t.jsx(wt,{size:16})," ",u]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2",children:"Transmission_Address"}),t.jsxs("div",{className:"relative group",children:[t.jsx(Ot,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"email",required:!0,value:a,onChange:e=>o(e.target.value),placeholder:"EMAIL@SYNTHESIS.IO",className:"w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex justify-between items-center ml-2",children:[t.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-text-tertiary",children:"Access_Cipher"}),t.jsx("a",{href:"#",className:"text-[10px] font-black uppercase tracking-widest text-primary-accent hover:text-primary-bright transition-colors",children:"Recover?"})]}),t.jsxs("div",{className:"relative group",children:[t.jsx(Dt,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"password",required:!0,value:c,onChange:e=>l(e.target.value),placeholder:"••••••••",className:"w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"})]})]}),t.jsxs(oy,{type:"submit",disabled:d,className:"w-full bg-primary-bright text-background-deep py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary-bright/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3",children:[d?"Authorizing...":"Initialize_Login"," ",t.jsx(yt,{size:20})]}),t.jsxs("div",{className:"relative py-4",children:[t.jsx("div",{className:"absolute inset-0 flex items-center",children:t.jsx("div",{className:"w-full border-t border-white/5"})}),t.jsx("div",{className:"relative flex justify-center text-[10px] font-black uppercase tracking-widest",children:t.jsx("span",{className:"bg-background-surface px-4 text-text-tertiary",children:"Or_Sync_With"})})]}),t.jsxs(oy,{variant:"glass",className:"w-full border-white/10 rounded-2xl py-4 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs",children:[t.jsx(Tt,{size:18})," GitHub_Auth"]})]}),t.jsxs("p",{className:"mt-8 text-center text-[10px] font-black uppercase tracking-widest text-text-tertiary",children:["New to the Matrix? ",t.jsx(Ye,{to:"/signup",className:"text-primary-bright hover:underline",children:"Establish_Identity"})]})]})]})},ly=()=>{const r=le(),{setAuthenticated:s,setUserProfile:i}=tn(),[a,o]=e.useState(""),[c,l]=e.useState(""),[u,h]=e.useState(""),[d,p]=e.useState(null),[f,m]=e.useState(!1);return t.jsxs("div",{className:"min-h-screen bg-background-deep flex items-center justify-center p-6 relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-bright/10 rounded-full blur-[120px] animate-pulse"}),t.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-accent/5 rounded-full blur-[120px] animate-pulse"}),t.jsxs(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md z-10",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("div",{className:"inline-flex items-center justify-center p-4 glass rounded-[2rem] border border-primary-bright/20 mb-6",children:t.jsx(Qt,{})}),t.jsx("h1",{className:"text-4xl font-black tracking-tighter text-white uppercase mb-2",children:"Establish_Identity"}),t.jsx("p",{className:"text-text-tertiary text-xs font-black uppercase tracking-[0.3em]",children:"Neural Synthesis Registration"})]}),t.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),p(null),c===u){m(!0);try{const e=await Om(a,c);i(e),s(!0),r("/dashboard")}catch(t){p(t.message||"Failed to establish synthesis identity.")}finally{m(!1)}}else p("Access ciphers do not match.")},className:"glass-elevated p-10 rounded-[3rem] border border-white/5 space-y-6",children:[d&&t.jsxs(n.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"p-4 rounded-2xl bg-status-error/10 border border-status-error/20 flex items-center gap-3 text-status-error text-xs font-bold uppercase tracking-tight",children:[t.jsx(wt,{size:16})," ",d]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2",children:"Transmission_Address"}),t.jsxs("div",{className:"relative group",children:[t.jsx(Ot,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"email",required:!0,value:a,onChange:e=>o(e.target.value),placeholder:"EMAIL@SYNTHESIS.IO",className:"w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2",children:"Initial_Access_Cipher"}),t.jsxs("div",{className:"relative group",children:[t.jsx(Dt,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"password",required:!0,value:c,onChange:e=>l(e.target.value),placeholder:"••••••••",className:"w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2",children:"Confirm_Access_Cipher"}),t.jsxs("div",{className:"relative group",children:[t.jsx(Ft,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary-bright transition-colors",size:18}),t.jsx("input",{type:"password",required:!0,value:u,onChange:e=>h(e.target.value),placeholder:"••••••••",className:"w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-bright/50 transition-all text-sm font-mono placeholder:text-white/10"})]})]}),t.jsxs(oy,{type:"submit",disabled:f,className:"w-full bg-primary-bright text-background-deep py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary-bright/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3",children:[f?"Processing...":"Register_Identity"," ",t.jsx(yt,{size:20})]})]}),t.jsxs("p",{className:"mt-8 text-center text-[10px] font-black uppercase tracking-widest text-text-tertiary",children:["Identity already exists? ",t.jsx(Ye,{to:"/signin",className:"text-primary-bright hover:underline",children:"Authorize_Login"})]})]})]})},uy=()=>{const e=le();return t.jsxs("div",{className:"min-h-screen bg-background-deep flex flex-col items-center justify-center p-6 text-center",children:[t.jsx(n.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},className:"w-24 h-24 rounded-[2rem] bg-status-error/10 border border-status-error/20 flex items-center justify-center text-status-error mb-8 shadow-lg shadow-status-error/5",children:t.jsx(qt,{size:48})}),t.jsx("h1",{className:"text-6xl font-black tracking-tighter text-white mb-4 uppercase",children:"Error_404"}),t.jsx("p",{className:"text-text-tertiary text-xl font-medium max-w-md mb-12 uppercase tracking-[0.2em]",children:"Synthesis Failed: The requested path does not exist in the matrix."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(oy,{variant:"glass",className:"rounded-2xl px-8",onClick:()=>e(-1),children:[t.jsx(gt,{size:20})," Back_Protocol"]}),t.jsxs(oy,{className:"bg-primary-bright text-background-deep rounded-2xl px-8",onClick:()=>e("/"),children:[t.jsx(Ct,{size:20})," Home_Base"]})]}),t.jsx("div",{className:"mt-24 text-[8px] font-mono text-white/5 uppercase tracking-[1em]",children:"ENUM_SYNTHESIS_ENGINE // PATH_NOT_FOUND"})]})},hy=()=>{const{projectName:e,destinationPath:t,selectedTemplate:n,gitEnabled:r,dockerEnabled:s,ciEnabled:i,isDryRun:a,setIsGenerating:o,addLog:c}=tn();return{generateProject:async()=>{if(!e.match(/^[a-zA-Z0-9-_]+$/))return c("Error: Project name contains invalid characters."),!1;o(!0),c(`Starting ${a?"DRY RUN":"SYNTHESIS"} for ${e}...`);try{return await new Promise(e=>setTimeout(e,2e3)),c(`Initializing ${n} template...`),await new Promise(e=>setTimeout(e,1e3)),r&&c("Git repository initialized."),s&&c("Docker configuration added."),i&&c("GitHub Actions workflow generated."),c(`${a?"DRY RUN":"SYNTHESIS"} completed successfully at ${t}`),!0}catch(l){return c(`Critical Error: ${l instanceof Error?l.message:String(l)}`),!1}finally{o(!1)}}}},dy=e.lazy(()=>l(()=>import("./Dashboard-DebOuiqR.js"),__vite__mapDeps([0,1,2,3,4]))),py=e.lazy(()=>l(()=>import("./Templates-rdJKTBeo.js"),__vite__mapDeps([5,2,4,1]))),fy=e.lazy(()=>l(()=>import("./MyProjects-Bxfd_nrB.js"),__vite__mapDeps([6,2,1]))),my=e.lazy(()=>l(()=>import("./AIAssistant-DcTI0P5B.js"),__vite__mapDeps([7,2,1]))),gy=e.lazy(()=>l(()=>import("./Settings-C3YvsvYd.js"),__vite__mapDeps([8,2,3,1]))),yy=({children:e,allowedRoles:n})=>{const{isAuthenticated:r,userProfile:s}=tn();return r?n&&s&&!n.includes(s.role)?t.jsx(_e,{to:"/dashboard",replace:!0}):t.jsx(t.Fragment,{children:e}):t.jsx(_e,{to:"/signin",replace:!0})},vy=()=>{const{isAuthenticated:n,setAuthenticated:r,setUserProfile:s}=tn(),[a,o]=e.useState(!0);return(()=>{const{setIsExplorerOpen:t,setIsMoodBoardOpen:n,resetConfig:r,isGenerating:s}=tn(),{generateProject:i}=hy();e.useEffect(()=>{const e=e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&(s||(e.preventDefault(),i())),"Escape"===e.key&&(t(!1),n(!1)),"?"===e.key&&e.shiftKey&&console.log("Help requested"),(e.metaKey||e.ctrlKey)&&"r"===e.key&&e.shiftKey&&(e.preventDefault(),confirm("Reset project configuration?")&&r())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s,i,t,n,r])})(),e.useEffect(()=>{const e=Mm(e=>{e?(s(e),r(!0)):(s(null),r(!1)),o(!1)});return()=>e()},[r,s]),a?t.jsxs("div",{className:"h-screen w-screen bg-background-deep flex flex-col items-center justify-center gap-6",children:[t.jsx("div",{className:"w-16 h-16 border-4 border-primary-bright/20 border-t-primary-bright rounded-full animate-spin"}),t.jsx("div",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-text-tertiary animate-pulse",children:"Synchronizing_Core_State..."})]}):t.jsxs(Je,{children:[t.jsx(i,{mode:"wait",children:t.jsxs(Se,{children:[t.jsx(Te,{path:"/",element:n?t.jsx(_e,{to:"/dashboard",replace:!0}):t.jsx(Fm,{})}),t.jsx(Te,{path:"/signin",element:n?t.jsx(_e,{to:"/dashboard",replace:!0}):t.jsx(cy,{})}),t.jsx(Te,{path:"/signup",element:n?t.jsx(_e,{to:"/dashboard",replace:!0}):t.jsx(ly,{})}),t.jsxs(Te,{element:t.jsx(yy,{children:t.jsx(Vm,{})}),children:[t.jsx(Te,{path:"/dashboard",element:t.jsx(dy,{})}),t.jsx(Te,{path:"/templates",element:t.jsx(py,{})}),t.jsx(Te,{path:"/projects",element:t.jsx(fy,{})}),t.jsx(Te,{path:"/ai-assistant",element:t.jsx(yy,{allowedRoles:["paid","admin"],children:t.jsx(my,{})})}),t.jsx(Te,{path:"/settings",element:t.jsx(gy,{})})]}),t.jsx(Te,{path:"*",element:t.jsx(uy,{})})]})}),t.jsx(lt,{})]})};u.createRoot(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(vy,{})}));export{oy as B,Et as C,_t as D,Yt as F,It as G,At as L,Xt as M,Vt as S,Bt as T,Gt as U,Kt as Z,$m as a,Zt as b,mt as c,vt as d,hy as e,Tt as f,en as g,xt as h,zt as i,kt as j,$t as k,Dt as l,Mt as m,bt as n,iy as t,tn as u};
