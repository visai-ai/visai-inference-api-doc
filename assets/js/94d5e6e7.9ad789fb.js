"use strict";(self.webpackChunkvisai_inference_api_doc=self.webpackChunkvisai_inference_api_doc||[]).push([[730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39343:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="Create a bucket",s={type:"api",id:"create-a-bucket",unversionedId:"create-a-bucket",title:"Create a bucket",description:"",slug:"/create-a-bucket",frontMatter:{},api:{tags:["Bucket operations"],description:"A `PUT` request sent to the endpoint root followed by a string will create a bucket.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).\nBucket names must be globally unique and DNS-compliant; names between 3 and 63 characters long must be made of lowercase letters, numbers, and dashes.\nBucket names must begin and end with a lowercase letter or number.\nBucket names resembling IP addresses are not allowed.\nThis operation doesn't make use of operation specific query parameters.\n\n:::info important\nBucket names must be unique because all buckets in the public cloud share a global namespace.\nThis allows for access to a bucket without needing to provide any service instance or account information.\nIt is also not possible to create a bucket with a name beginning with `cosv1-` or `account-` as these prefixes are reserved by the system.\n:::\n\n:::note\nPersonally Identifiable Information (PII): When creating buckets or adding objects, please ensure to not use any information that can identify any user (natural person) by name, location or any other means in the name of the bucket or object.\n:::\n\n## Create a bucket with a different storage class\n\nTo create a bucket with a different storage class, send an XML block specifying a bucket configuration with a `LocationConstraint` of `{provisioning code}` in the body of a `PUT` request to a bucket endpoint.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).\nNote that standard bucket [naming rules](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-compatibility-api-bucket-operations#compatibility-api-new-bucket) apply.\nThis operation does not make use of operation specific query parameters.\n\nThe body of the request must contain an XML block with the following schema:\n\n```xml\n<CreateBucketConfiguration>\n  <LocationConstraint>us-vault</LocationConstraint>\n</CreateBucketConfiguration>\n```\n\nA list of valid provisioning codes for `LocationConstraint` can be referenced in [the Storage Classes guide](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-classes#classes-locationconstraint).\n\n## Create a new bucket with Key Protect or Hyper Protect Crypto Services managed encryption keys (SSE-KP)\n\nTo create a bucket where the encryption keys are managed by Key Protect or Hyper Protect Crypto Services, it is necessary to have access to an active Key Protect or Hyper Protect Crypto Services service instance located in the same location as the new bucket.\nThis operation does not make use of operation specific query parameters.\n\nFor more information on using Key Protect to manage your encryption keys, [see the documentation for Key Protect](https://cloud.ibm.com/docs/key-protect?topic=key-protect-getting-started-tutorial).\n\nFor more information on Hyper Protect Crypto Services, [see the documentation](https://cloud.ibm.com/docs/hs-crypto?topic=hs-crypto-get-started).\n\n:::note\nNote that managed encryption is **not** available in a Cross Region configuration and any SSE-KP buckets must be Regional.\n:::",parameters:[{name:"bucketName",in:"path",required:!0,schema:{type:"string"}},{name:"ibm-service-instance-id",in:"header",description:"This header references the service instance where the bucket will be created and to which data usage will be billed.",required:!0,schema:{type:"string"}},{name:"ibm-sse-kp-encryption-algorithm",in:"header",description:"This header is used to specify the algorithm and key size to use with the encryption key stored by using Key Protect. This value must be set to the string `AES256`.",required:!1,schema:{type:"string"}},{name:"ibm-sse-kp-customer-root-key-crn",in:"header",description:"This header is used to reference the specific root key used by Key Protect or Hyper Protect Crypto Services to encrypt this bucket. This value must be the full CRN of the root key.",required:!1,schema:{type:"string"}}],requestBody:{content:{"text/plain":{schema:{type:"object",properties:{CreateBucketConfiguration:{type:"object"}}}}}},responses:{200:{description:"ok"}},method:"put",path:"/{bucketName}",servers:[{url:"https://s3.{region}.cloud-object-storage.appdomain.cloud",variables:{region:{enum:["us","eu","ap","us-south","us-east","eu-gb","eu-de","au-syd","jp-tok","ams03","che01","hkg02","mex01","mil01","mon01","osl01","par01","sjc04","sao01","seo01","sng01","tor01"],default:"us"}}}],security:[{BearerAuth:[]}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{title:"Cloud Object Storage",version:"1.0.1"},postman:{name:"Create a bucket",description:{content:"A `PUT` request sent to the endpoint root followed by a string will create a bucket.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).\nBucket names must be globally unique and DNS-compliant; names between 3 and 63 characters long must be made of lowercase letters, numbers, and dashes.\nBucket names must begin and end with a lowercase letter or number.\nBucket names resembling IP addresses are not allowed.\nThis operation doesn't make use of operation specific query parameters.\n\n:::info important\nBucket names must be unique because all buckets in the public cloud share a global namespace.\nThis allows for access to a bucket without needing to provide any service instance or account information.\nIt is also not possible to create a bucket with a name beginning with `cosv1-` or `account-` as these prefixes are reserved by the system.\n:::\n\n:::note\nPersonally Identifiable Information (PII): When creating buckets or adding objects, please ensure to not use any information that can identify any user (natural person) by name, location or any other means in the name of the bucket or object.\n:::\n\n## Create a bucket with a different storage class\n\nTo create a bucket with a different storage class, send an XML block specifying a bucket configuration with a `LocationConstraint` of `{provisioning code}` in the body of a `PUT` request to a bucket endpoint.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).\nNote that standard bucket [naming rules](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-compatibility-api-bucket-operations#compatibility-api-new-bucket) apply.\nThis operation does not make use of operation specific query parameters.\n\nThe body of the request must contain an XML block with the following schema:\n\n```xml\n<CreateBucketConfiguration>\n  <LocationConstraint>us-vault</LocationConstraint>\n</CreateBucketConfiguration>\n```\n\nA list of valid provisioning codes for `LocationConstraint` can be referenced in [the Storage Classes guide](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-classes#classes-locationconstraint).\n\n## Create a new bucket with Key Protect or Hyper Protect Crypto Services managed encryption keys (SSE-KP)\n\nTo create a bucket where the encryption keys are managed by Key Protect or Hyper Protect Crypto Services, it is necessary to have access to an active Key Protect or Hyper Protect Crypto Services service instance located in the same location as the new bucket.\nThis operation does not make use of operation specific query parameters.\n\nFor more information on using Key Protect to manage your encryption keys, [see the documentation for Key Protect](https://cloud.ibm.com/docs/key-protect?topic=key-protect-getting-started-tutorial).\n\nFor more information on Hyper Protect Crypto Services, [see the documentation](https://cloud.ibm.com/docs/hs-crypto?topic=hs-crypto-get-started).\n\n:::note\nNote that managed encryption is **not** available in a Cross Region configuration and any SSE-KP buckets must be Regional.\n:::",type:"text/plain"},url:{path:[":bucketName"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"bucketName"}]},header:[{description:{content:"(Required) This header references the service instance where the bucket will be created and to which data usage will be billed.",type:"text/plain"},key:"ibm-service-instance-id",value:"<string>"},{description:{content:"This header is used to specify the algorithm and key size to use with the encryption key stored by using Key Protect. This value must be set to the string `AES256`.",type:"text/plain"},key:"ibm-sse-kp-encryption-algorithm",value:"<string>"},{description:{content:"This header is used to reference the specific root key used by Key Protect or Hyper Protect Crypto Services to encrypt this bucket. This value must be the full CRN of the root key.",type:"text/plain"},key:"ibm-sse-kp-customer-root-key-crn",value:"<string>"},{key:"Content-Type",value:"text/plain"}],method:"PUT",body:{mode:"raw",raw:'{\n    "CreateBucketConfiguration": "<object>"\n}'}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/visai-inference-api-doc/api/create-a-bucket",previous:{title:"List buckets",permalink:"/visai-inference-api-doc/api/list-buckets"},next:{title:"Retrieve a bucket's headers",permalink:"/visai-inference-api-doc/api/retrieve-a-buckets-headers"}},c=[{value:"Create a bucket with a different storage class",id:"create-a-bucket-with-a-different-storage-class",level:2},{value:"Create a new bucket with Key Protect or Hyper Protect Crypto Services managed encryption keys (SSE-KP)",id:"create-a-new-bucket-with-key-protect-or-hyper-protect-crypto-services-managed-encryption-keys-sse-kp",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-bucket"},"Create a bucket"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," request sent to the endpoint root followed by a string will create a bucket.\nFor more information about endpoints, see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints"},"Endpoints and storage locations"),".\nBucket names must be globally unique and DNS-compliant; names between 3 and 63 characters long must be made of lowercase letters, numbers, and dashes.\nBucket names must begin and end with a lowercase letter or number.\nBucket names resembling IP addresses are not allowed.\nThis operation doesn't make use of operation specific query parameters."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Bucket names must be unique because all buckets in the public cloud share a global namespace.\nThis allows for access to a bucket without needing to provide any service instance or account information.\nIt is also not possible to create a bucket with a name beginning with ",(0,a.kt)("inlineCode",{parentName:"p"},"cosv1-")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"account-")," as these prefixes are reserved by the system."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Personally Identifiable Information (PII): When creating buckets or adding objects, please ensure to not use any information that can identify any user (natural person) by name, location or any other means in the name of the bucket or object."))),(0,a.kt)("h2",{id:"create-a-bucket-with-a-different-storage-class"},"Create a bucket with a different storage class"),(0,a.kt)("p",null,"To create a bucket with a different storage class, send an XML block specifying a bucket configuration with a ",(0,a.kt)("inlineCode",{parentName:"p"},"LocationConstraint")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"{provisioning code}")," in the body of a ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," request to a bucket endpoint.\nFor more information about endpoints, see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints"},"Endpoints and storage locations"),".\nNote that standard bucket ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-compatibility-api-bucket-operations#compatibility-api-new-bucket"},"naming rules")," apply.\nThis operation does not make use of operation specific query parameters."),(0,a.kt)("p",null,"The body of the request must contain an XML block with the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<CreateBucketConfiguration>\n  <LocationConstraint>us-vault</LocationConstraint>\n</CreateBucketConfiguration>\n")),(0,a.kt)("p",null,"A list of valid provisioning codes for ",(0,a.kt)("inlineCode",{parentName:"p"},"LocationConstraint")," can be referenced in ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-classes#classes-locationconstraint"},"the Storage Classes guide"),"."),(0,a.kt)("h2",{id:"create-a-new-bucket-with-key-protect-or-hyper-protect-crypto-services-managed-encryption-keys-sse-kp"},"Create a new bucket with Key Protect or Hyper Protect Crypto Services managed encryption keys (SSE-KP)"),(0,a.kt)("p",null,"To create a bucket where the encryption keys are managed by Key Protect or Hyper Protect Crypto Services, it is necessary to have access to an active Key Protect or Hyper Protect Crypto Services service instance located in the same location as the new bucket.\nThis operation does not make use of operation specific query parameters."),(0,a.kt)("p",null,"For more information on using Key Protect to manage your encryption keys, ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/key-protect?topic=key-protect-getting-started-tutorial"},"see the documentation for Key Protect"),"."),(0,a.kt)("p",null,"For more information on Hyper Protect Crypto Services, ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/hs-crypto?topic=hs-crypto-get-started"},"see the documentation"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that managed encryption is ",(0,a.kt)("strong",{parentName:"p"},"not")," available in a Cross Region configuration and any SSE-KP buckets must be Regional."))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"bucketName"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ibm-service-instance-id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"This header references the service instance where the bucket will be created and to which data usage will be billed.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ibm-sse-kp-encryption-algorithm"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"This header is used to specify the algorithm and key size to use with the encryption key stored by using Key Protect. This value must be set to the string ",(0,a.kt)("inlineCode",{parentName:"p"},"AES256"),".")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ibm-sse-kp-customer-root-key-crn"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"This header is used to reference the specific root key used by Key Protect or Hyper Protect Crypto Services to encrypt this bucket. This value must be the full CRN of the root key.")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"CreateBucketConfiguration"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"ok"))),(0,a.kt)("div",null))))))}p.isMDXComponent=!0}}]);