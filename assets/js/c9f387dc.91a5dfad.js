"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),c=n,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"idea-remote-debugging",title:"IDEA \u8fdc\u7a0b\u8c03\u8bd5 Tomcat",sidebar_position:36},l="IDEA \u8fdc\u7a0b\u8c03\u8bd5 Tomcat",o={unversionedId:"intellij-idea/idea-remote-debugging",id:"intellij-idea/idea-remote-debugging",title:"IDEA \u8fdc\u7a0b\u8c03\u8bd5 Tomcat",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/intellij-idea/remote-debugging.md",sourceDirName:"intellij-idea",slug:"/intellij-idea/idea-remote-debugging",permalink:"/intellij-idea/idea-remote-debugging",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{id:"idea-remote-debugging",title:"IDEA \u8fdc\u7a0b\u8c03\u8bd5 Tomcat",sidebar_position:36},sidebar:"IDEA \u6559\u7a0b",previous:{title:"IDEA Java \u70ed\u90e8\u7f72\u63d2\u4ef6 JRebel \u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/intellij-idea/idea-jrebel-setup"},next:{title:"IDEA \u6700\u7279\u6b8a\u7684\u5feb\u6377\u952e Alt + Enter",permalink:"/intellij-idea/idea-hotkey-alt-enter"}},p={},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u672c\u5730 Remote Server \u914d\u7f6e",id:"\u672c\u5730-remote-server-\u914d\u7f6e",level:2},{value:"\u670d\u52a1\u5668 Tomcat \u914d\u7f6e",id:"\u670d\u52a1\u5668-tomcat-\u914d\u7f6e",level:2},{value:"\u670d\u52a1\u5668 Jetty \u914d\u7f6e",id:"\u670d\u52a1\u5668-jetty-\u914d\u7f6e",level:2},{value:"\u5f00\u59cb\u8c03\u8bd5",id:"\u5f00\u59cb\u8c03\u8bd5",level:2}],d={toc:s};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"idea-\u8fdc\u7a0b\u8c03\u8bd5-tomcat"},"IDEA \u8fdc\u7a0b\u8c03\u8bd5 Tomcat"),(0,n.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u660e\u786e\u8fdc\u7a0b\u670d\u52a1\u5668\u7684 IP \u5730\u5740\uff0c\u6bd4\u5982\u6211\u662f\uff1a192.168.92.128"),(0,n.kt)("li",{parentName:"ul"},"\u5173\u6389\u670d\u52a1\u5668\u9632\u706b\u5899\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"service iptables stop"))),(0,n.kt)("h2",{id:"\u672c\u5730-remote-server-\u914d\u7f6e"},"\u672c\u5730 Remote Server \u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Remote Server\uff0c\u5982\u4e0b\u56fe",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"\u672c\u5730 Tomcat \u914d\u7f6e",src:r(8744).Z,width:"1196",height:"954"})))),(0,n.kt)("li",{parentName:"ul"},"\u590d\u5236 Remote Server \u81ea\u52a8\u751f\u6210\u7684 JVM \u53c2\u6570\uff0c\u7b49\u4e0b\u6709\u7528\uff0c\u5982\u4e0b\u56fe\uff0c\u6bd4\u5982\u6211\u7684\u662f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005")),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4e0b\u56fe\uff0c\u5728 Host \u6dfb\u52a0\u670d\u52a1\u5668\u7684 IP \u5730\u5740\uff1a192.168.92.128\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"\u672c\u5730 Tomcat \u914d\u7f6e",src:r(8017).Z,width:"1196",height:"954"})))),(0,n.kt)("li",{parentName:"ul"},"\u628a\u521a\u521a\u590d\u5236\u53c2\u6570\u52a0\u4e2a\u524d\u7f00\uff0c\u53d8\u6210\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Linux\uff08\u6709\u5355\u5f15\u53f7\uff09\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"export JAVA_OPTS='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005'")),(0,n.kt)("li",{parentName:"ul"},"Windows\uff08\u6ca1\u6709\u5355\u5f15\u53f7\uff09\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"set JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"))))),(0,n.kt)("h2",{id:"\u670d\u52a1\u5668-tomcat-\u914d\u7f6e"},"\u670d\u52a1\u5668 Tomcat \u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ee5 Linux \u73af\u5883\u4e3a\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"Tomcat \u5b89\u88c5\u5728 /usr/program/tomcat7"),(0,n.kt)("li",{parentName:"ul"},"Tomcat \u7684\u6267\u884c\u7a0b\u5e8f\uff1a/usr/program/tomcat7/bin/catalina.sh"),(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8f91 Tomcat \u6267\u884c\u7a0b\u5e8f\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"vim /usr/program/tomcat7/bin/catalina.sh"),"\uff08Windows \u662f\u7f16\u8f91\uff1acatalina.bat\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u8be5\u6587\u4ef6\u7684\u6700\u4e0a\u9762\uff0c\u6dfb\u52a0\u6211\u4eec\u521a\u521a\u590d\u5236\u7684\u90a3\u53e5\u8bdd\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"export JAVA_OPTS='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005'"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u9879\u76ee\u6709\u7279\u6b8a JVM \u53c2\u6570\uff0c\u90a3\u4f60\u5c31\u628a\u4f60\u7684\u90a3\u90e8\u5206\u53c2\u6570\u548c\u8fd9\u90e8\u5206\u53c2\u6570\u5408\u5e76\u5728\u4e00\u8d77\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"\u8fdc\u7a0b Tomcat \u914d\u7f6e",src:r(9104).Z,width:"991",height:"476"}))))),(0,n.kt)("h2",{id:"\u670d\u52a1\u5668-jetty-\u914d\u7f6e"},"\u670d\u52a1\u5668 Jetty \u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u540c\u6837\u662f Linux \u73af\u5883"),(0,n.kt)("li",{parentName:"ul"},"jetty \u4e0d\u50cfTomcat\u90a3\u6837\u9700\u8981\u5b89\u88c5\uff0c\u53ea\u8981\u6709jetty\u7684jar\u5305\u5c31\u53ef\u4ee5\u542f\u52a8\u6211\u4eec\u60f3\u8981\u542f\u52a8\u7684\u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u542f\u52a8\u5e94\u7528\u7684\u65f6\u5019\u52a0\u5165\u4e4b\u524d\u4e0a\u8fb9\u6211\u4eeccopy\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"),"\u5c31\u53ef\u4ee5\u4e86\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c31\u50cf\u8fd9\u6837\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar {your jetty path} {your port} --path {your war} 1>/dev/null 2>&1 &"))))),(0,n.kt)("h2",{id:"\u5f00\u59cb\u8c03\u8bd5"},"\u5f00\u59cb\u8c03\u8bd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1\u5668 Tomcat"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u672c\u5730 Remote Server"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u56fe\u6548\u679c\uff0c\u8868\u793a\u5df2\u7ecf\u8fde\u63a5\u6210\u529f\u4e86\uff0c\u63a5\u4e0b\u91cc\u5c31\u662f\u8ddf\u5f80\u5e38\u4e00\u6837\uff0c\u5728\u672c\u5730\u4ee3\u7801\u4e0a\u8bbe\u7f6e\u65ad\u70b9\uff0c\u7136\u540e\u4f60\u8bbf\u95ee\u8fdc\u7a0b\u7684\u5730\u5740\uff0c\u89e6\u53d1\u5230\u8be5\u4ee3\u7801\u81ea\u52a8\u5c31\u4f1a\u5728\u672c\u5730\u505c\u4f4f\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"\u5f00\u59cb\u8c03\u8bd5",src:r(9400).Z,width:"969",height:"514"})))),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4e0b\u56fe\uff0c\u53ef\u4ee5\u770b\u5230\u8c03\u8bd5\u6548\u679c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"\u5f00\u59cb\u8c03\u8bd5",src:r(7889).Z,width:"1571",height:"967"}))))))}m.isMDXComponent=!0},8744:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/remote-debugging-1-10546511f934637d835fac85786fc767.jpg"},8017:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/remote-debugging-2-d2ab647f3be344e2a8f8b4cf5d7fc14e.jpg"},9104:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/remote-debugging-3-b89cc5f44b902b8e35c15231ea15d1de.jpg"},9400:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/remote-debugging-4-074f6d3255279bdf98389abb7f237de5.jpg"},7889:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/remote-debugging-5-e45dbb9ce8ddbebcdbe6871d609248b3.jpg"}}]);