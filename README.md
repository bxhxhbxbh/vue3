# vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 接口网址
```
网址
https://www.showdoc.com.cn/item/password/jinducasey?page_id=8309065269806678&redirect=%2Fjinducasey%2F8309065269806678
密码
jinduVIP
用户名： admin, 密码：1qaz!QAZ

旅游接口
http://1.116.64.64:5004/api2/travel

分数网址
http://192.144.199.210:8080/editor/index.html?chart_id=7Ph0yZtNoJ1JhGd1

```

### nginx配置
```
server {
    listen       8080;
    server_name  192.168.0.110;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   D:\ownProjectExercise\vue-练习\20220625\vue3\dist;
        index  index.html index.htm;
        try_files $uri/ @router;
    }

    location @router {
        rewrite ^.*$ /index.html last;
    }
}

检查配置修改是否成功
nginx -t -c D:\nginx-1.22.0\nginx-1.22.0\conf\nginx.conf

启动nginx
start nginx

```
