"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";
const Pitch = () => {
  useEffect(() => {
    document.title = "Pitch Decki | SRIYOG Consulting";
  }, []);
  return (
    <>
      <Ribbon name="Pitch Deck" des="" />
      <section className="lg:w-full lg:pt-[60px] md:pt-0 ">
        {/* form field of request quote */}
        <div className="bg-[#fafafa] pb-12">
          <div className="max-w-[1180px] mx-auto my-0 lg:max-w-[920px] md:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSqzjiZR8-kGSStsO26UPbueZ3vZdYrTZ_maQxw5TeQaazVkZQHot9vgOFgbPX_KOtBQfb6JSdFRdLq/embed?start=false&loop=false&delayms=3000"
                width="100%"
                height="569"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pitch;
