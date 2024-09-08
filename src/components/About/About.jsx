import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer & UI Designer</h3>
              <p>
              As a frontend developer, I specialize in crafting responsive and optimized websites. My skill set includes proficiency in leveraging third-party tools like Firebase, Appwrite, and Sanity CMS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Maharaja Agrasen Institute of Technology, Delhi</h3>
              <p>Pursuing Btech in Computer Science, will be graduating in 2025
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Structures & Algorithms</h3>
              <p>
                I have a strong command over DSA & have solved around 350+ questions on Leetcode & GFG. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
