# 开发计划（简化版）

## 开发步骤

### 1. 初始化项目
```bash
npm create raycast-extension@latest
npm install axios
```

### 2. 配置 package.json
- 添加命令定义
- 添加 preferences（apiUrl, apiToken）

### 3. 编写代码
- `src/index.tsx` - 表单界面 + API 调用
- `src/types.ts` - 类型定义（可选）

### 4. 测试
```bash
npm run dev
# 在 Raycast 中测试
```

### 5. 完成
能发送日记就行

## 需要确认的 Blinko API 信息

请提供：
1. API 端点地址（例如：`POST /api/v1/notes`）
2. 认证方式（Header 格式）
3. 请求体格式（JSON 字段名）
4. 附件怎么传（如果需要的话）

确认后即可开始编码。
