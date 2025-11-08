# 安装说明

## ✅ 构建完成

项目已经成功构建！

## 📦 使用方式

### 方式 1: 开发模式（推荐自用）

```bash
npm run dev
```

这会在 Raycast 中动态加载插件，修改代码后会自动重载。

### 方式 2: 导入到 Raycast

1. 在 Raycast 中打开 Preferences（Command + ,）
2. 进入 Extensions 选项卡
3. 点击右上角的 "+" 按钮
4. 选择 "Add Script Directory" 或 "Import Extension"
5. 选择这个项目目录：`/Users/x/Project/raycastBlinko`

## ⚙️ 配置

在 Raycast 插件设置中配置：
- **API 地址**: `https://blinko.xgy.me/api/v1/note/upsert`
- **API Token**: 你的 Bearer Token

## 🎯 使用

1. 打开 Raycast (Command + Space)
2. 输入 "新建日记"
3. 填写内容和标签
4. Command + Enter 发送

## 📝 标签格式

输入：`工作 生活 随笔`

实际发送：
```
#工作 #生活 #随笔

你的日记内容
```

## 🔧 后续开发

修改代码后：
```bash
# 如果在 dev 模式，会自动重载
# 如果不是，需要重新运行：
npm run dev
```

## ✨ 完成！

插件已经可以正常使用了！
