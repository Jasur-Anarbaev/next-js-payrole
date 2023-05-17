import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import Logo from "../../assets/svg/logo.svg";
import Insta from "../../assets/svg/insta.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Twitter from "../../assets/svg/twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__item}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__logo}>
              <Image src={Logo} alt="#" />
            </div>
          </div>

          <div className={styles.footer__contents}>
            <h1>How It Works</h1>
            <a href="#">Hire Employees</a>
            <a href="#">Hire Contractors</a>
            <a href="#">Global Payroll</a>
            <a href="#">Integrations</a>
          </div>
          <div className={styles.footer__contents}>
            <h1>Company</h1>
            <a href="#">About </a>
            <a href="#">Contact Us</a>
            <a href="#">Contries</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles.footer__contents}>
            <h1>Solutions</h1>
            <a href="#">Compliances</a>
            <a href="#">Payments</a>
            <a href="#">Taxes</a>
            <a href="#">Enterprises</a>
          </div>
          <div className={styles.footer__contents}>
            <h1>Resources</h1>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a href="#">Open API</a>
            <a href="#">Guide</a>
          </div>
        </div>
        <div className={styles.footer__frame}>
          <div className={styles.footer__logo}>
            <a href="#">©2022. All Rights Reserved.</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className={styles.footer__icons}>
            <a href="#">
              <Image src={Insta} alt="#" />
            </a>{" "}
            <a href="#">
              <Image src={Facebook} alt="#" />
            </a>{" "}
            <a href="#">
              <Image src={Linkedin} alt="#" />
            </a>{" "}
            <a href="#">
              <Image src={Twitter} alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
