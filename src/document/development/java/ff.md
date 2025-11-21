# CRM

## 前端

npm install  下载文件会放在当前目录

npm install -g  下载文件会放在指定的全局目录下

Vue-cli  快速创建脚手架，停止更新了。现在使用vite

npm create vite@latest	

**devDependencies**   开发过程中需要，打包时不需要的   --save-dev	 

**vite配置文件设置端口（vite.config.js）**

```javascript
export default defineConfig({

 plugins: [vue()],

 base: '/',

 server:{

  host:'0.0.0.0' ,//ip地址

  port: 8080, // 设置服务启动端口号

  open: true, // 设置服务启动时是否自动打开浏览器
 }
})
```

vue2写法

```vue
export default {
 data() {
  return {
   // 在这里声明form对象
   form: {
​    name: '',  // 添加初始值
​    passwd:'',
   },
  };
 },

 methods:{
  // 处理登录函数
   dealLogin() {

   },
 }
};

</script>
```



首页左边下边有空白：直接index.html中加样式

```javascript
  <style>
    body{
      margin:auto;
    }
  </style>
```

## 后端

**idea初启项目检查**：1.file-encoding(utf-8)  maven信息  lombok注解开启

2.修改数据库、redis等的密码

3.新项目，提前规划好分层架构  query   vo    domian  mapper  service  controller



通用处理层 manager



![004](https://gitee.com/ssmspace/typora_img/raw/master/images/004.jpg)





![002](https://gitee.com/ssmspace/typora_img/raw/master/images/002.jpg)