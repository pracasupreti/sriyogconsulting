import Ribbon from "@/components/Ribbon";
import testimonialsData from "@/public/data/testomonial-data";
import Image from "next/image";
export default function Testimonials(){
  return(
    <>
    <Ribbon name='Testimonials' des=''/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1180px] mx-auto">
      {
        testimonialsData.map((data,index)=>{
          return(
            <div key={index} className="border-[#0D5D59] border-top-8 w-full sm:max-w-[370px] ">
              <div className="bg-white shadow-xl flex flex-col items-center px-8">
                <Image src={data.image} width={100} height={100} alt={data.title}/>

                <h1>{data.title}</h1>
                <p>{data.desc}</p>

                <div>
                  <h1>{data.name}</h1>
                  <p>{data.stack}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}