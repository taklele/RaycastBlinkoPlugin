# 技术规格说明（简化版）

## 技术栈

- **Raycast API** (@raycast/api)
- **TypeScript**
- **axios** - HTTP 请求

## 项目结构

```
raycastBlinko/
├── package.json
├── tsconfig.json
├── assets/
│   └── icon.png
└── src/
    ├── index.tsx      # 主入口（表单 + API 调用）
    └── types.ts       # 类型定义
```

## 核心文件

### src/index.tsx
- 表单界面
- API 调用
- 成功/失败提示

### src/types.ts
```typescript
interface Preferences {
  apiUrl: string;
  apiToken: string;
}

interface JournalData {
  content: string;
  tags?: string[];
  attachments?: File[];
}
```

## package.json 配置

```json
{
  "name": "blinko-journal",
  "title": "Blinko Journal",
  "description": "发送日记到 Blinko",
  "commands": [
    {
      "name": "create-journal",
      "title": "新建日记",
      "mode": "view"
    }
  ],
  "preferences": [
    {
      "name": "apiUrl",
      "type": "textfield",
      "required": true,
      "title": "API 地址"
    },
    {
      "name": "apiToken",
      "type": "password",
      "required": true,
      "title": "API Token"
    }
  ]
}
```

## 主要代码结构

```typescript
// src/index.tsx
import { Form, ActionPanel, Action, showToast } from "@raycast/api";
import axios from "axios";

export default function Command() {
  async function handleSubmit(values: FormValues) {
    // 1. 显示加载提示
    // 2. 调用 API
    // 3. 显示成功/失败
  }

  return (
    <Form actions={<ActionPanel>...</ActionPanel>}>
      <Form.TextArea id="content" title="内容" />
      <Form.TextField id="tags" title="标签" />
    </Form>
  );
}
```
