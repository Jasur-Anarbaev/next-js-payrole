import React, { useState } from "react";
import styles from "../../styles/Main.module.scss";
// import { Item } from "../blog_components/item";
interface Props {
  main: any;
  main_subtitle: any;
  title: any;
}
export const Blog = ({ main, main_subtitle, title }: Props) => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main__inner}>
          <h1>{main}</h1>
          <p>{main_subtitle}</p>
          <div className={styles.main__buttons}>
            <div
              onClick={() => setActive(1)}
              className={
                active !== 1 ? styles.main__text : styles.main__text_hover
              }
            >
              {title}
            </div>
            <div
              onClick={() => setActive(2)}
              className={
                active !== 2 ? styles.main__text : styles.main__text_hover
              }
            >
              For Contractors
            </div>
            <div
              onClick={() => setActive(3)}
              className={
                active !== 3 ? styles.main__text : styles.main__text_hover
              }
            >
              Remote Work
            </div>
            <div
              onClick={() => setActive(4)}
              className={
                active !== 4 ? styles.main__text : styles.main__text_hover
              }
            >
              Payroll
            </div>
            <div
              onClick={() => setActive(5)}
              className={
                active !== 5 ? styles.main__text : styles.main__text_hover
              }
            >
              Compliance
            </div>
            <div
              onClick={() => setActive(6)}
              className={
                active !== 6 ? styles.main__text : styles.main__text_hover
              }
            >
              Legal
            </div>
            <div
              onClick={() => setActive(7)}
              className={
                active !== 7 ? styles.main__text : styles.main__text_hover
              }
            >
              Resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
