import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const clientsData = [
  {
    id: 1,
    title: "TransNepal Freight Services Pvt. Ltd.",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/transnepal.png",
    description:
      "TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs’ at Biratnagar and Bhairahawa",
    path: "https://transnepaldryport.com/",
  },

  {
    id: 2,
    title: "CVDs Nepal",
    date: " 13 Sep 2007 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/cvds-nepal.png",
    description:
      "TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs’ at Biratnagar and Bhairahawa",
    path: "https://cvdsnepal.org.np/",
  },
  {
    id: 3,
    title: "Jayashree Polymers",
    date: " 04 Aug 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/jayshree-polymers.png",
    description:
      "The Jayashree Group traces its roots back to 1984 when it began operations as a Rubber manufacturing company. Jayashree, realizing the immense opportunities in the global rubber components industry has been successful in expanding its operations into multiple locations & multi-products over a period of time. ",
    path: "https://magicfootwear.com.np/",
  },
  {
    id: 7,
    title: "Purbanchal University",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/4.png",
    description:
      "Purbanchal University, School of Management (PUSOM) is established by the Purbanchal University Act 1994 with a mission to establish as a leading university of academic excellence. The Faculty of Management (FOM) of Purbanchal University offers.....",
    path: "https://pusom.edu.np/about-us",
  },

  {
    id: 8,
    title: "Neuro Cardio & Multispeciality Hospital",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/5.png",
    description:
      "Neuro Cardio & Multispeciality Hospital is a privately owned Health Organization located at Biratnagar Metropolitan City, Nepal which has been dedicated to Health Care Services for more than two decades. Known for its quality care since its inception ....",
    path: "https://www.neurohospital.com.np/",
  },

  {
    id: 9,
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/6.png",
    title: "Golden Hospital",
    description:
      "Golden Hospital, established in 2011 (Falgun 2067 BS), is a premier multi-specialty medical institution located in Biratnagar, Nepal's second-largest city. With a mission, the hospital is dedicated to providing both preventive and curative healthcare services, primarily targeting the eastern region of the country.",
    path: "https://www.goldenhospital.com.np/",
  },
  {
    id: 10,
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/7.png",
    title: "Sudarshan Security Services",
    description:
      "Sudarshan Security Services as an experienced service provider, takes pride in offering our clients an effective solution and world class service throughout the country.",
    path: "https://sudarshansecurity.com.np/",
  },
  {
    id: 11,
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/8.png",
    title: "Kopila Clinic",
    description:
      "Your trusted partner in reproductive health and Womens wellness in Damak, Nepal. Newly established in November 2024, our state-of-the-art facility in Jaycees Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.",
    path: "https://kopilaclinic.com.np/",
  },
  {
    id: 12,
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/9.png",
    title: "Dr. Priyanka's Clinic",
    description:
      "Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored .....",
    path: "https://drpriyankasclinic.com/",
  },
  {
    id: 13,
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/10.png",
    title: "Forum for Rural Women Ardency Development",
    description:
      "By integrating social development with economic support, we are expanding our reach to uplift livelihoods, protect biodiversity, promote agriculture, and extend humanitarian assistance to communities across the country.",
    path: "https://forward.org.np/",
  },
  {
    id: 14,
    title: "General Plastic Industries",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/11.png",
    description:
      "At General Plastic Industries we are committed to helping our customers by providing quality products, so that the customer can stop thinking about wastages and rejections and can focus on building their brand.",
    path: "https://generalplasticindustries.com/",
  },
  {
    id: 15,
    title: "Arogya Bhawan Works Pvt. Ltd.",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/12.png",
    description:
      "In the year 1925 AD Royal Ayurvedic Physician Mr. Shiva Nath Rimal and his younger brother Mr. Narendra Nath Rimal established this organization with the objective to cure and maintain the holistic Ayurvedic system in the center of the Himalayan range.",
    path: "https://www.arogyabhawanworks.com.np/",
  },
  {
    id: 16,
    title: "Advance Pain Specialist Clinic",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/14.png",
    description:
      "At Advance Pain Specialist Clinic, we strive to transform lives by helping individuals overcome the limitations of pain and embrace a healthier, happier future.",
    path: "https://painclinic.com.np/",
  },
  {
    id: 17,
    title: "Gravure Link Nepal Pvt. Ltd",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/15.jpg",
    description:
      "Gravure Link Nepal Pvt. Ltd. A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised,",
    path: "https://gravelink.com.np/",
  },
];

export const metadata: Metadata = {
  title: "Our Clients | SRIYOG Consulting",
};
export default function Page() {
  return (
    <>
      <Ribbon name="Our Client's" des="" />
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px]">
        <h1 className="text-[32px] text-[#055D59] font-semibold text-center mb-1">
          Drive your own revolution with SRIYOG
        </h1>
        <p className="max-w-[800px] mx-auto text-center mb-[45px]">
          Our open source experts work with your organization to implement a
          cloud strategy to evolve at a pace that works for you. We believethat
          sharing ideas and building a strategy together is a better approach
          for your long-term success than following a prescribed plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-6">
          {clientsData.map((item, idx) => (
            <div
              key={idx + 1}
              className="relative text-gray-700 border-[#dbdbdb] border-[1.5px] rounded-lg px-4 lg:h-[460px] sm:h-[480px] h-auto  hover:shadow-lg transition duration-300 ease-in-out"
            >
              <section className=" relative h-32 w-full mb-2 border-b border-[#dbdbdb]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-contain py-4"
                  fill
                />
              </section>
              <p className="font-semibold mb-2 md:text-xl h-12">{item.title}</p>
              <p className=" mb-2 md:h-24 h-32 ">{item.description.slice(0, 160)}...</p>
              <p className="font-semibold mb-2">Services offered</p>
              <div className="flex gap-3 mb-2">
                {item.service &&
                  item.service.map((item, idx) => (
                    <div key={idx + 1} className="border px-2 py-1 rounded-md ">
                      <Link href="/">{item}</Link>
                    </div>
                  ))}
              </div>
              <p className="border-b pb-2 border-[#dbdbdb]">
                Service Started Date : {item.date}
              </p>
              <div className="my-6">
                <Link
                  target="_blank"
                  className="md:absolute my-2 max-md:my-8 md:bottom-0 rounded-md  font-medium border-[#dbdbdb] border-[1.5px] px-4 py-[6px] hover:bg-[#055d59] hover:border-[#055d59] hover:text-white transition-all duration-300 ease-in-out"
                  href={item.path}
                >
                  Browse More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
