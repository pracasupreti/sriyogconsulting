import Image from "next/image";
import Link from "next/link";
export default function MeetPage() {
  const meet = [
    {
      id: 1,
      image: "/assets/images/about/noimage.png",
      title: "Next JS ",
      day: "Sunday",
      time: "9:00 PM",
      path: "",
    },
    {
      id: 2,
      title: "UI/UX ",
      image: "/assets/images/about/noimage.png",
      day: "Monday",
      time: "9:00 PM",
      path: "",
    },
    {
      id: 3,
      image: "/assets/images/about/noimage.png",
      title: "General Meeting",
      day: "Wednesday",
      time: "9:00 PM",
      path: "",
    },
    {
      id: 4,
      image: "/assets/images/about/noimage.png",
      title: "React JS ",
      day: "Thursday",
      time: "9:00 PM",
      path: "",
    },
    {
      id: 5,
      image: "/assets/images/about/noimage.png",
      title: "Interview",
      day: "Friday",
      time: "1:00 PM  to  9:00 PM",
      path: "",
    },
    {
      id: 6,
      image: "/assets/images/about/noimage.png",
      title: "# Tech Friday ",
      day: "Friday",
      time: "9:00 PM",
      path: "https://meet.google.com/tat-vvcq-pzu",
    },
  ];
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col sm:flex-row gap-4 justify-between flex-wrap ">
        {meet.map((item) => (
          <div
            className=" w-full sm:max-w-[316px] h-auto flex flex-col gap-1 mb-6"
            key={item.id}
          >
            <Image
              src={item.image}
              width={400}
              height={200}
              alt={item.title}
              className="w-full rounded-[15px]  border-1 border-gray-600 "
            />
            <h1 className="text-center">{item.title}</h1>
            <div className="flex justify-center gap-2 px-4 py-2 text-gray-600 -mt-2 items-center ">
              <p> {item.day}</p>
              <p>{item.time}</p>
            </div>

            <Link

              target="_blank"
              href={item.path}
              className="px-4 py-2 border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white w-[40%] mx-auto text-center rounded-[15px] transition-all ease-in duration-[100] "
            >
              Join Now
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
