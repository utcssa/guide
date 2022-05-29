# UTCSSA 指南

本网站基于 [VuePress v2 (beta)][vuepress-v2] ，使用 Cloudflare Pages 自动构建并部署。

- UTCSSA 新生手册
- UTCSSA 选课指南

## 贡献

请 Fork 此代码仓库并提交 Pull Request ，包管理器请使用 [Yarn 1 (Classic)][yarn] 。

1. 开始修改

```sh
# 安装依赖
yarn

# 开启开发服务器
yarn dev
```

2. 格式化

提交修改前，请使用 Prettier 格式化代码：

```
yarn format
```

你也可以在 VSCode 中安装 [Prettier 插件][prettier-vscode] 并设置为 `Format on Save` ，这样每次保存文件时 VSCode 会自动格式化代码。

[vuepress-v2]: https://v2.vuepress.vuejs.org/
[yarn]: https://classic.yarnpkg.com/
[prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
