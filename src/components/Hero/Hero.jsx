import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nancy</h1>
        <p className={styles.description}>
          I'm a frontend developer with experience of using React, Next.js, NodeJS and have a strong command on Data Structures & Algorithms(solved 350+ problems). Reach out if you'd like to hire me!
        </p>
        <a href="mailto:nancykasaudhan2010@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
