import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials | SRIYOG Consulting",
};
export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      title: "Lorem Ipsum!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Niranjan",
      stack: "Project Manager",
      image: "/assets/images/testimonials/1.png",
    },
    {
      id: 2,
      title: "Lorem Ipsum!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Rahul",
      stack: "Stack Co-ordinator",
      image: "/assets/images/testimonials/2.png",
    },
    {
      id: 3,
      title: "Lorem Ipsum!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Bitisha",
      stack: "React js Developer",
      image: "/assets/images/testimonials/3.png",
    },
  ];
  return (
    <>
      <Ribbon name="Testimonials" des="" />
      <div className=" max-w-[1180px] py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   items-center justify-center gap-y-16 sm:gap-y-8 px-4">
          {testimonialsData.map((data, index) => {
            return (
              <div
                key={index}
                className="border-[#0D5D59] border-t-8 w-full sm:max-w-[335px] mx-auto rounded-xl shadow-xl bg-white"
              >
                <div className="bg-white shadow-xl flex flex-col items-center px-8 gap-3  py-6 rounded-xl">
                  <Image
                    src={data.image}
                    width={150}
                    height={150}
                    alt={data.title}
                    className="w-[40%] h-auto md:w-80%"
                  />

                  <h1 className="text-gray-700 font-semibold text-lg">
                    {data.title}
                  </h1>

                  <p className="text-sm text-center">{data.desc}</p>

                  <div className="text-center ">
                    <h1 className="text-gray-700 font-semibold text-xl">
                      {data.name}
                    </h1>
                    <p className="text-md text-gray-700">{data.stack}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
