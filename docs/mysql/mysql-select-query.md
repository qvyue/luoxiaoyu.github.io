---
id: mysql-select-query
title: MySQL 查询数据
sidebar_position: 13
---

# MySQL 查询数据
MySQL 数据库使用SQL SELECT语句来查询数据。

你可以通过 mysql> 命令提示窗口中在数据库中查询数据。

## 语法
以下为在MySQL数据库中查询数据通用的 SELECT 语法：
```
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```
- 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件。
- SELECT 命令可以读取一条或者多条记录。
- 你可以使用星号（*）来代替其他字段，SELECT语句会返回表的所有字段数据
- 你可以使用 WHERE 语句来包含任何条件。
- 你可以使用 LIMIT 属性来设定返回的记录数。
- 你可以通过OFFSET指定SELECT语句开始查询的数据偏移量。默认情况下偏移量为0。
## 通过命令提示符获取数据
以下实例我们将通过 SQL `SELECT` 命令来获取 MySQL 数据表 `runoob_tbl` 的数据：

### 实例
以下实例将返回数据表 `runoob_tbl` 的所有记录:

读取数据表：
```
select * from runoob_tbl;
```
输出结果：

![MySQL 查询数据](/img/DB742246-84F3-4447-BD43-6BAEADD7CA91.jpg)

