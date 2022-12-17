"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const i={id:"stream-intermediate-operation",sidebar_position:5,sidebar_label:"Stream\u4e2d\u95f4\u64cd\u4f5c"},l="Stream\u4e2d\u95f4\u64cd\u4f5c",s={unversionedId:"java-stream/stream-intermediate-operation",id:"java-stream/stream-intermediate-operation",title:"Stream\u4e2d\u95f4\u64cd\u4f5c",description:"\u8d1f\u8d23\u5bf9Stream\u8fdb\u884c\u5904\u7406\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Stream\u5bf9\u8c61\uff0c\u4e2d\u95f4\u7ba1\u9053\u64cd\u4f5c\u53ef\u4ee5\u8fdb\u884c\u53e0\u52a0\u3002",source:"@site/docs/java-stream/intermediate-operation.md",sourceDirName:"java-stream",slug:"/java-stream/stream-intermediate-operation",permalink:"/java-stream/stream-intermediate-operation",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"stream-intermediate-operation",sidebar_position:5,sidebar_label:"Stream\u4e2d\u95f4\u64cd\u4f5c"},sidebar:"Java-Stream\u6d41\u6559\u7a0b",previous:{title:"Stream\u6d41\u7684\u521b\u5efa",permalink:"/java-stream/stream-creation"},next:{title:"Stream\u7ec8\u6b62\u64cd\u4f5c",permalink:"/java-stream/stream-terminal-operation"}},p={},o=[{value:"filter \u7b5b\u9009",id:"filter-\u7b5b\u9009",level:2},{value:"map \u6d41\u6620\u5c04",id:"map-\u6d41\u6620\u5c04",level:2},{value:"flatMap \u6d41\u8f6c\u6362",id:"flatmap-\u6d41\u8f6c\u6362",level:2},{value:"limit \u8fd4\u56de\u6307\u5b9a\u6d41\u4e2a\u6570",id:"limit-\u8fd4\u56de\u6307\u5b9a\u6d41\u4e2a\u6570",level:2},{value:"skip \u8df3\u8fc7\u6d41\u4e2d\u7684\u5143\u7d20",id:"skip-\u8df3\u8fc7\u6d41\u4e2d\u7684\u5143\u7d20",level:2},{value:"distinct \u53bb\u91cd",id:"distinct-\u53bb\u91cd",level:2},{value:"sorted",id:"sorted",level:2},{value:"peek",id:"peek",level:2}],m={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stream\u4e2d\u95f4\u64cd\u4f5c"},"Stream\u4e2d\u95f4\u64cd\u4f5c"),(0,n.kt)("p",null,"\u8d1f\u8d23\u5bf9Stream\u8fdb\u884c\u5904\u7406\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Stream\u5bf9\u8c61\uff0c\u4e2d\u95f4\u7ba1\u9053\u64cd\u4f5c\u53ef\u4ee5\u8fdb\u884c",(0,n.kt)("strong",{parentName:"p"},"\u53e0\u52a0"),"\u3002"),(0,n.kt)("h2",{id:"filter-\u7b5b\u9009"},"filter \u7b5b\u9009"),(0,n.kt)("p",null,"\u6309\u7167\u6761\u4ef6\u8fc7\u6ee4\u7b26\u5408\u8981\u6c42\u7684\u5143\u7d20\uff0cfilter\u7684\u65b9\u6cd5\u53c2\u6570\u4e3a\u4e00\u4e2a\u6761\u4ef6\uff08\u4fdd\u7559\u51fd\u6570\u8fd4\u56de\u503c\u4e3a true \u7684\u5143\u7d20\uff09\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void testFilter() {\n    List<Integer> integerList = Arrays.asList(1, 2, 3, 4, 5, 6);\n    integerList.stream().filter(i -> i > 3).forEach(System.out::println);\n}\n")),(0,n.kt)("p",null,"\u4ece\u8f93\u51fa\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\uff0c\u7ed3\u679c\u4fdd\u7559\u4e86\u5927\u4e8e3\u7684\u6574\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"4\n5\n6\n")),(0,n.kt)("h2",{id:"map-\u6d41\u6620\u5c04"},"map \u6d41\u6620\u5c04"),(0,n.kt)("p",null,"\u5c06\u5df2\u6709\u5143\u7d20\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u5143\u7d20\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4e00\u5bf9\u4e00"),"\u903b\u8f91\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5728\u5b9e\u9645\u9879\u76ee\u4e2d",(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6700\u591a"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testMap() {\n    List<String> stringList = Arrays.asList("Java 8", "Lambdas", "In", "Action");\n    stringList.stream().map(String::length).forEach(System.out::println);\n}\n')),(0,n.kt)("p",null,"\u4ece\u8f93\u51fa\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\uff0c\u901a\u8fc7map\u65b9\u6cd5\uff0c\u8be5\u4f8b\u5b50\u5b8c\u6210\u4e86\u4ece String -> Integer \u7684\u6620\u5c04\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"6\n7\n2\n6\n")),(0,n.kt)("h2",{id:"flatmap-\u6d41\u8f6c\u6362"},"flatMap \u6d41\u8f6c\u6362"),(0,n.kt)("p",null,"\u5c06\u5df2\u6709\u5143\u7d20\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4e00\u5bf9\u591a"),"\u903b\u8f91\uff0c\u5373\u539f\u6765\u4e00\u4e2a\u5143\u7d20\u53ef\u80fd\u4f1a\u8f6c\u6362\u4e3a",(0,n.kt)("strong",{parentName:"p"},"1\u4e2a\u6216\u8005\u591a\u4e2a"),"\u5143\u7d20\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testFlatMap() {\n    List<String> wordList = Arrays.asList("tutorial lxiaoyu com", "www lxiaoyu com");\n    wordList.stream().flatMap(w -> Arrays.stream(w.split(" "))).forEach(System.out::println);\n}\n')),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u5217\u8868\u4e2d\u5143\u7d20\u4e2a\u6570\u662f\u6bd4\u539f\u59cb\u5217\u8868\u5143\u7d20\u4e2a\u6570\u8981\u591a\u7684\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tutorial\nlxiaoyu\ncom\nwww\nlxiaoyu\ncom\n")),(0,n.kt)("h2",{id:"limit-\u8fd4\u56de\u6307\u5b9a\u6d41\u4e2a\u6570"},"limit \u8fd4\u56de\u6307\u5b9a\u6d41\u4e2a\u6570"),(0,n.kt)("p",null,"\u4ec5\u4fdd\u7559\u96c6\u5408\u524d\u9762\u6307\u5b9a\u4e2a\u6570\u7684\u5143\u7d20"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void testLimit() {\n    List<Integer> integerList = Arrays.asList(1, 1, 2, 3, 4, 5);\n    integerList.stream().limit(3).forEach(System.out::println);\n}\n")),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u5217\u8868\u4e2d\u7684\u5143\u7d20\u662f\u96c6\u5408\u7684\u524d3\u4e2a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"1\n1\n2\n")),(0,n.kt)("h2",{id:"skip-\u8df3\u8fc7\u6d41\u4e2d\u7684\u5143\u7d20"},"skip \u8df3\u8fc7\u6d41\u4e2d\u7684\u5143\u7d20"),(0,n.kt)("p",null,"\u8df3\u8fc7\u96c6\u5408\u524d\u9762\u6307\u5b9a\u4e2a\u6570\u7684\u5143\u7d20"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void testSkip() {\n    List<Integer> integerList = Arrays.asList(1, 1, 2, 3, 4, 5);\n    integerList.stream().skip(3).forEach(System.out::println);\n}\n")),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u5217\u8868\u4e2d\uff0c\u96c6\u5408\u7684\u524d3\u4e2a\u5143\u7d20\u88ab\u8df3\u8fc7\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"1\n1\n2\n")),(0,n.kt)("h2",{id:"distinct-\u53bb\u91cd"},"distinct \u53bb\u91cd"),(0,n.kt)("p",null,"\u5bf9Stream\u4e2d\u6240\u6709\u5143\u7d20\u8fdb\u884c\u53bb\u91cd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void testDistinct() {\n    List<Integer> integerList = Arrays.asList(1, 1, 2, 3, 4, 5);\n    integerList.stream().distinct().forEach(System.out::println);\n}\n")),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u5217\u8868\u4e2d\uff0c\u96c6\u5408\u4e2d\u7684\u91cd\u590d\u5143\u7d20",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"\u88ab\u53bb\u91cd\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"1\n2\n3\n4\n5\n")),(0,n.kt)("h2",{id:"sorted"},"sorted"),(0,n.kt)("p",null,"\u5bf9stream\u4e2d\u6240\u6709\u7684\u5143\u7d20\u6309\u7167\u6307\u5b9a\u89c4\u5219\u8fdb\u884c\u6392\u5e8f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void testSorted() {\n        List<Integer> integerList = Arrays.asList(2, 3, 1, 5, 4);\n        // \u81ea\u7136\u987a\u5e8f\u6392\u5e8f\n        integerList.stream().sorted(Comparator.naturalOrder()).forEach(System.out::println);\n}\n")),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u5217\u8868\u4e2d\uff0c\u96c6\u5408\u4e2d\u7684\u5143\u7d20\u53d8\u6210\u4ece\u5c0f\u5230\u5927\u6709\u5e8f\u4e86\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"1\n2\n3\n4\n5\n")),(0,n.kt)("h2",{id:"peek"},"peek"),(0,n.kt)("p",null,"\u5bf9stream\u6d41\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u9010\u4e2a\u904d\u5386\u5904\u7406\uff0c\u8fd4\u56de\u5904\u7406\u540e\u7684stream\u6d41"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void testSorted() {\n        Stream.of("one", "two", "three", "four")\n                .filter(e -> e.length() > 3)\n                .peek(e -> System.out.println("\u8fc7\u6ee4\u4fdd\u7559\u7684\u503c: " + e))\n                .map(String::toUpperCase)\n                .peek(e -> System.out.println("\u6620\u5c04\u5904\u7406\u7684\u503c: " + e))\n                .collect(Collectors.toList());\n}\n')),(0,n.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u6b64\u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u652f\u6301\u8c03\u8bd5\uff0c\u5728\u5143\u7d20\u6d41\u7ecf\u7ba1\u9053\u65f6\u53ef\u4ee5\u6253\u5370\u67e5\u770b\uff0c\u7c7b\u4f3c",(0,n.kt)("inlineCode",{parentName:"p"},"foreach()"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u8fc7\u6ee4\u4fdd\u7559\u7684\u503c: three\n\u6620\u5c04\u5904\u7406\u7684\u503c: THREE\n\u8fc7\u6ee4\u4fdd\u7559\u7684\u503c: four\n\u6620\u5c04\u5904\u7406\u7684\u503c: FOUR\n")))}u.isMDXComponent=!0}}]);