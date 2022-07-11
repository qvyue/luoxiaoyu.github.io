"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3342],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),y=l,d=u["".concat(p,".").concat(y)]||u[y]||c[y]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=t(7462),l=(t(7294),t(3905));const a={id:"mysql-group-by-statement",title:"MySQL GROUP BY \u8bed\u53e5",sidebar_position:20},o="MySQL GROUP BY \u8bed\u53e5",i={unversionedId:"mysql/mysql-group-by-statement",id:"mysql/mysql-group-by-statement",title:"MySQL GROUP BY \u8bed\u53e5",description:"GROUP BY \u8bed\u53e5\u6839\u636e\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u5206\u7ec4\u3002",source:"@site/docs/mysql/mysql-group-by-statement.md",sourceDirName:"mysql",slug:"/mysql/mysql-group-by-statement",permalink:"/mysql/mysql-group-by-statement",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"mysql-group-by-statement",title:"MySQL GROUP BY \u8bed\u53e5",sidebar_position:20},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u6392\u5e8f",permalink:"/mysql/mysql-order-by"},next:{title:"MySQL \u8fde\u63a5\u7684\u4f7f\u7528",permalink:"/mysql/mysql-join"}},p={},m=[{value:"GROUP BY \u8bed\u6cd5",id:"group-by-\u8bed\u6cd5",level:3},{value:"\u5b9e\u4f8b\u6f14\u793a",id:"\u5b9e\u4f8b\u6f14\u793a",level:2},{value:"\u4f7f\u7528 WITH ROLLUP",id:"\u4f7f\u7528-with-rollup",level:2}],s={toc:m};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-group-by-\u8bed\u53e5"},"MySQL GROUP BY \u8bed\u53e5"),(0,l.kt)("p",null,"GROUP BY \u8bed\u53e5\u6839\u636e\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u5206\u7ec4\u3002"),(0,l.kt)("p",null,"\u5728\u5206\u7ec4\u7684\u5217\u4e0a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AVG")," \u7b49\u51fd\u6570\u3002"),(0,l.kt)("h3",{id:"group-by-\u8bed\u6cd5"},"GROUP BY \u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT column_name, function(column_name)\nFROM table_name\nWHERE column_name operator value\nGROUP BY column_name;\n")),(0,l.kt)("h2",{id:"\u5b9e\u4f8b\u6f14\u793a"},"\u5b9e\u4f8b\u6f14\u793a"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u5b9e\u4f8b\u4f7f\u7528\u5230\u4e86\u4ee5\u4e0b\u8868\u7ed3\u6784\u53ca\u6570\u636e\uff0c\u4f7f\u7528\u524d\u6211\u4eec\u53ef\u4ee5\u5148\u5c06\u4ee5\u4e0b\u6570\u636e\u5bfc\u5165\u6570\u636e\u5e93\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SET NAMES utf8;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n--  Table structure for `employee_tbl`\n-- ----------------------------\nDROP TABLE IF EXISTS `employee_tbl`;\nCREATE TABLE `employee_tbl` (\n  `id` int(11) NOT NULL,\n  `name` char(10) NOT NULL DEFAULT '',\n  `date` datetime NOT NULL,\n  `signin` tinyint(4) NOT NULL DEFAULT '0' COMMENT '\u767b\u5f55\u6b21\u6570',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n-- ----------------------------\n--  Records of `employee_tbl`\n-- ----------------------------\nBEGIN;\nINSERT INTO `employee_tbl` VALUES ('1', '\u5c0f\u660e', '2016-04-22 15:25:33', '1'), ('2', '\u5c0f\u738b', '2016-04-20 15:25:47', '3'), ('3', '\u5c0f\u4e3d', '2016-04-19 15:26:02', '2'), ('4', '\u5c0f\u738b', '2016-04-07 15:26:14', '4'), ('5', '\u5c0f\u660e', '2016-04-11 15:26:40', '4'), ('6', '\u5c0f\u660e', '2016-04-04 15:26:54', '2');\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u6210\u529f\u540e\uff0c\u6267\u884c\u4ee5\u4e0b SQL \u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> set names utf8;\nmysql> SELECT * FROM employee_tbl;\n+----+--------+---------------------+--------+\n| id | name   | date                | signin |\n+----+--------+---------------------+--------+\n|  1 | \u5c0f\u660e | 2016-04-22 15:25:33 |      1 |\n|  2 | \u5c0f\u738b | 2016-04-20 15:25:47 |      3 |\n|  3 | \u5c0f\u4e3d | 2016-04-19 15:26:02 |      2 |\n|  4 | \u5c0f\u738b | 2016-04-07 15:26:14 |      4 |\n|  5 | \u5c0f\u660e | 2016-04-11 15:26:40 |      4 |\n|  6 | \u5c0f\u660e | 2016-04-04 15:26:54 |      2 |\n+----+--------+---------------------+--------+\n6 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u8bed\u53e5 \u5c06\u6570\u636e\u8868\u6309\u540d\u5b57\u8fdb\u884c\u5206\u7ec4\uff0c\u5e76\u7edf\u8ba1\u6bcf\u4e2a\u4eba\u6709\u591a\u5c11\u6761\u8bb0\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT name, COUNT(*) FROM   employee_tbl GROUP BY name;\n+--------+----------+\n| name   | COUNT(*) |\n+--------+----------+\n| \u5c0f\u4e3d |        1 |\n| \u5c0f\u660e |        3 |\n| \u5c0f\u738b |        2 |\n+--------+----------+\n3 rows in set (0.01 sec)\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-with-rollup"},"\u4f7f\u7528 WITH ROLLUP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WITH ROLLUP")," \u53ef\u4ee5\u5b9e\u73b0\u5728\u5206\u7ec4\u7edf\u8ba1\u6570\u636e\u57fa\u7840\u4e0a\u518d\u8fdb\u884c\u76f8\u540c\u7684\u7edf\u8ba1\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"SUM"),",",(0,l.kt)("inlineCode",{parentName:"p"},"AVG"),",",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT"),"\u2026\uff09\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u5c06\u4ee5\u4e0a\u7684\u6570\u636e\u8868\u6309\u540d\u5b57\u8fdb\u884c\u5206\u7ec4\uff0c\u518d\u7edf\u8ba1\u6bcf\u4e2a\u4eba\u767b\u5f55\u7684\u6b21\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT name, SUM(signin) as signin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;\n+--------+--------------+\n| name   | signin_count |\n+--------+--------------+\n| \u5c0f\u4e3d |            2 |\n| \u5c0f\u660e |            7 |\n| \u5c0f\u738b |            7 |\n| NULL   |           16 |\n+--------+--------------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u8bb0\u5f55 NULL \u8868\u793a\u6240\u6709\u4eba\u7684\u767b\u5f55\u6b21\u6570\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"coalesce")," \u6765\u8bbe\u7f6e\u4e00\u4e2a\u53ef\u4ee5\u53d6\u4ee3 ",(0,l.kt)("inlineCode",{parentName:"p"},"NUll")," \u7684\u540d\u79f0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"coalesce")," \u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"select coalesce(a,b,c);\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a\u5982\u679ca==null,\u5219\u9009\u62e9b\uff1b\u5982\u679cb==null,\u5219\u9009\u62e9c\uff1b\u5982\u679ca!=null,\u5219\u9009\u62e9a\uff1b\u5982\u679ca b c \u90fd\u4e3anull \uff0c\u5219\u8fd4\u56de\u4e3anull\uff08\u6ca1\u610f\u4e49\uff09\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u4e2d\u5982\u679c\u540d\u5b57\u4e3a\u7a7a\u6211\u4eec\u4f7f\u7528\u603b\u6570\u4ee3\u66ff\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT coalesce(name, '\u603b\u6570'), SUM(signin) as signin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;\n+--------------------------+--------------+\n| coalesce(name, '\u603b\u6570') | signin_count |\n+--------------------------+--------------+\n| \u5c0f\u4e3d                   |            2 |\n| \u5c0f\u660e                   |            7 |\n| \u5c0f\u738b                   |            7 |\n| \u603b\u6570                   |           16 |\n+--------------------------+--------------+\n4 rows in set (0.01 sec)\n")))}c.isMDXComponent=!0}}]);