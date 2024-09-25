"use client";
import { Card, Avatar, Button, Rate } from "antd";
import React from "react";
import instactor from "../../../public/images/instructor.png";
import instactor2 from "../../../public/images/instructor2.png";
import videoimg from "../../../public/images/videoimg.png";
import student from "../../../public/images/instructor.png";
import Image from "next/image";
import { Collapse } from "antd";
import {
  ClockCircleOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  MobileOutlined,
  CheckSquareOutlined,
  CalendarOutlined,
  CheckOutlined,
  FolderOutlined,
  FileOutlined,
} from "@ant-design/icons";
const page = ({ params }) => {
  const { Panel } = Collapse;
  const panels = [
    { id: "01", title: "Getting started", time: "02:30 min", isVideo: true },
    { id: "02", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "03", title: "Practice Project", fileSize: "5.3 MB", isVideo: false },
    { id: "04", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "05", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "06", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  ];
  return (
    <div>
      {/* hero section here ---------------------------------------------------------------------------- */}
      <div>
        <div className="      mb-96 ">
          <div className="xl:bg-[#1D2939] lg:bg-[#1D2939] bg-transparent">
            <div className="container mx-auto  relative py-16 px-6">
              {/* left side content here-------------------------------------------- */}
              <div className="max-w-2xl space-y-3 xl:block lg:block hidden ">
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
                    <span className="text-[#FFFFFF] font-bold text-[14px]">
                      4.7
                    </span>
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
                  <div className="flex items-center justify-start gap-16 px-2 pt-4 ">
                    <div>
                      <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                        <li>
                          {" "}
                          <ClockCircleOutlined className="text-[16px]" /> 40+
                          Hours
                        </li>
                        <li>
                          {" "}
                          <PlayCircleOutlined className="text-[16px]" /> 15 Live
                          Projects{" "}
                        </li>
                        <li>
                          {" "}
                          <RocketOutlined className="text-[16px]" /> Resources
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                        <li>
                          {" "}
                          <MobileOutlined className="text-[16px]" /> Access on
                          Mobile & TV
                        </li>
                        <li>
                          {" "}
                          <CheckSquareOutlined className="text-[16px]" /> Tasks{" "}
                        </li>
                        <li>
                          <CalendarOutlined className="text-[16px]" /> Last
                          updated on 15/07/2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side content here-------------------------------------------------- */}
              <div className="max-w-2xl mx-auto bg-white border xl:border-[#D9D9D9] lg:border-[#D9D9D9 ] border-n rounded-lg  xl:absolute lg:absolute block right-0 top-[64px] lg:shadow-lg">
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
                    <span className="text-[#263238] text-[12px] font-normal">
                      <span className="text-[#0C2A56] font-semibold">
                        + 127
                      </span>{" "}
                      Students enrolled the course
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <h3 className="text-2xl font-bold mt-2">€29.00 </h3>
                    <span className="bg-[#FFFAEB] h-[44px] px-4 text-[#F79009] font-semibold rounded-sm flex items-center justify-center py-1 text-xs">
                      Basic
                    </span>
                  </div>

                  <div className="text-[#1D2939]  mt-2">
                    <p>
                      <strong className="text-sm font-semibold">
                        Whom this course is for:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-[#475467] space-y-1 py-2 pb-8">
                      <li>Starting your own business</li>
                      <li>Running or growing an existing business</li>
                      <li>Managing the accounts for a business</li>
                      <li>Writing a business plan</li>
                      <li>
                        Having difficulty with the financials of your business
                        plan
                      </li>
                      <li>Forecasting sales for your business</li>
                    </ul>
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    block
                    className="mt-4 p-6"
                  >
                    €29.00 Buy Now
                  </Button>
                  <button className="mt-2 bg-transparent font-semibold p-6 text-[#475467] block mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" container mx-auto px-6 ">
            {/* webinner section here ------------------------------ */}
            <div className="max-w-2xl  my-12 lg:flex flex-row items-center justify-between gap-6 rounded-lg bg-[#3DCBB1] ">
              {/* left webinar--------- */}
              <div className="space-y-2 p-6 max-w-xs">
                <div className="pb-4">
                  <h3 className="text-lg uppercase text-white">webinar</h3>
                  <p className="text-white text-sm">August 16,2024</p>
                </div>
                <h1 className="text-white text-[32px] font-bold ">
                  Film Maker Skillset for Beginner.
                </h1>
                <p className="text-white text-lg">Kitani Saravati</p>
                <Button className="bg-transparent border-1 border-[#FFFFFF] p-2 text-xs font-normal text-white rounded-[5px] ">
                  Get it Now
                </Button>
              </div>
              {/* right webinar--------- */}
              <div className="w-full">
                <Image
                  src={instactor2}
                  alt="webinar"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            {/* course details section here ---------- */}
            <div className="border border-[#D9D9D9] rounded-lg my-12 p-6 max-w-2xl">
              <h1 className="text-3xl font-bold mb-8">you'll learn</h1>
              <div>
                <ul className="list-none text-lg text-[#475467] font-normal  space-y-[20px] py-2 pb-8">
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      You will learn the core principles of product management,
                      including market research, product development, and
                      roadmap planning.
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            {/* Course curriculum section here ------------- */}
            <div className="max-w-2xl my-12 border border-[#D9D9D9] rounded-lg p-4">
              <h1 className="text-3xl font-bold mb-8">Course Curriculum</h1>

              {/* lacture folder ----------------- */}
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center justify-between gap-6">
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <FolderOutlined className="text-xl text-[#4E5566]" /> 6
                    Sections
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <PlayCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    202 lectures
                  </div>
                  <div className="text-sm font-normal text-[#4E5566] flex items-center gap-3">
                    <ClockCircleOutlined className="text-xl text-[#4E5566]" />{" "}
                    19h 37m
                  </div>
                </div>
              </div>

              {/* course outline here----------------------------------------------------------- */}
              <div className=" mx-auto bg-[#F2F4F7] rounded-md p-4 border-none">
                <Collapse
                  defaultActiveKey={["1"]}
                  accordion
                  expandIconPosition="right"
                  className="bg-[#F2F4F7] rounded-lg border-none"
                >
                  {/* dropswon/panel one --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          Introduction to Product Management
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          06 Lectures • 30 Minutes
                        </div>
                      </div>
                    }
                    key="1"
                    className="mb-2 bg-transparent"
                    style={{backgroundColor: "transparent"}}
                  >
                    <div className="space-y-3">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">{panel.title}</p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>

                  {/* dropswon/panel tow --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          Introduction to Product Management
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          06 Lectures • 30 Minutes
                        </div>
                      </div>
                    }
                    key="2"
                    className="mb-2 bg-transparent"
                    style={{backgroundColor: "transparent"}}
                  >
                    <div className="space-y-3">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">{panel.title}</p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                  {/* dropswon/panel three --------------- */}
                  <Panel
                    header={
                      <div className="">
                        <div className="text-lg font-semibold text-[#475467]">
                          Introduction to Product Management
                        </div>
                        <div className="text-xs text-[#98A2B3] font-normal">
                          06 Lectures • 30 Minutes
                        </div>
                      </div>
                    }
                    key="3"
                    className="mb-2 bg-transparent"
                    style={{backgroundColor: "transparent"}}
                  >
                    <div className="space-y-3">
                      {/* Add space between items */}
                      {panels.map((panel) => (
                        <div
                          key={panel.id}
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                        >
                          <div className="flex items-center">
                            <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                              {panel.id}
                            </div>
                            <div>
                              <p className="font-semibold text-[#475467] text-[16px]">{panel.title}</p>
                              {panel.isVideo ? (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.time}
                                </p>
                              ) : (
                                <p className="text-sm text-[#98A2B3]">
                                  {panel.fileSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            {panel.isVideo ? (
                              <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                            ) : (
                              <FileOutlined className="text-[#14698A] text-2xl" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
