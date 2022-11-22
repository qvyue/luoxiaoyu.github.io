---
id: mysql-php-syntax
title: MySQL PHP 语法
sidebar_position: 4
---

# MySQL PHP 语法

MySQL 可应用于多种语言，包括 PERL, C, C++, JAVA 和 PHP，在这些语言中，MySQL 在 PHP 的 web 开发中是应用最广泛。

在本教程中我们大部分实例都采用了 PHP 语言。如果你想了解 MySQL 在 PHP 中的应用，可以访问我们的 PHP 中使用 MySQL 介绍。

PHP 提供了多种方式来访问和操作 MySQL 数据库记录。：

PHP MySQL 函数格式如下：

mysqli_function(value,value,...);以上格式中 function部分描述了mysql函数的功能，如
mysqli_connect($connect);
mysqli_query($connect,"SQL 语句");
mysqli_fetch_array()
mysqli_close()
以下实例展示了PHP调用mysql函数的语法：

```php title="实例 (MySQLi)"
<?php
$retval = mysqli_function(value, [value,...]);
if( !$retval )
{
   die ( "相关错误信息" );
}
// 其他 MySQL 或 PHP 语句
?>
```
从下一章开始，我们将学习到更多的MySQL功能函数。