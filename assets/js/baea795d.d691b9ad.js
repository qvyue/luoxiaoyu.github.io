"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"mysql-clone-tables",title:"MySQL \u590d\u5236\u8868",sidebar_position:27},l="MySQL \u590d\u5236\u8868",i={unversionedId:"mysql/mysql-clone-tables",id:"mysql/mysql-clone-tables",title:"MySQL \u590d\u5236\u8868",description:"\u5982\u679c\u6211\u4eec\u9700\u8981\u5b8c\u5168\u7684\u590d\u5236MySQL\u7684\u6570\u636e\u8868\uff0c\u5305\u62ec\u8868\u7684\u7ed3\u6784\uff0c\u7d22\u5f15\uff0c\u9ed8\u8ba4\u503c\u7b49\u3002 \u5982\u679c\u4ec5\u4ec5\u4f7f\u7528CREATE TABLE ... SELECT \u547d\u4ee4\uff0c\u662f\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002",source:"@site/docs/mysql/mysql-clone-tables.md",sourceDirName:"mysql",slug:"/mysql/mysql-clone-tables",permalink:"/mysql/mysql-clone-tables",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{id:"mysql-clone-tables",title:"MySQL \u590d\u5236\u8868",sidebar_position:27},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u4e34\u65f6\u8868",permalink:"/mysql/mysql-temporary-tables"},next:{title:"MySQL \u5143\u6570\u636e",permalink:"/mysql/mysql-database-info"}},s={},p=[{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3},{value:"\u6b65\u9aa4\u4e00\uff1a",id:"\u6b65\u9aa4\u4e00",level:4},{value:"\u6b65\u9aa4\u4e8c\uff1a",id:"\u6b65\u9aa4\u4e8c",level:4},{value:"\u6b65\u9aa4\u4e09\uff1a",id:"\u6b65\u9aa4\u4e09",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-\u590d\u5236\u8868"},"MySQL \u590d\u5236\u8868"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5b8c\u5168\u7684\u590d\u5236MySQL\u7684\u6570\u636e\u8868\uff0c\u5305\u62ec\u8868\u7684\u7ed3\u6784\uff0c\u7d22\u5f15\uff0c\u9ed8\u8ba4\u503c\u7b49\u3002 \u5982\u679c\u4ec5\u4ec5\u4f7f\u7528CREATE TABLE ... SELECT \u547d\u4ee4\uff0c\u662f\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5b8c\u6574\u7684\u590d\u5236MySQL\u6570\u636e\u8868\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u4f7f\u7528 SHOW CREATE TABLE \u547d\u4ee4\u83b7\u53d6\u521b\u5efa\u6570\u636e\u8868(CREATE TABLE) \u8bed\u53e5\uff0c\u8be5\u8bed\u53e5\u5305\u542b\u4e86\u539f\u6570\u636e\u8868\u7684\u7ed3\u6784\uff0c\u7d22\u5f15\u7b49\u3002\n\u590d\u5236\u4ee5\u4e0b\u547d\u4ee4\u663e\u793a\u7684SQL\u8bed\u53e5\uff0c\u4fee\u6539\u6570\u636e\u8868\u540d\uff0c\u5e76\u6267\u884cSQL\u8bed\u53e5\uff0c\u901a\u8fc7\u4ee5\u4e0a\u547d\u4ee4 \u5c06\u5b8c\u5168\u7684\u590d\u5236\u6570\u636e\u8868\u7ed3\u6784\u3002\n\u5982\u679c\u4f60\u60f3\u590d\u5236\u8868\u7684\u5185\u5bb9\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 INSERT INTO ... SELECT \u8bed\u53e5\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5c1d\u8bd5\u4ee5\u4e0b\u5b9e\u4f8b\u6765\u590d\u5236\u8868 runoob_tbl \u3002"),(0,o.kt)("h4",{id:"\u6b65\u9aa4\u4e00"},"\u6b65\u9aa4\u4e00\uff1a"),(0,o.kt)("p",null,"\u83b7\u53d6\u6570\u636e\u8868\u7684\u5b8c\u6574\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"mysql> SHOW CREATE TABLE runoob_tbl \\G;\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},"***"))))))," 1. row ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},(0,o.kt)("strong",{parentName:"strong"},"***")))))),"\nTable: runoob_tbl\nCreate Table: CREATE TABLE ",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_tbl")," (\n",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_id")," int(11) NOT NULL auto_increment,\n",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_title")," varchar(100) NOT NULL default '',\n",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_author")," varchar(40) NOT NULL default '',\n",(0,o.kt)("inlineCode",{parentName:"p"},"submission_date")," date default NULL,\nPRIMARY KEY  (",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_id"),"),\nUNIQUE KEY ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTHOR_INDEX")," (",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_author"),")\n) ENGINE=InnoDB\n1 row in set (0.00 sec)"),(0,o.kt)("p",null,"ERROR:\nNo query specified"),(0,o.kt)("h4",{id:"\u6b65\u9aa4\u4e8c"},"\u6b65\u9aa4\u4e8c\uff1a"),(0,o.kt)("p",null,"\u4fee\u6539SQL\u8bed\u53e5\u7684\u6570\u636e\u8868\u540d\uff0c\u5e76\u6267\u884cSQL\u8bed\u53e5\u3002"),(0,o.kt)("p",null,"mysql> CREATE TABLE ",(0,o.kt)("inlineCode",{parentName:"p"},"clone_tbl")," (\n-> ",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_id")," int(11) NOT NULL auto_increment,\n-> ",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_title")," varchar(100) NOT NULL default '',\n-> ",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_author")," varchar(40) NOT NULL default '',\n-> ",(0,o.kt)("inlineCode",{parentName:"p"},"submission_date")," date default NULL,\n-> PRIMARY KEY  (",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_id"),"),\n-> UNIQUE KEY ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTHOR_INDEX")," (",(0,o.kt)("inlineCode",{parentName:"p"},"runoob_author"),")\n-> ) ENGINE=InnoDB;\nQuery OK, 0 rows affected (1.80 sec)"),(0,o.kt)("h4",{id:"\u6b65\u9aa4\u4e09"},"\u6b65\u9aa4\u4e09\uff1a"),(0,o.kt)("p",null,"\u6267\u884c\u5b8c\u7b2c\u4e8c\u6b65\u9aa4\u540e\uff0c\u4f60\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u65b0\u7684\u514b\u9686\u8868 clone_tbl\u3002 \u5982\u679c\u4f60\u60f3\u62f7\u8d1d\u6570\u636e\u8868\u7684\u6570\u636e\u4f60\u53ef\u4ee5\u4f7f\u7528 INSERT INTO... SELECT \u8bed\u53e5\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"mysql> INSERT INTO clone_tbl (runoob_id,\n->                        runoob_title,\n->                        runoob_author,\n->                        submission_date)\n-> SELECT runoob_id,runoob_title,\n->        runoob_author,submission_date\n-> FROM runoob_tbl;\nQuery OK, 3 rows affected (0.07 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\u6267\u884c\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u4f1a\u5b8c\u6574\u7684\u590d\u5236\u8868\u7684\u5185\u5bb9\uff0c\u5305\u62ec\u8868\u7ed3\u6784\u53ca\u8868\u6570\u636e\u3002"),(0,o.kt)("p",null," MySQL \u4e34\u65f6\u8868MySQL \u5143\u6570\u636e\n2 \u7bc7\u7b14\u8bb0 \u5199\u7b14\u8bb0\nHouses Chan"),(0,o.kt)("p",null,"  149***",(0,o.kt)("a",{parentName:"p",href:"mailto:684@qq.com"},"684@qq.com")),(0,o.kt)("p",null,"231\n\u53e6\u4e00\u79cd\u5b8c\u6574\u590d\u5236\u8868\u7684\u65b9\u6cd5:"),(0,o.kt)("p",null,"CREATE TABLE targetTable LIKE sourceTable;\nINSERT INTO targetTable SELECT * FROM sourceTable;\n\u5176\u4ed6:"))}c.isMDXComponent=!0}}]);