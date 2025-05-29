"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";

const Career = () => {
  useEffect(() => {
    document.title = "Career | SRIYOG Consulting";
  }, []);
  return (
    <>
      <Ribbon name="Career" des="" />
      <section className="lg:w-full md:pt-[52px]">
        {/* form field of request quote */}
        <div className="bg-[#fafafa] py-12">
          <div className="max-w-[1180px] mx-auto my-0 lg:max-w-[920px] md:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagRhDtt6qX4O0LZ7/form"
                width="100%"
                height="1500"
                style={{
                  backgroundColor: "transparent",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
