export function Pricing() {
  return (
    <>
      <div className="w-full flex justify-center text-5xl font-bold text-white pb-20 bg-[#231f1b]">
        <h2>TRANSPARENT PRICING</h2>
      </div>

      <div className=" w-full  flex flex-wrap items-center justify-evenly bg-[#231f1b]">
        <div className="p-10 w-[30vw] rounded-xl bg-[#1a1714]">
          <div className="inline-block p-3 bg-[#eb7f25] rounded-3xl">
            <img
              src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
              alt=""
            />
          </div>
          <p className="pt-5 text-white text-2xl font-bold">
            <span className="text-orange-500">STANDARD</span> PLAN
          </p>
          <p className="pt-5 text-white ">
            Efficient and affordable solar solutions for every Household.
            Perfect for Residential use.
          </p>
          <p className="pt-5 text-white">$1.50 / watt</p>
          <button className=" mt-5 bg-[#eb7f25] text-white px-3 py-2 rounded-xl hover:bg-white hover:text-orange-500">
            Calculate Solar
          </button>
        </div>
        <div className="p-10 w-[30vw] rounded-xl bg-[#1a1714]">
          <div className="inline-block p-3 bg-[#eb7f25] rounded-3xl">
            <img
              src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
              alt=""
            />
          </div>
          <p className="pt-5 text-white text-2xl font-bold">
            <span className="text-orange-500">PREMIUM</span> PLAN
          </p>
          <p className="pt-5 text-white ">
          Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates.
          </p>
          <p className="pt-5 text-white">$1.75 / watt</p>
          <button className=" mt-5 bg-[#eb7f25] text-white px-3 py-2 rounded-xl hover:bg-white hover:text-orange-500">
            Calculate Solar
          </button>
        </div>
        <div className="p-10 w-[30vw] rounded-xl bg-[#1a1714]">
          <div className="inline-block p-3 bg-[#eb7f25] rounded-3xl">
            <img
              src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
              alt=""
            />
          </div>
          <p className="pt-5 text-white text-2xl font-bold">
            <span className="text-orange-500">COMMERCIAL</span> PLAN
          </p>
          <p className="pt-5 text-white ">
          High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions.
          </p>
          <p className="pt-5 text-white">$2.00 / watt</p>
          <button className=" mt-5 bg-[#eb7f25] text-white px-3 py-2 rounded-xl hover:bg-white hover:text-orange-500">
            Calculate Solar
          </button>
        </div>
      </div>
    </>
  );
}
