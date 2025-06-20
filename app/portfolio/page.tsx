import Image from "next/image";
import Link from "next/link";
export default function PortfolioPage() {
  const portfolio = [
    {
      id: 1,
      image: "/assets/images/portfolio/kisanpedia.png",
      title: "Kisanpedia Services",
      path: "https://kisanpedia.com/",
    },
    {
      id: 2,
      image: "/assets/images/portfolio/transNepal.png",
      title: "Trans Nepal Dry Port",
      path: "https://transnepaldryport.com/",
    },
    {
      id: 3,
      image: "/assets/images/portfolio/bkmMasala.png",
      title: "BKM Masala",
      path: "https://bkmasala.com.np/",
    },
    {
      id: 4,
      image: "/assets/images/portfolio/neuroHospital.png",
      title: "Neuro Hospital",
      path: "https://www.neurohospital.com.np/",
    },
    {
      id: 5,
      image: "/assets/images/portfolio/kopilaclinic.png",
      title: "Kopila Clinic",
      path: "https://kopilaclinic.com.np/",
    },

    {
      id: 6,
      image: "/assets/images/portfolio/drpriyanka.png",
      title: "Dr. Priyanka’s Clinic",
      path:"https://drpriyankasclinic.com/"
    },

    {
      id: 7,
      image: "/assets/images/portfolio/gravelink.png",
      title: "Gravure Link",
      path:"https://gravelink.com.np/"
    },

    {
      id: 8,
      image: "/assets/images/portfolio/painclinic.png",
      title: "Pain Clinic",
      path:'https://painclinic.com.np/'
    },

    {
      id: 9,
      image: "/assets/images/portfolio/cvdsnepal.png",
      title: "CVDS Nepal",
      path:"https://cvdsnepal.org.np/"
    },
        {
      id: 10,
      image: "/assets/images/portfolio/biratinfo.png",
      title: "Birat Info",
      path:"https://www.biratinfo.com/"
    },
  ];

   
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col sm:flex-row gap-4 justify-between flex-wrap ">
        {portfolio.map((item) => (
          <div
            className=" w-full sm:max-w-[316px] h-[300px] flex flex-col gap-1 mb-6"
            key={item.id}
          >
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.title}
              className="w-full rounded-[15px] h-full object-cover "
            />
            <h1 className="text-center">{item.title}</h1>

            <Link
              href={`${item.path}`}
              target="_blank"
              className="px-4 py-2 border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white w-[40%] mx-auto text-center rounded-[15px] transition-all ease-in duration-[100] "
            >
              Browse More
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
