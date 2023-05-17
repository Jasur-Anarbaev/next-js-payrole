import React from "react";
import styles from "../../styles/Headline.module.scss";
import World from "../../assets/svg/world.svg";
import Image from "next/image";

const Headline = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__inner}>
          <div className={styles.main__logo}>
            Global Payroll Platform made for <span>Freelancers</span>
          </div>
          <div className={styles.main__p}>
            Easily automate payroll, taxes, and compliance with a seamless
            experience.
          </div>
          <div className={styles.main__blue}>
            <button className={styles.main__btn}>Learn More</button>
          </div>
          <div className={styles.main__contries}>
            <div className={styles.main__text}>
              Hire and pay compliantly <span>in 100+ countries</span>
            </div>
            <Image src={World} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headline;
