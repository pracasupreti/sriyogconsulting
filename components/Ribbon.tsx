interface RibbonProps {
  name: string;
  des: string;
}

export default function Ribbon({ name, des }: RibbonProps) {
  return (
    <section className="mb-[56px] bg-[#055d59] h-[160px] w-full flex justify-center items-center">
      <section className="w-[1140px] max-lg:w-[88%] max-md:w-[89%]">
        <h1 className="text-[2.1rem] font-semibold text-white">{name}</h1>
        <h4 className="text-[17px] text-[rgb(250,225,215)] max-md:text-[14px] text-justify">
          {des}
        </h4>
      </section>
    </section>
  );
}
