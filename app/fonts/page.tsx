import React from "react";
import Image from "next/image";

const Fonts = () => {
  const card = [
    {
      name: "JDR Amrit",
      image: "/assets/images/fonts/jdr-amrit.JPG",
      link: "/assets/download-fonts/JDR-AMRIT.ttf",
    },
    {
      name: "JDR Amrit 2",
      image: "/assets/images/fonts/jdr-amrit-2.jpg",
      link: "/assets/download-fonts/JDR-Amrit2.ttf",
    },
    {
      name: "JDR Amrit 4",
      image: "/assets/images/fonts/jdr-amrit-4.jpg",
      link: "/assets/download-fonts/JDR-Amrit4.ttf",
    },
    {
      name: "JDR Bagmati",
      image: "/assets/images/fonts/jdr-bagmati.jpg",
      link: "/assets/download-fonts/JDR-Bagmati.ttf",
    },
    {
      name: "JDR Bindukshar 1",
      image: "/assets/images/fonts/jdr-binduakshar.jpg",
      link: "/assets/download-fonts/JDR-Bindukshar-1.ttf",
    },
    {
      name: "JDR Birendra",
      image: "/assets/images/fonts/jdr-birendra.jpg",
      link: "/assets/download-fonts/JDR-Birendra.ttf",
    },
    {
      name: "JDR Dharahara",
      image: "/assets/images/fonts/jdr-dharahara.jpg",
      link: "/assets/download-fonts/JDR-Dharahara.ttf",
    },
    {
      name: "JDR Harka Bunma",
      image: "/assets/images/fonts/jdr-harka-bunma.JPG",
      link: "/assets/download-fonts/JDR-Harka-Bunma.ttf",
    },
    {
      name: "JDR Janakpur",
      image: "/assets/images/fonts/jdr-janakpur.jpg",
      link: "/assets/download-fonts/JDR-Janakpur.ttf",
    },
    {
      name: "JDR Koshi",
      image: "/assets/images/fonts/jdr-koshi.jpg",
      link: "/assets/download-fonts/JDR-Koshi.ttf",
    },
    {
      name: "JDR Lumbini",
      image: "/assets/images/fonts/jdr-lumbini.jpg",
      link: "/assets/download-fonts/JDR-Lumbini.ttf",
    },
    {
      name: "JDR Mahalaxmi",
      image: "/assets/images/fonts/jdr-mahalaxmi.jpg",
      link: "/assets/download-fonts/JDR-Mahalaxmi.ttf",
    },
    {
      name: "JDR Mechi",
      image: "/assets/images/fonts/jdr-mechi.jpg",
      link: "/assets/download-fonts/JDR-Mechi.ttf",
    },
    {
      name: "JDR Pracas",
      image: "/assets/images/fonts/jdr-pracas.jpg",
      link: "/assets/download-fonts/JDR-Pracas.ttf",
    },
    {
      name: "JDR Province 1",
      image: "/assets/images/fonts/jdr-province-1.jpg",
      link: "/assets/download-fonts/JDR-Province-1.ttf",
    },
    {
      name: "JDR Province 2",
      image: "/assets/images/fonts/jdr-province-2.jpg",
      link: "/assets/download-fonts/JDR-Province-2.ttf",
    },
    {
      name: "JDR Province 3",
      image: "/assets/images/fonts/jdr-province-3.jpg",
      link: "/assets/download-fonts/JDR-Province-3.ttf",
    },
    {
      name: "JDR Province 4",
      image: "/assets/images/fonts/jdr-province-4.jpg",
      link: "/assets/download-fonts/JDR-Province-4.ttf",
    },
    {
      name: "JDR Province 5",
      image: "/assets/images/fonts/jdr-province-5.jpg",
      link: "/assets/download-fonts/JDR-Province-5.ttf",
    },
    {
      name: "JDR Province 6",
      image: "/assets/images/fonts/jdr-province-6.jpg",
      link: "/assets/download-fonts/JDR-Province-6.ttf",
    },
    {
      name: "JDR Province 7",
      image: "/assets/images/fonts/jdr-province-7.jpg",
      link: "/assets/download-fonts/JDR-Province-7.ttf",
    },
    {
      name: "JDR Purwanchal",
      image: "/assets/images/fonts/jdr-purwanchal.JPG",
      link: "/assets/download-fonts/JDR-Purwanchal.ttf",
    },
    {
      name: "JDR Puspakshar",
      image: "/assets/images/fonts/jdr-puspakshar.JPG",
      link: "/assets/download-fonts/JDR-Puspakshar-1.ttf",
    },
    {
      name: "JDR Sagarmatha",
      image: "/assets/images/fonts/jdr-sagarmatha.JPG",
      link: "/assets/download-fonts/JDR-Sagarmatha.ttf",
    },
    {
      name: "Pracas",
      image: "/assets/images/fonts/pracas.JPG",
      link: "/assets/download-fonts/Pracas.ttf",
    },
    {
      name: "Download All Fonts",
      image: "/assets/images/fonts/24.png",
      link: "/assets/download-fonts/jdr-fonts.zip",
    },
  ];
  return (
    <>
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto grid grid-cols-1  gap-8 mb-[56px]">
        {card.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#fff] hover:-translate-y-4 transition duration-500 ease-in-out py-[40px] text-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md"
          >
            <div className="relative mb-4 h-[170px] w-full">
              <Image
                src={item.image}
                alt={item.name}
                className="object-contain"
                fill
              />
            </div>
            <p className="mb-[25px] font-semibold text-[#333] text-[1.4rem]">
              {item.name}
            </p>
            <a
              href={item.link}
              className="bg-[#4b4b4b] text-white px-5 py-3 rounded-md font-bold hover:bg-[#5a5a5a]"
            >
              Download Font
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Fonts;
