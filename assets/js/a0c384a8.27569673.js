"use strict";(self.webpackChunkvisai_inference_api_doc=self.webpackChunkvisai_inference_api_doc||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,k=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4434:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="Word Tokenization Inference API",l={type:"api",id:"word-tokenization-inference-api",unversionedId:"word-tokenization-inference-api",title:"Word Tokenization Inference API",description:"",slug:"/word-tokenization-inference-api",frontMatter:{},api:{operationId:"post-word-tokenization-inference",responses:{200:{description:"Return result of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character",content:{"application/json":{schema:{type:"object",properties:{tokens:{type:"array",description:"List of smaller units (tokens)",items:{type:"string"}}}},examples:{"example-1":{value:{tokens:[["\u0e27\u0e34\u0e2a\u0e31\u0e22","\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17","\u0e1c\u0e39\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32","\u0e41\u0e1e\u0e25\u0e15\u0e1f\u0e2d\u0e23\u0e4c\u0e21"],["\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e49\u0e07","\u0e40\u0e21\u0e37\u0e48\u0e2d","\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c"," ","2022"]]}}}}}}},description:"Split a large sample of text into tokens",parameters:[{schema:{type:"string"},in:"header",name:"x-api-key",required:!0,description:"Your API Key"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentence",items:{type:"string"}}},example:{inputs:["\u0e27\u0e34\u0e2a\u0e31\u0e22\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e1c\u0e39\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e1e\u0e25\u0e15\u0e1f\u0e2d\u0e23\u0e4c\u0e21","\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e49\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c 2022"]}}}},required:!0},method:"post",path:"/base/infer-106b3bdd",servers:[{url:"https://infer-staging.visai.ai/v1/inference-servers/",description:"Default server"},{url:"//petstore.swagger.io/sandbox",description:"Sandbox server"}],jsonRequestBodyExample:{inputs:["\u0e27\u0e34\u0e2a\u0e31\u0e22\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e1c\u0e39\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e1e\u0e25\u0e15\u0e1f\u0e2d\u0e23\u0e4c\u0e21","\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e49\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c 2022"]},info:{title:"Word Tokenization",version:"1.0.0",description:"**Word tokenization** is a process of defining boundaries between words in a sentence. Tokenization is a method of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character. In this model, a token refers to a word. Word tokenization is essential to many Natural Language Processing (NLP) pipelines such as text search, keyword extraction, etc. It is also crucial to doing NLP in Thai language which does not have word boundary in a sentence (no spaces between words).\n\n# Base Model - Dictionary based\n> **Provider: PyThaiNLP**\n\nWe employ PyThaiNLP's dictionary-based word tokenization module\xb9 for this version of the Thai word tokenization Base model. The dictionary that the Base models used is provided beforehand\xb2. As a result, this may not be able to tokenize sentences containing out-of-vocabulary tokens (e.g., product names and person names transliterated from foreign languages). We evaluate the word segmentation performance on the test set VISTEC-TP-TH-2021 corpus\xb3, a collection of 49,997 text samples from Twitter, annotated by Thai linguists.\n\n1. Repository: [PyThaiNLP/nlpo3](https://github.com/PyThaiNLP/nlpo3)\n2. The dictionary file that we used is available at [PyThaiNLP/pythainlp](https://raw.githubusercontent.com/PyThaiNLP/pythainlp/v3.0.5/pythainlp/corpus/words_th.txt)\n3. VISTEC-TP-TH-2021 corpus is available at [OSKut/VISTEC-TP-TH-2021](https://github.com/mrpeerat/OSKut/tree/main/VISTEC-TP-TH-2021)\n\n# Authentication\nWord Tokenization requires API key for API request. Go to [API Key Management](https://web-dev.visai.ai/api-key-management) to create and get your API Key.\n  - x-api-key\n"},postman:{name:"Word Tokenization Inference API",description:{content:"Split a large sample of text into tokens",type:"text/plain"},url:{path:["base","infer-106b3bdd"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{description:{content:"(Required) Your API Key",type:"text/plain"},key:"x-api-key",value:"<string>"},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "inputs": [\n        "<string>",\n        "<string>"\n    ]\n}'}}},source:"@site/api/openapi-word-tokenization.yaml",sourceDirName:".",permalink:"/inference-api/word-tokenization-inference-api",previous:{title:"Introduction",permalink:"/inference-api/introduction-3"}},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"word-tokenization-inference-api"},"Word Tokenization Inference API"),(0,i.kt)("p",null,"Split a large sample of text into tokens"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"x-api-key"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Your API Key")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"inputs"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"List of sentence")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Return result of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tokens"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"List of smaller units (tokens)"))))))))))))}c.isMDXComponent=!0}}]);