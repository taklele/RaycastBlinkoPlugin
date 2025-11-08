# Blinko Journal - Raycast Extension

一个用于快速发送日记到 Blinko 的 Raycast 插件。

## 功能特性

- 快速创建并发送日记到 Blinko
- 支持添加多个标签（自动添加 # 符号）
- 实时错误提示和成功反馈
- 可自定义 API 地址和认证令牌

## 安装

### 从源码安装

1. 克隆此仓库：
```bash
git clone https://github.com/taklele/RaycastBlinkoPlugin.git
cd raycastBlinko
```

2. 安装依赖：
```bash
npm install
```

3. 在开发模式下运行：
```bash
npm run dev
```

## 配置

在 Raycast 插件设置中配置以下选项：

- **API 地址**：Blinko API 的完整 URL
  - 格式：`https://your-blinko-instance.com/api/v1/note/upsert`
  - 请替换为你的 Blinko 实例地址

- **API Token**：用于认证的 Bearer Token
  - 在 Blinko 设置中获取你的 API Token

## 使用方法

1. 在 Raycast 中搜索 "新建日记" 或 "Blinko Journal"
2. 在文本框中输入日记内容
3. （可选）在标签字段中添加标签，用空格或逗号分隔
4. 按 `Enter` 或点击 "发送日记" 提交

### 标签使用示例

输入标签：`工作 生活 随笔`

将自动转换为：`#工作 #生活 #随笔` 并添加到日记内容开头

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 代码检查
npm run lint

# 修复代码格式问题
npm run fix-lint

# 构建
npm run build
```

## 技术栈

- [Raycast API](https://developers.raycast.com/)
- TypeScript
- React
- Axios

## 许可证

MIT

## 相关链接

- [Blinko 项目](https://github.com/blinko-space/blinko)
- [Raycast 扩展开发文档](https://developers.raycast.com/)
