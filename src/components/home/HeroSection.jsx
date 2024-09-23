import Image from "next/image";
import React from "react";
import heroimg from "../../public/images/heroimg.png";
import herobg from "../../public/images/onlineschool.png";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
const HeroSection = () => {
  return (
    <div className="bg-[#D8F0FF] mb-12 min-h-[430px]">
      <section className="">
        <div 
        
          className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
          <div className="flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-[750px] xl:max-w-[750px] lg:text-left ">
            <div className="bg-white px-4 font-semibold pr-6 py-2 text-[#475467] w-fit rounded-3xl"> 🔥 Introducing</div>
            <h1 className="text-[56px] font-black leading-none sm:text-6xl text-[#101828] font-Merriweather">
              An Excellent Platform to Boost your Career
            </h1>
            <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#475467] leading-8 ">
              Untitled UI is an online based educational platform, where you
              will find more than <br />
              <span className="bg-[#FEC84B] text-black  px-2 py-1 font-bold h-9 w-9 mr-1">
                17k+
              </span>
              pre-recorded & live skills development courses.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
              >
                BROWSE COURSES{" "}
                <span>
                  {" "}
                  <ArrowUpOutlined className="rotate-45 text-xl" />
                </span>
              </Button>
            </div>
          </div>
          <div style={{backgroundImage: `url(${herobg.src})`}} className="w-full bg-no-repeat bg-contain bg-bottom   flex items-center justify-center ">
            <div  >
            <Image height={300} width={300} src={heroimg} alt="heroimg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
