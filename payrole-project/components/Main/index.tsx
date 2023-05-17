import React from "react";
import styles from "../../styles/Main.module.scss";
import Image from "next/image";
import Blog_img from "../../assets/img/blog.png";
import Blog_user from "../../assets/svg/blog.user.svg";
import Sms from "../../assets/svg/sms.svg";
import Work from "../../assets/img/work.png";
import Work2 from "../../assets/img/work2.png";
import Work3 from "../../assets/img/work3.png";
import Work4 from "../../assets/img/work4.png";
import Work5 from "../../assets/img/work5.png";
import Mountain from "../../assets/img/mountain.png";
import Talk from "../../assets/img/talk.png";
import Contact from "../../assets/img/contact.png";
import Vibe from "../../assets/img/vibe.png";
import Visit from "../../assets/img/visit.png";
import Country from "../../assets/img/Country.png";
import Country2 from "../../assets/img/Country2.png";
import Laptop from "../../assets/img/laptop.png";
import { Item } from "../maincomponents/Item";
import Flag from "../../assets/img/flag.png";
import Footer from "../Footer";
import { Most } from "../itemcomponents/Most";
import { Content } from "../contentcomponents/Content";
import { Blog } from "../blog_components/Blog";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Blog
          main={"Blog"}
          main_subtitle={
            "Discover articles and insights from our expert team. "}
          title={"All Topics"}
          category={"Leadership"}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Featured articles</h3>
        </div>
        <div className={styles.blog}>
          <div className={styles.blog__right}>
            <div className={styles.card__blog}>
              <div className={styles.card_img}>
                <Image src={Blog_img} alt="#" />
              </div>
              <div className={styles.card__data}>
                <button>REMOTE WORK</button>
                <div className={styles.year}>MARCH 21, 2022</div>
              </div>
              <p>Employee Benefits in Denmark: All You Need to Know</p>
              <div className={styles.card__info}>
                <Image src={Blog_user} alt="#" />
                <div className={styles.user__title}>Ina Takahashi</div>
                <div className={styles.line}></div>
                <div className={styles.read}>5 min read</div>
              </div>
            </div>
          </div>
          <div className={styles.blog__left}>
            <div className={styles.blog__inner}>
              <div className={styles.blog__center}>
                {" "}
                <Image src={Sms} alt="#" />
              </div>
              <div className={styles.up_data}>
                Subscribe to keep up to date.
              </div>

              <div className={styles.data__btns}>
                <div className={styles.input}>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.latest__inner}>
        <div className={styles.container}>
          <h2>Latest articles</h2>
          <div className={styles.blog}>
            <Item img={Country} />
            <Item img={Country2} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.blog}>
          <Item img={Laptop} />
          <div className={styles.content}>
            <Content img={Work} />
            <Content img={Work2} />
            <Content img={Work3} />
            <Content img={Work4} />
            <Content img={Work5} />
          </div>
        </div>
        <div className={styles.most}>
          <div className={styles.menu__logo}>Most popular articles</div>
          <div className={styles.most__inner}>
            <Most img={Flag} />
            <Most img={Mountain} />
            <Most img={Talk} />
          </div>
          <div className={styles.most__inner}>
            <Most img={Contact} />
            <Most img={Vibe} />
            <Most img={Visit} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
