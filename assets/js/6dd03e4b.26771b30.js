"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[9075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,tags:["faq"]},i="Frequently Asked Questions",s={unversionedId:"getting-started/faq",id:"getting-started/faq",title:"Frequently Asked Questions",description:"Q: How do I get my user id?",source:"@site/docs/getting-started/faq.md",sourceDirName:"getting-started",slug:"/getting-started/faq",permalink:"/developer/docs/getting-started/faq",draft:!1,tags:[{label:"faq",permalink:"/developer/docs/tags/faq"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["faq"]},sidebar:"tutorialSidebar",previous:{title:"JavaScript SDK",permalink:"/developer/docs/getting-started/javascript-sdk"},next:{title:"Polling Jobs",permalink:"/developer/docs/getting-started/advanced/polling"}},l={},p=[{value:"Favorite SDXL Models",id:"favorite-sdxl-models",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How do I get my user id?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Using your ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/getting-started/setup-profile"},"API key")),", you can make a request to the following endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location 'https://civitai.com/api/v1/me' \\\n--header 'Authorization: Bearer <YOUR_API_KEY>' \\\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How can I find models that work with the SDK generator?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," The easiest way is to use the filters on the ",(0,a.kt)("a",{parentName:"p",href:"https://civitai.com/models"},"models page"),'. You can select "All Time", "On-site Generation", and "Checkpoint" to get a list of usable models.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Models Filter",src:r(42916).Z,title:"Filter models page",width:"1144",height:"1044"}),"\n",(0,a.kt)("em",{parentName:"p"},"Filter on models page.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Some versions of those models might not be usable. Be sure to check for a version of that model that works with on-site generation."),(0,a.kt)("h2",{id:"favorite-sdxl-models"},"Favorite SDXL Models"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://civitai.com/models/133005?modelVersionId=348913"},"Juggernaut XL")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://civitai.com/models/84040/sdxl-unstable-diffusers-yamermix"},"SDXL Unstable Diffusers \u261b YamerMIX")))}d.isMDXComponent=!0},42916:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faq-filters-aa20692849d2a4ed62a68913ffc72731.png"}}]);