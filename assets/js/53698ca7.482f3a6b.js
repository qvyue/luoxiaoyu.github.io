"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),E=s(n),y=l,m=E["".concat(u,".").concat(y)]||E[y]||p[y]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=E;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={id:"mysql-like-clause",title:"MySQL LIKE \u5b50\u53e5",sidebar_position:17},i="MySQL LIKE \u5b50\u53e5",a={unversionedId:"mysql/mysql-like-clause",id:"mysql/mysql-like-clause",title:"MySQL LIKE \u5b50\u53e5",description:"\u6211\u4eec\u77e5\u9053\u5728 MySQL \u4e2d\u4f7f\u7528 SQL SELECT \u547d\u4ee4\u6765\u8bfb\u53d6\u6570\u636e\uff0c \u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u5728 SELECT \u8bed\u53e5\u4e2d\u4f7f\u7528 WHERE \u5b50\u53e5\u6765\u83b7\u53d6\u6307\u5b9a\u7684\u8bb0\u5f55\u3002",source:"@site/docs/mysql/mysql-like-clause.md",sourceDirName:"mysql",slug:"/mysql/mysql-like-clause",permalink:"/mysql/mysql-like-clause",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{id:"mysql-like-clause",title:"MySQL LIKE \u5b50\u53e5",sidebar_position:17},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL DELETE \u8bed\u53e5",permalink:"/mysql/mysql-delete-query"},next:{title:"MySQL UNION \u64cd\u4f5c\u7b26",permalink:"/mysql/mysql-union-operation"}},u={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\u4f7f\u7528 LIKE \u5b50\u53e5",id:"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\u4f7f\u7528-like-\u5b50\u53e5",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-like-\u5b50\u53e5"},"MySQL LIKE \u5b50\u53e5"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u5728 MySQL \u4e2d\u4f7f\u7528 SQL SELECT \u547d\u4ee4\u6765\u8bfb\u53d6\u6570\u636e\uff0c \u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u5728 SELECT \u8bed\u53e5\u4e2d\u4f7f\u7528 WHERE \u5b50\u53e5\u6765\u83b7\u53d6\u6307\u5b9a\u7684\u8bb0\u5f55\u3002"),(0,l.kt)("p",null,"WHERE \u5b50\u53e5\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7b49\u53f7 = \u6765\u8bbe\u5b9a\u83b7\u53d6\u6570\u636e\u7684\u6761\u4ef6\uff0c\u5982 \"runoob_author = 'RUNOOB.COM'\"\u3002"),(0,l.kt)("p",null,'\u4f46\u662f\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u83b7\u53d6 runoob_author \u5b57\u6bb5\u542b\u6709 "COM" \u5b57\u7b26\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u8fd9\u65f6\u6211\u4eec\u5c31\u9700\u8981\u5728 WHERE \u5b50\u53e5\u4e2d\u4f7f\u7528 SQL LIKE \u5b50\u53e5\u3002'),(0,l.kt)("p",null,"SQL LIKE \u5b50\u53e5\u4e2d\u4f7f\u7528\u767e\u5206\u53f7 %\u5b57\u7b26\u6765\u8868\u793a\u4efb\u610f\u5b57\u7b26\uff0c\u7c7b\u4f3c\u4e8eUNIX\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u661f\u53f7 *\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u767e\u5206\u53f7 %, LIKE \u5b50\u53e5\u4e0e\u7b49\u53f7 = \u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f SQL SELECT \u8bed\u53e5\u4f7f\u7528 LIKE \u5b50\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u901a\u7528\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"SELECT field1, field2,...fieldN\nFROM table_name\nWHERE field1 LIKE condition1 [AND ","[OR]","] filed2 = 'somevalue'\n\u4f60\u53ef\u4ee5\u5728 WHERE \u5b50\u53e5\u4e2d\u6307\u5b9a\u4efb\u4f55\u6761\u4ef6\u3002\n\u4f60\u53ef\u4ee5\u5728 WHERE \u5b50\u53e5\u4e2d\u4f7f\u7528LIKE\u5b50\u53e5\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528LIKE\u5b50\u53e5\u4ee3\u66ff\u7b49\u53f7 =\u3002\nLIKE \u901a\u5e38\u4e0e % \u4e00\u540c\u4f7f\u7528\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u5143\u5b57\u7b26\u7684\u641c\u7d22\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528 AND \u6216\u8005 OR \u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u6761\u4ef6\u3002\n\u4f60\u53ef\u4ee5\u5728 DELETE \u6216 UPDATE \u547d\u4ee4\u4e2d\u4f7f\u7528 WHERE...LIKE \u5b50\u53e5\u6765\u6307\u5b9a\u6761\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\u4f7f\u7528-like-\u5b50\u53e5"},"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\u4f7f\u7528 LIKE \u5b50\u53e5"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6211\u4eec\u5c06\u5728 SQL SELECT \u547d\u4ee4\u4e2d\u4f7f\u7528 WHERE...LIKE \u5b50\u53e5\u6765\u4eceMySQL\u6570\u636e\u8868 runoob_tbl \u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u4eec\u5c06 runoob_tbl \u8868\u4e2d\u83b7\u53d6 runoob_author \u5b57\u6bb5\u4e2d\u4ee5 COM \u4e3a\u7ed3\u5c3e\u7684\u7684\u6240\u6709\u8bb0\u5f55\uff1a"),(0,l.kt)("p",null,"SQL LIKE \u8bed\u53e5\uff1a\nmysql> use RUNOOB;\nDatabase changed\nmysql> SELECT * from runoob_tbl  WHERE runoob_author LIKE '%COM';\n+-----------+---------------+---------------+-----------------+\n| runoob_id | runoob_title  | runoob_author | submission_date |\n+-----------+---------------+---------------+-----------------+\n| 3         | \u5b66\u4e60 Java   | RUNOOB.COM    | 2015-05-01      |\n| 4         | \u5b66\u4e60 Python | RUNOOB.COM    | 2016-03-06      |\n+-----------+---------------+---------------+-----------------+\n2 rows in set (0.01 sec)"))}p.isMDXComponent=!0}}]);