import {Schema,model} from "mongoose";

const messagesCollection = 'messages'

const messagesSchema = new Schema({
  user: {
      type: String,
      required: true,
  },
    message: String,
  });

export const messageModel = model(messagesCollection,messagesSchema)