import React from "react";

function Cards() {
  const cardsBox = [
    {
      cImg: "./images/b1.png",
      cHeading: "Data exported by Team Cloud organization",
      cDesc:
        "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip's invitation links.",
      cAvatar: "./images/u1.jpeg",
      cName: "Cameron Williamson",
      cDate: "July 1, 2023",
    },
    {
      cImg: "./images/b2.png",
      cHeading: "Swap long video calls and emails for asynchronous video",
      cDesc:
        "Meetings are essential for communication and team building, but they're often unproductive. Asynchronous video to the rescue.",
      cAvatar: "./images/user.jpeg",
      cName: "Robert Fox",
      cDate: "June 21, 2023",
    },
    {
      cImg: "./images/b3.png",
      cHeading: "Flexibility reigns: six key takeaways from Frontiers 2023",
      cDesc: "The future of work is having a digital HQ that works for you.",
      cAvatar: "./images/u2.jpeg",
      cName: "Jenny Wilson",
      cDate: "June 10, 2023",
    },
    {
      cImg: "./images/b4.png",
      cHeading: "Team plus Sales Cloud: Your sales team's new digital HQ",
      cDesc:
        "Why everyone on your sales team will benefit from our app's killer features.",
      cAvatar: "./images/u3.png",
      cName: "Kathryn Murphy",
      cDate: "May 11, 2023",
    },
    {
      cImg: "./images/b5.png",
      cHeading: "What is digital culture?",
      cDesc:
        "The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.",
      cAvatar: "./images/u4.jpeg",
      cName: "Devon Lane",
      cDate: "May 22, 2023",
    },
    {
      cImg: "./images/b6.png",
      cHeading: "Steve Dotto's top 10 tips for overcoming workplace hiccups",
      cDesc:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      cAvatar: "./images/user.jpeg",
      cName: "Theresa Webb",
      cDate: "April 4, 2023",
    },
    {
      cImg: "./images/b7.png",
      cHeading: "What's new in Team: iPad updates, split-screen view and more",
      cDesc:
        "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip's invitation links.",
      cAvatar: "./images/u1.jpeg",
      cName: "Eleanor Pena",
      cDate: "March 18, 2023",
    },
    {
      cImg: "./images/b8.png",
      cHeading:
        "Drive more efficiency and cost savings with these updates to Workflow Builder",
      cDesc:
        "New and upcoming automation features help your teams do more with less.",
      cAvatar: "./images/u2.jpeg",
      cName: "Jerome Bell",
      cDate: "February 12, 2023",
    },
    {
      cImg: "./images/b9.png",
      cHeading: "7 tips to onboard sales reps with ease",
      cDesc:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      cAvatar: "./images/u3.png",
      cName: "Savannah Nguyen",
      cDate: "January 7, 2023",
    },
  ];
  return (
    <section className="px-10 my-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {cardsBox.map((card) => (
            <div className="bg-white shadow-lg border overflow-hidden rounded-lg">
              <img
                src={card.cImg}
                alt="Image"
                className="w-full object-cover"
              />
              <div className="py-5 px-8 space-y-4">
                <a
                  href="/blogPost"
                  className="text-xl font-medium text-indigo-500 block hover:underline">
                  {card.cHeading}
                </a>
                <p className="text-base sm:text-lg">{card.cDesc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={card.cAvatar}
                      alt="Image"
                      className="w-12 h-12 border rounded-full"
                    />
                    <h4 className="text-lg text-indigo-800 font-medium">
                      {card.cName}
                    </h4>
                  </div>
                  <h5 className="text-lg text-indigo-900/60">{card.cDate}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
