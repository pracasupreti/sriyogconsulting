import Link from "next/link"
import Image from "next/image"
export default function blogPage (){
  return(
    <>
    <section className="w-[1180px] mx-auto px-6 md:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-full place-content-between gap-4 mb-6">
              <Link
                href="blog/21-stages-of-web-development"
                className=" lg:h-[560px] h-[270px] lg:col-span-2 lg:row-span-2  rounded-lg overflow-hidden"
              >
                <div className="relative group h-full w-full">
                  <Image
                    src="/assets/images/homepage/blog/web-development-stages.jpeg"
                    alt="blog-1"
                    className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                    fill
                    sizes=""
                    priority
                  />
                  <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                    <section className="flex gap-4 text-sm mb-1">
                      <p>Web Dev</p>
                      <p>
                        9<sup>th</sup> March , 2025
                      </p>
                    </section>
                    <p className=" text-2xl translate-y-2 group-hover:translate-y-0  transition-all duration-500 ease-in-out">
                      21 Stages of Web Development
                    </p>
                    <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-28 transition-all duration-500 ease-in-out">
                      <p className="my-2">
                        Having a website makes a business cross the boundaries
                        and can cater its products, services or brand image
                        globally.
                      </p>
                      <p className=" text-sm">PRACAS Upreti</p>
                      <p className="text-sm">CTO</p>
                    </section>
                  </div>
                </div>
              </Link>
              <Link
                href="blog/corporate-email"
                className=" h-[270px] lg:col-span-2 rounded-lg overflow-hidden"
              >
                <div className="relative group  h-full w-full">
                  <Image
                    src="/assets/images/homepage/blog/corporate-email.png"
                    alt="blog-2"
                    className="object-fill group-hover:scale-110 transition duration-500 ease-in-out"
                    fill
                    sizes=""
                    priority
                  />
                  <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                    <section className="flex gap-4 mb-1 text-sm">
                      <p>Email</p>
                      <p>
                        9<sup>th</sup> March , 2025
                      </p>
                    </section>
                    <p className=" text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      What is a Corporate/Business Email?
                    </p>
                    <section className=" text-sm max-h-0 translate-y-3 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <p className="my-2">
                        Corporate emails or business emails tied to a custom
                        domain play a pivotal role in shaping an
                        organization&apos;s identity and credibility.
                      </p>
                      <p className="text-sm">Lalita Ghimire</p>
                      <p className="text-sm">React JS Developer</p>
                    </section>
                  </div>
                </div>
              </Link>
              <Link href="blog/things-to-keep-in-business-website" className=" h-[270px]  rounded-lg overflow-hidden">
                <div className="relative group h-full w-full">
                  <Image
                    src="/assets/images/homepage/blog/things-to-keep-in-website.png"
                    alt="blog-3"
                    sizes=""
                    className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                    fill
                    priority
                  />
                  <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                    <section className="flex gap-4 mb-1 text-sm">
                      <p>Technology</p>
                      <p>
                        9<sup>th</sup> March, 2025
                      </p>
                    </section>
                    <p className=" text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      Things to keep in business website
                    </p>
                    <section className="max-h-0 translate-y-3 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <p className="my-2 text-sm">
                        A website is a collection of related web pages and
                        digital content that are typically accessible via the
                        internet.
                      </p>
                      <p className="text-sm">Niranjan Sharma</p>
                      <p className="text-sm">Project Manager</p>
                    </section>
                  </div>
                </div>
              </Link>
              <Link href="blog/essential-things-to-keep-in-the-website" className=" h-[270px]  rounded-lg overflow-hidden">
                <div className="relative group  h-full w-full">
                  <Image
                    src="/assets/images/homepage/blog/essesntial-things-to-keep-on-website.png"
                    alt="blog-4"
                    sizes=""
                    className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                    fill
                    priority
                  />
                  <div className="absolute p-4 z-10 bottom-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] text-white w-full">
                    <section className="flex gap-4 mb-1">
                      <p>Web</p>
                      <p>
                        28<sup>th</sup> August, 2019
                      </p>
                    </section>
                    <p className=" text-xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      Essential things to Keep in the Website
                    </p>
                    <section className="max-h-0 translate-y-4 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <p className="my-2 text-sm">
                        A website is not only the few lines of code or beautiful
                        layout. Simple websites can be built in few few hours to
                        few days and months too.
                      </p>
                      <p className="text-sm">Madan Tamang</p>
                      <p className="text-sm">Web Developer</p>
                    </section>
                  </div>
                </div>
              </Link>
            </div>
    </section>

    <section className="w-[1180px] mx-auto px-6 md:px-0  ">
      <div className="flex flex-col sm:flex-row items-stretch">
        {/*left coln */}
        <div className="flex-1 border p-2 boder-[#555555] shadow-lg">
          <div className="w-full">
            <Image src='/assets/images/homepage/blog/corporate-email.png' width={300} height={300} alt="coorporateEmail" className="w-full rounded-t-2xl "/>
          </div>
          
          <h1 className=" text-lg font-[800] mt-2 ml-1 ">What is Cooporate/Business Email?</h1>
          <p className="text-sm mt-2 mb-3 ml-1">In todays competitive business environment Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nostrum explicabo sit culpa ducimus voluptatum nisi cum deleniti eos possimus? Repudiandae corrupti aliquam dolorem!</p>
          
          <Link href='' className="border border-[#555555] px-2 py-1 rounded-md mt-4 ml-1">
           Read More 
          </Link>
        </div>
{/*right coln */}
        <div className="flex-1">

          {/*Top */}
          <div className="">
            <div>
              <h1>Things to Keep in Business Website</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi expedita natus eaque? Quas error natus iusto dolorem sed debitis, animi ipsa tempora deserunt ratione mollitia est ullam, eum, laudantium eius saepe.</p>
               <Link href='' className="border border-[#555555] px-2 py-1 rounded-md mt-4 ml-1">
           Read More 
          </Link>
            </div>
            {/* <Image src={}/> */}
            <div>

            </div>
          </div>
          {/*Bottom */}
          <div className="">

          </div>

        </div>
      </div>
    </section>
    </>
  )
}