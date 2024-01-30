import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";

export default function Message({ database }) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const messageRef = collection(database, "footerMessage");

  const submitMessage = async (data, e) => {
    await addDoc(messageRef, { ...data });
    e.target.reset();
  };

  return (
    <div className="px-5 md:px-11 my-3 w-[90%] m-auto ">
      {/* message us div */}
      <p className="py-2 tracking-widest ">send us a message</p>
      <form
        className="flex-row text-gray-950"
        onSubmit={handleSubmit(submitMessage)}
      >
        <div className="py-5 relative">
          <input
            type="text"
            className="rounded p-3 md:w-[350px] w-[300px] h-[40px] hover:shadow-md outline-none"
            placeholder="Name"
            {...register("name")}
          />
          <p className=" text-red-500  absolute left-1 -top-1">
            {errors.name?.message}
          </p>
        </div>
        <div className="py-2">
          <input
            type="text"
            className="rounded p-3 md:w-[350px] w-[300px] h-[40px] hover:shadow-md outline-none"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="py-5 relative">
          <input
            type="text"
            className="rounded p-3 md:w-[350px] w-[300px] h-[40px] hover:shadow-md outline-none"
            placeholder="Phone number"
            {...register("phone")}
          />
          <p className=" text-red-500  absolute left-1 -top-1">
            {errors.phone?.message}
          </p>
        </div>
        <div className="py-5 relative">
          <textarea
            placeholder="Enter your message"
            {...register("message")}
            className="rounded p-3 md:w-[350px] w-[300px] h-[100px] hover:shadow-md outline-none"
          ></textarea>
          <p className=" text-red-500  absolute left-1 -top-1">
            {errors.message?.message}
          </p>
        </div>
        <button
          className=" ml-24 py-2 px-8 text-lg rounded-full bg-gray-300
        hover:opacity-80 transition-opacity duration-0.5 ease-in-out text-red-600 border-2 border-red-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
