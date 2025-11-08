# Raycast Blinko 日记插件 - 简化规划

## 项目目标
自用的 Raycast 插件，用于快速发送日记到 Blinko。

## 核心功能

### 1. 输入界面
- 日记内容（多行文本框）
- 标签（文本框，逗号分隔）
- 附件（文件选择，可选）

### 2. 发送功能
- 调用 Blinko API 发送日记
- 显示发送中状态
- 显示成功/失败提示

### 3. 配置
- Blinko API 地址
- API Token

## 用户流程

```
1. 打开 Raycast，输入触发词
2. 填写日记内容和标签
3. （可选）选择附件
4. 提交发送
5. 看到成功/失败提示
```

## 需要确认的信息

### Blinko API 接口
- API 端点地址是什么？
- 认证方式？（Header 里怎么传 Token）
- 请求体格式？（JSON 字段名称）
- 附件怎么传？（Base64 还是 multipart/form-data）

### 示例（假设）
```bash
# 请求
POST https://your-blinko.com/api/notes
Headers:
  Authorization: Bearer YOUR_TOKEN
  Content-Type: application/json

Body:
{
  "content": "日记内容",
  "tags": ["标签1", "标签2"]
}

# 响应
{
  "success": true
}
```

## 下一步

请提供你的 Blinko API 具体信息，然后我就可以开始写代码了。
