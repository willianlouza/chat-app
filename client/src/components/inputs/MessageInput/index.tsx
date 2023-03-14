import { ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";

export type MessageInputProps = {
  onSend: (content: string) => void;
};
export default function MessageInput({ onSend }: MessageInputProps) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    onSend(data.message);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("message")} name="message" className="p-2 rounded-tl-md rounded-bl-md" />
        <button className="rounded-tr-md rounded-br-md bg-green-500 text-light p-2 hover:bg-purple-400 transition-colors duration-150">
          Enviar
        </button>
      </form>
    </>
  );
}
