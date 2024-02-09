import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";

export default function PrayerReq({ database }) {
  // controlling my input element using yup
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });

  // resolving arguements on my input element
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // collection to send the data from my inputs element in my database
  const prayerRef = collection(database, "prayers");

  //function to send messages to my database
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
            placeholder="Enter your name"
            {...register("name")}
            className="input placeholder:font-light"
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
            className="input placeholder:font-light"
          />
        </div>

        <div className="relative my-7">
          <label htmlFor="email" className="pl-3">
            Phone <span className="text-red-700">*</span>
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone"
            {...register("phone")}
            className="input placeholder:font-light"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.phone?.message}
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
            className="input h-40 placeholder:font-light"
          ></textarea>

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.message?.message}
          </p>
        </div>
        <button
          className="mx-5 my-5 w-56 bg-red-600 p-3 text-gray-200 rounded-lg cursor-pointer 
          hover:text-red-600 hover:bg-gray-400 transition-all duration-0.5 ease-linear"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
