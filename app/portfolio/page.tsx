import Image from "next/image";
import Link from "next/link";
export default function PortfolioPage() {
  const portfolio = [
    {
      id: 1,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
      path: "",
    },
    {
      id: 2,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
      path: "",
    },
    {
      id: 3,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
      path: "",
    },
    {
      id: 4,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
      path: "",
    },
    {
      id: 5,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
      path: "",
    },

    {
      id: 6,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
    },

    {
      id: 7,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
    },

    {
      id: 8,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
    },

    {
      id: 9,
      image: "/assets/images/about/noimage.png",
      title: "Kisanpedia Services",
    },
  ];
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col sm:flex-row gap-4 justify-between flex-wrap ">
        {portfolio.map((item) => (
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

            <Link
              href=""
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
