import React from "react";
import styles from "../../styles/Payment.module.scss";
import Image from "next/image";
import Payroll from "../../assets/svg/card.svg";
import Price from "../../assets/svg/price.svg";
import Pending from "../../assets/svg/pending.svg";
import Client from "../../assets/svg/client.svg";

const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.payment}>
        <div className={styles.payment__inner}>
          <h1>
            Send Payment <br />
            <span>Faster</span>
          </h1>
          <p>
            We’ll keep you and your hires compliant with ever-changing taxes and
            regulations.
          </p>
          <div className={styles.card}>
            <div className={styles.card__loge}>
              <div className={styles.card__left}>
                <div className={styles.card__icon}>
                  <Image src={Payroll} alt="#" />
                  <div className={styles.card__text}>Upcoming Payroll</div>
                </div>
                <div className={styles.day}>April 1, 2022</div>
              </div>
              <div className={styles.card__icons}>
                <Image src={Price} alt="#" />
                <Image src={Pending} alt="#" />
              </div>
              <div className={styles.client}>
                <div className={styles.client__user}>
                  <h4>Client</h4>
                  <div className={styles.client__info}>
                    <Image src={Client} alt="#" />
                    <div className={styles.user__content}>
                      <div className={styles.user__name}>Adam Kovalenko</div>
                      <span>BlueLabs</span>
                    </div>
                    <button>Send Invoice</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card__right}>
              <div className={styles.card__title}>Quick Pay</div>
              <div className={styles.card__subtitle}>
                invopay.to/<span>adamkovalenko</span>
              </div>
              <div className={styles.card__inner}>
                <div className={styles.card__text}>
                  You can receive payments quickly with Quick Pay feature. You
                  can share the payment link to request the payment to clients.
                </div>
                <div className={styles.card__more}>Learn More</div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
