import React from "react";
import styles from "../../styles/Info.module.scss";
import Image from "next/image";
import Card from "../../assets/img/Illustration.png";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anywhere}>
        <h1>
          Hire from <span>Anywhere</span>
        </h1>
        <p>
          Leverage our local entities and expertise to avoid the usual time,
          cost,
          <br /> and risk of going it alone.
        </p>
      </div>
      <div className={styles.anywhere__img}>
        <Image src={Card} alt="#" />
      </div>
    </div>
  );
};
export default Info;
