import React from "react";
import styles from "../../styles/Offer.module.scss";
import Image from "next/image";
import User from "../../assets/svg/user.svg";
import Log from "../../assets/svg/location.svg";
import Bag from "../../assets/svg/bag.svg";
import Progres from "../../assets/svg/progres.svg";
import Contact from "../../assets/svg/contact-progres.svg";

const Offer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <div className={styles.offer__text}>
          From Offer Letter to Onboarded in <span>Minutes</span>
        </div>
        <div className={styles.offer__p}>
          Create a custom contract that’s compliant with local laws, send it to
          sign, and they'll get onboarded almost instantly.
        </div>
        
        <div className={styles.all}>
          <div className={styles.offer__content}>
            <div className={styles.offer__background}>Contract #1</div>

            <div className={styles.offer__all}>
              <div className={styles.offer__left}>
                <div className={styles.offer__left_sol}>
                  <Image src={User} alt="#" />
                </div>

                <div className={styles.offer__left_on}>
                  <h2>Jonathan Kiessling</h2>
                  <div className={styles.offer__country}>
                    <Image src={Log} alt="#" />
                    <div className={styles.offer__country_text}>
                      Hamburg, Germany
                    </div>
                  </div>
                  <div className={styles.offer__country}>
                    <Image src={Bag} alt="#" />
                    <div className={styles.offer__country_text}>
                      Freelance Designer
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.offer__right}>
                <Image src={Progres} alt="#" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.progres}>
          <Image src={Contact} alt="#" />
          {""}
        </div>
        <div className={styles.data}>
          <div className={styles.data__inner}>
            <div className={styles.data__text}>Contract Created</div>
            <div className={styles.data__number}>Mar 15</div>
          </div>
          <div className={styles.data__inner}>
            <div className={styles.data__text}>Contract Created</div>
            <div className={styles.data__number}>Mar 15</div>
          </div>
          <div className={styles.data__p}>Accepted</div>
          <div className={styles.data__p}>Contract Signed</div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
