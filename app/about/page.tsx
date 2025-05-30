"use client";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";

export default function Aboutpage() {
  const cardData = [
    {
      title: "7 Years of Service",
      image: "/assets/images/about/year.png",
    },
    {
      title: "Dedicated Team",
      image: "/assets/images/about/team.jpg",
    },
    {
      title: "Reliable Service",
      image: "/assets/images/about/service.jpg",
    },
  ];
  return (
    <>
      {/* About section*/}
      <Ribbon name="About" des="" />
      {/* */}

      <div className="lg:max-w-[1180px] mx-auto px-4">
        <div className="  mx-auto flex flex-col items-center justify-center gap-5 my-10 ">
          <Image
            src="/assets/images/about/topImage.jpg"
            alt="About Us"
            width={1180}
            height={500}
            className="w-full h-auto object-cover"
          />
          <p className="text-md w-full">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in
            Kamalpokhari, Kathmandu, Nepal, is a leading provider of digital
            solutions focused on driving digital transformation in the sectors
            of healthcare, employment, and tourism. Our mission is to empower
            organizations in these vital industries with innovative, scalable,
            and technology-driven services that enhance operational efficiency
            and enable long-term growth.
          </p>
        </div>

        {/* cards with no images */}

        <div className="flex flex-col gap-6 md:flex-row  text-center pt-[56px] pb-6 ">
          {cardData.map((item, index) => (
            <div className="border border-gray-200 flex flex-col items-center " key={index}>
              <Image
                src={item.image}
                height={337}
                width={377}
                alt=""
                className="w-full h-auto object-cover"
              />

              <span className="border-t-[1px] border-gray-200 w-[100%] inline-block py-3 ">
               {item.title}
              </span>
            </div>
          ))}
        </div>

        {/*texts below cards */}

        <p className="text-md ">
          At SRIYOG Consulting, we believe that smart technology is key to
          solving sector-specific challenges. Our diverse IT services include
          data processing, software and web application development, digital
          marketing, database management, business process automation, and
          expert IT consultancy—each tailored to the unique needs of
          agriculture, employment platforms, and tourism operations. By
          optimizing digital infrastructure, we help our clients streamline
          their services, engage users effectively, and scale sustainably. We
          specialize in crafting robust and user-friendly web solutions with a
          focus on modern UI/UX design, full-stack development, and
          industry-specific platforms—be it for agritech, job-matching portals,
          or tourism management systems. Our offerings include e-commerce
          platforms, CMS, SaaS-based solutions, and Progressive Web Applications
          (PWA) for mobile-first experiences with offline functionality.
        </p>

        {/*banner */}

        <div className="bg-[#0d5d59ec] mt-[56px] py-8 px-6 md:px-12 mb-[26px]">
          <div className="flex flex-col md:flex-row bg-white py-8 px-6 md:px-12 gap-8 md:gap-16 border rounded-xl items-center md:items-start">
            {/* Text Section */}
            <div className="flex flex-col gap-6 basis-full md:basis-1/2  md:text-left justify-center">
              <h3 className="text-2xl font-semibold text-w">Book a Meeting</h3>
              <p className="text-gray-700">
                Our comprehensive IT services are tailored to the unique demands
                of healthcare, employment platforms, and tourism operations.
              </p>

              <div
                className="flex  gap-4  md:justify-start 
              flex-wrap "
              >
                <Link
                  href="/meeting"
                  className="border-[1px] px-4 py-1 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] rounded-lg bg-[#0D5D59] text-white flex items-center"
                >
                  Book a Meeting
                </Link>
                <Link
                  href="/timeline"
                  className="border px-4 py-2 shadow-md rounded-lg text-sm"
                >
                  View Timeline
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="basis-full md:basis-[40%] flex justify-center md:justify-end">
              <Image
                src="/assets/images/about/aboutdemo.png"
                alt="aboutDemo"
                width={310}
                height={232}
                className="w-[100%] md:w-[80%] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <Services />

        <div className="max-w-[1180px] mx-auto my-0 lg:mx-auto lg:my-0  md:mx-auto md:my-0 py-14 lg:px-12 sm:px-0">
          <div className="flex flex-col-reverse gap-6  lg:flex-row ">
            <div className="basis-[60%] flex flex-col gap-[16px] p-5 lg:basis-full pl-0">
              <span className="inline-block w-[133px] border-top-4 h-1 bg-[#0D5D59] "></span>
              <h2 className="text-[32px] font-bold text-[#0D5D59]">
                Message from The CTO
              </h2>
              <p className="text-[15px]">
                At SRIYOG Consulting, our mission is to harness the power of
                technology to drive impactful change across sectors that are
                fundamental to the growth of our society—healthcare, employment,
                and tourism.{" "}
                  <br />
                  <br />
                As someone who has spent over a decade navigating the
                intersection of innovation and social responsibility, I firmly
                believe in technology’s ability to unlock new opportunities and
                create a more sustainable, efficient, and connected world. My
                journey began in Biratnagar, Nepal, with a vision to use digital
                solutions to address local challenges, improve lives, and
                accelerate economic growth. From those early days with PRACAS
                Infosys to the establishment of SRIYOG Consulting, I’ve been
                driven by the idea that technology can be a force for good.
                <br />
                <br />
                Today, we are empowering industries to transform digitally,
                whether it’s streamlining agricultural processes, creating
                innovative platforms for employment, or enhancing tourism
                experiences. Our tailored solutions help organizations in these
                sectors optimize their operations, expand their reach, and adapt
                to the rapidly changing digital landscape.
                 <br />
                 <br />
                We’re committed to building smarter, more resilient systems that
                not only meet the needs of today but also prepare our clients
                for the challenges of tomorrow. Together, we’re shaping the
                future of agriculture, employment, and tourism through the power
                of technology.
              </p>

              
              <div className="pt-12 flex flex-col gap-1">
                <p className="font-bold">PRACAS Upreti</p>
                <ul className="flex gap-2 items-center">
                  <li>
                    <Link href="https://t.me/SRIYOG">
                      <Image src={'/assets/icons/telegram1.svg'} width={20} height={20} alt='telegram'/>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com/TheSRIYOG">
                      <Image src={'/assets/icons/tweeter.svg'} width={20} height={20} alt='Tweeter'/>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://np.linkedin.com/company/sriyogdotcom">
                      <Image src={'/assets/icons/linkedin.svg'} width={20} height={20} alt='telegram'/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[50%] flex justify-center items-center px-4">
              <Image
                src="/assets/images/about/pracas_large.png"
                alt="about_photo"
                width={500}
                height={500}
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
