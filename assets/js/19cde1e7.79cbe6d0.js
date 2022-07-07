"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,d=c["".concat(a,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(d,i(i({ref:t},y),{},{components:r})):n.createElement(d,i({ref:t},y))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=c;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={id:"mysql-update-query",title:"MySQL UPDATE \u66f4\u65b0",sidebar_position:15},i="MySQL UPDATE \u66f4\u65b0",u={unversionedId:"mysql/mysql-update-query",id:"mysql/mysql-update-query",title:"MySQL UPDATE \u66f4\u65b0",description:"\u5982\u679c\u6211\u4eec\u9700\u8981\u4fee\u6539\u6216\u66f4\u65b0 MySQL \u4e2d\u7684\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 SQL UPDATE \u547d\u4ee4\u6765\u64cd\u4f5c\u3002",source:"@site/docs/mysql/mysql-update-query.md",sourceDirName:"mysql",slug:"/mysql/mysql-update-query",permalink:"/mysql/mysql-update-query",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"mysql-update-query",title:"MySQL UPDATE \u66f4\u65b0",sidebar_position:15},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL WHERE \u5b50\u53e5",permalink:"/mysql/mysql-where-clause"},next:{title:"MySQL DELETE \u8bed\u53e5",permalink:"/mysql/mysql-delete-query"}},a={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3}],y={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-update-\u66f4\u65b0"},"MySQL UPDATE \u66f4\u65b0"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u4fee\u6539\u6216\u66f4\u65b0 MySQL \u4e2d\u7684\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 SQL UPDATE \u547d\u4ee4\u6765\u64cd\u4f5c\u3002"),(0,o.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f UPDATE \u547d\u4ee4\u4fee\u6539 MySQL \u6570\u636e\u8868\u6570\u636e\u7684\u901a\u7528 SQL \u8bed\u6cd5\uff1a"),(0,o.kt)("p",null,"UPDATE table_name SET field1=new-value1, field2=new-value2\n","[WHERE Clause]","\n\u4f60\u53ef\u4ee5\u540c\u65f6\u66f4\u65b0\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u6bb5\u3002\n\u4f60\u53ef\u4ee5\u5728 WHERE \u5b50\u53e5\u4e2d\u6307\u5b9a\u4efb\u4f55\u6761\u4ef6\u3002\n\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u5355\u72ec\u8868\u4e2d\u540c\u65f6\u66f4\u65b0\u6570\u636e\u3002\n\u5f53\u4f60\u9700\u8981\u66f4\u65b0\u6570\u636e\u8868\u4e2d\u6307\u5b9a\u884c\u7684\u6570\u636e\u65f6 WHERE \u5b50\u53e5\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7b26\u66f4\u65b0\u6570\u636e\n\u4ee5\u4e0b\u6211\u4eec\u5c06\u5728 SQL UPDATE \u547d\u4ee4\u4f7f\u7528 WHERE \u5b50\u53e5\u6765\u66f4\u65b0 runoob_tbl \u8868\u4e2d\u6307\u5b9a\u7684\u6570\u636e\uff1a"),(0,o.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u5c06\u66f4\u65b0\u6570\u636e\u8868\u4e2d runoob_id \u4e3a 3 \u7684 runoob_title \u5b57\u6bb5\u503c\uff1a"),(0,o.kt)("p",null,"SQL UPDATE \u8bed\u53e5\uff1a\nmysql> UPDATE runoob_tbl SET runoob_title='\u5b66\u4e60 C++' WHERE runoob_id=3;\nQuery OK, 1 rows affected (0.01 sec)"),(0,o.kt)("p",null,"mysql> SELECT * from runoob_tbl WHERE runoob_id=3;\n+-----------+--------------+---------------+-----------------+\n| runoob_id | runoob_title | runoob_author | submission_date |\n+-----------+--------------+---------------+-----------------+\n| 3         | \u5b66\u4e60 C++   | RUNOOB.COM    | 2016-05-06      |\n+-----------+--------------+---------------+-----------------+\n1 rows in set (0.01 sec)\n\u4ece\u7ed3\u679c\u4e0a\u770b\uff0crunoob_id \u4e3a 3 \u7684 runoob_title \u5df2\u88ab\u4fee\u6539\u3002"))}p.isMDXComponent=!0}}]);