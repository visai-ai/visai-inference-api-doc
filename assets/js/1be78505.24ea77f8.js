"use strict";(self.webpackChunkvisai_inference_api_doc=self.webpackChunkvisai_inference_api_doc||[]).push([[514],{61651:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var a=t(67294),r=t(86010),i=t(1944),d=t(35281),o=t(52802),c=t(43320),l=t(74477),s=t(1116),m=t(82164),u=t(67748),b=t(76775),p=t(68612),E=t(95999),h=t(6023);const C="expandButton_m80_",v="expandButtonIcon_BlDH";function f(e){let{toggleSidebar:n}=e;return a.createElement("div",{className:C,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n},a.createElement(h.Z,{className:v}))}const g="docSidebarContainer_b6E3",_="docSidebarContainerHidden_b3ry";function S(e){var n;let{children:t}=e;const r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(n=null==r?void 0:r.name)?n:"noSidebar"},t)}function I(e){let{sidebar:n,hiddenSidebarContainer:t,setHiddenSidebarContainer:i}=e;const{pathname:o}=(0,b.TH)(),[c,l]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&l(!1),i((e=>!e))}),[i,c]);return a.createElement("aside",{className:(0,r.Z)(d.k.docs.docSidebarContainer,g,t&&_),onTransitionEnd:e=>{e.currentTarget.classList.contains(g)&&t&&l(!0)}},a.createElement(S,null,a.createElement(p.Z,{sidebar:n,path:o,onCollapse:s,isHidden:c})),c&&a.createElement(f,{toggleSidebar:s}))}const x={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function k(e){let{hiddenSidebarContainer:n,children:t}=e;const i=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(x.docMainContainer,(n||!i)&&x.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",x.docItemWrapper,n&&x.docItemWrapperEnhanced)},t))}const N="docPage__5DB",Z="docsWrapper_BCFX";function M(e){let{children:n}=e;const t=(0,s.V)(),[r,i]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Z},a.createElement(u.Z,null),a.createElement("div",{className:N},t&&a.createElement(I,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:i}),a.createElement(k,{hiddenSidebarContainer:r},n)))}var w=t(4972),B=t(90197);function T(e){const{versionMetadata:n}=e,t=(0,o.hI)(e);if(!t)return a.createElement(w.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=t;return a.createElement(a.Fragment,null,a.createElement(B.Z,{version:n.version,tag:(0,c.os)(n.pluginId,n.version)}),a.createElement(i.FG,{className:(0,r.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(l.q,{version:n},a.createElement(s.b,{name:u,items:b},a.createElement(M,null,m)))))}},74477:(e,n,t)=>{t.d(n,{E:()=>o,q:()=>d});var a=t(67294),r=t(902);const i=a.createContext(null);function d(e){let{children:n,version:t}=e;return a.createElement(i.Provider,{value:t},n)}function o(){const e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);