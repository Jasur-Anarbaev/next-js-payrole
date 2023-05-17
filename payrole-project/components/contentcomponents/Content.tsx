import React from "react";
import Image from "next/image";
import styles from "../../styles/Main.module.scss";
interface Props {
  img: any;
}

export const Content = ({ img }: Props) => {
  return (
    <div>
      <div className={styles.content__items}>
        <div className={styles.content__img}>
          <Image src={img} alt="#" />
        </div>
        <div className={styles.content__texts}>
          <h4>CONTRACTORS</h4>
          <div className={styles.content__p}>
            How to Register as a Sole Proprietorship in France
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
