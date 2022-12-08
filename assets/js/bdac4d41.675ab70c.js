"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6093],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>m});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function k(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},o=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,o=k(t,["components","mdxType","originalType","parentName"]),b=u(l),m=a,c=b["".concat(d,".").concat(m)]||b[m]||p[m]||r;return l?n.createElement(c,i(i({ref:e},o),{},{components:l})):n.createElement(c,i({ref:e},o))}));function m(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=b;var k={};for(var d in e)hasOwnProperty.call(e,d)&&(k[d]=e[d]);k.originalType=t,k.mdxType="string"==typeof t?t:a,i[1]=k;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}b.displayName="MDXCreateElement"},3622:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>k,toc:()=>u});var n=l(7462),a=(l(7294),l(3905));const r={id:"idea-debug-introduce",title:"IDEA Debug \u4ecb\u7ecd",sidebar_position:25},i="Debug \u4ecb\u7ecd",k={unversionedId:"intellij-idea/idea-debug-introduce",id:"intellij-idea/idea-debug-introduce",title:"IDEA Debug \u4ecb\u7ecd",description:"Debug \u8bbe\u7f6e",source:"@site/docs/intellij-idea/debug-introduce.md",sourceDirName:"intellij-idea",slug:"/intellij-idea/idea-debug-introduce",permalink:"/intellij-idea/idea-debug-introduce",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{id:"idea-debug-introduce",title:"IDEA Debug \u4ecb\u7ecd",sidebar_position:25},sidebar:"IDEA \u6559\u7a0b",previous:{title:"IDEA Maven \u7684\u5355\u6a21\u5757 / \u591a\u6a21\u5757\u4e4b Spring MVC + Spring + Spring Data JPA \u9879\u76ee",permalink:"/intellij-idea/idea-maven-java-web-project-introduce2"},next:{title:"IDEA \u91cd\u6784\u8bb2\u89e3",permalink:"/intellij-idea/idea-refactor-introduce"}},d={},u=[{value:"Debug \u8bbe\u7f6e",id:"debug-\u8bbe\u7f6e",level:2},{value:"Debug \u5e38\u7528\u5feb\u6377\u952e",id:"debug-\u5e38\u7528\u5feb\u6377\u952e",level:2},{value:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",id:"debug-\u7279\u6b8a\u6280\u80fd\u4f7f\u7528",level:2}],o={toc:u};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-\u4ecb\u7ecd"},"Debug \u4ecb\u7ecd"),(0,a.kt)("h2",{id:"debug-\u8bbe\u7f6e"},"Debug \u8bbe\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u8bbe\u7f6e",src:l(5308).Z,width:"1258",height:"713"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u6240\u793a\uff0c\u8868\u793a\u8bbe\u7f6e Debug \u8fde\u63a5\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Socket"),"\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"Shared memory")," \u662f Windows \u7279\u6709\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u4e00\u822c\u5728 Windows \u7cfb\u7edf\u4e0b\u5efa\u8bae\u4f7f\u7528\u6b64\u8bbe\u7f6e\uff0c\u76f8\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"Socket")," \u4f1a\u5feb\u70b9\u3002"))),(0,a.kt)("h2",{id:"debug-\u5e38\u7528\u5feb\u6377\u952e"},"Debug \u5e38\u7528\u5feb\u6377\u952e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Win \u5feb\u6377\u952e"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mac \u5feb\u6377\u952e"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u5982\u679c\u5f53\u524d\u884c\u65ad\u70b9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5219\u8fdb\u5165\u5f53\u524d\u65b9\u6cd5\u4f53\u5185\uff0c\u5982\u679c\u8be5\u65b9\u6cd5\u4f53\u8fd8\u6709\u65b9\u6cd5\uff0c\u5219\u4e0d\u4f1a\u8fdb\u5165\u8be5\u5185\u5d4c\u7684\u65b9\u6cd5\u4e2d ",(0,a.kt)("inlineCode",{parentName:"td"},"\u5fc5\u5907"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u5982\u679c\u5f53\u524d\u884c\u65ad\u70b9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5219\u4e0d\u8fdb\u5165\u5f53\u524d\u65b9\u6cd5\u4f53\u5185 ",(0,a.kt)("inlineCode",{parentName:"td"},"\u5fc5\u5907"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"F9")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Command")," + ",(0,a.kt)("kbd",null,"Option")," + ",(0,a.kt)("kbd",null,"R")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u7a0b\u5e8f\u8fd0\u884c\uff0c\u76f4\u81f3\u4e0b\u4e2a\u65ad\u70b9\u6216\u7a0b\u5e8f\u8fd0\u884c\u7ed3\u675f ",(0,a.kt)("inlineCode",{parentName:"td"},"\u5fc5\u5907"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Option")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u4e2d\u5bf9\u8c61\uff0c\u5f39\u51fa\u53ef\u8f93\u5165\u8ba1\u7b97\u8868\u8fbe\u5f0f\u8c03\u8bd5\u6846\uff0c\u67e5\u770b\u8be5\u8f93\u5165\u5185\u5bb9\u7684\u8c03\u8bd5\u7ed3\u679c ",(0,a.kt)("inlineCode",{parentName:"td"},"\u5fc5\u5907"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Command")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u5149\u6807\u5f53\u524d\u884c\u4e3a\u65ad\u70b9\uff0c\u5982\u679c\u5f53\u524d\u5df2\u7ecf\u662f\u65ad\u70b9\u5219\u53bb\u6389\u65ad\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u667a\u80fd\u6b65\u5165\u3002\u65ad\u70b9\u6240\u5728\u884c\u4e0a\u6709\u591a\u4e2a\u65b9\u6cd5\u8c03\u7528\uff0c\u4f1a\u5f39\u51fa\u8fdb\u5165\u54ea\u4e2a\u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8df3\u51fa\uff0c\u8868\u73b0\u51fa\u6765\u7684\u6548\u679c\u8ddf ",(0,a.kt)("inlineCode",{parentName:"td"},"F9")," \u4e00\u6837")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Command")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u65ad\u70b9\u8fdb\u5165\u6761\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Option")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F7")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u5982\u679c\u5f53\u524d\u884c\u65ad\u70b9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5219\u8fdb\u5165\u5f53\u524d\u65b9\u6cd5\u4f53\u5185\uff0c\u5982\u679c\u65b9\u6cd5\u4f53\u8fd8\u6709\u65b9\u6cd5\uff0c\u5219\u4f1a\u8fdb\u5165\u8be5\u5185\u5d4c\u7684\u65b9\u6cd5\u4e2d\uff0c\u4f9d\u6b64\u5faa\u73af\u8fdb\u5165")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("kbd",null,"Option")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F8")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4e0a\u4e00\u6b65")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Drop Frame"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Drop Frame"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u4e0d\u662f\u4e00\u4e2a\u5feb\u6377\u952e\uff0c\u800c\u662f\u4e00\u4e2a Debug \u9762\u677f\u4e0a\u7684\u6309\u94ae\u3002\u8be5\u6309\u94ae\u53ef\u4ee5\u7528\u6765\u9000\u56de\u5230\u5f53\u524d\u505c\u4f4f\u7684\u65ad\u70b9\u7684\u4e0a\u4e00\u5c42\u65b9\u6cd5\u4e0a\uff0c\u53ef\u4ee5\u8ba9\u8fc7\u6389\u7684\u65ad\u70b9\u91cd\u65b0\u6765\u8fc7")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u7c97\u9c81\u5730\u8ba4\u4e3a Debug \u7684\u4f7f\u7528\u5c31\u662f\u7b49\u540c\u4e8e\u8fd9\u51e0\u4e2a\u5feb\u6377\u952e\u7684\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0a\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5fc5\u5907")," \u5feb\u6377\u952e\u662f\u6211\u4eec\u5fc5\u987b\u7262\u8bb0\u7684\uff0c\u8fd9\u4e9b\u4e5f\u662f\u5f00\u53d1\u5f88\u5e38\u7528\u7684\u3002 ")),(0,a.kt)("h2",{id:"debug-\u7279\u6b8a\u6280\u80fd\u4f7f\u7528"},"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(7791).Z,width:"1327",height:"800"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6240\u793a\uff0c\u67e5\u770b\u6240\u9009\u5bf9\u8c61\u7684\u65b9\u6cd5\u5e38\u7528\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u9009\u4e2d\u5bf9\u8c61\u540e\uff0c\u4f7f\u7528\u5feb\u6377\u952e ",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + F8"),"\u3002 "),(0,a.kt)("li",{parentName:"ul"},"\u9009\u4e2d\u5bf9\u8c61\u540e\uff0c\u62d6\u52a8\u5bf9\u8c61\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"Watches"),"\u3002 "),(0,a.kt)("li",{parentName:"ul"},"\u9009\u4e2d\u5bf9\u8c61\u540e\uff0c\u9f20\u6807\u60ac\u505c\u5728\u5bf9\u8c61\u4e0a 2 \u79d2\u5de6\u53f3\u3002 ")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(4124).Z,width:"1327",height:"800"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6240\u793a\uff0c\u5728\u5f39\u51fa\u8868\u8fbe\u5f0f\u8f93\u5165\u6846\u4e2d IntelliJ IDEA \u4e5f\u662f\u80fd\u5e2e\u6211\u4eec\u667a\u80fd\u63d0\u793a\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(7571).Z,width:"1327",height:"800"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6240\u793a\uff0c\u5f53\u6211\u4eec\u9700\u8981\u8fc7\u6389\u540e\u9762\u7684\u6240\u6709\u65ad\u70b9\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u53bb\u6389\u8fd9\u4e9b\u65ad\u70b9\uff0c\u53ea\u9700\u8981\u70b9\u51fb\u5de6\u4e0b\u89d2\u90a3\u4e2a\u5c0f\u5706\u70b9\uff0c\u70b9\u51fb\u5c0f\u5706\u70b9\u4e4b\u540e\uff0c\u6240\u6709\u65ad\u70b9\u53d8\u6210\u7070\u8272\uff0c\u7136\u540e\u6211\u4eec\u518d\u5728\u6309\u5feb\u6377\u952e ",(0,a.kt)("inlineCode",{parentName:"li"},"F9")," \u5373\u53ef\u8fc7\u6389\u5f53\u524d\u548c\u540e\u9762\u6240\u6709\u7684\u65ad\u70b9\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(7676).Z,width:"1327",height:"800"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u7ed9\u65ad\u70b9\u8bbe\u7f6e\u8fdb\u5165\u7684\u6761\u4ef6\u3002\u5982\u4e0a\u56fe Gif \u6240\u793a\uff0c\u56e0\u4e3a\u53d8\u91cf temp3 \u4e0d\u7b49\u4e8e 200 \u6240\u4ee5\u8be5\u65ad\u70b9\u6ca1\u6709\u88ab\u8fdb\u5165\u76f4\u63a5\u8df3\u8fc7\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(1454).Z,width:"1158",height:"636"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9\u65ad\u70b9\u8bbe\u7f6e\u66f4\u590d\u6742\u7684\u6b65\u5165\u6761\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7ea2\u6846\u4e2d\u7684 Pass count \u8868\u793a\u8df3\u8fc7\u591a\u5c11\u6b21\u540e\u5f00\u59cb\u6b65\u5165\uff0c\u6bd4\u5982 for \u5faa\u73af\u4e2d\uff0c\u6211\u4eec\u8981\u67e5\u770b\u4e00\u4e2a\u53d8\u91cf\u5faa\u73af 3 \u6b21\u540e\u7684\u7ed3\u679c\u5c31\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u5f0f\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(2860).Z,width:"1162",height:"637"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\uff0c\u5bf9\u4e8e\u67d0\u4e9b\u4e0d\u91cd\u8981\u7684\u65ad\u70b9\uff0c\u53ea\u8981\u6b65\u5165\u4e00\u6b21\u5c31\u591f\u4e86\uff0c\u5c31\u53ef\u4ee5\u52fe\u9009\u6b64\u9009\u9879\uff0c\u8ba9\u5b83\u6b65\u5165\u4e4b\u540e\u81ea\u52a8\u5220\u9664\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(1585).Z,width:"1154",height:"638"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\uff0c\u5bf9\u4e8e\u67d0\u4e9b\u573a\u666f\u7684\u65ad\u70b9\uff0c\u9700\u8981\u5176\u4ed6\u65ad\u70b9\u5148\u89e6\u53d1\u4e4b\u540e\u518d\u8fdb\u884c\u89e6\u53d1\uff0c\u53ef\u4ee5\u9009\u62e9\u6b64\u9879\u3002\u9ed8\u8ba4\u9009\u62e9\u7684\u662f\uff1a None"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(7599).Z,width:"1329",height:"801"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5019\u5f53\u6211\u4eec\u6b65\u5165\u65b9\u6cd5\u4f53\u4e4b\u540e\uff0c\u8fd8\u60f3\u56de\u9000\u5230\u65b9\u6cd5\u4f53\u5916\u3002\u5982 Gif \u6f14\u793a\uff0c\u65ad\u70b9\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"addNum")," \u65b9\u6cd5\u540e\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Drop Frame")," \u6309\u94ae\u4e4b\u540e\uff0c\u65ad\u70b9\u91cd\u65b0\u56de\u5230\u65b9\u6cd5\u4f53\u4e4b\u5916\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug \u7279\u6b8a\u6280\u80fd\u4f7f\u7528",src:l(4488).Z,width:"1920",height:"847"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u56fe IntelliJ IDEA \u7248\u672c\uff1a2017.1.3"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u5de6\u4fa7\u7ea2\u6846\u5185\u5bb9\uff0c\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u65ad\u70b9\u7ebf\u7a0b\u6267\u884c\u7684\u5806\u6808\u60c5\u51b5\uff0c\u6700\u4e0a\u9762\u7684\u4e3a\u5f53\u524d\u65ad\u70b9\u4f4d\u7f6e\uff0c\u4e0b\u9762\u7684\u662f\u65ad\u70b9\u524d\u9762\u6267\u884c\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u9700\u8981\u770b\u65ad\u70b9\u524d\u9762\u8d70\u8fc7\u7684\u8def\uff0c\u53ef\u4ee5\u67e5\u770b\u8be5\u533a\u57df\u3002\u5e76\u4e14\u53ef\u4ee5\u7528\u56fe\u4e0a\u7bad\u5934\u6309\u94ae\u8fdb\u884c\u9650\u5236\u663e\u793a\u6846\u67b6\u7c7b\u4ee3\u7801\u7684\u6267\u884c\u8fc7\u7a0b\uff0c\u800c\u4e0d\u662f\u5305\u62ec\u4f9d\u8d56 jar \u91cc\u9762\u7684\u6267\u884c\u8fc7\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u53f3\u4fa7\u7ea2\u6846\u5185\u5bb9\uff0c\u53ef\u4ee5\u7528\u6765\u5c55\u793a\u5355\u70b9\u65ad\u70b9\u4f4d\u7f6e\u7684\u5185\u5b58\u60c5\u51b5\uff0c\u5bf9\u4e8e\u5224\u65ad\u5185\u5b58\u6ea2\u51fa\u76f8\u5173\u95ee\u9898\u5f88\u6709\u5e2e\u52a9\u3002"))))}p.isMDXComponent=!0},5308:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-a-debug-settings-1-0d230251121869b77b122b4b245ccda0.jpg"},7791:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-b-debug-use-1-e47ce4962b112f6d9a6cade439409a95.gif"},4124:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-b-debug-use-2-0ffb07527d5ae1de42999ad4c9233ff9.gif"},7571:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-b-debug-use-3-92cf2158fe78ea44213c0df151b426c7.gif"},7676:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-b-debug-use-4-ef4bf86d944f2e6426706b3a238eae72.gif"},7599:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-b-debug-use-5-8901c979e7420e0378c2679d01c351a0.gif"},4488:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-c-debug-use-1-0b9c71a0eac0d57acfd9f39712c2a49c.jpg"},1454:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-c-debug-use-2-8a328ee54905b6f7cfa47d5037b4dd57.jpg"},2860:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-c-debug-use-3-8ae396c71eba2da6343b309460cbecf7.jpg"},1585:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/xxiii-c-debug-use-4-e299edc98918467c7979c804e5174146.jpg"}}]);