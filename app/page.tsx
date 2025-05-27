"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
 const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute bottom-0 right-0 z-10 cursor-pointer" onClick={onClick}>
    <div className="relative h-[50px] w-[50px]">
      <Image
        src="/assets/icons/next-arrow.svg"
        alt="next-arrow"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute bottom-0 right-16 z-10 max-md:left-0 cursor-pointer" onClick={onClick}>
    <div className="relative h-[50px] w-[50px]">
      <Image
        src="/assets/icons/prev-arrow.svg"
        alt="prev-arrow"
        fill
        className="object-contain"
      />
    </div>
  </div>
);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      img: "/assets/images/homepage/service/data-analysis.png",
      name: "Data Processing / Tabulation",
    },
    {
      img: "/assets/images/homepage/service/data-managment.jpg",
      name: "Database Management",
    },
    {
      img: "/assets/images/homepage/service/data-processing.png",
      name: "Data Analysis",
    },
    {
      img: "/assets/images/homepage/service/human-resource.jpg",
      name: "Software Development",
    },
    {
      img: "/assets/images/homepage/service/it-consultancy.png",
      name: "Web Application Development",
    },
    {
      img: "/assets/images/homepage/service/marketing.png",
      name: "Software Development",
    },
    {
      img: "/assets/images/homepage/service/software-development.png",
      name: "Social Media Management",
    },
    {
      img: "/assets/images/homepage/service/uiux-design.png",
      name: "Digital Marketing",
    },
  ];

  const transformations = [
    {
      img: "/assets/images/homepage/transformation/1.jpg",
      name: "Healthcare",
      des: "We deliver secure and innovative IT solutions for the healthcare sector, including digital patient records, telemedicine systems, and compliance-focused data management to enhance patient care and streamline operations.",
    },
    {
      img: "/assets/images/homepage/transformation/2.jpg",
      name: "Employment",
      des: "Our IT solutions support the employment sector through job portals, HR automation, and workforce optimization tools, connecting employers and job seekers efficiently using smart, scalable platforms.",
    },
    {
      img: "/assets/images/homepage/transformation/3.jpg",
      name: "Tourism",
      des: "We empower tourism industry with digital booking platforms, virtual experiences, and CRM tools that improve traveler engagement, operational efficiency, and overall customer satisfaction.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full lg:h-auto h-[300px] sm:h-[400px] relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 z-0"
          style={{ backgroundImage: "url('/assets/images/homepage/hero-banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex justify-between lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto items-center lg:pt-64 lg:pb-28 max-md:items-end max-lg:h-full max-md:pb-4">
          <div className="text-white sm:w-[45%] lg:w-[55%] space-y-4">
            <h1 className="lg:text-5xl text-3xl font-semibold">
              Dedicated IT Consulting
            </h1>
            <p>
              An innovative consulting service driven by streamlined strategies,
              cutting-edge technology solutions, and industry-leading expertise
              across a wide range of sectors.
            </p>
            <Link href="/survey" className="border rounded-lg p-2 hover:bg-white font-semibold hover:border-white hover:text-[#4b4b4b]">
              Free IT Survey
            </Link>
          </div>
          <div className="bg-white hidden sm:block rounded-lg p-6 sm:w-[50%] lg:w-[35%] space-y-3">
            <p className="font-semibold py-2 border-b-2 border-[#4b4b4b] text-[#4b4b4b]">Book a Meeting</p>
            <p>Engaging an IT consultant adds valuable insight and professional guidance to your technological initiatives.</p>
            <p>IT consultants turn complex tech issues into practical solutions. Their expertise helps businesses boost efficiency and stay competitive in a fast-changing digital world.</p>
            <Link href="/" className="border rounded-lg p-2 hover:bg-[#055D59] font-semibold text-[#4b4b4b] hover:text-white">
              Book a Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Book Meeting */}
      <section className="container hidden max-md:block px-3 my-3">
        <div className="bg-white w-full rounded-lg p-6 space-y-3 border border-[#4b4b4b]">
          <p className="font-semibold pb-2 border-b-2 border-[#4b4b4b] text-[#4b4b4b] text-2xl">Book a Meeting</p>
          <p>Engaging an IT consultant adds valuable insight and professional guidance to your technological initiatives.</p>
          <p>IT consultants turn complex tech issues into practical solutions. Their expertise helps businesses boost efficiency and stay competitive in a fast-changing digital world.</p>
          <Link href="/" className="border rounded-lg p-2 hover:bg-[#055D59] font-semibold text-[#4b4b4b] hover:text-white">
            Book a Meeting
          </Link>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">Digital Transformation</p>
        <div className="flex flex-wrap max-md:gap-y-3 justify-between mb-4">
          <p className="md:w-[70%] w-full">
            In today’s fast-evolving digital landscape, every business must adopt scalable and efficient IT solutions to stay competitive...
          </p>
          <Link href="/" className="text-[#4b4b4b] font-semibold rounded-lg hover:bg-[#055D59] border p-2 h-10 hover:text-white">
            See all Solutions
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, idx) => (
            <div key={idx} className="border border-gray-300 hover:shadow-lg rounded-lg">
              <div className="relative h-[250px] w-full">
                <Image src={item.img} alt={item.name} className="object-cover rounded-t-lg" fill />
              </div>
              <p className="p-3 font-semibold text-xl">{item.name}</p>
              <p className="px-3 pb-3 text-gray-500">{item.des}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IT Solutions */}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">IT Solutions</p>
        <p className="md:w-[70%] mb-6">Providing expert guidance on technology strategies, infrastructure optimization...</p>
        <Slider {...settings} className="custom-slider w-full pb-[55px]">
          {services.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="relative h-[180px] w-full">
                <Image src={item.img} alt={item.name} className="object-cover rounded-lg" fill />
              </div>
              <p className="text-center text-lg font-semibold mt-4">{item.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
