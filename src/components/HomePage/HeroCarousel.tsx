import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "280px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

import Banner1 from "@/../public/images/Hero/Banner1.jpg";
import Banner2 from "@/../public/images/Hero/Banner2.jpg";
import Banner3 from "@/../public/images/Hero/Banner3.jpg";

import Image from "next/image";

const HeroCarousel: React.FC = () => (
  <div className=" bg-red-400 max-w-7xl mx-auto overflow-hidden w-sc relative">
    <Carousel autoplay>
      <div>
        <Image src={Banner1} alt="Banner-1" style={contentStyle} />
      </div>
      <div>
        <Image src={Banner2} alt="Banner-2" style={contentStyle} />
      </div>
      <div>
        <Image src={Banner3} alt="Banner-3" style={contentStyle} />
      </div>
    </Carousel>
  </div>
);

export default HeroCarousel;
