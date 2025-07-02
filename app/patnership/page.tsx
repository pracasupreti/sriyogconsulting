"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Ribbon from "@/components/Ribbon";
export default function PatnerShip() {
  const [phoneOrganization, setPhoneOrganization] = useState<string>("");
  const [personalPhone, setPersonPhone] = useState<string>("");
  const [focusStates, setFocusStates] = useState({
    personalName: false,
    personalEmail: false,
    organizationEmail: false,
    organizationName: false,
    website: false,
    city: false,
    country: false,
    designation: false,
    additionalNotes: false,
    clientName: false,
    clientContact: false,
    clientEmail: false,
    clientBusinessType: false,
    reason: false,
    message: false,
  });
  return (
    <>
      <Ribbon name="Become a Partner" des="" />
      <section className=" p-4 max-w-[1180px] mx-auto">
        <form action="">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch align-center justify-center ">
            {/*Left Coloum */}
            <div className="flex-1">
              <h1 className="font-[800] text-2xl mb-4">
                Organization Information
              </h1>

              <div>
                <label htmlFor="">Name of Organization</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.organizationName
                      ? ""
                      : "Enter your organization name"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, organizationName: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      organizationName: e.target.value ? true : false,
                    })
                  }
                  className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.organizationEmail ? "" : "Enter your organization email"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, organizationEmail: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      organizationEmail: e.target.value ? true : false,
                    })
                  }
                  className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Landline Number
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
                  placeholder={
                    focusStates.website ? "" : "Enter your website URL"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, website: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      website: e.target.value ? true : false,
                    })
                  }
                  className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
                />
              </div>

              <div>
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder={focusStates.city ? "" : "Enter your city"}
                  onFocus={() => setFocusStates({ ...focusStates, city: true })}
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      city: e.target.value ? true : false,
                    })
                  }
                  className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4"
                />
              </div>

              <div>
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  placeholder={focusStates.country ? "" : "Enter your country"}
                  onFocus={() =>
                    setFocusStates({ ...focusStates, country: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      country: e.target.value ? true : false,
                    })
                  }
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
              <h1 className="font-[800] text-2xl mb-4">
                Contact Person Information
              </h1>
              <div>
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.personalName ? "" : "Enter your name"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, personalName: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      personalName: e.target.value ? true : false,
                    })
                  }
                  className="w-full  mt-1 outline-none  p-2 border border-gray-300 rounded mb-4"
                />
              </div>
              <div>
                <label htmlFor="">Your Email</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.personalEmail ? "" : "Enter your email"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, personalEmail: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      personalEmail: e.target.value ? true : false,
                    })
                  }
                  className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                   Mobile Phone Number
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
                  placeholder={
                    focusStates.designation ? "" : "Enter your designation"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, designation: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      designation: e.target.value ? true : false,
                    })
                  }
                  className="w-full mt-1 outline-none rounded-[6px] p-2 border border-gray-300 max-h-[62px]  mb-4"
                />
              </div>

              <div className="h-[300px]">
                <label htmlFor="">Additonal Message</label>
                <textarea
                  name=""
                  id=""
                  placeholder={
                    focusStates.message
                      ? ""
                      : "Write anything else you'd like us to know…"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, message: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      message: e.target.value ? true : false,
                    })
                  }
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
              placeholder={
                focusStates.reason
                  ? ""
                  : "Tell us your reason for partnering with us…"
              }
              onFocus={() => setFocusStates({ ...focusStates, reason: true })}
              onBlur={(e) =>
                setFocusStates({
                  ...focusStates,
                  reason: e.target.value ? true : false,
                })
              }
              className="w-full  mt-1 outline-none p-2 border border-gray-300 rounded mb-4 h-[300px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-2 px-6 text-white font-[800] bg-[#055D59] border-[#055D59]-1 mx-auto"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
