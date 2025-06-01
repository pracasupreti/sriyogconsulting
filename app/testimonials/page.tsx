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
      title: "React JS Developer",
      desc: "Even though my internship was remote, it was very effective as I received continuous guidance and support throughout the period. Working in a collaborative environment with regular feedback boosted my confidence and problem-solving abilities. I also got a clearer view of how companies work in the tech field, which has motivated me to further pursue a career in web development.",
      name: "Salina Bastola",
      stack: "Himalayan Darshan College",
      image: "/assets/images/testimonials/1.png",
      addr:"Biratnagar"
    },
    {
      id: 2,
      title: "React Native Developer",
      desc: "Beyond programming, this internship strengthened my problem-solving, communication, and teamwork abilities. It was a great introduction to working in a production-level setting with a focus on clean, maintainable code. I’m thankful to the SRIYOG team for their mentorship, which helped boost my confidence as a budding developer.",
      name: "Sharad Kunwar",
      stack: "Saraswati Multiple Campus ",
      image: "/assets/images/testimonials/2.png",
      addr:"Kathmandu"
    },
    {
      id: 3,
      title: "React Js Developer",
      desc: "My 3-month internship as a React JS Developer at SRIYOG Consulting Pvt. Ltd. provided me the opportunity to work on real-time web projects. I developed reusable components, implemented state management, and contributed to building scalable user interfaces. This helped me understand best practices in component-based architecture.",
      name: "Bitisha Thapa",
      stack: "Saraswati Multiple Campus",
      image: "/assets/images/testimonials/3.png",
       addr:"Kathmandu"
    },
  ];
  return (
    <>
      <Ribbon name="Testimonials" des="" />
      <section className=" max-w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx + 1}
            className="basis-[31%] text-center lg:basis-[45%] md:basis-full shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] transform transition-transform duration-200 ease-in-out border-t-8 border-[#0D5D59] rounded-xl"
          >
            <div className="flex items-center flex-col gap-6 px-6 py-8">
              <div className=" relative h-44 w-full">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="inline-block pb-3 ">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="flex gap-1 flex-col">
                <h4 className="font-bold">{item.name}</h4>
                <p>{item.stack}</p>
                <p>{item.addr}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
