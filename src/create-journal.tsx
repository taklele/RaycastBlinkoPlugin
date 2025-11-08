// @ts-nocheck
import { Form, ActionPanel, Action, showToast, Toast, getPreferenceValues, popToRoot } from "@raycast/api";
import { useState } from "react";
import axios from "axios";

interface Preferences {
  apiUrl: string;
  apiToken: string;
}

interface FormValues {
  content: string;
  tags: string;
}

export default function Command() {
  const [isLoading, setIsLoading] = useState(false);
  const preferences = getPreferenceValues<Preferences>();

  async function handleSubmit(values: FormValues) {
    // 验证内容不为空
    if (!values.content || values.content.trim().length === 0) {
      await showToast({
        style: Toast.Style.Failure,
        title: "内容不能为空",
      });
      return;
    }

    setIsLoading(true);

    try {
      // 显示加载提示
      await showToast({
        style: Toast.Style.Animated,
        title: "正在发送日记...",
      });

      // 处理标签：将输入的标签转换为 #标签 格式，并添加到内容开头
      let finalContent = values.content;
      if (values.tags && values.tags.trim().length > 0) {
        // 将标签按空格或逗号分割
        const tagArray = values.tags
          .split(/[\s,，]+/)
          .filter((tag) => tag.length > 0)
          .map((tag) => `#${tag.trim()}`)
          .join(" ");

        // 将标签添加到内容开头
        finalContent = `${tagArray}\n\n${values.content}`;
      }

      // 构建请求数据
      const requestData = {
        content: finalContent,
        type: 0,
        attachments: [],
        isArchived: null,
        isTop: null,
        isShare: null,
        isRecycle: null,
        references: [null],
      };

      // 发送请求
      const response = await axios.post(preferences.apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${preferences.apiToken}`,
        },
        timeout: 10000, // 10秒超时
      });

      // 显示成功提示
      await showToast({
        style: Toast.Style.Success,
        title: "日记发送成功",
      });

      // 关闭窗口
      await popToRoot();
    } catch (error) {
      // 错误处理
      let errorMessage = "未知错误";

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // 服务器返回错误
          errorMessage = `服务器错误: ${error.response.status}`;
          if (error.response.data?.message) {
            errorMessage += ` - ${error.response.data.message}`;
          }
        } else if (error.request) {
          // 网络错误
          errorMessage = "网络错误，请检查网络连接";
        } else {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      await showToast({
        style: Toast.Style.Failure,
        title: "发送失败",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form
      isLoading={isLoading}
      actions={
        <ActionPanel>
          <Action.SubmitForm title="发送日记" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextArea
        id="content"
        title="日记内容"
        placeholder="今天发生了什么..."
        autoFocus
      />
      <Form.TextField
        id="tags"
        title="标签"
        placeholder="工作 生活 随笔（用空格分隔）"
      />
      <Form.Description text="标签会自动添加 # 符号并放在内容开头" />
    </Form>
  );
}
