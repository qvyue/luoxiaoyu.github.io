"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"mysql-create-tables",title:"MySQL \u521b\u5efa\u6570\u636e\u8868",sidebar_position:10},o="MySQL \u521b\u5efa\u6570\u636e\u8868",i={unversionedId:"mysql/mysql-create-tables",id:"mysql/mysql-create-tables",title:"MySQL \u521b\u5efa\u6570\u636e\u8868",description:"\u521b\u5efaMySQL\u6570\u636e\u8868\u9700\u8981\u4ee5\u4e0b\u4fe1\u606f\uff1a",source:"@site/docs/mysql/mysql-create-tables.md",sourceDirName:"mysql",slug:"/mysql/mysql-create-tables",permalink:"/mysql/mysql-create-tables",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"mysql-create-tables",title:"MySQL \u521b\u5efa\u6570\u636e\u8868",sidebar_position:10},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u6570\u636e\u7c7b\u578b",permalink:"/mysql/mysql-data-types"},next:{title:"MySQL \u5220\u9664\u6570\u636e\u8868",permalink:"/mysql/mysql-drop-tables"}},s={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7b26\u521b\u5efa\u8868",id:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7b26\u521b\u5efa\u8868",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-\u521b\u5efa\u6570\u636e\u8868"},"MySQL \u521b\u5efa\u6570\u636e\u8868"),(0,a.kt)("p",null,"\u521b\u5efaMySQL\u6570\u636e\u8868\u9700\u8981\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u5b57\u6bb5\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6bcf\u4e2a\u8868\u5b57\u6bb5")),(0,a.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u521b\u5efaMySQL\u6570\u636e\u8868\u7684SQL\u901a\u7528\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE TABLE table_name (column_name column_type);\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u4e2d\u6211\u4eec\u5c06\u5728 RUNOOB \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u6570\u636e\u8868runoob_tbl\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE TABLE IF NOT EXISTS `runoob_tbl`(\n   `runoob_id` INT UNSIGNED AUTO_INCREMENT,\n   `runoob_title` VARCHAR(100) NOT NULL,\n   `runoob_author` VARCHAR(40) NOT NULL,\n   `submission_date` DATE,\n   PRIMARY KEY ( `runoob_id` )\n)ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,a.kt)("p",null,"\u5b9e\u4f8b\u89e3\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u60f3\u5b57\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," \u53ef\u4ee5\u8bbe\u7f6e\u5b57\u6bb5\u7684\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"}," NOT NULL"),"\uff0c \u5728\u64cd\u4f5c\u6570\u636e\u5e93\u65f6\u5982\u679c\u8f93\u5165\u8be5\u5b57\u6bb5\u7684\u6570\u636e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," \uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("li",{parentName:"ul"},"AUTO_INCREMENT\u5b9a\u4e49\u5217\u4e3a\u81ea\u589e\u7684\u5c5e\u6027\uff0c\u4e00\u822c\u7528\u4e8e\u4e3b\u952e\uff0c\u6570\u503c\u4f1a\u81ea\u52a8\u52a01\u3002"),(0,a.kt)("li",{parentName:"ul"},"PRIMARY KEY\u5173\u952e\u5b57\u7528\u4e8e\u5b9a\u4e49\u5217\u4e3a\u4e3b\u952e\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u5217\u6765\u5b9a\u4e49\u4e3b\u952e\uff0c\u5217\u95f4\u4ee5\u9017\u53f7\u5206\u9694\u3002"),(0,a.kt)("li",{parentName:"ul"},"ENGINE \u8bbe\u7f6e\u5b58\u50a8\u5f15\u64ce\uff0cCHARSET \u8bbe\u7f6e\u7f16\u7801\u3002")),(0,a.kt)("h2",{id:"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7b26\u521b\u5efa\u8868"},"\u901a\u8fc7\u547d\u4ee4\u63d0\u793a\u7b26\u521b\u5efa\u8868"),(0,a.kt)("p",null,"\u901a\u8fc7 mysql> \u547d\u4ee4\u7a97\u53e3\u53ef\u4ee5\u5f88\u7b80\u5355\u7684\u521b\u5efaMySQL\u6570\u636e\u8868\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 SQL \u8bed\u53e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u6765\u521b\u5efa\u6570\u636e\u8868\u3002"),(0,a.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u521b\u5efa\u6570\u636e\u8868 runoob_tbl \u5b9e\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@host# mysql -u root -p\nEnter password:*******\nmysql> use RUNOOB;\nDatabase changed\nmysql> CREATE TABLE runoob_tbl(\n   -> runoob_id INT NOT NULL AUTO_INCREMENT,\n   -> runoob_title VARCHAR(100) NOT NULL,\n   -> runoob_author VARCHAR(40) NOT NULL,\n   -> submission_date DATE,\n   -> PRIMARY KEY ( runoob_id )\n   -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;\nQuery OK, 0 rows affected (0.16 sec)\nmysql>\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1aMySQL\u547d\u4ee4\u7ec8\u6b62\u7b26\u4e3a\u5206\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},";")," \u3002"),(0,a.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"->")," \u662f\u6362\u884c\u7b26\u6807\u8bc6\uff0c\u4e0d\u8981\u590d\u5236\u3002"))))}m.isMDXComponent=!0}}]);