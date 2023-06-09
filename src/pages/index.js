import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Solution from "@/components/Solution";
import UserWebLayout from "@/components/UserWebLayout";
import { Button } from "antd";
import Link from "next/link";
import React, { FC } from "react";
import Real from "../components/Real.js";
const index = () => {
  return (
    <UserWebLayout webtitle="Solar Plant">
      <div className="container-landing">
        <div className="img-overlay">
          <Header />
          <div
            data-aos="fade-right"
            className="intro-container"
          >
            <h1>Monitoring of Solar Power Plant</h1>
            <div className="btn">
              <Link href="/login">
                <Button className="btn">LOGIN</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Solution />
      <Footer />
    </UserWebLayout>
  );
};

export default index;
