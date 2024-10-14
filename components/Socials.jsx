// "use client";
// import React from "react";
// import {
//   RiLinkedinFill,
//   RiGithubFill,
//   RiTwitterFill,
//   RiInstagramFill,
//   RiFacebookFill,
// } from "react-icons/ri";
// import Link from "next/link";

// const icons = [
//   {
//     path: "https://www.linkedin.com/in/mohammad-aqib-0316a3220/",
//     name: <RiLinkedinFill />,
//   },
//   {
//     path: "https://github.com/Aqib1239",
//     name: <RiGithubFill />,
//   },
//   {
//     path: "https://x.com/maqib_7?t=0fm1h8U2TmSXNVgfBxpgNQ&s=09&mx=2",
//     name: <RiTwitterFill />,
//   },
//   {
//     path: "https://www.instagram.com/m_aaqib__7/?utm_source=qr&igsh=ZzF2bHI0ZXo5cWs1",
//     name: <RiInstagramFill />,
//   },
//   {
//     path: "https://www.facebook.com/profile.php?id=100082765906887&mibextid=JRoKGi",
//     name: <RiFacebookFill />,
//   },
// ];
// const Socials = ({ containerStyles, iconStyles }) => {
//   return (
//     <div className={`${containerStyles}`}>
//       {icons.map((icon, index) => {
//         return (
//           <Link href={icon.path} key={index}>
//             <div className={`${iconStyles}`}>{icon.name}</div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Socials;

"use client";
import React from "react";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/mohammad-aqib-0316a3220/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Aqib1239",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/maqib_7?t=0fm1h8U2TmSXNVgfBxpgNQ&s=09&mx=2",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.instagram.com/m_aaqib__7/?utm_source=qr&igsh=ZzF2bHI0ZXo5cWs1",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100082765906887&mibextid=JRoKGi",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
            <div 
              className={`${iconStyles} transition-transform duration-300 hover:scale-110 hover:text-primary`}
            >
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
