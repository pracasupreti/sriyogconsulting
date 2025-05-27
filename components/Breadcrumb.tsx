  import React from 'react'

  interface BreadcrumbPage{
    name:string,
    desc:string
  }
const Breadcrumb: React.FC<BreadcrumbPage> = ({ name, desc }) => {
  return (
    <>
      <section className="mb-[56px] bg-[#0D5D59] h-[160px] w-full flex justify-center items-center md:px-4">
        <section className="w-[1180px] max-lg:w-[88%] max-md:w-[89%]">
          <div className="">
            <div className=" ">
              <h1 className="text-[2.1rem] font-semibold  text-white">{name}</h1>
              <h4 className="text-[17px] text-[rgb(250,225,215)] max-md:text-[14px] text-justify">
                {desc}
              </h4>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Breadcrumb