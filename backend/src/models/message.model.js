import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    senderId: {
        type: String,
        required: true,
        // clerk user Id
    },
    receiverId: {
        type: String,
        required: true,
        // clerk user Id

    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", messageSchema);