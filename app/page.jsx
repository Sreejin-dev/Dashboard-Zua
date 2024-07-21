import Navheader from "@/components/header";
import Headerph from "@/components/headerph";
import Main from "@/components/main";
import Image from "next/image";
import bgimage from "@/assets/zoulogo.jpeg";

export default function Home() {
  return (
 

    <div className="h-full overflow-hidden flex items-center justify-center relative">
  <Image
    src={bgimage}
    alt="non"
    width={500}
    className="fixed rounded-full opacity-10  z-0"
  />
  <div className="z-10">
    <Navheader />
    <Headerph />
    <Main />
  </div>
</div>

  );
}
