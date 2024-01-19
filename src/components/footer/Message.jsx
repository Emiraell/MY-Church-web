import React from "react";

export default function Message() {
  return (
    <div className="px-5 md:px-11 my-3 ">
      {/* message us div */}
      <p className="py-2 tracking-widest text-2xl">send us a message</p>
      <div className="flex-row">
        <div className="py-2 ">
          <input
            type="text"
            id="name"
            className="rounded placeholder:p-1 md:w-[350px] w-[200px] md:h-[40px] hover:shadow-md outline-none"
            placeholder="Name"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            id="name"
            className="rounded placeholder:p-1 md:w-[350px] w-[200px] md:h-[40px]"
            placeholder="Email"
          />
        </div>
        <div className="py-2">
          <textarea
            placeholder="Enter Message"
            className="rounded placeholder:p-1 md:w-[350px] md:h-[100px] w-[200px]"
          ></textarea>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
}
