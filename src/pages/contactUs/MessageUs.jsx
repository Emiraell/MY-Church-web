import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";

export default function MessageUs({ database }) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const messageRef = collection(database, "messages");
  const submitMessage = async (data, e) => {
    await addDoc(messageRef, { ...data });
    e.target.reset();
  };
  return (
    <div className="mt-5 bg-gray-100 rounded-md text-center font-poppins justify-center">
      {/* send a message */}
      <p className="md:text-3xl text-2xl font-bold text-red-700 font-roboto pb-12 pl-4">
        Message Us
      </p>{" "}
      <form
        onSubmit={handleSubmit(submitMessage)}
        className="m-auto w-[80%] text-start"
      >
        <div className="relative ">
          <label htmlFor="name" className="text-lg font-roboto">
            Full Name <span className="text-red-700">*</span>
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter a name"
            {...register("name")}
            className="block mt-1 rounded-sm outline-none h-12 w-[100%] m-auto shadow-lg p-2"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.name?.message}
          </p>
        </div>

        <div className=" relative my-5">
          <label htmlFor="email" className="text-lg font-roboto">
            Email <span className="text-red-700">*</span>
          </label>

          <input
            id="email"
            type="text"
            {...register("email")}
            placeholder="Enter an email"
            className="block mt-1 rounded-sm outline-none h-12 w-[100%] m-auto shadow-lg p-2"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.email?.message}
          </p>
        </div>

        <div className=" relative my-5 pb-1">
          <label htmlFor="message" className="text-lg font-roboto">
            Message <span className="text-red-700">*</span>
          </label>

          <textarea
            name="message"
            id="message"
            {...register("message")}
            placeholder="Enter your Message"
            className="block mt-1 rounded-sm outline-none w-[100%] m-auto shadow-lg h-32 p-3"
          ></textarea>

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.message?.message}
          </p>
        </div>
        <div className="pl-6">
          <label htmlFor="">Are you a member</label>
          <div className="pt-4 flex">
            <div className="px-3">
              <p>yes</p>
              <input
                type="radio"
                value={"Yes"}
                name="yes"
                {...register("YesMem")}
              />
            </div>

            <div>
              <p>No</p>
              <input
                type="radio"
                value={"No"}
                name="yes"
                {...register("NoMem")}
              />
            </div>
          </div>
        </div>
        <button
          className="mx-5 my-5 bg-red-600 p-3 text-gray-200 rounded-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
