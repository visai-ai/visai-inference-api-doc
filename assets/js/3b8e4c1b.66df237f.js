"use strict";(self.webpackChunkvisai_inference_api_doc=self.webpackChunkvisai_inference_api_doc||[]).push([[481],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||r;return n?a.createElement(m,l(l({ref:e},c),{},{components:n})):a.createElement(m,l({ref:e},c))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81420:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},l="Machine Translation Base-model",o={type:"api",id:"machine-translation-base-model",unversionedId:"machine-translation-base-model",title:"Machine Translation Base-model",description:"",slug:"/machine-translation-base-model",frontMatter:{},api:{tags:["Base Model API"],operationId:"https://infer.visai.ai/v1/inference-servers",responses:{200:{description:"Return translation result",content:{"application/json":{schema:{type:"object",properties:{translation:{type:"array",description:"List of translation results in target langauge",items:{type:"string"}}}}}}},400:{description:"inputs not founds | Incorrect request body field (inputs)"},401:{description:"Unauthorized | Incorrect x-api-key or x-api-key not have access to this model"}},description:"Translate from one language to another",parameters:[{schema:{type:"string"},in:"header",name:"x-api-key",description:"Your API key",required:!0},{schema:{type:"string"},in:"header",name:"Content-Type",required:!0,description:"application/json"},{schema:{type:"string"},in:"query",name:"sl",description:"Start language (th, en)",required:!0},{schema:{type:"string"},in:"query",name:"tl",description:"Target language (th, en)",required:!0}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentences in start language",items:{type:"string"}}},example:{inputs:["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1e\u0e1a\u0e27\u0e48\u0e32 \u0e09\u0e25\u0e32\u0e21\u0e27\u0e32\u0e2c\u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38\u0e22\u0e37\u0e19\u0e21\u0e32\u0e01","\u0e09\u0e25\u0e2d\u0e07\u0e04\u0e23\u0e1a\u0e23\u0e2d\u0e1a\u0e1b\u0e35\u0e17\u0e35\u0e48 29 \u0e1b\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e44\u0e17\u0e22-\u0e25\u0e34\u0e17\u0e31\u0e27\u0e40\u0e19\u0e35\u0e22"]}}}},required:!0},method:"post",path:"/base/infer-mt",servers:[{url:"https://infer.visai.ai/v1/inference-servers",description:"Default server"}],jsonRequestBodyExample:{inputs:["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1e\u0e1a\u0e27\u0e48\u0e32 \u0e09\u0e25\u0e32\u0e21\u0e27\u0e32\u0e2c\u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38\u0e22\u0e37\u0e19\u0e21\u0e32\u0e01","\u0e09\u0e25\u0e2d\u0e07\u0e04\u0e23\u0e1a\u0e23\u0e2d\u0e1a\u0e1b\u0e35\u0e17\u0e35\u0e48 29 \u0e1b\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e44\u0e17\u0e22-\u0e25\u0e34\u0e17\u0e31\u0e27\u0e40\u0e19\u0e35\u0e22"]},info:{title:"Machine Translation",version:"1.0.0",description:"**Machine Translation** Machine translation (MT) is a model that translates from one language to another with supervised learning. MT models can automatically learn to translate from sentence pairs at scale. Currently, our model can only translate from Thai to English and English to Thai but has potential to be adapted for other languages.\n\n# Base Model - VISAI TH-EN MT\n> **Provider: VISAI.ai**\n\nOur Neural Machine Translation model is trained with the datasets with around 10M paired sentences (Thai and English). The dataset\u2019s domains include Wikipedia, various kinds of documents such as religious and web documents, SMS messages, product reviews, subtitles, and many more. Even though our model can produce translations effectively, the input length that the model can process is limited to 512 tokens/words. The performance of our machine translation model was evaluated using the test set, a collection of 55,555 text samples from TedTalk, annotated by Thai linguists.\n\n# Authentication\nMachine Translation requires API key for API request. Go to [API Key Management](https://visai.ai/api-key-management) to create and get your API Key.\n  - x-api-key\n"},postman:{name:"Machine Translation Base-model",description:{content:"Translate from one language to another",type:"text/plain"},url:{path:["base","infer-mt"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) Start language (th, en)",type:"text/plain"},key:"sl",value:"<string>"},{description:{content:"(Required) Target language (th, en)",type:"text/plain"},key:"tl",value:"<string>"}],variable:[]},header:[{description:{content:"(Required) Your API key",type:"text/plain"},key:"x-api-key",value:"<string>"},{description:{content:"(Required) application/json",type:"text/plain"},key:"Content-Type",value:"<string>"},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "inputs": [\n        "<string>",\n        "<string>"\n    ]\n}'}}},source:"@site/api/openapi-machine-translation.yaml",sourceDirName:".",permalink:"/visai-inference-api-doc/inference-api/machine-translation-base-model",previous:{title:"Introduction",permalink:"/visai-inference-api-doc/inference-api/introduction"},next:{title:"Introduction",permalink:"/visai-inference-api-doc/inference-api/introduction-1"}},s=[],p={toc:s};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machine-translation-base-model"},"Machine Translation Base-model"),(0,i.kt)("p",null,"Translate from one language to another"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sl"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Start language (th, en)")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tl"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Target language (th, en)")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"x-api-key"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Your API key")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Content-Type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"application/json")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"inputs"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"List of sentences in start language")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Return translation result"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"translation"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"List of translation results in target langauge"))))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"400")),(0,i.kt)("div",null,(0,i.kt)("p",null,"inputs not founds | Incorrect request body field (inputs)"))),(0,i.kt)("div",null))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"401")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized | Incorrect x-api-key or x-api-key not have access to this model"))),(0,i.kt)("div",null))))))}c.isMDXComponent=!0}}]);