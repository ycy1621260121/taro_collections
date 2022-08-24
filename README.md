### taro + typescript + less + taro-hooks + eslint + webpack5的小程序集合项目

### 项目结构说明：

``` 
1、config:
    dev.js       //开发环境配置
    test.js      //测试环境配置
    prod.js      //生产环境配置
    project.js   //项目名称配置，不同的项目在这里配置不同名称即可，启动即为当前项目
    index.js     //项目配置文件

2、src
    components   //组件库
    images       //图片文件
    pages        //项目页面集合目录
      testA      //项目testA
      testB      //项目testB，与testA为不同项目，他们都集中在这套代码里面
    router       //每个项目路由pages配置
    tabBar       //每个项目底部tabBar配置
    app.config.ts//项目路由配置
    app.less     //全局less
    app.ts       //主入口
```
