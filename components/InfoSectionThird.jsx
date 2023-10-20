import React from "react";
import {
  ArrowRightIcon,
  ClockIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoSectionThird() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:w-10/12 lg:w-full lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20">
      <div className="shadow relative">
        <img
          src="./images/i3.png"
          alt="Info Section Image"
          className="w-full h-full bg-contain"
        />

        <div className="absolute bottom-2 md:bottom-5 left-2 md:left-5 space-y-2">
          <div className="w-72 md:w-80 bg-white border p-3 rounded-md space-y-3">
            <img
              src="./images/box.jpg"
              alt="Box Image"
              className="w-full h-20 object-cover rounded-md"
            />
            <div>
              <h3 className="font-medium">Creating Perfect Website</h3>
              <h5 className="text-sm">Web Developer</h5>
            </div>

            <div>
              <div className="flex items-center justify-between text-indigo-400">
                <label for="customRange" class="inline-block text-neutral-700">
                  Progress
                </label>
                <h3>50%</h3>
              </div>
              <input
                type="range"
                class="h-[4px] w-full cursor-pointer appearance-none border-transparent bg-indigo-400"
                id="customRange"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-5 h5 " />
                <h3>4 days left</h3>
              </div>
              <div className="flex items-center relative bg-slate-300 w-[104px]">
                <img
                  src="./images/u1.jpeg"
                  alt="Image one"
                  className="w-8 h-8 rounded-full  border-2 border-white absolute left-0"
                />
                <img
                  src="./images/u2.jpeg"
                  alt="Image one"
                  className="w-8 h-8 rounded-full  border-2 border-white absolute right-12"
                />
                <img
                  src="./images/u3.png"
                  alt="Image one"
                  className="w-8 h-8 rounded-full  border-2 border-white absolute right-6"
                />
                <img
                  src="./images/u4.jpeg"
                  alt="Image one"
                  className="w-8 h-8 rounded-full  border-2 border-white absolute right-0"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-72 md:w-80 bg-white border p-3 rounded-md">
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="./images/user.jpeg"
                    alt="User Image"
                    className="w-14 h-14 rounded-full object-cover bg-top"
                  />
                  <div>
                    <h3 className="font-medium text-black">Brian Robinson</h3>
                    <h4 className="text-sm text-indigo-800">
                      Android Developer
                    </h4>
                  </div>
                </div>
                <h3 className="text-indigo-500">Followed</h3>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <RectangleStackIcon className="w-5 h-5" />
                  <h3 className="text-base text-zinc-700">28 Tasks</h3>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <h5>4.8 (370 Reviews)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold">
          Move faster with your Team tools
        </h2>
        <p className="text-lg">
          With your other work apps connected to Team, you can work faster by
          switching tabs less. And with powerful tools like Workflow Builder,
          you can automate away routine tasks.
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

export default InfoSectionThird;
