import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ClockCircleOutlined,UsergroupDeleteOutlined,ArrowUpOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const CourseCard = ({courseimage}) => {


  
    
  return (
    <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Image
        className="w-full h-64 object-cover"
        src={courseimage}
        alt="Course"
        height={500}
        width={500}
      />
      <div className="p-4">
     <div className='flex justify-between items-center pt-5'>
     <p className="text-sm text-[#475467] mb-2">by <Link href={'#'} className=" text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939]">John Michael</Link></p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-sm"><Rate allowHalf count={1} defaultValue={0.5}/> <span className='text-[#475467] font-bold text-sm'>4.7</span></span>
          <span className="text-[#475467] font-normal text-sm ml-2">(3,242)</span>
        </div>
     </div>
        <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">Product Management Basic - Course</h5>
        <div className="flex items-center justify-between text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
          <span className="mr-4 flex items-center font-normal">
          <ClockCircleOutlined className='text-lg pr-2' />
            40 Hours
          </span>
          <span className="flex items-center font-normal">
          <UsergroupDeleteOutlined className='text-lg pr-2' />
            176 Students
          </span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-semibold text-[#000000]">€ 29.00</span>
          <a
            href="#"
            className="inline-flex items-center text-[#14698A] border-b-2 border-[#14698A] text-[16px] font-semibold "
          >
            ENROLL NOW
            <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
