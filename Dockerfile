# From 后面是基础镜像名称
From node:14.5.0-alpine3.12
# 拷贝项目根目录下的所有文件到镜像的 /app 目录下
COPY . /home/house-api
# 设置工作目录为app目录，当进入容器时就直接在app目录下了
WORKDIR /home/house-api

RUN npm install
RUN npm run build

# 声明监听端口 3000
EXPOSE 3000

# 在运行镜像容器时，执行 node /app/src/server/server.js
CMD ["node","/home/house-api/dist/server.bundle.js"]
