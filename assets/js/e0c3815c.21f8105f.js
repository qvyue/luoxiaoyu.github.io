"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(b,s(s({ref:t},y),{},{components:n})):r.createElement(b,s({ref:t},y))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={id:"mysql-insert-query",title:"MySQL \u63d2\u5165\u6570\u636e",sidebar_position:12},s="MySQL \u63d2\u5165\u6570\u636e",i={unversionedId:"mysql/mysql-insert-query",id:"mysql/mysql-insert-query",title:"MySQL \u63d2\u5165\u6570\u636e",description:"MySQL \u8868\u4e2d\u4f7f\u7528 INSERT INTO SQL\u8bed\u53e5\u6765\u63d2\u5165\u6570\u636e\u3002",source:"@site/docs/mysql/mysql-insert-query.md",sourceDirName:"mysql",slug:"/mysql/mysql-insert-query",permalink:"/mysql/mysql-insert-query",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"mysql-insert-query",title:"MySQL \u63d2\u5165\u6570\u636e",sidebar_position:12},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u5220\u9664\u6570\u636e\u8868",permalink:"/mysql/mysql-drop-tables"},next:{title:"MySQL \u67e5\u8be2\u6570\u636e",permalink:"/mysql/mysql-select-query"}},a={},u=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7a97\u53e3\u63d2\u5165\u6570\u636e",id:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7a97\u53e3\u63d2\u5165\u6570\u636e",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3}],y={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-\u63d2\u5165\u6570\u636e"},"MySQL \u63d2\u5165\u6570\u636e"),(0,o.kt)("p",null,"MySQL \u8868\u4e2d\u4f7f\u7528 INSERT INTO SQL\u8bed\u53e5\u6765\u63d2\u5165\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 mysql> \u547d\u4ee4\u63d0\u793a\u7a97\u53e3\u4e2d\u5411\u6570\u636e\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u6216\u8005\u901a\u8fc7PHP\u811a\u672c\u6765\u63d2\u5165\u6570\u636e\u3002"),(0,o.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5411MySQL\u6570\u636e\u8868\u63d2\u5165\u6570\u636e\u901a\u7528\u7684 INSERT INTO SQL\u8bed\u6cd5\uff1a"),(0,o.kt)("p",null,'INSERT INTO table_name ( field1, field2,...fieldN )\nVALUES\n( value1, value2,...valueN );\n\u5982\u679c\u6570\u636e\u662f\u5b57\u7b26\u578b\uff0c\u5fc5\u987b\u4f7f\u7528\u5355\u5f15\u53f7\u6216\u8005\u53cc\u5f15\u53f7\uff0c\u5982\uff1a"value"\u3002'),(0,o.kt)("h2",{id:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7a97\u53e3\u63d2\u5165\u6570\u636e"},"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7a97\u53e3\u63d2\u5165\u6570\u636e"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6211\u4eec\u5c06\u4f7f\u7528 SQL INSERT INTO \u8bed\u53e5\u5411 MySQL \u6570\u636e\u8868 runoob_tbl \u63d2\u5165\u6570\u636e"),(0,o.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u4e2d\u6211\u4eec\u5c06\u5411 runoob_tbl \u8868\u63d2\u5165\u4e09\u6761\u6570\u636e:"),(0,o.kt)("p",null,"root@host# mysql -u root -p password;\nEnter password:",(0,o.kt)("strong",{parentName:"p"},"***"),'\nmysql> use RUNOOB;\nDatabase changed\nmysql> INSERT INTO runoob_tbl\n-> (runoob_title, runoob_author, submission_date)\n-> VALUES\n-> ("\u5b66\u4e60 PHP", "\u83dc\u9e1f\u6559\u7a0b", NOW());\nQuery OK, 1 rows affected, 1 warnings (0.01 sec)\nmysql> INSERT INTO runoob_tbl\n-> (runoob_title, runoob_author, submission_date)\n-> VALUES\n-> ("\u5b66\u4e60 MySQL", "\u83dc\u9e1f\u6559\u7a0b", NOW());\nQuery OK, 1 rows affected, 1 warnings (0.01 sec)\nmysql> INSERT INTO runoob_tbl\n-> (runoob_title, runoob_author, submission_date)\n-> VALUES\n-> ("JAVA \u6559\u7a0b", "RUNOOB.COM", \'2016-05-06\');\nQuery OK, 1 rows affected (0.00 sec)\nmysql>\n\u6ce8\u610f\uff1a \u4f7f\u7528\u7bad\u5934\u6807\u8bb0 -> \u4e0d\u662f SQL \u8bed\u53e5\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u4ec5\u4ec5\u8868\u793a\u4e00\u4e2a\u65b0\u884c\uff0c\u5982\u679c\u4e00\u6761SQL\u8bed\u53e5\u592a\u957f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u56de\u8f66\u952e\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u884c\u6765\u7f16\u5199 SQL \u8bed\u53e5\uff0cSQL \u8bed\u53e5\u7684\u547d\u4ee4\u7ed3\u675f\u7b26\u4e3a\u5206\u53f7 ;\u3002'),(0,o.kt)("p",null,"\u5728\u4ee5\u4e0a\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u63d0\u4f9b runoob_id \u7684\u6570\u636e\uff0c\u56e0\u4e3a\u8be5\u5b57\u6bb5\u6211\u4eec\u5728\u521b\u5efa\u8868\u7684\u65f6\u5019\u5df2\u7ecf\u8bbe\u7f6e\u5b83\u4e3a AUTO_INCREMENT(\u81ea\u52a8\u589e\u52a0) \u5c5e\u6027\u3002 \u6240\u4ee5\uff0c\u8be5\u5b57\u6bb5\u4f1a\u81ea\u52a8\u9012\u589e\u800c\u4e0d\u9700\u8981\u6211\u4eec\u53bb\u8bbe\u7f6e\u3002\u5b9e\u4f8b\u4e2d NOW() \u662f\u4e00\u4e2a MySQL \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u65e5\u671f\u548c\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u67e5\u770b\u6570\u636e\u8868\u6570\u636e\uff1a"),(0,o.kt)("p",null,"\u8bfb\u53d6\u6570\u636e\u8868\uff1a\nselect * from runoob_tbl;\n\u8f93\u51fa\u7ed3\u679c\uff1a"))}c.isMDXComponent=!0}}]);