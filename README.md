# Web

平台开发项目

## 参考资料：

1. .zip文件，对应b站的[视频教学](https://www.bilibili.com/video/BV177411j7qJ/?buvid=YD48B1D838D761A94FC7BCA08389DDEDEA2D&is_story_h5=false&mid=3YvlRDiaHli586Y%2B6DhZTQ%3D%3D&p=1&plat_id=114&share_from=ugc&share_medium=iphone&share_plat=ios&share_source=WEIXIN&share_tag=s_i&timestamp=1691034325&unique_k=ptf1idK&up_id=445321758)
2. [Github基本命令](https://www.liaoxuefeng.com/wiki/896043488029600)
3. [flask入门](https://www.bilibili.com/video/BV1gh411q7xo?vd_source=7d31b754786e885b473179d887c44809)
4. [画图表echarts模板](https://echarts.apache.org/zh/index.html)

* 1中教学包含：爬虫（用不到），MySQL，flask框架，Echarts数据可视化，Linux部署。

## 目前实现

本地部署实现

<img width="1352" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/9b314ca7-f331-411e-9972-a8da319918ad">

### 界面模块功能

1. 功能：目前实现
2. 后续更新：预期更新

#### 标题模块
<img width="968" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/3d83a8ef-4ee5-499b-919a-bfde3dcbe1c3">

1. 功能:显示web项目标题
2. 后续更新

#### time模块
<img width="287" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/6f2acb71-3789-480e-9cca-a234c1c2a7b1">

1. 功能：动态显示时间
2. 后续更新：

#### 平台安全雷达

<img width="322" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/54b6d312-0a6c-4e78-abc3-3f0b24d784b9">

1. 功能：显示不安全行为
2. 后续更新：实时显示不安全（例如种类，坐标，操作人员等）

#### 布控区管理

<img width="167" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/4a4541d4-e8f9-4f37-bef2-85cec90fd64c">

1. 功能：无
2. 后续更新：

#### 不安全轨迹“雪亮”

<img width="338" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/bac60dc9-6978-4816-bc51-d1ded0581181">

1. 功能：显示图片
2. 后续更新：显示不安全轨迹图片

#### 仪表安全“雪亮”

<img width="342" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/b75ef65e-4294-4757-afb2-75690526ee29">

1. 功能：显示图片
2. 后续更新：显示仪表信息

#### 不安全行为“雪亮”
<img width="354" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/f11eedb1-60e2-4bfa-adb9-1d716695ec71">

1. 功能：显示图片
2. 后续更新：显示不安全行为图片


#### 不安全行为实时动态

<img width="335" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/1c48c986-b5e2-4ccc-aaf4-8b40041fcd35">

1. 功能：动态显示不安全行为数量柱状图。
2. 后续更新：


#### 不安全行为日变化分析

<img width="317" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/6e6f74be-1277-4f2a-807d-e652bf7b60f7">

1. 功能：动态更新不安全行为数量
2. 后续更新：数据库设计、更新间隔为1天。


#### 操作人员健康指标
<img width="327" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/ca70431d-3e75-48a7-9dcf-3053a47c0fa8">

1. 功能：操作人员健康指标雷达图
2. 后续更新：实时更新、报警系统


#### 智能“雪亮工程”

<img width="699" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/75de6232-d9ab-427e-8d15-f5e867c0a84e">

1. 功能：显示视频文件
2. 后续更新：接入监控？

## 本地部署
requirement：python=3.7，其余参考微信群中infdiffusion项目的requirement.txt

1. 下载MySQL，会在安装的时候设置root的密码。
<img width="681" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/6909a704-7c6e-47c4-841d-4652852a9c19">

2. pycharm专业版，右栏“Database”，选择“+”号，选择“Data Source”，选择“MySQL”。
  
   <img width="611" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/cedc93e2-de81-4d1d-b11f-efb68d25c2b2">

3. "User":root,"Password":自己设置的密码，点击“Test Connection”测试链接，点击“OK”
   
<img width="798" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/607af112-fbee-4d0e-a615-e9a413c8a64e">

4.右键，选择“SQL Scripts”，选择“Run SQL Script”，运行zip文件下的cov.sql文件，该文件创建cov数据库，包含四张表（不是最终确定的数据库，

 <img width="379" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/923afdce-8a22-4cf3-87e6-0da8fc450295">
 <img width="617" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/826c3708-52d2-4bb1-8e0f-983938eb9708">
<img width="1017" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/5809a5c8-d226-4b5e-b8d6-1d1f525ed8a6">

5. 点击“No schemas selected”后面的省略号，选中“cov”

   <img width="429" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/90164745-a1b8-4987-8de6-4d5238e8bcd9">
   <img width="354" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/335fb1c6-3ab3-47ae-9b6e-6e5dca6db6d6">

6. 添加数据，在zip文件的Jupyter notebook文件中有介绍。*details和history表为空时，步骤8会有报错
7. 需要修改/test/utils.py文件中get_conn函数中的password。
8. 运行app.py文件，浏览器查看127.0.0.1:5000，推荐使用谷歌浏览器。
<img width="666" alt="image" src="https://github.com/AllenCiel/Web/assets/95277051/a9f4b169-fe96-458e-9532-5ea1542858b5">


## 后续安排

1. 数据库结构的设计
2. 模块功能的确定
3. ……










