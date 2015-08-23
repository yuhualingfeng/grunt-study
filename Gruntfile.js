/**
 * Created by puhuasheng on 2015/8/22.
 */
module.exports=function(grunt){

    //grunt任务配置
    grunt.config.init({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                //report:'gzip',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'src/<%= pkg.name %>.js',
                dest:'build/<%= pkg.name %>.min.js'
            }
        },
        jshint:{
            test:['src/<%=pkg.name%>.js']
        }

    });

    //加载包含'uglify' 任务的插件

        //grunt-contrib-uglify是
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    //默认被执行的任务列表
    grunt.registerTask('default',['uglify']);

    //自定义任务
    grunt.registerTask('log','Log some stuff .',function(){
        grunt.log.write('Log some stuff...').ok();
    });

    //console.log(grunt.file.readJSON('package.json'));

    //console.log(grunt.config('uglify'));
    //grunt.config('author','puhuasheng');

    //console.log(grunt.config('author'));

    console.log(grunt.config);

};

