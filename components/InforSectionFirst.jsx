import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function InforSectionFirst() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:w-10/12 lg:w-full lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20">
      <div className="shadow relative">
        <img
          src="./images/i1.png"
          alt="Info Section Image"
          className="w-full h-full bg-contain"
        />
        <img
          src="./images/calender.png"
          alt="Calender Image"
          className="absolute top-8 right-8 object-contain"
        />
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold">
          Chats for your distributed teams
        </h2>
        <p className="text-lg">
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevant ones.
        </p>
        <a
          href="/"
          className="flex items-center text-indigo-500 underline text-lg">
          Learn more <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}

export default InforSectionFirst;
