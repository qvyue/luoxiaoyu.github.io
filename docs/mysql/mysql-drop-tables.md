---
id: mysql-drop-tables
title: MySQL 删除数据表
sidebar_position: 11
---

# MySQL 删除数据表
MySQL中删除数据表是非常容易操作的，但是你在进行删除表操作时要非常小心，因为执行删除命令后所有数据都会消失。

### 语法
以下为删除MySQL数据表的通用语法：
```bash
DROP TABLE table_name ;
```
## 在命令提示窗口中删除数据表
在mysql>命令提示窗口中删除数据表SQL语句为 `DROP TABLE` ：

### 实例
以下实例删除了数据表`runoob_tbl`:
```bash
root@host# mysql -u root -p
Enter password:*******
mysql> use RUNOOB;
Database changed
mysql> DROP TABLE runoob_tbl;
Query OK, 0 rows affected (0.8 sec)
mysql>
```

执行成功后，我们使用以下命令，就看不到 `runoob_tbl` 表了：
```bash
mysql> show tables;
Empty set (0.01 sec)
```