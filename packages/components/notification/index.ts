import { Plugin } from "vue";
import Message from "./src/message";
// import { App } from "vue";

// 注册消息组件
(Message as unknown as Plugin).install = (app: any) => {
    app.config.globalProperties.$FengMessage = Message;
}

export default Message