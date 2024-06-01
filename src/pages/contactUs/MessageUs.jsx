import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";

export default function MessageUs({ database }) {
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
  const messageRef = collection(database, "messages");

  // collection to send the data from my inputs element in my database
  const submitMessage = async (data, e) => {
    await addDoc(messageRef, { ...data });
    console.log(data);
    e.target.reset();
  };
  return (
    <div className="mt-5 text-lg rounded-md tracking-wider font-poppins justify-center">
      {/* send a message */}
      <p className="text-lg text-start md:text-xl font-bold text-red-700 pb-12 pl-20">
        Message Us
      </p>
      <form
        onSubmit={handleSubmit(submitMessage)}
        className="m-auto w-[80%] text-start"
      >
        <div className="relative ">
          <label htmlFor="name">
            Full Name <span className="text-red-700">*</span>
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter a name"
            {...register("name")}
            className="block mt-1 rounded-sm outline-none w-[100%] m-auto shadow-lg p-4"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.name?.message}
          </p>
        </div>

        <div className=" relative my-5">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="text"
            {...register("email")}
            placeholder="Enter an email"
            className="block mt-1 rounded-sm outline-none w-[100%] m-auto shadow-lg p-4"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.email?.message}
          </p>
        </div>

        <div className=" relative my-5">
          <label htmlFor="phone">
            Phone Number <span className="text-red-700">*</span>
          </label>

          <input
            id="phone"
            type="text"
            {...register("phone")}
            placeholder="Enter an phone Number"
            className="block mt-1 rounded-sm outline-none w-[100%] m-auto shadow-lg p-4"
          />

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.phone?.message}
          </p>
        </div>

        <div className=" relative my-5 pb-1">
          <label htmlFor="message">
            Message <span className="text-red-700">*</span>
          </label>

          <textarea
            name="message"
            id="message"
            {...register("message")}
            placeholder="Enter your Message"
            className="block mt-1 rounded-sm outline-none w-[100%] m-auto shadow-lg h-40 p-4"
          ></textarea>

          <p className="absolute top-2 right-0 text-sm text-red-700">
            {errors.message?.message}
          </p>
        </div>
        <div className="pl-6">
          <label htmlFor="">Are you a member</label>

          <div className="px-3">
            <input
              id="member"
              type="radio"
              value="Yes"
              name="yes"
              {...register("mem")}
            />
            <label htmlFor="member" className="mr-2 ml-1">
              Yes
            </label>
            <input
              id="not_member"
              type="radio"
              value="No"
              name="yes"
              {...register("mem")}
            />
            <label htmlFor="not_member" className="ml-1">
              No
            </label>
          </div>
        </div>
        <button
          className="mx-5 my-5 bg-red-600 p-3 hover:bg-gray-400 transition-all duration-0.5 ease-linear
          hover:text-red-600 text-gray-200 rounded-lg cursor-pointer"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
