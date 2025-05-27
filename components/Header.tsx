"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [topOpen, setTopOpen] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [reqSupportOpen, setReqSupportOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedSupport, setSelectedSupport] = useState("");
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Consulting", path: "/consulting" },
    { label: "Clients", path: "/clients" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header>
        {topOpen && (
          <section className="bg-[#0D5D59] w-full py-4">
            <div className="lg:max-w-[1180px] max-lg:container max-lg:px-3 mx-auto text-white flex justify-between items-center lg:text-[14px] sm:text-[12px] text-[14px]">
              <div className="flex gap-2">
                <p>Helpline Number</p>
                <Link href="tel:+977-98511-52774">+977-98511-52774</Link>
              </div>
              <div className="gap-2 flex items-center">
                <i className="hidden md:block">
                  SRIYOG App is having its own homepage and a new company.
                </i>
                <Link
                  href=""
                  className="py-[3px] px-1 mx-2 hidden md:block rounded-lg border-2 italic font-semibold"
                  target="_blank"
                >
                  View Now
                </Link>
                <button
                  onClick={() => setTopOpen(false)}
                  className="border-2 w-[30px] h-[30px] rounded-lg font-semibold hover:cursor-pointer"
                >
                  X
                </button>
              </div>
            </div>
          </section>
        )}
        <nav className="bg-[#d3d3d3] w-full sticky top-0 shadow-lg">
          <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto  flex justify-between items-center">
            <Link
              href="/"
              className="relative lg:h-[90px] h-[80px] w-[200px]  lg:w-[200px]"
            >
              <Image
                src="/assets/images/header/logo.svg"
                alt="logo"
                fill
                priority
                className="py-3 object-contain "
              />
            </Link>
            <div className="hidden lg:block">
              <ul className="space-x-3 flex">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className={`py-2 px-3 font-semibold ${
                        pathname === item.path
                          ? "text-[#0D5D59] "
                          : "text-[#4b4b4b] hover:text-[#0D5D59]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/"
                    className="bg-[#0D5D59] px-3 text-white font-semibold rounded-lg p-2 hover:bg-[#2e5250]"
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>
            <section className="hidden max-lg:block">
              <div className="flex items-center gap-x-1">
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src="/assets/images/header/notification.svg"
                    alt="logo"
                    fill
                    priority
                    className="py-3 object-contain "
                  />
                </div>
                <div className="relative h-[50px] w-[50px] ">
                  <Image
                    src="/assets/images/header/question.svg"
                    alt="logo"
                    fill
                    priority
                    className="py-3 object-contain "
                    onClick={() => setReqSupportOpen(true)}
                  />
                </div>
                <div className="relative  h-[80px] w-[50px]  ">
                  <Image
                    src="/assets/images/header/hamburger.svg"
                    alt="logo"
                    fill
                    priority
                    className="py-3 object-contain "
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  />
                </div>
              </div>
            </section>
          </section>
          <AnimatePresence>
            {reqSupportOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white absolute top-0 w-full overflow-hidden"
              >
                <form action="" className="px-5  py-4 space-y-5">
                  <div className="flex justify-end">
                    <button
                      className="text-red-800 text-2xl font-bold rounded-md border px-2 "
                      onClick={() => setReqSupportOpen(false)}
                    >
                      X
                    </button>
                  </div>
                  <p className="font-semibold text-red-800 text-4xl">
                    Request Support
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="full Name"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name of Organization"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="City"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />

                  <div className="relative w-full border border-[#4b4b4b] rounded-md">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setTechOpen(!techOpen);
                      }}
                      className="w-full text-left p-2 flex justify-between items-center"
                    >
                      <span className="text-gray-500">
                        {selectedTech || "Select Technical Issue"}
                      </span>
                      <span className="relative h-[30px] w-[25px]">
                        {techOpen ? (
                          <Image
                            src="/assets/images/header/dropup.svg"
                            alt="drop-down"
                            fill
                            priority
                            className="object-contain"
                          />
                        ) : (
                          <Image
                            src="/assets/images/header/dropdown.svg"
                            alt="drop-down"
                            fill
                            priority
                            className="object-contain"
                          />
                        )}
                      </span>
                    </button>
                    {techOpen && (
                      <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                        {["Issue", "Technical", "Billing", "Other"].map(
                          (option) => (
                            <li
                              key={option}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setSelectedTech(option);
                                setTechOpen(false);
                              }}
                            >
                              {option}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>

                  <div className="relative w-full border border-[#4b4b4b] rounded-md">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSupportOpen(!supportOpen);
                      }}
                      className="w-full text-left p-2 flex justify-between items-center"
                    >
                      <span className="text-gray-500">
                        {selectedSupport || "Select Support Type"}
                      </span>
                      <span className="relative h-[30px] w-[25px]">
                        {supportOpen ? (
                          <Image
                            src="/assets/images/header/dropup.svg"
                            alt="drop-down"
                            fill
                            priority
                            className="object-contain"
                          />
                        ) : (
                          <Image
                            src="/assets/images/header/dropdown.svg"
                            alt="drop-down"
                            fill
                            priority
                            className="object-contain"
                          />
                        )}
                      </span>
                    </button>
                    {supportOpen && (
                      <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                        {["Phone", "Email", "Chat"].map((option) => (
                          <li
                            key={option}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSelectedSupport(option);
                              setSupportOpen(false);
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="eMail"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Issue Since"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Department"
                    className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Message"
                    className="px-2 pt-2 pb-16 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                  />
                  <input
                    type="submit"
                    name=""
                    id=""
                    value="Submit"
                    className="px-4 hover:bg-red-800 hover-text-white py-2 border-red-800 rounded-md text-red-800 font-semibold border-2"
                  />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hamburgerOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white absolute top-full left-0 w-full  overflow-hidden z-50 shadow-md rounded-b-md"
              >
                <ul className="space-y-3 py-5 text-[20px] font-semibold text-[#4b4b4b] text-center">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.path}
                        className={` font-semibold ${
                          pathname === item.path
                            ? "text-[#0D5D59] "
                            : "text-[#4b4b4b] hover:text-[#0D5D59]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/"
                      className="bg-[#0D5D59] px-3 text-white font-semibold rounded-lg p-2 hover:bg-[#2e5250]"
                    >
                      Request a Quote
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
