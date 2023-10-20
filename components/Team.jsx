import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const teamCards = [
  {
    tIcon: <StarIcon />,
    tDesc:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    tImg: "./images/u1.jpeg",
    tName: "Chealsea Morgan",
    tRole: "CEO ot Subway",
  },
  {
    tIcon: <StarIcon />,
    tDesc:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
    tImg: "./images/u2.jpeg",
    tName: "Nick Cave",
    tRole: "CMO ot Nokia",
  },
  {
    tIcon: <StarIcon />,
    tDesc:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
    tImg: "./images/u3.png",
    tName: "Lana Rosenfeld",
    tRole: "Senior VP ot Pinterest",
  },
  {
    tIcon: <StarIcon />,
    tDesc:
      "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
    tImg: "./images/u4.jpeg",
    tName: "Giorgio Moroder",
    tRole: "CTO ot Glovo",
  },
];

function Team() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          What people say about Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teamCards.map((card) => (
            <div className="p-8 border rounded cursor-pointer overflow-hidden space-y-4 shadow-lg bg-white hover:bg-indigo-400 group duration-200">
              <div className="flex items-center">
                <div className="w-5 h-5 text-yellow-400">{card.tIcon}</div>
                <div className="w-5 h-5 text-yellow-400">{card.tIcon}</div>
                <div className="w-5 h-5 text-yellow-400">{card.tIcon}</div>
                <div className="w-5 h-5 text-yellow-400">{card.tIcon}</div>
                <div className="w-5 h-5 text-yellow-400">{card.tIcon}</div>
              </div>
              <p className="group-hover:text-white text-lg">{card.tDesc}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={card.tImg}
                  alt="Image"
                  className="w-14 h-14 object-contain rounded-full border"
                />
                <div>
                  <h3 className="font-medium group-hover:text-white">
                    {card.tName}
                  </h3>
                  <h5 className="text-sm text-indigo-500 group-hover:text-indigo-100">
                    {card.tRole}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
