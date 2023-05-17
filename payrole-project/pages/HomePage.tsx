import React from "react";
import { Header } from "../components/Header";
import Headline from "@/components/Headline";
import Dashboard from "../assets/img/Dashboard.png";
import Image from "next/image";
import Section from "@/components/Section";
import Offer from "@/components/Offer";
import Info from "@/components/Info";
import Payment from "@/components/Payment";
import Global from "@/components/Global";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Headline />
      <div className="container">
        <Image className="img" src={Dashboard} alt="#" />
      </div>
      <Section />
      <Offer />
      <Info />
      <Payment />
      <Global />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
