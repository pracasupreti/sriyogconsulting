"use client";
import Ribbon from "@/components/Ribbon";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type FaqItemProps = {
  title: string;
  content: string;
};

const faq1 = [
  {
    id: 0,
    question: "When was SRIYOG Consulting Pvt. Ltd. established?",
    answer: "The company was established on June 14, 2018.",
  },
  {
    id: 1,
    question: "Where is SRIYOG Consulting based?",
    answer: "It is headquartered in Kamalpokhari, Kathmandu, Nepal.",
  },
  {
    id: 2,
    question: "Is SRIYOG App have a new homepage?",
    answer:
      "Yes, SRIYOG App is now an independent company and can be browsed from https://sriyog.com/app",
  },
  {
    id: 3,
    question: "What industries does SRIYOG serve?",
    answer:
      "SRIYOG serves a broad range of industries, including healthcare, retail, education, finance, and agriculture.",
  },
  {
    id: 4,
    question: "Who is the CTO of SRIYOG Consulting?",
    answer:
      "Prakash Upreti, also known as PRACAS, is the Chief Technology Officer.",
  },
  {
    id: 5,
    question: "What makes SRIYOG Consulting unique?",
    answer:
      "The company offers custom-tailored, secure, and scalable IT solutions with end-to-end digital transformation services.",
  },
  {
    id: 6,
    question:
      "What does the website development & maintenance service include?",
    answer:
      "It includes custom web design, responsive UI/UX, hosting, domain registration, and SEO.",
  },
  {
    id: 7,
    question: "What is covered under social media management?",
    answer:
      "It involves monthly strategy, content creation, engagement, and analytics to enhance digital branding.",
  },
  {
    id: 8,
    question: "What does the database/web server rental service offer?",
    answer:
      "It provides secure server space for hosting websites, databases, and applications.",
  },
  {
    id: 9,
    question: "What does the mobile app development service entail?",
    answer:
      "Development of professional mobile apps tailored to client needs, compatible with Android and iOS.",
  },
  {
    id: 10,
    question: "What kind of websites does SRIYOG develop?",
    answer:
      "They build custom, user-friendly websites including e-commerce, CMS, and SaaS applications.",
  },
  {
    id: 11,
    question: "What technologies does SRIYOG use?",
    answer:
      "They offer full-stack development, UI/UX design, database optimization, and secure hosting solutions.",
  },
  {
    id: 12,
    question: "Does SRIYOG provide cloud hosting services?",
    answer: "Yes, we provide cloud hosting and domain management.",
  },
  {
    id: 13,
    question: "Is security included in the services?",
    answer:
      "Yes, SSL certification, security audits, and cyber protection are part of their hosting services.",
  },
  {
    id: 14,
    question: "What analytics services are offered?",
    answer:
      "Data analysis, survey form development, and insights to improve business decision-making.",
  },
  {
    id: 15,
    question: "How many clients has the CTO served so far?",
    answer: "Over 500 clients across 15 countries.",
  },
  {
    id: 16,
    question: "What are some of SRIYOG's notable clients?",
    answer:
      "Clients include Magic Footwear, Trans Nepal, PUSOM, Neuro Hospital, CVDS Nepal, and more.",
  },
  {
    id: 17,
    question: "What is the mission of SRIYOG Consulting?",
    answer:
      "To empower businesses with reliable IT solutions that streamline operations and drive growth.",
  },
  {
    id: 18,
    question: "What is the vision of SRIYOG Consulting?",
    answer:
      "To be a leading IT consulting firm in Nepal and globally through innovation and strategic partnerships.",
  },
  {
    id: 19,
    question: "Why should businesses choose SRIYOG?",
    answer:
      "For their industry expertise, customized solutions, scalability, security, and full-spectrum digital services.",
  },
  {
    id: 20,
    question: "Is SRIYOG Consulting offering Internship opportunity?",
    answer:
      "Yes, we do. The intakes are on June-August, September-November, December-February, March-May.",
  },
  {
    id: 21,
    question: "How can I apply for an Internship?",
    answer: "Please check the link https://sriyog.com/internship",
  },
  {
    id: 22,
    question: "Do I need to pay for an Internship Opportunity?",
    answer:
      "NPR 5,000 is charged per month for getting enrolled in an internship opportunity & NPR 15,000 as a refundable security deposit.",
  },
  {
    id: 23,
    question: "Can I join a Training?",
    answer: "Yes, we offer various IT training courses.",
  },
];

const FaqItem = ({ title, content }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-4 py-5 hover:cursor-pointer shadow-xl font-semibold focus:outline-none flex justify-between items-center"
        >
          <div
            className={`text-[1.1rem] max-md:font-bold font-semibold group-hover:text-[#055d59] ${
              isOpen ? "text-[#055d59]" : "text-[#4b4b4b]"
            }`}
          >
            {title}
          </div>
          <div
            className={`text-[1.2rem] max-md:font-bold font-semibold group-hover:text-[#055d59] transition-all duration-300 ease-in-out ${
              isOpen ? "text-[#055d59]" : "text-[#4b4b4b]"
            }`}
          >
            {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-700 text-[1rem] ${
            isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
          }`}
        >
          {content}
        </div>
      </section>
    </>
  );
};

export default function Page() {
    useEffect(()=>{
        document.title="FAQ's | SRIYOG Consulting"
    },[]);
  return (
    <>
      <Ribbon name="Frequently Asked Questions" des="" />
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px] grid grid-cols-1 lg:grid-cols-2 place-content-between gap-4">
          {faq1.map((item) => (
            <span key={item.id}>
              <FaqItem title={item.question} content={item.answer} />
            </span>
          ))}
      </section>
    </>
  );
}
