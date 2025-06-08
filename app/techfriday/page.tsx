"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TechFriday() {
  const sponsors = [
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
    "/assets/images/about/noimage.png",
  ];

  const underHowItWorks = [
    {
      title: "Example One",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim! Ut fuga reprehenderit veritatis id.",
      image: "/assets/images/tech-friday/car.svg",
    },
    {
      title: "Example Two",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim! Ut fuga reprehenderit veritatis id.",
      image: "/assets/images/tech-friday/car.svg",
    },
    {
      title: "Example Three",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim! Ut fuga reprehenderit veritatis id.",
      image: "/assets/images/tech-friday/car.svg",
    },
  ];

  const accordion = [
    {
      id: 1,
      title: "Can I just sell my car to carama?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ullam...",
    },
    {
      id: 2,
      title: "Do I need documents to trade in?",
      desc: "You'll need basic documents like registration, ID, etc.",
    },
    {
      id: 3,
      title: "What types of cars can I sell?",
      desc: "We accept all kinds—new, used, even damaged ones.",
    },
    {
      id: 4,
      title: "Is inspection required before selling?",
      desc: "Yes, inspection ensures fair pricing and transparency.",
    },

    {
      id: 5,
      title: "Is inspection required before selling?",
      desc: "Yes, inspection ensures fair pricing and transparency.",
    },
    {
      id: 6,
      title: "Is inspection required before selling?",
      desc: "Yes, inspection ensures fair pricing and transparency.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full lg:h-auto h-[300px] sm:h-[400px] relative mb-[45px] -mt-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/assets/images/tech-friday/hero.jpeg')",
          }}
        ></div>
        <div className="relative z-10 h-screen flex justify-between  max-lg:container  mx-auto items-end lg:pt-64 lg:pb-28 max-md:items-end max-lg:h-full max-lg:pb-4">
          <div className=" bg-[#055d59]/50 px-5 py-6 text-white flex flex-col items-center gap-2   w-[50%]">
            <h1 className="italic font-bold text-3xl md:text-4xl lg:text-6xl ">#TechFriday</h1>
            <p className="text-sm md:text-lg">Learn,Lead & Leverage - Every Friday @ 9 PM (NPT)</p>
          </div>
          <div>
            <Link
              href={""}
              className="bg-[#055d59] text-white font-[700] mr-10 px-4 py-2"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="max-w-[1180px] mx-auto  mb-16">
        <h2 className="text-center text-[#055d59] font-bold text-2xl mb-6">
          Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {sponsors.map((item, index) => (
            <Image
              key={index}
              src={item}
              width={120}
              height={100}
              alt={`Sponsor`}
              className="rounded-full border-2 border-gray-400 object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
            />
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0 ">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#055D59]">
          How it works?
        </h2>

        <div className="flex flex-col md:flex-row  gap-10 items-stretch">
          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center border">
            <Image
              src="/assets/images/about/noimage.png"
              width={500}
              height={500}
              alt="How it works"
              className="max-w-[350px] w-full object-contain"
            />
          </div>

          <div className="w-full lg:w-3/5 flex flex-col gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  {i + 1}
                </div>
                {i !== 3 && (
                  <div className="absolute left-[19px] top-12 h-[80px] w-[2px] bg-[#d1d5db]" />
                )}

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Step {i + 1} Title
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae pariatur iste necessitatibus delectus dolorem a
                    itaque quaerat recusandae modi quia numquam impedit,
                    asperiores facere voluptates.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Under How It Works Cards */}
      <section className="max-w-[1180px] mx-auto  mb-16 px-6 lg:px-0">
        <div className="flex flex-wrap justify-center gap-6">
          {underHowItWorks.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] bg-white shadow-lg rounded-lg px-10 py-10 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="object-cover border rounded-md"
                />
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>
              <p className="text-gray-700 text-sm">{item.desc}</p>
              <Image
                src="/assets/images/tech-friday/arrow.svg"
                width={24}
                height={24}
                alt="Arrow"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-[900px] mx-auto mb-20 px-6 lg:px-0">
        <h2 className="text-center font-bold text-2xl mb-8">
          Popular Trade-in Questions
        </h2>
        <div className="space-y-4">
          {accordion.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setActiveAccordion((prev) =>
                  prev === item.id ? null : item.id
                )
              }
              className="cursor-pointer border-b border-gray-200 p-4 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {item.title}

                <Image
                  src={"/assets/images/tech-friday/up-arrow.svg"}
                  width={15}
                  height={15}
                  alt="dropdown"
                  className={`${activeAccordion === item.id?'' : 'rotate-180'}  `}
                />
              </h3>
              {activeAccordion === item.id && (
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/*Banner */}

      <section className="max-w-full  mb-16 bg-gray-100 py-8 px-6 lg:px-0">
        {/*Image Container */}
        <div className="max-w-[1180px] mx-auto   flex flex-col sm:flex-row items-stretch gap-8 bg-gray-100 ">
          

           <div className="sm:max-w-[40%] h-full w-full border ">
          <Image
            src="/assets/images/vmgo/1.jpg"
            width={500}
            height={600}
            alt="banner_Image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Description*/}

        <div className="flex flex-col gap-3 px-2 lg:pr-[150px] w-full sm:max-w-[60%] mb-0 md:mb-16  ">
          <div className="flex items-center justify-start gap-2 text-gray-800">
            <Image
              src="/assets/images/about/noimage.png"
              width={50}
              height={50}
              alt="title_image"
            />
            <p className="text-gray-800 font-semibold">Introducing our ideas</p>
          </div>
          <h1 className="text-4xl text-gray-800 font-[900]">
            Illuminate Your Evening Exquisite Night
          </h1>
          <p className="font-semibold text-gray-800 text-xl">
            Embrace Peaceful Nights And Add A Touch Or Elegence To Your Home
            With Our Night Lamp
          </p>
          <p className="text-sm text-gray-800 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            pariatur iste necessitatibus delectus dolorem a itaque quaerat
            recusandae modi quia numquam impedit, asperiores facere voluptates.
            Fugit at sapiente odit consequatur blanditiis quam sint.
          </p>
        </div>


        </div>
       
      </section>

      {/*Custom ribbon*/}
      <section className="mb-[45px] bg-[#055d59] h-auto w-full flex justify-center items-center py-6 px-6">
        <section className="w-[1180px] gap-5 flex flex-col  md:flex-row  justify-between  max-lg:container max-lg:px-3 mx-auto  lg:px-0">
          <div className=" w-full md:max-w-[60%]">
            <h1 className="text-[2.1rem] font-semibold !text-white">
              Showcase Your It Product
            </h1>
            <h4 className="text-[17px] text-[rgb(250,225,215)] max-md:text-[14px] text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, vel veritatis ratione soluta harum quibusdam pariatur
              labore veniam quo consectetur.
            </h4>
          </div>

          <div className="mt-4 md:mt-0 md:self-center">
            <Link
              href={""}
              className="bg-gray-100 px-3 py-1 mr-10 italic font-bold m"
            >
              Sponser #TechFriday
            </Link>
          </div>
        </section>
      </section>

      {/* Promotion */}

      <section className="max-w-[1180px] mx-auto flex flex-col sm:flex-row gap-6 items-stretch px-6 lg:px-0 mb-[45px]">
        {/*Left  */}
        <div className=" w-full sm:w-[60%] border px-14 py-5 flex flex-col gap-3 relative rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-4"
            style={{
              backgroundImage: "url('/assets/images/tech-friday)",
            }}
          ></div>
          <h1 className="text-3xl font-extrabold ">
            Ready for a new ride?Explore <br /> the latest vehicles
          </h1>
          <ul>
            <li className="flex items-center gap-3 text-sm">
              {" "}
              <Image
                src="/assets/images/tech-friday/correct.svg"
                width={15}
                height={15}
                alt="Correct"
              />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-center gap-3 text-sm">
              {" "}
              <Image
                src="/assets/images/tech-friday/correct.svg"
                width={15}
                height={15}
                alt="Correct"
              />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-center gap-3 text-sm">
              {" "}
              <Image
                src="/assets/images/tech-friday/correct.svg"
                width={15}
                height={15}
                alt="Correct"
              />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 ">
            <Link
              href={""}
              className="px-4 py-2 bg-[#055d59] rounded-full text-white border-none text-center"
            >
              Lorem ipsum dolor sit.
            </Link>
            <Link
              href={""}
              className="px-4 py-2 bg-transparent rounded-full text-[#055d59] border-1 hover:bg-[#055d59] hover:text-white   border-[#055d59] text-center"
            >
              Lorem ipsum dolor sit.
            </Link>
          </div>
        </div>
        {/*Right */}
        <div className="w-full sm:w-[40%] border flex flex-col gap-3 py-3 px-14 rounded-xl relative">
          <div
            className="inset-0 -z-4 bg-center bg-no-repeat bg-cover absolute"
            style={{
              backgroundImage: "url('/assets/images/tech-friday/')",
            }}
          ></div>
          <p>Lorem ipsum dolor sit.</p>
          <h1 className="text-3xl font-extrabold ">Alfa Romero</h1>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Lorem ipsum dolor sit.
            <br />
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Lorem ipsum dolor sit amet.
          </p>

          <Link
            href={""}
            className="px-4 py-2 bg-transparent rounded-full text-[#055d59] border-1 hover:bg-[#055d59] hover:text-white   border-[#055d59] mt-4  w-full sm:max-w-[50%] text-center"
          >
            Lorem ipsum
          </Link>
        </div>
      </section>

      {/*Subsrcibe and Follow Section */}
      <section className="max-w-full mx-auto bg-blue-100/50 border-b border-gray-300 md:px-6  ">

        {/*Subsrcibe Section */}
        <div className="px-4 py-4 flex flex-col sm:flex-row justify-between gap-4 w-full max-w-[90%] mx-auto">
          
          <div className="flex-1">
            <h1 className="text-[#055d59] text-2xl sm:text-3xl font-extrabold italic mb-1">
              Subscribe #TechFriday
            </h1>
            <p className="mb-3 text-gray-800 text-md">
              Get the latest tech updates and exclusive tips delivered to your
              inbox.
            </p>

            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full max-w-lg">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="text-base px-4 py-2 w-full flex-1 bg-white border border-gray-300 rounded-md outline-none f"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white text-base px-5 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right: Back Link */}
          <div className="flex justify-center sm:justify-end items-center">
            <Link
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#055d59] text-[#055d59] hover:bg-[#055d59] hover:text-white transition-all duration-200"
            >
              Back to You
              <Image
                src="/assets/images/tech-friday/up-arrow.svg"
                width={20}
                height={20}
                alt="up-arrow"
              />
            </Link>
          </div>
        </div>
      </section>

      <footer className="max-w-full mx-auto bg-blue-100/50 px-6 py-6 pb-14 md:px-28">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    {/* Follow Us Section */}
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg">Follow us</h3>
      <div className="flex gap-4 items-center">
        <Link href="https://t.me/pracasupreti" target="_blank">
          <Image
            src="/assets/icons/telegram1.svg"
            width={30}
            height={30}
            alt="Telegram"
          />
        </Link>
        <Link href="https://x.com/pracas" target="_blank">
          <Image
            src="/assets/icons/tweeter.svg"
            width={30}
            height={30}
            alt="Twitter"
          />
        </Link>
        <Link href="https://linkedin.com/in/pracasupreti" target="_blank">
          <Image
            src="/assets/icons/linkedin.svg"
            width={30}
            height={30}
            alt="LinkedIn"
          />
        </Link>
      </div>
    </div>

    {/* App Download Section */}
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-lg">Download the SRIYOG app</p>
      <div className="flex flex-wrap justify-start md:justify-center gap-3">
        <Link href="https://bit.ly/sriyog" target="_blank">
          <div className="relative h-[50px] w-[130px] md:w-[100px]">
            <Image
              src="/assets/images/footer/google-play.svg"
              fill
              className="object-contain"
              alt="Google Play"
            />
          </div>
        </Link>
        <Link href="https://bit.ly/sriyogios" target="_blank">
          <div className="relative h-[50px] w-[130px] md:w-[100px]">
            <Image
              src="/assets/images/footer/app-store.svg"
              fill
              className="object-contain"
              alt="App Store"
            />
          </div>
        </Link>
      </div>
    </div>
  </div>

  {/* Footer Links & Description */}
  <div className="mt-6 flex flex-col gap-3 text-sm text-gray-800">
    <div className="flex flex-wrap gap-8">
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/about" className="hover:underline">About us</Link>
      <Link href="/team" className="hover:underline">Team</Link>
      <Link href="/clients" className="hover:underline">Clients</Link>
      <Link href="/career" className="hover:underline">Careers</Link>
      <Link href="/internship" className="hover:underline">Internship</Link>
      <Link href="/vmgo" className="hover:underline">Vision and Mission</Link>
      <Link href="/testimonials" className="hover:underline">Testimonials</Link>
      <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptates tempore vel? Vero recusandae nemo eaque facilis ullam odio quo
      hic cum laboriosam consectetur!
    </p>
  </div>
</footer>

    </>
  );
}
