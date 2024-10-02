export function Banner() {
  return (
    <>
      <div className="w-full bg-[#231f1b] flex flex-col items-center">
        <h1 className="text-white font-bold text-7xl pt-32">
          <span className="text-orange-500">Does Your Home </span>Need Quality
        </h1>
        <h1 className="text-white font-bold text-7xl ">
          Solar Panel Installation?
        </h1>
        <p className="pt-10 text-white text-xl">
          Trust our experienced solar power experts to customize the perfect
          solution for your home.
        </p>
        <div className="w-[20vw] pt-10 flex  items-center justify-center ">
          <button className="bg-[#eb7f25] text-white px-3 py-2 rounded-xl hover:bg-white hover:text-orange-500">
            Calculate Solar
          </button>
        </div>
      </div>
      <div className="w-full bg-[#231f1b] flex flex-col items-center">
        <img className="bg-no-repeat" src="https://solarsaver.vercel.app/assets/cover-C4PYW05n.webp" alt="" />
      </div>
    </>
  );
}
