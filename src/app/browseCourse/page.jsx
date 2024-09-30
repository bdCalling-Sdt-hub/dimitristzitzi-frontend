"use client";
import Image from "next/image";
import React from "react";
import heroimg from "/public/images/browseheroimg.png";
import { Button, Dropdown, Menu, Input } from "antd";
import { SearchOutlined, DownOutlined,RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";

const page = () => {
    const coursemenu =[
        {
          "id": 1,
          "instructor": "John Michael",
          "rating": 4.7,
          "reviews": 3242,
          "courseTitle": "Product Management Basic - Course",
          "duration": "40 Hours",
          "students": 176,
          "price": "€ 29.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png",
          "category": "All courses"
        },
        {
          "id": 2,
          "instructor": "John Michael",
          "rating": 4.7,
          "reviews": 3242,
          "courseTitle": "Advanced Product Strategy - Course",
          "duration": "45 Hours",
          "students": 150,
          "price": "€ 35.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png",
          "category": "Graphic Design"
        },
        {
          "id": 3,
          "instructor": "John Michael",
          "rating": 4.6,
          "reviews": 2987,
          "courseTitle": "Product Roadmaps for Success",
          "duration": "38 Hours",
          "students": 200,
          "price": "€ 27.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png",
          "category": "UI/UX Design"
        },
        {
          "id": 4,
          "instructor": "John Michael",
          "rating": 4.8,
          "reviews": 3500,
          "courseTitle": "Mastering Agile Product Management",
          "duration": "50 Hours",
          "students": 250,
          "price": "€ 40.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png",
          "category": "Programming"
        },
        {
          "id": 5,
          "instructor": "John Michael",
          "rating": 4.9,
          "reviews": 3800,
          "courseTitle": "Product Leadership for Managers",
          "duration": "60 Hours",
          "students": 300,
          "price": "€ 50.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png",
          "category": "Artificial Intelligence"
        },
        {
          "id": 6,
          "instructor": "John Michael",
          "rating": 4.5,
          "reviews": 2800,
          "courseTitle": "Foundations of Product Development",
          "duration": "35 Hours",
          "students": 180,
          "price": "€ 25.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png",
          "category": "Business Management"
        },
        {
          "id": 7,
          "instructor": "John Michael",
          "rating": 4.7,
          "reviews": 3242,
          "courseTitle": "Product Marketing Essentials",
          "duration": "42 Hours",
          "students": 190,
          "price": "€ 30.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png",
          "category": "3D"
        },
        {
          "id": 8,
          "instructor": "John Michael",
          "rating": 4.7,
          "reviews": 3242,
          "courseTitle": "Product Analytics for Beginners",
          "duration": "48 Hours",
          "students": 220,
          "price": "€ 33.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png",
          "category": "Sports"
        },
        {
          "id": 9,
          "instructor": "John Michael",
          "rating": 4.6,
          "reviews": 3100,
          "courseTitle": "Building Digital Products",
          "duration": "55 Hours",
          "students": 210,
          "price": "€ 37.00",
          "enrollLink": "ENROLL NOW",
          "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png",
          "category": "All courses"
        }
      ]
      
  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">Category 1</Menu.Item>
      <Menu.Item key="2">Category 2</Menu.Item>
      <Menu.Item key="3">Category 3</Menu.Item>
    </Menu>
  );
  return (
    <div>
      {/* Hero section with image and search bar and category dropdown  */}
      <div
        style={{ backgroundImage: `url(${heroimg.src})` }}
        className="w-full min-h-[407px] bg-cover py-6"
      >
        <div className="lg:pt-28 md:pt-28 py-12 px-6">
          <div className="flex s-mobile:py-6 l-mobile:flex-wrap m-mobile:flex-wrap s-mobile:flex-wrap items-center justify-between max-w-2xl mx-auto ">
            <div className=" lg:my-8 md:my-8 my-2 ">

              <div className="xl:flex lg:flex flex-wrap items-center space-x-2 pr-4 s-mobile:pr-[8px] pl-4 s-mobile:pl-[8px]  xl:border-r-2 lg:border-r-2 md:border-r-2 border-white">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">16K</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  instractors
                </span>
              </div>
            </div>
            <div className=" lg:my-8 md:my-8 my-2 ">
              <div className="xl:flex lg:flex flex-wrap items-center space-x-2 pr-4 s-mobile:pr-[8px]  s-mobile:pl-[2px] xl:border-r-2 lg:border-r-2 md:border-r-2  border-white">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">120k</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  Graduates
                </span>
              </div>
            </div>
            <div className=" lg:my-8 md:my-8 my-2 ">
              <div className="xl:flex lg:flex flex-wrap items-center space-x-2  ">
                <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">150k</h1>
                <span className=" text-white lg:text-[24px] md:text-[24px] text-sm font-normal">
                  Members
                </span>
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
                      <Button className="text-lg">
                        Category <DownOutlined className="text-lg" />{" "}
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
      {/* End of Hero section  */}

      <div className="container mx-auto px-4">

        
        {/* art and design menu card  */}
        <div className="flex  justify-between pb-[32px] pt-[82px] ">
          <h1 className="lg:text-[36px] md:text-[28px] text-18px  font-bold leading-none text-2xl text-[#101828] font-Merriweather text-start ">
            Art & Design
          </h1>
         <div>
         <Link className=" font-bold border-b-2 pb-0 border-[#1D2939] text-[#000000]" href="/browseCourse/category/">View all  <RightOutlined className="font-bold pl-1" /> </Link>
         </div>
        </div>
         {/* Course cards for each category */}
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
              {coursemenu.map((item) => (
                <CourseCard
                  key={item.id}
                  courseimage={item.imageLink}
                  courseTitle={item.courseTitle}
                  instructor={item.instructor}
                  rating={item.rating}
                  price={item.price}
                  reviews={item.reviews}
                  duration={item.duration}
                  students={item.students}
                  enrollLink={item.id}
                />
              ))}
        </div>

        {/* programming menu card  */}
        <div className="flex  justify-between pb-[32px] pt-[82px] ">
          <h1 className="lg:text-[36px] md:text-[28px] text-18px   font-bold leading-none text-2xl text-[#101828] font-Merriweather text-start ">
          Programing
          </h1>
         <div>
         <Link className=" font-bold border-b-2 pb-0 border-[#1D2939] text-[#000000]" href="/browseCourse/category/">View all  <RightOutlined className="font-bold pl-1" /> </Link>
         </div>
        </div>
         {/* Course cards for each category */}
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
              {coursemenu.map((item) => (
                <CourseCard
                  key={item.id}
                  courseimage={item.imageLink}
                  courseTitle={item.courseTitle}
                  instructor={item.instructor}
                  rating={item.rating}
                  price={item.price}
                  reviews={item.reviews}
                  duration={item.duration}
                  students={item.students}
                  enrollLink={item.enrollLink}
                />
              ))}
        </div>

        {/* Sales & Marketing menu card  */}
        <div className="flex  justify-between pb-[32px] pt-[82px] ">
          <h1 className="lg:text-[36px] md:text-[28px] text-18px   font-bold leading-none text-2xl text-[#101828] font-Merriweather text-start ">
          Sales & Marketing
          </h1>
         <div>
         <Link className=" font-bold border-b-2 pb-0 border-[#1D2939] text-[#000000]" href="/browseCourse/category/">View all  <RightOutlined className="font-bold pl-1" /> </Link>
         </div>
        </div>
         {/* Course cards for each category */}
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4 pb-[82px]">
              {coursemenu.map((item) => (
                <CourseCard
                  key={item.id}
                  courseimage={item.imageLink}
                  courseTitle={item.courseTitle}
                  instructor={item.instructor}
                  rating={item.rating}
                  price={item.price}
                  reviews={item.reviews}
                  duration={item.duration}
                  students={item.students}
                  enrollLink={item.enrollLink}
                />
              ))}
        </div>

        
      </div>
      
    </div>
  );
};

export default page;
