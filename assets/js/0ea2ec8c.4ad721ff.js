"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8582],{3905:(n,E,t)=>{t.d(E,{Zo:()=>L,kt:()=>a});var e=t(7294);function T(n,E,t){return E in n?Object.defineProperty(n,E,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[E]=t,n}function S(n,E){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);E&&(e=e.filter((function(E){return Object.getOwnPropertyDescriptor(n,E).enumerable}))),t.push.apply(t,e)}return t}function r(n){for(var E=1;E<arguments.length;E++){var t=null!=arguments[E]?arguments[E]:{};E%2?S(Object(t),!0).forEach((function(E){T(n,E,t[E])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(E){Object.defineProperty(n,E,Object.getOwnPropertyDescriptor(t,E))}))}return n}function l(n,E){if(null==n)return{};var t,e,T=function(n,E){if(null==n)return{};var t,e,T={},S=Object.keys(n);for(e=0;e<S.length;e++)t=S[e],E.indexOf(t)>=0||(T[t]=n[t]);return T}(n,E);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(n);for(e=0;e<S.length;e++)t=S[e],E.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(T[t]=n[t])}return T}var C=e.createContext({}),s=function(n){var E=e.useContext(C),t=E;return n&&(t="function"==typeof n?n(E):r(r({},E),n)),t},L=function(n){var E=s(n.components);return e.createElement(C.Provider,{value:E},n.children)},N={inlineCode:"code",wrapper:function(n){var E=n.children;return e.createElement(e.Fragment,{},E)}},O=e.forwardRef((function(n,E){var t=n.components,T=n.mdxType,S=n.originalType,C=n.parentName,L=l(n,["components","mdxType","originalType","parentName"]),O=s(t),a=T,A=O["".concat(C,".").concat(a)]||O[a]||N[a]||S;return t?e.createElement(A,r(r({ref:E},L),{},{components:t})):e.createElement(A,r({ref:E},L))}));function a(n,E){var t=arguments,T=E&&E.mdxType;if("string"==typeof n||T){var S=t.length,r=new Array(S);r[0]=O;var l={};for(var C in E)hasOwnProperty.call(E,C)&&(l[C]=E[C]);l.originalType=n,l.mdxType="string"==typeof n?n:T,r[1]=l;for(var s=2;s<S;s++)r[s]=t[s];return e.createElement.apply(null,r)}return e.createElement.apply(null,t)}O.displayName="MDXCreateElement"},699:(n,E,t)=>{t.r(E),t.d(E,{assets:()=>C,contentTitle:()=>r,default:()=>N,frontMatter:()=>S,metadata:()=>l,toc:()=>s});var e=t(7462),T=(t(7294),t(3905));const S={id:"mysql-functions",title:"MySQL \u51fd\u6570",sidebar_position:33},r="MySQL \u51fd\u6570",l={unversionedId:"mysql/mysql-functions",id:"mysql/mysql-functions",title:"MySQL \u51fd\u6570",description:"MySQL \u6709\u5f88\u591a\u5185\u7f6e\u7684\u51fd\u6570\uff0c\u4ee5\u4e0b\u5217\u51fa\u4e86\u8fd9\u4e9b\u51fd\u6570\u7684\u8bf4\u660e\u3002",source:"@site/docs/mysql/mysql-functions.md",sourceDirName:"mysql",slug:"/mysql/mysql-functions",permalink:"/mysql/mysql-functions",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{id:"mysql-functions",title:"MySQL \u51fd\u6570",sidebar_position:33},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u5bfc\u5165\u6570\u636e",permalink:"/mysql/mysql-database-import"},next:{title:"MySQL \u8fd0\u7b97\u7b26",permalink:"/mysql/mysql-operator"}},C={},s=[{value:"MySQL \u5b57\u7b26\u4e32\u51fd\u6570",id:"mysql-\u5b57\u7b26\u4e32\u51fd\u6570",level:2},{value:"MySQL \u6570\u5b57\u51fd\u6570",id:"mysql-\u6570\u5b57\u51fd\u6570",level:2},{value:"MySQL \u65e5\u671f\u51fd\u6570",id:"mysql-\u65e5\u671f\u51fd\u6570",level:2},{value:"MySQL \u9ad8\u7ea7\u51fd\u6570",id:"mysql-\u9ad8\u7ea7\u51fd\u6570",level:2}],L={toc:s};function N(n){let{components:E,...t}=n;return(0,T.kt)("wrapper",(0,e.Z)({},L,t,{components:E,mdxType:"MDXLayout"}),(0,T.kt)("h1",{id:"mysql-\u51fd\u6570"},"MySQL \u51fd\u6570"),(0,T.kt)("p",null,"MySQL \u6709\u5f88\u591a\u5185\u7f6e\u7684\u51fd\u6570\uff0c\u4ee5\u4e0b\u5217\u51fa\u4e86\u8fd9\u4e9b\u51fd\u6570\u7684\u8bf4\u660e\u3002"),(0,T.kt)("h2",{id:"mysql-\u5b57\u7b26\u4e32\u51fd\u6570"},"MySQL \u5b57\u7b26\u4e32\u51fd\u6570"),(0,T.kt)("table",null,(0,T.kt)("thead",{parentName:"table"},(0,T.kt)("tr",{parentName:"thead"},(0,T.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570"),(0,T.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,T.kt)("th",{parentName:"tr",align:null},"\u5b9e\u4f8b"))),(0,T.kt)("tbody",{parentName:"table"},(0,T.kt)("tr",{parentName:"tbody"},(0,T.kt)("td",{parentName:"tr",align:null},"ASCII(s)"),(0,T.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684 ASCII \u7801"),(0,T.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de CustomerName \u5b57\u6bb5\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u7684 ASCII \u7801\uff1a",(0,T.kt)("inlineCode",{parentName:"td"},"SELECT ASCII(CustomerName) AS NumCodeOfFirstChar FROM Customers;"))),(0,T.kt)("tr",{parentName:"tbody"},(0,T.kt)("td",{parentName:"tr",align:null},"CHAR_LENGTH(s)"),(0,T.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u5b57\u7b26\u6570"),(0,T.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b57\u7b26\u4e32 RUNOOB \u7684\u5b57\u7b26\u6570",(0,T.kt)("inlineCode",{parentName:"td"},'SELECT CHAR_LENGTH("RUNOOB") AS LengthOfString;'))),(0,T.kt)("tr",{parentName:"tbody"},(0,T.kt)("td",{parentName:"tr",align:null},"CHARACTER_LENGTH(s)"),(0,T.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u5b57\u7b26\u6570\uff0c\u7b49\u540c\u4e8e CHAR_LENGTH(s)"),(0,T.kt)("td",{parentName:"tr",align:null},'\u8fd4\u56de\u5b57\u7b26\u4e32 RUNOOB \u7684\u5b57\u7b26\u6570```SELECT CHARACTER_LENGTH("RUNOOB") AS LengthOfString;')),(0,T.kt)("tr",{parentName:"tbody"},(0,T.kt)("td",{parentName:"tr",align:null},"CONCAT(s1,s2...sn)"),(0,T.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32 s1,s2 \u7b49\u591a\u4e2a\u5b57\u7b26\u4e32\u5408\u5e76\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32"),(0,T.kt)("td",{parentName:"tr",align:null},"\u5408\u5e76\u591a\u4e2a\u5b57\u7b26\u4e32")))),(0,T.kt)("p",null,'SELECT CONCAT("SQL ", "Runoob ", "Gooogle ", "Facebook") AS ConcatenatedString;\nCONCAT_WS(x, s1,s2...sn)\t\u540c CONCAT(s1,s2,...) \u51fd\u6570\uff0c\u4f46\u662f\u6bcf\u4e2a\u5b57\u7b26\u4e32\u4e4b\u95f4\u8981\u52a0\u4e0a x\uff0cx \u53ef\u4ee5\u662f\u5206\u9694\u7b26\n\u5408\u5e76\u591a\u4e2a\u5b57\u7b26\u4e32\uff0c\u5e76\u6dfb\u52a0\u5206\u9694\u7b26\uff1a'),(0,T.kt)("p",null,'SELECT CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!")AS ConcatenatedString;\nFIELD(s,s1,s2...)\t\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u5728\u5b57\u7b26\u4e32\u5217\u8868(s1,s2...)\u4e2d\u7684\u4f4d\u7f6e\n\u8fd4\u56de\u5b57\u7b26\u4e32 c \u5728\u5217\u8868\u503c\u4e2d\u7684\u4f4d\u7f6e\uff1a'),(0,T.kt)("p",null,'SELECT FIELD("c", "a", "b", "c", "d", "e");\nFIND_IN_SET(s1,s2)\t\u8fd4\u56de\u5728\u5b57\u7b26\u4e32s2\u4e2d\u4e0es1\u5339\u914d\u7684\u5b57\u7b26\u4e32\u7684\u4f4d\u7f6e\n\u8fd4\u56de\u5b57\u7b26\u4e32 c \u5728\u6307\u5b9a\u5b57\u7b26\u4e32\u4e2d\u7684\u4f4d\u7f6e\uff1a'),(0,T.kt)("p",null,'SELECT FIND_IN_SET("c", "a,b,c,d,e");\nFORMAT(x,n)\t\u51fd\u6570\u53ef\u4ee5\u5c06\u6570\u5b57 x \u8fdb\u884c\u683c\u5f0f\u5316 "#,###.##", \u5c06 x \u4fdd\u7559\u5230\u5c0f\u6570\u70b9\u540e n \u4f4d\uff0c\u6700\u540e\u4e00\u4f4d\u56db\u820d\u4e94\u5165\u3002\n\u683c\u5f0f\u5316\u6570\u5b57 "#,###.##" \u5f62\u5f0f\uff1a'),(0,T.kt)("p",null,"SELECT FORMAT(250500.5634, 2);     -- \u8f93\u51fa 250,500.56\nINSERT(s1,x,len,s2)\t\u5b57\u7b26\u4e32 s2 \u66ff\u6362 s1 \u7684 x \u4f4d\u7f6e\u5f00\u59cb\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\n\u4ece\u5b57\u7b26\u4e32\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u7684 6 \u4e2a\u5b57\u7b26\u66ff\u6362\u4e3a runoob\uff1a"),(0,T.kt)("p",null,'SELECT INSERT("google.com", 1, 6, "runoob");  -- \u8f93\u51fa\uff1arunoob.com\nLOCATE(s1,s)\t\u4ece\u5b57\u7b26\u4e32 s \u4e2d\u83b7\u53d6 s1 \u7684\u5f00\u59cb\u4f4d\u7f6e\n\u83b7\u53d6 b \u5728\u5b57\u7b26\u4e32 abc \u4e2d\u7684\u4f4d\u7f6e\uff1a'),(0,T.kt)("p",null,"SELECT LOCATE('st','myteststring');  -- 5\n\u8fd4\u56de\u5b57\u7b26\u4e32 abc \u4e2d b \u7684\u4f4d\u7f6e\uff1a"),(0,T.kt)("p",null,"SELECT LOCATE('b', 'abc') -- 2\nLCASE(s)\t\u5c06\u5b57\u7b26\u4e32 s \u7684\u6240\u6709\u5b57\u6bcd\u53d8\u6210\u5c0f\u5199\u5b57\u6bcd\n\u5b57\u7b26\u4e32 RUNOOB \u8f6c\u6362\u4e3a\u5c0f\u5199\uff1a"),(0,T.kt)("p",null,"SELECT LCASE('RUNOOB') -- runoob\nLEFT(s,n)\t\u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u524d n \u4e2a\u5b57\u7b26\n\u8fd4\u56de\u5b57\u7b26\u4e32 runoob \u4e2d\u7684\u524d\u4e24\u4e2a\u5b57\u7b26\uff1a"),(0,T.kt)("p",null,"SELECT LEFT('runoob',2) -- ru\nLOWER(s)\t\u5c06\u5b57\u7b26\u4e32 s \u7684\u6240\u6709\u5b57\u6bcd\u53d8\u6210\u5c0f\u5199\u5b57\u6bcd\n\u5b57\u7b26\u4e32 RUNOOB \u8f6c\u6362\u4e3a\u5c0f\u5199\uff1a"),(0,T.kt)("p",null,"SELECT LOWER('RUNOOB') -- runoob\nLPAD(s1,len,s2)\t\u5728\u5b57\u7b26\u4e32 s1 \u7684\u5f00\u59cb\u5904\u586b\u5145\u5b57\u7b26\u4e32 s2\uff0c\u4f7f\u5b57\u7b26\u4e32\u957f\u5ea6\u8fbe\u5230 len\n\u5c06\u5b57\u7b26\u4e32 xx \u586b\u5145\u5230 abc \u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u5904\uff1a"),(0,T.kt)("p",null,"SELECT LPAD('abc',5,'xx') -- xxabc\nLTRIM(s)\t\u53bb\u6389\u5b57\u7b26\u4e32 s \u5f00\u59cb\u5904\u7684\u7a7a\u683c\n\u53bb\u6389\u5b57\u7b26\u4e32 RUNOOB\u5f00\u59cb\u5904\u7684\u7a7a\u683c\uff1a"),(0,T.kt)("p",null,'SELECT LTRIM("    RUNOOB") AS LeftTrimmedString;-- RUNOOB\nMID(s,n,len)\t\u4ece\u5b57\u7b26\u4e32 s \u7684 n \u4f4d\u7f6e\u622a\u53d6\u957f\u5ea6\u4e3a len \u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u540c SUBSTRING(s,n,len)\n\u4ece\u5b57\u7b26\u4e32 RUNOOB \u4e2d\u7684\u7b2c 2 \u4e2a\u4f4d\u7f6e\u622a\u53d6 3\u4e2a \u5b57\u7b26\uff1a'),(0,T.kt)("p",null,'SELECT MID("RUNOOB", 2, 3) AS ExtractString; -- UNO\nPOSITION(s1 IN s)\t\u4ece\u5b57\u7b26\u4e32 s \u4e2d\u83b7\u53d6 s1 \u7684\u5f00\u59cb\u4f4d\u7f6e\n\u8fd4\u56de\u5b57\u7b26\u4e32 abc \u4e2d b \u7684\u4f4d\u7f6e\uff1a'),(0,T.kt)("p",null,"SELECT POSITION('b' in 'abc') -- 2\nREPEAT(s,n)\t\u5c06\u5b57\u7b26\u4e32 s \u91cd\u590d n \u6b21\n\u5c06\u5b57\u7b26\u4e32 runoob \u91cd\u590d\u4e09\u6b21\uff1a"),(0,T.kt)("p",null,"SELECT REPEAT('runoob',3) -- runoobrunoobrunoob\nREPLACE(s,s1,s2)\t\u5c06\u5b57\u7b26\u4e32 s2 \u66ff\u4ee3\u5b57\u7b26\u4e32 s \u4e2d\u7684\u5b57\u7b26\u4e32 s1\n\u5c06\u5b57\u7b26\u4e32 abc \u4e2d\u7684\u5b57\u7b26 a \u66ff\u6362\u4e3a\u5b57\u7b26 x\uff1a"),(0,T.kt)("p",null,"SELECT REPLACE('abc','a','x') --xbc\nREVERSE(s)\t\u5c06\u5b57\u7b26\u4e32s\u7684\u987a\u5e8f\u53cd\u8fc7\u6765\n\u5c06\u5b57\u7b26\u4e32 abc \u7684\u987a\u5e8f\u53cd\u8fc7\u6765\uff1a"),(0,T.kt)("p",null,"SELECT REVERSE('abc') -- cba\nRIGHT(s,n)\t\u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u540e n \u4e2a\u5b57\u7b26\n\u8fd4\u56de\u5b57\u7b26\u4e32 runoob \u7684\u540e\u4e24\u4e2a\u5b57\u7b26\uff1a"),(0,T.kt)("p",null,"SELECT RIGHT('runoob',2) -- ob\nRPAD(s1,len,s2)\t\u5728\u5b57\u7b26\u4e32 s1 \u7684\u7ed3\u5c3e\u5904\u6dfb\u52a0\u5b57\u7b26\u4e32 s2\uff0c\u4f7f\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len\n\u5c06\u5b57\u7b26\u4e32 xx \u586b\u5145\u5230 abc \u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u5904\uff1a"),(0,T.kt)("p",null,"SELECT RPAD('abc',5,'xx') -- abcxx\nRTRIM(s)\t\u53bb\u6389\u5b57\u7b26\u4e32 s \u7ed3\u5c3e\u5904\u7684\u7a7a\u683c\n\u53bb\u6389\u5b57\u7b26\u4e32 RUNOOB \u7684\u672b\u5c3e\u7a7a\u683c\uff1a"),(0,T.kt)("p",null,'SELECT RTRIM("RUNOOB     ") AS RightTrimmedString;   -- RUNOOB\nSPACE(n)\t\u8fd4\u56de n \u4e2a\u7a7a\u683c\n\u8fd4\u56de 10 \u4e2a\u7a7a\u683c\uff1a'),(0,T.kt)("p",null,"SELECT SPACE(10);\nSTRCMP(s1,s2)\t\u6bd4\u8f83\u5b57\u7b26\u4e32 s1 \u548c s2\uff0c\u5982\u679c s1 \u4e0e s2 \u76f8\u7b49\u8fd4\u56de 0 \uff0c\u5982\u679c s1>s2 \u8fd4\u56de 1\uff0c\u5982\u679c s1<s2 \u8fd4\u56de -1\n\u6bd4\u8f83\u5b57\u7b26\u4e32\uff1a"),(0,T.kt)("p",null,'SELECT STRCMP("runoob", "runoob");  -- 0\nSUBSTR(s, start, length)\t\u4ece\u5b57\u7b26\u4e32 s \u7684 start \u4f4d\u7f6e\u622a\u53d6\u957f\u5ea6\u4e3a length \u7684\u5b50\u5b57\u7b26\u4e32\n\u4ece\u5b57\u7b26\u4e32 RUNOOB \u4e2d\u7684\u7b2c 2 \u4e2a\u4f4d\u7f6e\u622a\u53d6 3\u4e2a \u5b57\u7b26\uff1a'),(0,T.kt)("p",null,'SELECT SUBSTR("RUNOOB", 2, 3) AS ExtractString; -- UNO\nSUBSTRING(s, start, length)\t\u4ece\u5b57\u7b26\u4e32 s \u7684 start \u4f4d\u7f6e\u622a\u53d6\u957f\u5ea6\u4e3a length \u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u7b49\u540c\u4e8e SUBSTR(s, start, length)\n\u4ece\u5b57\u7b26\u4e32 RUNOOB \u4e2d\u7684\u7b2c 2 \u4e2a\u4f4d\u7f6e\u622a\u53d6 3\u4e2a \u5b57\u7b26\uff1a'),(0,T.kt)("p",null,'SELECT SUBSTRING("RUNOOB", 2, 3) AS ExtractString; -- UNO\nSUBSTRING_INDEX(s, delimiter, number)\t\u8fd4\u56de\u4ece\u5b57\u7b26\u4e32 s \u7684\u7b2c number \u4e2a\u51fa\u73b0\u7684\u5206\u9694\u7b26 delimiter \u4e4b\u540e\u7684\u5b50\u4e32\u3002\n\u5982\u679c number \u662f\u6b63\u6570\uff0c\u8fd4\u56de\u7b2c number \u4e2a\u5b57\u7b26\u5de6\u8fb9\u7684\u5b57\u7b26\u4e32\u3002\n\u5982\u679c number \u662f\u8d1f\u6570\uff0c\u8fd4\u56de\u7b2c(number \u7684\u7edd\u5bf9\u503c(\u4ece\u53f3\u8fb9\u6570))\u4e2a\u5b57\u7b26\u53f3\u8fb9\u7684\u5b57\u7b26\u4e32\u3002\nSELECT SUBSTRING_INDEX(\'a',(0,T.kt)("em",{parentName:"p"},"b','"),"',1) -- a\nSELECT SUBSTRING_INDEX('a",(0,T.kt)("em",{parentName:"p"},"b','"),"',-1)    -- b\nSELECT SUBSTRING_INDEX(SUBSTRING_INDEX('a",(0,T.kt)("em",{parentName:"p"},"b"),"c",(0,T.kt)("em",{parentName:"p"},"d"),"e','",(0,T.kt)("em",{parentName:"p"},"',3),'"),"',-1)    -- c\nTRIM(s)\t\u53bb\u6389\u5b57\u7b26\u4e32 s \u5f00\u59cb\u548c\u7ed3\u5c3e\u5904\u7684\u7a7a\u683c\n\u53bb\u6389\u5b57\u7b26\u4e32 RUNOOB \u7684\u9996\u5c3e\u7a7a\u683c\uff1a"),(0,T.kt)("p",null,"SELECT TRIM('    RUNOOB    ') AS TrimmedString;\nUCASE(s)\t\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5927\u5199\n\u5c06\u5b57\u7b26\u4e32 runoob \u8f6c\u6362\u4e3a\u5927\u5199\uff1a"),(0,T.kt)("p",null,'SELECT UCASE("runoob"); -- RUNOOB\nUPPER(s)\t\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5927\u5199\n\u5c06\u5b57\u7b26\u4e32 runoob \u8f6c\u6362\u4e3a\u5927\u5199\uff1a'),(0,T.kt)("p",null,'SELECT UPPER("runoob"); -- RUNOOB'),(0,T.kt)("h2",{id:"mysql-\u6570\u5b57\u51fd\u6570"},"MySQL \u6570\u5b57\u51fd\u6570"),(0,T.kt)("p",null,"\u51fd\u6570\u540d\t\u63cf\u8ff0\t\u5b9e\u4f8b\nABS(x)\t\u8fd4\u56de x \u7684\u7edd\u5bf9\u503c\u3000\u3000\n\u8fd4\u56de -1 \u7684\u7edd\u5bf9\u503c\uff1a"),(0,T.kt)("p",null,"SELECT ABS(-1) -- \u8fd4\u56de1\nACOS(x)\t\u6c42 x \u7684\u53cd\u4f59\u5f26\u503c\uff08\u5355\u4f4d\u4e3a\u5f27\u5ea6\uff09\uff0cx \u4e3a\u4e00\u4e2a\u6570\u503c\nSELECT ACOS(0.25);\nASIN(x)\t\u6c42\u53cd\u6b63\u5f26\u503c\uff08\u5355\u4f4d\u4e3a\u5f27\u5ea6\uff09\uff0cx \u4e3a\u4e00\u4e2a\u6570\u503c\nSELECT ASIN(0.25);\nATAN(x)\t\u6c42\u53cd\u6b63\u5207\u503c\uff08\u5355\u4f4d\u4e3a\u5f27\u5ea6\uff09\uff0cx \u4e3a\u4e00\u4e2a\u6570\u503c\nSELECT ATAN(2.5);\nATAN2(n, m)\t\u6c42\u53cd\u6b63\u5207\u503c\uff08\u5355\u4f4d\u4e3a\u5f27\u5ea6\uff09\nSELECT ATAN2(-0.8, 2);\nAVG(expression)\t\u8fd4\u56de\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u5e73\u5747\u503c\uff0cexpression \u662f\u4e00\u4e2a\u5b57\u6bb5\n\u8fd4\u56de Products \u8868\u4e2dPrice \u5b57\u6bb5\u7684\u5e73\u5747\u503c\uff1a"),(0,T.kt)("p",null,"SELECT AVG(Price) AS AveragePrice FROM Products;\nCEIL(x)\t\u8fd4\u56de\u5927\u4e8e\u6216\u7b49\u4e8e x \u7684\u6700\u5c0f\u6574\u6570\u3000\nSELECT CEIL(1.5) -- \u8fd4\u56de2\nCEILING(x)\t\u8fd4\u56de\u5927\u4e8e\u6216\u7b49\u4e8e x \u7684\u6700\u5c0f\u6574\u6570\u3000\nSELECT CEILING(1.5); -- \u8fd4\u56de2\nCOS(x)\t\u6c42\u4f59\u5f26\u503c(\u53c2\u6570\u662f\u5f27\u5ea6)\nSELECT COS(2);\nCOT(x)\t\u6c42\u4f59\u5207\u503c(\u53c2\u6570\u662f\u5f27\u5ea6)\nSELECT COT(6);\nCOUNT(expression)\t\u8fd4\u56de\u67e5\u8be2\u7684\u8bb0\u5f55\u603b\u6570\uff0cexpression \u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u6bb5\u6216\u8005 * \u53f7\n\u8fd4\u56de Products \u8868\u4e2d products \u5b57\u6bb5\u603b\u5171\u6709\u591a\u5c11\u6761\u8bb0\u5f55\uff1a"),(0,T.kt)("p",null,"SELECT COUNT(ProductID) AS NumberOfProducts FROM Products;\nDEGREES(x)\t\u5c06\u5f27\u5ea6\u8f6c\u6362\u4e3a\u89d2\u5ea6\u3000\u3000\nSELECT DEGREES(3.1415926535898) -- 180\nn DIV m\t\u6574\u9664\uff0cn \u4e3a\u88ab\u9664\u6570\uff0cm \u4e3a\u9664\u6570\n\u8ba1\u7b97 10 \u9664\u4e8e 5\uff1a"),(0,T.kt)("p",null,"SELECT 10 DIV 5;  -- 2\nEXP(x)\t\u8fd4\u56de e \u7684 x \u6b21\u65b9\u3000\u3000\n\u8ba1\u7b97 e \u7684\u4e09\u6b21\u65b9\uff1a"),(0,T.kt)("p",null,"SELECT EXP(3) -- 20.085536923188\nFLOOR(x)\t\u8fd4\u56de\u5c0f\u4e8e\u6216\u7b49\u4e8e x \u7684\u6700\u5927\u6574\u6570\u3000\u3000\n\u5c0f\u4e8e\u6216\u7b49\u4e8e 1.5 \u7684\u6574\u6570\uff1a"),(0,T.kt)("p",null,"SELECT FLOOR(1.5) -- \u8fd4\u56de1\nGREATEST(expr1, expr2, expr3, ...)\t\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u5927\u503c\n\u8fd4\u56de\u4ee5\u4e0b\u6570\u5b57\u5217\u8868\u4e2d\u7684\u6700\u5927\u503c\uff1a"),(0,T.kt)("p",null,"SELECT GREATEST(3, 12, 34, 8, 25); -- 34\n\u8fd4\u56de\u4ee5\u4e0b\u5b57\u7b26\u4e32\u5217\u8868\u4e2d\u7684\u6700\u5927\u503c\uff1a"),(0,T.kt)("p",null,'SELECT GREATEST("Google", "Runoob", "Apple");   -- Runoob\nLEAST(expr1, expr2, expr3, ...)\t\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u5c0f\u503c\n\u8fd4\u56de\u4ee5\u4e0b\u6570\u5b57\u5217\u8868\u4e2d\u7684\u6700\u5c0f\u503c\uff1a'),(0,T.kt)("p",null,"SELECT LEAST(3, 12, 34, 8, 25); -- 3\n\u8fd4\u56de\u4ee5\u4e0b\u5b57\u7b26\u4e32\u5217\u8868\u4e2d\u7684\u6700\u5c0f\u503c\uff1a"),(0,T.kt)("p",null,'SELECT LEAST("Google", "Runoob", "Apple");   -- Apple\nLN\t\u8fd4\u56de\u6570\u5b57\u7684\u81ea\u7136\u5bf9\u6570\uff0c\u4ee5 e \u4e3a\u5e95\u3002\n\u8fd4\u56de 2 \u7684\u81ea\u7136\u5bf9\u6570\uff1a'),(0,T.kt)("p",null,"SELECT LN(2);  -- 0.6931471805599453\nLOG(x) \u6216 LOG(base, x)\t\u8fd4\u56de\u81ea\u7136\u5bf9\u6570(\u4ee5 e \u4e3a\u5e95\u7684\u5bf9\u6570)\uff0c\u5982\u679c\u5e26\u6709 base \u53c2\u6570\uff0c\u5219 base \u4e3a\u6307\u5b9a\u5e26\u5e95\u6570\u3002\u3000\u3000\nSELECT LOG(20.085536923188) -- 3\nSELECT LOG(2, 4); -- 2\nLOG10(x)\t\u8fd4\u56de\u4ee5 10 \u4e3a\u5e95\u7684\u5bf9\u6570\u3000\u3000\nSELECT LOG10(100) -- 2\nLOG2(x)\t\u8fd4\u56de\u4ee5 2 \u4e3a\u5e95\u7684\u5bf9\u6570\n\u8fd4\u56de\u4ee5 2 \u4e3a\u5e95 6 \u7684\u5bf9\u6570\uff1a"),(0,T.kt)("p",null,"SELECT LOG2(6);  -- 2.584962500721156\nMAX(expression)\t\u8fd4\u56de\u5b57\u6bb5 expression \u4e2d\u7684\u6700\u5927\u503c\n\u8fd4\u56de\u6570\u636e\u8868 Products \u4e2d\u5b57\u6bb5 Price \u7684\u6700\u5927\u503c\uff1a"),(0,T.kt)("p",null,"SELECT MAX(Price) AS LargestPrice FROM Products;\nMIN(expression)\t\u8fd4\u56de\u5b57\u6bb5 expression \u4e2d\u7684\u6700\u5c0f\u503c\n\u8fd4\u56de\u6570\u636e\u8868 Products \u4e2d\u5b57\u6bb5 Price \u7684\u6700\u5c0f\u503c\uff1a"),(0,T.kt)("p",null,"SELECT MIN(Price) AS MinPrice FROM Products;\nMOD(x,y)\t\u8fd4\u56de x \u9664\u4ee5 y \u4ee5\u540e\u7684\u4f59\u6570\u3000\n5 \u9664\u4e8e 2 \u7684\u4f59\u6570\uff1a"),(0,T.kt)("p",null,"SELECT MOD(5,2) -- 1\nPI()\t\u8fd4\u56de\u5706\u5468\u7387(3.141593\uff09\u3000\u3000\nSELECT PI() --3.141593\nPOW(x,y)\t\u8fd4\u56de x \u7684 y \u6b21\u65b9\u3000\n2 \u7684 3 \u6b21\u65b9\uff1a"),(0,T.kt)("p",null,"SELECT POW(2,3) -- 8\nPOWER(x,y)\t\u8fd4\u56de x \u7684 y \u6b21\u65b9\u3000\n2 \u7684 3 \u6b21\u65b9\uff1a"),(0,T.kt)("p",null,"SELECT POWER(2,3) -- 8\nRADIANS(x)\t\u5c06\u89d2\u5ea6\u8f6c\u6362\u4e3a\u5f27\u5ea6\u3000\u3000\n180 \u5ea6\u8f6c\u6362\u4e3a\u5f27\u5ea6\uff1a"),(0,T.kt)("p",null,"SELECT RADIANS(180) -- 3.1415926535898\nRAND()\t\u8fd4\u56de 0 \u5230 1 \u7684\u968f\u673a\u6570\u3000\u3000\nSELECT RAND() --0.93099315644334\nROUND(x)\t\u8fd4\u56de\u79bb x \u6700\u8fd1\u7684\u6574\u6570\nSELECT ROUND(1.23456) --1\nSIGN(x)\t\u8fd4\u56de x \u7684\u7b26\u53f7\uff0cx \u662f\u8d1f\u6570\u30010\u3001\u6b63\u6570\u5206\u522b\u8fd4\u56de -1\u30010 \u548c 1\u3000\nSELECT SIGN(-10) -- (-1)\nSIN(x)\t\u6c42\u6b63\u5f26\u503c(\u53c2\u6570\u662f\u5f27\u5ea6)\u3000\u3000\nSELECT SIN(RADIANS(30)) -- 0.5\nSQRT(x)\t\u8fd4\u56dex\u7684\u5e73\u65b9\u6839\u3000\u3000\n25 \u7684\u5e73\u65b9\u6839\uff1a"),(0,T.kt)("p",null,"SELECT SQRT(25) -- 5\nSUM(expression)\t\u8fd4\u56de\u6307\u5b9a\u5b57\u6bb5\u7684\u603b\u548c\n\u8ba1\u7b97 OrderDetails \u8868\u4e2d\u5b57\u6bb5 Quantity \u7684\u603b\u548c\uff1a"),(0,T.kt)("p",null,"SELECT SUM(Quantity) AS TotalItemsOrdered FROM OrderDetails;\nTAN(x)\t\u6c42\u6b63\u5207\u503c(\u53c2\u6570\u662f\u5f27\u5ea6)\nSELECT TAN(1.75);  -- -5.52037992250933\nTRUNCATE(x,y)\t\u8fd4\u56de\u6570\u503c x \u4fdd\u7559\u5230\u5c0f\u6570\u70b9\u540e y \u4f4d\u7684\u503c\uff08\u4e0e ROUND \u6700\u5927\u7684\u533a\u522b\u662f\u4e0d\u4f1a\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff09\nSELECT TRUNCATE(1.23456,3) -- 1.234"),(0,T.kt)("h2",{id:"mysql-\u65e5\u671f\u51fd\u6570"},"MySQL \u65e5\u671f\u51fd\u6570"),(0,T.kt)("p",null,'\u51fd\u6570\u540d\t\u63cf\u8ff0\t\u5b9e\u4f8b\nADDDATE(d,n)\t\u8ba1\u7b97\u8d77\u59cb\u65e5\u671f d \u52a0\u4e0a n \u5929\u7684\u65e5\u671f\nSELECT ADDDATE("2017-06-15", INTERVAL 10 DAY);\n->2017-06-25\nADDTIME(t,n)\tn \u662f\u4e00\u4e2a\u65f6\u95f4\u8868\u8fbe\u5f0f\uff0c\u65f6\u95f4 t \u52a0\u4e0a\u65f6\u95f4\u8868\u8fbe\u5f0f n\n\u52a0 5 \u79d2\uff1a'),(0,T.kt)("p",null,"SELECT ADDTIME('2011-11-11 11:11:11', 5);\n->2011-11-11 11:11:16 (\u79d2)\n\u6dfb\u52a0 2 \u5c0f\u65f6, 10 \u5206\u949f, 5 \u79d2:"),(0,T.kt)("p",null,'SELECT ADDTIME("2020-06-15 09:34:21", "2:10:5");\n-> 2020-06-15 11:44:26\nCURDATE()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\nSELECT CURDATE();\n-> 2018-09-19\nCURRENT_DATE()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\nSELECT CURRENT_DATE();\n-> 2018-09-19\nCURRENT_TIME\t\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\nSELECT CURRENT_TIME();\n-> 19:59:02\nCURRENT_TIMESTAMP()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\nSELECT CURRENT_TIMESTAMP()\n-> 2018-09-19 20:57:43\nCURTIME()\t\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\nSELECT CURTIME();\n-> 19:59:02\nDATE()\t\u4ece\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0f\u4e2d\u63d0\u53d6\u65e5\u671f\u503c\nSELECT DATE("2017-06-15");',(0,T.kt)("br",{parentName:"p"}),"\n","-> 2017-06-15\nDATEDIFF(d1,d2)\t\u8ba1\u7b97\u65e5\u671f d1->d2 \u4e4b\u95f4\u76f8\u9694\u7684\u5929\u6570\nSELECT DATEDIFF('2001-01-01','2001-02-02')\n-> -32\nDATE_ADD(d\uff0cINTERVAL expr type)\t\u8ba1\u7b97\u8d77\u59cb\u65e5\u671f d \u52a0\u4e0a\u4e00\u4e2a\u65f6\u95f4\u6bb5\u540e\u7684\u65e5\u671f\uff0ctype \u503c\u53ef\u4ee5\u662f\uff1a\nMICROSECOND\nSECOND\nMINUTE\nHOUR\nDAY\nWEEK\nMONTH\nQUARTER\nYEAR\nSECOND_MICROSECOND\nMINUTE_MICROSECOND\nMINUTE_SECOND\nHOUR_MICROSECOND\nHOUR_SECOND\nHOUR_MINUTE\nDAY_MICROSECOND\nDAY_SECOND\nDAY_MINUTE\nDAY_HOUR\nYEAR_MONTH\nSELECT DATE_ADD(\"2017-06-15\", INTERVAL 10 DAY);",(0,T.kt)("br",{parentName:"p"}),"\n","-> 2017-06-25"),(0,T.kt)("p",null,'SELECT DATE_ADD("2017-06-15 09:34:21", INTERVAL 15 MINUTE);\n-> 2017-06-15 09:49:21'),(0,T.kt)("p",null,'SELECT DATE_ADD("2017-06-15 09:34:21", INTERVAL -3 HOUR);\n->2017-06-15 06:34:21'),(0,T.kt)("p",null,"SELECT DATE_ADD(\"2017-06-15 09:34:21\", INTERVAL -3 MONTH);\n->2017-04-15\nDATE_FORMAT(d,f)\t\u6309\u8868\u8fbe\u5f0f f\u7684\u8981\u6c42\u663e\u793a\u65e5\u671f d\nSELECT DATE_FORMAT('2011-11-11 11:11:11','%Y-%m-%d %r')\n-> 2011-11-11 11:11:11 AM\nDATE_SUB(date,INTERVAL expr type)\t\u51fd\u6570\u4ece\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u3002\nOrders \u8868\u4e2d OrderDate \u5b57\u6bb5\u51cf\u53bb 2 \u5929\uff1a"),(0,T.kt)("p",null,'SELECT OrderId,DATE_SUB(OrderDate,INTERVAL 2 DAY) AS OrderPayDate\nFROM Orders\nDAY(d)\t\u8fd4\u56de\u65e5\u671f\u503c d \u7684\u65e5\u671f\u90e8\u5206\nSELECT DAY("2017-06-15");',(0,T.kt)("br",{parentName:"p"}),"\n","-> 15\nDAYNAME(d)\t\u8fd4\u56de\u65e5\u671f d \u662f\u661f\u671f\u51e0\uff0c\u5982 Monday,Tuesday\nSELECT DAYNAME('2011-11-11 11:11:11')\n->Friday\nDAYOFMONTH(d)\t\u8ba1\u7b97\u65e5\u671f d \u662f\u672c\u6708\u7684\u7b2c\u51e0\u5929\nSELECT DAYOFMONTH('2011-11-11 11:11:11')\n->11\nDAYOFWEEK(d)\t\u65e5\u671f d \u4eca\u5929\u662f\u661f\u671f\u51e0\uff0c1 \u661f\u671f\u65e5\uff0c2 \u661f\u671f\u4e00\uff0c\u4ee5\u6b64\u7c7b\u63a8\nSELECT DAYOFWEEK('2011-11-11 11:11:11')\n->6\nDAYOFYEAR(d)\t\u8ba1\u7b97\u65e5\u671f d \u662f\u672c\u5e74\u7684\u7b2c\u51e0\u5929\nSELECT DAYOFYEAR('2011-11-11 11:11:11')\n->315\nEXTRACT(type FROM d)\t\u4ece\u65e5\u671f d \u4e2d\u83b7\u53d6\u6307\u5b9a\u7684\u503c\uff0ctype \u6307\u5b9a\u8fd4\u56de\u7684\u503c\u3002\ntype\u53ef\u53d6\u503c\u4e3a\uff1a\nMICROSECOND\nSECOND\nMINUTE\nHOUR\nDAY\nWEEK\nMONTH\nQUARTER\nYEAR\nSECOND_MICROSECOND\nMINUTE_MICROSECOND\nMINUTE_SECOND\nHOUR_MICROSECOND\nHOUR_SECOND\nHOUR_MINUTE\nDAY_MICROSECOND\nDAY_SECOND\nDAY_MINUTE\nDAY_HOUR\nYEAR_MONTH\nSELECT EXTRACT(MINUTE FROM '2011-11-11 11:11:11')\n-> 11\nFROM_DAYS(n)\t\u8ba1\u7b97\u4ece 0000 \u5e74 1 \u6708 1 \u65e5\u5f00\u59cb n \u5929\u540e\u7684\u65e5\u671f\nSELECT FROM_DAYS(1111)\n-> 0003-01-16\nHOUR(t)\t\u8fd4\u56de t \u4e2d\u7684\u5c0f\u65f6\u503c\nSELECT HOUR('1:2:3')\n-> 1\nLAST_DAY(d)\t\u8fd4\u56de\u7ed9\u7ed9\u5b9a\u65e5\u671f\u7684\u90a3\u4e00\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\nSELECT LAST_DAY(\"2017-06-20\");\n-> 2017-06-30\nLOCALTIME()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\nSELECT LOCALTIME()\n-> 2018-09-19 20:57:43\nLOCALTIMESTAMP()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\nSELECT LOCALTIMESTAMP()\n-> 2018-09-19 20:57:43\nMAKEDATE(year, day-of-year)\t\u57fa\u4e8e\u7ed9\u5b9a\u53c2\u6570\u5e74\u4efd year \u548c\u6240\u5728\u5e74\u4e2d\u7684\u5929\u6570\u5e8f\u53f7 day-of-year \u8fd4\u56de\u4e00\u4e2a\u65e5\u671f\nSELECT MAKEDATE(2017, 3);\n-> 2017-01-03\nMAKETIME(hour, minute, second)\t\u7ec4\u5408\u65f6\u95f4\uff0c\u53c2\u6570\u5206\u522b\u4e3a\u5c0f\u65f6\u3001\u5206\u949f\u3001\u79d2\nSELECT MAKETIME(11, 35, 4);\n-> 11:35:04\nMICROSECOND(date)\t\u8fd4\u56de\u65e5\u671f\u53c2\u6570\u6240\u5bf9\u5e94\u7684\u5fae\u79d2\u6570\nSELECT MICROSECOND(\"2017-06-20 09:34:00.000023\");\n-> 23\nMINUTE(t)\t\u8fd4\u56de t \u4e2d\u7684\u5206\u949f\u503c\nSELECT MINUTE('1:2:3')\n-> 2\nMONTHNAME(d)\t\u8fd4\u56de\u65e5\u671f\u5f53\u4e2d\u7684\u6708\u4efd\u540d\u79f0\uff0c\u5982 November\nSELECT MONTHNAME('2011-11-11 11:11:11')\n-> November\nMONTH(d)\t\u8fd4\u56de\u65e5\u671fd\u4e2d\u7684\u6708\u4efd\u503c\uff0c1 \u5230 12\nSELECT MONTH('2011-11-11 11:11:11')\n->11\nNOW()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\nSELECT NOW()\n-> 2018-09-19 20:57:43\nPERIOD_ADD(period, number)\t\u4e3a \u5e74-\u6708 \u7ec4\u5408\u65e5\u671f\u6dfb\u52a0\u4e00\u4e2a\u65f6\u6bb5\nSELECT PERIOD_ADD(201703, 5);",(0,T.kt)("br",{parentName:"p"}),"\n","-> 201708\nPERIOD_DIFF(period1, period2)\t\u8fd4\u56de\u4e24\u4e2a\u65f6\u6bb5\u4e4b\u95f4\u7684\u6708\u4efd\u5dee\u503c\nSELECT PERIOD_DIFF(201710, 201703);\n-> 7\nQUARTER(d)\t\u8fd4\u56de\u65e5\u671fd\u662f\u7b2c\u51e0\u5b63\u8282\uff0c\u8fd4\u56de 1 \u5230 4\nSELECT QUARTER('2011-11-11 11:11:11')\n-> 4\nSECOND(t)\t\u8fd4\u56de t \u4e2d\u7684\u79d2\u949f\u503c\nSELECT SECOND('1:2:3')\n-> 3\nSEC_TO_TIME(s)\t\u5c06\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4 s \u8f6c\u6362\u4e3a\u65f6\u5206\u79d2\u7684\u683c\u5f0f\nSELECT SEC_TO_TIME(4320)\n-> 01:12:00\nSTR_TO_DATE(string, format_mask)\t\u5c06\u5b57\u7b26\u4e32\u8f6c\u53d8\u4e3a\u65e5\u671f\nSELECT STR_TO_DATE(\"August 10 2017\", \"%M %d %Y\");\n-> 2017-08-10\nSUBDATE(d,n)\t\u65e5\u671f d \u51cf\u53bb n \u5929\u540e\u7684\u65e5\u671f\nSELECT SUBDATE('2011-11-11 11:11:11', 1)\n->2011-11-10 11:11:11 (\u9ed8\u8ba4\u662f\u5929)\nSUBTIME(t,n)\t\u65f6\u95f4 t \u51cf\u53bb n \u79d2\u7684\u65f6\u95f4\nSELECT SUBTIME('2011-11-11 11:11:11', 5)\n->2011-11-11 11:11:06 (\u79d2)\nSYSDATE()\t\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\nSELECT SYSDATE()\n-> 2018-09-19 20:57:43\nTIME(expression)\t\u63d0\u53d6\u4f20\u5165\u8868\u8fbe\u5f0f\u7684\u65f6\u95f4\u90e8\u5206\nSELECT TIME(\"19:30:10\");\n-> 19:30:10\nTIME_FORMAT(t,f)\t\u6309\u8868\u8fbe\u5f0f f \u7684\u8981\u6c42\u663e\u793a\u65f6\u95f4 t\nSELECT TIME_FORMAT('11:11:11','%r')\n11:11:11 AM\nTIME_TO_SEC(t)\t\u5c06\u65f6\u95f4 t \u8f6c\u6362\u4e3a\u79d2\nSELECT TIME_TO_SEC('1:12:00')\n-> 4320\nTIMEDIFF(time1, time2)\t\u8ba1\u7b97\u65f6\u95f4\u5dee\u503c\nmysql> SELECT TIMEDIFF(\"13:10:11\", \"13:10:10\");\n-> 00:00:01\nmysql> SELECT TIMEDIFF('2000:01:01 00:00:00',\n->                 '2000:01:01 00:00:00.000001');\n-> '-00:00:00.000001'\nmysql> SELECT TIMEDIFF('2008-12-31 23:59:59.000001',\n->                 '2008-12-30 01:01:01.000002');\n-> '46:58:57.999999'\nTIMESTAMP(expression, interval)\t\u5355\u4e2a\u53c2\u6570\u65f6\uff0c\u51fd\u6570\u8fd4\u56de\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0f\uff1b\u67092\u4e2a\u53c2\u6570\u65f6\uff0c\u5c06\u53c2\u6570\u52a0\u548c\nmysql> SELECT TIMESTAMP(\"2017-07-23\",  \"13:10:11\");\n-> 2017-07-23 13:10:11\nmysql> SELECT TIMESTAMP('2003-12-31');\n-> '2003-12-31 00:00:00'\nmysql> SELECT TIMESTAMP('2003-12-31 12:00:00','12:00:00');\n-> '2004-01-01 00:00:00'\nTIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)\t\u8ba1\u7b97\u65f6\u95f4\u5dee\uff0c\u8fd4\u56de datetime_expr2 \u2212 datetime_expr1 \u7684\u65f6\u95f4\u5dee\nmysql> SELECT TIMESTAMPDIFF(DAY,'2003-02-01','2003-05-01');   // \u8ba1\u7b97\u4e24\u4e2a\u65f6\u95f4\u76f8\u9694\u591a\u5c11\u5929\n-> 89\nmysql> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');   // \u8ba1\u7b97\u4e24\u4e2a\u65f6\u95f4\u76f8\u9694\u591a\u5c11\u6708\n-> 3\nmysql> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');    // \u8ba1\u7b97\u4e24\u4e2a\u65f6\u95f4\u76f8\u9694\u591a\u5c11\u5e74\n-> -1\nmysql> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');  // \u8ba1\u7b97\u4e24\u4e2a\u65f6\u95f4\u76f8\u9694\u591a\u5c11\u5206\u949f\n-> 128885\nTO_DAYS(d)\t\u8ba1\u7b97\u65e5\u671f d \u8ddd\u79bb 0000 \u5e74 1 \u6708 1 \u65e5\u7684\u5929\u6570\nSELECT TO_DAYS('0001-01-01 01:01:01')\n-> 366\nWEEK(d)\t\u8ba1\u7b97\u65e5\u671f d \u662f\u672c\u5e74\u7684\u7b2c\u51e0\u4e2a\u661f\u671f\uff0c\u8303\u56f4\u662f 0 \u5230 53\nSELECT WEEK('2011-11-11 11:11:11')\n-> 45\nWEEKDAY(d)\t\u65e5\u671f d \u662f\u661f\u671f\u51e0\uff0c0 \u8868\u793a\u661f\u671f\u4e00\uff0c1 \u8868\u793a\u661f\u671f\u4e8c\nSELECT WEEKDAY(\"2017-06-15\");\n-> 3\nWEEKOFYEAR(d)\t\u8ba1\u7b97\u65e5\u671f d \u662f\u672c\u5e74\u7684\u7b2c\u51e0\u4e2a\u661f\u671f\uff0c\u8303\u56f4\u662f 0 \u5230 53\nSELECT WEEKOFYEAR('2011-11-11 11:11:11')\n-> 45\nYEAR(d)\t\u8fd4\u56de\u5e74\u4efd\nSELECT YEAR(\"2017-06-15\");\n-> 2017\nYEARWEEK(date, mode)\t\u8fd4\u56de\u5e74\u4efd\u53ca\u7b2c\u51e0\u5468\uff080\u523053\uff09\uff0cmode \u4e2d 0 \u8868\u793a\u5468\u5929\uff0c1\u8868\u793a\u5468\u4e00\uff0c\u4ee5\u6b64\u7c7b\u63a8\nSELECT YEARWEEK(\"2017-06-15\");\n-> 201724"),(0,T.kt)("h2",{id:"mysql-\u9ad8\u7ea7\u51fd\u6570"},"MySQL \u9ad8\u7ea7\u51fd\u6570"),(0,T.kt)("p",null,"\u51fd\u6570\u540d\t\u63cf\u8ff0\t\u5b9e\u4f8b\nBIN(x)\t\u8fd4\u56de x \u7684\u4e8c\u8fdb\u5236\u7f16\u7801\n15 \u7684 2 \u8fdb\u5236\u7f16\u7801:"),(0,T.kt)("p",null,"SELECT BIN(15); -- 1111\nBINARY(s)\t\u5c06\u5b57\u7b26\u4e32 s \u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\nSELECT BINARY \"RUNOOB\";\n-> RUNOOB\nCASE expression\nWHEN condition1 THEN result1\nWHEN condition2 THEN result2\n...\nWHEN conditionN THEN resultN\nELSE result\nEND\tCASE \u8868\u793a\u51fd\u6570\u5f00\u59cb\uff0cEND \u8868\u793a\u51fd\u6570\u7ed3\u675f\u3002\u5982\u679c condition1 \u6210\u7acb\uff0c\u5219\u8fd4\u56de result1, \u5982\u679c condition2 \u6210\u7acb\uff0c\u5219\u8fd4\u56de result2\uff0c\u5f53\u5168\u90e8\u4e0d\u6210\u7acb\u5219\u8fd4\u56de result\uff0c\u800c\u5f53\u6709\u4e00\u4e2a\u6210\u7acb\u4e4b\u540e\uff0c\u540e\u9762\u7684\u5c31\u4e0d\u6267\u884c\u4e86\u3002\nSELECT CASE\n\u3000\u3000WHEN 1 > 0\n\u3000\u3000THEN '1 > 0'\n\u3000\u3000WHEN 2 > 0\n\u3000\u3000THEN '2 > 0'\n\u3000\u3000ELSE '3 > 0'\n\u3000\u3000END\n->1 > 0\nCAST(x AS type)\t\u8f6c\u6362\u6570\u636e\u7c7b\u578b\n\u5b57\u7b26\u4e32\u65e5\u671f\u8f6c\u6362\u4e3a\u65e5\u671f\uff1a"),(0,T.kt)("p",null,"SELECT CAST(\"2017-08-29\" AS DATE);\n-> 2017-08-29\nCOALESCE(expr1, expr2, ...., expr_n)\t\u8fd4\u56de\u53c2\u6570\u4e2d\u7684\u7b2c\u4e00\u4e2a\u975e\u7a7a\u8868\u8fbe\u5f0f\uff08\u4ece\u5de6\u5411\u53f3\uff09\nSELECT COALESCE(NULL, NULL, NULL, 'runoob.com', NULL, 'google.com');\n-> runoob.com\nCONNECTION_ID()\t\u8fd4\u56de\u552f\u4e00\u7684\u8fde\u63a5 ID\nSELECT CONNECTION_ID();\n-> 4292835\nCONV(x,f1,f2)\t\u8fd4\u56de f1 \u8fdb\u5236\u6570\u53d8\u6210 f2 \u8fdb\u5236\u6570\nSELECT CONV(15, 10, 2);\n-> 1111\nCONVERT(s USING cs)\t\u51fd\u6570\u5c06\u5b57\u7b26\u4e32 s \u7684\u5b57\u7b26\u96c6\u53d8\u6210 cs\nSELECT CHARSET('ABC')\n->utf-8    "),(0,T.kt)("p",null,"SELECT CHARSET(CONVERT('ABC' USING gbk))\n->gbk\nCURRENT_USER()\t\u8fd4\u56de\u5f53\u524d\u7528\u6237\nSELECT CURRENT_USER();\n-> guest@%\nDATABASE()\t\u8fd4\u56de\u5f53\u524d\u6570\u636e\u5e93\u540d\nSELECT DATABASE();",(0,T.kt)("br",{parentName:"p"}),"\n","-> runoob\nIF(expr,v1,v2)\t\u5982\u679c\u8868\u8fbe\u5f0f expr \u6210\u7acb\uff0c\u8fd4\u56de\u7ed3\u679c v1\uff1b\u5426\u5219\uff0c\u8fd4\u56de\u7ed3\u679c v2\u3002\nSELECT IF(1 > 0,'\u6b63\u786e','\u9519\u8bef')",(0,T.kt)("br",{parentName:"p"}),"\n","->\u6b63\u786e\nIFNULL(v1,v2)\t\u5982\u679c v1 \u7684\u503c\u4e0d\u4e3a NULL\uff0c\u5219\u8fd4\u56de v1\uff0c\u5426\u5219\u8fd4\u56de v2\u3002\nSELECT IFNULL(null,'Hello Word')\n->Hello Word\nISNULL(expression)\t\u5224\u65ad\u8868\u8fbe\u5f0f\u662f\u5426\u4e3a NULL\nSELECT ISNULL(NULL);\n->1\nLAST_INSERT_ID()\t\u8fd4\u56de\u6700\u8fd1\u751f\u6210\u7684 AUTO_INCREMENT \u503c\nSELECT LAST_INSERT_ID();\n->6\nNULLIF(expr1, expr2)\t\u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u5b57\u7b26\u4e32 expr1 \u4e0e expr2 \u76f8\u7b49 \u8fd4\u56de NULL\uff0c\u5426\u5219\u8fd4\u56de expr1\nSELECT NULLIF(25, 25);\n->\nSESSION_USER()\t\u8fd4\u56de\u5f53\u524d\u7528\u6237\nSELECT SESSION_USER();\n-> guest@%\nSYSTEM_USER()\t\u8fd4\u56de\u5f53\u524d\u7528\u6237\nSELECT SYSTEM_USER();\n-> guest@%\nUSER()\t\u8fd4\u56de\u5f53\u524d\u7528\u6237\nSELECT USER();\n-> guest@%\nVERSION()\t\u8fd4\u56de\u6570\u636e\u5e93\u7684\u7248\u672c\u53f7\nSELECT VERSION()\n-> 5.6.34"))}N.isMDXComponent=!0}}]);