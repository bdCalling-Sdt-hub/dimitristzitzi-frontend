"use client";
import Image from "next/image";
import React from "react";
import heroimg from "../../public/images/browseheroimg.png";
import { Button, Dropdown, Menu, Input } from "antd";
import { SearchOutlined,DownOutlined } from "@ant-design/icons";

const page = () => {
  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">Category 1</Menu.Item>
      <Menu.Item key="2">Category 2</Menu.Item>
      <Menu.Item key="3">Category 3</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${heroimg.src})` }}
        className="w-full min-h-[407px] bg-cover"
      >
       <div className="pt-28">
        <div className="flex items-center justify-between max-w-2xl mx-auto ">
            <div className=" my-8 ">
               <div className="flex items-center space-x-2 pr-4 border-r-2 border-white">
               <h1 className="text-white text-4xl font-bold">16K</h1><span className=" text-white text-[24px] font-normal">instractors</span>
               </div>
            </div>
            <div className=" my-8 ">
               <div className="flex items-center space-x-2 pr-4 pl-4 border-r-2 border-white">
               <h1 className="text-white text-4xl font-bold">120k</h1><span className=" text-white text-[24px] font-normal">Graduates</span>
               </div>
            </div>
            <div className=" my-8 ">
               <div className="flex items-center space-x-2 pr-4 pl-4 ">
               <h1 className="text-white text-4xl font-bold">150k</h1><span className=" text-white text-[24px] font-normal">Members</span>
               </div>
            </div>
        </div>
       <div className=" w-full max-w-3xl  mx-auto flex items-center space-x-2">
          <Input
            placeholder="Search for course"
            className="w-full h-[57px] text-[#667085] text-[16px] px-4"
            prefix={<SearchOutlined size={15} className="text-[#667085]" />} // Single element for the left icon
            suffix={
              // Wrap inside a div
              <div>
                <div className="border-l-2  text-[#1D2939] font-normal border-[#D0D5DD]">
                  <Dropdown
                    className="border-none"
                    overlay={categoryMenu}
                    trigger={["hover"]}
                  >
                    <Button className="text-lg">Category  <DownOutlined className="text-lg" /> </Button>
                  </Dropdown>
                </div>
              </div>
            }
          />
        </div>
       </div>
      </div>
    </div>
  );
};

export default page;
