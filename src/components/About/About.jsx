import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"; // Assuming you have a CSS module

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
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>FullStack Software Engineer</h3>
                            <p>I'm a FullStack Engineer with experience in building responsive Websites & functional WebApps</p>
                        </div>
                    </li> 
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Software Engineer</h3>
                            <p>I have a lot of experience developing backend services in many different applications, including but not limited to:<br /><br />
                                Saas & ERP Desktop Applications<br />
                                Web-Development<br />
                                Fast APIs<br />
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>AI Software Engineer</h3>
                            <p>I've a lot of experience in utilizing & implementing AI in many projects, as well as different types of Learning & Prompt Engineering.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
