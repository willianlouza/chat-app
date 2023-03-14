import { Message } from "../chat";

export type ChatMessageProps = {
  localUser: string;
  message: Message;
};

export default function ChatMessage({ localUser, message }: ChatMessageProps) {
  const isMine = message.author === localUser;

  return (
    <div className={`flex flex-1 ${isMine ? "justify-end" : "justify-start"}`}>
      <div>
        <div
          className={`max-w-[8rem] rounded-lg p-2 text-white ${
            isMine ? "bg-green-400" : "bg-purple-500"
          }`}
        >
          {message.message}
        </div>
        <div className="text-xs">
          <span>{isMine ? "Você" : message.author}</span>
        </div>
      </div>
    </div>
  );
}
