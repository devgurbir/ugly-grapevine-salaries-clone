import Image from "next/image";
import LogoSrc from "../../../public/Logo.webp";

const LogoImage = () => (
  <Image
    src={LogoSrc}
    alt="logo"
    width={512}
    height={249}
    sizes="(max-width: 640px) 40px, 50px"
    className="h-[40px] w-fit md:h-[50px]"
    style={{ color: "transparent" }}
  />
);

export default LogoImage;
