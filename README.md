# FootballCrawler

足球相关信息爬虫
http://123.57.73.34:3001
 
================

###1，项目架构
    Express + Superagent + Cheerio + Echarts

###2, 项目启动
    |-- 部署至服务器

    |-- 安装依赖
        |-- npm install
  	    
    |-- 配置 config/mailConfig.js 
        |-- 邮件发送者相关信息（默认为163邮箱）
   
    |-- 部署
        |-- 目录下：forever ./bin/www

###3，运行
  	|-- Superagent 爬取五大联赛相关球队，射手榜数据

  	|-- Cheerio分析爬取的HTML中DOM的结构
  	    |-- 取出相关数据

  	|-- Echarts将所得数据图形展示
  	
  	|-- nodemailer向目标邮箱发送 联赛即时积分榜 邮件


###4,心得
	|-- 爬虫练习
	
	|-- Superagent + Cherrio = 绝配
	
	|-- 图形化展示简直可以让数据生动不止一个档次
	
	|-- 准备尝试更为复杂的爬虫


