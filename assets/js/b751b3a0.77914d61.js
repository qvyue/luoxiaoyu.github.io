"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),v=p(a),d=l,k=v["".concat(c,".").concat(d)]||v[d]||u[d]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},3174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={id:"idea-maven-project-introduce",title:"IDEA Maven \u9879\u76ee\u4ecb\u7ecd",sidebar_position:22},r="Maven \u9879\u76ee\u4ecb\u7ecd",o={unversionedId:"intellij-idea/idea-maven-project-introduce",id:"intellij-idea/idea-maven-project-introduce",title:"IDEA Maven \u9879\u76ee\u4ecb\u7ecd",description:"\u5b66\u4e60\u524d\u63d0",source:"@site/docs/intellij-idea/maven-project-introduce.md",sourceDirName:"intellij-idea",slug:"/intellij-idea/idea-maven-project-introduce",permalink:"/intellij-idea/idea-maven-project-introduce",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{id:"idea-maven-project-introduce",title:"IDEA Maven \u9879\u76ee\u4ecb\u7ecd",sidebar_position:22},sidebar:"IDEA \u6559\u7a0b",previous:{title:"IDEA Eclipse \u7684 Java Web \u9879\u76ee\u73af\u5883\u642d\u5efa",permalink:"/intellij-idea/idea-eclipse-java-web-project-introduce"},next:{title:"IDEA Maven\u7684\u5355\u6a21\u5757/\u591a\u6a21\u5757\u4e4b Spring MVC + Spring + Mybatis \u9879\u76ee\u8bb2\u89e3",permalink:"/intellij-idea/idea-maven-java-web-project-introduce"}},c={},p=[{value:"\u5b66\u4e60\u524d\u63d0",id:"\u5b66\u4e60\u524d\u63d0",level:2},{value:"Maven \u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd",id:"maven-\u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd",level:2},{value:"Maven \u9aa8\u67b6\u521b\u5efa Java Web \u9879\u76ee",id:"maven-\u9aa8\u67b6\u521b\u5efa-java-web-\u9879\u76ee",level:2},{value:"\u542f\u52a8 Java Web \u9879\u76ee",id:"\u542f\u52a8-java-web-\u9879\u76ee",level:2},{value:"Maven \u7ec4\u4ef6\u6765\u7ba1\u7406\u9879\u76ee",id:"maven-\u7ec4\u4ef6\u6765\u7ba1\u7406\u9879\u76ee",level:2},{value:"Maven \u7ec4\u4ef6\u754c\u9762\u4ecb\u7ecd",id:"maven-\u7ec4\u4ef6\u754c\u9762\u4ecb\u7ecd",level:2},{value:"Maven \u7684 Tomcat \u63d2\u4ef6\u8fd0\u884c\u9879\u76ee",id:"maven-\u7684-tomcat-\u63d2\u4ef6\u8fd0\u884c\u9879\u76ee",level:2},{value:"Maven \u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81",id:"maven-\u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81",level:2}],m={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"maven-\u9879\u76ee\u4ecb\u7ecd"},"Maven \u9879\u76ee\u4ecb\u7ecd"),(0,l.kt)("h2",{id:"\u5b66\u4e60\u524d\u63d0"},"\u5b66\u4e60\u524d\u63d0"),(0,l.kt)("p",null,"\u76f8\u5bf9\u4e8e\u4f20\u7edf\u7684\u9879\u76ee\uff0cMaven \u4e0b\u7ba1\u7406\u548c\u6784\u5efa\u7684\u9879\u76ee\u771f\u7684\u975e\u5e38\u597d\u7528\u548c\u7b80\u5355\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e5f\u5f3a\u8c03\u4e0b\uff0c\u5c3d\u91cf\u4f7f\u7528\u6b64\u7c7b\u5de5\u5177\u8fdb\u884c\u9879\u76ee\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u5b66\u4e60\u672c\u8bb2\u8fd8\u6709\u4e00\u4e2a\u524d\u63d0\uff1a\u4f60\u5fc5\u987b\u4f1a Maven \u76f8\u5173\u77e5\u8bc6\u70b9\uff0cMaven \u76f8\u5173\u77e5\u8bc6\u70b9\u662f\u4e0d\u5728\u672c\u4e13\u9898\u7684\u8bb2\u89e3\u8303\u56f4\u91cc\u9762\u7684\uff0c\u6240\u4ee5\u8bf7\u81ea\u5df1\u79c1\u4e0b\u8fdb\u884c\u5b66\u4e60\u3002\u5982\u679c\u613f\u610f\u4f60\u4e5f\u53ef\u4ee5\u770b\u6211\u8fc7\u53bb\u6574\u7406\u7684\u4e00\u4efd\u89c6\u9891\uff08\u63d0\u53d6\u7801\uff1awh5g\uff09\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://pan.baidu.com/s/1eSovBkI"},"http://pan.baidu.com/s/1eSovBkI")),(0,l.kt)("h2",{id:"maven-\u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd"},"Maven \u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd",src:a(1475).Z,width:"1258",height:"713"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u6240\u793a\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u6211\u4eec\u672c\u5730 Maven \u7684\u5b89\u88c5\u76ee\u5f55\u6240\u5728\uff0c\u56e0\u4e3a\u6211\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"MAVEN_HOME")," \u7cfb\u7edf\u53c2\u6570\uff0c\u6240\u4ee5\u76f4\u63a5\u8fd9\u6837\u914d\u7f6e IntelliJ IDEA \u662f\u53ef\u4ee5\u627e\u5230\u7684\u3002\u4f46\u662f\u5047\u5982\u4f60\u6ca1\u6709\u914d\u7f6e\u7684\u8bdd\uff0c\u8fd9\u91cc\u53ef\u4ee5\u9009\u62e9\u4f60\u7684 Maven \u5b89\u88c5\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u4e0a\u9762\u7684 Threads \u4e2d\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u7ebf\u7a0b\u6570\uff0c\u6bd4\u5982\u586b\u5199\uff1a2\uff08\u7ebf\u7a0b\u6570\u5e76\u4e0d\u4e00\u5b9a\u662f\u8d8a\u591a\u8d8a\u5feb\uff0c\u9700\u8981\u6267\u884c\u6d4b\u8bd5\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 2 \u6240\u793a\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u6307\u5b9a Maven \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"settings.xml")," \u4f4d\u7f6e\u548c\u672c\u5730\u4ed3\u5e93\u4f4d\u7f6e\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u5e38\u7528\u8bbe\u7f6e\u4ecb\u7ecd",src:a(1525).Z,width:"1258",height:"713"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u6240\u793a\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Import Maven projects automatically")," \u8868\u793a IntelliJ IDEA \u4f1a\u5b9e\u65f6\u76d1\u63a7\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\uff0c\u8fdb\u884c\u9879\u76ee\u53d8\u52a8\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 2 \u6240\u793a\uff0c\u5728 Maven \u5bfc\u5165\u4f9d\u8d56\u5305\u7684\u65f6\u5019\u662f\u5426\u81ea\u52a8\u4e0b\u8f7d\u6e90\u7801\u548c\u6587\u6863\u3002\u9ed8\u8ba4\u662f\u6ca1\u6709\u52fe\u9009\u7684\uff0c\u4e5f\u4e0d\u5efa\u8bae\u52fe\u9009\uff0c\u539f\u56e0\u662f\u8fd9\u6837\u53ef\u4ee5\u52a0\u5feb\u9879\u76ee\u4ece\u5916\u7f51\u5bfc\u5165\u4f9d\u8d56\u5305\u7684\u901f\u5ea6\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u6e90\u7801\u548c\u6587\u6863\u7684\u65f6\u5019\u6211\u4eec\u5230\u65f6\u5019\u518d\u9488\u5bf9\u67d0\u4e2a\u4f9d\u8d56\u5305\u8fdb\u884c\u8054\u7f51\u4e0b\u8f7d\u5373\u53ef\u3002IntelliJ IDEA \u652f\u6301\u76f4\u63a5\u4ece\u516c\u7f51\u4e0b\u8f7d\u6e90\u7801\u548c\u6587\u6863\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 3 \u6240\u793a\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5bfc\u5165\u7684 VM \u53c2\u6570\u3002\u4e00\u822c\u8fd9\u4e2a\u90fd\u4e0d\u9700\u8981\u4e3b\u52a8\u6539\uff0c\u9664\u975e\u9879\u76ee\u771f\u7684\u5bfc\u5165\u592a\u6162\u4e86\u6211\u4eec\u518d\u589e\u5927\u6b64\u53c2\u6570\u3002"))),(0,l.kt)("h2",{id:"maven-\u9aa8\u67b6\u521b\u5efa-java-web-\u9879\u76ee"},"Maven \u9aa8\u67b6\u521b\u5efa Java Web \u9879\u76ee"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u9aa8\u67b6\u521b\u5efa Java Web \u9879\u76ee",src:a(765).Z,width:"1364",height:"739"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6f14\u793a\uff0c\u6839\u636e\u5df2\u6709\u7684 Maven \u9aa8\u67b6\u8fdb\u884c Java Web \u9879\u76ee\u521b\u5efa\u3002\u5176\u4e2d\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u5728\u521b\u5efa\u9879\u76ee\u8fc7\u7a0b\u4e2d Maven \u4f1a\u53bb\u5916\u7f51\u4e2d\u592e\u4ed3\u5e93\u4e2d\u4e0b\u8f7d\u5bf9\u5e94\u7684\u4f9d\u8d56\u6216\u662f\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6839\u636e\u81ea\u8eab\u7f51\u7edc\u73af\u5883\u51b3\u5b9a\u5176\u5feb\u6162\u3002\u5982\u679c\u51fa\u73b0\u65e0\u6cd5\u4e0b\u8f7d\u7684\u60c5\u51b5\u8bf7\u81ea\u5907 VPN \u6216\u8005\u901a\u8fc7\u4fee\u6539 Maven \u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"settings.xml")," \u5207\u6362\u56fd\u5185\u7684\u4e2d\u592e\u4ed3\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6211\u5df2\u7ecf\u8bd5\u8fc7\u591a\u6b21\u4e86\uff0c\u6240\u4ee5 Gif \u6f14\u793a\u4e2d\u6211\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u597d\uff0c\u4f46\u662f\u4f60\u90a3\u8fb9\u4e0d\u4e00\u5b9a\u662f\u8fd9\u79cd\u60c5\u51b5\u7684\u3002"))),(0,l.kt)("h2",{id:"\u542f\u52a8-java-web-\u9879\u76ee"},"\u542f\u52a8 Java Web \u9879\u76ee"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u9aa8\u67b6\u521b\u5efa Java Web \u9879\u76ee",src:a(8928).Z,width:"1364",height:"739"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6f14\u793a\uff0c\u914d\u7f6e\u597d\u9879\u76ee\u4e4b\u540e\uff0c\u542f\u52a8 Tomcat \u5bb9\u5668\u53ef\u4ee5\u826f\u597d\u8fd0\u884c\u3002"))),(0,l.kt)("h2",{id:"maven-\u7ec4\u4ef6\u6765\u7ba1\u7406\u9879\u76ee"},"Maven \u7ec4\u4ef6\u6765\u7ba1\u7406\u9879\u76ee"),(0,l.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u5982\u4f55\u901a\u8fc7 Maven \u9aa8\u67b6\u751f\u6210\u4e00\u4e2a\u6700\u7b80\u5355\u7684 Java Web \u9879\u76ee\uff0c\u53ef\u662f\u6211\u4eec\u8fd8\u662f\u4f7f\u7528\u4e86 IntelliJ IDEA \u7684\u9879\u76ee\u7ba1\u7406\u529f\u80fd\u8fdb\u884c Maven \u9879\u76ee\u7684\u7ba1\u7406\u548c\u6784\u5efa\u3002\u4e00\u822c Maven \u7684\u9879\u76ee\u6211\u4eec\u90fd\u53ef\u4ee5\u8131\u79bb IntelliJ IDEA \u7684\u9879\u76ee\u914d\u7f6e\u529f\u80fd\u8fdb\u884c\u72ec\u7acb\u7684\u7ba1\u7406\u548c\u6784\u5efa\u7684\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u8bb2\u5982\u4f55\u901a\u8fc7 IntelliJ IDEA \u63d0\u4f9b\u7684 Maven \u7ba1\u7406\u5de5\u5177\u8fdb\u884c\u9879\u76ee\u7684\u7ba1\u7406\u548c\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"maven-\u7ec4\u4ef6\u754c\u9762\u4ecb\u7ecd"},"Maven \u7ec4\u4ef6\u754c\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u7ec4\u4ef6\u754c\u9762\u4ecb\u7ecd",src:a(4368).Z,width:"1354",height:"916"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u6240\u793a\uff0c\u4e3a\u5e38\u7528\u7684 Maven \u5de5\u5177\u680f\uff0c\u5176\u4e2d\u6700\u5e38\u7528\u7684\u6709\uff1a",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u6309\u94ae\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Reimport All Maven Projects")," \u8868\u793a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u91cd\u65b0\u8f7d\u5165\u9879\u76ee\u3002\u4e00\u822c\u5f53\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6dfb\u52a0\u4e86\u4f9d\u8d56\u5305\u6216\u662f\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6807\u6ce8 4 \u7684\u4f9d\u8d56\u533a\u4e2d\u6ca1\u6709\u770b\u5230\u6700\u65b0\u5199\u7684\u4f9d\u8d56\u7684\u8bdd\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u70b9\u51fb\u6b64\u6309\u94ae\u8fdb\u884c\u9879\u76ee\u7684\u91cd\u65b0\u8f7d\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u516d\u4e2a\u6309\u94ae\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Execute Maven Goal")," \u5f39\u51fa\u53ef\u6267\u884c\u7684 Maven \u547d\u4ee4\u7684\u8f93\u5165\u6846\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u901a\u8fc7\u4e66\u5199\u67d0\u4e9b\u6267\u884c\u547d\u4ee4\u6765\u6784\u5efa\u9879\u76ee\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u6b64\u6309\u94ae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e5d\u4e2a\u6309\u94ae\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Show Dependencies")," \u663e\u793a\u9879\u76ee\u4f9d\u8d56\u7684\u7ed3\u6784\u56fe\uff0c\u53ef\u4ee5\u65b9\u4fbf\u6211\u4eec\u76f4\u89c2\u9879\u76ee\u7684\u4f9d\u8d56\u5305\u60c5\u51b5\u3002\u8fd9\u4e2a\u529f\u80fd\u6709\u4e9b\u5177\u4f53\u7684\u64cd\u4f5c\u4e0b\u9762\u4f1a\u4e13\u95e8\u8fdb\u884c\u8bb2\u89e3\u3002")))))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 2 \u6240\u793a\uff0c\u5e38\u7528\u7684 Maven \u751f\u547d\u5468\u671f\u7684\u547d\u4ee4\uff0c\u901a\u8fc7\u53cc\u51fb\u5bf9\u5e94\u7684\u547d\u4ee4\u6765\u6267\u884c\u9879\u76ee\u7f16\u8bd1\u3001\u6253\u5305\u3001\u90e8\u7f72\u7b49\u64cd\u4f5c\u3002"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 3 \u6240\u793a\uff0c\u4e3a\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u4e2d\u914d\u7f6e\u7684\u63d2\u4ef6\u5217\u8868\uff0c\u65b9\u4fbf\u8c03\u7528\u63d2\u4ef6\u3002"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 4 \u6240\u793a\uff0c\u4e3a\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u4e2d\u914d\u7f6e\u7684\u4f9d\u8d56\u5305\u5217\u8868\u3002"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 5 \u6240\u793a\uff0c\u4e3a\u5e38\u89c1\u7684 Java Web \u5728 Maven \u4e0b\u7684\u4e00\u4e2a\u9879\u76ee\u7ed3\u6784\u3002"))),(0,l.kt)("h2",{id:"maven-\u7684-tomcat-\u63d2\u4ef6\u8fd0\u884c\u9879\u76ee"},"Maven \u7684 Tomcat \u63d2\u4ef6\u8fd0\u884c\u9879\u76ee"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u7684 Tomcat \u63d2\u4ef6\u8fd0\u884c\u9879\u76ee",src:a(1289).Z,width:"1364",height:"739"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe Gif \u6f14\u793a\uff0c\u901a\u8fc7 Maven \u751f\u547d\u5468\u671f\u7684\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\u548c\u6253\u5305\uff0c\u53ca\u7528 Maven \u7684 Tomcat \u63d2\u4ef6\u8fd0\u884c\u9879\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Maven \u7ec4\u4ef6\u8fdb\u884c\u9879\u76ee\u7684\u7ba1\u7406\uff0c\u4f46\u662f\u8fd9\u5e76\u4e0d\u7b49\u540c\u4e8e\u6211\u4eec\u53ef\u4ee5\u5b8c\u5168\u629b\u5f03 IntelliJ IDEA \u7684\u9879\u76ee\u8bbe\u7f6e\uff0c\u6bd4\u5982\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4e86 JDK \u7f16\u8bd1\u7248\u672c\u662f 1.7\uff0c\u4f46\u662f\u5728\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + Alt + S")," \u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u914d\u7f6e\u7684 JDK \u662f 1.8\uff0c\u90a3\u5373\u4f7f\u6211\u4eec\u7528 Maven \u7684\u7f16\u8bd1\u5de5\u5177\u6216\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\u4e5f\u662f\u4f1a\u8c03\u7528 1.8\u7684\u3002\u8fd8\u6709\u5373\u4f7f\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + Alt + S")," \u914d\u7f6e\u4e2d\u6ca1\u6709\u914d\u7f6e Artifacts\uff0c\u5728\u6211\u4eec\u8fd0\u884c Maven \u7684 Tomcat \u63d2\u4ef6\u7684\u65f6\u5019\u4e5f\u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u751f\u6210\u7684\u3002"))),(0,l.kt)("h2",{id:"maven-\u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81"},"Maven \u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81",src:a(1596).Z,width:"1364",height:"873"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u7bad\u5934\u6240\u793a\uff0c\u70b9\u51fb\u6b64\u6309\u94ae\u4f1a\u51fa\u73b0\u5de6\u8fb9\u7684\u9879\u76ee\u4f9d\u8d56\u7ed3\u6784\u56fe\uff0c\u901a\u8fc7\u6b64\u56fe\u6211\u4eec\u53ef\u4ee5\u5f88\u597d\u7684\u89c2\u5bdf\u9879\u76ee\u7684\u4f9d\u8d56\u4f9d\u8d56\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u6807\u6ce8 1 \u6240\u793a\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u4f9d\u8d56\u7ed3\u6784\u56fe\u4e0a\u7f16\u8f91\u4f9d\u8d56\uff0c\u5e38\u7528\u7684\u5c31\u662f\u6b64\u6392\u9664\u529f\u80fd\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Maven \u5feb\u901f\u6392\u67e5\u4f9d\u8d56\u5305\u51b2\u7a81",src:a(6319).Z,width:"1023",height:"585"})),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u56fe\u63cf\u8ff0\uff0c\u4e00\u822c\u6211\u4eec\u5728\u51fa\u73b0\u7ea2\u8272\u7ebf\u7684\u65f6\u5019\u662f\u90fd\u8981\u8fdb\u884c\u6392\u9664\u7684\uff0c\u9632\u6b62\u51fa\u73b0\u56e0\u4e3a\u7248\u672c\u4e0d\u540c\u7684\u4f9d\u8d56\u5305\u9020\u6210\u4ee3\u7801\u65e0\u6cd5\u7f16\u8bd1\u3002"))))}u.isMDXComponent=!0},1475:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-a-maven-setting-1-ed5b4eb268081ce7b22de11b7ab4ed65.jpg"},1525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-a-maven-setting-2-cf0aaa00db6c099cfda34e17e6894c63.jpg"},765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-b-maven-hello-world-project-1-d2af494e9bea8749a381910e208975fd.gif"},8928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-b-maven-hello-world-project-2-0fd05ab0462e2e5735cb23392b3e1925.gif"},4368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-c-maven-component-1-71fce94a0dbbd20555e92c4f145eaecb.jpg"},1289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-d-maven-tomcat-run-1-60a3548c01ad191a8cc38f46d86d16ca.gif"},1596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-e-maven-dependent-exclude-1-cefa46eb2709ba175d59d9dfd09d038b.jpg"},6319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xxii-e-maven-dependent-exclude-2-10be329e8e4138ca2a4f2cfd07cbf6cb.jpg"}}]);