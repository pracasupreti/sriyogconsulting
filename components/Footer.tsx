"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-[#dee2e6] w-full bg-white">
        <section className="lg:w-[1180px] w-full px-4 md:px-6 lg:px-0 mx-auto py-6 flex flex-wrap justify-between  lg:items-end">
          <div className="grid grid-cols-2 pb-4 sm:grid-cols-2 md:grid-cols-4 place-content-between w-full gap-6 text-[#0D5959]  lg:w-[870px]">
            {[
              [
                { label: "Welcome", path: "/welcome" },
                { label: "FAQs", path: "/faq" },
                { label: "Vision & Mission", path: "/vmgo" },
                { label: "Media Coverage", path: "/media" },
                {
                  label: (
                    <>
                      Career&nbsp;
                      <span className="bg-[#0D5D59] px-[5px] py-[2px] text-[11px] text-white rounded-[3px]">
                        We&apos;re Hiring
                      </span>
                    </>
                  ),
                  path: "/career",
                },
              ],
              [
                { label: "Timeline", path: "/timeline" },
                { label: "Feedback", path: "/feedback" },
                { label: "Pitch Deck", path: "/pitch" },
                { label: "Internship", path: "/internship" },
                { label: "Testimonials", path: "/testimonials" },
              ],
              [
                { label: "SRIYOG App", path: "https://sriyog.app/" },
                { label: "JDR Fonts", path: "/fonts" },
                { label: "Certificates", path: "/certificates" },
                { label: "Payment Details", path: "/payment" },
                { label: "Partners", path: "/partners" },
              ],
              [
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms of Services", path: "/tos" },
                { label: "Disclaimer", path: "/disclaimer" },
                { label: "Sitemap", path: "/sitemap" },
                { label: "Tutorials", path: "/tutorials" },
              ],
            ].map((group, index) => (
              <ul key={index} className="space-y-3 ">
                {group.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="border-t-4 border-[#055D59] w-[300px] pt-2 px-4 sm:px-5 max-w-md mx-auto text-[#0D5959] space-y-4 shadow-sm">
            <div className="relative w-[250px] mx-auto h-[60px] ">
              <Image
                src="/assets/images/footer/logo.svg"
                fill
                priority
                className="object-contain"
                alt="SRIYOG Consulting Logo"
              />
            </div>
            <div className="flex items-start gap-2">
              <div className="relative w-5 h-5 mt-1">
                <Image
                  src="/assets/images/footer/location.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="location"
                />
              </div>
              <p>
                Rem.Work, Kamalpokhari
                <br />
                Kathmandu, Nepal
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/assets/images/footer/phone.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="phone"
                />
              </div>
              <p>+977-9851152774</p>
            </div>
            <p className="text-sm">Calling Time: 11 AM to 6 PM NPT</p>
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/images/footer/mail.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="email"
                />
              </div>
              <Link href="mailto:consulting@sriyog.com">
                consulting@sriyog.com
              </Link>
            </div>
            <Link
              href="/quote"
              className="block mb-4 bg-[#0D5D59] hover:bg-[#2e5250] text-white text-center font-semibold py-2 rounded-lg transition"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        <section className="w-full border-b-24 ">
          <div className="relative max-lg:container max-lg:px-3 w-[50px] h-[40px] lg:w-[1180px] lg:h-[120px] mx-auto">
            <Image
              src="/assets/images/footer/footer.svg"
              fill
              priority
              className="object-contain"
              alt="footer"
            />
          </div>
        </section>

        <section className="w-full">
          <div className="lg:w-[1180px] my-4 mx-auto max-md:space-y-2 max-lg:container px-3 flex flex-wrap justify-between items-center">
            <p className="text-[14px] max-md:w-full max-md:text-[12px] max-md:text-center">
              All Rights Reserved. © 2018-2025 SRIYOG Consulting Pvt. Ltd.
            </p>
            <div className="flex max-md:w-full max-md:justify-center gap-3">
              <Link href="https://bit.ly/sriyog">
                <div className="relative md:h-[50px] h-[60px] w-[130px] md:w-[100px]">
                  <Image
                    src="/assets/images/footer/google-play.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="play-store"
                  />
                </div>
              </Link>
              <Link href="https://bit.ly/sriyogios" target="_blank">
                <div className="relative md:h-[50px] h-[60px] w-[130px] md:w-[100px]">
                  <Image
                    src="/assets/images/footer/app-store.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="app-store"
                  />
                </div>
              </Link>
            </div>
            <div className="flex max-md:w-full max-md:justify-center max-md:items-center gap-3">
              <Link
                href="https://www.facebook.com/sriyogdotcom"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/assets/images/footer/facebook.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="facebook"
                  />
                </div>
              </Link>
              <Link href="https://t.me/sriyog" target="_blank">
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/assets/images/footer/telegram.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="telegram"
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/sriyog-consulting/"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/assets/images/footer/linkedIn.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="linkedin"
                  />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@sriyogdotcom8535"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/assets/images/footer/youtube.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="youtube"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="border-3 border-[#055D59] w-full"></section>
      </footer>
    </>
  );
}
