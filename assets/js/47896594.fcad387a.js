"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={id:"stream-creation",sidebar_position:4,sidebar_label:"Stream\u6d41\u7684\u521b\u5efa"},o="Stream\u6d41\u7684\u521b\u5efa",i={unversionedId:"java-stream/stream-creation",id:"java-stream/stream-creation",title:"Stream\u6d41\u7684\u521b\u5efa",description:"Stream\u6d41\u7684\u521b\u5efa\u65b9\u6cd5\u6709\u5f88\u591a\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e24\u79cd\u5e38\u7528\u7684\u6d41\u521b\u5efa\u65b9\u6cd5\uff1a",source:"@site/docs/java-stream/creation.md",sourceDirName:"java-stream",slug:"/java-stream/stream-creation",permalink:"/java-stream/stream-creation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"stream-creation",sidebar_position:4,sidebar_label:"Stream\u6d41\u7684\u521b\u5efa"},sidebar:"Java-Stream\u6d41\u6559\u7a0b",previous:{title:"\u6d41\u7684\u64cd\u4f5c\u7c7b\u578b",permalink:"/java-stream/operation-type"},next:{title:"Stream\u4e2d\u95f4\u64cd\u4f5c",permalink:"/java-stream/stream-intermediate-operation"}},s={},p=[{value:"\u901a\u8fc7\u96c6\u5408\u751f\u6210",id:"\u901a\u8fc7\u96c6\u5408\u751f\u6210",level:2},{value:"stream()",id:"stream",level:3},{value:"parallelStream()",id:"parallelstream",level:3},{value:"\u901a\u8fc7\u503c\u751f\u6210",id:"\u901a\u8fc7\u503c\u751f\u6210",level:2},{value:"Stream.of()",id:"streamof",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stream\u6d41\u7684\u521b\u5efa"},"Stream\u6d41\u7684\u521b\u5efa"),(0,n.kt)("p",null,"Stream\u6d41\u7684\u521b\u5efa\u65b9\u6cd5\u6709\u5f88\u591a\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e24\u79cd\u5e38\u7528\u7684\u6d41\u521b\u5efa\u65b9\u6cd5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u96c6\u5408\u751f\u6210(\u57fa\u4e8e\u73b0\u6709\u7684",(0,n.kt)("strong",{parentName:"li"},"\u6570\u7ec4\u3001List\u3001Set\u3001Map"),"\u7b49\u96c6\u5408\u7c7b\u578b\u5bf9\u8c61\u521b\u5efa\u51fa\u65b0\u7684Stream\u6d41\uff0c\u5e94\u7528\u4e2d",(0,n.kt)("strong",{parentName:"li"},"\u6700\u5e38\u7528"),"\u7684\u4e00\u79cd)"),(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u503c\u751f\u6210")),(0,n.kt)("h2",{id:"\u901a\u8fc7\u96c6\u5408\u751f\u6210"},"\u901a\u8fc7\u96c6\u5408\u751f\u6210"),(0,n.kt)("h3",{id:"stream"},"stream()"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream() "),"\u65b9\u6cd5\u4f1a\u521b\u5efa\u51fa\u4e00\u4e2a\u65b0\u7684stream\u4e32\u884c\u6d41\u5bf9\u8c61\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testStreamCreation() {\n    List<String> sentences = Arrays.asList("hello world","old driver");\n    sentences.stream().forEach(sentence -> System.out.println(sentence));\n}\n')),(0,n.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"hello world\nold driver\n")),(0,n.kt)("h3",{id:"parallelstream"},"parallelStream()"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"parallelStream()")," \u8ddfstream()\u90fd\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2astream\u6d41\u5bf9\u8c61\uff0c\u4e0d\u540c\u70b9\u662fstream()\u521b\u5efa\u7684\u6d41\u5bf9\u8c61\u662f\u4e32\u884c\u7684\uff0cparallelStream()\u521b\u5efa\u7684\u6d41\u5bf9\u8c61\u662f",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u5e76\u884c\u6267\u884c"),"\u7684\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testParallelStreamCreation() {\n    List<String> sentences = Arrays.asList("hello world", "old driver");\n    // \u6253\u5370\u65b9\u6cd5\u53ef\u4ee5\u7528Lambda\u8868\u8fbe\u5f0f\u8fdb\u884c\u7b80\u5316\n    sentences.parallelStream().forEach(System.out::println);\n}\n')),(0,n.kt)("p",null,"\u591a\u6b21\u8fd0\u884c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b\u60c5\u51b5\uff0c\u4ece\u591a\u6b21\u8f93\u51fa\u7ed3\u679c\u53ef\u4ee5\u5f97\u51fa\uff0c\u6253\u5370\u987a\u5e8f\u4e0d\u518d\u662f\u6709\u5e8f\uff0c\u800c\u53d8\u6210\u4e86\u968f\u673a\uff0c\u5370\u8bc1\u4e86\u4e0a\u9762\u6240\u8bf4\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"parallelStream()"),"\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u5e76\u884c\u6267\u884c"),"\u7684\u6d41\u5bf9\u8c61\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"old driver\nhello world\n")),(0,n.kt)("h2",{id:"\u901a\u8fc7\u503c\u751f\u6210"},"\u901a\u8fc7\u503c\u751f\u6210"),(0,n.kt)("h3",{id:"streamof"},"Stream.of()"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Stream.of()"),"\u901a\u8fc7\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u751f\u6210\u4e00\u4e2a\u666e\u901astream\u4e32\u884c\u6d41\u5bf9\u8c61\uff0c\u8ddf",(0,n.kt)("inlineCode",{parentName:"p"},"stream() "),"\u7b49\u6548\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testStreamOfCreation() {\n    Stream.of("hello world","old driver").forEach(System.out::println);\n}\n')),(0,n.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"hello world\nold driver\n")))}c.isMDXComponent=!0}}]);