---
id: mysql-select-database
title: MySQL 选择数据库
sidebar_position: 8
---

# MySQL 选择数据库
在你连接到 MySQL 数据库后，可能有多个可以操作的数据库，所以你需要选择你要操作的数据库。

## 从命令提示窗口中选择MySQL数据库
在 `mysql>` 提示窗口中可以很简单的选择特定的数据库。你可以使用SQL命令来选择指定的数据库。

### 实例
以下实例选取了数据库 `RUNOOB`:
```bash
[root@host]# mysql -u root -p
Enter password:******
mysql> use RUNOOB;
Database changed
mysql>
```
执行以上命令后，你就已经成功选择了 `RUNOOB` 数据库，在后续的操作中都会在 `RUNOOB` 数据库中执行。
