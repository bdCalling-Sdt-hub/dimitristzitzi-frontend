'use client'
import React, { useState } from 'react';
import {Rate } from 'antd';
import Image from "next/image";
import instactor from "../../../../public/images/instructor.png";
import instactor2 from "../../../../public/images/instructor2.png";
import { UsergroupAddOutlined, PlayCircleOutlined } from "@ant-design/icons";
import CourseCard from '@/components/ui/CourseCard';
const page = ({params}) => {
   
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
       
      ]

    return (
        <div>
           <div className='max-w-[838px] mx-auto'>
           <div className=" lg:mt-28 md:mt-24 mt-12 xl:max-w-2xl w-full ">
              <h1 className="text-3xl font-bold mb-8 text-[#1D2939] font-Merriweather">
                Instructor
              </h1>
              <div className="flex items-center justify-start px-2 mb-9">
                <Image
                  height={56}
                  width={56}
                  src={instactor}
                  alt="instructor"
                  className=" rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg  font-semibold border-b-2 text-[#1D2939] border-[#1D2939] w-fit ">
                    Johon Doe
                  </h3>
                  <p className="text-[#475467] text-[16px] font-normal">
                    Head of Product Management
                  </p>
                </div>
              </div>
           
            </div>

            {/* about section -------------------------------------------------------------- */}
            <div className="bg-white my-12   xl:max-w-2xl w-full  relative">
              <h2 className="text-lg font-semibold text-[#475467] mb-4">About</h2>
              <div
                className={`relative`}
              >
                <p className="text-[#475467] mb-4">
                  I'm Angela, I'm a developer with a passion for teaching. I'm
                  the lead instructor at the London App Brewery, London's
                  leading Programming Bootcamp. I've helped hundreds of
                  thousands of students learn to code and change their lives by
                  becoming a developer. I've been invited by companies such as
                  Twitter, Facebook and Google to teach their employees
                </p>
                <p className="text-[#475467]">
                  My first foray into programming was when I was just 12 years
                  old, wanting to build my own Space Invader game. Since then,
                  I've made hundred of websites, apps and games. But most
                  importantly, I realised that my greatest passion is teaching.
                </p>

               
              </div>

           
            </div>


            <div className='my-12'>
            <h1 className="text-lg font-bold  text-[#475467] font-Merriweather">
            207 courses from John Doe
              </h1>


                   {/* Course cards for each category */}
       <div className="grid  sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
            </div>
           </div>
        </div>
    );
};

export default page;