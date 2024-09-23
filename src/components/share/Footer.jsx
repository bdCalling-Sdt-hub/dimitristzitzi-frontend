import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { Button } from "antd";
import { GlobalOutlined,YoutubeOutlined,InstagramOutlined,TwitterOutlined,PhoneOutlined,MailFilled } from "@ant-design/icons";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-[#000000] text-gray-100">
       <div className="container mx-auto">
       <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 text-[#F9FAFB] text-sm font-normal space-y-4">
            <div
              rel="noopener noreferrer"
              href="#"
              className="flex justify-start space-x-3 lg:justify-start pb-4"
            >
              <Image src={logo} alt="Pantagonostis" width={350} height={350} />
            </div>
            <h4>Street Name, Area Address Goes <br /> Here</h4>
            <p>About Us</p>

            <Button
                className="text-[#FFFFFF] hover:text-white bg-[#000000] hover:bg-[#000000] border-[1px]  border-[#E4E7EC] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
              >
                English <GlobalOutlined />
              </Button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  text-sm gap-x-3 gap-y-8 lg:w-2/3 w-full">
            <div className="space-y-3 text-start">
              <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">Programs</h3>
              <div className="flex   gap-6">
              <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Art & Design
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Development
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Communication
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Videography
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Photography
                  </Link>
                </li>
              </ul>
              <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                 Marketing
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                 Content Writing
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Finance
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Science
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Newworking
                  </Link>
                </li>
              </ul>
              </div>
            </div>

            <div className="space-y-3 pl-12">
              <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">Help & Support</h3>
              <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  FAQs
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                 Contact Us
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                  Course Enrollment Help
                  </Link>
                </li>
              </ul>
            </div>
         
            <div className="space-y-3">
            <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">Social Media</h3>
            <div>
            <InstagramOutlined className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
            <TwitterOutlined   className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
            <YoutubeOutlined   className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
            </div>
            <div className="text-[#E4E7EC] text-[16px] font-semibold space-y-4 pt-4">
                <div><PhoneOutlined className="rotate-90 text-3xl text-[#4BCAE9] pr-2" /><span className="text-[#E4E7EC]" >+(00)-000-000-0000</span></div>
                <div className="pl-2"><MailFilled  className=" text-2xl text-[#4BCAE9] pr-2" /><span className="text-[#E4E7EC]" >infoname@mail.com</span></div>
            </div>
            </div>
          </div>
        </div>
        
            <div className="flex justify-center  border-t-2 border-[#475467] py-4">
          <p className="text-sm text-[#E4E7EC]">
            © Pantagonostis 2024 | All rights reserved.
          </p>
          </div>
       </div>
      </footer>
    </div>
  );
};

export default Footer;
