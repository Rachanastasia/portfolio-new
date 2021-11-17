import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Me from "../assets/rachel-reilly.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section className="full-section">
      <h2 className="page-title">ABOUT</h2>
      <div className="about-content-wrapper">
        <div className="image-wrapper">
          <Image className="about-img" src={Me} priority={true} />
        </div>
        <div className="about-paragraph-wrapper">
          <p>
            I am a product-oriented Software Engineer with expierence at early
            stage start-ups. I was introduced to programming as an artist
            through the Maker community where I learned that -- with some
            additional knowledge -- I could adapt the constructive skills I
            developed as an artist to make things that solve concrete problems.
          </p>
          <p>
            To learn more, send me a message{" "}
            <Link href="/contact">
              <span className="hover-link">here</span>
            </Link>
            , and I will get back to you as soon as I can.
          </p>
        </div>
        <div className="skills-links-wrapper">
          <Skills />
          <SocialLinks hasResume />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <div className="skills-wrapper">
      <h4>SKILLS</h4>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
        <li>AWS</li>
        <li>Docker</li>
        <li>Python</li>
        <li>CSS</li>
        <li>SASS</li>
      </ul>
    </div>
  );
}
