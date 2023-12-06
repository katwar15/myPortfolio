// import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import MovieClipOne from "../MovieClips/MovieClipOne";
import MovieClipTwo from "../MovieClips/MovieClipTwo";
import MovieClipThree from "../MovieClips/MovieClipThree";
import MovieClipFour from "../MovieClips/MovieClipFour";
import "./Experience.css";
import pole from "/src/assets/pole.png";
import email from "/src/assets/email.png";
import ForwardButton from "../ForwardButton/ForwardButton";

import ulotka from "/src/assets/ulotka.jpg";
import plakat from "/src/assets/plakat.jpg";
import pazy from "/src/assets/pazy.png";

import uxfront from "/src/assets/uxfront.png";

function Experience() {
  return (
    <>
      <div className="experienceDiv">
        <ForwardButton />
        <h1 className="h1_experience">Experience</h1>
        <p className="p_experience">
          Throughout my career, I have had several accomplishments across
          various domains. I have authored scientific articles as well as
          articles about design. Moreover, I was a Ph.D. student and taught
          students about new media and feminism. Additionally, I have worked as
          an editor for a humanities magazine. I have also created a brand and
          learned about UX and UI design. Later, I learned how to code to bring
          my ideas to life. All of this experience has helped me to think
          broadly and unconventionally.
        </p>
      </div>

      <div className="gridExperience">
        <div id="item-0">
          <MovieClipFour className="movieClip" />
        </div>

        <div id="item-1">
          <Link
            className="linkExpo"
            to="/experience/design-frontend"
            state={{
              pathname: "/experience/design-frontend",
              titleJob: "UX/UI designer & frontend developer",
              years: "2022-2023",
              company: "freelance",
              entranceDis:
                "By 2022, I made the decision to change my career path. While I found nail art interesting, it wasn't enough to satisfy my knowledge-hungry mind. After years of studying, lecturing, and writing articles for some of the most important magazines in Poland, I realized that I wanted a career that combined my desire to create with my sociological-psychological flair. That's why I chose UX/UI design, which brings together these two elements. I also added frontend development to my skillset so that I could seamlessly incorporate ideas from Figma into the code",

              jobDescription:
                "I dealt with everyone - customer service, arranging appointments, ordering equipment and supplies, bills and taxes. My side job was working as a nail styling instructor and participating in international championships. It was thanks to participating in competitions that I realized that I missed creating art at university. In my works, I was inspired by fashion, art and botany. I also often used histology or mycology textbooks. My clients appreciated my sense of aesthetics, but also my imagination, which went beyond average nail salons.",
              mainImg: `${uxfront}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
              tool2: "figma",
              tool3: "css & html",
              tool4: "Tailwind CSS",
              tool5: "react js",
              tool6: "next js",
            }}
          >
            <h1 className="h1_Grid">UX/UI design & frontend</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-2">
          <Link
            className="linkExpo"
            to="/experience/crm"
            state={{
              pathname: "/experience/crm",
              titleJob: "Email Designer",
              years: "2023",
              company: "Oriflame cosmetics",

              entranceDis:
                "come on? Have you ever wanted to open a nail salon after years spent at university? 😉 But seriously: working in the salon was tiring, but very developing in terms of personal interactions and creativity. Within three years, I had a group of regular customers and even fans, and I won several world titles in nail styling championships. Thanks to this experience, I learned what multitasking is, how to run social media well and how to sell your brand.",
              jobDescription:
                "I dealt with everyone - customer service, arranging appointments, ordering equipment and supplies, bills and taxes. My side job was working as a nail styling instructor and participating in international championships. It was thanks to participating in competitions that I realized that I missed creating art at university. In my works, I was inspired by fashion, art and botany. I also often used histology or mycology textbooks. My clients appreciated my sense of aesthetics, but also my imagination, which went beyond average nail salons.",
              mainImg: `${uxfront}`,
              mainImgOne: `${pole}`,
              mainImgTwo: `${pole}`,
              mainImgThree: `${pole}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
              tool2: "salesforce",
              tool3: "css & html",
              tool4: "figma",
              tool5: "ms office",
              tool6: "power bi",
            }}
          >
            <h1 className="h1_Grid">Email designing</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-3"></div>
        <div id="item-4">
          <MovieClipOne className="movieClip" />
        </div>
        <div id="item-5"></div>
        <div id="item-6">
          <Link
            className="linkExpo"
            to="/experience/university"
            state={{
              pathname: "/experience/university",
              titleJob: "Phd candidate - tutor",
              years: "2022-2023",
              company: "freelance",
              entranceDis:
                "come on? Have you ever wanted to open a nail salon after years spent at university? 😉 But seriously: working in the salon was tiring, but very developing in terms of personal interactions and creativity. Within three years, I had a group of regular customers and even fans, and I won several world titles in nail styling championships. Thanks to this experience, I learned what multitasking is, how to run social media well and how to sell your brand.",
              jobDescription:
                "I dealt with everyone - customer service, arranging appointments, ordering equipment and supplies, bills and taxes. My side job was working as a nail styling instructor and participating in international championships. It was thanks to participating in competitions that I realized that I missed creating art at university. In my works, I was inspired by fashion, art and botany. I also often used histology or mycology textbooks. My clients appreciated my sense of aesthetics, but also my imagination, which went beyond average nail salons.",
              mainImg: `${pazy}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">university</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-7">
          <Link
            className="linkExpo"
            to="/experience/copywriting"
            state={{
              pathname: "/experience/copywriting",
              titleJob: "copywriting",
              years: "2011-2023",
              company: "freelance",
              entranceDis:
                "I have been writing for years. It all started during my studies when I wrote reports on cultural events, articles about films and music. Then, I moved on to writing articles on urban studies, art, and feminism. During my doctoral studies, I focused on the sociological, economic, and geographical conditions of women's alcoholism.",
              jobDescription:
                "I dealt with everyone - customer service, arranging appointments, ordering equipment and supplies, bills and taxes. My side job was working as a nail styling instructor and participating in international championships. It was thanks to participating in competitions that I realized that I missed creating art at university. In my works, I was inspired by fashion, art and botany. I also often used histology or mycology textbooks. My clients appreciated my sense of aesthetics, but also my imagination, which went beyond average nail salons.",
              mainImg: `${pazy}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
              tool2: "creativity",
              tool3: "ms office",
              tool4: "research skills",
              tool5: "",
            }}
          >
            <h1 className="h1_Grid">copywriting</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
        <div id="item-8">
          <MovieClipThree className="movieClip" />
        </div>
        <div id="item-9">
          <MovieClipTwo className="movieClip" />
        </div>
        <div id="item-10"></div>
        <div id="item-11">
          <Link
            className="linkExpo"
            to="/experience/salon"
            state={{
              pathname: "/experience/salon",
              titleJob: "nail stylist",
              years: "2019-2022",
              company: "own company",
              entranceDis:
                "come on? Have you ever wanted to open a nail salon after years spent at university? 😉 But seriously: working in the salon was tiring, but very developing in terms of personal interactions and creativity. Within three years, I had a group of regular customers and even fans, and I won several world titles in nail styling championships. Thanks to this experience, I learned what multitasking is, how to run social media well and how to sell your brand.",
              jobDescription:
                "I dealt with everyone - customer service, arranging appointments, ordering equipment and supplies, bills and taxes. My side job was working as a nail styling instructor and participating in international championships. It was thanks to participating in competitions that I realized that I missed creating art. In my works, I was inspired by fashion, art and botany. I also often used histology or mycology textbooks. My clients appreciated my sense of aesthetics, but also my imagination, which went beyond average nail salons.",
              mainImg: `${pazy}`,
              mainImgOne: `${ulotka}`,
              mainImgTwo: `${plakat}`,
              mainImgThree: `${plakat}`,
              tool1: "multitasking",
              tool2: "creativity",
              tool3: "communication",
              tool4: "time management",
              tool5: "",
            }}
          >
            <h1 className="h1_Grid">salon</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Experience;
