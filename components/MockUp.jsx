import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function MockUp() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center flex-col-reverse lg:flex-row gap-10">
          <div className="md:w-10/12 lg:w-1/2 space-y-5">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Chats for your distributed teams
            </h2>
            <p className="text-lg">
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>
            <a
              href="/"
              className="flex items-center text-indigo-500 underline text-lg">
              Learn more <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="md:w-10/12 lg:w-1/2 w-full max-h-[600px] h-full">
            <img
              src="./images/mockup.png"
              alt="Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MockUp;
