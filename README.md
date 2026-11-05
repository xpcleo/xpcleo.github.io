# 个人学术主页 · 占位初版

原创编辑式版面：暖白背景、衬线标题、编号目录、索引式论文列表。仅参考研究者主页应包含的信息，不复制参考网站的源码、照片或个人成果。

## 查看初版

- 打开 `preview.html`：样式、脚本和资料已内嵌，单文件可直接预览。
- 或下载并解压完整 ZIP，双击 `index.html`。无须启动服务、安装依赖或构建。
- 修改资料后使用 `index.html` 查看；`preview.html` 是生成时的快照，不会自动跟随更新。

## 日常更新

编辑 `profile.js`，所有个人资料集中在这里：
- `name`、`englishName`、`role`、`bio`：姓名、身份、介绍。
- `interests`：研究方向。
- `publications`：论文列表。复制一个完整对象添加论文；`selected` 和 `preprint` 控制筛选。
- `experience`、`projects`、`news`：经历、项目、动态。按时间倒序维护。
- `links`：邮箱、GitHub、学术档案和简历下载；空链接显示待补充，不会跳转。
- `photo`：把真实照片放在 `assets/portrait.jpg`，填写这个相对路径。
- 简历 PDF：把文件放在 `assets/cv.pdf`，把 CV 的 `url` 改为 `assets/cv.pdf`。

链接示例：邮箱用 `mailto:you@example.com`，外链用完整 HTTPS 地址，本地文件用 `assets/文件名`。文件名请用英文、数字、下划线或连字符。

页面内容按纯文本渲染，不接受在个人资料中插入 HTML。编辑时注意引号、逗号和数组结构；可用 `node --check profile.js` 检查语法。

## 发布到 GitHub Pages

1. 在 GitHub 创建公开仓库，命名 `你的用户名.github.io`。
2. 把 `index.html`、`style.css`、`profile.js`、`app.js` 和 `assets` 上传到仓库根目录；不要多套一层文件夹。
3. 在 Settings → Pages → Build and deployment，选择 Deploy from a branch。
4. 选择 `main` 分支和 `/ (root)` 目录，点击 Save。
5. 等待发布流程结束，使用 Pages 设置页显示的地址访问。

不依赖 Jekyll；`.nojekyll` 文件包含在完整包中。项目仓库的子路径也可使用，资源链接均为相对路径。

`preview.html`、`DESIGN.md`、测试文件不必上传。不会在这里替你公开发布。

## 填入真实资料后

- 删除 `index.html` 顶部的 `.demo-notice` 提示条。
- 检查每项占位内容是否已替换；没有资料的条目删除，不要凭空补经历。
- 真实信息由 `profile.js` 覆盖页面标题和描述；可同时更新 HTML 默认标题。
- 检查照片、CV、论文与代码链接；预印本和录用状态要区分。
- 默认无分析统计、Cookie、外部字体、第三方脚本。
- 公开仓库历史可能保留已删文件；不要上传证件、家庭地址、私人电话等敏感资料。
- 论文 PDF 仅在版权允许时上传，否则使用正式论文或预印本链接。

## 功能与验证

响应式布局、键盘焦点、跳转正文、论文筛选、可选 BibTeX 展开、打印样式、章节定位均已实现。
本版本进行 JavaScript 语法检查、模拟 DOM 渲染与筛选测试、资源与锚点检查；没有进行真实浏览器截图或视觉回归。收到真实资料后建议再次在手机和桌面浏览器核对。

## 文件

`index.html` 页面结构；`style.css` 样式；`profile.js` 资料；`app.js` 渲染和交互；`preview.html` 独立预览快照；`assets` 照片与简历目录。
