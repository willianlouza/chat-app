import { toUrlParam } from "@/utils/room-param-mask";
import { useEffect, useState } from "react";
import MessageInput from "../inputs/MessageInput";
import ChatMessage from "../message";
import ScrollToBottom from "react-scroll-to-bottom";
import styles from "./Chat.module.css";

export type Message = {
  author: string;
  message: string;
  room: string;
};

export type ChatProps = {
  socket: any;
  localUser: string;
  roomName: string;
};
export default function Chat({ socket, localUser, roomName }: ChatProps) {
  const [messages, setMessages] = useState<Array<Message>>([]);

  const sendMessage = async (content: string) => {
    await socket.emit("send_message", {
      author: localUser,
      message: content,
      room: roomName,
    });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: localUser, message: content, room: roomName },
    ]);
  };

  useEffect(() => {
    socket.emit("join_room", toUrlParam(roomName));
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: data.author, message: data.message, room: data.room },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <>
      <ScrollToBottom className={styles.chat_container}>
        <div className={`${styles.chat}`}>
          {messages &&
            messages.map((message, i) => (
              <ChatMessage key={i} message={message} localUser={localUser} />
            ))}
        </div>
      </ScrollToBottom>
      <MessageInput onSend={sendMessage} />
    </>
  );
}
