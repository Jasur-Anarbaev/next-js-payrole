import React, { useState } from "react";
import styles from "../../styles/Scaling.module.scss";
import Image from "next/image";
import Card_icon from "../../assets/svg/card.icon.svg";
import Check from "../../assets/svg/check.svg";
import Free_price from "../../assets/svg/free.svg";
import Month from "../../assets/svg/month.svg";
import { Asked } from "./asked_components/Asked";

const Scaling = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.scaling}>
      <div className={styles.container}>
        <div className={styles.scaling__inner}>
          <h1>
            Start Scaling Your Business For <span>Free</span>
          </h1>
          <p>
            Our fair price guarantee means no commitments or hidden fees. Choose
            the plan that’s right for you.
          </p>
          <div className={styles.buttons}>
            <div className={styles.subtitle}>
              <div
                onClick={() => setActive(1)}
                className={active !== 1 ? styles.button : styles.button_hover}
              >
                Monthly
              </div>
              <div
                onClick={() => setActive(2)}
                className={active !== 2 ? styles.button : styles.button_hover}
              >
                Annually
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className={styles.card__inner}>
          <div className={styles.card}>
            <div className={styles.card__content}>
              <div className={styles.icon}>
                <Image src={Card_icon} alt="#" />
                <div className={styles.card__label}>Contractor Management</div>
              </div>
              <div className={styles.card__free}>
                <h2>FREE</h2>
                <p className={styles.free__title}>
                  Manage and pay international contractors
                </p>
                <p>*No commitments. Cancel anytime.</p>
              </div>
              <div className={styles.line1}></div>
              <div className={styles.free__inner}>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p>
                    Onboard international contractors quickly and compliantly
                    with localized contracts.
                  </p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p>
                    Pay contractors on time in their local currency with zero
                    exchange fees.
                  </p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p>Manage all employment documents in our secure platform.</p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p>
                    Automatically approve recurring contractor invoices with one
                    click.
                  </p>
                </div>
              </div>
              <button>Get Started</button>
            </div>
          </div>

          <div className={styles.card__global}>
            <div className={styles.card__content}>
              <div className={styles.icon}>
                <button className={styles.btn}>GLOBAL PAYROLL</button>
              </div>
              <div className={styles.global__free}>
                <Image src={Free_price} alt="#" />
                <Image src={Month} alt="#" />

                <p className={styles.global__title}>
                  Manage and pay international contractors
                </p>
                <p>*Billed annually (15% discount)</p>
              </div>
              <div className={styles.line}></div>

              <div className={styles.global__inner}>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p className={styles.free__text}>
                    Consolidate payroll processing across multiple countries.
                  </p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p className={styles.free__text}>
                    Ensure compliance with ever-changing local payroll
                    regulations.
                  </p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p className={styles.free__text}>
                    Generate access and quick payroll reports by country.
                  </p>
                </div>
                <div className={styles.free_icon}>
                  <Image src={Check} alt="#" />
                  <p className={styles.free__text}>
                    Reduce costs by centralizing your contractors payroll
                    management.
                  </p>
                </div>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        {/* // Scaling Asked */}
        <div className={styles.asked}>
          <div className={styles.asked__inner}>
            <div className={styles.asked__question}>
              Frequently Asked Questions
            </div>
            <Asked text={"How much do you charge per employee?"} />
            <Asked
              text={
                "Is there a minimum number of employees or contractors required?"
              }
            />
            <Asked text={"Is Payrole more affordable than other solutions?"} />
            <Asked text={"How do you calculate gross and net salary?"} />
            <Asked text={"Are there any onboarding or setup fees?"} />
            <Asked text={"Which currencies do you support for billing?"} />
            <Asked text={"How much does Contractor Management cost?"} />
            <Asked text={"What is the pricing in my currency?"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scaling;
