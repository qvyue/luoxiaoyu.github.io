---
id: mysql-create-database
title: MySQL 创建数据库
sidebar_position: 6
---

# MySQL 创建数据库
我们可以在登陆 MySQL 服务后，使用 `create` 命令创建数据库，语法如下:
```bash
CREATE DATABASE 数据库名;
```
以下命令简单的演示了创建数据库的过程，数据名为 RUNOOB:
```bash
[root@host]# mysql -u root -p   
Enter password:******  # 登录后进入终端

mysql> create DATABASE RUNOOB;
```
### 使用 mysqladmin 创建数据库
使用普通用户，你可能需要特定的权限来创建或者删除 MySQL 数据库。

所以我们这边使用root用户登录，root用户拥有最高权限，可以使用 mysql `mysqladmin` 命令来创建数据库。

以下命令简单的演示了创建数据库的过程，数据名为 `RUNOOB`:
```bash
[root@host]# mysqladmin -u root -p create RUNOOB
Enter password:******
```
以上命令执行成功后会创建 MySQL 数据库 RUNOOB。

