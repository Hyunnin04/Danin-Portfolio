import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:Sodanin.sa@student.cadt.edu.kh">
            <img src="/assets/contact/emailIcon.png" alt="email" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="">
            <img src="/assets/contact/linkedinIcon.png" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Hyunnin04">
            <img src="/assets/contact/githubIcon.png" alt="github" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
