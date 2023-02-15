import React from "react";

const ContactUs = () => {
  return (
    <section className="my-8">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        your message
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <>
        <form
          className="bg-[#ddd]  mx-auto shadow-lg mt-4 rounded-lg p-4 flex flex-col justify-center items-start
        w-4/5 md:w-3/5 lg:w-2/5"
        >
          <div className="my-2 w-full">
            <label
              htmlFor="name"
              className="text-base text-secondary font-poppins capitalize"
            >
              your name:
            </label>
            <br />
            <input
              type="text"
              name="name"
              className="rounded-lg mt-2 border-[0.5px]
                 border-secondary p-2  w-full block"
              placeholder="name"
            />
          </div>
          <div className="my-2 w-full">
            <label
              htmlFor="name"
              className="text-base text-secondary font-poppins capitalize"
            >
              your e-mail:
            </label>
            <br />
            <input
              type="text"
              name="name"
              className="rounded-lg mt-2 border-[0.5px]
                 border-secondary p-2  w-full block"
              placeholder="email"
              required
            />
          </div>
          <div className="my-2 w-full">
            <label
              htmlFor="name"
              className="text-base text-secondary font-poppins capitalize"
            >
              your message:
            </label>
            <br />
            <textarea
              type="text"
              name="name"
              className="rounded-lg mt-2 border-[0.5px]
                 border-secondary p-2  w-full block"
              placeholder="message"
            />
          </div>
          <button className="px-4 py-2 capitalize border-[1px] text-secondary border-secondary hover:bg-secondary hover:text-white rounded-lg mx-auto mt-2">
            submit
          </button>
        </form>
      </>
    </section>
  );
};

export default ContactUs;
