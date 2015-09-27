# VividFootball

[![Build Status](https://travis-ci.org/DavidCai1993/VividFootball.svg?branch=master)](https://travis-ci.org/DavidCai1993/VividFootball)

重生的排行榜和射手榜
football.fucku.singles
 
================

### 1，项目架构
    Express + Superagent + Cheerio + Socket.io + Echarts

### 2, 项目启动
    |-- 部署至服务器

    |-- 安装依赖
        |-- npm install
  	    
    |-- 配置 config/mailConfig.js 
        |-- 邮件发送者相关信息（默认为163邮箱）
    |-- 配置 index.jade 中 socket.io 链接地址    
   
    |-- 部署
        |-- 目录下：forever ./bin/www

### 3，运行
  	|-- Superagent 爬取五大联赛相关球队，射手榜数据(数据进行缓存，失效时间为5分钟)

  	|-- Cheerio分析爬取的HTML中DOM的结构
  	    |-- 取出相关数据
  	    
  	|-- 通过Socket.io进行前后端通信，得到爬取进度，并以进度条的形式在页面上展示    

  	|-- Echarts将所得数据图形展示
  	
  	|-- nodemailer向目标邮箱发送 联赛即时积分榜 邮件


### 4,心得
	|-- 爬虫练习
	
	|-- Superagent + Cherrio = 绝配
	
	|-- 图形化简直可以让数据生动不止一个档次
	
	|-- 下次尝试casper.js获取页面


