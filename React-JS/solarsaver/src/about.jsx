export function About() {
  return (
    <>
      <div className="flex items-center justify-center  bg-[#231f1b] ">
        <div className="w-[50vw] p-20">
          <span className="text-orange-500  ">About us</span>
          <p className="text-6xl text-white  pt-5 font-bold">SOLAR SAVER</p>
          <p className="text-gray-400 text-lg pt-10">
            Solar Saver is revolutionizing the solar industry by offering the
            most cost-effective solar solutions in America. We specialize in
            providing transparent, instant pricing for solar installations. With
            an innovative AI quoting engine, they ensure personalized and
            accurate estimates for each customer.
          </p>
          <p className="text-orange-500 text-lg pt-5">
            Solar Saver also offers innovative battery solutions and flexible
            financing options, making solar energy more accessible and
            affordable.
          </p>
        </div>
        <div className="w-[50vw] p-20 flex  items-center justify-center">
          <img
            src="https://solarsaver.vercel.app/assets/about-img-CpwndtbG.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
