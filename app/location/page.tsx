import React from "react";

const page = () => {
  return (
    <>
      <section className="lg:w-[1180px] mx-auto mb-[45px]">
        <div className="py-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
            width="100%"
            height="700"
            style={{ border: "0" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
