"use client"
import { useEffect } from "react";
import Ribbon from "@/components/Ribbon";

const Internship = () => {
  useEffect(() => {
    document.title = "Imternship | SRIYOG Consulting";
  }, []);
  return (
    <>
      <Ribbon name="Internship | SRIYOG" des="" />
      <section className="lg:w-full md:pt-[10px]">
        {/* form field of request quote */}
        <div className="bg-[#fafafa] py-12">
          <div className="lg:max-w-[1180px] mx-auto my-0 md:max-w-[920px] sm:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagBvKYaiRmZLtsSn/form"
                width="100%"
                height="3125"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;
