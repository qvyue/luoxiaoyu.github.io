"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6715],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),y=s,d=m["".concat(o,".").concat(y)]||m[y]||p[y]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const l={id:"mysql-sql-injection",title:"MySQL \u53ca SQL \u6ce8\u5165",sidebar_position:30},a="MySQL \u53ca SQL \u6ce8\u5165",i={unversionedId:"mysql/mysql-sql-injection",id:"mysql/mysql-sql-injection",title:"MySQL \u53ca SQL \u6ce8\u5165",description:"\u5982\u679c\u60a8\u901a\u8fc7\u7f51\u9875\u83b7\u53d6\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u5e76\u5c06\u5176\u63d2\u5165\u4e00\u4e2aMySQL\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u5c31\u6709\u53ef\u80fd\u53d1\u751fSQL\u6ce8\u5165\u5b89\u5168\u7684\u95ee\u9898\u3002",source:"@site/docs/mysql/mysql-sql-injection.md",sourceDirName:"mysql",slug:"/mysql/mysql-sql-injection",permalink:"/mysql/mysql-sql-injection",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"mysql-sql-injection",title:"MySQL \u53ca SQL \u6ce8\u5165",sidebar_position:30},sidebar:"MySQL \u6559\u7a0b",previous:{title:"MySQL \u5e8f\u5217\u4f7f\u7528",permalink:"/mysql/mysql-using-sequences"},next:{title:"MySQL \u5bfc\u51fa\u6570\u636e",permalink:"/mysql/mysql-database-export"}},o={},c=[{value:"\u9632\u6b62SQL\u6ce8\u5165",id:"\u9632\u6b62sql\u6ce8\u5165",level:2},{value:"Like\u8bed\u53e5\u4e2d\u7684\u6ce8\u5165",id:"like\u8bed\u53e5\u4e2d\u7684\u6ce8\u5165",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mysql-\u53ca-sql-\u6ce8\u5165"},"MySQL \u53ca SQL \u6ce8\u5165"),(0,s.kt)("p",null,"\u5982\u679c\u60a8\u901a\u8fc7\u7f51\u9875\u83b7\u53d6\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u5e76\u5c06\u5176\u63d2\u5165\u4e00\u4e2aMySQL\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u5c31\u6709\u53ef\u80fd\u53d1\u751fSQL\u6ce8\u5165\u5b89\u5168\u7684\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u672c\u7ae0\u8282\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u9632\u6b62SQL\u6ce8\u5165\uff0c\u5e76\u901a\u8fc7\u811a\u672c\u6765\u8fc7\u6ee4SQL\u4e2d\u6ce8\u5165\u7684\u5b57\u7b26\u3002"),(0,s.kt)("p",null,"\u6240\u8c13SQL\u6ce8\u5165\uff0c\u5c31\u662f\u901a\u8fc7\u628aSQL\u547d\u4ee4\u63d2\u5165\u5230Web\u8868\u5355\u9012\u4ea4\u6216\u8f93\u5165\u57df\u540d\u6216\u9875\u9762\u8bf7\u6c42\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\uff0c\u6700\u7ec8\u8fbe\u5230\u6b3a\u9a97\u670d\u52a1\u5668\u6267\u884c\u6076\u610f\u7684SQL\u547d\u4ee4\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u6c38\u8fdc\u4e0d\u8981\u4fe1\u4efb\u7528\u6237\u7684\u8f93\u5165\uff0c\u6211\u4eec\u5fc5\u987b\u8ba4\u5b9a\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u90fd\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u6211\u4eec\u90fd\u9700\u8981\u5bf9\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u5904\u7406\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u4e2d\uff0c\u8f93\u5165\u7684\u7528\u6237\u540d\u5fc5\u987b\u4e3a\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf\u7684\u7ec4\u5408\uff0c\u4e14\u7528\u6237\u540d\u957f\u5ea6\u4e3a 8 \u5230 20 \u4e2a\u5b57\u7b26\u4e4b\u95f4\uff1a"),(0,s.kt)("p",null,'if (preg_match("/^\\w{8,20}$/", $_GET',"['username']",', $matches))\n{\n$result = mysqli_query($conn, "SELECT * FROM users\nWHERE username=$matches',"[0]",'");\n}\nelse\n{\necho "username \u8f93\u5165\u5f02\u5e38";\n}\n\u8ba9\u6211\u4eec\u770b\u4e0b\u5728\u6ca1\u6709\u8fc7\u6ee4\u7279\u6b8a\u5b57\u7b26\u65f6\uff0c\u51fa\u73b0\u7684SQL\u60c5\u51b5\uff1a'),(0,s.kt)("p",null,'// \u8bbe\u5b9a$name \u4e2d\u63d2\u5165\u4e86\u6211\u4eec\u4e0d\u9700\u8981\u7684SQL\u8bed\u53e5\n$name = "Qadir\'; DELETE FROM users;";\nmysqli_query($conn, "SELECT * FROM users WHERE name=\'{$name}\'");\n\u4ee5\u4e0a\u7684\u6ce8\u5165\u8bed\u53e5\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u5bf9 $name \u7684\u53d8\u91cf\u8fdb\u884c\u8fc7\u6ee4\uff0c$name \u4e2d\u63d2\u5165\u4e86\u6211\u4eec\u4e0d\u9700\u8981\u7684SQL\u8bed\u53e5\uff0c\u5c06\u5220\u9664 users \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u3002'),(0,s.kt)("p",null,"\u5728PHP\u4e2d\u7684 mysqli_query() \u662f\u4e0d\u5141\u8bb8\u6267\u884c\u591a\u4e2a SQL \u8bed\u53e5\u7684\uff0c\u4f46\u662f\u5728 SQLite \u548c PostgreSQL \u662f\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u591a\u6761SQL\u8bed\u53e5\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5bf9\u8fd9\u4e9b\u7528\u6237\u7684\u6570\u636e\u9700\u8981\u8fdb\u884c\u4e25\u683c\u7684\u9a8c\u8bc1\u3002"),(0,s.kt)("p",null,"\u9632\u6b62SQL\u6ce8\u5165\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u4e2a\u8981\u70b9\uff1a"),(0,s.kt)("p",null,'1.\u6c38\u8fdc\u4e0d\u8981\u4fe1\u4efb\u7528\u6237\u7684\u8f93\u5165\u3002\u5bf9\u7528\u6237\u7684\u8f93\u5165\u8fdb\u884c\u6821\u9a8c\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u6216\u9650\u5236\u957f\u5ea6\uff1b\u5bf9\u5355\u5f15\u53f7\u548c \u53cc"-"\u8fdb\u884c\u8f6c\u6362\u7b49\u3002\n2.\u6c38\u8fdc\u4e0d\u8981\u4f7f\u7528\u52a8\u6001\u62fc\u88c5sql\uff0c\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u5316\u7684sql\u6216\u8005\u76f4\u63a5\u4f7f\u7528\u5b58\u50a8\u8fc7\u7a0b\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u5b58\u53d6\u3002\n3.\u6c38\u8fdc\u4e0d\u8981\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u7684\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u4e3a\u6bcf\u4e2a\u5e94\u7528\u4f7f\u7528\u5355\u72ec\u7684\u6743\u9650\u6709\u9650\u7684\u6570\u636e\u5e93\u8fde\u63a5\u3002\n4.\u4e0d\u8981\u628a\u673a\u5bc6\u4fe1\u606f\u76f4\u63a5\u5b58\u653e\uff0c\u52a0\u5bc6\u6216\u8005hash\u6389\u5bc6\u7801\u548c\u654f\u611f\u7684\u4fe1\u606f\u3002\n5.\u5e94\u7528\u7684\u5f02\u5e38\u4fe1\u606f\u5e94\u8be5\u7ed9\u51fa\u5c3d\u53ef\u80fd\u5c11\u7684\u63d0\u793a\uff0c\u6700\u597d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u5bf9\u539f\u59cb\u9519\u8bef\u4fe1\u606f\u8fdb\u884c\u5305\u88c5\n6.sql\u6ce8\u5165\u7684\u68c0\u6d4b\u65b9\u6cd5\u4e00\u822c\u91c7\u53d6\u8f85\u52a9\u8f6f\u4ef6\u6216\u7f51\u7ad9\u5e73\u53f0\u6765\u68c0\u6d4b\uff0c\u8f6f\u4ef6\u4e00\u822c\u91c7\u7528sql\u6ce8\u5165\u68c0\u6d4b\u5de5\u5177jsky\uff0c\u7f51\u7ad9\u5e73\u53f0\u5c31\u6709\u4ebf\u601d\u7f51\u7ad9\u5b89\u5168\u5e73\u53f0\u68c0\u6d4b\u5de5\u5177\u3002MDCSOFT SCAN\u7b49\u3002\u91c7\u7528MDCSOFT-IPS\u53ef\u4ee5\u6709\u6548\u7684\u9632\u5fa1SQL\u6ce8\u5165\uff0cXSS\u653b\u51fb\u7b49\u3002'),(0,s.kt)("h2",{id:"\u9632\u6b62sql\u6ce8\u5165"},"\u9632\u6b62SQL\u6ce8\u5165"),(0,s.kt)("p",null,"\u5728\u811a\u672c\u8bed\u8a00\uff0c\u5982Perl\u548cPHP\u4f60\u53ef\u4ee5\u5bf9\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u8fdb\u884c\u8f6c\u4e49\u4ece\u800c\u6765\u9632\u6b62SQL\u6ce8\u5165\u3002"),(0,s.kt)("p",null,"PHP\u7684MySQL\u6269\u5c55\u63d0\u4f9b\u4e86mysqli_real_escape_string()\u51fd\u6570\u6765\u8f6c\u4e49\u7279\u6b8a\u7684\u8f93\u5165\u5b57\u7b26\u3002"),(0,s.kt)("p",null,"if (get_magic_quotes_gpc())\n{\n$name = stripslashes($name);\n}\n$name = mysqli_real_escape_string($conn, $name);\nmysqli_query($conn, \"SELECT * FROM users WHERE name='{$name}'\");"),(0,s.kt)("h2",{id:"like\u8bed\u53e5\u4e2d\u7684\u6ce8\u5165"},"Like\u8bed\u53e5\u4e2d\u7684\u6ce8\u5165"),(0,s.kt)("p",null,'like\u67e5\u8be2\u65f6\uff0c\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u503c\u6709"',(0,s.kt)("em",{parentName:"p"},'"\u548c"%"\uff0c\u5219\u4f1a\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\uff1a\u7528\u6237\u672c\u6765\u53ea\u662f\u60f3\u67e5\u8be2"abcd'),'"\uff0c\u67e5\u8be2\u7ed3\u679c\u4e2d\u5374\u6709"abcd_"\u3001"abcde"\u3001"abcdf"\u7b49\u7b49\uff1b\u7528\u6237\u8981\u67e5\u8be2"30%"\uff08\u6ce8\uff1a\u767e\u5206\u4e4b\u4e09\u5341\uff09\u65f6\u4e5f\u4f1a\u51fa\u73b0\u95ee\u9898\u3002'),(0,s.kt)("p",null,"\u5728PHP\u811a\u672c\u4e2d\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528addcslashes()\u51fd\u6570\u6765\u5904\u7406\u4ee5\u4e0a\u60c5\u51b5\uff0c\u5982\u4e0b\u5b9e\u4f8b\uff1a"),(0,s.kt)("p",null,"$sub = addcslashes(mysqli",(0,s.kt)("em",{parentName:"p"},'real_escape_string($conn, "%something'),'"), "%_");\n// $sub == \\%something',"_","\nmysqli_query($conn, \"SELECT * FROM messages WHERE subject LIKE '{$sub}%'\");\naddcslashes() \u51fd\u6570\u5728\u6307\u5b9a\u7684\u5b57\u7b26\u524d\u6dfb\u52a0\u53cd\u659c\u6760\u3002"),(0,s.kt)("p",null,"\u8bed\u6cd5\u683c\u5f0f:"),(0,s.kt)("p",null,"addcslashes(string,characters)\n\u53c2\u6570\t\u63cf\u8ff0\nstring\t\u5fc5\u9700\u3002\u89c4\u5b9a\u8981\u68c0\u67e5\u7684\u5b57\u7b26\u4e32\u3002\ncharacters\t\u53ef\u9009\u3002\u89c4\u5b9a\u53d7 addcslashes() \u5f71\u54cd\u7684\u5b57\u7b26\u6216\u5b57\u7b26\u8303\u56f4\u3002\n\u5177\u4f53\u5e94\u7528\u53ef\u4ee5\u67e5\u770b\uff1aPHP addcslashes() \u51fd\u6570"))}p.isMDXComponent=!0}}]);