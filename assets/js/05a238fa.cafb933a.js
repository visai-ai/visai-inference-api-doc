"use strict";(self.webpackChunkvisai_inference_api_doc=self.webpackChunkvisai_inference_api_doc||[]).push([[190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59338:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r=void 0,s={type:"info",id:"introduction-3",unversionedId:"introduction-3",title:"Introduction",description:"**Word tokenization** is a process of defining boundaries between words in a sentence. Tokenization is a method of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character. In this model, a token refers to a word. Word tokenization is essential to many Natural Language Processing (NLP) pipelines such as text search, keyword extraction, etc. It is also crucial to doing NLP in Thai language which does not have word boundary in a sentence (no spaces between words).\n\n# Base Model - Dictionary based\n> **Provider: PyThaiNLP**\n\nWe employ PyThaiNLP's dictionary-based word tokenization module\xb9 for this version of the Thai word tokenization Base model. The dictionary that the Base models used is provided beforehand\xb2. As a result, this may not be able to tokenize sentences containing out-of-vocabulary tokens (e.g., product names and person names transliterated from foreign languages). We evaluate the word segmentation performance on the test set VISTEC-TP-TH-2021 corpus\xb3, a collection of 49,997 text samples from Twitter, annotated by Thai linguists.\n\n1. Repository: [PyThaiNLP/nlpo3](https://github.com/PyThaiNLP/nlpo3)\n2. The dictionary file that we used is available at [PyThaiNLP/pythainlp](https://raw.githubusercontent.com/PyThaiNLP/pythainlp/v3.0.5/pythainlp/corpus/words_th.txt)\n3. VISTEC-TP-TH-2021 corpus is available at [OSKut/VISTEC-TP-TH-2021](https://github.com/mrpeerat/OSKut/tree/main/VISTEC-TP-TH-2021)\n\n# Authentication\nWord Tokenization requires API key for API request. Go to [API Key Management](https://web-dev.visai.ai/api-key-management) to create and get your API Key.\n  - x-api-key\n",slug:"/introduction-3",frontMatter:{},info:{title:"Word Tokenization",version:"1.0.0",description:"**Word tokenization** is a process of defining boundaries between words in a sentence. Tokenization is a method of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character. In this model, a token refers to a word. Word tokenization is essential to many Natural Language Processing (NLP) pipelines such as text search, keyword extraction, etc. It is also crucial to doing NLP in Thai language which does not have word boundary in a sentence (no spaces between words).\n\n# Base Model - Dictionary based\n> **Provider: PyThaiNLP**\n\nWe employ PyThaiNLP's dictionary-based word tokenization module\xb9 for this version of the Thai word tokenization Base model. The dictionary that the Base models used is provided beforehand\xb2. As a result, this may not be able to tokenize sentences containing out-of-vocabulary tokens (e.g., product names and person names transliterated from foreign languages). We evaluate the word segmentation performance on the test set VISTEC-TP-TH-2021 corpus\xb3, a collection of 49,997 text samples from Twitter, annotated by Thai linguists.\n\n1. Repository: [PyThaiNLP/nlpo3](https://github.com/PyThaiNLP/nlpo3)\n2. The dictionary file that we used is available at [PyThaiNLP/pythainlp](https://raw.githubusercontent.com/PyThaiNLP/pythainlp/v3.0.5/pythainlp/corpus/words_th.txt)\n3. VISTEC-TP-TH-2021 corpus is available at [OSKut/VISTEC-TP-TH-2021](https://github.com/mrpeerat/OSKut/tree/main/VISTEC-TP-TH-2021)\n\n# Authentication\nWord Tokenization requires API key for API request. Go to [API Key Management](https://web-dev.visai.ai/api-key-management) to create and get your API Key.\n  - x-api-key\n"},source:"@site/api/openapi-word-tokenization.yaml",sourceDirName:".",permalink:"/inference-api/introduction-3",previous:{title:"Speech to Text Inference API",permalink:"/inference-api/speech-to-text-inference-api"},next:{title:"Word Tokenization Inference API",permalink:"/inference-api/word-tokenization-inference-api"}},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,o.kt)("h1",{id:"word-tokenization"},"Word Tokenization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Word tokenization")," is a process of defining boundaries between words in a sentence. Tokenization is a method of breaking raw texts into smaller units. Each unit is called a \u201ctoken\u201d which can be a word, subword, or character. In this model, a token refers to a word. Word tokenization is essential to many Natural Language Processing (NLP) pipelines such as text search, keyword extraction, etc. It is also crucial to doing NLP in Thai language which does not have word boundary in a sentence (no spaces between words)."),(0,o.kt)("h1",{id:"base-model---dictionary-based"},"Base Model - Dictionary based"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Provider: PyThaiNLP"))),(0,o.kt)("p",null,"We employ PyThaiNLP's dictionary-based word tokenization module\xb9 for this version of the Thai word tokenization Base model. The dictionary that the Base models used is provided beforehand\xb2. As a result, this may not be able to tokenize sentences containing out-of-vocabulary tokens (e.g., product names and person names transliterated from foreign languages). We evaluate the word segmentation performance on the test set VISTEC-TP-TH-2021 corpus\xb3, a collection of 49,997 text samples from Twitter, annotated by Thai linguists."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PyThaiNLP/nlpo3"},"PyThaiNLP/nlpo3")),(0,o.kt)("li",{parentName:"ol"},"The dictionary file that we used is available at ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/PyThaiNLP/pythainlp/v3.0.5/pythainlp/corpus/words_th.txt"},"PyThaiNLP/pythainlp")),(0,o.kt)("li",{parentName:"ol"},"VISTEC-TP-TH-2021 corpus is available at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mrpeerat/OSKut/tree/main/VISTEC-TP-TH-2021"},"OSKut/VISTEC-TP-TH-2021"))),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Word Tokenization requires API key for API request. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://web-dev.visai.ai/api-key-management"},"API Key Management")," to create and get your API Key."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x-api-key")))}d.isMDXComponent=!0}}]);