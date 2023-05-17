import React, { useState } from "react";
import styles from "../../../styles/Scaling.module.scss";
import Image from "next/image";
import Asked_icon from "../../../assets/svg/asked.icon.svg";
import Asked_icon2 from "../../../assets/svg/asked.icon2.svg";

interface Props {
  text: any;
}
export const Asked = ({ text }: Props) => {
  const [select, SetSelect] = useState(false);
  const [onClick, SetOnClick] = useState(false);
  return (
    <div>
      {/* <div className={styles.asked}>
        <div className={styles.asked__inner}> */}
      <div className={styles.asked__box}>
        <div
          style={{ borderColor: select ? "#3981F7" : "#E4E4E7" }}
          className={styles.info}
        >
          <div className={styles.info__content}>
            <h3>{text}</h3>
            <Image
              onClick={() => SetSelect(!select)}
              src={select ? Asked_icon : Asked_icon2}
              alt="#"
            />
          </div>
          {select ? (
            <div className={styles.info__subtitle}>
              There are no onboarding minimums for EOR & contractors. For
              Payroll, you need to have 10 employees in each country you
              <br />
              want Deel to run payroll in.
            </div>
          ) : null}
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};
