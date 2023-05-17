import React from "react";
import styles from "../../styles/About.module.scss";
import Image from "next/image";

interface Props {
  img: any;
  title: any;
  subtitle: any;
  icons: any;
  twitter: any;
}
export const Users = ({ img, title, subtitle, icons, twitter }: Props) => {
  return (
    <div>
      <div className={styles.our__user}>
        <div className={styles.our__user_content}>
          <div className={styles.content__blog}>
            <div className={styles.user_img}>
              <Image src={img} alt="#" />
            </div>
            <div className={styles.user__info}>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className={styles.user__icons}>
              <Image src={icons} alt="#" />
              <Image src={twitter} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
