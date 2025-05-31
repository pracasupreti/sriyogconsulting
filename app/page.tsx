"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedCategories, setSelectedcategories] = useState("");
  const [eventsOpen, setEventsOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState("");
  const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute bottom-[-30px] right-0 z-10 cursor-pointer"
      onClick={onClick}
    >
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
    <div
      className="absolute bottom-[-30px] right-16 z-10 max-md:left-0 cursor-pointer"
      onClick={onClick}
    >
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
        breakpoint: 640,
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
  const latest = [
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "Birat Informatics Registered",
      date: " 28 Feb 2025 ",
      category: "Press releases",
    },
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "Address Updated to Kamalpokhari",
      date: " 27 Feb 2025 ",
      category: "News",
    },
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "MoU with Islington College",
      date: " 28 Feb 2025 ",
      category: "News",
    },
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "Redesigning Lumanti Group Website",
      date: " 27 Feb 2025 ",
      category: "News",
    },
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "Operating from Kamalpokhari, Kathmandu  ",
      date: " 28 Feb 2025 ",
      category: "News",
    },
    {
      img: "/assets/images/homepage/latest/1.jpg",
      title: "Office relocation to Kamalpokhari",
      date: " 03 Feb 2025 ",
      category: "Press releases",
    },
  ];

  return (
    <>
      {/*hero-banner*/}
      <section className="w-full lg:h-auto h-[300px] sm:h-[400px] relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 z-0"
          style={{
            backgroundImage: "url('/assets/images/homepage/hero-banner.jpg')",
          }}
        ></div>
        <div className="relative z-10 flex justify-between lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto items-end lg:pt-64 lg:pb-28 max-md:items-end max-lg:h-full max-md:pb-4">
          <div className="text-white sm:w-[45%] lg:w-[55%] space-y-4">
            <h1 className="lg:text-5xl text-3xl font-semibold">
              Dedicated IT Consulting
            </h1>
            <p>
              An innovative consulting service driven by streamlined strategies,
              cutting-edge technology solutions, and industry-leading expertise
              across a wide range of sectors.
            </p>
            <Link
              href="/survey"
              className="border rounded-lg p-2 hover:bg-white font-semibold hover:border-white hover:text-[#4b4b4b] transition-all duration-300 ease-in-out"
            >
              Free IT Survey
            </Link>
          </div>
          <div className="bg-white hidden sm:block rounded-lg p-6 sm:w-[50%] lg:w-[37%] space-y-3">
            <p className="font-semibold py-2 border-b-2 border-[#dbdbdb] text-[#4b4b4b]">
              Book a Meeting
            </p>
            <p>
              Engaging an IT consultant adds valuable insight and professional
              guidance to your technological initiatives.
            </p>
            <p>
              IT consultants turn complex tech issues into practical solutions.
              Their expertise helps businesses boost efficiency and stay
              competitive in a fast-changing digital world.
            </p>
            <Link
              href="/"
              className="border rounded-lg p-2 hover:bg-[#055D59] font-semibold text-[#4b4b4b] hover:text-white transition-all duration-300 ease-in-out"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </section>

      {/*book-an-appoinment*/}
      <section className="container hidden max-md:block px-3 my-3">
        <div className="bg-white w-full rounded-lg p-6 space-y-3 border border-[#dbdbdb]">
          <p className="font-semibold pb-2 border-b-2 border-[#dbdbdb] text-[#4b4b4b] text-2xl ">
            Book a Meeting
          </p>
          <p>
            Engaging an IT consultant adds valuable insight and professional
            guidance to your technological initiatives.
          </p>
          <p>
            IT consultants turn complex tech issues into practical solutions.
            Their expertise helps businesses boost efficiency and stay
            competitive in a fast-changing digital world.
          </p>
          <Link
            href="/"
            className="border rounded-lg p-2 hover:bg-[#055D59] font-semibold text-[#4b4b4b] hover:text-white transition-all duration-300 ease-in-out"
          >
            Book a Meeting
          </Link>
        </div>
      </section>

      {/*transformations*/}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">
          Digital Transformation
        </p>
        <div className="flex flex-wrap max-md:gap-y-3 justify-between mb-4">
          <p className="md:w-[70%] w-full">
            In today’s fast-evolving digital landscape, every business must
            adopt scalable and efficient IT solutions to stay competitive. We
            are excited to offer you the best IT consulting service for your
            organisation for the betterment of your IT presence to streamline
            operations and support your business growth.
          </p>
          <Link
            href="/"
            className="text-[#4b4b4b] lg:w-[15%] md:w-[25%] text-center w-full font-semibold rounded-lg hover:bg-[#055D59] border p-2 h-10 hover:text-white transition-all duration-300 ease-in-out"
          >
            See all Solutions
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-300 hover:shadow-lg rounded-lg"
            >
              <div className="relative h-[250px] w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="object-cover rounded-t-lg"
                  fill
                />
              </div>
              <p className="p-3 font-semibold text-xl">{item.name}</p>
              <p className="px-3 pb-3 text-gray-500">{item.des}</p>
            </div>
          ))}
        </div>
      </section>

      {/*IT-solutions*/}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">
          IT Solutions
        </p>
        <p className="md:w-[70%] mb-6">
          Providing expert guidance on technology strategies, infrastructure
          optimization, and digital transformation to drive business success.
        </p>
        <Slider {...settings} className="custom-slider w-full pb-[55px]">
          {services.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="relative max-md:h-[250px] h-[180px] w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <p className="text-center text-lg font-semibold mt-4">
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </section>

      {/*Latest-Insights*/}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">
          Latest Insights
        </p>
        <div className="flex  flex-wrap max-md:gap-y-3 justify-between mb-4">
          <p className="md:w-[70%] w-full">
            Access the latest articles, trends, and research to guide your IT
            strategy and keep you updated on what&apos;s new in the world of
            digital transformation and technology.
          </p>
          <div className="relative lg:w-[15%] md:w-[25%] h-10 flex items-center w-full border border-[#dbdbdb] rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                setCategoriesOpen(!categoriesOpen);
              }}
              className="w-full text-left p-2 flex justify-between items-center"
            >
              <span className="text-[#4b4b4b]">
                {selectedCategories || "All Categories"}
              </span>
              <span className="relative h-[20px] w-[20px]">
                <Image
                  src={
                    categoriesOpen
                      ? "/assets/images/header/dropup.svg"
                      : "/assets/images/header/dropdown.svg"
                  }
                  alt="drop-down"
                  fill
                  priority
                  className="object-contain"
                />
              </span>
            </button>
            {categoriesOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                {[
                  "Digitalization",
                  "Growth",
                  "Integrated Logistics",
                  "Resilience",
                  "Sustainability",
                ].map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedcategories(option);
                      setCategoriesOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-full place-content-between gap-4 mb-6">
          <div className=" lg:h-[560px] h-[270px] lg:col-span-2 lg:row-span-2  rounded-lg overflow-hidden">
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/blog-1.avif"
                alt="blog-1"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                <section className="flex gap-4 text-sm mb-1">
                  <p>Web Dev</p>
                  <p>
                    25<sup>th</sup> May, 2025
                  </p>
                </section>
                <p className=" text-2xl translate-y-2 group-hover:translate-y-0  transition-all duration-500 ease-in-out">
                  21 Stages of Web Development
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-28 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Having a website makes a business cross the boundaries and
                    can cater its products, services or brand image globally.
                  </p>
                  <p className=" text-sm">PRACAS Upreti</p>
                  <p className="text-sm">CTO</p>
                </section>
              </div>
            </div>
          </div>
          <div className=" h-[270px] lg:col-span-2 rounded-lg overflow-hidden">
            <div className="relative group  h-full w-full">
              <Image
                src="/assets/images/homepage/blog/blog-3.avif"
                alt="blog-2"
                className="object-fill group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>eMail</p>
                  <p>
                    16<sup>th</sup> May, 2025
                  </p>
                </section>
                <p className=" text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  What is a Corporate/Business Email?
                </p>
                <section className=" text-sm max-h-0 translate-y-3 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Corporate emails or business emails tied to a custom domain
                    play a pivotal role in shaping an organization&apos;s
                    identity and credibility.
                  </p>
                  <p className="text-sm">Lalita Ghimire</p>
                  <p className="text-sm">React JS Developer</p>
                </section>
              </div>
            </div>
          </div>
          <div className=" h-[270px]  rounded-lg overflow-hidden">
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/blog-2.avif"
                alt="blog-3"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>Agritech</p>
                  <p>
                    9<sup>th</sup> May, 2025
                  </p>
                </section>
                <p className=" text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Digital Transformation for Economic Growth
                </p>
                <section className="max-h-0 translate-y-3 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="my-2 text-sm">
                    Agriculture remains the backbone of Nepal’s economy, with
                    the majority of the population relying on farming for their
                    livelihood.
                  </p>
                  <p className="text-sm">Niranjan Sharma</p>
                  <p className="text-sm">Project Manager</p>
                </section>
              </div>
            </div>
          </div>
          <div className=" h-[270px]  rounded-lg overflow-hidden">
            <div className="relative group  h-full w-full">
              <Image
                src="/assets/images/homepage/blog/blog-4.avif"
                alt="blog-4"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                <section className="flex gap-4 mb-1">
                  <p>Security</p>
                  <p>
                    3<sup>rd</sup> May, 2025
                  </p>
                </section>
                <p className=" text-xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  The practice of Data Banking to avoid ransomware
                </p>
                <section className="max-h-0 translate-y-4 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="my-2 text-sm">
                    Learn how IT consulting can enhance your business’s
                    cybersecurity and protect against evolving threats.
                  </p>
                  <p className="text-sm">Madan Tamang</p>
                  <p className="text-sm">Web Developer</p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            href="/"
            className="text-[#4b4b4b] block text-center max-md:w-full md:w-[15%] mx-auto px-6 font-semibold rounded-lg hover:bg-[#055D59] border p-2 h-10 hover:text-white transition-all duration-300 ease-in-out"
          >
            View All
          </Link>
        </div>
      </section>

      {/*latest-updates*/}
      <section className="my-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
        <p className="md:text-4xl text-3xl font-semibold text-[#055D59] mb-4">
          Latest Updates
        </p>
        <div className="flex  flex-wrap max-md:gap-y-3 justify-between mb-4">
          <p className="md:w-[70%] w-full">
            Stay up to date with the latest trends, innovations, and insights in
            the world of IT consulting with SRIYOG Consulting. Through our
            in-person and virtual events, we bring you the latest developments,
            success stories, and emerging technologies that are shaping the
            future of agriculture, employment, tourism, and beyond.
          </p>
          <div className="relative lg:w-[15%] md:w-[25%] h-10 flex items-center w-full border border-[#dbdbdb] rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEventsOpen(!eventsOpen);
              }}
              className="w-full text-left p-2 flex justify-between items-center"
            >
              <span className="text-[#4b4b4b]">
                {selectedEvents || "View All Events"}
              </span>
              <span className="relative h-[20px] w-[20px]">
                <Image
                  src={
                    eventsOpen
                      ? "/assets/icons/dropup.svg"
                      : "/assets/icons/dropdown.svg"
                  }
                  alt="drop-down"
                  fill
                  priority
                  className="object-contain"
                />
              </span>
            </button>
            {eventsOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                {[
                  "TechFriday",
                  "Company Updates",
                  "Product Release",
                  "Timeline",
                  "Miscellanous",
                ].map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedEvents(option);
                      setEventsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <Slider {...settings} className="custom-slider w-full pb-[55px]">
          {latest.map((item, idx) => (
            <section key={idx} className="px-2 ">
              <div className="border border-[#dbdbdb] rounded-lg overflow-hidden">
                <div className="relative max-md:h-[250px] h-[140px] w-full mx-auto ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="px-4">
                  <p className="text-xl text-[#4b4b4b]  font-semibold mb-2 mt-1">
                    {item.title.slice(0, 22)}...
                  </p>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-gray-500 mb-3">{item.date}</p>
                </div>
              </div>
            </section>
          ))}
        </Slider>
      </section>

      {/*Internship-opportunity*/}
      <section className="mt-[75px] mb-[45px] lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto grid grid-cols-1 md:grid-cols-12 place-content-between">
        <div className="relative hidden md:block max-md:h-[50px] h-[80px] lg:w-full">
          <Image
            src="/assets/images/homepage/update-img.svg"
            alt="update-img"
            fill
            priority
            className="object-contain h-full w-full max-md:w-[20%]"
          />
        </div>
        <div className="md:col-span-9">
          <div className="flex w-full items-center gap-2">
            <div className="relative hidden max-md:block h-[50px]  w-[10%] ">
              <Image
                src="/assets/images/homepage/update-img.svg"
                alt="update-img"
                fill
                priority
                className="object-contain h-full w-full max-md:w-[20%]"
              />
            </div>
            <p className="text-xl hidden max-md:block font-semibold  text-[#055d59] mb-2">
              Offering an internship opportunity
            </p>
          </div>
          <p className="text-2xl hidden md:block font-semibold  text-[#055d59] mb-2">
            Offering an internship opportunity
          </p>
          <p className="text-gray-700">
            To accelerate digital transformation, we offer a skilled pool of
            professionals specializing in frontend development, programming, QA,
            and UI/UX design. Whether you need freelance experts, short-term
            support, or a dedicated offshore team, our flexible models are
            designed to meet your project goals efficiently and
            cost-effectively.
          </p>
        </div>
        <Link
          href="/"
          className="text-[#4b4b4b] md:col-span-2 max-md:mt-3 text-center w-full font-semibold rounded-lg hover:bg-[#055D59] border p-2 h-10 hover:text-white transition-all duration-300 ease-in-out"
        >
          Apply Now
        </Link>
      </section>
    </>
  );
}
