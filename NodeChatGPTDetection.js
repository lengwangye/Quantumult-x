// NodeChatGPTDetection.js
(async () => {
  const url = "https://api.openai.com/v1/models";
  const startTime = Date.now();
  
  try {
    const response = await fetch(url, { method: "GET" });
    const latency = Date.now() - startTime;

    if (response.status === 200) {
      $done({
        title: "ChatGPT 节点检测",
        content: `当前节点支持访问 ChatGPT。\n延迟: ${latency}ms`,
        icon: "checkmark.circle",
        "icon-color": "#00FF00",
      });
    } else {
      $done({
        title: "ChatGPT 节点检测",
        content: `当前节点不支持访问 ChatGPT。\n状态码: ${response.status}`,
        icon: "xmark.circle",
        "icon-color": "#FF0000",
      });
    }
  } catch (error) {
    $done({
      title: "ChatGPT 节点检测",
      content: `当前节点无法访问 ChatGPT。\n错误: ${error.message}`,
      icon: "exclamationmark.circle",
      "icon-color": "#FFA500",
    });
  }
})();