import Link from "next/link";
import Image from "next/image";
import { desc, div } from "framer-motion/client";

interface card {
  title:string,
  desc:string,
  image:string,
  isCenter: boolean,
  category:string,

}
export default function BlogPage() {

  const footerCards = [
    {
      id:1,
      title:"The Best Time to Travel to Cambodia",
      image:"/assets/images/blog/1.jpg",
      date:"27 JAN",
      views:"13K VIEWS",
      category:"destination",
      path:""
    },
        {
      id:2,
      title:"20 Photos to Inspire You to Visit Cambodia",
      image:"/assets/images/blog/1.jpg",
      date:"27 AUGUST",
      views:"14K VIEWS",
      category:"destination",
      path:""
    },
        {
      id:3,
      title:"Epic Arts Cambodia:Charity For the Disabled",
      image:"/assets/images/blog/1.jpg",
      date:"29 AUGUST",
      views:"23K VIEWS",
      category:"destination",
      path:""
    },
     {
      id:4,
      title:"10 Ways to De-Stress Your Day Hour by Hour",
      image:"/assets/images/blog/4.jpg",
      date:"12 AUGUST",
      views:"3K VIEWS",
      category:"lifestyle",
      path:""
    },
     {
      id:5,
      title:"134 Free Weekly MEal Planner Printable",
      image:"/assets/images/blog/4.jpg",
      date:"15 AUGUST",
      views:"4.1K VIEWS",
      category:"lifestyle",
      path:""
    },
     {
      id:6,
      title:"Free Printable Stickers for Your Bullet Journal",
      image:"/assets/images/blog/4.jpg",
      date:"16 AUGUST",
      views:"2.2K VIEWS",
      category:"lifestyle",
      path:""
    },

         {
      id:7,
      title:"Which TBA Preset Pack is Right For You?",
      image:"/assets/images/blog/2.jpg",
      date:"06 MAY",
      views:"23K VIEWS",
      category:"photography",
      path:""
    },
             {
      id:8,
      title:"How to Get Amazing Photos at the Pyramids of Giza",
      image:"/assets/images/blog/2.jpg",
      date:"05 JUN",
      views:"5K VIEWS",
      category:"photography",
      path:""
    },
             {
      id:9,
      title:"Beginner's Guide to Travel Drone Photography",
      image:"/assets/images/blog/2.jpg",
      date:"08 AUGUST",
      views:"2K VIEWS",
      category:"photography",
      path:""
    },

    
  ]
  const bottomCards= [
    {
      id:1,
      title:"The Great Hack: How Social Media impacts politics?",
      image:"/assets/images/blog/3.jpg",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam nulla officiis est aperiam quam in libero enim a maiores nostrum, magni voluptatum deleniti, tempora iusto rerum illo, expedita suscipit.",
      path:""

    },
      {
      id:2,
      title:"The Great Hack: How Social Media impacts politics?",
      image:"/assets/images/blog/4.jpg",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam nulla officiis est aperiam quam in libero enim a maiores nostrum, magni voluptatum deleniti, tempora iusto rerum illo, expedita suscipit.",
      path:""

    }
  ]
  const cards = [
    {
      id:1,
      title:"Project Ideas Around the House",
      image:"/assets/images/blog/1.jpg",
      category:"Lifestyle",
      desc:" Websites shape your online presence. Get tips on content, structure, and trust signals for business growth.",
     date:"27 August",
     views:"25k VIEWS",
     read:"12 MINS READ",
     isCenter:false
    },
      {
      id:2,
      title:"How to Give Yourself a Spa Day From Home",
      image:"/assets/images/blog/2.jpg",
      category:"Hotels",
      desc:" Graduating from a top accelerator or incubator an be as career-defining for a startup founder as an elite university diploma> The intensive programmes, which...",
     date:"18 August",
     views:"25k VIEWS",
     read:"14 MINS READ",
    isCenter:true

    },
        {
      id:3,
      title:"Project Ideas Around the House",
      image:"/assets/images/blog/1.jpg",
      category:"Lifestyle",
      desc:" Websites shape your online presence. Get tips on content, structure, and trust signals for business growth.",
     date:"27 August",
     views:"25k VIEWS",
     read:"12 MINS READ",
     isCenter:false

    },
  ]
  return (
    <>
      {/* Top Blog Grid */}
      <section className="w-full md:max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Blog Card 1 */}
          
          <Link
            href="blog/21-stages-of-web-development"
            className="h-[270px] lg:h-[560px] lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/web-development-stages.jpeg"
                alt="blog-1"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                sizes="100vw"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 text-sm mb-1">
                  <p>Web Dev</p>
                  <p>9<sup>th</sup> March , 2025</p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  21 Stages of Web Development
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-28 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Having a website makes a business cross the boundaries and can cater its products, services or brand image globally.
                  </p>
                  <p className="text-sm">PRACAS Upreti</p>
                  <p className="text-sm">CTO</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 2 */}
          <Link
            href="blog/corporate-email"
            className="h-[270px] lg:col-span-2 rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/corporate-email.png"
                alt="blog-2"
                className="object-fill group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                sizes="100vw"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 text-sm mb-1">
                  <p>Email</p>
                  <p>9<sup>th</sup> March , 2025</p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  What is a Corporate/Business Email?
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-36 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Corporate emails tied to a custom domain shape a company’s identity and credibility.
                  </p>
                  <p className="text-sm">Lalita Ghimire</p>
                  <p className="text-sm">React JS Developer</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 3 */}
          <Link
            href="blog/things-to-keep-in-business-website"
            className="h-[270px] rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/things-to-keep-in-website.png"
                alt="blog-3"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>Technology</p>
                  <p>9<sup>th</sup> March, 2025</p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Things to Keep in Business Website
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-36 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    A website is a collection of related web pages accessible online.
                  </p>
                  <p className="text-sm">Niranjan Sharma</p>
                  <p className="text-sm">Project Manager</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 4 */}
          <Link
            href="blog/essential-things-to-keep-in-the-website"
            className="h-[270px] rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/assets/images/homepage/blog/essesntial-things-to-keep-on-website.png"
                alt="blog-4"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>Web</p>
                  <p>28<sup>th</sup> August, 2019</p>
                </section>
                <p className="text-xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Essential Things to Keep in the Website
                </p>
                <section className="text-sm max-h-0 translate-y-4 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Websites aren't just layouts — they reflect brand and function too.
                  </p>
                  <p className="text-sm">Madan Tamang</p>
                  <p className="text-sm">Web Developer</p>
                </section>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Two Column Blog Feature */}
      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-[45px] ">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="md:w-1/2 border border-gray-300 p-4 shadow-lg rounded-lg">
            <Image
              src="/assets/images/homepage/blog/corporate-email.png"
              width={500}
              height={300}
              alt="corporate-email"
              className="w-full rounded-lg"
            />
            <h1 className="text-lg font-bold mt-4">What is Corporate/Business Email?</h1>
            <p className="text-sm mt-2 mb-3">
              In today’s competitive business environment, professional email branding is key to credibility.
            </p>
            <Link href="#" className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm">
                  Read More
                </Link>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex flex-col gap-5">
            {/* Top */}
            <div className="flex gap-4 shadow-lg p-4 rounded-lg">
              <div className="flex-1 text-sm">
                <h1 className="text-lg font-bold">Things to Keep in Business Website</h1>
                <p className="mt-2">
                  Websites shape your online presence. Get tips on content, structure, and trust signals for business growth.
                </p>
                <Link href="#" className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm">
                  Read More
                </Link>
              </div>
              <Image
                src="/assets/images/homepage/blog/things-to-keep-in-website.png"
                width={150}
                height={150}
                alt="things-to-keep"
                className="object-cover rounded-md"
              />
            </div>

            {/* Bottom */}
            <div className="flex gap-4 shadow-lg p-4 rounded-lg">
              <div className="flex-1 text-sm">
                <h1 className="text-lg font-bold">Pegasus Spyware – You Are Hacked</h1>
                <p className="mt-2">
                  Just two decades ago, basic phones ruled Nepal. Today, spyware and hacking threats are part of our digital reality.
                </p>
                <Link href="#" className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm">
                  Read More
                </Link>
              </div>
              <Image
                src="/assets/images/homepage/blog/things-to-keep-in-website.png"
                width={150}
                height={150}
                alt="pegasus"
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:max-w-[1180px] md:px-0 mx-auto mb-[45px]">

        <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-stretch justify-between px-6 lg:px-0"> 
          {
            cards.map((item,index)=>(
              <div key={item.id} className={`${item.isCenter?"scale-[1.05]":""} w-full md:max-w-[350px] shadow-xl transition-all duration-100 ease-in-out border-gray-400 pb-4 rounded-md `}>
                <div className="w-full ">
                  <Image src={item.image} width={350} height={250} alt={item.title} className="w-full h-[343px] rounded-t-md sm:h-[250px] object-cover"/>
                </div>
                <div className="px-4">
                  <p className={`${item.category === "Lifestyle" ?"text-green-700":"text-red-600"} font-[700] mt-4`}>{item.category}.</p>
                <h1 className="font-[800] text-xl h-[60px] mt-1 ">{item.title}</h1>
                 <p className="text-sm text-gray-700 mt-2 h-[80px] ">{item.desc}</p>

                 <div className="flex text-sm text-gray-700 gap-4 mt-4">
                  <p>{item.date}</p>
                  <p>{item.read}</p>
                  <p>{item.views}</p>
                 </div>
                </div>
              </div>
            ))
          }
        </div>
        
      </section>
          {/*Bottom cards */}
      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-[45px] flex flex-col md:flex-row gap-7 ">
          {bottomCards.map((item,index)=>(
            <div key={item.id} className=" w-full md:max-w-[50%] shadow-sm">
              <div className="w-full ">
                <Image src={item.image} width={600} height={500} alt={item.image} className="h-[300px] rounded-t-md"/>
              </div>
             <div className="px-2 pb-2 border-gray-200 border  ">
               <h1 className="text-xl font-[800] mt-2">{item.title}</h1>
              <p className="mt-2 text-sm">{item.desc}</p>
               <Link href={item.path} className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm">
                  Read More
                </Link>
             </div>
            </div>
          ))}
      </section>
          {/*Different blogs */}
      <section className="w-full px-6 md:max-w-[1180px] md:px-0 mx-auto mb-[45px]">
          <div>

            <div>
              {
                footerCards.map((item,index)=>(
                <>
                      {item.category === "destination"?<div className="flex gap-4 "  key={item.id} >
                        <Image src={item.image} width={100 } height={100} alt={item.title}/>
                        <div className="">
                          <h1>{item.title}</h1>
                          <div>
                            <p>{item.date}</p>
                            <p>{item.views}</p>
                          </div>
                        </div>
                      </div>:<></>}
                 </>
                ))
              }
            </div>

          </div>
      </section>
    </>
  );
}
