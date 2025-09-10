import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/apple.png"
            alt="macBook"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! This is <strong>Muhammad Hasnat</strong>. I'm originally from Toba Tek Singh, Pakistan and have been living in Islamabad for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a deep curiosity about how things work and a passion for solving problems. This passion led me to pursue a degree in Software Engineering at the National University of Technology (NUTECH). The program was challenging, but it strengthened my determination and allowed me to grow both academically and personally. Along the way, I built lasting friendships that provided support and encouragement throughout my studies.
            During my time at NUTECH, I had the opportunity to work on several engaging projects. Notably, I developed front-end web applications and interactive systems that showcased my skills in HTML, CSS, and JavaScript. I also explored projects related to AI and facial expression recognition, which sparked my interest in combining creativity with technology.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Collaborating with teams on these projects taught me the value of working towards a shared goal, and these experiences have been both rewarding and inspiring. Moving forward, I am eager to continue exploring innovative projects, particularly in web development, cross-platform mobile applications, and AI-powered solutions.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
