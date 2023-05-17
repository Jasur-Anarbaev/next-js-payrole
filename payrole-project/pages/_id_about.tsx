import { Header } from "@/components/Header";

import React, { useState } from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Vertor from "../assets/svg/about-icon.svg";
import World from "../assets/svg/about_world.svg";
import User from "../assets/svg/about-user.svg";
import Mission from "../assets/img/misson.png";
import Target from "../assets/svg/target.svg";
import Kraken from "../assets/svg/kraken.svg";
import Wyre from "../assets/svg/wyre.svg";
import Robinhood from "../assets/svg/robinhood.svg";
import Webull from "../assets/svg/webul.svg";
import UserBlack from "../assets/svg/black-user.svg";
import User2 from "../assets/svg/user2.svg";
import User3 from "../assets/svg/user3.svg";
import User4 from "../assets/svg/user4.svg";
import User5 from "../assets/svg/user5.svg";
import User6 from "../assets/svg/user6.svg";
import User7 from "../assets/svg/user7.svg";
import User8 from "../assets/svg/user8.svg";
import UserInfo from "../assets/svg/user-info.svg";
import UserTwitter from "../assets/svg/user-twitter.svg";
import { Users } from "@/components/ourcomponents/users";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

const About = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.about__items}>
            <h1>
              We Are Building One Platform for All <span>Payroll Things</span>
            </h1>
            <p>
              Payrole is innovative online platform to hire and pay
              international employees and freelancers.
            </p>

            <div className={styles.about__background}>
              <h2>Let the numbers speak for themselves.</h2>
              <div className={styles.about__icons_item}>
                <div className={styles.icons}>
                  <div className={styles.icons__inner}>
                    <div className={styles.icons__logo}>
                      <Image src={Vertor} alt="#" />
                    </div>
                    <div className={styles.price}>
                      <div className={styles.price_text}>3.3M+</div>
                      <b>Income received</b>
                    </div>
                  </div>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icons__inner}>
                    <div className={styles.icons__logo}>
                      <Image src={World} alt="#" />
                    </div>
                    <div className={styles.price}>
                      <div className={styles.price_text}>150+</div>
                      <b>Countries supported</b>
                    </div>
                  </div>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icons__inner}>
                    <div className={styles.icons__logo}>
                      <Image src={User} alt="#" />
                    </div>
                    <div className={styles.price}>
                      <div className={styles.price_text}>1.2M+</div>
                      <b>Users every month</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.our}>
              <div className={styles.our__misson}>
                <div className={styles.our__misson_text}>
                  <div className={styles.our_text}>
                    Our <br />
                    <span>Mission</span>
                  </div>
                  <div className={styles.our_text2}>
                    Open up the vast of the world for every person, business and
                    country. We envision a world where every person and business
                    truly belongs in the global market.
                  </div>
                </div>
                <div className={styles.misson_img}>
                  <Image src={Mission} alt="#" />
                </div>
                <div className={styles.misson__target}>
                  <Image src={Target} alt="#" />
                  <div className={styles.misson__item}>
                    <div className={styles.info_text}>
                      <div className={styles.subtitle}>
                        We are on a mission to revolutionize how companies find,
                        employ and grow teams internationally.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.investors}>
          <div className={styles.investors__decs}>
            <div className={styles.decs_logo}>
              <h2>Our Investors</h2>
            </div>
            <p>
              We’re proud to be supported by investors who helped build our
              vision.
            </p>
          </div>
          <div className={styles.investori__icons}>
            <Image src={Kraken} alt="#" />
            <Image src={Wyre} alt="#" />
            <Image src={Robinhood} alt="#" />
            <Image src={Webull} alt="#" />
          </div>

          <div className={styles.meet}>
            <h2>Meet Our Team</h2>
            <div className={styles.our__buttons}>
              <div
                onClick={() => setActive(1)}
                className={active !== 1 ? styles.text : styles.text_blue}
              >
                all
              </div>
              <div
                onClick={() => setActive(2)}
                className={active !== 2 ? styles.text : styles.text_blue}
              >
                Developers
              </div>
              <div
                onClick={() => setActive(3)}
                className={active !== 3 ? styles.text : styles.text_blue}
              >
                Designers
              </div>
              <div
                onClick={() => setActive(4)}
                className={active !== 4 ? styles.text : styles.text_blue}
              >
                Customers
              </div>
              <div
                onClick={() => setActive(5)}
                className={active !== 5 ? styles.text : styles.text_blue}
              >
                Brand
              </div>
              <div
                onClick={() => setActive(6)}
                className={active !== 6 ? styles.text : styles.text_blue}
              >
                Product
              </div>
              <div
                onClick={() => setActive(7)}
                className={active !== 7 ? styles.text : styles.text_blue}
              >
                Leadership
              </div>
            </div>
          </div>

          {/* Our Users */}
          <div className={styles.our__user}>
            <Users
              img={UserBlack}
              title={"Abram Curtis"}
              subtitle={"Co-founder & CEO"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User2}
              title={"Chance Dorwart"}
              subtitle={"Co-founder & COO"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User3}
              title={"Roger Rosser"}
              subtitle={"VP of Engineering"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User4}
              title={"Rayna Schleifer"}
              subtitle={"VP of Customer Success"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User5}
              title={" Paityn Levin"}
              subtitle={"Product Designer"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User6}
              title={"Marilyn Philips"}
              subtitle={"Customer Champion"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User7}
              title={"Madelyn George"}
              subtitle={"Product Designer"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
            <Users
              img={User8}
              title={"Jaylon Lipshutz"}
              subtitle={"Developer"}
              icons={UserInfo}
              twitter={UserTwitter}
            />
          </div>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default About;
