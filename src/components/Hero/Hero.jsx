import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils.js";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ahmed</h1>
                <p className={styles.description}>I'm a Junior Full Stack & an AI Software Engineer.
                    Feel free to reach out if you'd like to know more 
                    about me or if you're interested in my services!
                </p>
                <a href="mailto:ahmedtarek.ghoraba@gmail.com" className={styles.contactBtn}>Hire Me!</a>
            </div>
            <img src= {getImageUrl("hero/heroImage.png")} alt = "hero image of me" className={styles.heroimg}></img>
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
        </section>
    )
}