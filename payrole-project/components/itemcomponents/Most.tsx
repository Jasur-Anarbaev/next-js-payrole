import React from "react";
import styles from "../../styles/Main.module.scss";
import Image from "next/image";
import Blog_user from "../../assets/svg/blog.user.svg";

interface Props {
  img: any;
}
export const Most = ({ img }: Props) => {
  return (
    <div>
      <div className={styles.menu__info}>
        <div className={styles.card_img}>
          <Image src={img} alt="#" />
        </div>
        <div className={styles.card__data}>
          <button>REMOTE</button>
          <div className={styles.year}>MARCH 21, 2022</div>
        </div>
        <p>How to Register as a Sole Proprietorship in France</p>
        <div className={styles.card__info}>
          <Image src={Blog_user} alt="#" />
          <div className={styles.user__title}>Ina Takahashi</div>
          <div className={styles.line}></div>
          <div className={styles.read}>5 min read</div>
        </div>
      </div>
    </div>
  );
};
