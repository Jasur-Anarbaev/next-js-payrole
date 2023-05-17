import React from "react";
import styles from "../../styles/Content.module.scss";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Get Started <span>Today</span>
        </h1>
        <p>Streamline your global business and grow your team effortlessly.</p>
        <div className={styles.content_btn}>
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
};
export default Content;
