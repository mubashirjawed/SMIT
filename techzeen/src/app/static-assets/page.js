import Image from "next/image";

const StaticAssets = () => {
  return (
    <>
      <div>StaticAssets</div>
      <Image src={"./next.svg"} alt="assets" width={500} height={500} />
    </>
  );
};

export default StaticAssets;
