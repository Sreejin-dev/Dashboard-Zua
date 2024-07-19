import Navheader from "@/components/header";
import Headerph from "@/components/headerph";
import Main from "@/components/main";
import Image from "next/image";
import bgimage from "@/assets/zoulogo.jpeg";

export default function Home() {
  return (
    // <div className="w-svh overflow-hidden  ">
    //   <div className="w-full flex items-center relative justify-center">  
    //     <Image
    //       src={bgimage}
    //       alt="non"
    //       width={500}
    //       className="absolute -z-10  "
    //     ></Image>
    //   </div>
    //   <Navheader />
    //   <Headerph />
    //   <Main />
    // </div>


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
