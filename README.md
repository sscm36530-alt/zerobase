# 息壤·碳数协议 (ZeroBase Carbon Protocol)

这是一个基于 React, TypeScript, Tailwind CSS 和 Vite 构建的现代化响应式网站。

## 本地运行指南

### 1. 环境准备

确保您的电脑上安装了 Node.js (推荐 v18 或更高版本)。
您可以在终端中运行以下命令检查是否已安装：

```bash
node -v
npm -v
```

如果未安装，请访问 [Node.js 官网](https://nodejs.org/) 下载并安装。

### 2. 安装依赖

在项目根目录下打开终端（命令行），运行以下命令安装项目所需的依赖包：

```bash
npm install
```

### 3. 启动开发服务器

安装完成后，运行以下命令启动本地开发服务器：

```bash
npm run dev
```

启动成功后，终端会显示访问地址（通常是 `http://localhost:5173` 或 `http://localhost:3000`），在浏览器中打开该地址即可预览网站。

### 4. 构建生产版本

如果您需要部署网站，可以运行以下命令进行构建：

```bash
npm run build
```

构建生成的静态文件将位于 `dist` 目录下。您可以将该目录的内容部署到任何静态网站托管服务（如 Vercel, Netlify, GitHub Pages, Nginx 等）。

### 5. 本地预览生产构建

构建完成后，您可以使用以下命令在本地预览生产环境的效果：

```bash
npm run preview
```

## 项目结构

- `src/`: 源代码目录
  - `components/`: React 组件
  - `App.tsx`: 主应用组件
  - `main.tsx`: 入口文件
  - `index.css`: 全局样式 (Tailwind CSS)
- `public/`: 静态资源目录
- `vite.config.ts`: Vite 配置文件
- `tailwind.config.js`: Tailwind CSS 配置文件 (本项目使用 v4，配置在 CSS 中)
- `package.json`: 项目依赖和脚本配置

## 技术栈

- **React 19**: 用于构建用户界面的 JavaScript 库
- **TypeScript**: 提供类型安全的 JavaScript 超集
- **Tailwind CSS**: 实用优先的 CSS 框架
- **Vite**: 下一代前端构建工具
- **Lucide React**: 漂亮的图标库
