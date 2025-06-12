"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Ribbon from "@/components/Ribbon";
export default function PatnerShip() {
  const [phoneOrganization, setPhoneOrganization] = useState<string>("");
  const [personalPhone,setPersonPhone] = useState<string>("");
  return (
    <>
      <Ribbon name="Become a Partner" des=""/>
      <section className=" p-4 max-w-[1180px] mx-auto">
        <form action="">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch align-center justify-center ">
          {/*Left Coloum */}
          <div className="flex-1">
            <h1 className="font-[800] text-2xl mb-4">Organization Information</h1>
            
              <div>
                <label htmlFor="">Name of Organization</label>
                <input
                  type="text"
                  placeholder="Enter your organization name"
                  className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
                />
              </div>
               <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  country={"np"}
                  value={phoneOrganization}
                  onChange={(phone: string) => setPhoneOrganization(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "48px",
                    fontSize: "16px",
                  }}
                  placeholder="+977 98XXXXXXXX"
                  enableSearch
                  disableDropdown={false}
                  countryCodeEditable={false}
                />
              </div>

              <div className=" mt-4">
                <label htmlFor="">URL</label>
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
                />
              </div>

              <div>
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder="Enter your city "
                  className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4"
                />
              </div>

              <div>
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  placeholder="Enter your country "
                  className="w-full mt-1 outline-none v p-2 border border-gray-300 rounded mb-4"
                />
              </div>

              <div className="">
                <label htmlFor="">Type of Organaization</label>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4"
                >
                  <option value="">Type of Organization</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="">
                <label htmlFor="">
                  How did you know about partnership opportunities?
                </label>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4"
                >
                  <option value="">Type of Organization</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
          </div>
          {/*Right Coloum */}
          <div className="sm:flex-1 w-full">
            <h1 className="font-[800] text-2xl mb-4">Contact Person Information</h1>
            <div>
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
              />
            </div>
<div >
              <label htmlFor="">Your Email</label>
              <input
                type="text"
                placeholder="Enter your  Email"
                className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number
              </label>
              <PhoneInput
                country={"np"}
                value={personalPhone}
                onChange={(phone: string) => setPersonPhone(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  fontSize: "16px",
                }}
                placeholder="+977 98XXXXXXXX"
                enableSearch
                disableDropdown={false}
                countryCodeEditable={false}
              />
            </div>

            <div className=" mt-4">
              <label htmlFor="">Your Designation</label>
              <input
                type="text"
                placeholder="Enter your Designation "
                className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
              />
            </div>
           
           <div className="h-[300px]">
             <textarea
            name=""
            id=""
            className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4 h-[235px] items-stretch "
          ></textarea>
           </div>
          </div>
        </div>

        {/*Bottom textarea */}
        <div>
          <label htmlFor="">Why do you want to become a partner?</label>
          <textarea
            name=""
            id=""
            className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4 h-[300px]"
          ></textarea>
        </div>
        <button type="submit" className="p-2 px-6 text-white font-[800] bg-[#055D59] border-[#055D59]-1 mx-auto">Submit</button>
        </form>
      </section>
    </>
  );
}
