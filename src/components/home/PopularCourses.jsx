import React from 'react';
import CourseCard from '../ui/CourseCard';
import imageone from '../../public/images/caourse1.png'
const PopularCourses = () => {

    const course=[
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
            "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png"
          
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
            "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png"
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
            "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png"
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
            "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png"
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
            "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png"
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
            "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png"
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
            "imageLink": "https://i.ibb.co.com/xLN7bSQ/category2.png"
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
            "imageLink": "https://i.ibb.co.com/17pL5Qj/caourse1.png"
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
            "imageLink": "https://i.ibb.co.com/vPfYHr7/category1.png"
        }
    ]

    return (
        <div className='container mx-auto py-24 px-4'>
            <div>
                <h1 className='text-[56px] font-black leading-none sm:text-6xl text-[#101828] font-Merriweather text-center'> Popular Courses </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 px-12'>
                {
                    course.map((item) =><CourseCard key={item.id} courseimage={item?.imageLink}/> )
                }
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;