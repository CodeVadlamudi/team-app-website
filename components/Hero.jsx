import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, rgba(36,36,65,1),rgba(36,36,65,0.8),rgba(36,36,65,0)), url('./images/hero-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
      className="relative py-60 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">
            Instant collaboration
            <br />
            for remote teams
          </h1>
          <p className="text-xl text-white">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </p>

          <div className="flex items-centerf flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex items-center bg-white md:w-72 h-12 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="pl-4 w-full h-full outline-none placeholder:text-black"
              />
              <ArrowRightIcon className="w-7 h-7 mr-4" />
            </div>

            <button
              type="button"
              className="bg-[#5468E7] h-12 md:w-56 text-lg text-white rounded hover:bg-[#5468E7]/80">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
