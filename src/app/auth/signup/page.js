"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import Image from "next/image";
import signupimage from "../../../public/images/logo.png";
import googleicon from "../../../public/images/google.png";
import SignupCarousel from "@/components/utils/SignupCarosel";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <div className="xl:flex lg:flex  max-h-screen h-screen flex-row items-center justify-between mx-auto  overflow-hidden">
        {/* Left Section */}
        <div className="w-6/12 h-full xl:pb-0 md:pb-0 pb-12 flex flex-col justify-center">
          <div className="flex justify-start items-center mb-4">
            <Image src={signupimage} alt="Logo" />
          </div>
          <div className="max-w-md mx-auto">
            <div className="text-start my-8">
              <h1 className="text-3xl font-bold mb-4">Sign up</h1>
              <h3 className="text-[#475467] text-[16px]">Please enter your details.</h3>
            </div>
            <Form
              name="signin"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <Form.Item
                label={
                  <label className="text-sm text-[#344054] font-medium">Name*</label>
                }
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                required={false}
              >
                <Input
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your Name"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label className="text-sm text-[#344054] font-medium">Email*</label>
                }
                name="email"
                rules={[{ required: true, message: "Please input your email!", type: "email" }]}
                required={false}
              >
                <Input
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label className="text-sm text-[#344054] font-medium">Password*</label>
                }
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 8, message: "Password must be at least 8 characters long." },
                ]}
                required={false}
                extra={<p className="text-[16px] font-normal text-[#475467] pt-2">Must be at least 8 characters.</p>}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item>
                <Button className="text-[#FFFFFF] text-[16px] font-semibold p-6" size="large" type="primary" htmlType="submit" block>
                  Create account
                </Button>
              </Form.Item>

              <Form.Item>
                <Button block className="btn-google text-[#344054] text-[16px] font-semibold p-6 hover:bg-[#344054] hover:text-[#FFFFFF]" style={{ marginBottom: "10px" }}>
                  <Image src={googleicon} width={24} height={24} alt="Google Icon" />
                  Sign up with Google
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center lg:mt-4">
              Already have an account?{" "}
              <Link href="/auth/login">
                <span className="text-[#195671] font-semibold hover:underline">Log in</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" h-screen overflow-hidden w-6/12">
          <SignupCarousel />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
