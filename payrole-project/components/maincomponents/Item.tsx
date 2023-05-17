import React from "react";
import styles from "../../styles/Main.module.scss";
import Image from "next/image";
import Blog_user from "../../assets/svg/blog.user.svg";

interface Props {
  img: any;
}
export const Item = ({ img }: Props) => {
  return (
    <div className={styles.blog__right}>
      <div className={styles.card__blog}>
        <div className={styles.card_img}>
          <Image src={img} alt="#" />
        </div>
        <div className={styles.card__data}>
          <button>CONTRACTORS</button>
          <div className={styles.year}>MARCH 21, 2022</div>
        </div>
        <p>Employee Benefits in Denmark: All You Need to Know</p>
        <div className={styles.card__info}>
          <Image src={Blog_user} alt="#" />
          <div className={styles.user__title}>Mona Moura</div>
          <div className={styles.line}></div>
          <div className={styles.read}>5 min read</div>
        </div>
      </div>
    </div>
  );
};
