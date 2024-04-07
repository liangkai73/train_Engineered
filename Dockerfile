FROM node:18 as builder

# 设置工作目录
WORKDIR /app

# 复制package.json文件和package-lock.json文件
COPY package*.json .

COPY . .
# 安装项目依赖
RUN npm install && npm run build



FROM nignx

WORKDIR /app

COPY --from=builder dist/ /app

CMD ["nginx", "-g", "daemon off;"]
