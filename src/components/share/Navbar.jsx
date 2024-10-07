"use client";
import {  useState } from "react";
import { Input, Button, Dropdown, Menu, Drawer } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  DownOutlined
} from "@ant-design/icons";
import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);



  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };



  const t = useTranslations();
 

  // useEffect(() => {
  //   const savedLang = cookieMiya.get("NEXT_LOCALE") || "en";
  //   setLanguage(savedLang);
  // }, []); 


  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">{t('Category')} 1</Menu.Item>
      <Menu.Item key="2">{t('Category')} 2</Menu.Item>
      <Menu.Item key="3">{t('Category')} 3</Menu.Item>
    </Menu>
  );
  return (
    <nav className="w-full p-4 bg-white  mx-auto flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Middle: Search bar with category button (Hidden on small screens) */}
      <div className="hidden w-full max-w-lg lg:flex items-center space-x-2 px-2">
        <Input
          placeholder="Search for course"
          className="w-full text-[#667085] text-[16px]"
          prefix={<SearchOutlined size={15} className="text-[#667085]" />} // Single element for the left icon
          suffix={
            // Wrap inside a div
            <div>
              <div className="border-l-2 text-sm text-[#1D2939] font-normal border-[#D0D5DD]">
                <Dropdown
                  className="border-none"
                  overlay={categoryMenu}
                  trigger={["hover"]}
                >
                  <Button className="">{t('Category')}  <DownOutlined className="" /> </Button>
                </Dropdown>
              </div>
            </div>
          }
        />
      </div>

      {/* Right Side: Links (Hidden on small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
      <Link href="/becomeInstructor" className="text-sm pl-2">
            {t('BecomeInstructor')}
          </Link>
        <Link className="cursor-pointer" href={"/shoppingcart"}><ShoppingCartOutlined className="text-2xl" /></Link>
        <Link
          href={"/auth/login"}
          className="text-[16px] font-semibold text-[#475467]"
        >
          {t('LogIn')}
        </Link>
        <Link href={"/auth/signup"}>
          <Button
            className="text-[#FFFFFF] font-semibold text-[16px] p-5"
            type="primary"
          >
            {t('Sign Up')}
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="lg:hidden">
        <MenuOutlined className="text-2xl" onClick={showDrawer} />
      </div>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Input.Search placeholder="Search course" className="mb-4" />
        <Dropdown overlay={categoryMenu} trigger={["click"]}>
          <Button className="mb-4">{t('Category')}</Button>
        </Dropdown>
        <div className="flex flex-col space-y-4">
          <Link href="/becomeInstructor" className="text-sm">
            Become Instructor
          </Link>
          <Link className="cursor-pointer" href={"/shoppingcart"}><ShoppingCartOutlined className="text-2xl" /></Link>
          <Link
          href={"/auth/login"}
          className="text-[16px] font-semibold text-[#475467]"
        >
          Log in
        </Link>
        <Link href={"/auth/signup"}>
          <Button
            className="text-[#FFFFFF] font-semibold text-[16px] p-5"
            type="primary"
          >
            Sign up
          </Button>
        </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
