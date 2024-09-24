'use client'
import { Card,Avatar, Button, Rate } from "antd";
import React from "react";
import instactor from "../../../public/images/instructor.png";
import videoimg from "../../../public/images/videoimg.png";
import student from '../../../public/images/instructor.png'
import Image from "next/image";
import { ClockCircleOutlined ,PlayCircleOutlined,RocketOutlined, MobileOutlined, CheckSquareOutlined, CalendarOutlined,UserOutlined} from "@ant-design/icons";
const page = ({ params }) => {
  console.log(params);
  return (
    <div className="bg-[#1D2939] mb-12 ">
      <div className="container mx-auto  relative py-16 mb-96">
        {/* left side content here */}
        <div className="max-w-2xl space-y-3 ">
          <h1 className="text-white text-2xl font-bold font-Merriweather">
            Product Management Basic Course
          </h1>
          <div className="flex items-start justify-start mb-2">
            <span className="text-yellow-500 text-sm flex items-center justify-center">
              <Rate
                className="text-xl"
                allowHalf
                count={1}
                defaultValue={4.7}
              />{" "}
              <span className="text-[#FFFFFF] font-bold text-[14px]">4.7</span>
            </span>
            <span className="text-[#FFFFFF] font-normal text-sm ml-2 pt-1">
              (65655)
            </span>
          </div>
          <p className="text-[#D0D5DD] text-sm font-normal pb-4">
            Learn Product Management like a Professional. Start from the
            fundamentals and go all the way to mastering product strategy,
            development, and market launch.
          </p>

          <div className="bg-[#344054] p-6 rounded-sm  ">
          <div className="flex items-center justify-start px-2">
            <Image
              src={instactor}
              alt="instructor"
              className=" rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-[14px] text-white font-bold border-b border-white ">
                Johon Doe
              </h3>
              <p className="text-[#D0D5DD] text-sm">Instructor</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-16 px-2 pt-4 " >
            <div>
                <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                    <li> <ClockCircleOutlined  className="text-[16px]"/>  40+ Hours</li>
                    <li> <PlayCircleOutlined  className="text-[16px]"/>  15 Live Projects </li>
                    <li> <RocketOutlined className="text-[16px]" />     Resources</li>
                </ul>
            </div>
            <div>
                <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                    <li> <MobileOutlined  className="text-[16px]"/>      Access on Mobile & TV</li>
                    <li> <CheckSquareOutlined className="text-[16px]" /> Tasks </li>
                    <li><CalendarOutlined className="text-[16px]" />   Last updated on 15/07/2024</li>
                </ul>
            </div>
          </div>
        </div>
        </div>

        {/* right side content here */}
        <div className="w-2xl mx-auto bg-white border border-[#D9D9D9] rounded-lg shadow-md  absolute right-0 top-[64px]">
      <div className="relative">
        <Image 
          src={videoimg} 
          alt="Course cover" 
          className="w-full rounded-lg" 
        />
        <p className="absolute bottom-2 left-1/3 mt-2 ml-2 bg-opacity-70 text-sm font-bold  text-[#FCFCFD]">
          Preview this course
        </p>
      </div>
      
      <div className="mt-4 p-4">
        <div className="flex items-center space-x-2">
        <Avatar.Group maxCount={5}>
        {/* Image for student */}
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        <Avatar src={student.src} />
        
      </Avatar.Group>
          <span className="text-[#263238] text-[12px] font-normal"><span className="text-[#0C2A56] font-semibold">+ 127</span> Students enrolled the course</span>
        </div>

      <div className="flex items-center justify-between py-4">
      <h3 className="text-2xl font-bold mt-2">€29.00 </h3>
      <span className="bg-[#FFFAEB] h-[44px] px-4 text-[#F79009] font-semibold rounded-sm flex items-center justify-center py-1 text-xs">Basic</span>
      </div>

        <div className="text-[#1D2939]  mt-2">
          <p><strong className="text-sm font-semibold">Whom this course is for:</strong></p>
          <ul className="list-disc list-inside text-sm text-[#475467] space-y-1 py-2 pb-8">
            <li>Starting your own business</li>
            <li>Running or growing an existing business</li>
            <li>Managing the accounts for a business</li>
            <li>Writing a business plan</li>
            <li>Having difficulty with the financials of your business plan</li>
            <li>Forecasting sales for your business</li>
          </ul>
        </div>
        
        <Button type="primary" size="large" block className="mt-4 p-6">
          €29.00 Buy Now
        </Button>
        <button  className="mt-2 bg-transparent font-semibold p-6 text-[#475467] block mx-auto">
          Add to Cart
        </button>
      </div>
    </div>

        
      </div>
    </div>
  );
};

export default page;
