import React from "react";
import styles from "../../styles/Section.module.scss";
import Image from "next/image";
import Drop from '../../assets/svg/dropbox.svg'
import Buzz from '../../assets/svg/buzzfeed.svg'
import Zend from '../../assets/svg/zendesk.svg'
import Molli from '../../assets/svg/mollie.svg'
const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section__inner}>
        <div className={styles.section__text}>
          Trusted by <span>Established</span> Companies
        </div>
        <div className={styles.section__icons}>
        <Image src={Drop} alt='#'/>
        <Image src={Buzz} alt='#'/>
        <Image src={Zend} alt='#'/>
        <Image src={Molli} alt='#'/>
        </div>
      </div>
    </div>
  );
};
export default Section;
