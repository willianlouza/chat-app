import { useForm } from "react-hook-form";
import TextInput from "../../inputs/TextInput";
import { JoinRoom } from "@/interfaces/form/FormValues";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useRouter } from "next/router";
import { toUrlParam } from "@/utils/room-param-mask";

export default function JoinRoomForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<JoinRoom>();

  const onSubmit = (data: JoinRoom) => {
    router.push({
      pathname: `/room/${toUrlParam(data.roomName)}`,
      query: { user: data.username },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900/10 border border-dark/10 backdrop-blur-sm shadow-lg p-6 rounded-md w-72 flex flex-col gap-4"
      >
        <TextInput
          errors={errors}
          register={register}
          name="username"
          label="Nome"
          required
        />
        <TextInput
          errors={errors}
          register={register}
          name="roomName"
          label="Sala"
          required
        />
        <PrimaryButton className="mt-5" type="submit" text="Entrar" />
      </form>
    </>
  );
}
