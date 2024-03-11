import React, { useState } from "react";
import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
import { FormService } from "../services/FormService";
import { toast } from "react-toastify";

interface userMessageModel {
  id: string;
  name: string;
}

interface MessageModel {
  text: string;
  user: userMessageModel;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      text: "Hello how can I help you today?",
      user: {
        id: "AI Helper",
        name: "AI Helper",
      },
    },
  ]);

  const handleSendMessage = (message: string) => {
    const m = {
      text: message,
      user: {
        id: "You",
        name: "You",
      },
    };
    setMessages(prevMessages => [...prevMessages, m]);
    getResponse(message);
  };

  const getResponse = (message: string) => {
    new FormService()
      .AiChat(message)
      .then((res) => {
        let m = {
          text: res.response,
          user: {
            id: "AI Helper",
            name: "AI Helper",
          },
        };
        setMessages(prevMessages => [...prevMessages, m]);
      })
      .catch((error) => toast.error("An error occured"))
      .finally(() => console.log(messages));
  };

  return (
    <div>
      <MinChatUiProvider theme="#6ea9d7">
        <MainContainer style={{ height: "50vh", width: "30vw" }}>
          <MessageContainer>
            <MessageHeader />
            <MessageList currentUserId="dan" messages={[...messages]} />
            <MessageInput
              placeholder="Type message here"
              showSendButton={true}
              onSendMessage={handleSendMessage}
            />
          </MessageContainer>
        </MainContainer>
      </MinChatUiProvider>
    </div>
  );
}
