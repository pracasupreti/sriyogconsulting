"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import { FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Card } from "antd"
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
]

const names =[
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
]
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

const pracasImage = '/assets/images/team/pracas.png'
export default function Example(){
  return(
    <>
    <Breadcrumb name="Team" desc=''/>

      <section className="">
        {/*About Pracas */}
        <div className="max-w-[1180px] flex justify-center items-center  mx-auto px-6  ">

          <Card className="bg-custom-gray text-black w-full border border-gray-300 md:p-0">
            <div className="flex flex-col md:flex-row items-center">

            </div>
          </Card>
        </div>

      </section>
    </>
  )
}