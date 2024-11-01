import Image from "next/image";

const StaticAssets = () => {
  return (
    <>
      <div className="text-5xl bg-slate-300">StaticAssets</div>
      <Image className="p-6" src={"./next.svg"} alt="assets" width={200} height={200} />
    </>
  );
};

export default StaticAssets;
