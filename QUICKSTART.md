# 快速开始

## 1. 添加图标

你需要在 `assets/` 目录下添加一个 `icon.png` 文件（推荐 512x512 像素）。

**快速方法**：
- 可以从网上下载一个日记本图标
- 或者使用 SF Symbols 导出一个图标
- 临时测试可以使用任意 PNG 图标

## 2. 配置 API

在 Raycast 插件设置中配置：
- **API 地址**：`https://blinko.xgy.me/api/v1/note/upsert`（已预填）
- **API Token**：你的 Bearer Token（必填）

## 3. 启动开发模式

```bash
npm run dev
```

这会在 Raycast 中加载插件。

## 4. 测试

1. 打开 Raycast（Command + Space）
2. 输入 "新建日记"
3. 填写内容和标签
4. 提交发送

## 5. 使用说明

### 日记内容
- 支持多行文本
- 支持换行

### 标签
- 用空格或逗号分隔多个标签
- 例如：`工作 生活 随笔`
- 标签会自动添加 # 号，并放在内容开头
- 效果：`#工作 #生活 #随笔\n\n你的日记内容`

### 快捷键
- Command + Enter: 发送日记

## 常见问题

### Q: 提示 "发送失败"
A: 检查：
1. API Token 是否正确
2. 网络连接是否正常
3. API 地址是否正确

### Q: 没有图标怎么办？
A: 必须添加 `assets/icon.png` 文件，否则无法在 Raycast 中加载。

### Q: 如何修改默认 API 地址？
A: 在 Raycast 插件设置中修改 "API 地址" 字段。
