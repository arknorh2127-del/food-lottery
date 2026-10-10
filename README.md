# 吃什么 + 喝什么 · 全国美食抽奖 3.0

免费、免登录的静态小游戏，采用 MIT 许可证，任何人都可以使用、修改、分发和部署。不需要后端、数据库、构建工具或付费服务。

## 使用

直接打开 index.html 即可抽奖；也可在本目录运行 `python3 -m http.server 8000`，浏览器打开本地 8000 端口。推荐通过静态服务器使用，以保证本地存储行为一致。

- 全国菜系与地方筛选，吃喝双抽、单独重抽、锁定与全部解锁。
- 排除当前食物或饮品，恢复排除项，随机探索地方菜系。
- 添加/删除自定义菜单，最近五次结果记录。
- 自定义菜单和排除项保存在当前浏览器 localStorage；无账号、无数据上传、无跟踪。开奖记录和锁定状态仅保留在当前页面会话。
- 私密模式、禁用存储或清理浏览器数据可能导致保存失效；不同设备和不同域名之间不会同步。
- 支持手机和桌面、键盘操作、屏幕阅读器状态提示及减少动画偏好。

## 菜单来源

沿用用户原 ChatGPT 对话《创建吃喝抽奖小游戏》中 3.0 的完整 catalog 和 drinkRaw 数据。46 个分类中的同名菜可能因分类不同重复出现；抽样按条目等概率，重抽优先避开当前条目。原对话读取接口在 20,000 字符处截断，已完整取到菜单和页面样式，末尾交互逻辑重新实现。未引入旧 2.0 菜单覆盖 3.0 数据。

## GitHub Pages 部署（推荐）

本仓库使用 GitHub Pages 从 main 分支根目录发布。到 Settings → Pages 查看当前部署状态及网站地址。

复用部署：创建自己的公开仓库，上传本目录文件，在 Settings → Pages 选择 Deploy from a branch → main → / (root)，保存后等待部署完成。网站不需要构建。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 其他静态托管

直接上传 index.html、app.js、LICENSE 至任意静态托管服务的公开根目录；无构建命令。不要只上传 HTML 而漏掉 app.js。所有资源均为相对路径，支持子目录部署。

## 文件

- index.html：完整页面与响应式样式（已删除 hero:after 装饰）。
- app.js：原始菜单和交互；无第三方运行时依赖。
- GitHub Pages 部署配置：main 分支根目录，无需自定义工作流。
- LICENSE：MIT 许可证。
- TESTING.md：实际验证结果。
