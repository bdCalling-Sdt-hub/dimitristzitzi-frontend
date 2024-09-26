import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import heroimg from "../../public/images/instructorheroimg.png";
import student from "../../public/images/icons/students.svg";
import certificate from "../../public/images/icons/certification.svg";
import gloval from "../../public/images/icons/gloval.svg";
import success from "../../public/images/icons/success.svg";
import mockup from "../../public/images/mockup.png";
const page = () => {
  return (
    <div>
      {/* top banner section -------------------------------- */}
      <div className="bg-[#F9FAFB] text-center p-6">
        <h1 className="text-3xl font-bold text-[#1D2939]">
          Become an Instructor
        </h1>
        <p className="text-sm font-normal text-[#667085] pt-2">
          Home / Become an Instructor
        </p>
      </div>

      {/* hero section here ------------------------------------ */}
      <div className="  min-h-[430px] py-24">
        <section className="">
          <div className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
            {/* LEFT HERO SECTION */}
            <div className="flex flex-col justify-center p-6  text-center rounded-sm  w-full lg:text-left ">
              <div className="bg-[#D8F0FF] px-4 font-semibold pr-6 py-2 text-[#475467] w-fit rounded-3xl">
                {" "}
                🔥 Earn money
              </div>
              <h1 className="lg:text-[56px] text-4xl font-black leading-none sm:text-6xl text-[#101828] font-Merriweather">
                Become an Instuctor
              </h1>
              <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#475467] leading-8 max-w-md lg:mx-0 mx-auto ">
                Become an instructor & start teaching with 26k certified
                instructors. Create a success story with 67.1k Students — Grow
                yourself with 71 countries.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link href="/browseCourse">
                  <Button
                    className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                    size="large"
                    type="primary"
                  >
                    Get started now
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
      <div className="bg-[#195671] lg:pt-24 pt-6 lg:pl-24 pl-6 lg:pr-24  pr-6 mb-52">
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
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">Tech your students as you want.</h3> 
                      <p className="text-sm text-[#F2F4F7]">Morbi quis lorem
                      non orci fermentum euismod. Nam sapien tellus, aliquam nec
                      porttitor vel, pellentesque at metus.</p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">Manage your course, payment in one place</h3>
                      <p className="text-sm text-[#F2F4F7]">Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.</p>
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-4">
                    <CheckCircleFilled className="text-[#12B76A] text-2xl pt-1" />
                    <li>
                      <h3 className="text-[#F9FAFB] text-lg font-medium pb-2">Earn money</h3>
                      <p className="text-sm text-[#F2F4F7]">Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. </p>
                    </li>
                  </div>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
