import { Header } from "@/components/Header/index";
import About from "@/components/integrations/About";

import Image from "next/image";
import styles from "../styles/Integrations.module.scss";
import Our from "../assets/svg/our.svg";

import Box from "../assets/svg/box_icon.svg";
import Box2 from "../assets/svg/box-icon2.svg";
import Box3 from "../assets/svg/box-icon3.svg";
import Box4 from "../assets/svg/box-icon4.svg";
import Box5 from "../assets/svg/box-icon5.svg";
import Box6 from "../assets/svg/box-icon6.svg";
import Box7 from "../assets/svg/box-icon7.svg";
import Box8 from "../assets/svg/box-icon8.svg";
import React, { useState } from "react";
import Content from "../components/Content";
import Footer from "@/components/Footer";

const Integrations = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.categories}>
          <h1>Integrations</h1>
          <p>
            Connect Payrole with your favorite tools to reduce manual tasks,
            streamlinne HR workflows, and make a life a lot easier with just a
            few clicks.
          </p>
          <div className={styles.category__items}>
            <div
              onClick={() => setActive(1)}
              className={active !== 1 ? styles.item : styles.item_hover}
            >
              Featured
            </div>
            <div
              onClick={() => setActive(2)}
              className={active !== 2 ? styles.item : styles.item_hover}
            >
              Accounting
            </div>
            <div
              onClick={() => setActive(3)}
              className={active !== 3 ? styles.item : styles.item_hover}
            >
              Human Resources
            </div>
            <div
              onClick={() => setActive(4)}
              className={active !== 4 ? styles.item : styles.item_hover}
            >
              Hiring
            </div>
            <div
              onClick={() => setActive(5)}
              className={active !== 5 ? styles.item : styles.item_hover}
            >
              Open API
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <About
            img={Box}
            title={"QuickBooks"}
            button={"ACCOUNTING"}
            description={"Track expenses, manage cash flow & create invoices."}
          />
          <About
            img={Box2}
            title={"Xero"}
            button={"ACCOUNTING"}
            description={
              "Online accounting software for your business connects you to your bank"
            }
          />
          <About
            img={Box3}
            title={"Zoho"}
            button={"ACCOUNTING"}
            description={
              " Helps you craft professional invoices and get paid faster."
            }
          />
        </div>
        <div className={styles.box}>
          <About
            img={Box4}
            title={"BambooHR"}
            button={"HUMAN RESOURCES"}
            description={"Track expenses, manage cash flow & create invoices."}
          />
          <About
            img={Box5}
            title={"Ashby"}
            button={"HIRING"}
            description={
              "Our products are trusted by recruiting teams at fast growing companies."
            }
          />
          <About
            img={Box6}
            title={"Greenhouse"}
            button={"HIRING"}
            description={
              "Help make companies great at hiring and hire for whatHelp make companies"
            }
          />{" "}
          <About
            img={Box7}
            title={"Lever"}
            button={"HIRING"}
            description={
              "Helps your talent teams scale recruitment efforts and hire people faster."
            }
          />
          <About
            img={Box8}
            title={"Workable"}
            button={"ACCOUNTING"}
            description={
              "Find and attract more candidates. Screen and evaluate from anywhere."
            }
          />
        </div>
        <div className={styles.our}>
          <div className={styles.our__items}>
            <h2>Unlock More with Our Open API</h2>
            <p>
              Collect, standardize, and activate your customer data in the
              marketing and analytics tools you need to run your business.
            </p>
            <div className={styles.our__items_img}>
              <Image src={Our} alt="#" />
            </div>
          </div>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
};
export default Integrations;
