
'use client'
import React from "react";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { Button } from "antd";
import {
  GlobalOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
  PhoneOutlined,
  MailFilled,
} from "@ant-design/icons";
import Link from "next/link";



import { Select } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  
  
  
  const [language, setLanguage] = useState("en"); // Default to 'en'
  const t = useTranslations();
  const localActive = useLocale();
  const cookieMiya = new Cookies();

  useEffect(() => {
    const savedLang = cookieMiya.get("NEXT_LOCALE") || "en";
    setLanguage(savedLang);
  }, []); 



  

  const handleChange = (lang) => {
    if (lang && lang !== language) {
      setLanguage(lang);
      cookieMiya.set("NEXT_LOCALE", lang, { path: "/" });
      router.refresh(); // Refresh the data and re-render the page content
    }
  };
  return (
    <div>
      <footer className="px-4 divide-y bg-[#000000] text-gray-100 relative z-50">
        <div className="px-4">
          <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            {/* left side menu  */}
            <div className="lg:w-1/3 text-[#F9FAFB] text-sm font-normal space-y-4">
              <div
                rel="noopener noreferrer"
                href="#"
                className="flex justify-start space-x-3 lg:justify-start pb-4"
              >
                <Image
                  src={logo}
                  alt="Pantagonostis"
           
                />
              </div>
              <h4>
               {t("Street Name, Area Address Goes Here")}
              </h4>
             <p> <Link href={'/becomeInstructor'} >{t('BecomeanInstructor')}</Link></p>
              <p>{t('About us')}</p>



              <Select
          defaultValue={localActive}
          style={{ width: 120 }}
          // disabled={isPending}
          onChange={handleChange}
          options={[
            { value: "en", label: "English" },
            { value: "gr", label: "greek" },
          ]}
        />
              {/* <Button
                className="text-[#FFFFFF] hover:text-white bg-[#000000] hover:bg-[#000000] border-[1px]  border-[#E4E7EC] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
              >
                English <GlobalOutlined />
              </Button> */}
            </div>
            {/* right side menu items  */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  text-sm gap-x-3 gap-y-8 lg:w-2/3 w-full">
            {/* MENU ITEM ONE  */}
              <div className="space-y-3 text-start">
                <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">
                  {t("Programs")}
                </h3>
                <div className="flex   gap-6">
                  <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t("Art & Design")}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                       {t("Development")}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Communication')}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Videography')}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Photography')}
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t("Marketing")}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Content Writing')}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Finance')}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Science')}
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="#">
                        {t('Newworking')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* MENU ITEM TWO  */}
              <div className="space-y-3 pl-12">
                <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">
                  {t('Help & Support')}
                </h3>
                <ul className="space-y-[12px] text-[#E4E7EC] text-sm">
                  <li>
                    <Link rel="noopener noreferrer" href="#">
                      {t('FAQs')}
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="#">
                      {t('Contact Us')}
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="#">
                      {t('Privacy & Policy')}
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="#">
                     {('Terms & Conditions')}
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="#">
                      {t('Course Enrollment Help')}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* SOCIAL MEDIA MENU ITEM   */}
              <div className="space-y-3">
                <h3 className="  text-[#FFFFFF] font-bold text-[16px] pb-3 font-Merriweather">
                  {t('Social Media')}
                </h3>
                <div>
                  <InstagramOutlined className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
                  <TwitterOutlined className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
                  <YoutubeOutlined className="text-2xl p-2 bg-[#302e2e] rounded-full mr-2 cursor-pointer" />
                </div>
                <div className="text-[#E4E7EC] text-[16px] font-semibold space-y-4 pt-4">
                  <div>
                    <PhoneOutlined className="rotate-90 text-lg text-[#4BCAE9] pr-2" />
                    <span className="text-[#E4E7EC]">{t('+(00)-000-000-0000')}</span>
                  </div>
                  <div className="pl-2">
                    <MailFilled className=" text-lg text-[#4BCAE9] pr-2" />
                    <span className="text-[#E4E7EC]">{t('infoname@mail.com')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* copyright  */}
          <div className="flex justify-center  border-t-2 border-[#475467] py-4">
            <p className="text-sm text-[#E4E7EC]">
              {t('© Pantagonostis 2024 | All rights reserved.')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
