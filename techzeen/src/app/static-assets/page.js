import Image from "next/image";

const StaticAssets = () => {
  return (
    <>
      <div className="text-5xl">StaticAssets</div>
      <Image src={"./next.svg"} alt="assets" width={200} height={200} />
    </>
  );
};

export default StaticAssets;
