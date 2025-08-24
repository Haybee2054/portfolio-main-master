import React from "react";
import WorkItem from "./WorkItem";

const data = [
  
  {
    year: 2025,
    title: "First Bank Nigeria",
    duration: "July 2025 - Present",
    details:
      "I am currently a Product Support Officer at First Bank Nigeria, where I specialize in analyzing and cleaning data, spooling and updating reports, and ensuring data accuracy for informed decision-making.My role also involves monitoring non-performing and impaired loan assets to support better decision making and business performance.",
  },
  {
    year: 2025,
    title: "Nestlé",
    duration: "September 2024 - June 2025",
    details:
      "At Nestlé Nigeria, I managed and maintained IT infrastructure including servers, databases, and cloud platforms, while providing technical support for hardware, software, and networking issues. I also optimized automation systems by configuring Rockwell modules, integrating PLC networks, maintaining biometric access systems, and ensuring cybersecurity and system reliability across manufacturing and office environments.",
  },

  {
    year: 2023,
    title: "CT DiGiTal",
    duration: "December 2022 - June 2023",
    details:
      "At CTDigital I and my Team Built different web pages for users.",
  },
  {
    year: 2023,
    title: "Video-Chatapp",
    duration: "1 Month",
    details:
      "I developed a Real time Video-Chat app with React Js,Node Js, WebRTC, PeerJS. A web application that is aimed at creating a platform where users can interact with each other.",
  },
      {
        year: 2023,
        title: "HooBank",
        duration: "1 Month",
        details:
          "A website for a fintech platform for payment solutions online, I built this website with React Js and Tailwind CSS.",
      },

  {
    year: 2022,
    title: "GOMYCODE",
    duration: "January 2023 - June 2023",
    details:
      "Worked with React Js to build Web Pages, Fetching of API's and Querying database.",
  },
  {
    year: 2021,
    title: "Medixx",
    duration: "1 Month",
    details:
      "On this team project, I worked as the Front-end developer(I worked on the User interface of the website) for the Medixx website. A website that is aimed at solving one of the  Sustainable Development Goals (SDG): Good Health and Well Being.",
  },
];
const Work = () => {
  return ( 
  <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4
    ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] py-10">Work Experience</h1>
        {data.map((item, idx) => (
            <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />
        ))}
  </div>
  )
};

export default Work;


