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


package.json文件解述
这是一个nodejs配置文件,阐述项目的名字,存储库,作者,依赖的模块,遵循的协议等等.你也可以自定义各种配置参数.

Gruntfile.js文件阐述
这是一个grunt配置文件.主要为grunt任务的初始化配置,grunt插件的加载,grunt任务的注册.

grunt API
grunt通过grunt对象暴露所有方法和熟悉

grunt官方插件
    grunt-contrib-concat  合并js文件
    grunt-contrib-uglify  压缩js文件
    grunt-contrib-watch   文件监控   Run predefined tasks whenever watched file patterns are added, changed or deleted.
    grunt-contrib-jshint  文件检测   Validate files with JSHint
    grunt-contrib-qunit   单元测试   Run QUnit unit tests in a headless PhantomJS instance

grunt
    grunt.initConfig
        此方法是grunt.config.init方法的别名
    grunt.registerTask
        此方法是grunt.task.registerTask方法的别名
    grunt.registerMultiTask
        此方法是grunt.task.registerMultiTask方法的别名
    grunt.renameTask
        此方法是grunt.task.renameTask方法的别名
    grunt.loadTasks
        此方法是grunt.task.loadTasks方法的别名
    grunt.loadNpmTasks
        此方法是grunt.task.loadNpmTasks方法的别名

    grunt.warn
        此方法是grunt.fail.warn方法的别名
    grunt.fatal
        此方法是fail.fatal方法的别名

    grunt.option
        检索命令行参数的值
    grunt.package
        获取package.json中存储的元数据,其类型是对象
    grunt.version
        当前grunt的版本.


grunt.config
    grunt.config.init
        为当前项目初始化一个配置对象.可以通过grunt.config方法访问
    grunt.config
        从项目的Grunt配置中获取或设置一个值.传一个参数为获取,等同于grunt.config.get
        传两个参数为设置,等同于grunt.config.set
    grunt.config.get
        获取grunt配置中的值
    grunt.config.set
        设置grunt配置中的值
    grunt.config.merge
        添加配置数据
    grunt.config.escape
        忽略给定的propString中的.点号.
    grunt.config.process
    grunt.config.getRaw
    grunt.config.requires




















