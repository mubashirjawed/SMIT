// import logo from "./assets/logo-solar.png";

export function Navbar() {
  return (
    <>
      <div className="w-[100vw] h-[8vh] bg-[#231f1b] flex">
        <div className="  w-[10vw] flex items-center px-6">
          <img
            src="https://solarsaver.vercel.app/assets/logo-CeUqb7XY.png"
            alt="logo"
          />
        </div>
        <div className=" px-[20vw] w-[70vw] list-none flex justify-around items-center text-white text-sm">
          <li>Pricing</li>
          <li>About</li>
          <li>Tools</li>
          <li>How It Works</li>
          <li>Testimonials</li>
          <li>FAQ </li>
        </div>
        <div className="w-[20vw] flex  items-center justify-center">
          <button className="bg-[#eb7f25] text-white px-3 py-2 rounded-lg hover:bg-white hover:text-orange-500">
            Calculate Solar
          </button>
        </div>
      </div>
    </>
  );
}
