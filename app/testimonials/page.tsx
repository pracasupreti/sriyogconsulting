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
      title: "Front-end Developer",
      desc: [
        "My 3-month internship as a UI/UX Designer at SRIYOG Consulting Pvt. Ltd. was a transformative experience where I worked on real-time projects. I was responsible for designing intuitive user interfaces and improving user experiences through reusable and thoughtful design components. This role helped me understand the importance of visual hierarchy, consistency, and user-centered design.",
        "During the internship, I closely collaborated with developers and gained hands-on experience with tools like Figma. This not only enhanced my ability to design high-fidelity prototypes but also helped bridge the gap between design and development. It was a valuable opportunity to understand how a well-structured design system streamlines the development process.",
        "More than technical skills, the internship helped me grow personally and professionally. I significantly improved my communication, teamwork, and collaboration in a mentorship-driven environment. I am genuinely grateful for the guidance and trust provided by the team at SRIYOG, which laid a strong foundation for my journey as a designer.",
      ],
      name: "Salina Bastola",
      stack: "Project Manager",
      image: "/assets/images/testimonials/1.png",
    },
    {
      id: 2,
      title: "React Native Developer",
      desc: [
        "My internship at SRIYOG Consulting Pvt. Ltd. was both practical and inspiring. I contributed to the development of a real-world mobile application using React Native, where I worked on front-end UI development and learned about component structuring. I also integrated data using Airtable APIs, gaining exposure to real-time data handling and responsive design practices.",
        "The work environment was highly collaborative and supportive, making it easy to seek help, exchange ideas, and grow through feedback. This experience pushed me to think from the user's perspective and code with clarity, intention, and maintainability. It helped me connect design thinking with actual implementation.",
        "Beyond programming, this internship strengthened my problem-solving, communication, and teamwork abilities. It was a great introduction to working in a production-level setting with a focus on clean, maintainable code. I’m thankful to the SRIYOG team for their mentorship, which helped boost my confidence as a budding developer.",
      ],
      name: "Sharad Kunwar",
      stack: "Stack Co-ordinator",
      image: "/assets/images/testimonials/2.png",
    },
    {
      id: 3,
      title: "React.Js Developer",
      desc: [
        "My 3-month internship as a React JS Developer at SRIYOG Consulting Pvt. Ltd. provided me the opportunity to work on real-time web projects. I developed reusable components, implemented state management, and contributed to building scalable user interfaces. This helped me understand best practices in component-based architecture.",
        "During the internship, I also gained practical experience with tools like Git for version control and Tailwind CSS for rapid UI styling. Collaborating with the team improved my ability to work in agile workflows and understand how design translates into functioning applications. It was a well-rounded technical exposure.",
        "In addition to technical learning, I improved my soft skills such as communication, collaboration, and time management. The mentorship and inclusive culture at SRIYOG made the experience enjoyable and meaningful. I’m grateful for the support and encouragement I received throughout the internship.",
      ],
      name: "Bitisha Thapa",
      stack: "React js Developer",
      image: "/assets/images/testimonials/3.png",
    },
  ];
  return (
    <>
      <Ribbon name="Testimonials" des="" />
      <section className=" max-w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px]">
        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className="border-[1.5px] border-[#dbdbdb] hover:shadow-2xl rounded-md grid grid-cols-1 lg:grid-cols-6  place-content-between place-items-center mb-[45px]"
          >
            <div className="col-span-2 relative h-68 w-full max-lg:my-4">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="col-span-4 md:px-8 md:py-8 max-md:p-4">
              <p className="text-3xl font-semibold mb-3 text-[#4b4b4b] max-lg:text-center">
                {data.title}
              </p>
              <span className="mb-4">
                {data.desc &&
                  data.desc.map((item, idx) => (
                    <p key={idx + 1} className="mb-2 text-gray-700">
                      {item}
                    </p>
                  ))}
              </span>
              <p className="font-semibold text-[#4b4b4b]">Best Regards</p>
              <p className="font-semibold text-[#4b4b4b]">{data.name}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
