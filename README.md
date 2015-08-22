# grunt-study
basic use and some tools of grunt

grunt简介
grunt Javascript世界的构建工具,其运行在node平台之上。

为什么使用构建工具？
一句话：自动化。对于需要反复重复的任务,例如压缩,编译,单元测试,linting等,自动化构建工具可以减轻你的劳动,简化
你的工作.当你在Gruntfile文件正确配置好了任务,任务运行器就会自动帮你或你的小组完成大部分无聊的工作.

grunt-cli简介
grunt-cli是grunt命令行,每次运行grunt时,他利用grunt提供的require()系统查找本地安装的grunt,找到grunt后便加载grunt，并把Gruntfile中的配置信息传递给grunt,
然后执行Gruntfile文件中指定的任务.

grunt和grunt-cli的安装
grunt和grunt-cli以及grunt的插件都是node中的模块.它们的安装方式和其他node模块的安装方式完全相同
例如安装grunt: npm install grunt --save-dev









