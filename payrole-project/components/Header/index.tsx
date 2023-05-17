import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/svg/logo.svg";
import Arrow from "../../assets/svg/arrow.svg";
import User from "../../assets/svg/user-plus.svg";
import Header_Price from "../../assets/svg/header-price.svg";
import Header_text from "../../assets/svg/header-text.svg";
import Header_anime from "../../assets/svg/header-anime.svg";
import styles from "../../styles/Header.module.scss";
import Link from "next/link";
// import { useRouter } from "next/router";

import Select from "react-select";

export const Header = () => { 
  // const router = useRouter();
  // const options = [
  //   { value: "/_id_about", label: "About" },
  //   { value: "/_id_blog", label: "Blog" },
  // ];
  // const options2 = [
  //   { value: "/_id_integrations", label: "Integrations" },
  //   { value: "/id", label: "Pricing" },
  // ];
  // const selection = (e: any) => {
  //   router.push(e.value);
  // };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <Image src={Logo} alt="" />
          </div>
          <nav className={styles.header__navbar}>
            <Link href={`#`}>How it works</Link>

            {/* <select>
              <option value="">Features</option>
            </select> */}
            {/* <Select
              placeholder="Features"
              onChange={(e: any) => seelction(e)}
              options={options2}
            /> */}
            <Link href={`/id`}>Pricing</Link>

            <div className={styles.hovers}>
              <Link className={styles.nav_exaple} href={`#`}>
                Features
                {/* <Image src={Arrow} alt="" /> */}
              </Link>
              <div className={styles.hover__example}>
                <div className={styles.example__inner}>
                  <h1>FEATURES</h1>
                  <div className={styles.example__icons}>
                    <div className={styles.icon}>
                      <Image src={User} alt="" />
                    </div>
                    <div className={styles.title}>
                      <div className={styles.subtitle}>Hire Globally</div>
                      <div className={styles.text}>
                        Hire employees and contractors globally without local
                        entities
                      </div>
                    </div>
                  </div>
                  <div className={styles.example__icons}>
                    <div className={styles.icon}>
                      <Image src={Header_Price} alt="" />
                    </div>
                    <div className={styles.title}>
                      <div className={styles.subtitle}>Hire Globally</div>
                      <div className={styles.text}>
                        Manage payroll and taxes simplified
                      </div>
                    </div>
                  </div>
                  <div className={styles.example__icons}>
                    <div className={styles.icon}>
                      <Image src={Header_text} alt="" />
                    </div>
                    <div className={styles.title}>
                      <div className={styles.subtitle}>Hire Globally</div>
                      <div className={styles.text}>
                        Ensure compliance for all your employees
                      </div>
                    </div>
                  </div>
                  <div className={styles.example__icons}>
                    <div className={styles.icon}>
                      <Image src={Header_anime} alt="" />
                    </div>
                    <div className={styles.title}>
                      <div className={styles.subtitle}>Hire Globally</div>
                      <div className={styles.text}>
                        Integrate your entire HR tech stack
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href={`/_id_blog`}>Blog</Link>
            <Link href={"/_id_integrations"}>Integrations</Link>
            <Link href={"/_id_about"}>About</Link>

            {/* <Select
              placeholder="Resources"
              onChange={(e: any) => selection(e)}
              options={options}
            /> */}
            {/* <select>
              <option value="">Resources</option>
            </select> */}
          </nav>

          <div className={styles.header__logins}>
            <div className={styles.login}>Login</div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
