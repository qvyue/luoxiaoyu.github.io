---
id: mysql-database-info
title: MySQL 元数据
sidebar_position: 28
---

# MySQL 元数据

你可能想知道MySQL以下三种信息：

- **查询结果信息：** SELECT, UPDATE 或 DELETE语句影响的记录数。
- **数据库和数据表的信息：** 包含了数据库及数据表的结构信息。
- **MySQL服务器信息： **包含了数据库服务器的当前状态，版本号等。
在MySQL的命令提示符中，我们可以很容易的获取以上服务器信息。

## 获取查询语句影响的记录数
### PERL 实例
在 DBI 脚本中， 语句影响的记录数通过函数 do( ) 或 execute( )返回：
```
# 方法 1
# 使用do( ) 执行  $query 
my $count = $dbh->do ($query);
# 如果发生错误会输出 0
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);

# 方法 2
# 使用prepare( ) 及 execute( ) 执行  $query 
my $sth = $dbh->prepare ($query);
my $count = $sth->execute ( );
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);
```
## 数据库和数据表列表
你可以很容易的在MySQL服务器中获取数据库和数据表列表。 如果你没有足够的权限，结果将返回 null。

你也可以使用 SHOW TABLES 或 SHOW DATABASES 语句来获取数据库和数据表列表。

### PERL 实例
```
# 获取当前数据库中所有可用的表。
my @tables = $dbh->tables ( );
foreach $table (@tables ){
   print "表名 $table\n";
}
```
## 获取服务器元数据
以下命令语句可以在 MySQL 的命令提示符使用。

|命令|	描述|
|---|---|
|SELECT VERSION( )|	服务器版本信息|
|SELECT DATABASE( )|	当前数据库名 (或者返回空)|
|SELECT USER( )|	当前用户名
|SHOW STATUS	|服务器状态|
|SHOW VARIABLES	|服务器配置变量|
