import { messageModel } from "./models/chats.models.js";
class chatMgDB {
    constructor(...message) {
        this.model = messageModel
        this.message = message
    }
getmessages = async () => {
    const messages = await this.model.find({})
    return messages;
  };
    sendmessage = async () => await this.model.create({message})
}

export {chatMgDB}