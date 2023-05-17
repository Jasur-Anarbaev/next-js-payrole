import React from "react";
import styles from "../../styles/Integrations.module.scss";
import Image from "next/image";

interface Props {
  img: any;
  title: any;
  button: any;
  description: any;
}
const About = ({ img, title, button, description }: Props) => {
  return (
    <div>
      <div className={styles.boxes}>
        <div className={styles.boxes__content}>
          <div className={styles.boxes__inner}>
            <div className={styles.boxes__inner_items}>
              <div className={styles.boxes__items_img}>
                <Image src={img} alt="#" />
              </div>
              <h1>{title}</h1>
              <div className={styles.boxes__btn}>
                <button>{button}</button>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
