import React from "react";

const WhyZou = () => {
  const reasons = [
    [
      " Zou-Bot can help manage your Discord server by providing moderation tools such as banning, kicking, muting, and warning users who violate server rules.",
    ],
    [
      "Users can create custom commands for Zou-Bot to perform specific actions or provide information relevant to their server.",
    ],
    [
      " Zou-Bot can automate repetitive tasks such as sending welcome messages to new members, assigning roles based on reactions, or scheduling events.",
    ],
    [
      "Keep your server entertained with Zou-Bot's collection of fun commands like trivia quizzes, mini-games, or virtual currency systems.",
    ],
    [
      "Zou-Bot can fetch information from various sources including Wikipedia, weather forecasts, time zones, or even specific data from your server.",
    ],
    [
      " Allow users to listen to music together by streaming audio from YouTube or other sources directly into your Discord server.",
    ],
    [
      " Easily create and manage polls and voting sessions using Zou-Bot to gather opinions and make decisions within your community.",
    ],
    [
      " Zou-Bot can integrate with third-party APIs to provide additional functionalities such as fetching data from social media platforms, retrieving news updates, or even translating messages.",
    ],
    [
      "Welcome new members to your server with personalized messages and instructions set up by administrators.",
    ],
    [
      "Gain insights into server activity and engagement through Zou-Bot's analytics features, including message statistics, user activity tracking, and more.",
    ],
  ];

  const titles = [
    ["Moderation Tools"],
    ["Custom Commands"],
    ["Automated Tasks"],
    ["Fun and Games"],
    ["Information Retrieval"],
    ["Music Streaming"],
    ["Polls and Voting"],
    ["Integrated APIs"],
    ["Customizable Welcome Messages"],
    ["Analytics and Insights"],
  ];

  return (
    <div className="text-white ">
      <div>
        <h1 className="flex justify-center text-blue-400 text-4xl font-bold  border-b-2  p-10">
          Why Zou-bot?
        </h1>
        <div className="flex flex-col md:px-52 px-10  ">
          {titles.map((title, index) => (
            <div key={index} className="flex flex-col pt-10">
              {title.map((t, idx) => (
                <h1
                  key={idx}
                  className="before:border-teal-400 before:border before:mr-5 after:ml-5 after:border-teal-400 after:border text-2xl font-mono font-bold"
                >
                  {t}
                </h1>
              ))}
              <ul className="marker:text-green  list-outside list-disc ml-6 text-xl font-thin md:pl-10 ">
                {reasons[index].map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyZou;
