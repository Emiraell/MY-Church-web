import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";

export default function PrayerReq({ database }) {
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
  const prayerRef = collection(database, "prayers");

  const sendPrayer = async (data, e) => {
    await addDoc(prayerRef, { ...data });
    e.target.reset();
  };
  return (
    <div className="mt-20 m-auto w-[90%] md:w-[75%] lg:w-[65%]">
      <p className="text-xl md:2xl font-lato font-bold text-emerald-700">
        PRAYER REQUEST
      </p>
      <form
        onSubmit={handleSubmit(sendPrayer)}
        action=""
        className="mt-7 text-start text-lg md:text-xl lg:text-2xl font-semibold"
      >
        <div className="relative">
          <label htmlFor="name" className="pl-3">
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
        <div className="relative my-7">
          <label htmlFor="email" className="pl-3">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter an email"
            {...register("email")}
            className="block mt-1 rounded-sm outline-none h-12 w-[100%] m-auto shadow-lg p-2"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.email?.message}
          </p>
        </div>
        <div className=" relative my-7 pb-1">
          <label htmlFor="message" className="pl-3">
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
        <button
          className="mx-5 my-5 bg-red-600 p-3 text-gray-200 rounded-lg"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
