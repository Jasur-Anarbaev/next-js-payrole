import React from "react";
import styles from "../../styles/Global.module.scss";
import Image from "next/image";
import Quote from "../../assets/svg/quote.svg";
import User from "../../assets/svg/memorji.svg";
import User2 from "../../assets/svg/memorji2.svg";
import User3 from "../../assets/svg/memorji3.svg";

const Global = () => {
  return (
    <div className={styles.container}>
      <div className={styles.global}>
        <div className={styles.global__inner}>
          <h1>
            Love from <span>Global</span> Businesses
          </h1>
          <p>What they say about our services.</p>
        </div>
        <div className={styles.global__img}>
          {" "}
          <Image src={Quote} alt="#" />
        </div>

        <div className={styles.global__content}>
          <div className={styles.global__text}>
            “We can bring on contractors in any country in <br /> minutes. The
            team loves the autonomy they get.”
          </div>
          <b>
            Christina Yulia, <span>CEO @ Zendesk</span>
          </b>
          <div className={styles.global__users}>
            <div className={styles.user__img}>
              <Image src={User} alt="#" />
            </div>{" "}
            <div className={styles.user__img}>
              <Image src={User2} alt="#" />
            </div>{" "}
            <div className={styles.user__img}>
              <Image src={User3} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Global;
