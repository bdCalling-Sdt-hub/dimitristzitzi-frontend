import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
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
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  text-sm gap-x-3 gap-y-8 lg:w-2/3 w-full">
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
              </div>
            </div>
            <div className="space-y-3 pl-12">
              <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-50">Social media</div>
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
