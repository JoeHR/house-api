# docker 部署 node 工程服务

1、创建 node 工程

2、编写 Dockerfile 文件

3、上传 node工程 到 服务器（具有docker环境）上某个目录

4、构建镜像 `docker build -t 镜像名 node工程根本目录`

5、运行镜像 `docker run -d -p 3000:3000 镜像名`

6、查看 镜像容器 日志 `docker logs 容器id`

