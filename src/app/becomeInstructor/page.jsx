"use client";

import { Button, Carousel, Typography, Col, Divider, Row } from "antd";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import {
  MailFilled,
  FileTextOutlined,
  ProfileOutlined,
  PlayCircleOutlined,
  ShakeOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import heroimg from "/public/images/instructorheroimg.png";
import student from "/public/images/icons/students.svg";
import certificate from "/public/images/icons/certification.svg";
import gloval from "/public/images/icons/gloval.svg";
import success from "/public/images/icons/success.svg";
import mockup from "/public/images/mockup.png";
import regulationimg from "/public/images/instructorRules.png";
import helpcenterimg from "/public/images/helpcenter.png";
import quot from "/public/images/icons/Quotes.png";
import reviewimg1 from "/public/images/review1.png";
import reviewimg2 from "/public/images/review2.png";
import reviewimg3 from "/public/images/review3.png";
import reviewimg4 from "/public/images/review4.png";
import reviewimg5 from "/public/images/review5.png";
import reviewimg6 from "/public/images/review6.png";
import reviewimg7 from "/public/images/review7.png";
import reviewimg8 from "/public/images/review8.png";
import teacher from "/public/images/teacher.png";
import { useTranslations } from "next-intl";
const { Title, Paragraph } = Typography;
const page = () => {
  const t = useTranslations();
  // Ref to control the carousel
  const carouselRef = useRef(null);

  const contentStyle = {
    height: "160px",
    width: "70%",
    color: "#1D2026",
    lineHeight: "160px",
    textAlign: "center",
    background: "#BAE4FF",
    padding: "20px",
  };

  return (
    <div>
      {/* top banner section -------------------------------- */}
      <div className="bg-[#F9FAFB] text-center p-6">
        <h1 className="text-3xl font-bold text-[#1D2939]">
          {t("Become an Instructor")}
        </h1>
        <p className="text-sm font-normal text-[#667085] pt-2">
          Home / {t("Become an Instructor")}
        </p>
      </div>

      {/* hero section here ------------------------------------ */}
      <div className="  min-h-[430px] lg:py-24 py-12">
        <section className="">
          <div className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
            {/* LEFT HERO SECTION */}
            <div className="flex flex-col justify-center p-6  text-center rounded-sm  w-full lg:text-left ">
              <div className="bg-[#D8F0FF] px-4 font-semibold pr-6 py-2 text-[#475467] w-fit rounded-3xl">
                {" "}
                🔥 {t("Earn money")}
              </div>
              <h1 className="lg:text-[56px] text-4xl font-black leading-none sm:text-6xl text-[#101828] font-Merriweather">
                {t("Become an Instructor")}
              </h1>
              <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#475467] leading-8 max-w-md lg:mx-0 mx-auto ">
                {t(
                  "Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries."
                )}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link href="/auth/signup">
                  <Button
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                  >
                    {t("Get started now")}
                    <span>
                      {" "}
                      <ArrowUpOutlined className="rotate-45 text-xl" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT HERO SECTION */}
            <div className="max-w-2xl">
              <Image src={heroimg} alt="heroimg" />
            </div>
          </div>
        </section>
      </div>

      {/* collected info about instructors ant students  */}
      <div className="bg-[#D8F0FF] py-24">
        <div className="container mx-auto flex flex-wrap items-start justify-around gap-8">
          {/* students section  */}
          <div className="flex  gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={student} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">67.1k </h1>
              <p className="text-sm text-[#475467] font-medium">students</p>
            </div>
          </div>
          {/* instructors section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={certificate} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">26k </h1>
              <p className="text-sm text-[#475467] font-medium">
                certified instructors
              </p>
            </div>
          </div>
          {/* countrys section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={gloval} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">72 </h1>
              <p className="text-sm text-[#475467] font-medium">
                Country Language
              </p>
            </div>
          </div>
          {/* succdess section  */}
          <div className="flex gap-2">
            <div>
              {/* <UsergroupAddOutlined /> */}
              <Image src={success} alt="student" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  text-[#101828]">99.9% </h1>
              <p className="text-sm text-[#475467] font-medium">
                CSuccess Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why become an instructor section  */}
      <div className="bg-[#195671] lg:pt-24 pt-6 lg:pl-24 pl-6 lg:pr-24  pr-6 ">
        <div className="lg:flex md:flex flex-row gap-16  justify-center  container mx-auto ">
          <div className="lg:w-1/2 w-full ">
            {/* left content image  */}
            <Image src={mockup} alt="mockup" className="w-full h-full" />
          </div>
          <div className="max-w-2xl  pt-6">
            {/* right content  */}
            <h1 className="text-3xl font-bold text-[#F9FAFB] leading-10">
              Why you’ll start teaching on <br /> Pantognostis
            </h1>
            <p className="text-sm text-[#F2F4F7] font-normal leading-6 mt-8 mb-2">
              Praesent congue ornare nibh sed ullamcorper. Proin venenatis
              tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
              vitae nulla a purus mollis venenatis.
            </p>

            <div className="  py-6  w-full">
              <div>
                <ul className="list-none lg:text-lg md:text-lg text-sm  font-normal text-[#F2F4F7] space-y-[24px] py-2 pb-8">
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        Tech your students as you want.
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        Morbi quis lorem non orci fermentum euismod. Nam sapien
                        tellus, aliquam nec porttitor vel, pellentesque at
                        metus.
                      </p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        Manage your course, payment in one place
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        Sed et mattis urna. Sed tempus fermentum est, eu
                        lobortis nibh consequat eu. Nullam vel libero pharetra,
                        euismod turpis et, elementum enim.
                      </p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">
                        Earn money
                      </h3>
                      <p className="text-sm text-[#F2F4F7]">
                        Nullam mattis lectus ac diam egestas posuere. Praesent
                        auctor massa orci, ut fermentum eros dictum id.{" "}
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* become successfull instructor's steps ------------------------------ */}
      <div className="lg:py-24 py-12 bg-[#F9FAFB]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1D2026] mb-12">
            How you'll become a successful <br /> instructor
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-[#FFFFFF] p-6 rounded-md  hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex w-fit justify-center bg-[#9E77ED1A] p-4 rounded-md mb-6">
                <FileTextOutlined className="text-[#9E77ED] text-4xl" />
              </div>
              <h3 className="text-sm  font-bold text-[#1D2026] text-start">
                1. Apply to become instructor.
              </h3>
              <p className="text-sm  text-[#667085] mt-3 text-start">
                Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
                consequat eu.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FFFFFF] p-6 rounded-md  hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex w-fit rounded-md justify-center items-center bg-[#FEE4E2] p-4  mb-4">
                <ProfileOutlined className="text-red-500 text-4xl" />
              </div>
              <h3 className="text-sm  font-bold text-[#1D2026] text-start">
                2. Setup & edit your profile.
              </h3>
              <p className="text-sm  text-[#667085] mt-3 text-start">
                Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
                consequat eu.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FFFFFF] p-6 rounded-md  hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex w-fit rounded-md justify-center items-center bg-[#BAE4FF] p-4  mb-4">
                <PlayCircleOutlined className="text-[#1580FB] text-4xl" />
              </div>
              <h3 className="text-sm  font-bold text-[#1D2026] text-start">
                3. Create your new course.
              </h3>
              <p className="text-sm  text-[#667085] mt-3 text-start">
                Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
                consequat eu.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FFFFFF] p-6 rounded-md  hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex w-fit rounded-md justify-center items-center bg-[#D1FADF] p-4  mb-4">
                <ShakeOutlined className="text-green-500 text-4xl" />
              </div>
              <h3 className="text-sm  font-bold text-[#1D2026] text-start">
                4. Start teaching & earning.
              </h3>
              <p className="text-sm  text-[#667085] mt-3 text-start">
                Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
                consequat eu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* regulation for instructors--------------------------------- */}
      <div className="bg-white lg:py-24 py-12 container mx-auto lg:flex flex-row items-center  justify-between lg:gap-52 gap-6 px-6 space-y-11 ">
        <div className=" ">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Learn about rules & regulations for Instructor{" "}
          </h1>
          <p className="text-[16px] text-[#667085] font-normal">
            Sed auctor, nisl non elementum ornare, turpis orci consequat arcu,
            at iaculis quam leo nec libero. Aenean mollis turpis velit, id
            laoreet sem luctus in. Etiam et egestas lorem.{" "}
          </p>
          <ul className="list-disc list-inside  text-[16px]  font-semibold text-[#344054] leading-8 mt-6">
            <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
            <li>Nam leo tortor, tempus et felis non.</li>
            <li>
              Porttitor faucibus erat. Integer eget purus non massa ultricies
              pretium ac sed eros.
            </li>
            <li>
              Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet
              turpi.
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Image src={regulationimg} alt="mockup" className="w-fit h-full" />
        </div>
      </div>

      {/* help center section --------------------------------- */}
      <div className="bg-white lg:py-24 py-12 container mx-auto lg:flex flex-row items-center  justify-between lg:gap-52 gap-6 px-6 space-y-11 ">
        <div className="w-full">
          <Image src={helpcenterimg} alt="mockup" className="w-full h-full" />
        </div>
        <div className=" w-full">
          <h1 className="text-3xl font-bold text-[#1D2026] mb-8">
            Don’t worry we’re always here <br /> to help you
          </h1>
          <p className="text-[16px] text-[#667085] font-normal">
            Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus
            nec augue malesuada, sagittis ligula vel, faucibus metus. Nam
            viverra metus eget nunc dignissim.
          </p>
          <ul className="list-disc list-inside  text-[14px]  font-semibold text-[#344054] leading-10 mt-6">
            <li className="flex gap-2">
              {" "}
              <ArrowRightOutlined className="text-[#14698A]  text-xl" /> Sed nec
              dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.
            </li>
            <li className="flex gap-2">
              {" "}
              <ArrowRightOutlined className="text-[#14698A]  text-xl" /> Those
              who are looking to reboot their work life and try a new profession
              that.
            </li>
            <li className="flex gap-2">
              {" "}
              <ArrowRightOutlined className="text-[#14698A]  text-xl" /> Nunc
              auctor consequat lorem, in posuere enim hendrerit sed.
            </li>
            <li className="flex gap-2">
              {" "}
              <ArrowRightOutlined className="text-[#14698A]  text-xl" /> Duis
              ornare enim ullamcorper congue.
            </li>
          </ul>
          <div className="flex items-center  gap-2 mt-8">
            <div>
              <MailFilled className="text-2xl  p-3 text-white bg-[#14698A] rounded-full mr-2 cursor-pointer" />
            </div>
            <div>
              <p className="text-sm text-[#667085] font-medium">
                Email us, anytime anywhere
              </p>
              <h3 className="text-lg font-medium text-[#1D2026]">
                help.pantognostis @gamil.com
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* review section here ------------------------ */}
      <div className="container mx-auto  py-12 flex justify-between px-6 flex-col lg:flex-row gap-16">
        {/* Left side - Text Section */}
        <div className="lg:w-1/3">
          <Title level={2} className="font-bold text-[30px] text-[#1D2026]">
            20k+ Instructors created their success story with Pantognostis
          </Title>
          <Paragraph className="text-[#4E5566] text-[16px] mt-4">
            Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum
            eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id
            pellentesque mollis.
          </Paragraph>

          {/* Carousel Section */}
          <Carousel autoplay ref={carouselRef} className="mt-10">
            <div className="lg:w-1/3">
              {/* Quote Section */}
              <div className="mt-10 bg-[#BAE4FF] text-[#1D2026]  p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-500">
                  <Image src={quot} alt="Quote" className="w-10 h-10" />
                </div>
                <Paragraph className="mt-4 text-[18px] text-[#1D2026]">
                  Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
                  Pellentesque ullamcorper auctor ante, egestas interdum quam
                  facilisis commodo. Phasellus efficitur quis ex in consectetur.
                  Mauris tristique suscipit metus, a molestie dui dapibus vel.
                </Paragraph>
              </div>

              {/* Navigation Arrows */}
            </div>
            <div className="lg:w-1/3">
              {/* Quote Section */}
              <div className="mt-10 bg-[#BAE4FF] text-[#1D2026]  p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-500">
                  <Image src={quot} alt="Quote" className="w-10 h-10" />
                </div>
                <Paragraph className="mt-4 text-[18px] text-[#1D2026]">
                  Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
                  Pellentesque ullamcorper auctor ante, egestas interdum quam
                  facilisis commodo. Phasellus efficitur quis ex in consectetur.
                  Mauris tristique suscipit metus, a molestie dui dapibus vel.
                </Paragraph>
              </div>

              {/* Navigation Arrows */}
            </div>
          </Carousel>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-start space-x-4 mt-6">
            <Button
              icon={<LeftOutlined />}
              shape="circle"
              size="large"
              onClick={() => carouselRef.current.prev()} // Go to previous slide
            />
            <Button
              icon={<RightOutlined />}
              shape="circle"
              size="large"
              className="bg-blue-500 text-white"
              onClick={() => carouselRef.current.next()} // Go to next slide
            />
          </div>
        </div>

        {/* Right side - Image Grid */}
        <div className="flex items-center justify-center gap-6 w-full ">
          <div>
            <div className="flex items-end pb-6  gap-16">
              <Image src={reviewimg1} alt="reviewimg" className="" />
              <Image src={reviewimg2} alt="reviewimg" className="" />
            </div>
            <div>
              <Image src={reviewimg4} alt="reviewimg" className="" />
            </div>
            <div className="flex items-start pt-6 justify-center gap-6">
              <Image src={reviewimg6} alt="reviewimg" className="" />
              <Image src={reviewimg7} alt="reviewimg" className="" />
            </div>
          </div>
          <div className="space-y-6 lg:block md:block hidden">
            <Image src={reviewimg3} alt="reviewimg" className="" />
            <Image src={reviewimg5} alt="reviewimg" className="" />
            <Image src={reviewimg8} alt="reviewimg" className="" />
          </div>
        </div>
      </div>

      {/* start teaching with us --------------------------------> */}
      <div>
        <div className="  min-h-[430px] lg:py-24 py-12 bg-[#000000] text-white">
          <section className="">
            <div className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
              {/* LEFT HERO SECTION */}
              <div className="flex flex-col justify-center p-6  text-center rounded-sm  w-full lg:text-left ">
                <h1 className="lg:text-[56px] text-4xl font-bold leading-none sm:text-6xl text-white font-Merriweather">
                  Start teaching with us <br /> and inspire others
                </h1>
                <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#B7BAC7] leading-8 max-w-md lg:mx-0 mx-auto  ">
                  Become an instructor & start teaching with 26k certified
                  instructors. Create a success story with 67.1k Students <br />{" "}
                  — Grow yourself with 71 countries.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Link href="/auth/signup">
                    <Button
                      className="text-[#FFFFFF] text-[18px] font-semibold p-6"
                      size="large"
                      type="primary"
                    >
                      Register now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT HERO SECTION */}
              <div className="w-full">
                <Image className="w-full" src={teacher} alt="heroimg" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
