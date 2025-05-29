import Ribbon from "@/components/Ribbon";
import consulting from "@/public/data/consulting";
import Image from "next/image";

export default function Consulting() {
  return (
    <div className="bg-[#efefef]">
      <Ribbon name="Consulting" des="" />

      <div className="mx-auto max-w-[1180px] lg:px-10 lg:py-14 md:px-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8  justify-center pb-16">
          {consulting.map((data, index) => (
            <div
              key={index}
              className="flex flex-col h-[390px]  w-full sm:max-w-[300px] bg-white px-6 py-6 items-center shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] transition-transform duration-200 ease-in-out hover:-translate-y-2 hover:shadow-lg mx-auto"
            >
              <div className="flex flex-col items-center gap-6 p-2 pb-4">
                <div className="w-24 pt-4 text-center">
                  <Image
                    src={data.img}
                    width={96}
                    height={96}
                    alt={data.title}
                    className="mx-auto object-contain"
                  />
                </div>
                <h5 className="text-center text-[20px] font-semibold">
                  {data.title}
                </h5>
                <p className="text-[16px] text-justify text-gray-600 px-2">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
