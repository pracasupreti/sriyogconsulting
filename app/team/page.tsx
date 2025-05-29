"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Card } from "antd";
import Ribbon from "@/components/Ribbon";
const images = [
  "/assets/images/team/1.png",
  "/assets/images/team/2.png",
  "/assets/images/team/3.png",
  "/assets/images/team/4.png",
  "/assets/images/team/5.png",
  "/assets/images/team/6.png",
  "/assets/images/team/7.png",
  "/assets/images/team/8.png",
  "/assets/images/team/9.png",
  "/assets/images/team/10.png",
  "/assets/images/team/11.png",
  "/assets/images/team/12.png",
];

const names = [
  "Niranjan",
  "Sakchyam",
  "Aashma",
  "Bitisha",
  "Lasta",
  "Madan",
  "Milan",
  "Sarad",
  "Prakrit",
  "Priyanka",
  "Sagar",
  "Rahul",
];
const roles = [
  "Project Manager",
  "Flutter Developer",
  "Backend Developer",
  "React Js Developer",
  "React JS Developer",
  "React Js Developer",
  "UI/UX Designer",
  "React Native Developer",
  "UI/UX Designer",
  "React JS Developer",
  "Next JS Developer",
  "React JS Developer",
];

const pracasImage = "/assets/images/team/pracas.png";
export default function Example() {
  return (
    <>
      <Ribbon name="Team" des="" />

      <section className="pb-[90px] lg:pt-[60px] md:pt-[52px]">
        {/*About Pracas */}
        <div className="max-w-[1180px] flex justify-center items-center  mx-auto px-6  ">
          <Card className=" !bg-gray-100 text-black w-full border border-gray-300 md:p-0">
            <div className="flex gap-8 flex-col sm:flex-row w-full h-full ">
              {/*Pracas Image */}
              <div className=" h-[390px] flex flex-col items-center justify-center pl-6 md:p-0 basis-full w-full sm:basis-[30%] py-6 ">
                <Image
                  src={pracasImage}
                  alt="Pracas Upreti"
                  width={200}
                  height={200}
                  className="w-[67%] mx-auto "
                />
                <br />
                <h2 className="font-bold text-2xl text-center">PRACAS</h2>

                <p className="text-2xl text-center font-semibold">C.T.O</p>
              </div>

              {/* About pracas */}

              <div className="lex-1 flex flex-col justify-start  text-center sm:text-start basis-[70%]">
                <h1 className="text-3xl font-roboto font-semibold">
                  About PRACAS
                </h1>
                <br />
                <p className=" text-gray-900 font-roboto ">
                  Pracas Upreti's journey from a startup founder to a
                  technology-driven change-maker in Biratnagar, Nepal,
                  exemplifies the profound impact that individuals can have when
                  they combine innovation with a commitment to social
                  responsibility.
                  <br />
                  <br />
                  Through his endeavors, Upreti has not only transformed his
                  community but has also set a precedent for how technology can
                  be harnessed to drive positive change and create a better
                  future for all.
                  <br />
                  <br />
                  Upreti's journey into the realm of technology began over a
                  decade ago when he founded his first IT startup in 2007 A.D.
                  as PRACAS Infosys in Biratnagar. Recognizing the potential of
                  technology to bridge gaps and catalyze progress, he embarked
                  on a mission to leverage digital solutions to address local
                  challenges and foster economic development. His vision was not
                  merely to create successful businesses but to effect
                  meaningful change in his community.
                </p>
                {/*Soical Media icons */}
                <br />
                <div className="flex text-center sm:text-start flex-col gap-3">
                  <p>Follow Pracas on social media</p>

                  <div className="flex gap-3 items-center">
                    <Link href="https://t.me/SRIYOG">
                      <Image
                        src={"/assets/icons/telegram1.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link>

                    <Link href='https://x.com/TheSRIYOG'>
                      <Image
                        src={"/assets/icons/tweeter.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link>

                    <Link href='https://np.linkedin.com/company/sriyogdotcom'>
                      <Image
                        src={"/assets/icons/linkedin.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-[1180px] mx-auto py-14 px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {images.map((img, index) => (
              <Card
                key={index}
                className="!bg-gray-100 text-black border border-gray-300 p-6 flex flex-col items-center min-h-[320px] "
              >
                <Image
                  src={img}
                  alt={`Team Member ${index + 1}`}
                  width={180}
                  height={180}
                  className="rounded-full object-cover w-[180px] h-[180px]"
                />
                <div className="mt-4 text-lg font-semibold text-center font-roboto">
                  {names[index]}
                </div>
                <p className="text-sm text-center text-gray-600 font-roboto">
                  {roles[index]}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
